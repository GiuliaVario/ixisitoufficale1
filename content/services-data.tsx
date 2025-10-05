import type { ServiceItem } from "@/components/shared/ServicesSection";

export const homeServices: ServiceItem[] = [
  {
    id: "sviluppo-web",
    title: "SVILUPPO WEB",
    color: "var(--brand-accent-1)",
    icon: "/icons/sections/sviluppoweb.webp",
    align: "right",
    body: (
      <>
        <span className="font-extrabold">E-commerce, vetrina, portfolio.</span>
        <br className="hidden sm:block" />
        Soluzioni su misura, veloci e responsive che convertono davvero.
      </>
    ),
  },
  {
    id: "social-media",
    title: "SOCIAL MEDIA",
    color: "var(--brand-primary)",
    icon: "/icons/sections/socialmedia.webp",
    align: "left",
    body: (
      <>
        <span className="font-extrabold">Strategia, contenuti, gestione.</span>
        <br className="hidden sm:block" />
        Una presenza coerente e riconoscibile, dati alla mano.
      </>
    ),
  },
  {
    id: "branding",
    title: "BRANDING",
    color: "var(--brand-accent-2)",
    icon: "/icons/sections/branding.webp",
    align: "right",
    body: (
      <>
        <span className="font-extrabold">Identità, tono di voce, visual.</span>
        <br className="hidden sm:block" />
        Un brand memorabile e consistente su tutti i touchpoint.
      </>
    ),
  },
];
