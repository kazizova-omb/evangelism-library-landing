import { defaultLocale } from '../../src/i18n/config.mjs';

export const json = (data: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers },
  });

export const now = () => new Date().toISOString();

/** 32 random bytes, base64url: unguessable personal token. */
export function newToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  let bin = '';
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export const clientIp = (req: Request) => req.headers.get('CF-Connecting-IP') ?? req.headers.get('x-forwarded-for') ?? 'unknown';

/** "/download" for the default language, "/es/download" otherwise. */
export const localePath = (lang: string, path: string) => (lang === defaultLocale ? path : `/${lang}${path}`);

export const firstName = (name: string) => name.trim().split(/\s+/)[0] ?? '';
