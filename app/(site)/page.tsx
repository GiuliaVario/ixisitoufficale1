import Hero from "@/components/home/Hero";
import ExpandingRow from "@/components/home/ExpandingRow";
import ValuesSection from "@/components/home/ValuesSection";
import ServicesHome from "@/components/home/services-home";
import HomeFinalCta from "@/components/home/HomeFinalCta"; // ✅ nome e percorso corretti
import { homeProjects } from "@/content/home-projects";

export default function HomePage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* HERO */}
      <Hero />

      {/* BARRA FULL-BLEED sotto Hero */}
      <section className="relative mt-6 sm:mt-8 md:mt-16 lg:mt-20">
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <ExpandingRow items={homeProjects} />
        </div>
      </section>

      {/* VALORI */}
      <ValuesSection />

      {/* SERVIZI */}
      <ServicesHome />

      {/* CTA finale */}
      <HomeFinalCta /> {/* ✅ nome coerente col file */}
    </main>
  );
}
