"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Extracted modules
import {
  testimonialConfigs,
  testimonialCounts,
  companyFilters,
  getCompanyFilter,
  type TestimonialConfig,
  type CompanyFilter,
} from "@/data/testimonials";
import {
  MicrosoftLogo,
  TelescopeLogo,
  LinkedInIcon,
} from "@/components/icons/company-logos";
import { getAvatarUrl } from "@/lib/avatar";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Testimonial Card Component
interface TestimonialCardProps {
  config: TestimonialConfig;
  quote: string;
  description: string;
  roleAt: string;
}

function TestimonialCard({
  config,
  quote,
  description,
  roleAt,
}: TestimonialCardProps) {
  // Generate avatar URL locally (no external request)
  const avatarUrl = useMemo(
    () => getAvatarUrl(config.author.name),
    [config.author.name]
  );

  return (
    <motion.div
      variants={item}
      className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 shadow-sm hover:shadow-lg dark:shadow-neutral-950/50 transition-all duration-300 hover:border-violet-200 dark:hover:border-violet-500/30"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center">
        <Quote className="w-4 h-4 text-violet-500 dark:text-violet-400" />
      </div>

      {/* Company Logo */}
      {config.companyLogo && (
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
          {config.companyLogo === "microsoft" && (
            <MicrosoftLogo className="w-7 h-7 sm:w-8 sm:h-8" />
          )}
          {config.companyLogo === "telescope" && (
            <TelescopeLogo className="w-7 h-7 sm:w-8 sm:h-8" />
          )}
          {config.companyLogo === "medyat" && (
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
              <Image
                src="https://www.medya-t.com/img/medyat.png"
                alt="Medya-T Logo"
                width={32}
                height={32}
                className="max-w-full max-h-full w-auto h-auto dark:invert dark:hue-rotate-180 object-contain"
              />
            </div>
          )}
        </div>
      )}

      {/* Quote Text */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 pt-2 pr-12 sm:pr-14 break-words">
        &ldquo;{quote}&rdquo;
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
        {description}
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex gap-3 mb-3">
          <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden ring-2 ring-violet-100 dark:ring-violet-500/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarUrl}
              alt={config.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              {config.author.name}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              {config.author.role} {roleAt}{" "}
              <span className="text-violet-600 dark:text-violet-400 font-medium">
                {config.author.company}
              </span>
            </p>
          </div>
        </div>

        {/* LinkedIn Button */}
        <div className="flex justify-center">
          <a
            href={config.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 transition-colors text-[#0A66C2] font-medium"
            aria-label={`${config.author.name}'s LinkedIn profile`}
          >
            <LinkedInIcon className="w-4 h-4" />
            <span className="text-xs">View Profile</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Company Filter Button Component
interface CompanyFilterButtonProps {
  filter: CompanyFilter;
  activeFilter: CompanyFilter;
  onClick: () => void;
  count: number;
  name: string;
}

function CompanyFilterButton({
  filter,
  activeFilter,
  onClick,
  count,
  name,
}: CompanyFilterButtonProps) {
  const isActive = activeFilter === filter;

  const logo = useMemo(() => {
    switch (filter) {
      case "microsoft":
        return <MicrosoftLogo className="w-4 h-4" />;
      case "telescope":
        return <TelescopeLogo className="w-4 h-4" />;
      case "medyat":
        return (
          <Image
            src="https://www.medya-t.com/img/medyat.png"
            alt="Medya-T"
            width={16}
            height={16}
            className="dark:invert dark:hue-rotate-180"
          />
        );
      default:
        return null;
    }
  }, [filter]);

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 whitespace-nowrap cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2
        ${
          isActive
            ? "bg-violet-500 text-white shadow-md shadow-violet-500/25"
            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
        }
      `}
      aria-pressed={isActive}
    >
      {logo}
      <span>{name}</span>
      <span
        className={`
          grid place-items-center text-[11px] font-semibold min-w-[20px] h-[20px] px-1 rounded-full
          ${
            isActive
              ? "bg-white/20 text-white"
              : "bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
          }
        `}
      >
        {count}
      </span>
    </button>
  );
}

// Main Testimonials Component
export default function Testimonials() {
  const t = useTranslations("references");
  const [activeFilter, setActiveFilter] = useState<CompanyFilter>("all");

  // Memoize filtered testimonials
  const filteredTestimonials = useMemo(() => {
    if (activeFilter === "all") return testimonialConfigs;
    return testimonialConfigs.filter(
      (config) => getCompanyFilter(config) === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="testimonials" className="py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-500 mb-4">
          {t("sectionLabel")}
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          {t("sectionTitle")}
        </p>
      </motion.div>

      {/* Company Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-10 flex flex-wrap gap-2"
        role="group"
        aria-label={t("filters.label") || "Filter testimonials by company"}
      >
        {companyFilters.map((filter) => (
          <CompanyFilterButton
            key={filter}
            filter={filter}
            activeFilter={activeFilter}
            onClick={() => setActiveFilter(filter)}
            count={testimonialCounts[filter]}
            name={t(`filters.${filter}`)}
          />
        ))}
      </motion.div>

      {/* Testimonials Masonry Layout */}
      <motion.div
        key={activeFilter}
        variants={container}
        initial="hidden"
        animate="show"
        className="columns-1 md:columns-2 lg:columns-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((config) => (
            <motion.div
              key={config.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid mb-6 pt-3 pl-3"
            >
              <TestimonialCard
                config={config}
                quote={t(`testimonials.${config.translationKey}.quote`)}
                description={t(
                  `testimonials.${config.translationKey}.description`
                )}
                roleAt={t("roleAt")}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
