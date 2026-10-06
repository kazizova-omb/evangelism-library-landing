// Runtime settings from env vars (see .env.example). PUBLIC_* values are inlined
// at build time, so this module is safe to import from client scripts.
const env = import.meta.env;
const str = (v: string | undefined) => (v ?? '').trim();

/** Cloudflare's public test key: always passes, shows a visible widget. */
const TURNSTILE_TEST_KEY = '1x00000000000000000000AA';

export const config = {
  /** One Voice 27 updates signup endpoint (POST JSON). Empty = mock success (preview). */
  subscribeUrl: str(env.PUBLIC_SUBSCRIBE_URL),
  /** folder the kit ZIPs are served from ("<url>/<file id>.zip"). Empty = "Available soon". */
  kitUrl: str(env.PUBLIC_KIT_URL).replace(/\/$/, ''),
  /** until the kit is hosted, the main CTAs point to the Daniel 2 demo instead of the (empty) download block */
  get kitReady() { return this.kitUrl !== '' },
  turnstileSiteKey: str(env.PUBLIC_TURNSTILE_SITE_KEY) || TURNSTILE_TEST_KEY,
  ga4Id: str(env.PUBLIC_GA4_ID),
  demoUrl: str(env.PUBLIC_DEMO_URL) || '#',
  /** the demo link is a Google Slides deck to open (until the ZIP is ready), not a file to download */
  demoIsSlides: /docs\.google\.com\/presentation/.test(str(env.PUBLIC_DEMO_URL)),
  trailerYoutubeId: str(env.PUBLIC_TRAILER_YOUTUBE_ID),
  /** self-hosted trailer file, used when no YouTube id is set */
  trailerVideoSrc: str(env.PUBLIC_TRAILER_VIDEO_SRC) || '/media/trailer.mp4',
  contactEmail: str(env.PUBLIC_CONTACT_EMAIL) || 'hello@revelationresource.org',
  translateEmail: str(env.PUBLIC_TRANSLATE_EMAIL) || 'ministerialassociation@gc.adventist.org',
  supportEmail: str(env.PUBLIC_SUPPORT_EMAIL) || 'support@revelationresource.org',
  showPlaceholderTags: str(env.PUBLIC_SHOW_PLACEHOLDER_TAGS) === 'true',
  /** client preview build: noindex everywhere */
  preview: str(env.PUBLIC_PREVIEW) === 'true',
};
