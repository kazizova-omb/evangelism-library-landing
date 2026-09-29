// GET /api/admin/leads.csv with header "Authorization: Bearer <ADMIN_TOKEN>" (or ?key=<ADMIN_TOKEN>):
// all requests for the kit as CSV (opens in Excel / Google Sheets). Disabled when ADMIN_TOKEN is not set.
import type { Env } from '../../_lib/env.ts';

const COLS = ['created_at', 'updated_at', 'name', 'email', 'country', 'organization', 'division', 'conference', 'comment', 'lang',
  'submissions', 'source', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'downloads'] as const;

const cell = (v: unknown) => {
  const s = v == null ? '' : String(v);
  // quote everything; neutralise formulas for spreadsheet apps
  return `"${(/^[=+\-@]/.test(s) ? `'${s}` : s).replace(/"/g, '""')}"`;
};

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const key = request.headers.get('Authorization')?.replace(/^Bearer\s+/i, '') ?? url.searchParams.get('key');
  if (!env.ADMIN_TOKEN || key !== env.ADMIN_TOKEN) return new Response('Not found', { status: 404 });

  const { results } = await env.DB.prepare(
    `SELECT l.*, (SELECT COUNT(*) FROM downloads d JOIN tokens t ON t.token = d.token WHERE t.lead_id = l.id) AS downloads
     FROM leads l ORDER BY l.created_at DESC`,
  ).all<Record<string, unknown>>();

  const csv = [COLS.join(','), ...results.map((r) => COLS.map((c) => cell(r[c])).join(','))].join('\r\n');
  return new Response('﻿' + csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
};
