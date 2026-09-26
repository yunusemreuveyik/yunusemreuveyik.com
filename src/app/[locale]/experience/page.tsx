import type { Metadata } from "next";
import { localeConfig, siteConfig, type Locale } from "@/lib/seo-config";
import { buildPageMetadata } from "@/lib/page-metadata";
import ExperienceClient from "./experience-client";
import { PageJsonLd } from "@/components/json-ld";
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
  const pageData = localeData.pages.experience;

  return buildPageMetadata({
    locale,
    segment: "experience",
    title: pageData.title,
    description: pageData.description,
    keywords: [
      ...siteConfig.keywords,
      ...(locale === "tr"
        ? [
            "MotoFamily kurucu",
            "Microsoft frontend deneyim",
            "Antalya yazılım geliştirici",
          ]
        : [
            "MotoFamily founder",
            "Microsoft frontend experience",
            "Antalya software developer",
          ]),
    ],
  });
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeData = localeConfig[locale as Locale] || localeConfig.en;
  const pageData = localeData.pages.experience;

  return (
    <>
      <PageJsonLd
        locale={locale}
        title={pageData.title}
        description={pageData.description}
        pathSegment="experience"
        breadcrumbLabel={locale === "tr" ? "Deneyim" : "Experience"}
      />
      <ExperienceClient />
    </>
  );
}
