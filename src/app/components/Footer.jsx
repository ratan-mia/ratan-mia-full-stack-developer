'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { PROFILE } from '@/app/data/site';

const PAGES = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/portfolio' },
  { name: 'Case studies', href: '/case-studies' },
  { name: 'Résumé', href: '/resume' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
  { name: 'Get a quote', href: '/quote' },
];

const WORK = [
  { name: 'NextPilot Chat', href: 'https://www.nextpilot.chat' },
  { name: 'TurfLet', href: '/case-studies/turfnations-booking' },
  { name: 'ELF Bangladesh', href: '/case-studies/elf-bangladesh-app' },
  { name: 'AutoTrader BD', href: '/case-studies/auto-trader' },
  { name: 'OMODA & JAECOO', href: '/case-studies/omoda-jaecoo' },
  { name: 'Japan Parts', href: '/case-studies/shopify-headless-cms' },
];

export default function Footer() {
  const root = useRef(null);
  const year = new Date().getFullYear();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.from('.ft-mark span', {
        yPercent: 100,
        stagger: 0.04,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.ft-mark', start: 'top 95%' },
      });
      gsap.from('.ft-col', {
        y: 30,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%' },
      });
    });
  }, { scope: root });

  const toTop = () => (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }));

  return (
    <footer ref={root} className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-x-4 gap-y-12 border-b border-white/10 pb-16">
          <div className="ft-col col-span-12 lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Say hello</p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="group mt-4 inline-flex items-center gap-3 font-display text-[clamp(26px,3.6vw,48px)] font-bold tracking-[-0.03em] transition-colors hover:text-lime"
            >
              {PROFILE.email}
              <ArrowUpRight className="h-8 w-8 transition-transform duration-500 group-hover:rotate-45" />
            </a>
            <p className="mt-6 max-w-sm text-paper/55">
              Full-stack & mobile engineer and IT manager in {PROFILE.location}. Working with teams worldwide.
            </p>
          </div>

          <nav aria-label="Footer" className="ft-col col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Pages</p>
            <ul className="mt-5 space-y-2.5">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-paper/75 transition-colors hover:text-lime">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ft-col col-span-6 sm:col-span-4 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Work</p>
            <ul className="mt-5 space-y-2.5">
              {WORK.map((w) => (
                <li key={w.name}>
                  <Link href={w.href} className="text-sm text-paper/75 transition-colors hover:text-lime">
                    {w.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col col-span-12 sm:col-span-4 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Elsewhere</p>
            <ul className="mt-5 space-y-2.5">
              {PROFILE.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-paper/75 transition-colors hover:text-lime"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/resume.pdf" download="Ratan_Mia_Resume.pdf" className="text-sm text-paper/75 transition-colors hover:text-lime">
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          <span>© {year} Ratan Mia</span>
          <span>Built with Next.js & GSAP</span>
          <button type="button" onClick={toTop} className="inline-flex items-center gap-2 transition-colors hover:text-lime">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="ft-mark pointer-events-none select-none overflow-hidden px-3 pb-2" aria-hidden="true">
        <p className="flex justify-between font-display text-[23vw] font-extrabold uppercase leading-[0.78] tracking-[-0.07em] text-white/[0.06]">
          {'RATAN'.split('').map((c, i) => (
            <span key={i} className="inline-block">
              {c}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
