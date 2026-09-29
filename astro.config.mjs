// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { locales, defaultLocale } from './src/i18n/config.mjs';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

export default defineConfig({
  site: env.PUBLIC_SITE_URL || 'https://revelationresource.org',
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
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale, locales: Object.fromEntries(locales.map((l) => [l, l])) },
    }),
  ],
});
