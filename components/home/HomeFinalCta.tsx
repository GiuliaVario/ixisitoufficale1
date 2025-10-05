"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/buttons/Button";
import SocialIcon from "@/components/ui/icon/SocialIcon";
import { SOCIAL_LINKS } from "@/content/social-links";

export default function FinalCta() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] mt-6 sm:mt-8 md:mt-12 py-12 sm:py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-16">
          {/* Testo + CTA */}
          <div className="flex flex-col md:h-full md:justify-between text-left">
            <h2
              className="impact font-title font-black uppercase leading-[0.92] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(3.2rem, 8.5vw, 7rem)",
                wordSpacing: "0.05em",
              }}
            >
              <span className="block text-white">
                Hai un’<span className="text-[var(--brand-primary)]">idea</span>?
              </span>
              <span className="block text-white">
                Noi ti <span className="text-[var(--brand-accent-1)]">aiutiamo</span>
              </span>
              <span className="block text-white">
                a darle <span className="text-[var(--brand-accent-2)]">forma</span>
              </span>
            </h2>

            {/* CTA come Hero */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <Button
                href="/contatti"
                ariaLabel="Vai alla pagina contatti"
                variant="primary"  // viola → hover arancione
                size="lg"
                className="font-black"
                data-cta="final-contatti"
              >
                CONTATTACI ORA
              </Button>
            </div>

            {/* Social mobile */}
            <ul className="md:hidden mt-8 grid grid-cols-3 gap-6 justify-items-center">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.alt}>
                  <a
                    href={s.href}
                    aria-label={s.alt}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    className="block transition-transform duration-200 ease-out text-[var(--brand-accent-1)] hover:text-[var(--brand-accent-2)] hover:scale-[1.25] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    <SocialIcon name={s.name} size={56} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social desktop */}
          <ul className="hidden md:flex flex-col justify-start gap-5">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.alt}>
                <a
                  href={s.href}
                  aria-label={s.alt}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="block transition-transform duration-200 ease-out text-[var(--brand-accent-1)] hover:text-[var(--brand-accent-2)] hover:scale-[1.25] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
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
