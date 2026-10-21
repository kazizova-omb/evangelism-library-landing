// Runtime settings from env vars (see .env.example). PUBLIC_* values are inlined
// at build time, so this module is safe to import from client scripts.
const env = import.meta.env;
const str = (v: string | undefined) => (v ?? '').trim();


/** Google Slides view link -> direct PowerPoint download of the same deck */
const slidesExport = (url: string) => url.replace(/\/(edit|view|preview)[^/]*$/, '') + '/export/pptx';

/** Daniel 2 deck (view link), used until the demo ZIP is hosted */
const DEMO_URL = 'https://docs.google.com/presentation/d/1qQWVP-OLH7YOuxll7rzfQVDOEtVoTCZ8DqUacyVn7uY/edit?usp=sharing';

export const config = {
  ga4Id: str(env.PUBLIC_GA4_ID),
  /** Daniel 2 demo. Google Slides for now; switch to the ZIP URL once it is ready (env overrides). */
  demoUrl: str(env.PUBLIC_DEMO_URL) || DEMO_URL,
  /** the demo link is a Google Slides deck to open (until the ZIP is ready), not a file to download */
  get demoIsSlides() { return /docs\.google\.com\/presentation/.test(this.demoUrl) },
  /** Download link of each of the nine presentations (PUBLIC_PRESENTATION_URLS, comma separated, in order;
      an empty slot = "Coming November 2026"). Presentation 1 falls back to the Daniel 2 demo: a Google Slides
      deck is offered as its PowerPoint export, a ZIP as is. */
  get presentationUrls(): string[] {
    const list = str(env.PUBLIC_PRESENTATION_URLS).split(',').map((u) => u.trim());
    const urls = Array.from({ length: 9 }, (_, i) => list[i] ?? '');
    if (!urls[0] && this.demoUrl !== '#') urls[0] = this.demoIsSlides ? slidesExport(this.demoUrl) : this.demoUrl;
    return urls;
  },
  /** sections still waiting for client copy (the nine-presentation list). Off on the main preview,
      on for branch previews and local dev with PUBLIC_SHOW_DRAFTS=true */
  showDrafts: str(env.PUBLIC_SHOW_DRAFTS) === 'true',
  trailerYoutubeId: str(env.PUBLIC_TRAILER_YOUTUBE_ID),
  /** self-hosted trailer file, used when no YouTube id is set */
  trailerVideoSrc: str(env.PUBLIC_TRAILER_VIDEO_SRC) || `${import.meta.env.BASE_URL.replace(/\/$/, '')}/media/trailer.mp4`,
  contactEmail: str(env.PUBLIC_CONTACT_EMAIL) || 'hello@revelationresource.org',
  translateEmail: str(env.PUBLIC_TRANSLATE_EMAIL) || 'ministerialassociation@gc.adventist.org',
  supportEmail: str(env.PUBLIC_SUPPORT_EMAIL) || 'support@revelationresource.org',
  showPlaceholderTags: str(env.PUBLIC_SHOW_PLACEHOLDER_TAGS) === 'true',
  /** client preview build: noindex everywhere */
  preview: str(env.PUBLIC_PREVIEW) === 'true',
};
