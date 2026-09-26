import type { Metadata } from "next";
import {
  siteConfig,
  localeConfig,
  showcaseKeywords,
  type Locale,
} from "@/lib/seo-config";
import { buildPageMetadata } from "@/lib/page-metadata";
import ShowcaseClient from "./showcase-client";
import { ShowcaseJsonLd } from "@/components/json-ld";
import { locales } from "@/i18n/routing";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeData = localeConfig[locale as Locale] || localeConfig.en;
  const pageData = localeData.pages.showcase;
  const lang = locale === "tr" ? "tr" : "en";

  return buildPageMetadata({
    locale,
    segment: "showcase",
    title: pageData.title,
    description: pageData.description,
    keywords: [
      ...siteConfig.keywords,
      ...showcaseKeywords[lang],
      "Dokuma Kuyumculuk",
      "Sistem Teknik Antalya",
      "dokumakuyumculuk.com",
      "sistemteknikantalya.com",
      "Palmarosa Hotel",
      "Palmarosa Hotel demo",
    ],
  });
}

export default async function ShowcasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <ShowcaseJsonLd locale={locale} />
      <ShowcaseClient />
    </>
  );
}
