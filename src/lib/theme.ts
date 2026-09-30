// The site's design. The client chose option 3 ("poster editorial"), which is layered
// on top of option 2 (V2Theme + V3Theme over the base component styles).
// Options 1 and 2 are switched off; the type stays so the theme-aware code keeps working.
export type Theme = 'v1' | 'v2' | 'v3';

export const ACTIVE_THEME: Theme = 'v3';

export function getTheme(_astro?: { url: URL }): Theme {
  return ACTIVE_THEME;
}

/** Classes on <html>: v3 keeps the v2 layer and adds its own on top. */
export const themeClass = (t: Theme) => (t === 'v3' ? 'v2 v3' : t === 'v2' ? 'v2' : undefined);
