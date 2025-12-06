import { siteConfig } from "@/lib/seo-config";

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

// Combined schema for home page
export function HomeJsonLd({ locale = "en" }: { locale?: string }) {
  const baseUrl = siteConfig.url;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
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
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        name: siteConfig.name,
        url: baseUrl,
        inLanguage: [locale, locale === "en" ? "tr" : "en"],
        author: { "@id": `${baseUrl}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/${locale}/#webpage`,
        name: siteConfig.title,
        description: siteConfig.description,
        url: `${baseUrl}/${locale}`,
        inLanguage: locale,
        isPartOf: { "@id": `${baseUrl}/#website` },
        about: { "@id": `${baseUrl}/#person` },
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

// Projects page schema with MotoFamily project
export function ProjectsJsonLd({ locale = "en" }: { locale?: string }) {
  const baseUrl = siteConfig.url;

  const projectsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/${locale}/projects#webpage`,
        name:
          locale === "tr"
            ? "Projeler - Yunus Emre Uveyik"
            : "Projects - Yunus Emre Uveyik",
        description:
          locale === "tr"
            ? "Projelerimi keşfedin: MotoFamily - React Native, Expo ve Node.js ile geliştirilen motorsiklet tutkunları için sosyal ağ uygulaması."
            : "Explore my projects including MotoFamily - a social network app for motorcycle enthusiasts built with React Native, Expo, and Node.js.",
        url: `${baseUrl}/${locale}/projects`,
        inLanguage: locale,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@type": "Person",
          "@id": `${baseUrl}/#person`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/projects/motofamily#software`,
        name: "MotoFamily",
        applicationCategory: "SocialNetworkApplication",
        operatingSystem: "iOS, Android",
        description:
          locale === "tr"
            ? "Motorsiklet tutkunları için sosyal ağ ve etkinlik platformu. Sürücüleri indirimler, canlı haritalar, bakım takibi ve topluluk özellikleriyle bir araya getiriyor."
            : "A social network and events platform designed for motorcycle enthusiasts. Bringing riders together with discounts, live maps, maintenance tracking, and community features.",
        url: "https://apps.apple.com/tr/app/motofamily/id6749791459",
        author: {
          "@type": "Person",
          "@id": `${baseUrl}/#person`,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          ratingCount: "50",
        },
        softwareVersion: "1.0",
        releaseNotes: "Initial release",
        datePublished: "2025-01-01",
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
