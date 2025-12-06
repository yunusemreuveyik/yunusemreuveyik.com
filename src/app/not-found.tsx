import "./globals.css";
import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <div className="space-y-8">
            {/* 404 with code style */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl sm:text-6xl font-light text-neutral-400 dark:text-neutral-600 select-none">
                  &lt;
                </span>
                <span className="text-7xl sm:text-9xl font-bold tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                  404
                </span>
                <span className="text-4xl sm:text-6xl font-light text-neutral-400 dark:text-neutral-600 select-none">
                  /&gt;
                </span>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                Page Not Found
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto text-sm sm:text-base">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has
                been moved.
              </p>
            </div>

            {/* Decorative code comment */}
            <div>
              <code className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-600 font-mono">
                {"// TODO: Find the right page"}
              </code>
            </div>

            {/* Navigation button */}
            <div className="pt-4">
              <Link
                href="/en"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded text-neutral-700 dark:text-neutral-300 transition-all duration-300 text-sm border border-violet-400 dark:border-violet-500/50 hover:border-violet-500 dark:hover:border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Go Home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
