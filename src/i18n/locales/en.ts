// English copy. Every language has its own file in this folder with the same shape
// (TypeScript checks that nothing is missing). See README "Languages".
// Edit this file to replace placeholder content; the markup does not need to change.
//
// Inline formatting in text fields:
//   *text*   -> gold italic accent (<em>), used in headlines
//   **text** -> emphasis (<strong>), used in the hero lead
// Do not use em dashes in copy.
//
// Emails and external URLs (library, demo, trailer) come from env vars, see src/config.ts.

const en = {
  locale: {
    code: 'en',
    name: 'English',
    short: 'EN',
    htmlLang: 'en',
    ogLocale: 'en_US',
  },

  meta: {
    // Brand, used as the suffix of every page title
    title: 'Revelation Media Resources',
    // Home page <title>: lead with what people search for (keep under ~65 characters)
    homeTitle: 'Free Prophecy Series Kit for Pastors | Revelation Media Resources',
    description:
      'Free evangelistic series kit for pastors: prophecy seminar presentations, images, videos and promo materials, editable in PowerPoint, Keynote and Google Slides.',
    // Structured data (search engines and AI answers)
    kitName: 'Revelation Media Resources evangelistic series kit',
    audience: 'Pastors, church leaders and ministry organizations',
    ogImageAlt: 'Revelation Media Resources: everything you need to lead a prophecy series',
  },

  organization: {
    name: 'Ministerial Association of the General Conference of Seventh-day Adventists',
    logo: '/favicon.svg',
  },

  // Licence of the original resources (shown on the first screen, in the FAQ, footer and email)
  license: {
    badge: 'CC0 1.0',
    motto: 'Free to Use. Free to Adapt. Free to Share.',
    // link text / screen-reader label for the badge
    label: 'Original resources released under CC0 1.0 (public domain dedication)',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/',
    footer: 'Original resources released under CC0 1.0',
  },

  // Series brand shown above the name in the header and footer
  brandSeries: 'All Things New',
  brand: 'Revelation Media Resources',
  skipLink: 'Skip to content',
  backToTop: 'Back to top',

  nav: [
    { label: "What's inside", href: '#inside' },
    { label: 'Demo', href: '#demo' },
    { label: 'About', href: '#about' },
    { label: 'Translate', href: '#translate' },
  ],

  header: {
    languageLabel: 'Language',
    cta: 'Download',
    mobileCta: 'Download the kit',
    // used while the kit is not hosted yet (PUBLIC_KIT_URL empty): CTAs go to the Daniel 2 demo
    ctaPreview: 'Preview',
    mobileCtaPreview: 'Preview Daniel 2',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  placeholderTags: {
    hero: 'Key visual placeholder',
    trailer: 'Cover placeholder',
    portrait: 'Photo placeholder',
    stats: 'Sample figures and content',
    languages: 'Sample language list',
  },

  hero: {
    eyebrow: 'Evangelistic Series Library',
    title: 'Revelation Media *Resources*',
    lead: 'Everything you need to lead a prophecy series: presentations, images, videos, and promotional materials. Ready to use, fully editable, and **free for pastors and ministry leaders.**',
    primaryCta: 'Download the kit',
    secondaryCta: 'Watch the trailer',
    trust: ['PowerPoint', 'Keynote', 'Google Slides', 'English now, more languages soon'],
    cue: 'Watch the trailer',
    imageAlt: '',
  },

  trailer: {
    eyebrow: 'Trailer',
    title: "See what's *inside*",
    sub: 'A quick look at the presentations, visuals, and resources in the full kit.',
    playLabel: 'Play trailer',
    metaLabel: 'Official trailer',
    duration: '0:19',
    modalLabel: 'Trailer',
    closeLabel: 'Close',
    placeholder: 'The trailer will play here (YouTube embed, loaded on click).',
    videoTitle: 'Revelation Media Resources trailer',
  },

  inside: {
    eyebrow: "What's inside",
    title: 'One kit. Every *resource* you need.',
    sub: 'A complete, professionally designed set of materials for a full evangelistic series.',
    stats: [
      // "~" = approximately (shown as a small mark before the number); "+" = at least
      { value: '9', label: 'Presentations' },
      { value: '~450', label: 'Slides' },
      { value: '~400', label: 'Images' },
      { value: '10', label: 'Videos' },
      { value: '20', label: 'Marketing assets' },
    ],
    approx: 'about',
    note: 'A look at some of the materials in the kit.',
    // Order and keys are fixed by the grid layout. Image files: src/assets/slots/gallery-<key>.*
    gallery: {
      slide: { caption: 'Presentation slide', kicker: 'Session 01', title: 'The prophecy *unfolds*', alt: 'A presentation slide from the series on a screen in front of an audience' },
      flyer: { caption: 'Printed flyer', kicker: 'Starting soon', title: 'Hope Beyond Tomorrow', alt: 'Hands holding a printed flyer for the series' },
      art: { caption: 'Series artwork', alt: 'Series artwork on a poster, cards, a tablet and a phone' },
      video: { caption: 'Video clip', alt: 'A video clip from the series playing on a laptop' },
      social: { caption: 'Social post', title: 'There is hope for tomorrow', alt: 'A social media post for the series on a phone' },
    },
  },

  series: {
    eyebrow: 'The series',
    title: 'Nine presentations, *one complete series*',
    sub: 'See the full scope of the series. Each presentation comes ready to use, with its own images and promotional materials.',
    label: 'Presentation',
    download: 'Download',
    open: 'Open',
    soon: 'Available soon',
    coming: 'Coming November 2026',
    // Presentation 1 downloads from PUBLIC_DEMO_URL (Daniel 2); 2 to 9 show the "coming" badge.
    // TODO: titles and descriptions for 2 to 9 from the client's master plan.
    items: [
      { ref: 'Daniel 2', title: 'History Written in Advance', text: 'Short description from the master plan.' },
      { ref: '', title: 'Presentation 2', text: 'Short description from the master plan.' },
      { ref: '', title: 'Presentation 3', text: 'Short description from the master plan.' },
      { ref: '', title: 'Presentation 4', text: 'Short description from the master plan.' },
      { ref: '', title: 'Presentation 5', text: 'Short description from the master plan.' },
      { ref: '', title: 'Presentation 6', text: 'Short description from the master plan.' },
      { ref: '', title: 'Presentation 7', text: 'Short description from the master plan.' },
      { ref: '', title: 'Presentation 8', text: 'Short description from the master plan.' },
      { ref: '', title: 'Presentation 9', text: 'Short description from the master plan.' },
    ],
  },

  journey: {
    eyebrow: 'The full program',
    title: 'From the first invitation to the *final certificate*',
    sub: 'The kit covers every stage of running a series, so nothing is left to improvise.',
    // Stages of a series; each step points to one by index (shown as a bar above the steps)
    phases: ['Before the series', 'During the series', 'After the series'],
    steps: [
      { phase: 0, title: 'Promote and invite', text: 'Materials to announce the series and fill the room.', chips: ['Posters', 'Social posts', 'Invitations'] },
      { phase: 1, title: 'Lead the meetings', text: 'A ready presentation for every session of the series.', chips: ['Presentations', 'Slides'] },
      { phase: 1, title: 'Enrich with media', text: 'Extra images and video clips for the key moments.', chips: ['Images', 'Videos'] },
      { phase: 1, title: 'Hand out', text: 'Printable materials attendees can take home.', chips: ['Handouts', 'Study sheets'] },
      { phase: 2, title: 'Celebrate', text: 'Templates to honor everyone who completed the series.', chips: ['Certificates', 'Awards'] },
    ],
  },

  quality: {
    eyebrow: 'Quality',
    title: 'Made with care, *ready* for your church',
    sub: 'Every file is designed to look beautiful on screen and work without extra effort.',
    cta: 'Download the kit',
    ctaPreview: 'Preview Daniel 2',
    // icon: image | book | screen | pen | doc | globe
    features: [
    // badge: small label next to the title (e.g. a feature that is not available yet)
      { icon: 'image', title: 'Modern visuals', text: "Cinematic imagery that speaks to today's audiences." },
      { icon: 'book', title: 'Theologically reviewed', text: 'Content carefully checked for biblical accuracy.' },
      { icon: 'screen', title: 'Ready to present', text: 'Open the file and start. No design skills needed.' },
      { icon: 'pen', title: 'Fully editable', text: 'Adapt text, order, and details to your church.' },
      { icon: 'globe', title: 'Multilingual', badge: 'Coming soon', text: 'Translations into more languages are on the way.', link: { label: 'Help translate', href: '#translate' } },
    ],
  },

  demo: {
    eyebrow: 'Free demo',
    title: 'See the quality *for yourself*',
    // The demo is Daniel 2: the full presentation plus its promo materials (PUBLIC_DEMO_URL).
    sub: 'Download the complete Daniel 2 presentation together with its promotional materials.',
    checklist: ['The full Daniel 2 presentation', 'Its promotional materials', 'Direct download, no sign-up'],
    cta: 'Download demo',
    meta: 'Daniel 2 · ZIP',
    // while PUBLIC_DEMO_URL is a Google Slides link (the ZIP is not ready yet)
    // copy for the Google Slides period: the deck opens, nothing downloads yet
    subSlides: 'Preview the complete Daniel 2 presentation. The full download with its promotional materials is coming soon.',
    checklistSlides: ['The full Daniel 2 presentation', 'Promotional materials coming soon', 'Open instantly, no sign-up'],
    open: 'Open the presentation',
    metaSlides: 'Daniel 2 · Google Slides',
    soon: 'Available soon',
    slideTitle: 'The prophecy unfolds',
  },

  about: {
    // About the initiative (client copy). The motto under it comes from license.motto.
    eyebrow: 'About',
    title: 'A global initiative to *equip pastors*',
    lead: 'All Things New: Revelation Media Resources is a global initiative of the Ministerial Association of the General Conference of Seventh-day Adventists, created to equip pastors, evangelists, and churches with high-quality, Bible-centered resources for presenting the prophetic messages of Daniel and Revelation.',
    paragraphs: [
      'Our vision is to make biblical truth more visual, accessible, adaptable, and useful across cultures and languages. The collection includes presentation slides, original images, videos, and promotional resources designed for practical ministry use.',
      'These original resources are provided under CC0 1.0, allowing them to be freely used, adapted, translated, and shared for gospel ministry.',
    ],
    imageAlt: 'A pastor presenting a Daniel and Revelation seminar to a church audience',
  },


  faq: {
    eyebrow: 'Questions',
    title: 'Before you *ask*',
    // Also published as FAQPage structured data. Start answers with the direct answer.
    items: [
      { q: 'What is Revelation Media Resources?', a: 'Revelation Media Resources is a free library of ready-made materials for running an evangelistic prophecy series: presentations, slides, images, videos, and promotional materials for pastors, churches, and ministry organizations.', open: true },
      { q: 'Is it really free?', a: 'Yes. The full kit is free for pastors, churches, and ministry organizations: everything downloads directly, with no registration. The original resources are released under CC0 1.0, a public domain dedication, so you may freely use, adapt, translate, and share them for your ministry, without asking permission or giving credit.' },
      { q: 'Who can use these materials?', a: 'Pastors, church leaders, and ministry organizations who want to run an evangelistic series. No design skills are needed: the files are ready to present and easy to adapt to your church.' },
      { q: 'What formats are included?', a: 'Presentations come in PowerPoint, Keynote, and Google Slides. Images and videos are provided in standard formats that work on any device.' },
      { q: 'Can I edit the materials?', a: "Yes. You can change text, reorder slides, and add your church's details to fit your program." },
      { q: 'Which languages are available?', a: "The kit is available in English today. More languages are coming soon and will be added progressively; see the list in the translation section below. Fluent in another language? You can help us translate it." },
    ],
  },

  // "Get the full kit": direct downloads (no registration) + One Voice 27 updates signup.
  // File links: PUBLIC_KIT_URL + "/<id>.zip" (see README). Until it is set, buttons say "Available soon".
  getKit: {
    eyebrow: 'Download',
    title: 'Download the *full kit*',
    sub: 'Every resource is free to download. No registration and no sign-in: the original resources are released under CC0 1.0.',
    files: [
      { id: 'presentations', label: 'Presentations', detail: 'PowerPoint, Keynote, Google Slides' },
      { id: 'images', label: 'Images', detail: 'Original artwork for slides and print' },
      { id: 'videos', label: 'Videos', detail: 'Clips for the key moments of the series' },
      { id: 'promo', label: 'Promotional materials', detail: 'Posters, social posts, invitations' },
      { id: 'print', label: 'Handouts and certificates', detail: 'Study sheets, handouts, certificates' },
    ],
    downloadLabel: 'Download',
    soon: 'Available soon',
    // One Voice 27 keeps a single list for all its projects; this form only subscribes to updates
    subscribe: {
      title: 'Get *One Voice 27* updates',
      text: 'Sign up to hear about new resources, translations, and announcements.',
      fields: {
        name: { label: 'First name', placeholder: 'John' },
        email: { label: 'Email', placeholder: 'you@church.org', error: 'Please enter a valid email.', suggest: 'Did you mean {email}?' },
      },
      optional: '(optional)',
      consent: {
        // {privacy} is replaced with a link
        text: 'I agree to receive One Voice 27 updates by email. I can unsubscribe at any time. See the {privacy}.',
        error: 'Please confirm to subscribe.',
      },
      turnstileError: 'Please complete the spam check.',
      submit: 'Subscribe',
      sending: 'Subscribing',
      note: 'One list for all One Voice 27 updates. No spam.',
      networkError: 'Something went wrong. Please try again in a moment.',
      success: {
        title: "You're subscribed",
        // {email} is replaced with the submitted address
        text: "We'll send One Voice 27 updates to {email}.",
        change: 'Use a different email',
      },
    },
  },

  translate: {
    eyebrow: 'Translation',
    title: 'Help bring the kit to *more languages*',
    // lang = BCP 47 code, so screen readers pronounce each name correctly
    // Languages the kit is available in today; the rest are marked "Coming soon"
    available: [
      { name: 'English', lang: 'en' },
    ],
    inProgress: [
      { name: 'Español', lang: 'es' },
      { name: 'Português', lang: 'pt' },
      { name: 'Français', lang: 'fr' },
      { name: 'Deutsch', lang: 'de' },
      { name: 'Русский', lang: 'ru' },
      { name: 'Українська', lang: 'uk' },
      { name: 'Kiswahili', lang: 'sw' },
    ],
    legendAvailable: 'Available',
    legendInProgress: 'Coming soon',
    sub: 'Fluent in another language? Join our volunteer translators and help pastors around the world share this message.',
    cta: 'Volunteer as a translator',
    // {email} is replaced with the translation email link
    orWrite: 'Or write to {email}',
    mailSubject: 'Volunteer translator',
  },

  footer: {
    tagline: 'A modern visual library of materials for evangelistic series. Free for pastors and ministry leaders.',
    columns: { explore: 'Explore', help: 'Help', legal: 'Legal' },
    links: {
      faq: 'Questions',
      inside: "What's inside",
      support: 'Support',
      demo: 'Demo',
      contact: 'Contact us',
      about: 'About',
      terms: 'Terms of Use',
      translate: 'Translate',
      privacy: 'Privacy Policy',
    },
    copyright: '© 2026 Ministerial Association of the General Conference of Seventh-day Adventists',
    cookieSettings: 'Cookie settings',
  },

  consent: {
    // {privacy} is replaced with a link to the Privacy Policy
    text: 'We use analytics cookies to understand how the site is used. See our {privacy}.',
    privacyLink: 'Privacy Policy',
    accept: 'Accept',
    decline: 'Decline',
    label: 'Cookie consent',
  },

  legal: {
    backHome: 'Back to home',
    updated: 'Last updated: September 29, 2026',
    terms: {
      title: 'Terms of Use',
      description: 'Terms of Use for Revelation Media Resources.',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. These terms explain how you may use the library and its materials.',
      sections: [
        { heading: 'Who we are', text: 'The Ministerial Association of the General Conference of Seventh-day Adventists provides Revelation Media Resources free of charge to pastors, churches, and ministry organizations.' },
        { heading: 'Using the materials', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.' },
        { heading: 'What is not allowed', text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
        { heading: 'Accounts and access', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { heading: 'Changes to these terms', text: 'Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum, nullam quis risus eget urna mollis ornare vel eu leo.' },
        { heading: 'Contact', text: 'Questions about these terms? Write to us at {email}.' },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How Revelation Media Resources collects and uses personal data.',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. This policy explains what we collect, why, and the choices you have.',
      sections: [
        { heading: 'What we collect', text: 'Downloading the kit needs no personal data. If you sign up for One Voice 27 updates, we collect your email and, if you choose to share it, your first name.' },
        { heading: 'Why we collect it', text: 'We use your email only to send One Voice 27 updates: new resources, translations, and announcements. You can unsubscribe at any time.' },
        { heading: 'Cookies and analytics', text: 'With your consent we use Google Analytics to understand how the site is used. You can change your choice at any time using "Cookie settings" in the footer.' },
        { heading: 'Spam protection', text: 'The updates signup form is protected by Cloudflare Turnstile, which processes technical data to tell people from bots.' },
        { heading: 'Your rights', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper, cras mattis consectetur purus sit amet fermentum.' },
        { heading: 'Contact', text: 'Questions about your data? Write to us at {email}.' },
      ],
    },
  },

  notFound: {
    title: 'Page not found',
    eyebrow: '404',
    heading: 'This page is *not here*',
    text: 'The page you are looking for may have moved or never existed.',
    cta: 'Back to home',
    secondaryCta: 'Download the kit',
  },

} as const;

export default en;
