# Yunus Emre Uveyik

**yunusemreuveyik.com**

My personal portfolio website built with Next.js, TypeScript, Tailwind CSS.

## 🚀 Tech Stack

### Core Technologies

- **Next.js 16** - React framework with App Router and static export
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework

### Internationalization & UI

- **next-intl** - Complete i18n solution for Next.js (English & Turkish)
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark mode support with system preference detection

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting with Tailwind plugin
- **TypeScript** - Static type checking

## ✨ Features

- **⚡ Performance Optimized** - Static export, lazy loading, code splitting, and optimized bundle sizes
- **🌍 Full Internationalization** - Complete English and Turkish support with locale routing
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🎨 Modern UI** - Clean design with smooth animations and dark mode
- **🔍 SEO Optimized** - Comprehensive meta tags, structured data (JSON-LD), sitemap, and robots.txt
- **♿ WCAG 2.1 AA Compliant** - Full keyboard navigation, screen reader support, focus indicators, and high contrast mode
- **🌙 Dark Mode** - System preference detection with manual toggle
- **📊 Static Site Generation** - Fully static export for fast hosting on any platform
- **🎯 Custom Avatar Generation** - Local SVG avatar generation (no external API calls)
- **💼 Professional Portfolio** - Showcase of experience, projects, and references

## 🎯 Performance Optimizations

### Code Splitting & Lazy Loading

- **Dynamic Imports** - Projects page uses `next/dynamic` for code splitting with loading skeletons
- **Route-based Splitting** - Automatic code splitting per route with Next.js App Router
- **Client Component Isolation** - Heavy components loaded only when needed

### Static Site Generation

- **Full Static Export** - Complete static HTML generation for maximum performance
- **Pre-rendered Pages** - All pages pre-rendered at build time
- **Optimized Images** - Next.js Image component with proper sizing and lazy loading

### Asset Optimization

- **Local Avatar Generation** - Custom SVG avatar generation replaces external API calls (`ui-avatars.com`)
- **CDN Preconnect** - Preconnect to `cdn.jsdelivr.net` for faster asset loading
- **Centralized Tech Logos** - Single source of truth for tech stack logos (`tech-logos.ts`)
- **Local Store Badges** - Custom SVG components for App Store and Google Play badges

### Build Optimizations

- **Conditional Static Export** - Static export only in production, normal dev server in development
- **Trailing Slashes** - Configured for better `.htaccess` compatibility
- **Optimized Bundle** - Tree-shaking and dead code elimination

## 🔍 SEO Optimizations

### Metadata & Structured Data

- **JSON-LD Schema** - Comprehensive structured data for:
  - Person schema (author information)
  - WebSite schema (site-wide metadata)
  - WebPage schema (page-specific metadata)
  - SoftwareApplication schema (for MotoFamily project)
- **Dynamic Metadata** - Page-specific metadata generation with `generateMetadata`
- **Open Graph Tags** - Complete OG tags for social media sharing
- **Twitter Cards** - Optimized Twitter card metadata
- **Canonical URLs** - Proper canonical URLs for all pages
- **Hreflang Tags** - Language alternates for i18n SEO

### Technical SEO

- **Sitemap Generation** - Dynamic sitemap with all locale/page combinations
- **Robots.txt** - Properly configured robots.txt for search engines
- **Favicons & Icons** - Dynamic favicon generation with multiple sizes
- **Open Graph Images** - Dynamically generated OG images
- **Manifest File** - Web app manifest for PWA support

### Content SEO

- **Semantic HTML** - Proper use of semantic elements
- **Alt Text** - Descriptive alt text for all images
- **Keywords** - Strategic keyword placement in metadata
- **Page-specific Descriptions** - Unique descriptions for each page

## ♿ Accessibility Features

### WCAG 2.1 Compliance

The website is built with accessibility in mind, following WCAG 2.1 Level AA guidelines.

### Keyboard Navigation

- **Full Keyboard Support** - All interactive elements are keyboard accessible
- **Focus Indicators** - Visible focus rings on all interactive elements (violet outline)
- **Skip to Main Content** - Skip link appears on first Tab press for quick navigation
- **Escape Key Support** - Escape key closes modals, dropdowns, and mobile menu
- **Logical Tab Order** - Focus order follows visual layout (top to bottom, left to right)
- **No Keyboard Traps** - Users can navigate away from all elements

### ARIA Attributes & Semantic HTML

- **ARIA Labels** - All icon-only buttons have descriptive `aria-label` attributes
- **ARIA States** - Interactive elements use `aria-expanded`, `aria-pressed`, `aria-selected`
- **ARIA Roles** - Proper roles for dialogs (`role="dialog"`), listboxes (`role="listbox"`)
- **ARIA Landmarks** - Semantic HTML with `<header>`, `<nav>`, `<main>` elements
- **Active Page Indication** - Navigation links use `aria-current="page"` for active state
- **Screen Reader Support** - All content is properly announced by screen readers

