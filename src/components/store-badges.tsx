// App Store and Google Play badges as SVG components
// These are more reliable than external URLs and work in dark/light modes

export function AppStoreBadge({
  className = "",
  variant = "black",
}: {
  className?: string;
  variant?: "black" | "white";
}) {
  const bgColor = variant === "black" ? "#000" : "#fff";
  const textColor = variant === "black" ? "#fff" : "#000";

  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="120" height="40" rx="6" fill={bgColor} />
      <g fill={textColor}>
        {/* Apple Logo */}
        <path d="M24.769 20.3c-.029-3.223 2.639-4.791 2.761-4.864-1.511-2.203-3.853-2.504-4.676-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.859 1.086 1.553 2.355 3.287 4.016 3.226 1.625-.067 2.232-1.036 4.193-1.036 1.943 0 2.513 1.036 4.207.997 1.744-.028 2.842-1.56 3.89-3.127 1.255-1.78 1.759-3.533 1.779-3.623-.041-.014-3.387-1.291-3.42-5.154zM21.588 10.159c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.421.106 2.88-.717 3.792-1.793z" />
        {/* Text */}
        <text
          x="42"
          y="14"
          fontSize="8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Download on the
        </text>
        <text
          x="42"
          y="27"
          fontSize="14"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          App Store
        </text>
      </g>
    </svg>
  );
}

export function GooglePlayBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 135 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="135" height="40" rx="6" fill="#000" />
      {/* Play Store Icon */}
      <defs>
        <linearGradient id="playGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#00f0ff" />
        </linearGradient>
        <linearGradient id="playGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3a44" />
          <stop offset="100%" stopColor="#c31162" />
        </linearGradient>
        <linearGradient id="playGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32a071" />
          <stop offset="100%" stopColor="#2da771" />
        </linearGradient>
        <linearGradient id="playGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffce00" />
          <stop offset="100%" stopColor="#ffba00" />
        </linearGradient>
      </defs>
      <g transform="translate(10, 7)">
        <path
          d="M1 3.3v19.4c0 .8.4 1.5 1.1 1.8l10.8-11.5L2.1 1.5C1.4 1.8 1 2.5 1 3.3z"
          fill="url(#playGrad1)"
        />
        <path
          d="M16.5 9.4L13.2 7.5 2.1 1.5c.3-.2.7-.3 1.1-.3.4 0 .8.1 1.2.3l12.1 7.9z"
          fill="url(#playGrad2)"
        />
        <path
          d="M2.1 24.5l11.1-6 3.3-1.9-3.6-3.6L2.1 24.5c.3.2.7.3 1.1.3.4 0 .8-.1 1.2-.3l-2.3 1.5-.1-1.5z"
          fill="url(#playGrad3)"
        />
        <path
          d="M20.4 12l-3.9-2.6-3.6 3.6 3.6 3.6 3.9-2.5c.7-.5.7-1.6 0-2.1z"
          fill="url(#playGrad4)"
        />
      </g>
      {/* Text */}
      <g fill="#fff">
        <text
          x="38"
          y="13"
          fontSize="7"
          fontFamily="system-ui, -apple-system, sans-serif"
          fill="#a0a0a0"
        >
          GET IT ON
        </text>
        <text
          x="38"
          y="27"
          fontSize="13"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Google Play
        </text>
      </g>
    </svg>
  );
}
