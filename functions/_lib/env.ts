// Bindings and settings for the Pages Functions (see wrangler.toml and README "Email and downloads").
export interface Env {
  /** D1 database with leads, tokens, downloads and emails (migrations/). */
  DB: D1Database;
  /** Optional R2 bucket holding the kit files (keys in _lib/kit.ts). */
  KIT?: R2Bucket;
  /** 'test': emails are stored and viewable at /api/email-preview/<id>, nothing is sent.
   *  'live': emails are sent through Resend (RESEND_API_KEY required). */
  EMAIL_MODE?: string;
  /** Sender, e.g. "Revelation Media Resources <noreply@revelationresource.org>". */
  EMAIL_FROM?: string;
  SUPPORT_EMAIL?: string;
  /** Days a download link stays valid; empty or 0 = never expires. */
  LINK_TTL_DAYS?: string;
  /** Secrets (wrangler pages secret put ...) */
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET?: string;
  ADMIN_TOKEN?: string;
}

export type Ctx = EventContext<Env, string, Record<string, unknown>>;
