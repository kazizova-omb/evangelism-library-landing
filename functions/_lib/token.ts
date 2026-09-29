import type { Env } from './env.ts';
import { now } from './util.ts';

export interface TokenLead { token: string; lead_id: number; name: string; lang: string; email: string }

/** The lead behind a valid (existing, not expired) token, or null. */
export async function findToken(env: Env, token: string | null): Promise<TokenLead | null> {
  if (!token || token.length < 20 || token.length > 100) return null;
  return env.DB.prepare(
    `SELECT t.token, t.lead_id, l.name, l.lang, l.email FROM tokens t JOIN leads l ON l.id = t.lead_id
     WHERE t.token = ? AND (t.expires_at IS NULL OR t.expires_at > ?)`,
  ).bind(token, now()).first<TokenLead>();
}
