"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/seo-config";
import { getTelHref, getWhatsAppUrl } from "@/lib/contact";

export default function ShowcaseContactBar() {
  const t = useTranslations("showcase.contact");

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
      <a
        href={getTelHref()}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-900 dark:text-white hover:border-violet-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden />
        {siteConfig.businessContact.phoneDisplay}
      </a>
      <a
        href={getWhatsAppUrl(t("whatsappMessage"))}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
        {t("whatsappButton")}
      </a>
    </div>
  );
}
