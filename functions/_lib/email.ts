// The automatic email sent after the form: thanks, the download link, a contact
// for questions and short terms of use. Table layout with inline styles, so it
// renders the same in Gmail, Outlook and Apple Mail. Copy lives in the locale files.
import { copy } from './copy.ts';
import { escapeHtml, firstName } from './util.ts';

export interface EmailInput {
  lang: string;
  name: string;
  link: string;        // personal download link
  days: number;        // 0 = link never expires
  support: string;     // support email
  siteUrl: string;     // e.g. https://revelationresource.org/
  termsUrl: string;
}

const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (m, k: string) => vars[k] ?? m);

export function renderEmail(i: EmailInput) {
  const c = copy(i.lang);
  const e = c.email;
  const name = firstName(i.name) || i.name;
  const site = i.siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const expiry = i.days > 0 ? ` ${fill(e.expiry, { days: String(i.days) })}` : '';

  const navy = '#1F2160';
  const muted = '#5E607F';
  const P = (html: string, style = '') =>
    `<p style="margin:0 0 16px;font:16px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${navy};${style}">${html}</p>`;

  const html = `<!doctype html>
<html lang="${escapeHtml(c.locale.htmlLang)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><title>${escapeHtml(e.subject)}</title></head>
<body style="margin:0;padding:0;background:#F3F2EE">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(e.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F2EE"><tr><td align="center" style="padding:32px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:10px;overflow:hidden">
    <tr><td style="background:${navy};padding:22px 32px;font:700 15px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#FFFFFF">${escapeHtml(c.brand)}</td></tr>
    <tr><td style="padding:32px 32px 8px">
      ${P(escapeHtml(fill(e.greeting, { name })))}
      ${P(escapeHtml(e.thanks))}
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 20px"><tr><td style="border-radius:8px;background:${navy}">
        <a href="${escapeHtml(i.link)}" style="display:inline-block;padding:15px 28px;font:700 15px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#FFFFFF;text-decoration:none;border-radius:8px">${escapeHtml(e.cta)}</a>
      </td></tr></table>
      ${P(escapeHtml(e.personal + expiry), `font-size:14px;color:${muted}`)}
      ${P(`${escapeHtml(e.fallback)}<br><a href="${escapeHtml(i.link)}" style="color:#0A7383;word-break:break-all">${escapeHtml(i.link)}</a>`, `font-size:13px;color:${muted}`)}
    </td></tr>
    <tr><td style="padding:8px 32px 8px">
      <div style="border-top:1px solid #E6E5EF;padding-top:20px"></div>
      ${P(`<strong>${escapeHtml(e.termsTitle)}</strong>`, 'margin-bottom:8px;font-size:15px')}
      <ul style="margin:0 0 12px;padding-left:20px;font:14px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${navy}">
        ${e.terms.map((t) => `<li style="margin:0 0 4px">${escapeHtml(t)}</li>`).join('')}
      </ul>
      ${P(`<a href="${escapeHtml(i.termsUrl)}" style="color:#0A7383">${escapeHtml(e.termsLink)}</a>`, 'font-size:14px')}
    </td></tr>
    <tr><td style="padding:8px 32px 28px">
      ${P(fill(escapeHtml(e.questions), { support: `<a href="mailto:${escapeHtml(i.support)}" style="color:#0A7383">${escapeHtml(i.support)}</a>` }))}
      ${P(`${escapeHtml(e.signoff)}<br>${escapeHtml(e.team)}`, 'margin:0')}
    </td></tr>
  </table>
  <p style="max-width:560px;margin:16px auto 0;font:12px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#8A8BA3">${escapeHtml(fill(e.footer, { site }))}</p>
</td></tr></table>
</body></html>`;

  const text = [
    fill(e.greeting, { name }),
    '',
    e.thanks,
    '',
    `${e.cta}: ${i.link}`,
    e.personal + expiry,
    '',
    e.termsTitle,
    ...e.terms.map((t) => `- ${t}`),
    `${e.termsLink}: ${i.termsUrl}`,
    '',
    fill(e.questions, { support: i.support }),
    '',
    e.signoff,
    e.team,
    '',
    fill(e.footer, { site }),
  ].join('\n').replace(/ /g, ' ');

  return { subject: e.subject.replace(/ /g, ' '), html, text };
}
