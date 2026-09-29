// GET /api/email-preview/<id>: shows an email stored in test mode (never a live one).
import type { Env } from '../../_lib/env.ts';

export const onRequestGet: PagesFunction<Env> = async ({ params, env }) => {
  const row = await env.DB.prepare("SELECT html FROM emails WHERE id = ? AND mode = 'test'").bind(String(params.id)).first<{ html: string }>();
  if (!row) return new Response('Not found', { status: 404 });
  return new Response(row.html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  });
};
