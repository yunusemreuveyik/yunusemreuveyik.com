import { notFound, redirect } from "next/navigation";
import {
  getShowcaseSiteByPreviewId,
  showcasePreviewIds,
  showcaseSiteBrowseHref,
} from "@/lib/seo-config";
import { locales } from "@/i18n/routing";

/** Legacy preview URLs → open the hosted demo directly (no iframe chrome). */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    showcasePreviewIds.map((previewId) => ({ locale, previewId })),
  );
}

export default async function ShowcasePreviewRedirect({
  params,
}: {
  params: Promise<{ locale: string; previewId: string }>;
}) {
  const { previewId } = await params;
  const site = getShowcaseSiteByPreviewId(previewId);

  if (
    !site ||
    !("staticPath" in site) ||
    !site.staticPath
  ) {
    notFound();
  }

  redirect(showcaseSiteBrowseHref(site));
}
