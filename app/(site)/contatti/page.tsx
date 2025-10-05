// src/app/contatti/page.tsx
import type { Metadata } from "next";
import ContactHero from "@/components/contatti/ContactHero";

export const metadata: Metadata = {
  title: "Contatti", // 👈 senza "| IXI", il layout applica il template
  description:
    "Costruiamo insieme il tuo progetto: raccontaci la tua idea e ti risponderemo al volo.",
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    title: "Contatti",
    description:
      "Costruiamo insieme il tuo progetto: raccontaci la tua idea e ti risponderemo al volo.",
    type: "website",
    url: "/contatti",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      <ContactHero />
    </main>
  );
}
