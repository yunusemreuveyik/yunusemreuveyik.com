"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import GradientText from "@/components/gradient-text";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {/* 404 with code style */}
        <motion.div variants={item} className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl sm:text-6xl font-light text-neutral-400 dark:text-neutral-600 select-none">
              &lt;
            </span>
            <GradientText className="text-7xl sm:text-9xl font-bold tracking-tight">
              404
            </GradientText>
            <span className="text-4xl sm:text-6xl font-light text-neutral-400 dark:text-neutral-600 select-none">
              /&gt;
            </span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div variants={item} className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
            {t("title")}
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto text-sm sm:text-base">
            {t("description")}
          </p>
        </motion.div>

        {/* Decorative code comment */}
        <motion.div variants={item}>
          <code className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-600 font-mono">
            {t("comment")}
          </code>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4 pt-4 flex-wrap"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded text-neutral-700 dark:text-neutral-300 transition-all duration-300 text-sm border border-violet-400 dark:border-violet-500/50 hover:border-violet-500 dark:hover:border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            <Home className="w-4 h-4" />
            {t("goHome")}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("goBack")}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
