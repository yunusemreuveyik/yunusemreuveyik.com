// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Point to your request config (you're using /src)
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Optimized for Vercel - no static export needed
  // Vercel supports full Next.js features (SSR, ISR, API routes, etc.)
  trailingSlash: true, // Clean URLs with trailing slashes

  // Image optimization enabled (Vercel has built-in image optimization)
  images: {
    // Enable Next.js Image Optimization on Vercel
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
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

  // Performance optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Vercel-specific optimizations
  reactStrictMode: true, // Enable React strict mode
};

export default withNextIntl(nextConfig);
