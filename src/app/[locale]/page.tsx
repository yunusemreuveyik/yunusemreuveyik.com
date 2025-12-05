"use client";

import WelcomeComponent from "@/components/welcome-component";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";

// Skeleton loader while experience section loads
function ExperienceSkeleton() {
  return (
    <section id="experience" className="py-24">
      <div className="mb-16 animate-pulse">
        <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded mb-4" />
        <div className="h-8 w-64 bg-neutral-200 dark:bg-neutral-800 rounded" />
      </div>
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 p-6 animate-pulse"
          >
            <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded" />
            <div className="space-y-4">
              <div className="h-6 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="h-4 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded" />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[1, 2, 3, 4].map((j) => (
                  <div
                    key={j}
                    className="h-6 w-16 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Dynamically import the MyExperiences component
const MyExperiences = dynamic(() => import("@/components/my-experiences"), {
  loading: () => <ExperienceSkeleton />,
  ssr: false,
});

function LazyExperience() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const placeholder = placeholderRef.current;
    if (!placeholder) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px 0px" }
    );

    observer.observe(placeholder);
    return () => observer.disconnect();
  }, []);

  if (!shouldLoad) {
    return (
      <div ref={placeholderRef} className="min-h-[400px]">
        <ExperienceSkeleton />
      </div>
    );
  }

  return <MyExperiences />;
}

export default function Home() {
  return (
    <>
      <WelcomeComponent />
      <LazyExperience />
    </>
  );
}
