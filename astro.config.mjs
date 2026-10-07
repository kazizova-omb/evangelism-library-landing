// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { locales, defaultLocale, legalPagesReady } from './src/i18n/config.mjs';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

export default defineConfig({
  site: env.PUBLIC_SITE_URL || 'https://revelationresource.org',
  // sub-folder hosting, e.g. GitHub Pages: /evangelism-library-landing (empty = site root)
  base: env.PUBLIC_BASE_PATH || undefined,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  i18n: {
    locales,
    defaultLocale,
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && (legalPagesReady || !/\/(terms|privacy)$/.test(page)),
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
      i18n: { defaultLocale, locales: Object.fromEntries(locales.map((l) => [l, l])) },
    }),
  ],
});
