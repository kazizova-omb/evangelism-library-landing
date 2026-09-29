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
| `PUBLIC_SITE_URL` | Canonical URL, Open Graph URLs, sitemap, robots.txt | `https://revelationresource.org` |
| `PUBLIC_API_URL` | Form endpoint (POST JSON) | Form mocks success after 900 ms |
| `PUBLIC_LIBRARY_URL` | "Go to the library" button after signing up | Button hidden |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key | Cloudflare test key (always passes) |
| `PUBLIC_GA4_ID` | Google Analytics 4 measurement ID | No GA, no cookie banner |
| `PUBLIC_DEMO_URL` | Direct link to the demo ZIP | `#` |
| `PUBLIC_TRAILER_YOUTUBE_ID` | YouTube ID of the trailer | Modal shows placeholder text |
| `PUBLIC_CONTACT_EMAIL` | Contact links, legal pages, JSON-LD | `hello@revelationresource.org` |
| `PUBLIC_TRANSLATE_EMAIL` | "Volunteer as a translator" button and the address shown under it | `translate@revelationresource.org` |
| `PUBLIC_SUPPORT_EMAIL` | "Didn't get the email?" help in the form section, success screen, footer | `support@revelationresource.org` |
| `PUBLIC_SHOW_PLACEHOLDER_TAGS` | Dashed labels ("Key visual placeholder", "Sample figures and content"...) that mark where real images and sample content go. A design aid only | Hidden |

Set `PUBLIC_SHOW_PLACEHOLDER_TAGS=false` for production.

## Design options

Two designs share one codebase, content and behaviour, so the client compares only the look:

| Option | URL | Style |
| --- | --- | --- |
| v1 | `/`, `/es` | Dark cinematic: gold on black, Cormorant Garamond + Hanken Grotesk |
| v2 | `/v2`, `/es/v2` | Light editorial ("Imagery Guidelines"): navy + cyan, DM Serif Display + Inter, photo cards |
| v3 | `/v3`, `/es/v3` | Poster editorial: v2 plus Anton capitals for headlines, serif lead-ins, indigo blocks (trailer, about, form), paper texture, black-and-white photos |

