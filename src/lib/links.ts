/** In-page anchors on the landing page, absolute links ("/#inside") elsewhere. */
export const anchor = (href: string, home: boolean) =>
  home || !href.startsWith('#') ? href : `/${href}`;
