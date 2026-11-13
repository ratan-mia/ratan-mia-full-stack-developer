'use client';

import { useRef } from 'react';
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/lib/gsap';

/**
 * Dark page header used by every inner page.
 * `title` is plain text; `accent` (optional) is appended in italic serif lime.
 */
export default function PageHero({ eyebrow, title, accent, intro, meta = [], children }) {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.ph-title', { type: 'words,chars', mask: 'chars' });
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.1 });
      tl.from(split.chars, { yPercent: 110, duration: 1.3, stagger: 0.025 })
        .from('.ph-line', { scaleX: 0, transformOrigin: 'left', duration: 1.4 }, 0)
        .from('.ph-fade', { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.4);
      gsap.to('.ph-inner', {
        yPercent: -12,
        autoAlpha: 0.4,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      return () => split.revert();
    });
  }, { scope: root });

  return (
    <section ref={root} className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" aria-hidden="true" />
      <div className="ph-inner relative mx-auto max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
          <p className="ph-fade">{eyebrow}</p>
          {meta.length > 0 && (
            <p className="ph-fade flex flex-wrap gap-x-6 gap-y-1">
              {meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </p>
          )}
        </div>
        <div className="ph-line mt-5 h-px w-full bg-white/15" />

        <h1 className="ph-title mt-10 max-w-[16ch] font-display text-[clamp(48px,9vw,148px)] font-extrabold uppercase leading-[0.86] tracking-[-0.055em]">
          {title}
          {accent && (
            <>
              {' '}
              <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-lime">{accent}</span>
            </>
          )}
        </h1>

        {(intro || children) && (
          <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8 lg:mt-14">
            {intro && (
              <p className="ph-fade col-span-12 max-w-2xl text-lg leading-relaxed text-paper/65 sm:text-xl lg:col-span-7">
                {intro}
              </p>
            )}
            {children && <div className="ph-fade col-span-12 lg:col-span-5 lg:justify-self-end">{children}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
