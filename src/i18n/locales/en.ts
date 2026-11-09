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
    { label: 'Download portal', href: '/downloads' },
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
    // for visitors who are not signed in: the button leads to the registration form
    access: 'Get access',
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


  // Short look at the library on the landing; the full catalog lives in the download portal
  preview: {
    eyebrow: 'Preview',
    title: 'A look *inside the library*',
    sub: 'A few of the images, videos, and slides in the kit. Register once to download the whole library.',
    groups: { images: 'Images', videos: 'Videos', slides: 'Presentation slides' },
    // tile labels in the mosaic
    tags: { image: 'Image', video: 'Video', slide: 'Slide' },
    // closing tile: what else is in the full library (numbers come from inside.stats)
    more: 'In the full library',
    play: 'Play video',
    cta: 'Get access to download',
  },

  // The illustrated book and the audiobook: a few pages and a short audio sample on the landing,
  // the full files in the download portal
  book: {
    eyebrow: 'Book and audiobook',
    title: 'Read it. *Hear it.*',
    sub: 'An illustrated book on Daniel 2 to hand to guests and members, and an English audiobook of the Book of Daniel. Listen to a short sample from chapter 2.',
    viewerLabel: 'Sample pages from the book',
    coverAlt: 'Book cover: All Things New, Hope starts here',
    pageOf: 'Page {n} of {total}',
    prev: 'Previous page',
    next: 'Next page',
    sampleNote: 'A few sample pages',
    play: 'Play the audio sample',
    pause: 'Pause',
    seek: 'Audio position',
    trackTitle: 'Daniel, chapter 2',
    trackTag: 'Sample',
    trackLength: '1:56',
    includes: [
      'Illustrated book, 41 pages, print-ready PDF',
      'Audiobook in 12 chapters, about 2 hours 10 minutes, MP3 and WAV',
    ],
    cta: 'Get access to download',
    download: 'Open in the download portal',
  },

  // Registration on the landing: creates the account and opens the download portal right away
  access: {
    eyebrow: 'Download',
    title: 'Get access to the *full library*',
    sub: 'Register once to download every presentation, image, video, and promotional material. There is no cost.',
    points: [
      'Nine presentations, about 400 images, 10 videos, and 20 promotional materials',
      'Download as much as you need, whenever you need it',
      'Next time, sign in with a one-time code sent to your email',
    ],
    form: {
      title: 'Get access',
      fields: {
        firstName: { label: 'First name', placeholder: 'John', error: 'Please enter your first name.' },
        lastName: { label: 'Last name', placeholder: 'Smith', error: 'Please enter your last name.' },
        email: { label: 'Email', placeholder: 'you@church.org', error: 'Please enter a valid email.', suggest: 'Did you mean {email}?' },
      },
      // {terms} and {license} become links
      consent: { text: 'I agree to the {terms} and the {license}.', terms: 'Terms of Use', license: 'CC BY-NC 4.0 license', error: 'Please accept the Terms of Use to continue.' },
      turnstileError: 'Please complete the spam check.',
      submit: 'Get access',
      sending: 'Registering',
      note: 'We use your email only for access to the library and important updates about it.',
      networkError: 'Something went wrong. Please try again in a moment.',
      already: 'Already registered?',
      signIn: 'Sign in with your email',
      exists: 'This email is already registered. Sign in with a one-time code instead.',
      success: {
        title: "You're in",
        // {name} and {email} are filled in
        text: 'Welcome, {name}. We have also sent a confirmation to {email}.',
        cta: 'Go to the download portal',
        change: 'Register a different email',
      },
    },
  },

  faq: {
    eyebrow: 'Questions',
    title: 'Before you *ask*',
    // Also published as FAQPage structured data. Start answers with the direct answer.
    items: [
      { q: 'What is Revelation Media Resources?', a: 'Revelation Media Resources is a library of ready-made materials for running an evangelistic prophecy series: presentations, slides, images, videos, and promotional materials for pastors, church leaders, and ministry organizations.', open: true },
      { q: 'Is there a cost, and do I need to register?', a: 'There is no cost. To download, register once with your name and email: it takes a minute and confirms that you accept the Terms of Use and the CC BY‑NC 4.0 license. Next time, sign in with a one-time code sent to your email. You may use, adapt, translate, and share the resources for your ministry, as long as you give credit and do not use them commercially.' },
      { q: 'How do I sign in again later?', a: 'Open the download portal and enter the email you registered with. We will send you a 6-digit code; enter it on the page and you are back in. You stay signed in for up to 30 days on the same device.' },
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
      license: 'License',
      portal: 'Download portal',
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

  // Download portal (/downloads): Image Library, Materials, Search, image pages, sign-in by email code,
  // "How will you use this?" before each download. Built from the portal design mock-up (Nov 2026).
  portal: {
    title: 'Download portal',
    description: 'Browse and download the images, presentations, videos and promotional materials of the All Things New prophecy seminar series.',
    nav: { library: 'Image Library', materials: 'Materials', search: 'Search' },
    searchMini: 'Search images...',
    signIn: 'Sign in',
    account: 'Account',
    signedIn: 'Signed in',
    signOut: 'Sign out',
    toast: {
      signedIn: 'Signed in',
      signedOut: 'Signed out',
      signInToDownload: 'Sign in to download',
      codeResent: 'Code sent again',
      linkCopied: 'Link copied',
      downloadStarted: 'Download started',
    },
    login: {
      title: 'Sign in to download',
      text: 'Browsing is open to everyone. Enter the email you registered with and we will send you a sign-in code.',
      email: 'Email address',
      emailPlaceholder: 'you@church.org',
      emailError: 'Please enter a valid email.',
      suggest: 'Did you mean {email}?',
      continue: 'Continue with email',
      sending: 'Sending',
      notRegistered: 'We don\'t have this email yet. Register first to get access.',
      register: 'Register for access',
      notYet: 'Not registered yet?',
      keepBrowsing: 'Keep browsing',
      back: 'Back',
      codeTitle: 'Check your inbox',
      codeText: 'We sent a 6-digit code to {email}',
      verify: 'Verify and continue',
      verifying: 'Checking',
      codeError: 'Enter the 6-digit code.',
      invalid: 'This code is not correct. Please check it and try again.',
      expired: 'This code has expired. Please request a new one.',
      networkError: 'Something went wrong. Please try again in a moment.',
      resendQ: 'Didn\'t get it?',
      resend: 'Resend code',
      turnstileError: 'Please complete the spam check.',
    },
    library: {
      title: 'Image Library',
      countAll: '{n} images · all books',
      countIn: '{n} images · {ctx}',
      filter: 'Filter by book',
      browseBy: 'Browse by book',
      all: 'All images',
      old: 'Old Testament',
      new: 'New Testament',
      chapters: '{n} chapters',
      categoryTag: 'category',
      clear: 'Clear filter',
      sortNew: 'Newest first',
      sortViews: 'Most viewed',
      sortDownloads: 'Most downloaded',
      sortAz: 'Title A–Z',
      popular: 'Popular categories',
      soon: 'Soon',
      emptyTitle: 'No images here yet',
      emptyText: 'Images for this category are on the way.',
      showing: 'Showing {from}–{to} of {total}',
      download: 'Download',
      prev: 'Previous page',
      next: 'Next page',
      loadError: 'We couldn\'t load the images. Please try again.',
      retry: 'Try again',
    },
    materials: {
      eyebrow: 'Evangelistic series',
      title: 'All Things *New*',
      text: 'The complete Daniel and Revelation seminar: slides, video, audio and print, ready to present. Nine sessions tracing prophecy from history to hope.',
      sessions: 'Sessions',
      files: 'Files',
      formats: 'Formats',
      language: 'Language',
      soon: 'Soon',
      fullSeries: 'Full series · {size}',
      downloadSeries: 'Download entire series',
      presentations: 'Presentations',
      video: 'Video',
      marketing: 'Marketing',
      audio: 'Audio',
      book: 'Book',
      images: 'Images',
      kindPresentations: 'Deck',
      kindVideo: 'Video',
      kindMarketing: 'Print',
      kindAudio: 'Audio',
      kindBook: 'Book',
      slides: '{n} slides',
      download: 'Download',
      imagesTitle: 'Images live in the Image Library',
      imagesText: 'Individual images can be browsed, filtered by book and category, and downloaded one by one in the Image Library.',
      openLibrary: 'Open Image Library',
      seriesTitle: 'All Things New: full series',
    },
    search: {
      title: 'Search the library',
      text: 'Find images by title, book, tag or keyword.',
      placeholder: 'Try "Daniel 2", "pale rider", "beast"...',
      clear: 'Clear search',
      popular: 'Popular tags',
      results: '{n} results for "{q}"',
      result: '1 result for "{q}"',
      noneTitle: 'No images found',
      noneText: 'Nothing matches "{q}". Try a different keyword, tag or reference.',
    },
    detail: {
      crumb: 'Image Library',
      back: 'Back to library',
      prompt: 'Generation prompt',
      copy: 'Copy',
      copied: 'Copied',
      download: 'Download',
      copyLink: 'Copy link',
      dims: 'Dimensions',
      size: 'File size',
      model: 'AI model',
      created: 'Created',
      license: 'License',
      tags: 'Tags',
      desc: 'Description',
      notFound: 'This image is not in the library.',
      zoom: 'View full size',
      close: 'Close',
    },
    dl: {
      title: 'How will you use this?',
      text: 'This helps us keep the library correctly licensed. Required.',
      purposes: [
        { id: 'personal', t: 'Personal use', s: 'Study, private projects' },
        { id: 'ministry', t: 'Church / ministry', s: 'Ministry materials, not for sale' },
        { id: 'social', t: 'Social media', s: 'Posts, stories, reels' },
        { id: 'sermon', t: 'Presentation / slides', s: 'Sermon or talk decks' },
        { id: 'web', t: 'Website or blog', s: 'Articles, landing pages' },
        { id: 'print', t: 'Print materials', s: 'Flyers, posters, books' },
        { id: 'other', t: 'Other', s: 'Tell us in your own words' },
      ],
      otherPlaceholder: 'Describe how you plan to use this...',
      choose: 'Please choose a purpose to continue.',
      describe: 'Please describe how you will use this.',
      ctaImage: 'Download image',
      ctaMaterial: 'Download',
      ctaSeries: 'Download series',
      cancel: 'Cancel',
      close: 'Close',
      preparing: 'Preparing your download',
      packaging: 'Packaging the file...',
      started: 'Download started',
      onWay: 'Your file is on its way. Licensed for {purpose}.',
      done: 'Done',
      failed: 'The download did not start. Please try again.',
      rTitle: 'Title',
      rPassage: 'Passage',
      rFormat: 'Format',
      rLicense: 'License',
      rCategory: 'Category',
      rSize: 'Size',
      rPurpose: 'Purpose',
      rPackage: 'Package',
      rLanguage: 'Language',
    },
    testNote: 'Test mode: sample files and no real emails. Sign in with the code 123456.',
  },

  // License page (/license): plain-language summary of CC BY-NC 4.0 and how to give credit
  licensePage: {
    title: 'License and credit',
    description: 'How you may use the Revelation Media Resources materials under CC BY-NC 4.0, and how to give credit.',
    eyebrow: 'License',
    heading: 'How you may use *the resources*',
    intro: 'The original resources of Revelation Media Resources are licensed under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). Registering for the download portal confirms that you accept this license and the Terms of Use.',
    canTitle: 'You may',
    can: [
      'Use the resources in sermons, evangelistic series, Bible studies, and other ministry',
      "Adapt them: edit the text, reorder slides, and add your church's details",
      'Translate them into other languages',
      'Share them with others, without charging for them',
    ],
    cannotTitle: 'You may not',
    cannot: [
      'Sell the resources or anything made from them',
      'Include them in paid products, courses, or services',
      'Present them as your own work',
      'Suggest that the General Conference endorses you, your organization, or your product',
    ],
    creditTitle: 'How to give credit',
    creditText: 'When you share or publish the resources, or something you made from them, include this line:',
    creditLine: '© Ministerial Association, General Conference of Seventh-day Adventists. Licensed under CC BY-NC 4.0.',
    fullLicense: 'Full license text (Creative Commons)',
    terms: 'Terms of Use',
    draft: 'Draft: this wording is awaiting legal review.',
  },

  legal: {
    backHome: 'Back to home',
    updated: 'Last updated: September 29, 2026',
    terms: {
      title: 'Terms of Use',
      description: 'Terms of Use for Revelation Media Resources and its download portal.',
      intro: 'These Terms of Use apply to the Revelation Media Resources website and its download portal. By registering, you accept them together with the CC BY-NC 4.0 license. Draft: this wording is awaiting legal review.',
      sections: [
        { heading: 'Who we are', text: 'Revelation Media Resources is provided by the Ministerial Association of the General Conference of Seventh-day Adventists for pastors, church leaders, and ministry organizations.' },
        { heading: 'License', text: 'The original resources are licensed under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). The License page explains in plain language what you may and may not do. If anything here differs from the license, the license applies.' },
        { heading: 'Using the materials', text: 'You may use, adapt, translate, and share the resources for ministry, with credit and without charging for them. When you share or publish them, or something you made from them, include: "© Ministerial Association, General Conference of Seventh-day Adventists. Licensed under CC BY-NC 4.0."' },
        { heading: 'What is not allowed', text: 'You may not sell the resources or anything made from them, include them in paid products, courses, or services, present them as your own work, or suggest that the General Conference endorses you, your organization, or your product.' },
        { heading: 'Registration and access', text: 'To download, register with your real name and email, and keep your sign-in codes private. We may suspend access if these terms or the license are not respected.' },
        { heading: 'Changes', text: 'We may update the resources and these terms. Changes will be published on this page with a new date.' },
        { heading: 'Contact', text: 'Questions about these terms? Write to us at {email}.' },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How Revelation Media Resources collects and uses personal data.',
      intro: 'This policy explains what personal data we collect through Revelation Media Resources, why, and the choices you have. Draft: this wording is awaiting legal review.',
      sections: [
        { heading: 'What we collect', text: 'When you register: your first name, last name, email, the language of the site, and the date you accepted the Terms of Use. When you download: which file and the purpose you choose.' },
        { heading: 'Why we collect it', text: 'To give you access to the download portal, to send your sign-in codes and a registration confirmation, to tell you about important changes to the library, and to understand how the resources serve the church. We do not sell your data.' },
        { heading: 'Who processes it', text: 'The site and its data are hosted on Cloudflare. Emails are sent with Resend. Both process data only on our behalf.' },
        { heading: 'Sign-in and cookies', text: 'A cookie keeps you signed in to the download portal for up to 30 days. With your consent we also use Google Analytics to understand how the site is used. You can change that choice at any time using "Cookie settings" in the footer.' },
        { heading: 'Spam protection', text: 'The registration and sign-in forms are protected by Cloudflare Turnstile, which processes technical data to tell people from bots.' },
        { heading: 'Your rights', text: 'You can ask us at any time to see, correct, or delete your data. Deleting your data also ends your access to the download portal.' },
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
