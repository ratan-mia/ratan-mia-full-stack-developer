'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Magnetic from '@/components/motion/Magnetic';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { PROFILE } from '@/app/data/site';

const PAGES = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/portfolio' },
  { name: 'Case studies', href: '/case-studies' },
  { name: 'Résumé', href: '/resume' },
];

const MORE = [
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
  { name: 'Get a quote', href: '/quote' },
];

const WORK = [
  { name: 'NextPilot Chat', href: 'https://www.nextpilot.chat', tag: 'SaaS' },
  { name: 'TurfLet', href: '/case-studies/turfnations-booking', tag: 'Marketplace' },
  { name: 'ELF Bangladesh', href: '/case-studies/elf-bangladesh-app', tag: 'App' },
  { name: 'AutoTrader BD', href: '/case-studies/auto-trader', tag: 'B2B' },
  { name: 'OMODA & JAECOO', href: '/case-studies/omoda-jaecoo', tag: 'App' },
  { name: 'Japan Parts', href: '/case-studies/shopify-headless-cms', tag: 'Commerce' },
];

// Live clock in Dhaka time, so visitors know when I'm likely to reply.
function DhakaTime() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (!now) return <span className="inline-block w-[8ch]">--:--:--</span>;
  const time = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Dhaka', hour12: false });
  const hour = Number(time.slice(0, 2));
  const awake = hour >= 9 && hour < 23;
  return (
    <span className="inline-flex items-center gap-2">
      <span className="tabular-nums">{time}</span>
      <span className="text-mute">GMT+6 · {awake ? 'usually online' : 'probably asleep'}</span>
    </span>
  );
}

function Col({ title, items }) {
  return (
    <div className="ft-col">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">{title}</p>
      <ul className="mt-5 space-y-2.5">
        {items.map((it) => {
          const ext = it.href.startsWith('http') || it.href.startsWith('mailto');
          const Tag = it.href.startsWith('/') && !it.href.endsWith('.pdf') ? Link : 'a';
          return (
            <li key={it.name}>
              <Tag
                href={it.href}
                target={it.href.startsWith('http') ? '_blank' : undefined}
                rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                download={it.href.endsWith('.pdf') ? 'Ratan_Mia_Resume.pdf' : undefined}
                className="group inline-flex items-center gap-2 text-[15px] text-paper/75 transition-colors hover:text-lime"
              >
                <span className="relative">
                  {it.name}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                {it.tag && <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-mute">{it.tag}</span>}
                {ext && <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />}
              </Tag>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  const root = useRef(null);
  const year = new Date().getFullYear();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      // Footer content slides up as it enters, like a curtain lifting.
      gsap.from('.ft-inner', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'top 30%', scrub: true },
      });
      gsap.from('.ft-cta-line', {
        yPercent: 110,
        stagger: 0.08,
        duration: 1.3,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.ft-cta', start: 'top 85%' },
      });
      gsap.from('.ft-col', {
        y: 30,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.ft-cols', start: 'top 90%' },
      });
      // Wordmark letters rise in, then the fill wipes lime as you reach the end.
      gsap.from('.ft-mark-char', {
        yPercent: 100,
        stagger: 0.04,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.ft-mark', start: 'top 98%' },
      });
      gsap.fromTo(
        '.ft-mark-fill',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          ease: 'none',
          scrollTrigger: { trigger: '.ft-mark', start: 'top bottom', end: 'bottom bottom', scrub: true },
        }
      );
    });
  }, { scope: root });

  const toTop = () => (window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: 'smooth' }));
  const word = 'RATAN MIA';

  return (
    <footer ref={root} className="relative overflow-hidden bg-ink text-paper" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="ft-inner relative">
        {/* CTA */}
        <div className="ft-cta mx-auto max-w-[1440px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Available for new projects
            <span className="hidden text-white/20 sm:inline">/</span>
            <span className="normal-case tracking-normal text-paper/70 sm:text-xs">
              Dhaka <DhakaTime />
            </span>
          </div>

          <div className="mt-10 grid grid-cols-12 items-end gap-x-4 gap-y-10">
            <p className="col-span-12 font-display text-[clamp(44px,8vw,132px)] font-extrabold uppercase leading-[0.86] tracking-[-0.055em] lg:col-span-8">
              <span className="block overflow-hidden">
                <span className="ft-cta-line block">Got an idea?</span>
              </span>
              <span className="block overflow-hidden">
                <span className="ft-cta-line block">
                  Let’s <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-lime">build it.</span>
                </span>
              </span>
            </p>
            <div className="col-span-12 flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Magnetic>
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-paper"
                >
                  Get a quote
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition-colors hover:border-paper"
                >
                  Email me
                </a>
              </Magnetic>
            </div>
          </div>

          <a
            href={`mailto:${PROFILE.email}`}
            data-cursor="Write"
            className="group mt-14 flex items-center justify-between gap-6 border-y border-white/10 py-6 transition-colors hover:border-lime/40"
          >
            <span className="font-display text-[clamp(22px,3.4vw,44px)] font-bold tracking-[-0.03em] transition-colors group-hover:text-lime">
              {PROFILE.email}
            </span>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </a>
        </div>

        {/* Link columns */}
        <div className="ft-cols mx-auto grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-12 px-5 py-16 sm:grid-cols-4 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="ft-col col-span-2 sm:col-span-4 lg:col-span-4">
            <Link href="/" className="font-display text-3xl font-extrabold tracking-[-0.04em]">
              Ratan<span className="text-lime">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-paper/55">
              Full-stack & mobile engineer and IT manager. Building products, apps and stores for teams worldwide since 2015.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Currently building</span>
              <a href="https://www.nextpilot.chat" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-paper transition-colors hover:text-lime">
                NextPilot Chat ↗
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-5">
            <Col title="Pages" items={PAGES} />
          </div>
          <div className="lg:col-span-2">
            <Col title="More" items={MORE} />
          </div>
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <Col title="Selected work" items={WORK} />
          </div>
          <div className="lg:col-span-2">
            <Col
              title="Elsewhere"
              items={[
                ...PROFILE.socials.filter((s) => s.href.startsWith('http')).map((s) => ({ name: s.label, href: s.href })),
                { name: 'Résumé (PDF)', href: '/resume.pdf' },
              ]}
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-mute sm:px-8 lg:px-12">
          <span>© 2015–{year} Ratan Mia · Dhaka, Bangladesh</span>
          <span className="hidden md:inline">Designed & built by me — Next.js, GSAP, Lenis</span>
          <button type="button" onClick={toTop} className="group inline-flex items-center gap-2 transition-colors hover:text-lime">
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-lime">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>

        {/* Wordmark: outline that fills lime as you reach the bottom */}
        <div className="ft-mark relative select-none px-3 pb-3 sm:px-5" aria-hidden="true">
          <p className="relative overflow-hidden whitespace-nowrap text-center font-display text-[15.5vw] font-extrabold uppercase leading-[0.8] tracking-[-0.06em]">
            <span className="text-outline-paper">
              {word.split('').map((c, i) => (
                <span key={i} className="ft-mark-char inline-block">
                  {c === ' ' ? ' ' : c}
                </span>
              ))}
            </span>
            <span className="ft-mark-fill absolute inset-0 text-lime">
              {word.split('').map((c, i) => (
                <span key={i} className="inline-block">
                  {c === ' ' ? '\u00a0' : c}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
