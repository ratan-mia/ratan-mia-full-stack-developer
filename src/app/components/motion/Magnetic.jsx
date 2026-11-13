'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

// Wrap a button/link so it is gently pulled toward the pointer.
export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const move = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const reset = () => { xTo(0); yTo(0); };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', reset);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', reset);
    };
  }, { scope: ref });

  return (
    <span ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  );
}
