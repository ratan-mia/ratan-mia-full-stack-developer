'use client';

import { useRef } from 'react';
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { STACK } from '@/app/data/site';

// A single, refined band of the tech stack between hairlines. Names alternate
// between sans and serif italic. Scroll velocity speeds the loop up and its
// direction follows the scroll.
export default function Marquee() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      // The track holds the list twice, so moving it by 50% loops seamlessly.
      const loop = gsap.fromTo('.marquee-track', { xPercent: 0 }, { xPercent: -50, duration: 50, ease: 'none', repeat: -1 });

      const st = ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const v = Math.abs(self.getVelocity());
          loop.timeScale(self.direction * (1 + Math.min(v / 300, 4)));
          gsap.to(loop, { timeScale: self.direction, duration: 1.2, overwrite: true, delay: 0.1 });
        },
      });

      gsap.from('.marquee-rule', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.4,
        ease: 'expo.out',
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 90%' },
      });

      return () => st.kill();
    });
  }, { scope: root });

  return (
    <section ref={root} aria-label="Technology stack" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-3 sm:px-4">
        <div className="marquee-rule h-px w-full bg-white/10" />
      </div>
      <div className="flex items-center gap-8 py-8 sm:py-10">
        <p className="hidden shrink-0 pl-12 font-mono text-[11px] uppercase tracking-[0.2em] text-mute lg:block">
          Stack I ship with
        </p>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="marquee-track inline-flex whitespace-nowrap will-change-transform">
            {[...STACK, ...STACK].map((t, i) => (
              <span key={`${t}-${i}`} className="inline-flex items-center">
                <span
                  className={
                    i % 2
                      ? 'px-7 font-serif text-[clamp(26px,3.4vw,46px)] italic text-paper/55'
                      : 'px-7 font-display text-[clamp(24px,3vw,40px)] font-semibold tracking-[-0.03em] text-paper'
                  }
                >
                  {t}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] px-3 sm:px-4">
        <div className="marquee-rule h-px w-full bg-white/10" />
      </div>
    </section>
  );
}
