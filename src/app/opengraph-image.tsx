import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo-config";

export const dynamic = "force-static";
export const runtime = "nodejs";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -150,
          left: -150,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          right: -200,
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "rgba(99, 102, 241, 0.05)",
        }}
      />

      {/* Content */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {/* Logo */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 72,
            fontWeight: 700,
            color: "white",
          }}
        >
          Y
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Name */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Yunus Emre Uveyik
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 32,
              color: "#a3a3a3",
              marginTop: 8,
            }}
          >
            Senior Frontend Developer
          </div>
        </div>
      </div>

      {/* Skills */}
      <div
        style={{
          marginTop: 60,
          fontSize: 24,
          color: "#737373",
          display: "flex",
          gap: 16,
        }}
      >
        <span>React</span>
        <span>•</span>
        <span>Next.js</span>
        <span>•</span>
        <span>TypeScript</span>
        <span>•</span>
        <span>JavaScript</span>
      </div>

      {/* Companies */}
      <div
        style={{
          marginTop: 20,
          fontSize: 20,
          color: "#525252",
        }}
      >
        Microsoft • Telescope Labs • Kod Yazılım • Medya-T
      </div>

      {/* URL */}
      <div
        style={{
          marginTop: 40,
          fontSize: 24,
          fontWeight: 600,
          background: "linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)",
          backgroundClip: "text",
          color: "#8b5cf6",
        }}
      >
        yunusemreuveyik.com
      </div>
    </div>,
    {
      ...size,
    }
  );
}
