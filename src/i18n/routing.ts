// i18n/routing.ts
import { createNavigation } from "next-intl/navigation";

export const locales = ["tr", "en"] as const;
export const localePrefix = "always" as const;
export const defaultLocale = "tr" as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix,
  defaultLocale,
});
