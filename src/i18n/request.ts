// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const current =
    requested && (locales as readonly string[]).includes(requested)
      ? requested
      : defaultLocale;
  const messages = (await import(`./messages/${current}.json`)).default;
  return {
    locale: current,
    messages,
    timeZone: "Europe/Istanbul",
  };
});
