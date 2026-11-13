'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { CAPABILITIES } from '@/app/data/site';

// Stacking cards: each card pins under the header and the previous one
// scales back and dims as the next slides over it.
export default function Capabilities() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const cards = gsap.utils.toArray('.cap-card');
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.9 + i * 0.015,
          filter: 'brightness(0.75)',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top 65%',
            end: 'top 20%',
            scrub: true,
          },
        });
      });
      gsap.from('.cap-head > *', {
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.cap-head', start: 'top 85%' },
      });
    });
  }, { scope: root });

  return (
    <section ref={root} id="capabilities" className="relative bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="cap-head grid grid-cols-12 gap-6">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50 lg:col-span-3">
            (03) — What I do
          </p>
          <h2 className="col-span-12 font-display text-[clamp(40px,6vw,96px)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] lg:col-span-9">
            One engineer,{' '}
            <span className="font-serif font-normal normal-case italic tracking-[-0.02em]">the whole stack</span>
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {CAPABILITIES.map((c, i) => (
            <article
              key={c.no}
              className="cap-card sticky origin-top rounded-3xl p-6 will-change-transform sm:p-12 lg:p-16"
              style={{
                top: `calc(14vh + ${i * 28}px)`,
                backgroundColor: i % 2 ? '#141414' : '#0b0b0b',
                color: '#f2f0e9',
              }}
            >
              <div className="grid grid-cols-12 gap-x-4 gap-y-8 lg:gap-8">
                <div className="col-span-12 flex flex-col items-start gap-6 lg:col-span-5 lg:justify-between lg:gap-0">
                  <span className="font-mono text-sm text-lime">{c.no}</span>
                  <h3 className="font-display text-[clamp(34px,7vw,64px)] font-bold leading-[0.95] tracking-[-0.04em] lg:mt-24">
                    {c.title}
                  </h3>
                </div>
                <div className="col-span-12 flex flex-col justify-end gap-8 lg:col-span-6 lg:col-start-7">
                  <p className="text-lg leading-relaxed text-paper/70 sm:text-xl">{c.body}</p>
                  <ul className="divide-y divide-white/10 border-y border-white/10">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-center justify-between py-4 font-mono text-xs uppercase tracking-[0.15em] text-paper/80">
                        {pt}
                        <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-ink/15 pt-10">
          <p className="max-w-md text-lg text-ink/70">Pricing, packages and how an engagement works.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper transition-colors hover:bg-lime hover:text-ink"
            >
              All services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center rounded-full border border-ink/25 px-7 py-4 text-sm font-semibold transition-colors hover:border-ink"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
