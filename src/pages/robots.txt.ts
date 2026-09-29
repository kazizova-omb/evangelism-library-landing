import type { APIRoute } from 'astro';
import { config } from '../config';

export const GET: APIRoute = ({ site }) =>
  new Response(config.preview ? 'User-agent: *\nDisallow: /\n' :
    // Search engines and AI crawlers are welcome; /llms.txt has a plain-text summary.
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
