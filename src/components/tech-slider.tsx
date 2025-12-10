"use client";

import { InfiniteSlider, type SliderItem } from "react-seamless-slider";
import "react-seamless-slider/InfiniteSlider.css";

const techStack: SliderItem[] = [
  {
    id: "react",
    logo: "/logos/tech/react.svg",
    text: "React",
    alt: "React",
  },
  {
    id: "react-native",
    logo: "/logos/tech/react.svg",
    text: "React Native",
    alt: "React Native",
  },
  {
    id: "expo",
    logo: "/logos/tech/expo.svg",
    text: "Expo",
    alt: "Expo",
    invertDark: true,
  },
  {
    id: "typescript",
    logo: "/logos/tech/typescript.svg",
    text: "TypeScript",
    alt: "TypeScript",
  },
  {
    id: "html5",
    logo: "/logos/tech/html5.svg",
    text: "HTML5",
    alt: "HTML5",
  },
  {
    id: "css3",
    logo: "/logos/tech/css3.svg",
    text: "CSS3",
    alt: "CSS3",
  },
  {
    id: "angular",
    logo: "/logos/tech/angular.svg",
    text: "Angular",
    alt: "Angular",
  },
  {
    id: "ionic",
    logo: "/logos/tech/ionic.svg",
    text: "Ionic",
    alt: "Ionic",
  },
  {
    id: "nextjs",
    logo: "/logos/tech/nextjs.svg",
    text: "Next.js",
    alt: "Next.js",
    invertDark: true,
  },
  {
    id: "nodejs",
    logo: "/logos/tech/nodejs.svg",
    text: "Node.js",
    alt: "Node.js",
  },
  {
    id: "mongodb",
    logo: "/logos/tech/mongodb.svg",
    text: "MongoDB",
    alt: "MongoDB",
  },
  {
    id: "sqlserver",
    logo: "/logos/tech/sqlserver.svg",
    text: "SQL Server",
    alt: "SQL Server",
  },
  {
    id: "azure",
    logo: "/logos/tech/azure.svg",
    text: "Azure",
    alt: "Azure",
  },
  {
    id: "figma",
    logo: "/logos/tech/figma.svg",
    text: "Figma",
    alt: "Figma",
  },
  {
    id: "mui",
    logo: "/logos/tech/mui.svg",
    text: "MUI",
    alt: "MUI",
  },
  {
    id: "jest",
    logo: "/logos/tech/jest.svg",
    text: "Jest",
    alt: "Jest",
  },
  {
    id: "fast",
    logo: "/logos/tech/fast.svg",
    text: "FAST",
    alt: "FAST",
  },
  {
    id: "git",
    logo: "/logos/tech/git.svg",
    text: "Git",
    alt: "Git",
  },
  {
    id: "tailwind",
    logo: "/logos/tech/tailwindcss.svg",
    text: "Tailwind",
    alt: "Tailwind",
  },
  {
    id: "app-store",
    logo: "/logos/tech/apple.svg",
    text: "App Store",
    alt: "App Store",
    invertDark: true,
  },
  {
    id: "play-store",
    logo: "/logos/tech/android.svg",
    text: "Play Store",
    alt: "Play Store",
  },
];

export default function TechSlider() {
  return (
    <div id="tech-slider" className="w-full">
      <InfiniteSlider
        items={techStack}
        duration={30}
        gap="3rem"
        pauseOnHover={true}
        showGradients={true}
      />
    </div>
  );
}
