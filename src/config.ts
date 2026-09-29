// Runtime settings from env vars (see .env.example). PUBLIC_* values are inlined
// at build time, so this module is safe to import from client scripts.
const env = import.meta.env;
const str = (v: string | undefined) => (v ?? '').trim();

/** Cloudflare's public test key: always passes, shows a visible widget. */
const TURNSTILE_TEST_KEY = '1x00000000000000000000AA';

export const config = {
  apiUrl: str(env.PUBLIC_API_URL),
  /** empty = library link hidden */
  libraryUrl: str(env.PUBLIC_LIBRARY_URL),
  turnstileSiteKey: str(env.PUBLIC_TURNSTILE_SITE_KEY) || TURNSTILE_TEST_KEY,
  ga4Id: str(env.PUBLIC_GA4_ID),
  demoUrl: str(env.PUBLIC_DEMO_URL) || '#',
  trailerYoutubeId: str(env.PUBLIC_TRAILER_YOUTUBE_ID),
  contactEmail: str(env.PUBLIC_CONTACT_EMAIL) || 'hello@revelationresource.org',
  translateEmail: str(env.PUBLIC_TRANSLATE_EMAIL) || 'translate@revelationresource.org',
  supportEmail: str(env.PUBLIC_SUPPORT_EMAIL) || 'support@revelationresource.org',
  showPlaceholderTags: str(env.PUBLIC_SHOW_PLACEHOLDER_TAGS) === 'true',
  /** client preview build: noindex everywhere + design option switcher */
  preview: str(env.PUBLIC_PREVIEW) === 'true',
};
