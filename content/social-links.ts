// src/content/social-links.ts

export type SocialLink = {
  href: string;
  alt: string;
  name: "whatsapp" | "tiktok" | "facebook" | "gmail" | "instagram" | "linkedin";
  external?: boolean;
};

export const SOCIAL_LINKS: ReadonlyArray<SocialLink> = [
  {
    href: "https://wa.me/0000000000",
    alt: "WhatsApp",
    name: "whatsapp",
    external: true,
  },
  {
    href: "mailto:hello@example.com",
    alt: "Email",
    name: "gmail",
  },
  {
    href: "https://facebook.com/your-page",
    alt: "Facebook",
    name: "facebook",
    external: true,
  },
  {
    href: "https://instagram.com/your-handle",
    alt: "Instagram",
    name: "instagram",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/your-handle/",
    alt: "LinkedIn",
    name: "linkedin",
    external: true,
  },
  {
    href: "https://www.tiktok.com/@your-handle",
    alt: "TikTok",
    name: "tiktok",
    external: true,
  },
] as const;
