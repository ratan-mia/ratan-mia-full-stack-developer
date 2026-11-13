'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

// Custom cursor for fine pointers: a dot plus a ring that grows over interactive
// elements. Elements with data-cursor="View" show a label inside the ring.
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [label, setLabel] = useState('');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;
    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const xDot = gsap.quickTo(dot.current, 'x', { duration: 0.12, ease: 'power3' });
    const yDot = gsap.quickTo(dot.current, 'y', { duration: 0.12, ease: 'power3' });
    const xRing = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' });
    const yRing = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' });

    const move = (e) => {
      xDot(e.clientX); yDot(e.clientY);
      xRing(e.clientX); yRing(e.clientY);
    };

    const over = (e) => {
      const el = e.target.closest('a, button, [data-cursor], input, textarea, select');
      if (!el) return;
      const text = el.getAttribute('data-cursor') || '';
      setLabel(text);
      gsap.to(ring.current, { scale: text ? 3.2 : 1.8, duration: 0.4, ease: 'expo.out' });
      gsap.to(dot.current, { scale: 0, duration: 0.2 });
    };
    const out = (e) => {
      const el = e.target.closest('a, button, [data-cursor], input, textarea, select');
      if (!el || el.contains(e.relatedTarget)) return;
      setLabel('');
      gsap.to(ring.current, { scale: 1, duration: 0.4, ease: 'expo.out' });
      gsap.to(dot.current, { scale: 1, duration: 0.2 });
    };
    const leave = () => gsap.to([dot.current, ring.current], { autoAlpha: 0, duration: 0.2 });
    const enter = () => gsap.to([dot.current, ring.current], { autoAlpha: 1, duration: 0.2 });

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    document.documentElement.addEventListener('mouseleave', leave);
    document.documentElement.addEventListener('mouseenter', enter);
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.documentElement.removeEventListener('mouseenter', enter);
    };
  }, []);

  if (!enabled) return <><div ref={dot} hidden /><div ref={ring} hidden /></>;

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true">
        <span className={label ? 'opacity-100' : 'opacity-0'}>{label}</span>
      </div>
    </>
  );
}
