// SEO Configuration for yunusemreuveyik.com

export const siteConfig = {
  name: "Yunus Emre Uveyik",
  title: "Yunus Emre Uveyik - Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Experienced in building scalable web applications at Microsoft, Telescope Labs, and more.",
  url: "https://yunusemreuveyik.com",
  ogImage: "/opengraph-image",
  links: {
    github: "https://github.com/yunusemreuveyik",
    linkedin: "https://www.linkedin.com/in/yunusemreuveyik/",
  },
  author: {
    name: "Yunus Emre Uveyik",
    email: "hello@yunusemreuveyik.com",
    jobTitle: "Senior Frontend Developer",
  },
  keywords: [
    "Yunus Emre Uveyik",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Software Engineer",
    "Microsoft",
    "UI Developer",
    "Frontend Engineer",
  ],
} as const;

export const localeConfig = {
  en: {
    title: "Yunus Emre Uveyik - Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Experienced in building scalable web applications at Microsoft, Telescope Labs, and more.",
    pages: {
      home: {
        title: "Yunus Emre Uveyik - Senior Frontend Developer",
        description:
          "Welcome to my portfolio. I'm a Senior Frontend Developer with experience at Microsoft, building modern web applications with React and Next.js.",
      },
      references: {
        title: "References - Yunus Emre Uveyik",
        description:
          "Professional references and testimonials from colleagues at Microsoft, Telescope Labs, Kod Yazılım, and Medya-T.",
      },
      experience: {
        title: "Experience - Yunus Emre Uveyik",
        description:
          "My professional journey as a Frontend Developer at Microsoft, Telescope Labs, Kod Yazılım, and Medya-T.",
      },
      projects: {
        title: "Projects - Yunus Emre Uveyik",
        description:
          "Explore my projects including MotoFamily - a social network app for motorcycle enthusiasts built with React Native, Expo, and Node.js.",
      },
    },
  },
  tr: {
    title: "Yunus Emre Uveyik - Kıdemli Frontend Geliştirici",
    description:
      "React, Next.js ve TypeScript konularında uzmanlaşmış Kıdemli Frontend Geliştirici. Microsoft, Telescope Labs ve daha fazlasında ölçeklenebilir web uygulamaları geliştirme deneyimi.",
    pages: {
      home: {
        title: "Yunus Emre Uveyik - Kıdemli Frontend Geliştirici",
        description:
          "Portfolyoma hoş geldiniz. Microsoft'ta deneyim sahibi, React ve Next.js ile modern web uygulamaları geliştiren bir Kıdemli Frontend Geliştiriciyim.",
      },
      references: {
        title: "Referanslar - Yunus Emre Uveyik",
        description:
          "Microsoft, Telescope Labs, Kod Yazılım ve Medya-T'deki meslektaşlarımdan profesyonel referanslar ve değerlendirmeler.",
      },
      experience: {
        title: "Deneyim - Yunus Emre Uveyik",
        description:
          "Microsoft, Telescope Labs, Kod Yazılım ve Medya-T'de Frontend Geliştirici olarak profesyonel yolculuğum.",
      },
      projects: {
        title: "Projeler - Yunus Emre Uveyik",
        description:
          "Projelerimi keşfedin: MotoFamily - React Native, Expo ve Node.js ile geliştirilen motorsiklet tutkunları için sosyal ağ uygulaması.",
      },
    },
  },
} as const;

export type Locale = keyof typeof localeConfig;
