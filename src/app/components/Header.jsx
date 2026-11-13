'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Download } from 'lucide-react';
import { gsap, useGSAP } from '@/lib/gsap';

const NAV = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/portfolio' },
  { name: 'Case studies', href: '/case-studies', dropdown: true },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const CASE_STUDIES = [
  { name: 'AutoTrader BD', href: '/case-studies/auto-trader', note: 'B2B car trading' },
  { name: 'Japan Parts Headless', href: '/case-studies/shopify-headless-cms', note: 'Headless commerce' },
  { name: 'Chery Bangladesh', href: '/case-studies/chery-bangladesh-app', note: 'Automotive app' },
  { name: 'OMODA & JAECOO', href: '/case-studies/omoda-jaecoo', note: 'Dual-brand app' },
  { name: 'ELF Bangladesh', href: '/case-studies/elf-bangladesh-app', note: 'Commerce super-app' },
  { name: 'TurfLet', href: '/case-studies/turfnations-booking', note: 'Venue booking' },
  { name: 'Gamify · PieQR', href: '/case-studies/gamify', note: 'QR loyalty' },
];

export default function Header() {
  const pathname = usePathname() || '/';
  const bar = useRef(null);
  const overlay = useRef(null);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [solid, setSolid] = useState(false);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  // Hide on scroll down, reveal on scroll up; add a backdrop once scrolled.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      if (!bar.current || open) return;
      if (y > last && y > 240) gsap.to(bar.current, { yPercent: -120, duration: 0.5, ease: 'power3.out' });
      else gsap.to(bar.current, { yPercent: 0, duration: 0.5, ease: 'power3.out' });
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  // Close menus on navigation.
  useEffect(() => {
    setOpen(false);
    setDrop(false);
  }, [pathname]);

  // Full-screen mobile menu.
  useGSAP(() => {
    if (!overlay.current) return;
    if (open) {
      document.documentElement.style.overflow = 'hidden';
      window.__lenis?.stop();
      gsap.set(overlay.current, { display: 'block' });
      gsap.fromTo(overlay.current, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'expo.inOut' });
      gsap.from('.mnav-item', { yPercent: 120, duration: 1, stagger: 0.05, ease: 'expo.out', delay: 0.35 });
    } else {
      document.documentElement.style.overflow = '';
      window.__lenis?.start();
      gsap.to(overlay.current, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.6,
        ease: 'expo.inOut',
        onComplete: () => gsap.set(overlay.current, { display: 'none' }),
      });
    }
  }, { dependencies: [open], scope: overlay });

  return (
    <>
      <header ref={bar} className="fixed inset-x-0 top-0 z-50 will-change-transform">
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 transition-colors duration-500 sm:px-8 lg:px-12 ${
            solid ? 'lg:py-3' : 'lg:py-5'
          }`}
        >
          <Link
            href="/"
            className={`rounded-full px-4 py-2 font-display text-xl font-extrabold tracking-[-0.04em] text-paper transition-colors ${
              solid ? 'bg-ink/80 backdrop-blur-md' : ''
            }`}
          >
            Ratan<span className="text-lime">.</span>
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-ink/70 p-1.5 backdrop-blur-md lg:flex"
          >
            {NAV.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDrop(true)}
                  onMouseLeave={() => setDrop(false)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href) ? 'bg-paper text-ink' : 'text-paper/80 hover:text-paper'
                    }`}
                    aria-expanded={drop}
                    onFocus={() => setDrop(true)}
                  >
                    {item.name}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${drop ? 'rotate-180' : ''}`} />
                  </Link>
                  <div
                    className={`absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                      drop ? 'visible opacity-100' : 'invisible -translate-y-1 opacity-0'
                    }`}
                  >
                    <ul className="rounded-3xl border border-white/10 bg-ink/95 p-2 shadow-2xl backdrop-blur-xl">
                      {CASE_STUDIES.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onBlur={(e) => !e.currentTarget.closest('ul')?.contains(e.relatedTarget) && setDrop(false)}
                            className="group flex items-center justify-between rounded-2xl px-4 py-3 text-paper transition-colors hover:bg-white/[0.06]"
                          >
                            <span>
                              <span className="block text-sm font-semibold">{c.name}</span>
                              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-mute">{c.note}</span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-mute transition-all group-hover:rotate-45 group-hover:text-lime" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'bg-paper text-ink' : 'text-paper/80 hover:text-paper'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Ratan_Mia_Resume.pdf"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-ink/70 px-4 py-2.5 text-sm font-medium text-paper backdrop-blur-md transition-colors hover:border-white/30 sm:inline-flex"
            >
              <Download className="h-4 w-4" /> Résumé
            </a>
            <Link
              href="/quote"
              className="hidden items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-paper sm:inline-flex"
            >
              Let’s talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-[60] grid h-11 w-11 place-items-center rounded-full bg-paper text-ink lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-500 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-500 ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={overlay}
        id="mobile-menu"
        className="fixed inset-0 z-40 hidden overflow-y-auto bg-ink text-paper lg:hidden"
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <div className="flex min-h-full flex-col justify-between px-5 pb-10 pt-28 sm:px-8">
          <ul className="space-y-1">
            {[{ name: 'Home', href: '/' }, ...NAV, { name: 'Résumé', href: '/resume' }].map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <Link
                  href={item.href}
                  className={`mnav-item flex items-baseline gap-4 py-1 font-display text-5xl font-extrabold uppercase tracking-[-0.05em] sm:text-6xl ${
                    isActive(item.href) ? 'text-lime' : ''
                  }`}
                >
                  <span className="font-mono text-xs font-normal text-mute">{String(i + 1).padStart(2, '0')}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/quote" className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink">
              Get a quote
            </Link>
            <a href="mailto:shorifull@gmail.com" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
              shorifull@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
