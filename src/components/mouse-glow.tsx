"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { resolvedTheme } = useTheme();

  // Wait for hydration to complete and detect touch device
  useEffect(() => {
    setMounted(true);
    // Detect if device supports touch
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
    );
  }, []);

  useEffect(() => {
    if (!mounted || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Prevent touch events from triggering mouse events
    const handleTouchStart = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [mounted, isVisible, isTouchDevice]);

  // Don't render anything until mounted (prevents hydration mismatch)
  if (!mounted) return null;

  // Don't show glow on touch devices or in light mode
  if (isTouchDevice || resolvedTheme !== "dark") return null;

  const glowColor = "rgba(139, 92, 246, 0.15)"; // Violet/Purple

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
      }}
    />
  );
}
