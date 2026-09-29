import type { APIRoute } from 'astro';
import { locales, localeCodes, defaultLocale, localePath } from '../i18n';
import { legalPagesReady } from '../i18n/config.mjs';
import { config } from '../config';

// /llms.txt: a plain summary for AI assistants and answer engines (llmstxt.org).
// Generated from the same copy as the page, so it never drifts.
export const GET: APIRoute = ({ site }) => {
  const s = locales[defaultLocale];
  const url = (lang: string, path = '/') => new URL(localePath(lang, path), site).href;
  const lines = [
    `# ${s.brand}`,
    '',
    `> ${s.meta.description}`,
    '',
    s.faq.items[0].a,
    '',
    '## Key facts',
    '',
    `- Audience: ${s.meta.audience}`,
    '- Price: free',
    `- Formats: ${s.hero.trust.slice(0, 3).join(', ')}`,
    `- What is included: ${s.inside.stats.map((st) => `${st.value} ${st.label.toLowerCase()}`).join(', ')}`,
    `- Program stages: ${s.journey.steps.map((st) => st.title).join('; ')}`,
    `- Site languages: ${localeCodes.map((c) => `${locales[c].locale.name} (${url(c)})`).join(', ')}`,
    '',
    '## How to get access',
    '',
    ...s.getKit.steps.map((st, i) => `${i + 1}. ${st.title}. ${st.text}`),
    `Request form: ${url(defaultLocale)}#get`,
    '',
    '## Pages',
    '',
    `- [${s.brand}](${url(defaultLocale)}): ${s.meta.description}`,
    ...localeCodes.filter((c) => c !== defaultLocale).map((c) => `- [${locales[c].meta.homeTitle}](${url(c)}): ${locales[c].meta.description}`),
    ...(legalPagesReady ? [`- [${s.legal.terms.title}](${url(defaultLocale, '/terms')})`, `- [${s.legal.privacy.title}](${url(defaultLocale, '/privacy')})`] : []),
    '',
    '## FAQ',
    '',
    ...s.faq.items.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Contact',
    '',
    `- General: ${config.contactEmail}`,
    `- Support: ${config.supportEmail}`,
    `- Volunteer translators: ${config.translateEmail}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
