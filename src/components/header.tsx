"use client";

import ThemeToggle from "./theme-toggle";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "../i18n/routing";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  FileText,
  FolderKanban,
  User,
  Briefcase,
} from "lucide-react";
import GradientText from "./gradient-text";

const navItems = [
  { href: "/", key: "home", icon: Home },
  { href: "/#experience", key: "experience", icon: Briefcase, isSection: true },
  { href: "/blog", key: "blog", icon: FileText },
  { href: "/projects", key: "projects", icon: FolderKanban },
  { href: "/about", key: "about", icon: User },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experienceInView, setExperienceInView] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Track experience section visibility using scroll position
  useEffect(() => {
    if (pathname !== "/") {
      setExperienceInView(false);
      return;
    }

    const checkExperienceInView = () => {
      const section = document.getElementById("experience");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Section is "in view" when its top is in the upper 60% of viewport
      // and its bottom hasn't scrolled past the top
      const isInView = rect.top < viewportHeight * 0.6 && rect.bottom > 100;
      setExperienceInView(isInView);
    };

    // Check on mount and scroll
    checkExperienceInView();
    window.addEventListener("scroll", checkExperienceInView, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkExperienceInView);
    };
  }, [pathname]);

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      // If already on home page, scroll to section
      if (pathname === "/") {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
      // If not on home page, let the Link navigate to /#experience
    },
    [pathname]
  );

  const isActive = (href: string, isSection?: boolean) => {
    if (isSection && href === "/#experience") {
      return pathname === "/" && experienceInView;
    }
    if (href === "/") return pathname === "/" && !experienceInView;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/0 dark:bg-neutral-950/0 backdrop-blur-md">
        <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-sm font-semibold text-neutral-900 dark:text-white"
          >
            <span className="text-neutral-600 dark:text-neutral-400">
              Yunus Emre
            </span>{" "}
            <GradientText>Üveyik</GradientText>
          </Link>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={
                    item.isSection
                      ? (e) => handleSectionClick(e, "experience")
                      : undefined
                  }
                  className={`text-sm transition-colors ${
                    isActive(item.href, item.isSection)
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 border-l border-neutral-200 dark:border-neutral-800 pl-6">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Bottom Sheet Menu */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-t-2xl border-t border-neutral-200 dark:border-neutral-800 max-h-[85vh] overflow-auto shadow-2xl">
                {/* Handle */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
                </div>

                {/* Close Button Row */}
                <div className="flex items-center justify-between px-4 pb-2">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    {t("menu")}
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="px-3 pb-8 pt-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            if (item.isSection) {
                              handleSectionClick(e, "experience");
                            }
                            setMobileMenuOpen(false);
                          }}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-colors ${
                            isActive(item.href, item.isSection)
                              ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium"
                              : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-[15px]">{t(item.key)}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Footer actions */}
                <div className="px-4 pb-6 flex items-center justify-center gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-4">
                  <LocaleSwitcher />
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
