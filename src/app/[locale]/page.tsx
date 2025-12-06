import type { Metadata } from "next";
import { siteConfig, localeConfig, type Locale } from "@/lib/seo-config";
import WelcomeComponent from "@/components/welcome-component";
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
  const pageData = localeData.pages.home;

  return {
    title: pageData.title,
    description: pageData.description,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${siteConfig.url}/${locale}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        tr: `${siteConfig.url}/tr`,
      },
    },
  };
}

export default function Home() {
  return <WelcomeComponent />;
}
