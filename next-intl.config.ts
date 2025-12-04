// at project root (NOT in src/)
export const locales = ["tr", "en"] as const;
export const localePrefix = "always" as const;
export const defaultLocale = "tr" as const;

const intlConfig = { locales, localePrefix, defaultLocale };
export default intlConfig;
