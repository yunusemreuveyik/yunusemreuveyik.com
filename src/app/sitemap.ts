import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  showcaseSites,
  showcaseSitePublicUrl,
} from "@/lib/seo-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "tr"];
  const lastModified = new Date();

  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/showcase", priority: 0.9, changeFrequency: "weekly" },
    { path: "/experience", priority: 0.8, changeFrequency: "monthly" },
    { path: "/references", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const localizedPath = `/${locale}${page.path}`;
      entries.push({
        url: absoluteUrl(localizedPath),
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: absoluteUrl(`/en${page.path}`),
            tr: absoluteUrl(`/tr${page.path}`),
            "x-default": absoluteUrl(`/tr${page.path}`),
          },
        },
      });
    }
  }

  for (const site of showcaseSites) {
    if (!("staticPath" in site)) continue;
    entries.push({
      url: showcaseSitePublicUrl(site),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
