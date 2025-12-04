"use client";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`relative ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #000000 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1.2,
      }}
    >
      {children}
    </span>
  );
}
