// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./routing";

export default getRequestConfig(async ({ locale = defaultLocale }) => {
  const current = (locales as readonly string[]).includes(locale)
    ? locale
    : defaultLocale;
  const messages = (await import(`./messages/${current}.json`)).default;
  return { 
    locale: current, 
    messages,
    timeZone: "Europe/Istanbul"
  };
});
