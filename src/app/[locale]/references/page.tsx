import type { Metadata } from "next";
import { localeConfig, type Locale } from "@/lib/seo-config";
import { buildPageMetadata } from "@/lib/page-metadata";
import TestimonialsClient from "./testimonials-client";
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
  const pageData = localeData.pages.references;

  return buildPageMetadata({
    locale,
    segment: "references",
    title: pageData.title,
    description: pageData.description,
  });
}

export default async function ReferencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeData = localeConfig[locale as Locale] || localeConfig.en;
  const pageData = localeData.pages.references;

  return (
    <>
      <PageJsonLd
        locale={locale}
        title={pageData.title}
        description={pageData.description}
        pathSegment="references"
        breadcrumbLabel={locale === "tr" ? "Referanslar" : "References"}
      />
      <TestimonialsClient />
    </>
  );
}
