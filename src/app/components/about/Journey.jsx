'use client';

import { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { JOURNEY } from '@/app/data/pages';

// Pinned horizontal timeline on desktop; vertical list on smaller screens.
export default function Journey() {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ big: '(min-width: 1024px)', motion: MOTION_OK }, (ctx) => {
      if (!ctx.conditions.big || !ctx.conditions.motion) return;
      const dist = () => track.current.scrollWidth - window.innerWidth + 96;
      const tween = gsap.to(track.current, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: '.journey-pin',
          start: 'top top',
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      gsap.fromTo('.journey-line', { scaleX: 0 }, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.journey-pin', start: 'top top', end: () => `+=${dist()}`, scrub: true },
      });
      gsap.utils.toArray('.journey-card').forEach((card) => {
        gsap.from(card.querySelector('.journey-year'), {
          yPercent: 60,
          autoAlpha: 0,
          ease: 'none',
          scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 85%', end: 'left 45%', scrub: true },
        });
      });
    });
  }, { scope: root });

  return (
    <section ref={root} className="bg-ink text-paper">
      <div className="journey-pin relative flex flex-col justify-center overflow-hidden py-24 lg:h-[100svh] lg:py-0">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">(01) — The journey</p>
          <h2 className="mt-4 font-display text-[clamp(36px,5.5vw,88px)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em]">
            Ten years, <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-lime">four chapters</span>
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-white/10 lg:block">
            <div className="journey-line h-full origin-left bg-lime" />
          </div>
          <ol ref={track} className="flex flex-col gap-10 px-5 sm:px-8 lg:w-max lg:flex-row lg:gap-0 lg:pl-12">
            {JOURNEY.map((j, i) => (
              <li key={j.title} className="journey-card relative lg:w-[34vw] lg:max-w-[520px] lg:pr-16">
                <span className="relative z-10 mb-8 hidden h-[13px] w-[13px] rounded-full border-2 border-lime bg-ink lg:mt-7 lg:block" />
                <p className="journey-year font-display text-[clamp(48px,6vw,96px)] font-extrabold leading-none tracking-[-0.05em] text-white/90">
                  {j.year}
                </p>
                <h3 className="mt-4 font-serif text-3xl italic text-lime">
                  {String(i + 1).padStart(2, '0')} — {j.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-paper/65">{j.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
