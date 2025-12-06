import type { Metadata } from "next";
import { siteConfig, localeConfig, type Locale } from "@/lib/seo-config";
import ProjectsClient from "./projects-client";
import { ProjectsJsonLd } from "@/components/json-ld";
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
  const pageData = localeData.pages.projects;

  const projectKeywords = [
    ...siteConfig.keywords,
    "MotoFamily",
    "React Native",
    "Expo",
    "Mobile App Development",
    "iOS App",
    "Android App",
    "Motorcycle App",
    "Social Network App",
    "Portfolio Projects",
  ];

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: projectKeywords,
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
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? "en_US" : "tr_TR",
      url: `${siteConfig.url}/${locale}/projects`,
      siteName: siteConfig.name,
      title: pageData.title,
      description: pageData.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [siteConfig.ogImage],
      creator: "@yunusemreuveyik",
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}/projects`,
      languages: {
        en: `${siteConfig.url}/en/projects`,
        tr: `${siteConfig.url}/tr/projects`,
      },
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeData = localeConfig[locale as Locale] || localeConfig.en;
  const pageData = localeData.pages.projects;

  return (
    <>
      <ProjectsJsonLd locale={locale} />
      <ProjectsClient />
    </>
  );
}
