'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * Site-wide scroll reveal. Any element with `data-reveal` fades and rises in
 * when it enters the viewport; siblings entering together are staggered.
 * `data-reveal="scale"` grows images in from a clipped frame instead.
 */
export default function AutoReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray('[data-reveal]:not([data-reveal="scale"])');
      const frames = gsap.utils.toArray('[data-reveal="scale"]');

      gsap.set(els, { y: 40, autoAlpha: 0 });
      ScrollTrigger.batch(els, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1, ease: 'expo.out', stagger: 0.08, overwrite: true }),
      });

      frames.forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(12% 8% 12% 8% round 24px)',
          scale: 1.04,
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });
    });

    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      cancelAnimationFrame(id);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
