import {
  siteConfig,
  showcaseSites,
  showcaseSitePublicUrl,
  localeConfig,
  absoluteUrl,
  type Locale,
} from "@/lib/seo-config";

interface JsonLdProps {
  type?: "Person" | "WebSite" | "WebPage";
  locale?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
}

export function JsonLd({
  type = "Person",
  locale = "en",
  pageTitle,
  pageDescription,
  pageUrl,
}: JsonLdProps) {
  const baseUrl = siteConfig.url;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    url: baseUrl,
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "UI/UX",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Microsoft",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    inLanguage: [locale, locale === "en" ? "tr" : "en"],
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle || siteConfig.title,
    description: pageDescription || siteConfig.description,
    url: pageUrl || baseUrl,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: baseUrl,
    },
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };

  const schemas = {
    Person: personSchema,
    WebSite: websiteSchema,
    WebPage: webPageSchema,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas[type]),
      }}
    />
  );
}

const personNode = {
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.author.name,
  jobTitle: siteConfig.author.jobTitle,
  email: siteConfig.author.email,
  url: absoluteUrl(),
  sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Development",
    "Web Development",
    "Search Engine Optimization",
    "Small Business Websites",
    "React Native",
    "Mobile App Development",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Microsoft",
  },
};

const websiteNode = (locale: string) => ({
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: absoluteUrl(),
  inLanguage: [locale, locale === "en" ? "tr" : "en"],
  author: { "@id": `${siteConfig.url}/#person` },
});

/** Person + WebSite on every page (no page-specific WebPage here). */
export function SiteJsonLd({ locale = "en" }: { locale?: string }) {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [personNode, websiteNode(locale)],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema),
      }}
    />
  );
}

// Combined schema for home page
export function HomeJsonLd({ locale = "en" }: { locale?: string }) {
  const localeData = localeConfig[locale as Locale] || localeConfig.en;
  const pageData = localeData.pages.home;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      personNode,
      websiteNode(locale),
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(`/${locale}`)}#webpage`,
        name: pageData.title,
        description: pageData.description,
        url: absoluteUrl(`/${locale}`),
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema),
      }}
    />
  );
}

