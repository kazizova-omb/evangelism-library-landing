# Work plan: registration and download portal (November 2026)

Agreed at the team meeting: one site on one domain (our Cloudflare), a landing that sells and a download
portal for the files. Downloads need a short registration. License: **CC BY-NC 4.0**, accepted together with
the **Terms of Use** at registration. Emails through **Resend**.

## Who does what

| Who | Area |
|---|---|
| Katya | Front end and visuals: landing, registration form, licence page, portal screens, email templates |
| Sergiy | Back end: image table data, file storage, registration and sign-in, downloads, sending emails |
| Sergiy (images) | Image generation, the image table with titles and tags, videos |
| Anya | Image table (status and structure), contact with Justin, approvals and legal review |
| Roma | Print-ready marketing layouts (after the presentations) |

## Stage 0. Approvals (Anya)

- [ ] Justin confirms in writing that registration is back (name, email, accepting the license terms).
- [ ] Legal review of the Terms of Use by the General Conference (Office of General Counsel), through Justin.
- [ ] Image table: status with Sergiy, structure agreed with Sergiy Moskalyov.
- [ ] Options for "What will you use it for?" (now: sermon or series, Bible study, social media, print, translation, other).
- [ ] Marketing formats agreed with Justin and handed to Roma.

## Stage 1. Landing (Katya), done in test mode

- [x] "Get access" form: first name, last name, email, Terms of Use and CC BY-NC 4.0 checkbox; errors,
      sending, success with "Go to the download portal"; "Already registered?" leads to sign-in.
- [x] Spam protection and email checks brought back (Turnstile, honeypot, timing, typo suggestions).
- [x] Series buttons lead to registration, or to the portal once signed in.
- [x] Header and footer: "Download portal".
- [x] Preview block: images, a video to watch, slides, "Get access to download".
- [x] FAQ, Privacy Policy, Terms of Use, llms.txt rewritten for registration.
- [x] `/license` page: plain-language summary, credit line, links to the full CC license and the terms.
- [x] Preview block as a mosaic (decided over the three-row version).
- Daniel 2 demo stays open without registration as a sample (decide if that should change).

## Stage 2. Download portal (Katya), done in test mode

- [x] `/downloads` and `/es/downloads`: four categories with previews and counts.
- [x] Category grid with pagination (24 per page), no search; file title, format, size, download icon.
- [x] "What will you use it for?" before each download (last choice remembered).
- [x] Locked state: content fades out under the sign-in card; email, then a 6-digit code; wrong or expired
      code, unknown email ("register first").
- [x] Email templates: `emails/<lang>/registered.html`, `code.html`.

## Katya: follow-ups to check later

- [ ] **When Sergiy connects the backend** (`PUBLIC_API_URL` set): check the landing and the portal with real
      data: long file titles, other image proportions, empty categories, error messages, real emails
      (both languages, not in spam), sign-in after the session expires.
- [ ] **When the image table exists:** put 15 to 20 real "featured" images (and a few video stills and slides)
      into the landing mosaic (`src/components/Preview.astro`, TODO at the top).
- [ ] **After the legal review:** replace the draft texts of the Terms of Use, Privacy Policy and License page
      (locale files: `legal.terms`, `legal.privacy`, `licensePage`), remove the "Draft" notes, and set
      `legalPagesReady = true` in `src/i18n/config.mjs`.
- [ ] **After Justin confirms registration in writing:** merge the `portal` branch into `main` and publish the
      main preview.

## Stage 3. Back end (Sergiy)

Contract: README, "Download portal API". The front end switches from test mode as soon as `PUBLIC_API_URL`
is set.

- [ ] File storage (Cloudflare R2): files private, previews small and public.
- [ ] Catalog from the image table (fields below).
- [ ] Registration: store name, email, consent date, terms version; start a session; send `registered.html`.
- [ ] Sign-in by code: send `code.html`, verify, limit attempts.
- [ ] Session cookie (30 days), code valid 10 minutes.
- [ ] Downloads: short-lived signed links, log who, what, purpose, when.
- [ ] Rate limits, Turnstile check on the server.
- [ ] Export for the team: registrations and downloads as CSV.
- Earlier server code (personal links, D1) is in git history, commit `ac423b2`, if useful as a start.

### Table fields

| Field | Content |
|---|---|
| `id` | identifier |
| `type` | presentation / image / video / marketing |
| `title` | title (or the file name) |
| `filename` | file name |
| `preview_url` | small preview image |
| `file_key` | path to the file in storage |
| `size`, `format` | shown on the tile |
| `language` | en, es, … |
| `series` | presentation 1 to 9, if the file belongs to one |
| `tags` | tags |
| `featured` | yes / no: shown in the landing preview |

Prompts stay in the table only (the optional bonus, not part of the site).

## Stage 4. Content and launch

- [ ] Images, table, videos (Sergiy); presentations 1 to 9 as they are ready (after the BRI review);
      marketing layouts (Roma).
- [ ] Test on the preview: registration, sign-in, downloads on several devices; emails not in spam;
      Spanish version.
- [ ] Sign-off from Justin and the legal review.
- [ ] Invoice for everything except the image database with prompts.

## Risks

- Without the table structure there is no real preview or catalog: agree on it first.
- Without written confirmation from Justin, registration may be reversed again.
- The domain is not decided: Resend needs a verified sending domain, otherwise emails land in spam. Until
  Justin's domain exists, send from ours.
