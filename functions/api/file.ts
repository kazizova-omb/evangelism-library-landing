// GET /api/file?t=<token>&f=<file id>: one kit file for a valid personal link.
// Streams from R2 (KIT binding), redirects to an external url, or returns a
// placeholder while the kit is not uploaded. Every download is logged.
import type { Env } from '../_lib/env.ts';
import { json, now } from '../_lib/util.ts';
import { findToken } from '../_lib/token.ts';
import { KIT_FILES } from '../_lib/kit.ts';

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const lead = await findToken(env, url.searchParams.get('t'));
  const file = KIT_FILES.find((f) => f.id === url.searchParams.get('f'));
  if (!lead || !file) return json({ ok: false, error: 'invalid_link' }, 404);

  await env.DB.prepare('INSERT INTO downloads (token, file_id, at) VALUES (?, ?, ?)').bind(lead.token, file.id, now()).run();

  if (env.KIT && file.r2Key) {
    const obj = await env.KIT.get(file.r2Key);
    if (obj) {
      const name = file.r2Key.split('/').pop() ?? file.id;
      return new Response(obj.body, {
        headers: {
          'Content-Type': obj.httpMetadata?.contentType ?? 'application/octet-stream',
          'Content-Length': String(obj.size),
          'Content-Disposition': `attachment; filename="${name}"`,
          'Cache-Control': 'private, no-store',
        },
      });
    }
  }
  if (file.url) return Response.redirect(file.url, 302);

  const text = `Revelation Media Resources\n\nPlaceholder for: ${file.label.en}\nThe real file will be available here once the kit is uploaded.\n`;
  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': `attachment; filename="${file.id}-placeholder.txt"`,
      'Cache-Control': 'private, no-store',
    },
  });
};
