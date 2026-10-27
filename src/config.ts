// Build-time values injected by build.mjs (see README for the environment variables).
declare const __SITE_URL__: string;
declare const __FORM_ENDPOINT__: string;
declare const __SHOW_VERIFY__: string;

export const SITE_URL: string = __SITE_URL__;
/** HTTPS endpoint that accepts JSON POSTs (Supabase Edge Function, Formspree, etc.). Empty = not configured. */
export const FORM_ENDPOINT: string = __FORM_ENDPOINT__;
/** Pre-launch flag: shows amber "To verify" notes and unconfirmed items. Set WIM_SHOW_VERIFY=false for launch. */
export const SHOW_VERIFY: boolean = __SHOW_VERIFY__ !== "false";

export const EMAILS = {
  general: "info@womeninmentoring.org",
  partnership: "partnership@womeninmentoring.org",
  editorial: "editorial@womeninmentoring.org",
};

/** Official social URLs. Left blank until WIM confirms them: blank entries are not rendered. */
export const SOCIALS: { label: string; url: string }[] = [
  { label: "LinkedIn", url: "" },
  { label: "Instagram", url: "" },
];

/** Approved hero photography. Set src + alt once WIM supplies licensed or owned images. */
export const HERO_IMAGE: { src: string; alt: string } | null = { src: "/images/community-hero.svg", alt: "Women in Mentoring community — abstract maroon and rose illustration of people connecting" };

/** Verified community metrics only. Leave empty until WIM supplies figures and an update date. */
export const COMMUNITY_STATS: { value: string; label: string }[] = [];
export const STATS_UPDATED = ""; // e.g. "March 2026"

/** Approved testimonials only (written consent obtained). */
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

export const SOCIAL_LINKS = SOCIALS.filter((s) => s.url);
