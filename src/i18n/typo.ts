// Line-break typography, applied to all copy when a locale is loaded.
//
// Rule: a short function word (article, preposition, conjunction, determiner)
// never ends a line. It is tied to the next word with a no-break space, so
// "to the | final certificate" can only break as "to | the final ..." never
// "... to the | final". Numbers stay with their units ("120 MB").
// Headings are also balanced and paragraphs avoid orphans (see global.css).

const NBSP = ' ';

const SHORT: Record<string, string[]> = {
  // "by" / "por" are left out on purpose: "Created by | <name>" reads naturally
  en: ['a', 'an', 'the', 'to', 'of', 'in', 'on', 'at', 'for', 'and', 'or', 'nor', 'but', 'as', 'is', 'it',
    'we', 'our', 'your', 'my', 'its', 'no', 'so', 'up', 'if', 'every', 'each', 'this', 'that', 'these', 'those',
    'with', 'from', 'into', 'per', 'via'],
  es: ['a', 'al', 'de', 'del', 'el', 'la', 'lo', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'e', 'o', 'u',
    'en', 'con', 'para', 'sin', 'su', 'sus', 'mi', 'tu', 'que', 'se', 'es', 'ni', 'cada', 'este', 'esta', 'sobre',
    'todo', 'toda', 'todos', 'todas'],
};

const cache = new Map<string, RegExp>();
function pattern(lang: string): RegExp | null {
  const words = SHORT[lang];
  if (!words) return null;
  if (!cache.has(lang)) {
    // (start, space or opening mark) + word + space: that space becomes a no-break space
    cache.set(lang, new RegExp(`(^|[\\s(*¿¡"“])(${words.join('|')}) (?=\\S)`, 'giu'));
  }
  return cache.get(lang)!;
}

export function typo(text: string, lang: string): string {
  const re = pattern(lang);
  let out = text;
  // run twice so chains like "to the final" bind both links
  if (re) out = out.replace(re, `$1$2${NBSP}`).replace(re, `$1$2${NBSP}`);
  // number + unit: "120 MB"
  out = out.replace(/(\d) (?=(?:MB|GB|KB|%)\b)/g, `$1${NBSP}`);
  return out;
}

// Keys whose values are identifiers, not reading text.
const SKIP = new Set(['locale', 'href', 'lang', 'code', 'icon', 'htmlLang', 'ogLocale']);

export function typoDeep<T>(value: T, lang: string, key = ''): T {
  if (SKIP.has(key)) return value;
  if (typeof value === 'string') return typo(value, lang) as T;
  if (Array.isArray(value)) return value.map((v) => typoDeep(v, lang)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, typoDeep(v, lang, k)])) as T;
  }
  return value;
}
