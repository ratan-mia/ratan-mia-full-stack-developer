'use client';

import { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';

// Thin lime bar at the very top of the viewport that fills as the page scrolls.
export default function ScrollProgress() {
  const bar = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
        }
      );
    });
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]" aria-hidden="true">
      <div ref={bar} className="h-full w-full origin-left scale-x-0 bg-lime" />
    </div>
  );
}
