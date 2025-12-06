"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Company filter types
type CompanyFilter = "all" | "microsoft" | "telescope" | "kod" | "medyat";

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
  companyLogo?: "microsoft" | "telescope" | "medyat";
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
    translationKey: "johannes",
    companyLogo: "microsoft",
    author: {
      name: "Johannes Dommnich",
      role: "Principal Product Manager",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Johannes+Dommnich&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/johannesdommnich/",
    },
  },
  {
    id: "2",
    translationKey: "riza",
    companyLogo: "microsoft",
    author: {
      name: "Rıza Aktunç",
      role: "Team Leader",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Riza+Aktunc&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/rizaaktunc/",
    },
  },
  {
    id: "3",
    translationKey: "alp",
    companyLogo: "microsoft",
    author: {
      name: "Alp Oral",
      role: "Principal Software Engineer",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Alp+Oral&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/alporal/",
    },
  },
  {
    id: "4",
    translationKey: "edgar",
    companyLogo: "microsoft",
    author: {
      name: "Edgar Pansu",
      role: "Product Manager",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Edgar+Pansu&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/edgar-pansu-a999571b/",
    },
  },
  {
    id: "5",
    translationKey: "mert",
    companyLogo: "microsoft",
    author: {
      name: "Mert V. Yılmaz",
      role: "Product Manager",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Mert+Yilmaz&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/mertvyilmaz/",
    },
  },
  {
    id: "6",
    translationKey: "asli",
    companyLogo: "microsoft",
    author: {
      name: "Aslı Atar",
      role: "Frontend Developer",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Asli+Atar&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/asli-atar/",
    },
  },
  {
    id: "7",
    translationKey: "mustafa",
    companyLogo: "microsoft",
    author: {
      name: "Mustafa Yiğit Şahin",
      role: "Software Engineer",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Mustafa+Sahin&background=8b5cf6&color=fff&size=200",
      linkedin:
        "https://www.linkedin.com/in/mustafa-yi%C4%9Fit-%C5%9Fahin-msc-5a477922/",
    },
  },
  {
    id: "8",
    translationKey: "mertuysal",
    companyLogo: "microsoft",
    author: {
      name: "Mert Uysal",
      role: "Software Engineer",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Mert+Uysal&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/mert-uysal-3579a516a/",
    },
  },
  {
    id: "9",
    translationKey: "huseyin",
    companyLogo: "microsoft",
    author: {
      name: "Hüseyin Polat",
      role: "Software Engineer",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Huseyin+Polat&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/huseyin-polat/",
    },
  },
  {
    id: "10",
    translationKey: "tugce",
    companyLogo: "microsoft",
    author: {
      name: "Tuğçe Yalçın",
      role: "Software Engineer",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Tugce+Yalcin&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/tugceyalc%C4%B1n/",
    },
  },
  {
    id: "11",
    translationKey: "mustafagur",
    companyLogo: "microsoft",
    author: {
      name: "Mustafa Gür",
      role: "Software Engineer",
      company: "Microsoft",
      avatar:
        "https://ui-avatars.com/api/?name=Mustafa+Gur&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/musgurcom/",
    },
  },
  {
    id: "12",
    translationKey: "tahir",
    companyLogo: "telescope",
    author: {
      name: "Tahir Yüksel",
      role: "UI/UX Designer",
      company: "Telescope Labs",
      avatar:
        "https://ui-avatars.com/api/?name=Tahir+Yuksel&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/tahir-yuksel/",
    },
  },
  {
    id: "13",
    translationKey: "tarik",
    companyLogo: "telescope",
    author: {
      name: "Tarık Umutlu",
      role: "Backend Engineer",
      company: "Telescope Labs",
      avatar:
        "https://ui-avatars.com/api/?name=Tarik+Umutlu&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/tar%C4%B1k-umutlu-b87135165/",
    },
  },
  {
    id: "14",
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
    id: "15",
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
    id: "16",
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
    id: "17",
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
    id: "18",
    translationKey: "murat",
    companyLogo: "medyat",
    author: {
      name: "Murat Altay",
      role: "Full Stack Engineer",
      company: "Medya-T",
      avatar:
        "https://ui-avatars.com/api/?name=Murat+Altay&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/murat-altay/",
    },
  },
  {
    id: "19",
    translationKey: "tasar",
    companyLogo: "medyat",
    author: {
      name: "Murat Taşarsu",
      role: "CEO",
      company: "Medya-T",
      avatar:
        "https://ui-avatars.com/api/?name=Tasar+Su&background=8b5cf6&color=fff&size=200",
      linkedin: "https://www.linkedin.com/in/tasarsu/",
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
      className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 shadow-sm hover:shadow-lg dark:shadow-neutral-950/50 transition-all duration-300 hover:border-violet-200 dark:hover:border-violet-500/30"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center">
        <Quote className="w-4 h-4 text-violet-500 dark:text-violet-400" />
      </div>

      {/* Company Logo */}
      {config.companyLogo && (
        <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
          {config.companyLogo === "microsoft" && (
            <MicrosoftLogo className="w-7 h-7" />
          )}
          {config.companyLogo === "telescope" && (
            <TelescopeLogo className="w-7 h-7" />
          )}
          {config.companyLogo === "medyat" && (
            <Image
              src="https://www.medya-t.com/img/medyat.png"
              alt="Medya-T Logo"
              width={28}
              height={28}
              className="dark:invert dark:hue-rotate-180"
            />
          )}
        </div>
      )}

      {/* Quote Text */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 pt-2 pr-10">
        &ldquo;{quote}&rdquo;
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
        {description}
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex  gap-3 mb-3">
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
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-xs">View Profile</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Company filter button component
function CompanyFilterButton({
  filter,
  activeFilter,
  onClick,
  count,
  name,
}: {
  filter: CompanyFilter;
  activeFilter: CompanyFilter;
  onClick: () => void;
  count: number;
  name: string;
}) {
  const isActive = activeFilter === filter;

  const getLogo = () => {
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
  };

  const logo = getLogo();

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 whitespace-nowrap cursor-pointer
        ${
          isActive
            ? "bg-violet-500 text-white shadow-md shadow-violet-500/25"
            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
        }
      `}
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

export default function Testimonials() {
  const t = useTranslations("references");
  const [activeFilter, setActiveFilter] = useState<CompanyFilter>("all");

  // Get company from config
  const getCompanyFilter = (config: TestimonialConfig): CompanyFilter => {
    if (config.companyLogo === "microsoft") return "microsoft";
    if (config.companyLogo === "telescope") return "telescope";
    if (config.companyLogo === "medyat") return "medyat";
    if (config.author.company === "Kod Yazılım") return "kod";
    return "all";
  };

  // Filter testimonials
  const filteredTestimonials =
    activeFilter === "all"
      ? testimonialConfigs
      : testimonialConfigs.filter(
          (config) => getCompanyFilter(config) === activeFilter
        );

  // Count testimonials per company
  const counts = {
    all: testimonialConfigs.length,
    microsoft: testimonialConfigs.filter((c) => c.companyLogo === "microsoft")
      .length,
    telescope: testimonialConfigs.filter((c) => c.companyLogo === "telescope")
      .length,
    kod: testimonialConfigs.filter((c) => c.author.company === "Kod Yazılım")
      .length,
    medyat: testimonialConfigs.filter((c) => c.companyLogo === "medyat").length,
  };

  const filters: CompanyFilter[] = [
    "all",
    "microsoft",
    "telescope",
    "kod",
    "medyat",
  ];

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
      >
        {filters.map((filter) => (
          <CompanyFilterButton
            key={filter}
            filter={filter}
            activeFilter={activeFilter}
            onClick={() => setActiveFilter(filter)}
            count={counts[filter]}
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
