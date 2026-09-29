import { locales as codes, defaultLocale } from './config.mjs';
import type { Site } from './types';
import { typoDeep } from './typo';

export type { Site };
export { defaultLocale };

const files = import.meta.glob<{ default: Site }>('./locales/*.ts', { eager: true });

export const locales: Record<string, Site> = Object.fromEntries(
  (codes as string[]).map((code) => {
    const mod = files[`./locales/${code}.ts`];
    if (!mod) throw new Error(`i18n: missing src/i18n/locales/${code}.ts for locale "${code}"`);
    // every string gets the line-break rules (see typo.ts)
    return [code, typoDeep(mod.default, mod.default.locale.htmlLang)];
  }),
);

export const localeCodes = codes as string[];

type AstroLike = { currentLocale?: string };

export function getLang(astro: AstroLike): string {
  const l = astro.currentLocale;
  return l && l in locales ? l : defaultLocale;
}

/** Copy for the page being rendered. */
export function useT(astro: AstroLike): Site {
  return locales[getLang(astro)];
}

/** "/terms" -> "/es/terms" for non-default languages. */
export function localePath(lang: string, path = '/'): string {
  if (lang === defaultLocale) return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

/** Same page in another language. */
export function switchPath(pathname: string, from: string, to: string): string {
  let rest = pathname.replace(/\.html$/, '').replace(/\/index$/, '');
  if (from !== defaultLocale) rest = rest.replace(new RegExp(`^/${from}(?=/|$)`), '') || '/';
  return localePath(to, rest || '/');
}

/** getStaticPaths helper for src/pages/[...lang]/ routes. */
export function langPaths() {
  return localeCodes.map((code) => ({ params: { lang: code === defaultLocale ? undefined : code } }));
}
