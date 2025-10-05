'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';

type Member = {
  name: string;
  role: string;
  color: string;
  desc: string;
  img: string;
};

const TEAM: Member[] = [
  {
    name: 'FEDERICA',
    role: 'SOCIAL MEDIA',
    color: 'var(--brand-accent-2)',
    desc: 'Creazione contenuti, brand identity, gestione e strategia social media.',
    img: '/images/team/federica.webp',
  },
  {
    name: 'CHIARA',
    role: 'PROJECT MANAGER',
    color: 'var(--brand-primary)',
    desc: 'Affiancamento clienti, consulenza e gestione progetto.',
    img: '/images/team/chiara.webp',
  },
  {
    name: 'GIULIA',
    role: 'SVILUPPATORE',
    color: 'var(--brand-accent-1)',
    desc: 'Sviluppo web, SEO e UX/UI Experience.',
    img: '/images/team/giulia.webp',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] pt-6 md:pt-8 pb-16 md:pb-20">
      <Container>
        {/* Titolo */}
        <div className="mb-6 md:mb-8">
          <h2
            className="font-display font-extrabold uppercase leading-none text-right"
            style={{ fontSize: 'clamp(3.2rem,7vw,6.2rem)', color: 'var(--brand-primary)' }}
          >
            TEAM
          </h2>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="
                border-[3px] border-white/90 bg-transparent rounded-xl
                py-6 md:py-8            /* ⇦ verticali invariati */
                px-4 md:px-5            /* ⇦ laterali ridotti */
              "
            >
              {/* wrapper centrato */}
              <div className="mx-auto w-[210px] md:w-[230px]">
                {/* contenitore immagine con stessi angoli della card */}
                <div className="relative w-full h-[210px] md:h-[230px] rounded-xl overflow-hidden">
                  <Image
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    fill
                    sizes="(max-width: 768px) 210px, 230px"
                    className="object-cover"  /* cover + angoli del wrapper */
                    priority={false}
                  />
                </div>

                {/* Testo */}
                <div className="mt-4 text-left">
                  {/* Nome in Clash */}
                  <h3
                    className="font-display font-extrabold uppercase leading-none"
                    style={{ color: m.color, fontSize: 'clamp(1.5rem,2.4vw,2.1rem)' }}
                  >
                    {m.name}
                  </h3>

                  {/* Ruolo in Raleway */}
                  <p
                    className="font-body font-extrabold uppercase text-white mt-1"
                    style={{ fontSize: 'clamp(1.05rem,1.7vw,1.25rem)' }}
                  >
                    {m.role}
                  </p>

                  {/* Descrizione in Raleway */}
                  <p
                    className="mt-3 text-white/95 leading-relaxed font-body"
                    style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)' }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
