import type { Config } from "tailwindcss";

export default {
  // Tailwind v4 tuple form: strategy + selector
  darkMode: ["class", ".dark"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
