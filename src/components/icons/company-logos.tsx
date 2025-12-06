// Company logo components
// Extracted for reusability and cleaner code organization

export function MicrosoftLogo({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 23 23" fill="none">
      <path d="M0 0h11v11H0z" fill="#F25022" />
      <path d="M12 0h11v11H12z" fill="#7FBA00" />
      <path d="M0 12h11v11H0z" fill="#00A4EF" />
      <path d="M12 12h11v11H12z" fill="#FFB900" />
    </svg>
  );
}

export function TelescopeLogo({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#telescope-clip)">
        <path
          d="M24.0001 12.0001C24.0001 6.88242 24.0001 4.32359 22.6475 2.56085C22.2992 2.10703 21.893 1.70083 21.4392 1.3526C19.6765 0 17.1176 0 12 0C12 6.62739 17.3726 12.0001 24.0001 12.0001Z"
          fill="#2E9AFF"
        />
        <path
          d="M0 12C0 17.1176 0 19.6765 1.3526 21.4392C1.70083 21.893 2.10703 22.2992 2.56085 22.6475C4.32359 24.0001 6.88242 24.0001 12.0001 24.0001C12.0001 17.3727 6.62745 12 0 12Z"
          fill="#2957FF"
        />
        <path
          d="M1.3526 2.56085C0 4.32359 0 6.88242 0 12.0001C6.62745 12.0001 12.0001 6.62739 12.0001 0C6.88242 0 4.32359 0 2.56085 1.3526C2.10703 1.70083 1.70083 2.10703 1.3526 2.56085Z"
          fill="#57C1FF"
        />
        <path
          d="M12 24.0001C17.1176 24.0001 19.6765 24.0001 21.4392 22.6475C21.893 22.2992 22.2992 21.893 22.6475 21.4392C24.0001 19.6765 24.0001 17.1176 24.0001 12C17.3726 12 12 17.3727 12 24.0001Z"
          fill="#2B7BF3"
        />
      </g>
      <defs>
        <clipPath id="telescope-clip">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LinkedInIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
