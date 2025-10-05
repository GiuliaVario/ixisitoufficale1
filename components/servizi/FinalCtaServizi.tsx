// src/components/services/FinalCtaServizi.tsx
'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/buttons/Button';
import SocialIcon from '@/components/ui/icon/SocialIcon';
import { SOCIAL_LINKS } from '@/content/social-links';

export default function FinalCtaServizi() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] mt-16 sm:mt-20 md:mt-24 py-14 sm:py-18 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-16">
          {/* Testo + CTA */}
          <div className="flex flex-col md:h-full md:justify-between text-left">
            <h2
              className="impact font-title font-black uppercase leading-[0.9] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(3.1rem,8.4vw,7.1rem)' }}
            >
              <span className="block text-white">Non</span>
              <span className="block text-[var(--brand-accent-2)]">Pensarci</span>
              <span className="block text-[var(--brand-primary)]">Troppo</span>
              <span className="block text-[var(--brand-accent-1)]">Scrivici</span>
            </h2>

            {/* CTA (uguale alla Hero: viola -> hover arancione) */}
            <div className="mt-8 sm:mt-9">
              <Button
                href="/contatti"
                ariaLabel="Vai alla pagina contatti"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto sm:inline-flex md:max-w-[340px]"
                data-cta="servizi-contattaci"
              >
                CONTATTACI ORA
              </Button>
            </div>

            {/* Social su mobile → griglia 3x2 */}
            <ul className="md:hidden mt-10 grid grid-cols-3 gap-6 justify-items-center">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.alt} className="group">
                  <a
                    href={s.href}
                    aria-label={s.alt}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    className="block text-[var(--brand-accent-1)] transition-transform duration-200 ease-out hover:scale-110 hover:text-[var(--brand-accent-2)]"
                  >
                    <SocialIcon name={s.name} size={56} />
                    <span className="sr-only">{s.alt}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social su desktop → colonna a destra */}
          <ul className="hidden md:flex flex-col justify-start gap-6">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.alt} className="group">
                <a
                  href={s.href}
                  aria-label={s.alt}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="block text-[var(--brand-accent-1)] transition-transform duration-200 ease-out hover:scale-110 hover:text-[var(--brand-accent-2)]"
                >
                  <SocialIcon name={s.name} size={56} />
                  <span className="sr-only">{s.alt}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
