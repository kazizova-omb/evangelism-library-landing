// Design options share one codebase:
//   v1  dark cinematic        "/"
//   v2  light editorial       "/v2"
//   v3  poster editorial      "/v3"  (builds on v2: condensed display type, indigo blocks)
export type Theme = 'v1' | 'v2' | 'v3';

export function getTheme(astro: { url: URL }): Theme {
  const m = astro.url.pathname.match(/\/(v2|v3)(?:\.html)?$/);
  return (m?.[1] as Theme) ?? 'v1';
}

/** Classes on <html>: v3 keeps the v2 layer and adds its own on top. */
export const themeClass = (t: Theme) => (t === 'v3' ? 'v2 v3' : t === 'v2' ? 'v2' : undefined);
