"use client";

import { useLocale } from "next-intl";
import { locales, usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const localeNames: Record<string, string> = { en: "English", tr: "Türkçe" };
const localeFlags: Record<string, string> = { en: "🇺🇸", tr: "🇹🇷" };

interface LocaleSwitcherProps {
  position?: "top" | "bottom";
}

export default function LocaleSwitcher({
  position = "bottom",
}: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const switchTo = (l: string) => {
    router.replace({ pathname }, { locale: l }); // ✅ preserves path, swaps locale
    setOpen(false);
  };

  const isTop = position === "top";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Globe className="w-[18px] h-[18px]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: isTop ? 8 : -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isTop ? 8 : -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className={`absolute min-w-[140px] py-1.5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg z-50 ${
              isTop
                ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
                : "right-0 top-full mt-2"
            }`}
            role="listbox"
            aria-label="Language selection"
          >
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchTo(l)}
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer ${
                  currentLocale === l
                    ? "text-neutral-900 dark:text-white font-medium"
                    : "text-neutral-600 dark:text-neutral-400"
                }`}
              >
                <span className="text-base">{localeFlags[l]}</span>
                <span>{localeNames[l]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
