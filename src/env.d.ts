/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_API_URL?: string;
  readonly PUBLIC_LIBRARY_URL?: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_DEMO_URL?: string;
  readonly PUBLIC_TRAILER_YOUTUBE_ID?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_TRANSLATE_EMAIL?: string;
  readonly PUBLIC_SUPPORT_EMAIL?: string;
  readonly PUBLIC_SHOW_PLACEHOLDER_TAGS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
  turnstile?: {
    render: (el: HTMLElement, opts: Record<string, unknown>) => string;
    getResponse: (id: string) => string | undefined;
    reset: (id: string) => void;
  };
}
