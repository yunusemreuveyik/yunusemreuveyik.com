"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "./gradient-text";
import { AppStoreBadge, GooglePlayBadge } from "./store-badges";
import { techLogos, getTechLogo } from "@/lib/tech-logos";
import { ExternalLink } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Tech stack - using shared logos from tech-logos.ts
const techStackNames = [
  "React Native",
  "Expo",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Azure",
];

const techStack = techStackNames
  .map((name) => getTechLogo(name))
  .filter((tech): tech is NonNullable<typeof tech> => tech !== undefined);

const features = [
  { key: "liveMap" },
  { key: "chat" },
  { key: "discounts" },
  { key: "maintenance" },
  { key: "photos" },
  { key: "raceCalendar" },
  { key: "rewards" },
];

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section className="py-12 sm:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            {t("sectionLabel")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            <GradientText>{t("sectionTitle")}</GradientText>
          </h1>
        </motion.div>

        {/* MotoFamily Project Card - Modern Design */}
        <motion.div
          variants={item}
          className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-violet-50/50 via-transparent to-transparent dark:from-violet-950/20 pointer-events-none" />

          {/* Main Content */}
          <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Header Row - Mobile Optimized */}
            <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Logo, Title & Meta */}
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Logo */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0 rounded-xl sm:rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/logos/motofamily/Png-02.png"
                    alt="MotoFamily Logo"
                    width={100}
                    height={100}
                    className="object-contain hidden dark:block w-full h-full"
                  />
                  <Image
                    src="/logos/motofamily/Png-01.png"
                    alt="MotoFamily Logo"
                    width={100}
                    height={100}
                    className="object-contain dark:hidden w-full h-full"
                  />
                </div>

                {/* Title & Meta */}
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                      MotoFamily
                    </h2>
                    <span className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 w-fit">
                      {t("motofamily.status")}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                    {t("motofamily.role")} • 2025
                  </p>
                </div>
              </div>

              {/* Store Badges - Row layout, centered */}
              <div className="flex flex-row items-center justify-center gap-3 w-full">
                <a
                  href="https://apps.apple.com/tr/app/motofamily/id6749791459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:rounded flex justify-center shrink-0"
                  aria-label="Download on the App Store"
                >
                  <AppStoreBadge
                    className="h-[40px] w-auto min-w-[120px] dark:hidden"
                    variant="black"
                  />
                  <AppStoreBadge
                    className="h-[40px] w-auto min-w-[120px] hidden dark:block"
                    variant="white"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.anonymous.MotoFamily"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:rounded flex justify-center shrink-0"
                  aria-label="Get it on Google Play"
                >
                  <GooglePlayBadge className="h-[40px] w-auto min-w-[135px]" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 sm:mb-10">
              {t("motofamily.description")}
            </p>

            {/* Features & Tech Stack Grid - Stack on mobile */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-linear-to-b from-violet-500 to-indigo-500 rounded-full shrink-0" />
                  <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide">
                    {t("motofamily.featuresTitle")}
                  </h3>
                </div>
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  {features.map(({ key }, idx) => (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-start gap-2 sm:gap-2.5 group/item"
                    >
                      <span className="text-violet-500 dark:text-violet-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                        ~&gt;
                      </span>
                      <span className="leading-relaxed break-words">
                        {t(`motofamily.features.${key}`)}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-linear-to-b from-violet-500 to-indigo-500 rounded-full shrink-0" />
                  <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide">
                    {t("motofamily.techTitle")}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:border-violet-300 dark:hover:border-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/20 transition-all group/tech"
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className={`w-4 h-4 sm:w-[18px] sm:h-[18px] ${tech.invertDark ? "dark:invert" : ""} group-hover/tech:scale-110 transition-transform shrink-0`}
                      />
                      <span className="text-[11px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Links - Stack on mobile */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
                <a
                  href="https://apps.apple.com/tr/app/motofamily/id6749791459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:rounded"
                >
                  View on App Store
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">
                  •
                </span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.anonymous.MotoFamily"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:rounded"
                >
                  View on Google Play
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
