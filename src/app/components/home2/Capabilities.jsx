'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CapGraphic from '@/components/graphics/CapGraphic';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { CAPABILITIES } from '@/app/data/site';

// Stacking cards: each card pins under the header and the previous one
// scales back and dims as the next slides over it. Each card carries a line
// illustration that draws itself in when the card arrives.
export default function Capabilities() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const cards = gsap.utils.toArray('.cap-card');
      cards.forEach((card, i) => {
        // Illustration draw-in.
        const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 75%' } });
        tl.from(card.querySelectorAll('.cg-draw'), { drawSVG: '0%', duration: 1.6, stagger: 0.04, ease: 'power2.inOut' })
          .from(
            card.querySelectorAll('.cg-pop'),
            { scale: 0, autoAlpha: 0, transformOrigin: '50% 50%', stagger: 0.04, duration: 0.8, ease: 'back.out(2)' },
            0.5
          )
          .from(card.querySelectorAll('.cap-in'), { y: 30, autoAlpha: 0, stagger: 0.08, duration: 1, ease: 'expo.out' }, 0.1);

        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.9 + i * 0.015,
          filter: 'brightness(0.7)',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top 65%',
            end: 'top 20%',
            scrub: true,
          },
        });
      });

      // Ambient loops inside the illustrations.
      gsap.to('.cg-blink', { autoAlpha: 0, duration: 0.55, repeat: -1, yoyo: true, ease: 'steps(1)' });
      gsap.utils.toArray('.cg-pulse').forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 1, autoAlpha: 0.9, transformOrigin: '50% 50%' },
          { scale: 2.6, autoAlpha: 0, duration: 2, repeat: -1, ease: 'power2.out', delay: (i % 2) * 1 }
        );
      });
      gsap.utils.toArray('.cg-dot').forEach((dot, i) => {
        const path = root.current.querySelector(`#${dot.dataset.path}`);
        if (!path) return;
        gsap
          .timeline({ repeat: -1, repeatDelay: 0.6, delay: i * 0.45 })
          .set(dot, { autoAlpha: 1 })
          .to(dot, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 1.8, ease: 'power1.inOut' })
          .to(dot, { autoAlpha: 0, duration: 0.2 });
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
              className="cap-card sticky origin-top overflow-hidden rounded-[32px] p-6 will-change-transform sm:p-10 lg:p-14"
              style={{
                top: `calc(12vh + ${i * 28}px)`,
                background:
                  i % 2
                    ? 'radial-gradient(120% 90% at 50% 0%, #1c1c1a 0%, #121212 60%)'
                    : 'radial-gradient(120% 90% at 50% 0%, #171716 0%, #0b0b0b 60%)',
                color: '#f2f0e9',
              }}
            >
              <div className="relative grid grid-cols-12 items-stretch gap-x-4 gap-y-8 lg:gap-10">
                <div className="col-span-12 flex flex-col items-start gap-6 lg:col-span-4 lg:justify-between">
                  <span className="cap-in inline-flex items-center gap-3 font-mono text-sm text-lime">
                    {c.no}
                  </span>
                  <h3 className="cap-in font-display text-[clamp(34px,7vw,64px)] font-bold leading-[0.95] tracking-[-0.04em] lg:text-[clamp(36px,3.8vw,58px)]">
                    {c.title}
                  </h3>
                </div>

                <div className="col-span-12 flex items-center justify-center lg:col-span-4">
                  <div className="w-full max-w-[360px] text-paper/45 lg:max-w-[400px]">
                    <CapGraphic index={i} />
                  </div>
                </div>

                <div className="col-span-12 flex flex-col justify-end gap-8 lg:col-span-4">
                  <p className="cap-in text-lg leading-relaxed text-paper/70">{c.body}</p>
                  <ul className="cap-in divide-y divide-white/10 border-y border-white/10">
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
