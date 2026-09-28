"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";

const PREVIEW_SCALE = 0.28;

type ShowcaseLivePreviewProps = {
  href: string;
  title: string;
};

function displayHost(href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    try {
      return new URL(href).host;
    } catch {
      return href;
    }
  }
  if (typeof window !== "undefined") {
    return `${window.location.host}${href.startsWith("/") ? href : `/${href}`}`;
  }
  return href.replace(/^\//, "");
}

export default function ShowcaseLivePreview({
  href,
  title,
}: ShowcaseLivePreviewProps) {
  const t = useTranslations("showcase");
  const rootRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const host = displayHost(href);
  const scalePercent = `${100 / PREVIEW_SCALE}%`;

  return (
    <div
      ref={rootRef}
      className="relative border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950"
    >
      <div className="flex h-9 items-center gap-2 border-b border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-white dark:bg-neutral-800 px-2 py-0.5 text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
          {host}
        </span>
        <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-violet-600 dark:text-violet-400 font-medium">
          {t("livePreviewBadge")}
        </span>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white dark:bg-neutral-900">
        {!shouldLoad ? (
          <div
            className="absolute inset-0 animate-pulse bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800"
            aria-hidden
          />
        ) : (
          <iframe
            title={t("livePreviewFrameTitle", { site: title })}
            src={href}
            className="pointer-events-none absolute left-0 top-0 border-0 origin-top-left"
            style={{
              width: scalePercent,
              height: scalePercent,
              transform: `scale(${PREVIEW_SCALE})`,
            }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms"
            tabIndex={-1}
          />
        )}

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 flex items-end justify-center bg-linear-to-t from-black/25 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500"
          aria-label={t("livePreviewOpen", { site: title })}
        >
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/95 dark:bg-neutral-900/95 px-3 py-2 text-xs font-medium text-neutral-900 dark:text-white shadow-lg">
            {t("livePreviewOpenShort")}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </span>
        </a>
      </div>
    </div>
  );
}
