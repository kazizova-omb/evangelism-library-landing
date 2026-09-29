import { localePath } from '../i18n';

/** In-page anchors on a landing page, absolute links ("/es#inside") elsewhere. */
export const anchor = (href: string, home: boolean, lang: string) =>
  home || !href.startsWith('#') ? href : `${localePath(lang, '/')}${href}`;
