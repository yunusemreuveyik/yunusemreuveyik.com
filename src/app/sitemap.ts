import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = ["en", "tr"];
  const lastModified = new Date();

  // Define all pages
  const pages = ["", "/experience", "/references", "/projects"];

  // Generate sitemap entries for all locale/page combinations
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified,
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            tr: `${baseUrl}/tr${page}`,
          },
        },
      });
    }
  }

  return entries;
}