### Visual Accessibility

- **High Contrast Mode** - CSS support for Windows High Contrast Mode via `prefers-contrast` media query
- **Focus Visibility** - Enhanced focus indicators with 2px violet rings and offset
- **Color Contrast** - Text meets WCAG AA standards (4.5:1 minimum contrast ratio)
- **Theme Support** - Dark and light modes with system preference detection
- **Responsive Design** - Mobile-first approach ensures usability on all devices

### Screen Reader Optimization

- **Descriptive Link Text** - All links have meaningful, descriptive text
- **Button Labels** - All buttons have accessible names (text or `aria-label`)
- **Heading Structure** - Proper heading hierarchy (h1, h2, etc.) for navigation
- **Form Labels** - All form inputs have associated labels (when applicable)
- **Live Regions** - Dynamic content changes are announced (when applicable)

### Windows Integration

- **System Theme Detection** - Automatically detects and matches Windows theme (light/dark)
- **High Contrast Support** - Respects Windows High Contrast Mode settings
- **Theme Toggle** - Manual theme toggle button with system preference fallback

### Testing & Validation

- **Lighthouse Audit** - Accessibility score of 90+ in Chrome DevTools
- **Keyboard Testing** - All features tested with keyboard-only navigation
- **Screen Reader Testing** - Compatible with NVDA, Narrator, and other screen readers
- **Automated Tools** - Validated with axe DevTools and WAVE extensions

### Accessibility Testing Guide

For detailed testing instructions, see [ACCESSIBILITY_TESTING.md](./ACCESSIBILITY_TESTING.md) which includes:

- Windows theme change testing
- High Contrast Mode testing
- Keyboard navigation testing
- Screen reader testing (NVDA, Narrator)
- Color contrast validation
- Automated testing tools

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Locale-based routing (en, tr)
│   │   ├── about/         # About page
│   │   ├── experience/    # Experience page with lazy loading
│   │   ├── projects/      # Projects page with lazy loading
│   │   ├── references/    # Testimonials/references page
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Home page
│   ├── robots.ts          # Dynamic robots.txt generation
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── icon.tsx           # Dynamic favicon generation
│   ├── apple-icon.tsx     # Apple touch icon
│   └── opengraph-image.tsx # OG image generation
├── components/            # Reusable UI components
│   ├── header.tsx         # Navigation header
│   ├── welcome-component.tsx # Home page hero
│   ├── my-experiences.tsx # Experience list
│   ├── testimonials.tsx  # Testimonials with filtering
│   ├── projects.tsx      # Projects showcase
│   ├── tech-slider.tsx   # Technology carousel
│   ├── json-ld.tsx       # Structured data components
│   ├── locale-switcher.tsx # Language switcher
│   ├── theme-toggle.tsx  # Dark mode toggle
│   └── mouse-glow.tsx    # Interactive mouse glow effect
├── data/                  # Static data configurations
│   └── testimonials.ts    # Testimonial configurations
├── i18n/                  # Internationalization
│   ├── messages/         # Translation files (en.json, tr.json)
│   ├── routing.ts        # i18n routing configuration
│   └── request.ts        # Server-side i18n request handler
├── lib/                   # Utility functions
│   ├── avatar.ts         # Local avatar generation
│   ├── tech-logos.ts     # Centralized tech logo configuration
│   └── seo-config.ts    # SEO configuration
└── middleware.ts          # Next.js middleware for i18n
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yunusemreuveyik/yunusemreuveyikcom.git
   cd yunusemreuveyikcom
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (generates static export in `out/` directory)
- `pnpm start` - Start production server (not used for static export)
- `pnpm lint` - Run ESLint

## 🌍 Internationalization

The website supports two languages:

- **English (en)** - Default locale
- **Turkish (tr)** - Native locale

### Adding New Translations

1. Add translation keys to `src/i18n/messages/en.json` and `src/i18n/messages/tr.json`
2. Use `useTranslations()` hook in components:
   ```typescript
   const t = useTranslations("namespace");
   return <p>{t("key")}</p>;
   ```

## 🎨 Customization

### Theme Colors

Edit `src/app/globals.css` to customize the color scheme. The project uses:

- Primary: Violet/Purple gradient (`#8b5cf6` to `#6366f1`)
- Neutral colors for backgrounds and text
- Dark mode variants

### Adding New Pages

1. Create a new route in `src/app/[locale]/your-page/`
2. Add `generateStaticParams()` for static generation
3. Add translations in `src/i18n/messages/`
4. Update navigation in `src/components/header.tsx`
5. Add sitemap entry in `src/app/sitemap.ts`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
