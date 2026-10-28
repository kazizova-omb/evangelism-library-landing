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
    // Home page <title> (browser tab, bookmarks): the brand only, as the client asked
    homeTitle: 'Revelation Media Resources',
    // Title in link previews (Open Graph / social cards)
    shareTitle: 'All Things New | Prophecy Seminar Series Kit for Church Leaders',
    description:
      'All Things New: a Daniel and Revelation prophecy seminar series kit for church leaders. Nine presentations with images, videos and promo materials, editable in PowerPoint, Keynote and Google Slides.',
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
    // TODO confirm with Justin: licence version (4.0) and the attribution line
    badge: 'CC BY-NC 4.0',
    motto: 'Use it. Adapt it. Share it.',
    // link text / screen-reader label for the badge
    label: 'Original resources licensed under CC BY‑NC 4.0: credit required, non-commercial use',
    url: 'https://creativecommons.org/licenses/by-nc/4.0/',
    attribution: 'Ministerial Association, General Conference of Seventh-day Adventists',
    footer: 'Original resources licensed under CC BY‑NC 4.0. Credit: Ministerial Association, General Conference of Seventh-day Adventists.',
  },

  // Series brand shown above the name in the header and footer
  brandSeries: 'All Things New',
  brand: 'Revelation Media Resources',
  skipLink: 'Skip to content',
  backToTop: 'Back to top',

  nav: [
    { label: "What's inside", href: '#inside' },
    { label: 'Series', href: '#series' },
    { label: 'Demo', href: '#demo' },
    { label: 'About', href: '#about' },
    { label: 'Translate', href: '#translate' },
  ],

  header: {
    languageLabel: 'Language',
    cta: 'Download',
    mobileCta: 'Download the kit',
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
    lead: 'Everything you need to lead a prophecy series: presentations, images, videos, and promotional materials. Ready to use, fully editable, and **made for pastors and church leaders.**',
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
    // Client copy (Justin, Oct 2026): the nine presentations of the seminar
    eyebrow: 'All Things New. Hope Starts Here.',
    title: 'Daniel & Revelation *Bible Prophecy Seminar*',
    sub: 'Nine evenings in the books of Daniel and Revelation, read in plain language from the Bible itself. We will see that God told history in advance, that He has a plan to end evil, suffering, and death, and that Jesus is coming to make all things new. Every evening asks what that hope means for your life now.',
    label: 'Presentation',
    download: 'Download',
    // shown under a download button whose file is not ready yet
    coming: 'Coming November 2026',
    // Download links: PUBLIC_PRESENTATION_URLS (comma separated, in order); presentation 1 falls back
    // to the Daniel 2 deck (PowerPoint export of the Google Slides demo), see src/config.ts
    items: [
      { ref: 'Daniel 2', title: 'History Written in Advance', text: 'A king\'s forgotten dream told the rise and fall of the world\'s empires centuries before they happened, and history has followed it line by line. If God knew the end from the beginning, He can be trusted with your tomorrow.' },
      { ref: 'The Great Controversy', title: 'The War Behind the World', text: 'Why is there so much pain in a world made by a God of love? The Bible traces evil to its beginning, shows how the cross settled the war, and promises that evil\'s days are numbered.' },
      { ref: 'Daniel 8–9 and the Sanctuary', title: 'The Longest Prophecy and Our High Priest', text: 'The longest time prophecy in the Bible named the year the Messiah would come, and He came on time. The same prophecy shows what Jesus is doing for us right now in heaven, as the High Priest who forgives the moment we come to Him.' },
      { ref: 'The Sabbath', title: 'The Sign He Never Changed', text: 'From Eden to the new earth, the seventh day is the Creator\'s sign of rest and belonging, kept by Jesus and never changed by God. It is a weekly gift, a day to stop and rest in what Christ has finished.' },
      { ref: 'Daniel 7 and Revelation 13–14', title: 'The Final Choice', text: 'Daniel 7 and Revelation 13 describe the last conflict of history, and it is about worship. God tells the story in advance so that no one is deceived, and so that everyone can choose Him freely.' },
      { ref: 'The Three Angels', title: 'Heaven\'s Last Message', text: 'Before Jesus returns, God sends one last message to every nation, tribe, tongue, and people. It is the everlasting gospel, a call to worship the Creator, and a loving appeal to come out of confusion and into His arms.' },
      { ref: 'The Four Horsemen and the Remnant', title: 'The Church God Is Looking For', text: 'Through persecution and compromise, God has always had a people. Revelation shows how to recognize them in the last days and invites you to find a home among them.' },
      { ref: 'Hell', title: 'The End of Evil', text: 'God will not torment anyone forever. The Bible shows how He will end sin, Satan, suffering, and death completely, and then make everything new, so that you can face the future without fear.' },
      { ref: 'The Second Coming and the New Earth', title: 'All Things New: Hope Starts Here', text: 'Jesus is coming again, in person, and every eye will see Him. The dead in Christ will rise, the signs are labor pains with an end and a purpose, and a new earth is waiting where God Himself will wipe away every tear. Hope starts here, and it ends in His presence.' },
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
    eyebrow: 'Demo',
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
    title: 'A global initiative to *equip church leaders*',
    lead: 'All Things New: Revelation Media Resources is a global initiative of the Ministerial Association of the General Conference of Seventh-day Adventists, created to equip pastors, evangelists, and churches with high-quality, Bible-centered resources for presenting the prophetic messages of Daniel and Revelation.',
    paragraphs: [
      'Our vision is to make biblical truth more visual, accessible, adaptable, and useful across cultures and languages. The collection includes presentation slides, original images, videos, and promotional resources designed for practical ministry use.',
      'These original resources are licensed under CC BY‑NC 4.0: you may use, adapt, translate, and share them for gospel ministry, with credit and for non‑commercial purposes.',
    ],
    imageAlt: 'A pastor presenting a Daniel and Revelation seminar to a church audience',
  },


  faq: {
    eyebrow: 'Questions',
    title: 'Before you *ask*',
    // Also published as FAQPage structured data. Start answers with the direct answer.
    items: [
      { q: 'What is Revelation Media Resources?', a: 'Revelation Media Resources is a library of ready-made materials for running an evangelistic prophecy series: presentations, slides, images, videos, and promotional materials for pastors, church leaders, and ministry organizations.', open: true },
      { q: 'Do I need to pay or register?', a: 'No. There is no cost and no registration: everything downloads directly. The original resources are licensed under CC BY‑NC 4.0, so you may use, adapt, translate, and share them for your ministry, as long as you give credit and do not use them commercially.' },
      { q: 'Who can use these materials?', a: 'Pastors, church leaders, and ministry organizations who want to run an evangelistic series. No design skills are needed: the files are ready to present and easy to adapt to your church.' },
      { q: 'What formats are included?', a: 'Presentations come in PowerPoint, Keynote, and Google Slides. Images and videos are provided in standard formats that work on any device.' },
      { q: 'Can I edit the materials?', a: "Yes. You can change text, reorder slides, and add your church's details to fit your program." },
      { q: 'Which languages are available?', a: "The kit is available in English today. More languages are coming soon and will be added progressively; see the list in the translation section below. Fluent in another language? You can help us translate it." },
    ],
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
    sub: 'Fluent in another language? Join our volunteer translators and help church leaders around the world share this message.',
    cta: 'Volunteer as a translator',
    // {email} is replaced with the translation email link
    orWrite: 'Or write to {email}',
    mailSubject: 'Volunteer translator',
  },

  footer: {
    tagline: 'A modern visual library of materials for evangelistic series, made for pastors and church leaders.',
    columns: { explore: 'Explore', help: 'Help', legal: 'Legal' },
    links: {
      faq: 'Questions',
      inside: "What's inside",
      series: 'Series',
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
        { heading: 'Who we are', text: 'The Ministerial Association of the General Conference of Seventh-day Adventists provides Revelation Media Resources to pastors, church leaders, and ministry organizations.' },
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
        { heading: 'What we collect', text: 'Downloading the kit needs no personal data: there is no registration and no signup form.' },
        { heading: 'Cookies and analytics', text: 'With your consent we use Google Analytics to understand how the site is used. You can change your choice at any time using "Cookie settings" in the footer.' },
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
