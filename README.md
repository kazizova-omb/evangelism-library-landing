# Revelation Media Resources: landing page

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
| `PUBLIC_GA4_ID` | Google Analytics 4 measurement ID | No GA, no cookie banner |
| `PUBLIC_BASE_PATH` | Serve the site from a sub-folder, e.g. `/evangelism-library-landing` on GitHub Pages | empty |
| `PUBLIC_SHOW_DRAFTS` | Show sections still waiting for client copy (the nine-presentation list). On for branch previews | `false` |
| `PUBLIC_API_URL` | Backend of the download portal (registration, sign-in, catalog, downloads). See "Download portal API" | empty = test mode |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key for the registration and sign-in forms | Cloudflare test key (always passes) |
| `PUBLIC_PRESENTATION_URLS` | Download links of the nine presentations, comma separated, in order (empty = "Coming November 2026") | presentation 1: Daniel 2 deck |
| `PUBLIC_DEMO_URL` | Demo (Daniel 2). A Google Slides link opens the deck; any other URL downloads as a file (the ZIP with promo materials); empty shows "Available soon" | `#` |
| `PUBLIC_TRAILER_YOUTUBE_ID` | YouTube ID of the trailer | Modal shows placeholder text |
| `PUBLIC_CONTACT_EMAIL` | Contact links, legal pages, JSON-LD | `hello@revelationresource.org` |
| `PUBLIC_TRANSLATE_EMAIL` | "Volunteer as a translator" button and the address shown under it | `ministerialassociation@gc.adventist.org` |
| `PUBLIC_SUPPORT_EMAIL` | "Didn't get the email?" help in the form section, success screen, footer | `support@revelationresource.org` |
| `PUBLIC_SHOW_PLACEHOLDER_TAGS` | Dashed labels ("Key visual placeholder", "Sample figures and content"...) that mark where real images and sample content go. A design aid only | Hidden |

Set `PUBLIC_SHOW_PLACEHOLDER_TAGS=false` for production.

## Design

The client chose **option 3, "poster editorial"**: Anton capitals for headlines, serif lead-ins,
indigo blocks, paper texture, black-and-white photos. It is built as layers:

- base component styles (the original dark design, options 1) in each component,
- `src/components/V2Theme.astro` (light editorial layer, option 2),
- `src/components/V3Theme.astro` on top (option 3).

`src/lib/theme.ts` sets `ACTIVE_THEME = 'v3'`; `Base.astro` loads both theme layers on every page.
Options 1 and 2 are switched off (the old `/v2`, `/v3` addresses redirect to the home page,
see `public/_redirects`). Photos come from `src/assets/slots/v3/`, then `slots/v2/`: they are cut
from the client's imagery board, so replace them with the original high-resolution files.

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
Without an `og` image, `src/assets/og/og-en.jpg` (rendered from the hero) is used for link previews.

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
  per-language Open Graph images (`src/assets/og/og-en.jpg`, `og-es.jpg`).
- **Legal pages** are `noindex` and out of the sitemap while `legalPagesReady` is `false` in
  `src/i18n/config.mjs`. Flip it when the client's texts are in.

After launch: verify the domain in Google Search Console and Bing Webmaster Tools, submit
`/sitemap-index.xml`, and check the page in Google's Rich Results Test.

## Downloads: registration and download portal

Downloads need a short registration: the visitor accepts the Terms of Use and the CC BY-NC 4.0 license with
their name and email, so the license is agreed with a known person. The licence page is `/license`, the terms
`/terms`.

- **Landing:** the "Get access" form (`src/components/Access.astro`) registers the visitor and signs them in
  right away; "Go to the download portal" opens the portal signed in. "Already registered?" leads to the
  portal's sign-in (`/downloads#login`). The landing only shows a preview of the library
  (`src/components/Preview.astro`); nothing downloads there except the Daniel 2 demo.
- **Portal** (`/downloads`, `src/components/PortalApp.astro`, own layout `src/layouts/PortalLayout.astro`),
  built from the portal design mock-up. Browsing is open to everyone; downloading needs a session.
  - `#library`: Image Library. Filter by book and chapter, curated categories, sort, 8 per page.
  - `#image/<id>`: image page (large view, passage, tags, description, size, licence; AI model and prompt
    only when the data has them).
  - `#materials`: series banner (language, "Download entire series"), tabs for presentations, video,
    marketing, audio.
  - `#search`: search by title, book, tag or keyword.
  - `#login`: email, then a 6-digit code. After signing in the visitor goes back to what they were doing.
  - Every download asks "How will you use this?" (required, "Other" needs a few words) and a format, then
    shows a short receipt.
- **Emails:** `emails/<lang>/registered.html` and `code.html`, see `emails/README.md`.

### Test mode

Without `PUBLIC_API_URL` everything runs in the browser so the screens can be reviewed before the backend
exists: sample data from the design mock-up (`src/lib/portalSample.ts`, images in `public/portal-sample/`),
any registration succeeds, the sign-in code is **123456**, the session lives in `localStorage` for 30 days.
A note marks it on the page. Nothing is sent anywhere.

### Download portal API (backend)

All requests go to `PUBLIC_API_URL`, JSON in and out, with `credentials: 'include'`: the session is an
httpOnly cookie set by the backend (allow CORS with credentials from the site origin). Errors return
`{ "error": "<code>" }` with the status below. Types are in `src/scripts/api.ts`.

