import type { Metadata } from "next";
import { siteConfig, localeConfig, type Locale } from "@/lib/seo-config";
import TestimonialsClient from "./testimonials-client";
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

  return {
    title: pageData.title,
    description: pageData.description,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${siteConfig.url}/${locale}/references`,
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}/references`,
      languages: {
        en: `${siteConfig.url}/en/references`,
        tr: `${siteConfig.url}/tr/references`,
      },
    },
  };
}

export default function ReferencesPage() {
  return <TestimonialsClient />;
}
