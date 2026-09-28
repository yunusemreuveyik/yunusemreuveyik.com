// SEO Configuration for yunusemreuveyik.com

/** Build absolute URLs consistent with next.config trailingSlash: true */
export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") {
    return `${base}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (/\.[a-z0-9]+$/i.test(normalized)) {
    return `${base}${normalized}`;
  }
  return normalized.endsWith("/")
    ? `${base}${normalized}`
    : `${base}${normalized}/`;
}

export const siteConfig = {
  name: "Yunus Emre Uveyik",
  title: "Yunus Emre Uveyik - Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Experienced in building scalable web applications at Microsoft, Telescope Labs, and more.",
  url: "https://yunusemreuveyik.com",
  ogImage: "/opengraph-image",
  links: {
    github: "https://github.com/yunusemreuveyik",
    linkedin: "https://www.linkedin.com/in/yunusemreuveyik/",
  },
  author: {
    name: "Yunus Emre Uveyik",
    email: "hello@yunusemreuveyik.com",
    jobTitle: "Senior Frontend Developer",
  },
  /** Web design inquiries — same pattern as client sites (Dokuma Kuyumculuk, etc.) */
  businessContact: {
    phone: "+905375251191",
    phoneDisplay: "0537 525 11 91",
    whatsapp: "905375251191",
  },
  keywords: [
    "Yunus Emre Uveyik",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Software Engineer",
    "Microsoft",
    "UI Developer",
    "Frontend Engineer",
  ],
} as const;

export const showcaseSites = [
  {
    id: "motofamily",
    url: "https://motofamily.net/",
    name: { en: "MotoFamily", tr: "MotoFamily" },
    industry: {
      en: "Motorcycle community app · Turkey",
      tr: "Motosiklet topluluğu uygulaması · Türkiye",
    },
    summary: {
      en: "Marketing site for the MotoFamily app — feature pages, partner businesses, a public live map, and App Store / Google Play downloads, in Turkish and English with SEO built in.",
      tr: "MotoFamily uygulamasının tanıtım sitesi — özellik sayfaları, anlaşmalı işletmeler, herkese açık canlı harita ve App Store / Google Play indirme bağlantıları; Türkçe ve İngilizce, SEO dahil.",
    },
    highlights: {
      en: [
        "Turkish / English (TR·EN)",
        "App Store and Google Play calls to action",
        "Public live map and seller pages",
        "Sitemap, hreflang, and structured data",
      ],
      tr: [
        "Türkçe / İngilizce (TR·EN)",
        "App Store ve Google Play çağrıları",
        "Herkese açık canlı harita ve satıcı sayfaları",
        "Site haritası, hreflang ve yapılandırılmış veri",
      ],
    },
  },
  {
    id: "dokuma-kuyumculuk",
    url: "https://dokumakuyumculuk.com/",
    name: { en: "Dokuma Kuyumculuk", tr: "Dokuma Kuyumculuk" },
    industry: {
      en: "Jewelry retail · Kepez, Antalya",
      tr: "Kuyumculuk · Kepez, Antalya",
    },
    summary: {
      en: "Local jewelry store site with collection pages, store hours, WhatsApp contact, and FAQ content tuned for “Antalya kuyumcuları” searches.",
      tr: "Koleksiyon sayfaları, mağaza saatleri, WhatsApp iletişim ve “Antalya kuyumcuları” aramaları için optimize edilmiş SSS içeriği.",
    },
    highlights: {
      en: [
        "Local SEO & structured FAQ",
        "Turkish / English (TR·EN)",
        "Mobile-first, fast Next.js",
        "Clear calls to action (WhatsApp, directions)",
      ],
      tr: [
        "Yerel SEO ve yapılandırılmış SSS",
        "Türkçe / İngilizce (TR·EN)",
        "Mobil öncelikli, hızlı Next.js",
        "Net dönüşüm (WhatsApp, yol tarifi)",
      ],
    },
  },
  {
    id: "sistem-teknik",
    url: "https://sistemteknikantalya.com/",
    name: { en: "Sistem Teknik", tr: "Sistem Teknik" },
    industry: {
      en: "Automatic door systems · Antalya",
      tr: "Otomatik kapı sistemleri · Antalya",
    },
    summary: {
      en: "Service business website showcasing product lines (sliding doors, barriers, garage doors), trust signals, and lead capture via WhatsApp and phone.",
      tr: "Ürün grupları (fotoselli kapı, bariyer, garaj kapısı), güven unsurları ve WhatsApp/telefon ile lead toplama.",
    },
    highlights: {
      en: [
        "Service & product landing structure",
        "Lead-focused hero & CTAs",
        "SEO-friendly headings & copy",
        "Professional brand presentation",
      ],
      tr: [
        "Hizmet ve ürün odaklı sayfa yapısı",
        "Dönüşüm odaklı hero ve CTA",
        "SEO uyumlu başlık ve metinler",
        "Profesyonel marka sunumu",
      ],
    },
  },
  {
    id: "palmarosa-hotel",
    previewId: "palmarosa",
    staticPath: "/showcase-sites/palmarosa/",
    name: { en: "Palmarosa Hotel", tr: "Palmarosa Hotel" },
    industry: {
      en: "Boutique hotel · Kemer, Antalya",
      tr: "Butik otel · Kemer, Antalya",
    },
    summary: {
      en: "Hotel website with rooms, gallery, and contact flows — a past client build, hosted here as a static demo on yunusemreuveyik.com (the hotel no longer runs this site on its own domain).",
      tr: "Odalar, galeri ve iletişim odaklı otel sitesi — geçmiş müşteri projesi; otel artık kendi alan adında çalıştırmıyor, demo yunusemreuveyik.com üzerinde barındırılıyor.",
    },
    highlights: {
      en: [
        "Hospitality layout & imagery",
        "Room and amenity pages",
        "Contact and location focus",
        "Hosted portfolio demo on this domain",
      ],
      tr: [
        "Otel vitrin düzeni ve görseller",
        "Oda ve olanak sayfaları",
        "İletişim ve konum vurgusu",
        "Bu alan adında barındırılan portfolyo demosu",
      ],
    },
  },
] as const;

export type ShowcaseSite = (typeof showcaseSites)[number];

export function getShowcaseSiteByPreviewId(previewId: string) {
  return showcaseSites.find(
    (site) => "previewId" in site && site.previewId === previewId,
  );
}

export function showcaseSitePublicUrl(site: ShowcaseSite): string {
  if ("staticPath" in site && site.staticPath) {
    return absoluteUrl(site.staticPath);
  }
  return "url" in site ? site.url : absoluteUrl("/");
}

/** Same-origin path for iframe / new tab — works on localhost and production. */
export function showcaseSiteBrowseHref(site: ShowcaseSite): string {
  if ("staticPath" in site && site.staticPath) {
    return site.staticPath.startsWith("/")
      ? site.staticPath
      : `/${site.staticPath}`;
  }
  return "url" in site ? site.url : "/";
}

export const showcasePreviewIds = showcaseSites
  .filter(
    (
      site,
    ): site is ShowcaseSite & { previewId: string; staticPath: string } =>
      "previewId" in site && "staticPath" in site,
  )
  .map((site) => site.previewId);

export const showcaseKeywords = {
  en: [
    "affordable business website",
    "SEO ready website",
    "how to get a website made",
    "fast website delivery",
    "cheap business website Turkey",
    "Next.js business website",
    "Antalya web developer",
  ],
  tr: [
    "nasıl site yaptırabilirim",
    "ucuz internet sitesi",
    "uygun fiyatlı internet sitesi yapımı",
    "uygun fiyat web sitesi",
    "düşük bütçe web sitesi",
    "hızlı web sitesi teslim",
    "SEO uyumlu web sitesi",
    "Next.js web sitesi",
    "Antalya web sitesi yaptırma",
    "Türkçe İngilizce web sitesi",
    "küçük işletme web tasarım",
    "freelance web geliştirici",
  ],
} as const;

export const localeConfig = {
  en: {
    title: "Yunus Emre Uveyik - Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Experienced in building scalable web applications at Microsoft, Telescope Labs, and more.",
    pages: {
      home: {
        title: "Yunus Emre Uveyik - Senior Frontend Developer",
        description:
          "Senior Frontend Developer (ex-Microsoft). React, Next.js, TypeScript, React Native — portfolio, MotoFamily, and affordable SEO-ready business websites.",
      },
      references: {
        title: "References - Yunus Emre Uveyik",
        description:
          "Professional references and testimonials from colleagues at Microsoft, Telescope Labs, Kod Yazılım, and Medya-T.",
      },
      experience: {
        title: "Experience - Yunus Emre Uveyik",
        description:
          "Work history: MotoFamily founder (2025–present), Microsoft News UI, Telescope Labs frontend lead, Kod Yazılım, and Medya-T.",
      },
      projects: {
        title: "Projects - Yunus Emre Uveyik",
        description:
          "Explore my projects including MotoFamily - a social network app for motorcycle enthusiasts built with React Native, Expo, and Node.js.",
      },
      showcase: {
        title:
          "Affordable Business Websites & SEO Showcase | Yunus Emre Uveyik",
        description:
          "Affordable business website development with SEO built in — many sites delivered within a few days. Live examples: MotoFamily, Dokuma Kuyumculuk, Sistem Teknik, and Palmarosa Hotel preview. Next.js, mobile-first, TR/EN.",
      },
      about: {
        title: "About - Yunus Emre Uveyik",
        description:
          "About Yunus Emre Uveyik — Senior Frontend Developer, Microsoft alum, MotoFamily founder, and builder of SEO-ready business websites.",
      },
    },
  },
  tr: {
    title: "Yunus Emre Uveyik - Kıdemli Frontend Geliştirici",
    description:
      "React, Next.js ve TypeScript konularında uzmanlaşmış Kıdemli Frontend Geliştirici. Microsoft, Telescope Labs ve daha fazlasında ölçeklenebilir web uygulamaları geliştirme deneyimi.",
    pages: {
      home: {
        title: "Yunus Emre Uveyik - Kıdemli Frontend Geliştirici",
        description:
          "Kıdemli Frontend Geliştirici (eski Microsoft). React, Next.js, TypeScript, React Native — portfolyo, MotoFamily ve uygun fiyatlı SEO uyumlu işletme siteleri.",
      },
      references: {
        title: "Referanslar - Yunus Emre Uveyik",
        description:
          "Microsoft, Telescope Labs, Kod Yazılım ve Medya-T'deki meslektaşlarımdan profesyonel referanslar ve değerlendirmeler.",
      },
      experience: {
        title: "Deneyim - Yunus Emre Uveyik",
        description:
          "MotoFamily kurucusu (2025–günümüz), Microsoft News arayüzü, Telescope Labs frontend liderliği, Kod Yazılım ve Medya-T.",
      },
      projects: {
        title: "Projeler - Yunus Emre Uveyik",
        description:
          "Projelerimi keşfedin: MotoFamily - React Native, Expo ve Node.js ile geliştirilen motorsiklet tutkunları için sosyal ağ uygulaması.",
      },
      showcase: {
        title:
          "Uygun Fiyatlı İşletme Web Siteleri & SEO Vitrini | Yunus Emre Uveyik",
        description:
          "SEO dahil uygun fiyatlı işletme sitesi — içerik hazırsa birçok proje birkaç gün içinde teslim. Canlı örnekler: MotoFamily, Dokuma Kuyumculuk, Sistem Teknik ve Palmarosa Hotel önizlemesi. Next.js, mobil öncelikli, TR/EN.",
      },
      about: {
        title: "Hakkımda - Yunus Emre Uveyik",
        description:
          "Yunus Emre Uveyik hakkında — Kıdemli Frontend Geliştirici, Microsoft mezunu, MotoFamily kurucusu ve SEO uyumlu işletme siteleri geliştiricisi.",
      },
    },
  },
} as const;

export type Locale = keyof typeof localeConfig;
