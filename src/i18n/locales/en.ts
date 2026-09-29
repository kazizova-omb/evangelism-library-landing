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
    title: 'Revelation Media Resources',
    description:
      'Presentations, images, videos, and promotional materials for leading a prophecy series. Ready to use, fully editable, and free for pastors and ministry leaders.',
    ogImageAlt: 'Revelation Media Resources: everything you need to lead a prophecy series',
  },

  organization: {
    name: 'Lorem Ipsum Ministries',
    logo: '/favicon.svg',
  },

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
    cta: 'Get materials',
    mobileCta: 'Get the materials',
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
    primaryCta: 'Get the materials',
    secondaryCta: 'Download demo',
    trust: ['PowerPoint', 'Keynote', 'Google Slides', 'Multiple languages'],
    cue: 'Watch the trailer',
    imageAlt: '',
  },

  trailer: {
    eyebrow: 'Trailer',
    title: "See what's *inside*",
    sub: 'A 90-second look at the presentations, visuals, and resources in the full kit.',
    playLabel: 'Play trailer',
    metaLabel: 'Official trailer',
    duration: '1:30',
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
      { value: '24', label: 'Presentations' },
      { value: '1,200+', label: 'Slides' },
      { value: '600+', label: 'Images' },
      { value: '30', label: 'Videos' },
      { value: '50+', label: 'Marketing assets' },
    ],
    note: 'A look at some of the materials in the kit.',
    // Order and keys are fixed by the grid layout. Image files: src/assets/slots/gallery-<key>.*
    gallery: {
      slide: { caption: 'Presentation slide', kicker: 'Session 01', title: 'The prophecy *unfolds*', alt: 'Presentation slide from the series' },
      flyer: { caption: 'Printed flyer', kicker: 'Starting soon', title: 'Hope Beyond Tomorrow', alt: 'Printed flyer for the series' },
      art: { caption: 'Series artwork', alt: 'Series artwork' },
      video: { caption: 'Video clip', alt: 'Still from a video clip' },
      social: { caption: 'Social post', title: 'There is hope for tomorrow', alt: 'Social media post for the series' },
    },
  },

  journey: {
    eyebrow: 'The full program',
    title: 'From the first invitation to the *final certificate*',
    sub: 'The kit covers every stage of running a series, so nothing is left to improvise.',
    steps: [
      { title: 'Promote and invite', text: 'Materials to announce the series and fill the room.', chips: ['Posters', 'Social posts', 'Invitations'] },
      { title: 'Lead the meetings', text: 'A ready presentation for every session of the series.', chips: ['Presentations', 'Slides'] },
      { title: 'Enrich with media', text: 'Extra images and video clips for the key moments.', chips: ['Images', 'Videos'] },
      { title: 'Hand out', text: 'Printable materials attendees can take home.', chips: ['Handouts', 'Study sheets'] },
      { title: 'Celebrate', text: 'Templates to honor everyone who completed the series.', chips: ['Certificates', 'Awards'] },
    ],
  },

  quality: {
    eyebrow: 'Quality',
    title: 'Made with care, *ready* for your church',
    sub: 'Every file is designed to look beautiful on screen and work without extra effort.',
    cta: 'Get the materials',
    // icon: image | book | screen | pen | doc | globe
    features: [
      { icon: 'image', title: 'Modern visual style', text: "Cinematic imagery that speaks to today's audiences." },
      { icon: 'book', title: 'Theologically reviewed', text: 'Content carefully checked for biblical accuracy.' },
      { icon: 'screen', title: 'Ready to present', text: 'Open the file and start. No design skills needed.' },
      { icon: 'pen', title: 'Fully editable', text: 'Adapt text, order, and details to your church.' },
      { icon: 'doc', title: 'Your favorite format', text: 'Works with the software you already use.', chips: ['PowerPoint', 'Keynote', 'Google Slides'] },
      { icon: 'globe', title: 'Multiple languages', text: 'Available in several languages, with more on the way.', link: { label: 'See all languages', href: '#translate' } },
    ],
  },

  demo: {
    eyebrow: 'Free demo',
    title: 'See the quality *for yourself*',
    sub: 'Download a short sample before you request the full kit.',
    checklist: ['One complete presentation', 'A selection of images', 'Examples of promotional materials'],
    cta: 'Download demo',
    meta: 'ZIP · 120 MB',
    slideTitle: 'The prophecy unfolds',
  },

  about: {
    eyebrow: 'About the team',
    title: 'Created by *Lorem Ipsum Ministries*',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    ],
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus, ut fermentum massa justo sit amet risus.',
    author: 'Justin Lorem',
    role: 'Project Lead, Lorem Ipsum Ministries',
    imageAlt: 'Justin Lorem, Project Lead',
  },

  faq: {
    eyebrow: 'Questions',
    title: 'Before you *ask*',
    items: [
      { q: 'Is it really free?', a: 'Yes. The full kit is free for pastors, churches, and ministry organizations. Just fill out the short form to get access.', open: true },
      { q: 'What formats are included?', a: 'Presentations come in PowerPoint, Keynote, and Google Slides. Images and videos are provided in standard formats that work on any device.' },
      { q: 'Can I edit the materials?', a: "Yes. You can change text, reorder slides, and add your church's details to fit your program." },
      { q: 'Which languages are available?', a: "The kit is available in several languages, listed in the translation section below. Don't see yours? You can help us translate it." },
      { q: 'How do I access the materials after signing up?', a: "Your email is added to the library right away. Sign in with that email at any time, and we'll send you a one-time code to log in. There's no password to remember." },
    ],
  },

  getKit: {
    eyebrow: 'Get the full kit',
    title: 'Get *free access* to the complete library',
    sub: "Tell us a little about your church, and we'll open the library for you right away.",
    steps: [
      { title: 'Fill out the form', text: 'It takes about a minute.' },
      { title: 'Check your email', text: "We'll send you sign-in instructions." },
      { title: 'Sign in and download', text: 'All programs, languages, and formats in one place.' },
    ],
    fields: {
      name: { label: 'Full name', placeholder: 'John Smith', error: 'Please enter your name.' },
      // {email} in suggest is replaced with the corrected address (a button)
      email: { label: 'Email', placeholder: 'you@church.org', error: 'Please enter a valid email.', suggest: 'Did you mean {email}?' },
      country: { label: 'Country', placeholder: 'Start typing...', error: 'Please enter your country.' },
      organization: { label: 'Church or organization', placeholder: 'Name of your church', error: 'Please enter your church or organization.' },
      division: { label: 'Division', placeholder: 'Select a division' },
      conference: { label: 'Conference or mission', placeholder: 'e.g. Texas Conference' },
      comment: { label: 'Comment', placeholder: "Anything you'd like us to know" },
    },
    optional: '(optional)',
    consent: {
      // {terms} and {privacy} are replaced with links
      text: 'I agree to the {terms} and the processing of my data under the {privacy}.',
      error: 'Please accept the terms to continue.',
    },
    // Shown under the steps for people who signed up before
    returning: {
      title: 'Already registered?',
      text: 'Your access is waiting in your inbox. Look for the email from Revelation Media Resources and follow the sign-in link.',
      // {support} is replaced with the support email link
      help: "Didn't get the email? Write to {support}.",
    },
    turnstileError: 'Please complete the spam check.',
    submit: 'Get free access',
    sending: 'Sending',
    note: "We'll only use your details to give you access and send updates about the kit.",
    networkError: 'Something went wrong. Please try again in a moment.',
    success: {
      title: 'Access granted',
      // {email} is replaced with the submitted address
      text: "We've sent an email to {email} with sign-in instructions. Can't find it? Check your spam folder.",
      // {support} is replaced with the support email link
      help: 'Still nothing? Write to {support}.',
      cta: 'Go to the library',
      change: 'Wrong email? Change it',
    },
    // Keys are fixed codes; the English name is what the form sends.
    divisions: {
      ECD: 'East-Central Africa Division',
      ESD: 'Euro-Asia Division',
      IAD: 'Inter-American Division',
      EUD: 'Inter-European Division',
      NAD: 'North American Division',
      NSD: 'Northern Asia-Pacific Division',
      SAD: 'South American Division',
      SPD: 'South Pacific Division',
      SID: 'Southern Africa-Indian Ocean Division',
      SUD: 'Southern Asia Division',
      SSD: 'Southern Asia-Pacific Division',
      TED: 'Trans-European Division',
      WAD: 'West-Central Africa Division',
      OTHER: 'Other / not applicable',
    } as Record<string, string>,
    // Country names come from the browser's built-in list (Intl.DisplayNames) for each
    // language. Override the ones that read badly, by ISO code.
    countryNames: {
      AG: 'Antigua and Barbuda', BA: 'Bosnia and Herzegovina', CD: 'Democratic Republic of the Congo',
      CG: 'Congo', HK: 'Hong Kong', KN: 'Saint Kitts and Nevis', LC: 'Saint Lucia', MM: 'Myanmar',
      ST: 'São Tomé and Príncipe', TT: 'Trinidad and Tobago', VC: 'Saint Vincent and the Grenadines',
      PS: 'Palestine', CI: "Côte d'Ivoire",
    } as Record<string, string>,
  },

  translate: {
    eyebrow: 'Translation',
    title: 'Help bring the kit to *more languages*',
    // lang = BCP 47 code, so screen readers pronounce each name correctly
    available: [
      { name: 'English', lang: 'en' },
      { name: 'Español', lang: 'es' },
      { name: 'Português', lang: 'pt' },
      { name: 'Français', lang: 'fr' },
    ],
    inProgress: [
      { name: 'Deutsch', lang: 'de' },
      { name: 'Русский', lang: 'ru' },
      { name: 'Українська', lang: 'uk' },
      { name: 'Kiswahili', lang: 'sw' },
    ],
    legendAvailable: 'Available',
    legendInProgress: 'In progress',
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
    copyright: '© 2026 Lorem Ipsum Ministries',
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
        { heading: 'Who we are', text: 'Lorem Ipsum Ministries provides Revelation Media Resources free of charge to pastors, churches, and ministry organizations.' },
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
        { heading: 'What we collect', text: 'When you request the kit we collect your name, email, country, church or organization, and any optional details you choose to share.' },
        { heading: 'Why we collect it', text: 'We use your details to give you access to the library and to send updates about the kit.' },
        { heading: 'Cookies and analytics', text: 'With your consent we use Google Analytics to understand how the site is used. You can change your choice at any time using "Cookie settings" in the footer.' },
        { heading: 'Spam protection', text: 'The form is protected by Cloudflare Turnstile, which processes technical data to tell people from bots.' },
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
    secondaryCta: 'Get the materials',
  },
} as const;

export default en;
