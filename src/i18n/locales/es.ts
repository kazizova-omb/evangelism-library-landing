// Spanish copy. Same shape as en.ts (TypeScript reports anything missing).
// Formatting: *text* = gold italic accent, **text** = bold. No em dashes in copy.
// Tone: "usted", addressed to pastors and ministry leaders.
import type { Site } from '../types';

const es: Site = {
  locale: {
    code: 'es',
    name: 'Español',
    short: 'ES',
    htmlLang: 'es',
    ogLocale: 'es_ES',
  },

  meta: {
    title: 'Revelation Media Resources',
    homeTitle: 'Revelation Media Resources',
    shareTitle: 'All Things New | Kit de seminario de profecía para pastores',
    description:
      'All Things New: kit de seminario de profecía de Daniel y Apocalipsis para pastores. Nueve presentaciones con imágenes, videos y materiales promocionales, editables en PowerPoint, Keynote y Google Slides.',
    kitName: 'Kit de series evangelísticas de Revelation Media Resources',
    audience: 'Pastores, líderes de iglesia y organizaciones ministeriales',
    ogImageAlt: 'Revelation Media Resources: todo lo que necesita para dirigir una serie sobre profecía',
  },

  organization: {
    name: 'Ministerial Association of the General Conference of Seventh-day Adventists',
    logo: '/favicon.svg',
  },

  // Series brand shown above the name in the header and footer
  license: {
    badge: 'CC BY-NC 4.0',
    motto: 'Úselo. Adáptelo. Compártalo.',
    label: 'Recursos originales con licencia CC BY‑NC 4.0: con atribución y sin fines comerciales',
    url: 'https://creativecommons.org/licenses/by-nc/4.0/deed.es',
    attribution: 'Asociación Ministerial, Asociación General de los Adventistas del Séptimo Día',
    footer: 'Recursos originales con licencia CC BY‑NC 4.0. Crédito: Asociación Ministerial, Asociación General de los Adventistas del Séptimo Día.',
  },

  brandSeries: 'All Things New',
  brand: 'Revelation Media Resources',
  skipLink: 'Saltar al contenido',
  backToTop: 'Volver arriba',

  nav: [
    { label: 'Qué incluye', href: '#inside' },
    { label: 'Serie', href: '#series' },
    { label: 'Demo', href: '#demo' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Traducir', href: '#translate' },
  ],

  header: {
    languageLabel: 'Idioma',
    cta: 'Descargar',
    mobileCta: 'Descargar el kit',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  placeholderTags: {
    hero: 'Imagen principal provisional',
    trailer: 'Portada provisional',
    portrait: 'Foto provisional',
    stats: 'Cifras y contenido de ejemplo',
    languages: 'Lista de idiomas de ejemplo',
  },

  hero: {
    eyebrow: 'Biblioteca de series evangelísticas',
    title: 'Revelation Media *Resources*',
    lead: 'Todo lo que necesita para dirigir una serie sobre profecía: presentaciones, imágenes, videos y materiales promocionales. Listos para usar, totalmente editables y **pensados para pastores y líderes de ministerio.**',
    primaryCta: 'Descargar el kit',
    secondaryCta: 'Ver el tráiler',
    trust: ['PowerPoint', 'Keynote', 'Google Slides', 'Inglés ya, más idiomas pronto'],
    cue: 'Ver el tráiler',
    imageAlt: '',
  },

  trailer: {
    eyebrow: 'Tráiler',
    title: 'Descubra lo que *incluye*',
    sub: 'Un breve recorrido por las presentaciones, imágenes y recursos del kit completo.',
    playLabel: 'Reproducir tráiler',
    metaLabel: 'Tráiler oficial',
    duration: '0:19',
    modalLabel: 'Tráiler',
    closeLabel: 'Cerrar',
    placeholder: 'Aquí se reproducirá el tráiler (video de YouTube, se carga al hacer clic).',
    videoTitle: 'Tráiler de Revelation Media Resources',
  },

  inside: {
    eyebrow: 'Qué incluye',
    title: 'Un kit. Todos los *recursos* que necesita.',
    sub: 'Un conjunto completo de materiales con diseño profesional para una serie evangelística entera.',
    stats: [
      { value: '9', label: 'Presentaciones' },
      { value: '~450', label: 'Diapositivas' },
      { value: '~400', label: 'Imágenes' },
      { value: '10', label: 'Videos' },
      { value: '20', label: 'Recursos de promoción' },
    ],
    approx: 'unos',
    note: 'Una muestra de algunos materiales del kit.',
    gallery: {
      slide: { caption: 'Diapositiva', kicker: 'Sesión 01', title: 'La profecía *se revela*', alt: 'Una diapositiva de la serie en una pantalla frente al público' },
      flyer: { caption: 'Volante impreso', kicker: 'Muy pronto', title: 'Esperanza para el mañana', alt: 'Manos sosteniendo un volante impreso de la serie' },
      art: { caption: 'Arte de la serie', alt: 'Arte de la serie en un cartel, tarjetas, una tableta y un teléfono' },
      video: { caption: 'Video', alt: 'Un video de la serie reproduciéndose en un portátil' },
      social: { caption: 'Publicación en redes', title: 'Hay esperanza para el mañana', alt: 'Una publicación de la serie para redes sociales en un teléfono' },
    },
  },

  series: {
    eyebrow: 'All Things New. La esperanza comienza aquí.',
    title: 'Seminario de profecía *de Daniel y Apocalipsis*',
    sub: 'Nueve noches en los libros de Daniel y Apocalipsis, leídos en lenguaje sencillo desde la Biblia misma. Veremos que Dios contó la historia de antemano, que tiene un plan para acabar con el mal, el sufrimiento y la muerte, y que Jesús viene para hacer nuevas todas las cosas. Cada noche pregunta qué significa esa esperanza para su vida hoy.',
    label: 'Presentación',
    download: 'Descargar',
    coming: 'Disponible en noviembre de 2026',
    items: [
      { ref: 'Daniel 2', title: 'La historia escrita de antemano', text: 'El sueño olvidado de un rey anunció el ascenso y la caída de los imperios del mundo siglos antes de que ocurrieran, y la historia lo ha seguido línea por línea. Si Dios conoció el final desde el principio, puede confiarle su mañana.' },
      { ref: 'El gran conflicto', title: 'La guerra detrás del mundo', text: '¿Por qué hay tanto dolor en un mundo creado por un Dios de amor? La Biblia muestra el origen del mal, cómo la cruz decidió la guerra y promete que los días del mal están contados.' },
      { ref: 'Daniel 8–9 y el santuario', title: 'La profecía más larga y nuestro Sumo Sacerdote', text: 'La profecía de tiempo más larga de la Biblia señaló el año en que vendría el Mesías, y Él llegó a tiempo. La misma profecía muestra lo que Jesús hace hoy por nosotros en el cielo, como el Sumo Sacerdote que perdona en cuanto acudimos a Él.' },
      { ref: 'El sábado', title: 'La señal que Él nunca cambió', text: 'Desde el Edén hasta la tierra nueva, el séptimo día es la señal del Creador de descanso y pertenencia, guardado por Jesús y nunca cambiado por Dios. Es un regalo semanal, un día para detenerse y descansar en la obra terminada de Cristo.' },
      { ref: 'Daniel 7 y Apocalipsis 13–14', title: 'La decisión final', text: 'Daniel 7 y Apocalipsis 13 describen el último conflicto de la historia, y se trata de la adoración. Dios cuenta la historia de antemano para que nadie sea engañado y para que todos puedan elegirlo en libertad.' },
      { ref: 'Los tres ángeles', title: 'El último mensaje del cielo', text: 'Antes de que Jesús regrese, Dios envía un último mensaje a toda nación, tribu, lengua y pueblo. Es el evangelio eterno, un llamado a adorar al Creador y una invitación amorosa a salir de la confusión y venir a sus brazos.' },
      { ref: 'El infierno', title: 'El fin del mal', text: 'Dios no atormentará a nadie para siempre. La Biblia muestra cómo pondrá fin por completo al pecado, a Satanás, al sufrimiento y a la muerte, y luego hará nuevas todas las cosas, para que usted pueda mirar el futuro sin temor.' },
      { ref: 'Los cuatro jinetes y el remanente', title: 'La iglesia que Dios busca', text: 'A través de la persecución y el compromiso, Dios siempre ha tenido un pueblo. Apocalipsis muestra cómo reconocerlo en los últimos días y lo invita a encontrar un hogar en él.' },
      { ref: 'La segunda venida y la tierra nueva', title: 'Todo ojo lo verá', text: 'Jesús viene otra vez, en persona, y todo ojo lo verá. Los muertos en Cristo resucitarán, las señales son dolores de parto con un fin y un propósito, y nos espera una tierra nueva donde Dios mismo enjugará toda lágrima. La esperanza comienza aquí y termina en su presencia.' },
    ],
  },

  journey: {
    eyebrow: 'El programa completo',
    title: 'De la primera invitación al *certificado final*',
    sub: 'El kit cubre cada etapa de la serie, para que nada quede a la improvisación.',
    phases: ['Antes de la serie', 'Durante la serie', 'Después de la serie'],
    steps: [
      { phase: 0, title: 'Promover e invitar', text: 'Materiales para anunciar la serie y llenar el lugar.', chips: ['Carteles', 'Redes sociales', 'Invitaciones'] },
      { phase: 1, title: 'Dirigir las reuniones', text: 'Una presentación lista para cada sesión de la serie.', chips: ['Presentaciones', 'Diapositivas'] },
      { phase: 1, title: 'Enriquecer con medios', text: 'Imágenes y videos adicionales para los momentos clave.', chips: ['Imágenes', 'Videos'] },
      { phase: 1, title: 'Entregar', text: 'Materiales impresos que los asistentes pueden llevar a casa.', chips: ['Folletos', 'Guías de estudio'] },
      { phase: 2, title: 'Celebrar', text: 'Plantillas para honrar a quienes completaron la serie.', chips: ['Certificados', 'Reconocimientos'] },
    ],
  },

  quality: {
    eyebrow: 'Calidad',
    title: 'Hecho con esmero, *listo* para su iglesia',
    sub: 'Cada archivo está diseñado para verse bien en pantalla y funcionar sin esfuerzo adicional.',
    cta: 'Descargar el kit',
    features: [
      { icon: 'image', title: 'Visuales modernos', text: 'Imágenes cinematográficas que conectan con el público de hoy.' },
      { icon: 'book', title: 'Revisado teológicamente', text: 'Contenido revisado con cuidado para asegurar su fidelidad bíblica.' },
      { icon: 'screen', title: 'Listo para presentar', text: 'Abra el archivo y comience. No necesita saber de diseño.' },
      { icon: 'pen', title: 'Totalmente editable', text: 'Adapte textos, orden y detalles a su iglesia.' },
      { icon: 'globe', title: 'Multilingüe', badge: 'Próximamente', text: 'Las traducciones a más idiomas están en camino.', link: { label: 'Ayudar a traducir', href: '#translate' } },
    ],
  },

  demo: {
    eyebrow: 'Demo',
    title: 'Compruebe la calidad *usted mismo*',
    sub: 'Descargue la presentación completa de Daniel 2 junto con sus materiales promocionales.',
    checklist: ['La presentación completa de Daniel 2', 'Sus materiales promocionales', 'Descarga directa, sin registro'],
    cta: 'Descargar demo',
    meta: 'Daniel 2 · ZIP',
    subSlides: 'Vea la presentación completa de Daniel 2. La descarga completa con sus materiales promocionales llegará pronto.',
    checklistSlides: ['La presentación completa de Daniel 2', 'Materiales promocionales muy pronto', 'Se abre al instante, sin registro'],
    open: 'Abrir la presentación',
    metaSlides: 'Daniel 2 · Google Slides',
    soon: 'Disponible pronto',
    slideTitle: 'La profecía se revela',
  },

  about: {
    eyebrow: 'Acerca de',
    title: 'Una iniciativa global para *equipar a los pastores*',
    lead: 'All Things New: Revelation Media Resources es una iniciativa global de la Asociación Ministerial de la Asociación General de los Adventistas del Séptimo Día, creada para equipar a pastores, evangelistas e iglesias con recursos de alta calidad, centrados en la Biblia, para presentar los mensajes proféticos de Daniel y Apocalipsis.',
    paragraphs: [
      'Nuestra visión es hacer que la verdad bíblica sea más visual, accesible, adaptable y útil en distintas culturas e idiomas. La colección incluye diapositivas, imágenes originales, videos y recursos promocionales pensados para el uso práctico en el ministerio.',
      'Estos recursos originales tienen licencia CC BY‑NC 4.0: puede usarlos, adaptarlos, traducirlos y compartirlos para el ministerio del evangelio, dando crédito y sin fines comerciales.',
    ],
    imageAlt: 'Un pastor presenta un seminario sobre Daniel y Apocalipsis ante la congregación',
  },


  faq: {
    eyebrow: 'Preguntas',
    title: 'Antes de que *pregunte*',
    items: [
      { q: '¿Qué es Revelation Media Resources?', a: 'Revelation Media Resources es una biblioteca de materiales listos para dirigir una serie evangelística sobre profecía: presentaciones, diapositivas, imágenes, videos y materiales promocionales para pastores, iglesias y organizaciones ministeriales.', open: true },
      { q: '¿Tengo que pagar o registrarme?', a: 'No. No tiene costo ni requiere registro: todo se descarga directamente. Los recursos originales tienen licencia CC BY‑NC 4.0, por lo que puede usarlos, adaptarlos, traducirlos y compartirlos en su ministerio, siempre que dé crédito y no los use con fines comerciales.' },
      { q: '¿Quién puede usar estos materiales?', a: 'Pastores, líderes de iglesia y organizaciones ministeriales que quieran dirigir una serie evangelística. No necesita saber de diseño: los archivos están listos para presentar y son fáciles de adaptar a su iglesia.' },
      { q: '¿Qué formatos incluye?', a: 'Las presentaciones vienen en PowerPoint, Keynote y Google Slides. Las imágenes y los videos se entregan en formatos estándar que funcionan en cualquier dispositivo.' },
      { q: '¿Puedo editar los materiales?', a: 'Sí. Puede cambiar textos, reordenar diapositivas y agregar los datos de su iglesia para adaptarlos a su programa.' },
      { q: '¿Qué idiomas están disponibles?', a: 'Hoy el kit está disponible en inglés. Pronto llegarán más idiomas, que se irán agregando progresivamente; vea la lista en la sección de traducción más abajo. ¿Domina otro idioma? Puede ayudarnos a traducirlo.' },
    ],
  },

  translate: {
    eyebrow: 'Traducción',
    title: 'Ayude a llevar el kit a *más idiomas*',
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
    legendAvailable: 'Disponible',
    legendInProgress: 'Próximamente',
    sub: '¿Domina otro idioma? Únase a nuestros traductores voluntarios y ayude a pastores de todo el mundo a compartir este mensaje.',
    cta: 'Ser traductor voluntario',
    orWrite: 'O escriba a {email}',
    mailSubject: 'Traductor voluntario',
  },

  footer: {
    tagline: 'Una biblioteca visual moderna de materiales para series evangelísticas, pensada para pastores y líderes de ministerio.',
    columns: { explore: 'Explorar', help: 'Ayuda', legal: 'Legal' },
    links: {
      faq: 'Preguntas',
      inside: 'Qué incluye',
      series: 'Serie',
      support: 'Soporte',
      demo: 'Demo',
      contact: 'Contacto',
      about: 'Nosotros',
      terms: 'Términos de uso',
      translate: 'Traducir',
      privacy: 'Política de privacidad',
    },
    copyright: '© 2026 Asociación Ministerial de la Asociación General de los Adventistas del Séptimo Día',
    cookieSettings: 'Configuración de cookies',
  },

  consent: {
    text: 'Usamos cookies de analítica para entender cómo se usa el sitio. Consulte nuestra {privacy}.',
    privacyLink: 'Política de privacidad',
    accept: 'Aceptar',
    decline: 'Rechazar',
    label: 'Consentimiento de cookies',
  },

  legal: {
    backHome: 'Volver al inicio',
    updated: 'Última actualización: 29 de septiembre de 2026',
    terms: {
      title: 'Términos de uso',
      description: 'Términos de uso de Revelation Media Resources.',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estos términos explican cómo puede usar la biblioteca y sus materiales.',
      sections: [
        { heading: 'Quiénes somos', text: 'La Asociación Ministerial de la Asociación General de los Adventistas del Séptimo Día ofrece Revelation Media Resources a pastores, iglesias y organizaciones ministeriales.' },
        { heading: 'Uso de los materiales', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.' },
        { heading: 'Lo que no está permitido', text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
        { heading: 'Cuentas y acceso', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { heading: 'Cambios en estos términos', text: 'Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum, nullam quis risus eget urna mollis ornare vel eu leo.' },
        { heading: 'Contacto', text: '¿Preguntas sobre estos términos? Escríbanos a {email}.' },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      description: 'Cómo Revelation Media Resources recopila y usa los datos personales.',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Esta política explica qué datos recopilamos, por qué y qué opciones tiene.',
      sections: [
        { heading: 'Qué recopilamos', text: 'Descargar el kit no requiere datos personales: no hay registro ni formulario de suscripción.' },
        { heading: 'Cookies y analítica', text: 'Con su consentimiento usamos Google Analytics para entender cómo se usa el sitio. Puede cambiar su elección en cualquier momento desde "Configuración de cookies" en el pie de página.' },
        { heading: 'Sus derechos', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper, cras mattis consectetur purus sit amet fermentum.' },
        { heading: 'Contacto', text: '¿Preguntas sobre sus datos? Escríbanos a {email}.' },
      ],
    },
  },

  notFound: {
    title: 'Página no encontrada',
    eyebrow: '404',
    heading: 'Esta página *no existe*',
    text: 'La página que busca puede haberse movido o nunca existió.',
    cta: 'Volver al inicio',
    secondaryCta: 'Descargar el kit',
  },

};

export default es;
