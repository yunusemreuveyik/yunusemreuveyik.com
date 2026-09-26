import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/seo-config";

export type PagePathKey =
  | ""
  | "experience"
  | "references"
  | "projects"
  | "showcase"
  | "about";

function pathsForSegment(segment: PagePathKey) {
  const suffix = segment ? `/${segment}` : "";
  return {
    en: `/en${suffix}`,
    tr: `/tr${suffix}`,
  };
}

export function languageAlternates(
  locale: string,
  segment: PagePathKey
): NonNullable<Metadata["alternates"]> {
  const paths = pathsForSegment(segment);
  return {
    canonical: absoluteUrl(`/${locale}${segment ? `/${segment}` : ""}`),
    languages: {
      en: absoluteUrl(paths.en),
      tr: absoluteUrl(paths.tr),
      "x-default": absoluteUrl(paths.tr),
    },
  };
}

export function buildPageMetadata({
  locale,
  segment,
  title,
  description,
  keywords,
}: {
  locale: string;
  segment: PagePathKey;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const pagePath = `/${locale}${segment ? `/${segment}` : ""}`;
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";

  return {
    title: { absolute: title },
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: locale === "tr" ? "en_US" : "tr_TR",
      url: absoluteUrl(pagePath),
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@yunusemreuveyik",
    },
    alternates: languageAlternates(locale, segment),
  };
}
