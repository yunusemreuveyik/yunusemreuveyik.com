import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { locales } from "@/i18n/routing";
import { localeConfig, type Locale } from "@/lib/seo-config";
import { buildPageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/json-ld";

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
  const pageData = localeData.pages.about;

  return buildPageMetadata({
    locale,
    segment: "about",
    title: pageData.title,
    description: pageData.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeData = localeConfig[locale as Locale] || localeConfig.en;
  const pageData = localeData.pages.about;
  const t = await getTranslations("about");

  return (
    <>
      <PageJsonLd
        locale={locale}
        title={pageData.title}
        description={pageData.description}
        pathSegment="about"
        breadcrumbLabel={locale === "tr" ? "Hakkımda" : "About"}
      />
      <article className="prose dark:prose-invert py-12">
        <h1>{t("title")}</h1>
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
      </article>
    </>
  );
}
