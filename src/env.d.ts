/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_DEMO_URL?: string;
  readonly PUBLIC_PRESENTATION_URLS?: string;
  readonly PUBLIC_SHOW_DRAFTS?: string;
  readonly PUBLIC_BASE_PATH?: string;
  readonly PUBLIC_TRAILER_YOUTUBE_ID?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_TRANSLATE_EMAIL?: string;
  readonly PUBLIC_SUPPORT_EMAIL?: string;
  readonly PUBLIC_SHOW_PLACEHOLDER_TAGS?: string;
  readonly PUBLIC_PREVIEW?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
}
