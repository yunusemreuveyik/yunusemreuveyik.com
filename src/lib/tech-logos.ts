// Shared tech logo configuration
// Used across welcome page (tech-slider) and projects page

export interface TechLogo {
  name: string;
  logo: string;
  invertDark?: boolean;
}

export const techLogos: TechLogo[] = [
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
    name: "Node.js",
    logo: "/logos/tech/nodejs.svg",
  },
  {
    name: "MongoDB",
    logo: "/logos/tech/mongodb.svg",
  },
  {
    name: "Firebase",
    logo: "/logos/tech/firebase.svg",
  },
  {
    name: "Azure",
    logo: "/logos/tech/azure.svg",
  },
];

// Helper function to get logo by name
export function getTechLogo(name: string): TechLogo | undefined {
  return techLogos.find((tech) => tech.name === name);
}
