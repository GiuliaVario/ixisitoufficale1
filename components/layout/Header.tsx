'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/progetti', label: 'PROGETTI' },
  { href: '/servizi', label: 'SERVIZI' },
  { href: '/chi-siamo', label: 'CHI SIAMO' },
  { href: '/contatti', label: 'CONTATTI' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Evita lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = open ? 'hidden' : '';
    return () => {
      root.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-neutral-white text-neutral-black shadow-[inset_0_-1px_0_rgba(0,0,0,0.08)]">
      <Container>
        <div className="flex h-[120px] items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="IXI" className="flex items-center">
            <Image
              src="/icons/brand/logo.webp"
              alt="IXI"
              width={110}
              height={110}
              priority
            />
          </Link>

          {/* Menu desktop (da lg+) */}
          <nav
            className="hidden lg:flex items-center gap-14"
            aria-label="Navigazione principale"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md text-2xl font-extrabold transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger (fino a lg-1) */}
          <button
            type="button"
            className="lg:hidden p-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              /* Icona X */
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              /* Icona Hamburger */
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile/tablet */}
        <div className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
          <nav
            id="mobile-nav"
            className="border-t border-black/10 bg-neutral-white"
            aria-label="Navigazione mobile"
          >
            <ul className="flex flex-col gap-2 py-5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    onTouchStart={() => {}} /* abilita :active su iOS */
                    className="block px-5 py-4 rounded-xl text-xl font-extrabold transition-transform transition-colors duration-200 ease-out hover:scale-105 hover:text-[var(--brand-accent-2)] active:bg-[var(--brand-accent-1)] active:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
