"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/buttons/Button";
import SocialIcon from "@/components/ui/icon/SocialIcon";
import { SOCIAL_LINKS } from "@/content/social-links";

export default function AboutFinalCta() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] mt-12 sm:mt-16 md:mt-20 py-12 sm:py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-16">
          {/* TESTO + CTA */}
          <div className="flex flex-col">
            <h2
              className="impact font-title font-black uppercase leading-[0.92] tracking-[-0.01em]"
              style={{ fontSize: "clamp(3.2rem, 8.5vw, 7rem)" }}
            >
              <span className="block text-white">Visione</span>
              <span className="block text-[var(--brand-accent-2)]">Idee</span>
              <span className="block text-[var(--brand-primary)]">Valore</span>
              <span className="block text-[var(--brand-accent-1)]">Azione</span>
            </h2>

            {/* CTA */}
            <div className="mt-8">
              <Button
                href="/contatti"
                ariaLabel="Vai alla pagina contatti"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                data-cta="about-final-contatti"
              >
                CONOSCIAMOCI
              </Button>
            </div>
          </div>

          {/* SOCIAL — DESKTOP */}
          <ul className="hidden md:flex flex-col justify-start gap-6">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.alt}>
                <a
                  href={s.href}
                  aria-label={s.alt}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="text-[var(--brand-accent-1)] block transition-transform duration-200 ease-out hover:scale-[1.18] hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  <SocialIcon name={s.name} size={64} />
                </a>
              </li>
            ))}
          </ul>

          {/* SOCIAL — MOBILE */}
          <ul className="md:hidden mt-10 grid grid-cols-3 gap-6 justify-items-center">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.alt}>
                <a
                  href={s.href}
                  aria-label={s.alt}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="text-[var(--brand-accent-1)] block transition-transform duration-200 ease-out hover:scale-[1.15] hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  <SocialIcon name={s.name} size={56} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
