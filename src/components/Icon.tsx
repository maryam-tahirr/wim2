import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>,
  mentor: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3.3 2.8-5 5.5-5s4.9 1.7 5.5 5" /><path d="M16 5.5c1.8.3 3 1.7 3 3.4M18 14c1.6.6 2.6 2.2 2.9 4.5" /></>,
  community: <><circle cx="8" cy="9" r="2.6" /><circle cx="16.5" cy="9" r="2.6" /><path d="M3 19c.5-2.8 2.4-4.3 5-4.3s4.5 1.5 5 4.3M13 19c.4-2.3 1.9-3.6 3.8-3.8 2 .1 3.6 1.4 4.2 3.8" /></>,
  learn: <><path d="M3 9l9-4.5L21 9l-9 4.5L3 9z" /><path d="M7 11.5V16c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.5" /></>,
  voice: <><path d="M5 5h14v10H10l-4 4v-4H5V5z" /><path d="M8.5 9h7M8.5 12h4" /></>,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.4A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></>,
  pin: <><path d="M12 21s6-5.6 6-10.5A6 6 0 006 10.5C6 15.4 12 21 12 21z" /><circle cx="12" cy="10.5" r="2.2" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.100-3.8 8.5c-2.600-2.400-3.800-5.200-3.800-8.500S9.400 5.900 12 3.500z" /></>,
  briefcase: <><rect x="3.5" y="7.5" width="17" height="12" rx="2" /><path d="M9 7.5V6a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 6v1.5M3.5 13h17" /></>,
  left: <path d="M19 12H5M11 6l-6 6 6 6" />,
  right: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export function Icon({ name, size = 20, className }: { name: keyof typeof paths | string; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name] ?? null}
    </svg>
  );
}
