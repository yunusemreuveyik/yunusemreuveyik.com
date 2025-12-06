"use client";

import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => (
    <section className="py-12 sm:py-16">
      <div className="space-y-12">
        {/* Header Skeleton */}
        <div className="text-center space-y-4">
          <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded mx-auto animate-pulse" />
          <div className="h-10 w-64 bg-neutral-200 dark:bg-neutral-800 rounded mx-auto animate-pulse" />
        </div>
        {/* Card Skeleton */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="w-28 h-28 sm:w-36 sm:h-36 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse" />
            <div className="flex-1 space-y-3 w-full">
              <div className="h-6 w-32 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              <div className="h-8 w-48 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              <div className="h-4 w-full max-w-xl bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
  ssr: true,
});

export default function ProjectsClient() {
  return <Projects />;
}
