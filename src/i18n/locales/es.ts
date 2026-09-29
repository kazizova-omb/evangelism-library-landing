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
    description:
      'Presentaciones, imágenes, videos y materiales promocionales para dirigir una serie sobre profecía. Listos para usar, totalmente editables y gratuitos para pastores y líderes de ministerio.',
    ogImageAlt: 'Revelation Media Resources: todo lo que necesita para dirigir una serie sobre profecía',
  },

  organization: {
    name: 'Lorem Ipsum Ministries',
    logo: '/favicon.svg',
  },

  brand: 'Revelation Media Resources',
  skipLink: 'Saltar al contenido',
  backToTop: 'Volver arriba',

  nav: [
    { label: 'Qué incluye', href: '#inside' },
    { label: 'Demo', href: '#demo' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Traducir', href: '#translate' },
  ],

  header: {
    languageLabel: 'Idioma',
    cta: 'Obtener materiales',
    mobileCta: 'Obtener los materiales',
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
    lead: 'Todo lo que necesita para dirigir una serie sobre profecía: presentaciones, imágenes, videos y materiales promocionales. Listos para usar, totalmente editables y **gratuitos para pastores y líderes de ministerio.**',
    primaryCta: 'Obtener los materiales',
    secondaryCta: 'Descargar demo',
    trust: ['PowerPoint', 'Keynote', 'Google Slides', 'Varios idiomas'],
    cue: 'Ver el tráiler',
    imageAlt: '',
  },

  trailer: {
    eyebrow: 'Tráiler',
    title: 'Descubra lo que *incluye*',
    sub: 'Un recorrido de 90 segundos por las presentaciones, imágenes y recursos del kit completo.',
    playLabel: 'Reproducir tráiler',
    metaLabel: 'Tráiler oficial',
    duration: '1:30',
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
      { value: '24', label: 'Presentaciones' },
      { value: '1200+', label: 'Diapositivas' },
      { value: '600+', label: 'Imágenes' },
      { value: '30', label: 'Videos' },
      { value: '50+', label: 'Recursos de promoción' },
    ],
    note: 'Una muestra de algunos materiales del kit.',
    gallery: {
      slide: { caption: 'Diapositiva', kicker: 'Sesión 01', title: 'La profecía *se revela*', alt: 'Diapositiva de una presentación de la serie' },
      flyer: { caption: 'Volante impreso', kicker: 'Muy pronto', title: 'Esperanza para el mañana', alt: 'Volante impreso de la serie' },
      art: { caption: 'Arte de la serie', alt: 'Arte de la serie' },
      video: { caption: 'Video', alt: 'Fotograma de un video' },
      social: { caption: 'Publicación en redes', title: 'Hay esperanza para el mañana', alt: 'Publicación para redes sociales de la serie' },
    },
  },

  journey: {
    eyebrow: 'El programa completo',
    title: 'De la primera invitación al *certificado final*',
    sub: 'El kit cubre cada etapa de la serie, para que nada quede a la improvisación.',
    steps: [
      { title: 'Promover e invitar', text: 'Materiales para anunciar la serie y llenar el lugar.', chips: ['Carteles', 'Redes sociales', 'Invitaciones'] },
      { title: 'Dirigir las reuniones', text: 'Una presentación lista para cada sesión de la serie.', chips: ['Presentaciones', 'Diapositivas'] },
      { title: 'Enriquecer con medios', text: 'Imágenes y videos adicionales para los momentos clave.', chips: ['Imágenes', 'Videos'] },
      { title: 'Entregar', text: 'Materiales impresos que los asistentes pueden llevar a casa.', chips: ['Folletos', 'Guías de estudio'] },
      { title: 'Celebrar', text: 'Plantillas para honrar a quienes completaron la serie.', chips: ['Certificados', 'Reconocimientos'] },
    ],
  },

  quality: {
    eyebrow: 'Calidad',
    title: 'Hecho con esmero, *listo* para su iglesia',
    sub: 'Cada archivo está diseñado para verse bien en pantalla y funcionar sin esfuerzo adicional.',
    cta: 'Obtener los materiales',
    features: [
      { icon: 'image', title: 'Estilo visual moderno', text: 'Imágenes cinematográficas que conectan con el público de hoy.' },
      { icon: 'book', title: 'Revisado teológicamente', text: 'Contenido revisado con cuidado para asegurar su fidelidad bíblica.' },
      { icon: 'screen', title: 'Listo para presentar', text: 'Abra el archivo y comience. No necesita saber de diseño.' },
      { icon: 'pen', title: 'Totalmente editable', text: 'Adapte textos, orden y detalles a su iglesia.' },
      { icon: 'doc', title: 'Su formato favorito', text: 'Funciona con los programas que ya usa.', chips: ['PowerPoint', 'Keynote', 'Google Slides'] },
      { icon: 'globe', title: 'Varios idiomas', text: 'Disponible en varios idiomas, y vienen más.', link: { label: 'Ver todos los idiomas', href: '#translate' } },
    ],
  },

  demo: {
    eyebrow: 'Demo gratuita',
    title: 'Compruebe la calidad *usted mismo*',
    sub: 'Descargue una muestra breve antes de solicitar el kit completo.',
    checklist: ['Una presentación completa', 'Una selección de imágenes', 'Ejemplos de materiales promocionales'],
    cta: 'Descargar demo',
    meta: 'ZIP · 120 MB',
    slideTitle: 'La profecía se revela',
  },

  about: {
    eyebrow: 'Sobre el equipo',
    title: 'Creado por *Lorem Ipsum Ministries*',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    ],
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus, ut fermentum massa justo sit amet risus.',
    author: 'Justin Lorem',
    role: 'Líder del proyecto, Lorem Ipsum Ministries',
    imageAlt: 'Justin Lorem, líder del proyecto',
  },

  faq: {
    eyebrow: 'Preguntas',
    title: 'Antes de que *pregunte*',
    items: [
      { q: '¿Es realmente gratuito?', a: 'Sí. El kit completo es gratuito para pastores, iglesias y organizaciones ministeriales. Solo complete el breve formulario para obtener acceso.', open: true },
      { q: '¿Qué formatos incluye?', a: 'Las presentaciones vienen en PowerPoint, Keynote y Google Slides. Las imágenes y los videos se entregan en formatos estándar que funcionan en cualquier dispositivo.' },
      { q: '¿Puedo editar los materiales?', a: 'Sí. Puede cambiar textos, reordenar diapositivas y agregar los datos de su iglesia para adaptarlos a su programa.' },
      { q: '¿Qué idiomas están disponibles?', a: 'El kit está disponible en varios idiomas, que se indican en la sección de traducción más abajo. ¿No ve el suyo? Puede ayudarnos a traducirlo.' },
      { q: '¿Cómo accedo a los materiales después de registrarme?', a: 'Su correo se agrega a la biblioteca de inmediato. Inicie sesión con ese correo cuando quiera y le enviaremos un código de un solo uso. No hay contraseña que recordar.' },
    ],
  },

  getKit: {
    eyebrow: 'Obtenga el kit completo',
    title: 'Acceso *gratuito* a toda la biblioteca',
    sub: 'Cuéntenos un poco sobre su iglesia y le abriremos la biblioteca de inmediato.',
    steps: [
      { title: 'Complete el formulario', text: 'Toma alrededor de un minuto.' },
      { title: 'Revise su correo', text: 'Le enviaremos las instrucciones para iniciar sesión.' },
      { title: 'Inicie sesión y descargue', text: 'Todos los programas, idiomas y formatos en un solo lugar.' },
    ],
    fields: {
      name: { label: 'Nombre completo', placeholder: 'Juan Pérez', error: 'Escriba su nombre.' },
      email: { label: 'Correo electrónico', placeholder: 'usted@iglesia.org', error: 'Escriba un correo electrónico válido.', suggest: '¿Quiso decir {email}?' },
      country: { label: 'País', placeholder: 'Empiece a escribir...', error: 'Escriba su país.' },
      organization: { label: 'Iglesia u organización', placeholder: 'Nombre de su iglesia', error: 'Escriba su iglesia u organización.' },
      division: { label: 'División', placeholder: 'Seleccione una división' },
      conference: { label: 'Asociación o misión', placeholder: 'p. ej. Asociación Central' },
      comment: { label: 'Comentario', placeholder: 'Algo que quiera contarnos' },
    },
    optional: '(opcional)',
    consent: {
      text: 'Acepto los {terms} y el tratamiento de mis datos según la {privacy}.',
      error: 'Acepte los términos para continuar.',
    },
    returning: {
      title: '¿Ya se registró?',
      text: 'Su acceso lo espera en su bandeja de entrada. Busque el correo de Revelation Media Resources y siga el enlace para iniciar sesión.',
      help: '¿No recibió el correo? Escriba a {support}.',
    },
    turnstileError: 'Complete la verificación antispam.',
    submit: 'Obtener acceso gratuito',
    sending: 'Enviando',
    note: 'Usaremos sus datos solo para darle acceso y enviarle novedades sobre el kit.',
    networkError: 'Algo salió mal. Inténtelo de nuevo en un momento.',
    success: {
      title: 'Acceso concedido',
      text: 'Enviamos un correo a {email} con las instrucciones para iniciar sesión. ¿No lo encuentra? Revise la carpeta de spam.',
      help: '¿Sigue sin llegar? Escriba a {support}.',
      cta: 'Ir a la biblioteca',
      change: '¿Correo equivocado? Cámbielo',
    },
    divisions: {
      ECD: 'División de África Centro-Oriental',
      ESD: 'División Euroasiática',
      IAD: 'División Interamericana',
      EUD: 'División Intereuropea',
      NAD: 'División Norteamericana',
      NSD: 'División del Norte de Asia-Pacífico',
      SAD: 'División Sudamericana',
      SPD: 'División del Pacífico Sur',
      SID: 'División del Sur de África-Océano Índico',
      SUD: 'División del Sur de Asia',
      SSD: 'División del Sur de Asia-Pacífico',
      TED: 'División Transeuropea',
      WAD: 'División de África Centro-Occidental',
      OTHER: 'Otra / no aplica',
    },
    countryNames: {
      HK: 'Hong Kong',
      MM: 'Myanmar',
    },
  },

  translate: {
    eyebrow: 'Traducción',
    title: 'Ayude a llevar el kit a *más idiomas*',
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
    legendAvailable: 'Disponible',
    legendInProgress: 'En progreso',
    sub: '¿Domina otro idioma? Únase a nuestros traductores voluntarios y ayude a pastores de todo el mundo a compartir este mensaje.',
    cta: 'Ser traductor voluntario',
    orWrite: 'O escriba a {email}',
    mailSubject: 'Traductor voluntario',
  },

  footer: {
    tagline: 'Una biblioteca visual moderna de materiales para series evangelísticas. Gratuita para pastores y líderes de ministerio.',
    columns: { explore: 'Explorar', help: 'Ayuda', legal: 'Legal' },
    links: {
      faq: 'Preguntas',
      inside: 'Qué incluye',
      support: 'Soporte',
      demo: 'Demo',
      contact: 'Contacto',
      about: 'Nosotros',
      terms: 'Términos de uso',
      translate: 'Traducir',
      privacy: 'Política de privacidad',
    },
    copyright: '© 2026 Lorem Ipsum Ministries',
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
        { heading: 'Quiénes somos', text: 'Lorem Ipsum Ministries ofrece Revelation Media Resources de forma gratuita a pastores, iglesias y organizaciones ministeriales.' },
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
        { heading: 'Qué recopilamos', text: 'Cuando solicita el kit recopilamos su nombre, correo, país, iglesia u organización y los datos opcionales que decida compartir.' },
        { heading: 'Para qué lo usamos', text: 'Usamos sus datos para darle acceso a la biblioteca y enviarle novedades sobre el kit.' },
        { heading: 'Cookies y analítica', text: 'Con su consentimiento usamos Google Analytics para entender cómo se usa el sitio. Puede cambiar su elección en cualquier momento desde "Configuración de cookies" en el pie de página.' },
        { heading: 'Protección contra spam', text: 'El formulario está protegido por Cloudflare Turnstile, que procesa datos técnicos para distinguir personas de bots.' },
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
    secondaryCta: 'Obtener los materiales',
  },
};

export default es;
