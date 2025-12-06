import "../../app/globals.css";
import type { Metadata } from "next";
import Providers from "@/components/providers";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import MouseGlow from "@/components/mouse-glow";
import { locales } from "../../i18n/routing";
import { Inter, Caveat } from "next/font/google";
import { siteConfig, localeConfig, type Locale } from "@/lib/seo-config";
import { HomeJsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata for the layout
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeData = localeConfig[locale as Locale] || localeConfig.en;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: localeData.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: localeData.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? "en_US" : "tr_TR",
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title: localeData.title,
      description: localeData.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: localeData.title,
      description: localeData.description,
      images: [siteConfig.ogImage],
      creator: "@yunusemreuveyik",
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        tr: `${siteConfig.url}/tr`,
      },
    },
    manifest: "/manifest.json",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(locales as readonly string[]).includes(locale)) notFound();

  const messages = (await import(`../../i18n/messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${caveat.variable}`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <HomeJsonLd locale={locale} />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased font-sans">
        <Providers locale={locale} messages={messages}>
          <MouseGlow />
          <Header />
          <main className="container mx-auto max-w-4xl px-6 pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
