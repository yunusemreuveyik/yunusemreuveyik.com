"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/seo-config";
import { getWhatsAppUrl } from "@/lib/contact";

/** Fixed WhatsApp — mobile pattern from Dokuma Kuyumculuk */
export default function ShowcaseWhatsAppFloat() {
  const t = useTranslations("showcase.contact");

  return (
    <a
      href={getWhatsAppUrl(t("whatsappMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsappAria", {
        phone: siteConfig.businessContact.phoneDisplay,
      })}
      className="fixed bottom-5 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
