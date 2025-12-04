// next.config.ts
import createNextIntlPlugin from "next-intl/plugin";

// Point to your request config (you’re using /src)
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
