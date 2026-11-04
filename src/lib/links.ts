import { localePath } from '../i18n';

/** In-page anchors on a landing page, absolute links ("/es#inside") elsewhere; site paths ("/downloads")
    get the language prefix and base path. */
export const anchor = (href: string, home: boolean, lang: string) => {
  if (href.startsWith('/')) return localePath(lang, href);
  return home || !href.startsWith('#') ? href : `${localePath(lang, '/')}${href}`;
};
