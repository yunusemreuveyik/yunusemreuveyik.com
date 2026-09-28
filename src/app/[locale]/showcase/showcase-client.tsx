"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import GradientText from "@/components/gradient-text";
import {
  showcaseSites,
  showcaseSiteBrowseHref,
  siteConfig,
  type Locale,
} from "@/lib/seo-config";
import {
  ExternalLink,
  Sparkles,
  Search,
  Wallet,
  Smartphone,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import ShowcaseContactBar from "@/components/showcase-contact-bar";
import ShowcaseWhatsAppFloat from "@/components/showcase-whatsapp-float";
import ShowcaseLivePreview from "@/components/showcase-live-preview";
import { getTelHref, getWhatsAppUrl } from "@/lib/contact";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ShowcaseClient() {
  const t = useTranslations("showcase");
  const locale = useLocale() as Locale;

  const valueKeys = ["seo", "budget", "speed", "mobile"] as const;
  const faqKeys = [
    "howTo",
    "affordable",
    "delivery",
    "who",
    "seo",
    "stack",
    "contact",
  ] as const;

  return (
    <section className="py-12 sm:py-16 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-14"
      >
        <motion.header variants={item} className="text-center space-y-5 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            {t("sectionLabel")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            <GradientText>{t("sectionTitle")}</GradientText>
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t("intro")}
          </p>
          <ShowcaseContactBar />
        </motion.header>

        <motion.div
          variants={item}
          className="grid sm:grid-cols-2 gap-4"
          aria-label={t("valuesAria")}
        >
          {valueKeys.map((key) => {
            const icons = {
              seo: Search,
              budget: Wallet,
              speed: Sparkles,
              mobile: Smartphone,
            } as const;
            const Icon = icons[key];
            return (
              <div
                key={key}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {t(`values.${key}.title`)}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {t(`values.${key}.body`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              {t("sitesTitle")}
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
              {t("sitesSubtitle")}
            </p>
          </div>

          <ul className="space-y-6 list-none p-0 m-0">
            {showcaseSites.map((site) => (
              <li key={site.id}>
                <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <ShowcaseLivePreview
                    href={showcaseSiteBrowseHref(site)}
                    title={site.name[locale]}
                  />
                  <div className="relative p-6 sm:p-8 space-y-4">
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-50/40 via-transparent to-transparent dark:from-violet-950/15 rounded-b-2xl" />
                    <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                          {site.name[locale]}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-violet-600 dark:text-violet-400 font-medium">
                          {site.industry[locale]}
                        </p>
                      </div>
                      <a
                        href={showcaseSiteBrowseHref(site)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 shrink-0"
                      >
                        {t("visitSite")}
                        <ExternalLink className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {site.summary[locale]}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      {site.highlights[locale].map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 before:content-[''] before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-violet-500"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.section
          variants={item}
          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 sm:p-8"
          aria-labelledby="showcase-faq-heading"
        >
          <h2
            id="showcase-faq-heading"
            className="text-xl font-bold text-neutral-900 dark:text-white mb-6"
          >
            {t("faqTitle")}
          </h2>
          <dl className="space-y-4">
            {faqKeys.map((key) => (
              <div
                key={key}
                className="border-b border-neutral-200 dark:border-neutral-800 pb-4 last:border-0 last:pb-0"
              >
                <dt className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {t(`faq.${key}.q`)}
                </dt>
                <dd className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t(`faq.${key}.a`)}
                </dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.div
          variants={item}
          className="text-center rounded-2xl border border-violet-200 dark:border-violet-900/50 bg-violet-50/60 dark:bg-violet-950/20 p-8 space-y-4"
        >
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
            {t("ctaTitle")}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            {t("ctaBody")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getTelHref()}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-600 px-5 py-2.5 text-sm font-medium transition-colors hover:border-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.businessContact.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl(t("contact.whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {t("contact.whatsappButton")}
            </a>
            <a
              href={`mailto:${t("ctaEmail")}`}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {t("ctaButton")}
            </a>
          </div>
          <p className="text-xs text-neutral-500">
            <Link
              href="/projects"
              className="underline underline-offset-2 hover:text-violet-600 dark:hover:text-violet-400"
            >
              {t("ctaProjectsLink")}
            </Link>
          </p>
        </motion.div>
      </motion.div>
      <ShowcaseWhatsAppFloat />
    </section>
  );
}
