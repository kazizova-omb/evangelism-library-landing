// Two design options share one codebase: v1 (dark, "/") and v2 (light editorial, "/v2").
export type Theme = 'v1' | 'v2';

export function getTheme(astro: { url: URL }): Theme {
  return /\/v2(?:\.html)?$/.test(astro.url.pathname) ? 'v2' : 'v1';
}
