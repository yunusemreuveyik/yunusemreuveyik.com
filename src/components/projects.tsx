"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "./gradient-text";
import { AppStoreBadge, GooglePlayBadge } from "./store-badges";
import { techLogos, getTechLogo } from "@/lib/tech-logos";

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

        {/* MotoFamily Project Card */}
        <motion.div
          variants={item}
          className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
        >
          {/* Hero Section */}
          <div className="relative p-6 sm:p-10 bg-linear-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              {/* Logo */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0">
                <Image
                  src="/logos/motofamily/Png-02.png"
                  alt="MotoFamily Logo"
                  fill
                  className="object-contain hidden dark:block"
                />
                <Image
                  src="/logos/motofamily/Png-01.png"
                  alt="MotoFamily Logo"
                  fill
                  className="object-contain dark:hidden"
                />
              </div>

              {/* Title & Description */}
              <div className="text-center sm:[dir=ltr]:text-left sm:[dir=rtl]:text-right space-y-3 flex-1">
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                    {t("motofamily.status")}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                    MotoFamily
                  </h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {t("motofamily.role")} • 2025
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-xl">
                  {t("motofamily.description")}
                </p>

                {/* Store Badges */}
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
                  <a
                    href="https://apps.apple.com/tr/app/motofamily/id6749791459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <AppStoreBadge
                      className="h-[40px] w-auto dark:hidden"
                      variant="black"
                    />
                    <AppStoreBadge
                      className="h-[40px] w-auto hidden dark:block"
                      variant="white"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anonymous.MotoFamily"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <GooglePlayBadge className="h-[40px] w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="p-6 sm:p-10 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              {t("motofamily.featuresTitle")}
            </h3>
            <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {features.map(({ key }, idx) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-2"
                >
                  <span className="text-violet-500 dark:text-violet-400 shrink-0">
                    ~&gt;
                  </span>
                  <span>{t(`motofamily.features.${key}`)}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="p-6 sm:p-10 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/30">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              {t("motofamily.techTitle")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-sm"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className={`w-5 h-5 ${tech.invertDark ? "dark:invert" : ""}`}
                  />
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
