import type { Metadata } from "next";
import { siteConfig, localeConfig, type Locale } from "@/lib/seo-config";
import { buildPageMetadata } from "@/lib/page-metadata";
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

  return buildPageMetadata({
    locale,
    segment: "projects",
    title: pageData.title,
    description: pageData.description,
    keywords: [
      ...siteConfig.keywords,
      "MotoFamily",
      "motofamily.net",
      "React Native",
      "Expo",
      "Mobile App Development",
      "iOS App",
      "Android App",
      "Motorcycle App",
      "Social Network App",
      "Portfolio Projects",
    ],
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <ProjectsJsonLd locale={locale} />
      <ProjectsClient />
    </>
  );
}
