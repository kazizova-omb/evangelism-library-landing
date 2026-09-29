# Evangelistic Series Library: landing page

Production build of the approved prototype (`prototype/index.html`, kept untouched as the visual reference).
Static site on [Astro](https://astro.build), no UI framework, plain CSS, a few small vanilla scripts.

## Setup

```sh
npm install
cp .env.example .env     # then fill in the values you have
npm run dev              # http://localhost:4321
npm run build            # static output in dist/
npm run preview          # serve dist/ locally
npm run check            # type and template check
```

Node 22.12+ (required by Astro 7; tested on Node 24).

## Environment variables

All are public (they end up in the browser bundle). Set them in `.env` locally and in
Cloudflare Pages → Settings → Environment variables for deploys. They are read at **build time**,
so redeploy after changing one.

| Variable | Purpose | When empty |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | Canonical URL, Open Graph URLs, sitemap, robots.txt | `https://example.org` |
| `PUBLIC_API_URL` | Form endpoint (POST JSON) | Form mocks success after 900 ms |
| `PUBLIC_LIBRARY_URL` | "Log in" and "Go to the library" links | `#` |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key | Cloudflare test key (always passes) |
| `PUBLIC_GA4_ID` | Google Analytics 4 measurement ID | No GA, no cookie banner |
| `PUBLIC_DEMO_URL` | Direct link to the demo ZIP | `#` |
| `PUBLIC_TRAILER_YOUTUBE_ID` | YouTube ID of the trailer | Modal shows placeholder text |
| `PUBLIC_CONTACT_EMAIL` | Contact links, legal pages, JSON-LD | `hello@example.org` |
| `PUBLIC_TRANSLATE_EMAIL` | "Volunteer as a translator" mailto | `translate@example.org` |
| `PUBLIC_SHOW_PLACEHOLDER_TAGS` | Show the dashed "placeholder" tags (`true` / `false`) | Hidden |

Set `PUBLIC_SHOW_PLACEHOLDER_TAGS=false` for production.

## Replacing content

Every piece of copy lives in **`src/content/site.ts`**: headlines, stats, gallery captions, journey steps,
features, FAQ, form labels and errors, divisions, countries, languages, footer, legal page text.
Edit the file and rebuild; no markup changes are needed.

- `*word*` renders the gold italic accent in headlines, `**words**` renders bold (hero lead).
- `{terms}`, `{privacy}`, `{email}` in some strings are replaced with links or values; keep them.
- Lists (stats, steps, features, FAQ, languages) can grow or shrink. The gallery has five fixed tiles
  because the grid layout is designed around them.
- Design rules: no decorative lines next to eyebrow labels, no em dashes in copy, and no changes to
  colors, fonts or section order without approval.

## Images

The prototype's CSS-drawn scenes are the fallback. To use a real image, drop a file named after its
slot into **`src/assets/slots/`** (`.jpg`, `.png`, `.webp` or `.avif`) and rebuild:

`hero`, `trailer`, `gallery-slide`, `gallery-flyer`, `gallery-art`, `gallery-video`, `gallery-social`,
`demo-flyer`, `demo-slide`, `demo-image`, `team`, `og`.

The build generates AVIF and WebP in several widths, sets `width`/`height`, lazy-loads everything
below the fold and loads the hero with high priority. The matching placeholder tag disappears.
Recommended sizes are in [`src/assets/slots/README.md`](src/assets/slots/README.md); alt texts are in `site.ts`.
Without an `og` image, `public/og-default.jpg` (rendered from the hero) is used for link previews.

## Form

"Get the full kit" posts JSON to `PUBLIC_API_URL`:

```json
{
  "name": "", "email": "", "country": "", "organization": "",
  "division": "", "conference": "", "comment": "",
  "consent": true, "turnstileToken": "", "source": "landing",
  "utm_source": "", "utm_medium": "", "utm_campaign": "", "utm_content": "", "utm_term": ""
}
```

- Any 2xx response counts as success (an email that already exists should also return 2xx).
  Anything else, a network error or a 15 s timeout shows the error message above the fields.
- UTM parameters are read from the page URL on load. Nothing is stored on the client.
- The endpoint must allow CORS from the site origin (`POST`, `Content-Type: application/json`).
- Turnstile loads only when the form comes close to the viewport. On screens under ~392px it uses
  the compact widget so it fits the card.

> **TODO (backend):** verify `turnstileToken` server-side with Cloudflare's `siteverify` API
> using the secret key. The landing page only collects the token.

### Testing against a local stub

```sh
npm run stub                         # http://localhost:8787, logs each request, answers 200
STUB_STATUS=500 npm run stub         # simulate a server error
STUB_DELAY=3000 npm run stub         # slow response to see the loading state
PUBLIC_API_URL=http://localhost:8787/lead npm run dev
```

## Analytics and consent

With `PUBLIC_GA4_ID` set, a cookie banner (Accept / Decline) appears on the first visit and the choice
is remembered in `localStorage`. Google Consent Mode v2 defaults are set to denied in `<head>`.
`gtag.js` is only loaded after the visitor accepts (the "basic" Consent Mode setup), and events are
only sent with consent. "Cookie settings" in the footer reopens the banner.

Events: `cta_click` (`location`), `demo_download`, `trailer_play`, `login_click` (`location`),
`faq_open` (`question`), `translate_click`, `form_submit` (after a successful response only).
Add `data-track="event_name"` (and optionally `data-track-location`) to any link or button to track it.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub or GitLab.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git, pick the repository.
3. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Add the environment variables above (Production and Preview), including `NODE_VERSION=22` (Astro 7 needs 22.12+).
5. Deploy, then add the custom domain under the project's Custom domains tab and set `PUBLIC_SITE_URL` to it.

`public/_headers` sets security headers and long-term caching for hashed assets. `404.html` is served
automatically for unknown paths.

## Project structure

```
prototype/            approved single-file prototype (reference, do not edit)
screenshots/          screenshots of the approved state
public/               favicon, default OG image, Cloudflare _headers
scripts/stub-server.mjs  local form endpoint for testing
src/config.ts         env vars
src/content/site.ts   all copy and lists
src/styles/global.css design tokens and shared styles
src/layouts/Base.astro  <head>, SEO, fonts, consent defaults, header/footer
src/components/       one component per section, plus Icon and SlotImage
src/pages/            index, terms, privacy, 404, robots.txt
src/assets/slots/     drop real images here
```

## Quality checks done

- Pixel diff against the prototype at 360, 390, 768, 1024, 1440 and 1920 px: identical layout and page
  height. The only intended differences: the form fits 360 to 390 px screens (the prototype's 300px
  Turnstile placeholder overflowed there), and the trailer's pulse ring stops when reduced motion is on.
- Lighthouse (mobile): Performance 99, Accessibility 100, Best Practices 100, SEO 100, CLS 0.
  Desktop: 100 / 100 / 100 / 100.
- No horizontal scroll at any tested width. Exactly one `h1`, logical `h2`/`h3` order.
