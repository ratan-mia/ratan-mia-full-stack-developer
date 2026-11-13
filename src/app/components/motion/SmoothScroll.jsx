'use client';

import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

// Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.95 });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Let in-page anchor links glide instead of jump.
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Reset to top and recalculate triggers on route change.
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
