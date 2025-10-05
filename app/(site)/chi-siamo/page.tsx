// src/app/chi-siamo/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import TeamSection from "@/components/chi-siamo/TeamSection";
import AboutFinalCta from "@/components/chi-siamo/AboutFinalCta";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.ixidigitalagency.com";

export const metadata: Metadata = {
  title: "Chi Siamo", // ✅ titolo pulito, RootLayout aggiunge " | IXI"
  description:
    "IXI è incrocio, connessione e sinergia: strategia, contenuti e sviluppo su misura per progetti digitali chiari, distintivi e funzionali.",
  alternates: { canonical: `${SITE_URL}/chi-siamo` },
  openGraph: {
    title: "Chi Siamo | IXI",
    description:
      "Un team unico: strategia, contenuti e sviluppo per risultati concreti.",
    type: "website",
    url: `${SITE_URL}/chi-siamo`,
    siteName: "IXI",
  },
};

export default function AboutUsPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* HERO INTRO */}
      <section className="pt-[calc(var(--header-height,120px)+12px)] pb-14 md:pb-20">
        <Container>
          <h1
            className="impact font-title font-black uppercase leading-[0.9] tracking-[-0.01em] mb-8 md:mb-10
                       text-[clamp(3rem,8vw,6.5rem)] text-[var(--brand-primary)]"
          >
            CHI SIAMO
          </h1>

          <div className="space-y-7 md:space-y-9 text-[1.05rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.45rem] leading-[1.8] max-w-[90ch]">
            <p>Siamo un team, non una catena di montaggio.</p>

            <p>
              <span className="font-extrabold">
                IXI è incrocio, connessione, sinergia.
              </span>
              <br />
              Tre profili diversi, una direzione condivisa: trasformare idee in
              progetti digitali chiari, distintivi e funzionali.
            </p>

            <p>
              Uniamo strategia, contenuti e sviluppo in soluzioni su misura:
              flessibili, personalizzate, orientate ai risultati. Lavoriamo per
              dare forma alla tua visione e renderla{" "}
              <span className="font-extrabold">
                coerente, riconoscibile e competitiva.
              </span>
            </p>

            <p className="font-extrabold">Perché ogni progetto, parte da te.</p>
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <TeamSection />

      {/* CTA finale specifica per “Chi Siamo” */}
      <AboutFinalCta />
    </main>
  );
}
