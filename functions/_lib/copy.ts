// Copy for emails and the download API comes from the same locale files as the site.
// Pages Functions are bundled without Vite, so locales are imported explicitly:
// when adding a language, add it here too.
import en from '../../src/i18n/locales/en.ts';
import es from '../../src/i18n/locales/es.ts';
import { typoDeep } from '../../src/i18n/typo.ts';
import { defaultLocale } from '../../src/i18n/config.mjs';

const all = { en, es } as const;
export type Lang = keyof typeof all;

export const isLang = (l: unknown): l is Lang => typeof l === 'string' && l in all;

export function copy(lang: string) {
  const code = (isLang(lang) ? lang : defaultLocale) as Lang;
  return typoDeep(all[code], all[code].locale.htmlLang);
}