**Account**

| Request | Body | Success | Errors |
|---|---|---|---|
| `POST /register` | `{ firstName, lastName, email, lang, consent: true, termsVersion, turnstileToken, source, utm }` | `200 { email, firstName }`, sets the session cookie, sends `registered.html` | `409 already_registered`, `400 invalid` |
| `POST /login/code` | `{ email, lang, turnstileToken }` | `200`, sends `code.html` | `404 not_registered`, `429 too_many` |
| `POST /login/verify` | `{ email, code }` | `200 { email, firstName }`, sets the session cookie | `400 invalid_code`, `410 expired_code`, `429 too_many` |
| `GET /me` | | `200 { email, firstName }` | `401` |
| `POST /logout` | `{}` | `200`, clears the cookie | |

**Library and materials** (public: browsing needs no session)

| Request | Success |
|---|---|
| `GET /library/facets?lang=` | `{ total, books: [{ book, testament: "Old"\|"New", order, count, chapters: [{ n, name, count }] }], categories: [{ id, label, thumb, count }], tags: [string] }` |
| `GET /library/images?lang=&page=&perPage=&sort=new\|views\|downloads\|az&book=&chapter=&category=&q=` | `{ items: [LibraryImage], total, page, perPage }` |
| `GET /library/images/<id>?lang=` | `LibraryImage`, or `404` |
| `GET /materials?lang=` | `{ series: { sessions, files, formats, size, thumb, formatsList }, languages: [{ code, name, available }], groups: [{ id: "presentations"\|"video"\|"marketing"\|"audio", items: [{ id, cat, title, thumb, size, slides?, duration?, fileType?, formats: [{ id, label, hint }] }] }] }` |

`LibraryImage`: `{ id, title, preview (~800px), image (~1600px), book, chapter, chapterName, ref, testament,
categories, tags, desc, group, sub?, dims, size, date, views, downloads, license, model?, modelVersion?, prompt? }`.
Previews are small public images; the files themselves stay private in storage.

**Download** (needs a session)

| Request | Body | Success | Errors |
|---|---|---|---|
| `POST /download` | `{ kind: "image"\|"material"\|"series", id, format, purpose, purposeText?, lang }` (for the series, `id` is the language code) | `200 { url }`: a short-lived signed link; log who, what, format, purpose, when | `401` (the portal shows sign-in, then resumes the download) |

Purposes: `personal`, `ministry`, `social`, `sermon`, `web`, `print`, `other` (with `purposeText`).
Image formats offered: `png`, `jpg`, `webp`; materials list their own `formats`.

Suggested limits: session 30 days, code valid 10 minutes, 5 wrong codes then a new code is needed. Verify the
Turnstile token on the server (`/register`, `/login/code`; use the Invisible widget mode in production).
`termsVersion` (currently `2026-11`, in `Access.astro`) records which version of the terms was accepted.

## Analytics and consent

With `PUBLIC_GA4_ID` set, a cookie banner (Accept / Decline) appears on the first visit and the choice
is remembered in `localStorage`. Google Consent Mode v2 defaults are set to denied in `<head>`.
`gtag.js` is only loaded after the visitor accepts (the "basic" Consent Mode setup), and events are
only sent with consent. "Cookie settings" in the footer reopens the banner.

Events: `cta_click` (`location`), `demo_download`, `trailer_play`, `login_click` (`location`),
`faq_open` (`question`), `translate_click`, `form_submit` (after a successful response only).
Add `data-track="event_name"` (and optionally `data-track-location`) to any link or button to track it.

## Client preview

Live preview for the client (not indexed):
**https://revelation-media-resources.pages.dev** (Spanish under `/es`).

It updates itself from GitHub (`.github/workflows/deploy.yml`):

| Push to | Published at |
|---|---|
| `main` | https://revelation-media-resources.pages.dev, the link the client sees |
| any other branch | `https://<branch>.revelation-media-resources.pages.dev`, with draft sections shown |

The link of each run is also listed in the repository under **Deployments** and in the run log (Actions tab).

One-time setup: Cloudflare dashboard → My Profile → API Tokens → Create token → template *Edit Cloudflare Workers*
(or a custom token with **Account · Cloudflare Pages · Edit**), then add it to the repository:
GitHub → Settings → Secrets and variables → Actions → New repository secret `CLOUDFLARE_API_TOKEN`.
Until it is there, the workflow still builds and checks every push but skips publishing.
Optional values (`PUBLIC_PRESENTATION_URLS`, `PUBLIC_DEMO_URL`, …) go under the **Variables** tab of the same page.

**Backup on GitHub Pages:** https://kazizova-omb.github.io/evangelism-library-landing/ is rebuilt from `main`
by `.github/workflows/pages.yml` (same site, served from a sub-folder via `PUBLIC_BASE_PATH`, not indexed).
It needs the repository to be public, or a paid GitHub plan for private Pages.

Manual publish from a machine (needs `npx wrangler login` once):

```sh
npm run deploy:preview
```

### Working as a team

1. The repository owner adds the teammate under GitHub → Settings → Collaborators (role *Write*).
2. Clone, `npm install`, `cp .env.example .env`, `npm run dev`. Defaults (including the Daniel 2 demo link) live in
   `src/config.ts`, so no private values are needed to build the same site.
3. Work in a branch and open a pull request: the branch gets its own preview link; merging to `main` updates the client preview.

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
