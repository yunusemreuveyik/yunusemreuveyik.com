/**
 * Generate initials from a name
 */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Generate a consistent color based on name (deterministic)
 */
function getColorFromName(name: string): string {
  const colors = [
    "8b5cf6", // violet
    "6366f1", // indigo
    "3b82f6", // blue
    "0ea5e9", // sky
    "14b8a6", // teal
    "22c55e", // green
    "eab308", // yellow
    "f97316", // orange
    "ef4444", // red
    "ec4899", // pink
    "a855f7", // purple
  ];

  // Simple hash function to get consistent color per name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

/**
 * Generate an SVG avatar as a data URL
 * This replaces external calls to ui-avatars.com
 */
export function generateAvatar(
  name: string,
  options?: {
    size?: number;
    background?: string;
    color?: string;
  }
): string {
  const size = options?.size ?? 200;
  const background = options?.background ?? getColorFromName(name);
  const textColor = options?.color ?? "fff";
  const initials = getInitials(name);
  const fontSize = size * 0.4;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="${size}" height="${size}" fill="#${background}"/><text x="50%" y="50%" dy="0.35em" fill="#${textColor}" font-family="system-ui,-apple-system,sans-serif" font-size="${fontSize}" font-weight="600" text-anchor="middle">${initials}</text></svg>`;

  // Use encodeURIComponent for browser compatibility (works in both Node and browser)
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Generate avatar URL for use in Next.js Image component
 * Returns a data URL that works without external requests
 */
export function getAvatarUrl(name: string): string {
  return generateAvatar(name, {
    size: 200,
    background: "8b5cf6",
    color: "fff",
  });
}
