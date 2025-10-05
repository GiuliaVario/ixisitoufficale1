// data/navigation.ts

export const mainNav = [
  { label: "HOME", href: "/" },
  { label: "PROGETTI", href: "/progetti" },
  { label: "SERVIZI", href: "/servizi" },
  { label: "CHI SIAMO", href: "/chi-siamo" },
  { label: "CONTATTI", href: "/contatti" },
] as const;

export const legalNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookie", href: "/cookies" },
  { label: "Termini", href: "/terms" },
  { label: "Accessibilità", href: "/accessibility" },
] as const;
