"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Badge from "@/components/badge";
import Image from "next/image";

interface ExperienceConfig {
  id: string;
  companyUrl?: string;
  technologies: string[];
}

// Tech logo mapping using devicons CDN
const techLogos: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  "Angular v1":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  jQuery:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  iOS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  Android:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  IONIC:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
  "Azure DevOps":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Azure Portal":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Knockout.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/knockout/knockout-plain-wordmark.svg",
  FAST: "/logos/fast.svg",
};

const experienceConfigs: ExperienceConfig[] = [
  {
    id: "telescope",
    companyUrl: "https://www.telescopelabs.io/",
    technologies: [
      "React",
      "TypeScript",
      "Highcharts",
      "Signal",
      "Node.js",
      "GPT Integration",
      "Azure Portal",
      "Azure DevOps",
    ],
  },
  {
    id: "microsoft",
    companyUrl: "https://www.msn.com/",
    technologies: [
      "React",
      "TypeScript",
      "FAST",
      "Figma",
      "Web Components",
      "Knockout.js",
      "Azure DevOps",
      "jest Unit Test",
      "Visual Parity Test",
    ],
  },
  {
    id: "kod",
    companyUrl: "https://www.kod.com.tr/",
    technologies: [
      "IONIC",
      "Angular v1",
      "Angular",
      "iOS",
      "Android",
      "Node.js",
      "TypeScript",
    ],
  },
  {
    id: "phoenix",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "jQuery"],
  },
  {
    id: "eveara",
    companyUrl: "https://www.eveara.com/",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "jQuery"],
  },
  {
    id: "medyat",
    companyUrl: "https://www.medya-t.com/",
    technologies: [
      "Laravel",
      "Vue.js",
      "JavaScript",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery",
    ],
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

// Microsoft logo component
function MicrosoftLogo({ className = "w-8 h-8" }: { className?: string }) {
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
function TelescopeLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#telescope-clip)">
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
        <clipPath id="telescope-clip">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function MyExperiences() {
  const t = useTranslations("experience");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24">
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

      {/* Experience List */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {experienceConfigs.map((exp) => {
          const descriptions = t.raw(`${exp.id}.descriptions`) as string[];
          const isHovered = hoveredId === exp.id;
          const isFaded = hoveredId !== null && !isHovered;

          return (
            <div
              key={exp.id}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 p-6 rounded-lg transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-700/30 hover:shadow-lg dark:hover:shadow-neutral-900/50 cursor-pointer ${isFaded ? "opacity-50" : "opacity-100"}`}
            >
              {/* Date Range */}
              <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500 pt-1">
                {t(`${exp.id}.dateRange`)}
              </div>
              {/* Content */}
              <div className="space-y-4">
                {/* Title & Company */}
                <div className="flex items-start gap-4">
                  {/* Company Logo */}
                  {exp.id === "telescope" && (
                    <div className="shrink-0 mt-1">
                      <TelescopeLogo className="w-10 h-10" />
                    </div>
                  )}
                  {exp.id === "microsoft" && (
                    <div className="shrink-0 mt-1">
                      <MicrosoftLogo className="w-10 h-10" />
                    </div>
                  )}
                  {exp.id === "eveara" && (
                    <div className="shrink-0 mt-1">
                      <Image
                        src="https://eveara.com/wp-content/uploads/2022/07/eveara-logo-160x22.png"
                        alt="EVEARA Logo"
                        width={80}
                        height={11}
                        className="brightness-0 dark:invert"
                      />
                    </div>
                  )}
                  {exp.id === "medyat" && (
                    <div className="shrink-0 mt-1">
                      <Image
                        src="https://www.medya-t.com/img/medyat.png"
                        alt="Medya-T Logo"
                        width={40}
                        height={40}
                        className="dark:invert dark:hue-rotate-180"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {t(`${exp.id}.title`)}
                      <span className="text-neutral-500 dark:text-neutral-400">
                        {" "}
                        ·{" "}
                      </span>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-neutral-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                          {t(`${exp.id}.company`)}
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                        </a>
                      ) : (
                        <span className="text-neutral-900 dark:text-white">
                          {t(`${exp.id}.company`)}
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {descriptions.map((desc: string, idx: number) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex gap-2"
                    >
                      <span className="text-violet-500 dark:text-violet-400 shrink-0">
                        ~&gt;
                      </span>
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="violet" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
