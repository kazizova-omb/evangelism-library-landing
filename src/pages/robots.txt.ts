import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(
    // Search engines and AI crawlers are welcome; /llms.txt has a plain-text summary.
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
