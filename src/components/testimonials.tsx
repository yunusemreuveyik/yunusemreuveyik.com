"use client";

import { motion } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Microsoft logo component
function MicrosoftLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 23 23" fill="none">
      <path d="M0 0h11v11H0z" fill="#F25022" />
      <path d="M12 0h11v11H12z" fill="#7FBA00" />
      <path d="M0 12h11v11H0z" fill="#00A4EF" />
      <path d="M12 12h11v11H12z" fill="#FFB900" />
    </svg>
  );
}

// Telescope Vantage logo component
function TelescopeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#telescope-clip-testimonial)">
        <path
          d="M24.0001 12.0001C24.0001 6.88242 24.0001 4.32359 22.6475 2.56085C22.2992 2.10703 21.893 1.70083 21.4392 1.3526C19.6765 0 17.1176 0 12 0C12 6.62739 17.3726 12.0001 24.0001 12.0001Z"
          fill="#2E9AFF"
        />
        <path
          d="M0 12C0 17.1176 0 19.6765 1.3526 21.4392C1.70083 21.893 2.10703 22.2992 2.56085 22.6475C4.32359 24.0001 6.88242 24.0001 12.0001 24.0001C12.0001 17.3727 6.62745 12 0 12Z"
          fill="#2957FF"
        />
        <path
          d="M1.3526 2.56085C0 4.32359 0 6.88242 0 12.0001C6.62745 12.0001 12.0001 6.62739 12.0001 0C6.88242 0 4.32359 0 2.56085 1.3526C2.10703 1.70083 1.70083 2.10703 1.3526 2.56085Z"
          fill="#57C1FF"
        />
        <path
          d="M12 24.0001C17.1176 24.0001 19.6765 24.0001 21.4392 22.6475C21.893 22.2992 22.2992 21.893 22.6475 21.4392C24.0001 19.6765 24.0001 17.1176 24.0001 12C17.3726 12 12 17.3727 12 24.0001Z"
          fill="#2B7BF3"
        />
      </g>
      <defs>
        <clipPath id="telescope-clip-testimonial">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
}

interface TestimonialConfig {
  id: string;
  translationKey: string;
  companyLogo?: "microsoft" | "telescope";
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    linkedin: string;
  };
}

// Testimonial configs - text content comes from translations
const testimonialConfigs: TestimonialConfig[] = [
  {
    id: "1",
    translationKey: "fatma",
    author: {
      name: "Fatma Kalkan",
      role: "Senior Software Developer",
      company: "Kod Yazılım",
      avatar:
        "https://ui-avatars.com/api/?name=Fatma+Kalkan&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/fatma-kalkan-768276149/",
    },
  },
  {
    id: "2",
    translationKey: "oguzhan",
    author: {
      name: "Oğuzhan Selamoğlu",
      role: "Head of Software Department",
      company: "Kod Yazılım",
      avatar:
        "https://ui-avatars.com/api/?name=Oguzhan+Selamoglu&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/oguzhan-selamoglu-4b257b74/",
    },
  },
  {
    id: "3",
    translationKey: "isfendiyar",
    author: {
      name: "İsfendiyar Akpınar",
      role: "Backend Developer",
      company: "Kod Yazılım",
      avatar:
        "https://ui-avatars.com/api/?name=Isfendiyar+Akpinar&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/isfendiyar-akpinar/",
    },
  },
  {
    id: "4",
    translationKey: "mehmet",
    author: {
      name: "Mehmet Gülen",
      role: "Deputy General Manager",
      company: "Kod Yazılım",
      avatar:
        "https://ui-avatars.com/api/?name=Mehmet+Gulen&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/mehmet-g%C3%BClen-238060137/",
    },
  },
  {
    id: "5",
    translationKey: "sarah",
    companyLogo: "microsoft",
    author: {
      name: "Sarah Williams",
      role: "CTO",
      company: "E-Commerce Pro",
      avatar: "https://randomuser.me/api/portraits/women/89.jpg",
      linkedin: "https://linkedin.com/in/",
    },
  },
  {
    id: "6",
    translationKey: "david",
    companyLogo: "telescope",
    author: {
      name: "David Brown",
      role: "Design Lead",
      company: "Creative Studio",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      linkedin: "https://linkedin.com/in/",
    },
  },
];

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
  return (
    <motion.div
      variants={item}
      className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 shadow-sm hover:shadow-lg dark:shadow-neutral-950/50 transition-all duration-300 hover:border-violet-200 dark:hover:border-violet-500/30 flex flex-col h-full"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center">
        <Quote className="w-4 h-4 text-violet-500 dark:text-violet-400" />
      </div>

      {/* Company Logo */}
      {config.companyLogo && (
        <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
          {config.companyLogo === "microsoft" ? (
            <MicrosoftLogo className="w-7 h-7" />
          ) : (
            <TelescopeLogo className="w-7 h-7" />
          )}
        </div>
      )}

      {/* Quote Text */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 pt-2 pr-10">
        &ldquo;{quote}&rdquo;
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 grow">
        {description}
      </p>

      {/* Author */}
      <div className="flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden ring-2 ring-violet-100 dark:ring-violet-500/20">
            <Image
              src={config.author.avatar}
              alt={config.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              {config.author.name}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              {config.author.role} {roleAt} {config.author.company}
            </p>
          </div>
        </div>

        {/* LinkedIn Button */}
        <a
          href={config.author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 transition-colors group/linkedin"
          aria-label={`${config.author.name}'s LinkedIn profile`}
        >
          <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover/linkedin:scale-110 transition-transform" />
        </a>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-linear-to-br from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Testimonials() {
  const t = useTranslations("references");

  return (
    <section id="testimonials" className="py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-500 mb-4">
          {t("sectionLabel")}
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          {t("sectionTitle")}
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        {testimonialConfigs.map((config) => (
          <TestimonialCard
            key={config.id}
            config={config}
            quote={t(`testimonials.${config.translationKey}.quote`)}
            description={t(`testimonials.${config.translationKey}.description`)}
            roleAt={t("roleAt")}
          />
        ))}
      </motion.div>
    </section>
  );
}
