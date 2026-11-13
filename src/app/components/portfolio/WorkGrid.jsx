'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Flip } from 'gsap/Flip';
import { gsap } from '@/lib/gsap';
import { PROJECTS } from '@/app/data/site';
import { ARCHIVE } from '@/app/data/pages';

if (typeof window !== 'undefined') gsap.registerPlugin(Flip);

const GROUP = {
  nextpilot: 'Products',
  turflet: 'Products',
  pieqr: 'Products',
  matchlyzer: 'Products',
  elf: 'Mobile',
  omoda: 'Mobile',
  chery: 'Commerce',
  headless: 'Commerce',
  japanparts: 'Commerce',
  skjapan: 'Commerce',
  motojp: 'Commerce',
  autotrader: 'Web apps',
  'elf-international': 'Web apps',
  'elf-apl': 'Web apps',
};

const ALL = [
  ...PROJECTS.map((p) => ({ ...p, group: GROUP[p.id] })),
  ...ARCHIVE.map((p) => ({ ...p, group: GROUP[p.id], accent: '#1a1a1a' })),
];
const FILTERS = ['All', 'Products', 'Mobile', 'Commerce', 'Web apps'];

export default function WorkGrid() {
  const grid = useRef(null);
  const flipState = useRef(null);
  const [filter, setFilter] = useState('All');

  const choose = (f) => {
    if (f === filter) return;
    flipState.current = Flip.getState(grid.current.querySelectorAll('.wk-card'));
    setFilter(f);
  };

  // After the filter re-renders, animate cards from their old positions.
  useLayoutEffect(() => {
    if (!flipState.current) return;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    Flip.from(flipState.current, {
      duration: calm ? 0 : 0.8,
      ease: 'expo.inOut',
      absolute: true,
      stagger: 0.03,
      onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 0.6, delay: 0.2 }),
      onLeave: (els) => gsap.to(els, { autoAlpha: 0, scale: 0.9, duration: 0.4 }),
      onComplete: () => window.dispatchEvent(new Event('resize')),
    });
    flipState.current = null;
  }, [filter]);

  const visible = ALL.filter((p) => filter === 'All' || p.group === filter);

  return (
    <>
      <div data-reveal className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
          {FILTERS.map((f) => {
            const count = f === 'All' ? ALL.length : ALL.filter((p) => p.group === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => choose(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  filter === f ? 'border-ink bg-ink text-lime' : 'border-ink/20 hover:border-ink'
                }`}
              >
                {f} <sup className="ml-0.5 font-mono text-[10px] opacity-60">{count}</sup>
              </button>
            );
          })}
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
          Showing {visible.length} of {ALL.length}
        </p>
      </div>

      <ul ref={grid} className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
        {visible.map((p, i) => {
          const href = p.caseStudy || p.live;
          const external = !p.caseStudy && p.live;
          const Card = (
            <>
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl" style={{ backgroundColor: p.accent }}>
                <Image
                  src={p.image}
                  alt={`${p.title} — ${p.category}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper backdrop-blur">
                  {p.group} · {p.year}
                </span>
                {href && (
                  <span className="absolute bottom-4 right-4 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-lime text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl font-bold tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">{p.category || p.kind}</p>
                </div>
                <span className="font-mono text-sm text-ink/30">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-ink/65">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70">
                    {t}
                  </li>
                ))}
              </ul>
            </>
          );
          return (
            <li key={p.id} data-flip-id={p.id} className="wk-card">
              {href ? (
                <Link
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  data-cursor={p.caseStudy ? 'Case study' : 'Visit'}
                  className="group block"
                >
                  {Card}
                </Link>
              ) : (
                <div className="group">{Card}</div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
