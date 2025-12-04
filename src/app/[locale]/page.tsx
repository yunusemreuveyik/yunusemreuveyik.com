"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GradientText from "@/components/gradient-text";
import TechSlider from "@/components/tech-slider";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8 w-full"
      >
        {/* Welcome text */}
        <motion.p
          variants={item}
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-500"
        >
          {t("welcome")}
        </motion.p>

        {/* Name with code brackets */}
        <motion.div variants={item} className="space-y-4">
          <h1 className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap overflow-visible leading-tight py-2">
            {/* Opening bracket */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-light text-neutral-400 dark:text-neutral-600 select-none">
              &lt;&gt;
            </span>
            {/* Name */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white tracking-tight">
              {t("firstName")}
            </span>{" "}
            <GradientText className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {t("lastName")}
            </GradientText>
            {/* Closing bracket */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-light text-neutral-400 dark:text-neutral-600 select-none">
              &lt;/&gt;
            </span>
          </h1>

          {/* Subtitle - Frontend Developer with gradient */}
          <p className="text-sm sm:text-base tracking-wide">
            <span className="text-neutral-500 dark:text-neutral-400">
              Senior Frontend{" "}
            </span>
            <GradientText className="font-medium">Developer</GradientText>
          </p>
        </motion.div>

        {/* Scroll hint text */}
        <motion.p
          variants={item}
          className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-600 max-w-md mx-auto"
        >
          {t("scrollHint")}
        </motion.p>

        {/* Tech Stack - Infinite Scroll */}
        <motion.div variants={item} className="pt-6">
          <TechSlider />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex justify-center gap-4 pt-10">
          <a
            href="mailto:iauemre@gmail.com"
            className="inline-flex items-center justify-center px-8 py-2.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all text-sm min-w-[140px]"
          >
            {t("contactMe")}
          </a>
          <a
            href="https://github.com/yunusemreuveyik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white transition-all text-sm min-w-[140px] border border-violet-400 dark:border-violet-500/50 hover:border-violet-500 dark:hover:border-violet-400"
            style={{
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
            }}
          >
            {t("viewGitHub")}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={item} className="pt-12">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-neutral-400 dark:text-neutral-600 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
