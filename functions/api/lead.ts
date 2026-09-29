// POST /api/lead: the "Get the full kit" form.
// Validates, checks Turnstile, saves or updates the lead, reuses or creates a personal
// download token and sends (live) or stores (test) the email with the link.
import type { Env } from '../_lib/env.ts';
import { json, now, newToken, clientIp, localePath } from '../_lib/util.ts';
import { renderEmail } from '../_lib/email.ts';
import { isLang } from '../_lib/copy.ts';
import { isValidEmail } from '../../src/lib/email.ts';

const TURNSTILE_TEST_SECRET = '1x0000000000000000000000000000000AA'; // Cloudflare's always-pass test secret
const MAX_ATTEMPTS_PER_10_MIN = 6;

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const lead = {
    name: str(body.name, 120),
    email: str(body.email, 254).toLowerCase(),
    country: str(body.country, 80),
    organization: str(body.organization, 160),
    division: str(body.division, 80),
    conference: str(body.conference, 120),
    comment: str(body.comment, 2000),
    lang: isLang(body.lang) ? (body.lang as string) : 'en',
    source: str(body.source, 40) || 'landing',
    utm_source: str(body.utm_source, 120), utm_medium: str(body.utm_medium, 120), utm_campaign: str(body.utm_campaign, 120),
    utm_content: str(body.utm_content, 120), utm_term: str(body.utm_term, 120),
  };

  const missing = (['name', 'email', 'country', 'organization'] as const).filter((k) => !lead[k]);
  if (missing.length || body.consent !== true) return json({ ok: false, error: 'missing_fields', fields: missing }, 400);
  if (!isValidEmail(lead.email)) return json({ ok: false, error: 'invalid_email' }, 400);

  // rate limit per IP
  const ip = clientIp(request);
  const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
  const { n } = (await env.DB.prepare('SELECT COUNT(*) AS n FROM attempts WHERE ip = ? AND at > ?').bind(ip, since).first<{ n: number }>()) ?? { n: 0 };
  if (n >= MAX_ATTEMPTS_PER_10_MIN) return json({ ok: false, error: 'rate_limited' }, 429);
  await env.DB.prepare('INSERT INTO attempts (ip, at) VALUES (?, ?)').bind(ip, now()).run();

  // Turnstile (test secret when none is configured)
  const token = str(body.turnstileToken, 4096);
  if (!token) return json({ ok: false, error: 'turnstile_missing' }, 400);
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret: env.TURNSTILE_SECRET || TURNSTILE_TEST_SECRET, response: token, remoteip: ip }),
  }).then((r) => r.json<{ success: boolean }>()).catch(() => ({ success: false }));
  if (!verify.success) return json({ ok: false, error: 'turnstile_failed' }, 400);

  // save or update the lead (the same email can request the link again)
  const t = now();
  const row = await env.DB.prepare(
    `INSERT INTO leads (email, name, country, organization, division, conference, comment, lang, source,
       utm_source, utm_medium, utm_campaign, utm_content, utm_term, created_at, updated_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?15)
     ON CONFLICT(email) DO UPDATE SET name = ?2, country = ?3, organization = ?4, division = ?5, conference = ?6,
       comment = CASE WHEN ?7 <> '' THEN ?7 ELSE comment END, lang = ?8, submissions = submissions + 1, updated_at = ?15
     RETURNING id`,
  ).bind(lead.email, lead.name, lead.country, lead.organization, lead.division, lead.conference, lead.comment, lead.lang, lead.source,
    lead.utm_source, lead.utm_medium, lead.utm_campaign, lead.utm_content, lead.utm_term, t).first<{ id: number }>();
  if (!row) return json({ ok: false, error: 'db' }, 500);

  // reuse a valid token, otherwise create one
  const days = Number(env.LINK_TTL_DAYS || 0);
  let personal = (await env.DB.prepare(
    'SELECT token FROM tokens WHERE lead_id = ? AND (expires_at IS NULL OR expires_at > ?) ORDER BY created_at DESC LIMIT 1',
  ).bind(row.id, t).first<{ token: string }>())?.token;
  if (!personal) {
    personal = newToken();
    const expires = days > 0 ? new Date(Date.now() + days * 86400000).toISOString() : null;
    await env.DB.prepare('INSERT INTO tokens (token, lead_id, created_at, expires_at) VALUES (?, ?, ?, ?)').bind(personal, row.id, t, expires).run();
  }

  const origin = new URL(request.url).origin;
  const link = `${origin}${localePath(lead.lang, '/download')}?t=${encodeURIComponent(personal)}`;
  const mail = renderEmail({
    lang: lead.lang,
    name: lead.name,
    link,
    days,
    support: env.SUPPORT_EMAIL || 'support@revelationresource.org',
    siteUrl: `${origin}/`,
    termsUrl: `${origin}${localePath(lead.lang, '/terms')}`,
  });

  const live = env.EMAIL_MODE === 'live' && !!env.RESEND_API_KEY;
  let status = 'stored';
  if (live) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.EMAIL_FROM || 'Revelation Media Resources <noreply@revelationresource.org>',
        to: [lead.email],
        reply_to: env.SUPPORT_EMAIL || undefined,
        subject: mail.subject,
        html: mail.html,
        text: mail.text,
      }),
    }).catch((e: Error) => ({ ok: false, status: 0, text: async () => e.message }) as unknown as Response);
    status = res.ok ? 'sent' : `failed: ${res.status} ${(await res.text()).slice(0, 200)}`;
  }

  const emailId = crypto.randomUUID();
  await env.DB.prepare('INSERT INTO emails (id, lead_id, to_email, subject, html, text, mode, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(emailId, row.id, lead.email, mail.subject, mail.html, mail.text, live ? 'live' : 'test', status, t).run();

  if (live && status !== 'sent') return json({ ok: false, error: 'email_failed' }, 502);
  // test mode: the page can show a link to the stored email, so the whole flow can be tried
  return json({ ok: true, ...(live ? {} : { previewUrl: `/api/email-preview/${emailId}` }) });
};

export const onRequest: PagesFunction<Env> = () => json({ ok: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' });
