import { siteConfig } from "@/lib/seo-config";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.businessContact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getTelHref(): string {
  return `tel:${siteConfig.businessContact.phone}`;
}
