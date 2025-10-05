// src/app/servizi/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ServicesSection from "@/components/shared/ServicesSection";
import ProcessSection from "@/components/servizi/ProcessSection";
import FinalCtaServizi from "@/components/servizi/FinalCtaServizi";
import { servicesPage } from "@/content/services-page";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.ixidigitalagency.com";

export const metadata: Metadata = {
  // Il layout aggiunge già " | IXI", quindi niente suffisso qui
  title: "Servizi",
  description:
    "Ogni progetto nasce da un’esigenza: ascoltiamo, capiamo davvero e costruiamo soluzioni su misura orientate ai risultati.",
  alternates: { canonical: `${SITE_URL}/servizi` },
  openGraph: {
    title: "Servizi",
    description:
      "Ascoltiamo, capiamo davvero e costruiamo soluzioni su misura per persone, bisogni e obiettivi.",
    type: "website",
    url: `${SITE_URL}/servizi`,
    siteName: "IXI",
  },
};

export default function ServiziPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* HERO INTRO (stile coerente con Chi Siamo) */}
      <section className="pt-[calc(var(--header-height,120px)+12px)] pb-14 md:pb-20">
        <Container>
          <h1
            className="impact font-title font-black uppercase leading-[0.9] tracking-[-0.01em] mb-8 md:mb-10
                       text-[clamp(3rem,8vw,6.5rem)]"
            style={{ color: "var(--brand-accent-1)" }}
          >
            SERVIZI
          </h1>

          <div className="space-y-7 md:space-y-9 text-[1.05rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.45rem] leading-[1.8] max-w-[90ch]">
            <p className="font-extrabold">Ogni progetto nasce da un’esigenza.</p>

            <p>
              A volte è chiara, altre volte ha bisogno di tempo per emergere.
              <br /> Per questo, prima di proporre soluzioni,{" "}
              <span className="font-extrabold">ascoltiamo</span> con attenzione,
              facciamo domande e ci prendiamo{" "}
              <span className="font-extrabold">
                il tempo necessario per capire davvero
              </span>
              .
            </p>

            <p>
              I nostri servizi non seguono schemi fissi: si adattano alle{" "}
              <span className="font-extrabold">persone</span>, ai loro{" "}
              <span className="font-extrabold">bisogni</span> e{" "}
              <span className="font-extrabold">obiettivi</span>.
              <br />
              Che si tratti di comunicazione, strategia o presenza online,
              costruiamo insieme qualcosa che funzioni — e che ti rappresenti.
            </p>

            <p>
              Qui sotto trovi come possiamo{" "}
              <span className="font-extrabold">affiancarti</span>, con strumenti
              chiari e un percorso costruito su misura per te.
            </p>
          </div>
        </Container>
      </section>

      {/* DETTAGLIO SERVIZI */}
      <ServicesSection items={servicesPage} />

      {/* PROCESSO A 4 STEP */}
      <ProcessSection />

      {/* CTA FINALE (uguale stile alle altre finalcta, bottone viola → hover arancione) */}
      <FinalCtaServizi />
    </main>
  );
}