- v2 is `src/pages/[...lang]/v2.astro` plus one stylesheet, `src/components/V2Theme.astro`
  (every rule is prefixed `:root.v2:not(#v1)` so it overrides the components' scoped styles).
- v3 (`v3.astro`) loads V2Theme and `V3Theme.astro` on top (`:root.v3:not(#v1):not(#v2)`). Photos: `slots/v3/`, then `slots/v2/`.
- v2 photos live in `src/assets/slots/v2/` and override the regular slots on v2 pages only.
  They are cut from the guidelines board and upscaled: replace them with the original high-resolution files.
- `/v2` and `/v3` are `noindex`. When the client picks one: if v2 wins, move `<V2Theme />` and `noindex`-free
  Base into `index.astro` (or make v2 the default) and delete the other option.

## Languages

The site ships in English (`/`) and Spanish (`/es`). Each language is one file in
**`src/i18n/locales/`** (`en.ts`, `es.ts`) holding every piece of copy: headlines, stats, gallery captions,
journey steps, features, FAQ, form labels and errors, divisions, footer, legal text.

To add a language (example: Portuguese):

1. Copy `src/i18n/locales/es.ts` to `pt.ts`, change the `locale` block (`code: 'pt'`, `name: 'Português'`,
   `short: 'PT'`, `htmlLang: 'pt'`, `ogLocale: 'pt_BR'`), rename the constant and translate the strings.
   It is typed as `Site`, so `npm run check` reports any missing key.
2. Add `'pt'` to the list in `src/i18n/config.mjs`.
3. Rebuild. The pages appear under `/pt`; the language switcher, `hreflang` tags and sitemap pick it up.

Country names are generated per language from the built-in list (`Intl.DisplayNames`);
a locale can override single names in `getKit.countryNames`. The form always sends the English division
name, whatever the page language.

## Replacing content

Edit the locale files and rebuild; no markup changes are needed.

- `*word*` renders the gold italic accent in headlines, `**words**` renders bold (hero lead).
- `{terms}`, `{privacy}`, `{email}` in some strings are replaced with links or values; keep them.
- Lists (stats, steps, features, FAQ, languages) can grow or shrink. The gallery has five fixed tiles
  because the grid layout is designed around them.
- Design rules: no decorative lines next to eyebrow labels, no em dashes in copy, and no changes to
  colors, fonts or section order without approval.
- Line breaks are handled for you: short words (articles, prepositions, "every", "your"; in Spanish
  "el", "los", "de", "todos"...) are tied to the next word when the copy loads (`src/i18n/typo.ts`),
  headings are balanced and paragraphs avoid a lone last word. Add words to the lists there if needed.

## Images

The prototype's CSS-drawn scenes are the fallback. To use a real image, drop a file named after its
slot into **`src/assets/slots/`** (`.jpg`, `.png`, `.webp` or `.avif`) and rebuild:

`hero`, `trailer`, `gallery-slide`, `gallery-flyer`, `gallery-art`, `gallery-video`, `gallery-social`,
`demo-flyer`, `demo-slide`, `demo-image`, `team`, `og`.

**Logo:** `src/assets/slots/logo.svg` (or `.png` / `.webp`) replaces the star mark next to the name in the
header and footer, shown 32px high (28px on phones).

The build generates AVIF and WebP in several widths, sets `width`/`height`, lazy-loads everything
below the fold and loads the hero with high priority. The matching placeholder tag disappears.
Recommended sizes are in [`src/assets/slots/README.md`](src/assets/slots/README.md); alt texts are in the locale files.
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

### Spam protection

Three layers on the page, one on the server:

1. **Cloudflare Turnstile** (invisible to most people, a checkbox when in doubt). Its token is sent as `turnstileToken`.
2. **Honeypot:** a hidden `website` field people never see. If it is filled, the form shows the normal
   success screen and sends nothing, so bots get no signal.
3. **Timing:** a submit less than 3 seconds after the page loaded is treated the same way.
4. **Server (backend TODO):** verify the Turnstile token and rate-limit by IP and email.

The email field is checked on blur and on submit (format, length, domain), and common typos get a
one-click fix ("gmial.con" becomes "Did you mean ...@gmail.com?"). See `src/lib/email.ts`.

> **TODO (backend):** verify `turnstileToken` server-side with Cloudflare's `siteverify` API
> using the secret key. The landing page only collects the token.

### Testing against a local stub

```sh
npm run stub                         # http://localhost:8787, logs each request, answers 200
STUB_STATUS=500 npm run stub         # simulate a server error
STUB_DELAY=3000 npm run stub         # slow response to see the loading state
PUBLIC_API_URL=http://localhost:8787/lead npm run dev
```

## SEO and answer engines

- **Titles and descriptions:** the home page uses `meta.homeTitle` / `meta.description` from the locale
  files (search phrase first, brand last). Other pages use "Page | Brand".
- **H1** contains the category ("Evangelistic Series Library") and the brand.
- **Structured data** (`src/lib/schema.ts`), one linked JSON-LD graph per page: Organization, WebSite,
  WebPage (with `speakable`), the kit as a free CreativeWork with an Offer, HowTo (the 3 steps),
  FAQPage (all FAQ items), BreadcrumbList on legal pages. It is generated from the same copy as the page.
- **FAQ** opens with a one-sentence definition ("Revelation Media Resources is...") that AI answers can quote.
  Keep answers direct: answer first, detail after.
- **/llms.txt**: plain-text summary for AI assistants, generated from the English copy.
- `hreflang` + `x-default`, canonical, sitemap with `lastmod`, `max-image-preview:large`,
  per-language Open Graph images (`public/og-default.jpg`, `og-default-es.jpg`).
- **Legal pages** are `noindex` and out of the sitemap while `legalPagesReady` is `false` in
  `src/i18n/config.mjs`. Flip it when the client's texts are in.

After launch: verify the domain in Google Search Console and Bing Webmaster Tools, submit
`/sitemap-index.xml`, and check the page in Google's Rich Results Test.

## Analytics and consent

With `PUBLIC_GA4_ID` set, a cookie banner (Accept / Decline) appears on the first visit and the choice
is remembered in `localStorage`. Google Consent Mode v2 defaults are set to denied in `<head>`.
`gtag.js` is only loaded after the visitor accepts (the "basic" Consent Mode setup), and events are
only sent with consent. "Cookie settings" in the footer reopens the banner.

Events: `cta_click` (`location`), `demo_download`, `trailer_play`, `login_click` (`location`),
`faq_open` (`question`), `translate_click`, `form_submit` (after a successful response only).
Add `data-track="event_name"` (and optionally `data-track-location`) to any link or button to track it.

## Client preview

Live preview for the client (all three design options, switcher bottom left, not indexed):
**https://revelation-media-resources.pages.dev** (`/v2`, `/v3`, Spanish under `/es`).

Update it after changes (needs `npx wrangler login` once on this machine):

```sh
npm run deploy:preview
```

## Deploying to Cloudflare Pages

1. Push this repository to GitHub or GitLab.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git, pick the repository.
3. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Add the environment variables above (Production and Preview), including `NODE_VERSION=22` (Astro 7 needs 22.12+).
5. Deploy, then add the custom domain under the project's Custom domains tab and set `PUBLIC_SITE_URL` to it.

`public/_headers` sets security headers and long-term caching for hashed assets. `404.html` and `es/404.html` are served
automatically for unknown paths (Cloudflare Pages picks the closest one).

## Project structure

```
prototype/            approved single-file prototype (reference, do not edit)
screenshots/          screenshots of the approved state
public/               favicon, default OG image, Cloudflare _headers
scripts/stub-server.mjs  local form endpoint for testing
src/config.ts         env vars
src/i18n/locales/     copy per language (en.ts, es.ts)
src/i18n/config.mjs   list of languages
src/styles/global.css design tokens and shared styles
src/layouts/Base.astro  <head>, SEO, fonts, consent defaults, header/footer
src/components/       one component per section, plus Icon and SlotImage
src/pages/[...lang]/  index, terms, privacy, 404 for every language
src/pages/            robots.txt
src/assets/slots/     drop real images here
```

## Quality checks done

- Pixel diff against the prototype at 360, 390, 768, 1024, 1440 and 1920 px: identical layout and page
  height. The only intended differences: the form fits 360 to 390 px screens (the prototype's 300px
  Turnstile placeholder overflowed there), and the trailer's pulse ring stops when reduced motion is on.
- Lighthouse (mobile): Performance 99, Accessibility 100, Best Practices 100, SEO 100, CLS 0.
  Desktop: 100 / 100 / 100 / 100.
- No horizontal scroll at any tested width. Exactly one `h1`, logical `h2`/`h3` order.