/** WebPage + BreadcrumbList for standard inner pages */
export function PageJsonLd({
  locale = "en",
  title,
  description,
  pathSegment,
  breadcrumbLabel,
}: {
  locale?: string;
  title: string;
  description: string;
  pathSegment: string;
  breadcrumbLabel: string;
}) {
  const lang = locale === "tr" ? "tr" : "en";
  const pageUrl = absoluteUrl(`/${locale}/${pathSegment}`);
  const homeLabel = lang === "tr" ? "Ana Sayfa" : "Home";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: title,
        description,
        url: pageUrl,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: homeLabel,
            item: absoluteUrl(`/${locale}`),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbLabel,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ShowcaseJsonLd({ locale = "en" }: { locale?: string }) {
  const lang = locale === "tr" ? "tr" : "en";
  const localeData = localeConfig[locale as Locale] || localeConfig.en;
  const pageData = localeData.pages.showcase;
  const pageUrl = absoluteUrl(`/${locale}/showcase`);

  const faq =
    lang === "tr"
      ? [
          {
            q: "Nasıl site yaptırabilirim?",
            a: "hello@yunusemreuveyik.com adresine işletme adınızı, ne sattığınızı ve varsa logo/metinleri yazın. Hangi sayfaların gerekli olduğunu birlikte belirler, uygun fiyatlı teklif ve teslim süresini paylaşırım.",
          },
          {
            q: "Ucuz internet sitesi ve uygun fiyatlı internet sitesi yapımı mümkün mü?",
            a: "Evet — ajans paketleri yerine ihtiyacınız kadar sayfa (ana sayfa, hizmetler, iletişim, SSS). Kullanmayacağınız özellikler için ödeme yapmazsınız; fiyat kapsam netleşince sabitlenir.",
          },
          {
            q: "Site ne kadar sürede teslim edilir?",
            a: "Metinleriniz ve görselleriniz hazırsa birçok küçük işletme sitesi birkaç gün içinde yayına alınabilir. Türkçe/İngilizce veya ekstra sayfa varsa süre uzar; başlamadan net tarih verilir.",
          },
          {
            q: "Kimler için?",
            a: "Dükkan, esnaf ve hizmet firmaları: güven veren web varlığı ve yerel arama görünürlüğü — ilk günden dev platform bütçesi olmadan.",
          },
          {
            q: "Google'da çıkar mıyım?",
            a: "Sıralama garantisi verilemez; ancak yerel aramalara yardımcı teknik SEO ve içerik kalıpları uygulanır — SSS, net başlıklar, hızlı yükleme, doğru metadata.",
          },
          {
            q: "Hangi teknoloji?",
            a: "Next.js, React ve TypeScript. İstenirse dokumakuyumculuk.com gibi Türkçe/İngilizce.",
          },
          {
            q: "Nasıl başlarız?",
            a: "E-posta ile kısa bir özet yeterli: sektörünüz, hedef müşteri, beğendiğiniz örnek siteler. Aynı gün içinde dönüş ve sade bir yol haritası.",
          },
        ]
      : [
          {
            q: "How do I get a website made?",
            a: "Email hello@yunusemreuveyik.com with your business name, services, and any logo or copy you have. We'll agree on pages, I'll send an affordable quote and delivery timeline.",
          },
          {
            q: "Can you build a cheap or affordable business website?",
            a: "Yes — focused scope instead of agency bundles: home, services, contact, FAQs. You don't pay for features you won't use; price is fixed once scope is clear.",
          },
          {
            q: "How fast can my site go live?",
            a: "If content is ready, many small-business sites can launch within a few days. Bilingual TR/EN or extra pages add time; you get a firm date before we start.",
          },
          {
            q: "Who is this for?",
            a: "Shops, trades, and service companies that need a credible web presence and local search visibility — not a six-figure custom platform on day one.",
          },
          {
            q: "Will my site rank on Google?",
            a: "No one can guarantee rankings, but I implement technical SEO and content patterns that help local queries — structured FAQs, clear titles, fast loads, and proper metadata.",
          },
          {
            q: "What do you build with?",
            a: "Next.js, React, and TypeScript — the same stack I use in senior product roles. Optional Turkish/English like dokumakuyumculuk.com.",
          },
          {
            q: "How do we start?",
            a: "A short email is enough: your industry, target customers, sites you like. I'll reply with a simple roadmap and quote.",
          },
        ];

  const showcaseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: pageData.title,
        description: pageData.description,
        url: pageUrl,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#service`,
        name:
          lang === "tr"
            ? "Uygun fiyat işletme web sitesi geliştirme"
            : "Affordable business website development",
        description: pageData.description,
        url: pageUrl,
        areaServed: {
          "@type": "Country",
          name: "Turkey",
        },
        provider: { "@id": `${siteConfig.url}/#person` },
        serviceType: "Web design and development",
        telephone: siteConfig.businessContact.phone,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.businessContact.phone,
          contactType: "customer service",
          availableLanguage: ["Turkish", "English"],
          areaServed: "TR",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#portfolio`,
        name:
          lang === "tr" ? "Canlı müşteri web siteleri" : "Live client websites",
        itemListElement: showcaseSites.map((site, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "WebSite",
            name: site.name[lang],
            url: showcaseSitePublicUrl(site),
            description: site.summary[lang],
            creator: { "@id": `${siteConfig.url}/#person` },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faq.map((entry) => ({
          "@type": "Question",
          name: entry.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: entry.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: lang === "tr" ? "Ana Sayfa" : "Home",
            item: absoluteUrl(`/${locale}`),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: lang === "tr" ? "Web Vitrini" : "Web Showcase",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(showcaseSchema),
      }}
    />
  );
}

// Projects page schema with MotoFamily project
export function ProjectsJsonLd({ locale = "en" }: { locale?: string }) {
  const localeData = localeConfig[locale as Locale] || localeConfig.en;
  const pageData = localeData.pages.projects;
  const pageUrl = absoluteUrl(`/${locale}/projects`);
  const lang = locale === "tr" ? "tr" : "en";

  const projectsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: pageData.title,
        description: pageData.description,
        url: pageUrl,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#motofamily`,
        name: "MotoFamily",
        applicationCategory: "SocialNetworkApplication",
        operatingSystem: "iOS, Android",
        description:
          lang === "tr"
            ? "Motorsiklet tutkunları için sosyal ağ ve etkinlik platformu. Sürücüleri indirimler, canlı haritalar, bakım takibi ve topluluk özellikleriyle bir araya getiriyor."
            : "A social network and events platform designed for motorcycle enthusiasts. Bringing riders together with discounts, live maps, maintenance tracking, and community features.",
        url: "https://motofamily.net/",
        downloadUrl: [
          "https://apps.apple.com/app/motofamily/id6749791459",
          "https://play.google.com/store/apps/details?id=com.anonymous.MotoFamily",
        ],
        author: { "@id": `${siteConfig.url}/#person` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        softwareVersion: "1.0",
        datePublished: "2025-01-01",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: lang === "tr" ? "Ana Sayfa" : "Home",
            item: absoluteUrl(`/${locale}`),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: lang === "tr" ? "Projeler" : "Projects",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(projectsSchema),
      }}
    />
  );
}
