import Link from "next/link";
import Image from "next/image";
import { mainNav, legalNav } from "@/data/navigation";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-white text-neutral-black">
      <Container className="py-12">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" aria-label={site.name}>
              <Image
                src="/icons/brand/logo.webp"
                alt={`${site.name} logo`}
                width={140}
                height={40}
                className="h-auto w-auto max-w-[140px]"
              />
            </Link>
            <p className="mt-4 max-w-prose text-sm opacity-80 font-body">
              Siti web professionali, SEO e social. <br /> Performance,
              sicurezza e risultati.
            </p>
          </div>

          {/* Site nav */}
          <nav aria-label="Footer – Navigazione">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide opacity-70 font-display">
              Navigazione
            </h3>
            <ul className="space-y-2 font-display">
              {mainNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md text-base transition-colors hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-2)]/40"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Footer – Legale">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide opacity-70 font-display">
              Legale
            </h3>
            <ul className="space-y-2 font-display">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md text-base transition-colors hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-2)]/40"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm opacity-80 md:flex-row">
          <p className="font-display">
            © {year} {site.name} — Tutti i diritti riservati
          </p>
        </div>
      </Container>
    </footer>
  );
}
