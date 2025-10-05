"use client";

import Container from "@/components/ui/Container";

export default function ServicesHero() {
  return (
    <section className="pt-[calc(var(--header-height,120px)+12px)] pb-14 md:pb-20 bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      <Container>
        <h1
          id="servizi-title"
          className="
            impact font-title font-black uppercase
            leading-[0.9] tracking-[-0.01em]
            mb-8 md:mb-10
            text-[clamp(3.4rem,8.3vw,7.4rem)]
          "
        >
          SERVIZI
        </h1>

        <div className="space-y-7 text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-[1.45rem] leading-[1.75] max-w-[85ch]">
          <p className="font-extrabold">
            Ogni progetto nasce da un’esigenza.
          </p>

          <p>
            A volte è chiara, altre volte ha bisogno di tempo per emergere.
            <br /> Per questo, prima di proporre soluzioni,{" "}
            <span className="font-extrabold">ascoltiamo</span> con attenzione,
            facciamo domande e ci prendiamo <br /> il tempo necessario per{" "}
            <span className="font-extrabold">capire davvero</span>.
          </p>

          <p>
            I nostri servizi non seguono schemi fissi: si adattano alle{" "}
            <span className="font-extrabold">persone</span>, ai loro{" "}
            <span className="font-extrabold">bisogni</span> e{" "}
            <span className="font-extrabold">obiettivi</span>. <br />
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
  );
}
