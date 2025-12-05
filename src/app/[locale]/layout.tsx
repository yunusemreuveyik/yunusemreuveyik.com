import "../../app/globals.css";
import Providers from "@/components/providers";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import MouseGlow from "@/components/mouse-glow";
import { locales } from "../../i18n/routing";

// ✅ DO NOT force-static; either delete the export or keep force-dynamic
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // Next 16: params is a Promise
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(locales as readonly string[]).includes(locale)) notFound();

  // ✅ Load the messages directly from your files based on the URL param
  const messages = (await import(`../../i18n/messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
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
