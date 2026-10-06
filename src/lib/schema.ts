// schema.org structured data (JSON-LD). One @graph per page, nodes linked by @id,
// so search engines and AI answer engines get a consistent picture of the site.
import type { Site } from '../i18n';
import { plain } from './rich';

const BUILD_DATE = new Date().toISOString().slice(0, 10);

interface Ctx {
  site: Site;
  siteUrl: string; // https://revelationresource.org/
  pageUrl: string; // canonical URL of this page
  homeUrl: string; // home page in this language
  lang: string;
  logoUrl: string;
  contactEmail: string;
  langs: string[];
}

const id = (base: string, frag: string) => `${base.replace(/\/$/, '')}/#${frag}`;

export function baseGraph(c: Ctx, page: { name: string; description: string; home: boolean; breadcrumb?: string }) {
  const org = id(c.siteUrl, 'organization');
  const website = id(c.siteUrl, 'website');
  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': org,
      name: c.site.organization.name,
      url: c.siteUrl,
      logo: { '@type': 'ImageObject', url: c.logoUrl },
      email: c.contactEmail,
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: c.contactEmail, availableLanguage: c.langs },
    },
    {
      '@type': 'WebSite',
      '@id': website,
      name: c.site.brand,
      url: c.siteUrl,
      inLanguage: c.langs,
      publisher: { '@id': org },
    },
    {
      '@type': 'WebPage',
      '@id': `${c.pageUrl}#webpage`,
      url: c.pageUrl,
      name: page.name,
      description: page.description,
      inLanguage: c.lang,
      isPartOf: { '@id': website },
      dateModified: BUILD_DATE,
      ...(page.home
        ? {
            about: { '@id': id(c.homeUrl, 'kit') },
            primaryImageOfPage: { '@id': id(c.homeUrl, 'ogimage') },
            // parts a voice assistant can read out
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-title', '.lead', '#faq'] },
          }
        : {}),
      ...(page.breadcrumb ? { breadcrumb: { '@id': `${c.pageUrl}#breadcrumb` } } : {}),
    },
  ];
  if (page.breadcrumb) {
    nodes.push({
      '@type': 'BreadcrumbList',
      '@id': `${c.pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: c.site.brand, item: c.homeUrl },
        { '@type': 'ListItem', position: 2, name: page.breadcrumb, item: c.pageUrl },
      ],
    });
  }
  return nodes;
}

/** Extra nodes for the landing page: the kit itself, how to get it, the FAQ. */
export function homeGraph(c: Ctx, ogImage: string) {
  const s = c.site;
  const org = id(c.siteUrl, 'organization');
  return [
    { '@type': 'ImageObject', '@id': id(c.homeUrl, 'ogimage'), url: ogImage, width: 1200, height: 630 },
    {
      '@type': 'CreativeWork',
      '@id': id(c.homeUrl, 'kit'),
      name: s.meta.kitName,
      alternateName: s.brand,
      description: plain(s.hero.lead),
      url: c.homeUrl,
      image: ogImage,
      inLanguage: c.langs,
      isAccessibleForFree: true,
      license: s.license.url,
      audience: { '@type': 'Audience', audienceType: s.meta.audience },
      publisher: { '@id': org },
      hasPart: s.inside.stats.map((st) => ({ '@type': 'CreativeWork', name: `${st.value} ${st.label}` })),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${c.homeUrl}#get` },
    },
    {
      '@type': 'FAQPage',
      '@id': id(c.homeUrl, 'faq'),
      inLanguage: c.lang,
      mainEntity: s.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
