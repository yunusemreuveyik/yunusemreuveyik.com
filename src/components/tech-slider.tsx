"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const techStack = [
  {
    name: "React",
    logo: "/logos/tech/react.svg",
  },
  {
    name: "React Native",
    logo: "/logos/tech/react.svg",
  },
  {
    name: "Expo",
    logo: "/logos/tech/expo.svg",
    invertDark: true,
  },
  {
    name: "TypeScript",
    logo: "/logos/tech/typescript.svg",
  },
  {
    name: "HTML5",
    logo: "/logos/tech/html5.svg",
  },
  {
    name: "CSS3",
    logo: "/logos/tech/css3.svg",
  },
  {
    name: "Angular",
    logo: "/logos/tech/angular.svg",
  },
  {
    name: "Ionic",
    logo: "/logos/tech/ionic.svg",
  },
  {
    name: "Next.js",
    logo: "/logos/tech/nextjs.svg",
    invertDark: true,
  },
  {
    name: "Node.js",
    logo: "/logos/tech/nodejs.svg",
  },
  {
    name: "MongoDB",
    logo: "/logos/tech/mongodb.svg",
  },
  {
    name: "SQL Server",
    logo: "/logos/tech/sqlserver.svg",
  },
  {
    name: "Azure",
    logo: "/logos/tech/azure.svg",
  },
  {
    name: "Figma",
    logo: "/logos/tech/figma.svg",
  },
  {
    name: "MUI",
    logo: "/logos/tech/mui.svg",
  },
  {
    name: "Jest",
    logo: "/logos/tech/jest.svg",
  },
  {
    name: "FAST",
    logo: "/logos/tech/fast.svg",
  },
  {
    name: "Git",
    logo: "/logos/tech/git.svg",
  },
  {
    name: "Tailwind",
    logo: "/logos/tech/tailwindcss.svg",
  },
  {
    name: "App Store",
    logo: "/logos/tech/apple.svg",
    invertDark: true,
  },
  {
    name: "Play Store",
    logo: "/logos/tech/android.svg",
  },
];

export default function TechSlider() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy load images only when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay loading slightly to prioritize critical content
            setTimeout(() => setShouldLoad(true), 100);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );

    const element = document.getElementById("tech-slider");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // 2 copies is enough for seamless infinite scroll
  const items = [...techStack, ...techStack];

  return (
    <div id="tech-slider" className="w-full overflow-hidden">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute [dir=ltr]:left-0 [dir=rtl]:right-0 top-0 bottom-0 w-24 [dir=ltr]:bg-linear-to-r [dir=rtl]:bg-linear-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute [dir=ltr]:right-0 [dir=rtl]:left-0 top-0 bottom-0 w-24 [dir=ltr]:bg-linear-to-l [dir=rtl]:bg-linear-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex overflow-hidden">
          <div className="flex items-center gap-12 animate-infinite-scroll">
            {items.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-3 shrink-0 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {shouldLoad ? (
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className={`w-7 h-7 ${tech.invertDark ? "dark:invert" : ""}`}
                    unoptimized
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`w-7 h-7 bg-neutral-200 dark:bg-neutral-800 rounded ${
                      tech.invertDark ? "dark:invert" : ""
                    }`}
                    aria-hidden="true"
                  />
                )}
                <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
