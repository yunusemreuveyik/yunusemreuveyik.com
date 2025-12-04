// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import intlConfig from "../next-intl.config";

export default createMiddleware({
  locales: intlConfig.locales,
  defaultLocale: "tr",
  localePrefix: intlConfig.localePrefix,
});

export const config = {
  matcher: ["/", "/(tr|en)/:path*"],
};
