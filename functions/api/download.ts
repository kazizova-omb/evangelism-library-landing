// GET /api/download?t=<token>&lang=en: the file list for a personal link (used by /download).
import type { Env } from '../_lib/env.ts';
import { json, firstName } from '../_lib/util.ts';
import { findToken } from '../_lib/token.ts';
import { KIT_FILES } from '../_lib/kit.ts';

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const t = url.searchParams.get('t');
  const lang = url.searchParams.get('lang') === 'es' ? 'es' : 'en';
  const lead = await findToken(env, t);
  if (!lead) return json({ ok: false, error: 'invalid_link' }, 404);

  const files = KIT_FILES.map((f) => ({
    id: f.id,
    label: f.label[lang],
    size: f.size,
    url: `/api/file?t=${encodeURIComponent(lead.token)}&f=${encodeURIComponent(f.id)}`,
  }));
  // placeholders are served while the kit is not uploaded yet
  const test = !env.KIT && !KIT_FILES.some((f) => f.url);
  return json({ ok: true, name: firstName(lead.name), files, test });
};
