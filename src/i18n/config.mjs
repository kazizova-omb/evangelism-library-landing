// Site languages. To add one: create src/i18n/locales/<code>.ts (copy en.ts and
// translate it), then add <code> here. The first entry is the default language,
// served without a prefix (/); the others live under /<code>/.
export const locales = ['en', 'es'];
export const defaultLocale = locales[0];

// Terms and Privacy still hold placeholder text. While false they are marked
// noindex and left out of the sitemap. Set to true once the client's texts are in.
export const legalPagesReady = false;
