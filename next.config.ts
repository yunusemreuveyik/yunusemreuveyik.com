// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Point to your request config (you're using /src)
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Only enable static export for production builds
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    trailingSlash: true, // Ensure trailing slashes for better .htaccess compatibility
  }),

  images: {
    // Only disable optimization for static export (production)
    ...(process.env.NODE_ENV === "production" && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "eveara.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.medya-t.com",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
