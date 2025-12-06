import type { Metadata } from "next";
import { siteConfig, localeConfig, type Locale } from "@/lib/seo-config";
import ExperienceClient from "./experience-client";
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

  return {
    title: pageData.title,
    description: pageData.description,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${siteConfig.url}/${locale}/experience`,
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}/experience`,
      languages: {
        en: `${siteConfig.url}/en/experience`,
        tr: `${siteConfig.url}/tr/experience`,
      },
    },
  };
}

export default function ExperiencePage() {
  return <ExperienceClient />;
}
