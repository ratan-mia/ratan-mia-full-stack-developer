'use client';

import { useRef } from 'react';
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { STACK } from '@/app/data/site';

// Two counter-moving rows of the tech stack. Scroll velocity speeds them up
// and briefly skews the text; direction follows the scroll.
export default function Marquee() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const rows = gsap.utils.toArray('.marquee-track');
      // Each track holds the list twice, so moving it by 50% loops seamlessly.
      const loops = rows.map((row, i) =>
        i % 2
          ? gsap.fromTo(row, { xPercent: -50 }, { xPercent: 0, duration: 40, ease: 'none', repeat: -1 })
          : gsap.fromTo(row, { xPercent: 0 }, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
      );

      const skewTo = gsap.quickTo('.marquee-row', 'skewX', { duration: 0.6, ease: 'power3' });
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const v = self.getVelocity();
          const dir = self.direction;
          loops.forEach((loop) => {
            loop.timeScale(dir * (1 + Math.min(Math.abs(v) / 250, 6)));
            gsap.to(loop, { timeScale: dir, duration: 1.2, overwrite: true, delay: 0.1 });
          });
          skewTo(gsap.utils.clamp(-8, 8, v / -300));
        },
      });
      return () => st.kill();
    });
  }, { scope: root });

  const row = (items, outline) => (
    <div className="marquee-row overflow-hidden whitespace-nowrap py-2">
      <div className="marquee-track inline-flex will-change-transform">
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className={`mx-6 inline-flex items-center gap-6 font-display text-5xl font-bold uppercase tracking-[-0.03em] sm:text-7xl ${
              outline ? 'text-outline' : 'text-ink'
            }`}
          >
            {t}
            <span className="inline-block h-3 w-3 rotate-45 bg-ink" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={root} aria-label="Technology stack" className="overflow-hidden bg-lime py-10 sm:py-14">
      {row(STACK.slice(0, 9), false)}
      {row(STACK.slice(8), true)}
    </section>
  );
}
