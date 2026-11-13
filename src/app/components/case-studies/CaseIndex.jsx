'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap, useGSAP } from '@/lib/gsap';

/**
 * Index of case studies. On fine pointers a preview image follows the cursor
 * while hovering a row.
 */
export default function CaseIndex({ items }) {
  const root = useRef(null);
  const preview = useRef(null);
  const [active, setActive] = useState(null);

  useGSAP(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const xTo = gsap.quickTo(preview.current, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(preview.current, 'y', { duration: 0.6, ease: 'power3' });
    const move = (e) => {
      const r = root.current.getBoundingClientRect();
      xTo(e.clientX - r.left);
      yTo(e.clientY - r.top);
    };
    root.current.addEventListener('mousemove', move);
    return () => root.current?.removeEventListener('mousemove', move);
  }, { scope: root });

  useGSAP(() => {
    gsap.to(preview.current, {
      scale: active === null ? 0 : 1,
      autoAlpha: active === null ? 0 : 1,
      duration: 0.5,
      ease: 'expo.out',
    });
  }, { dependencies: [active], scope: root });

  return (
    <div ref={root} className="relative" onMouseLeave={() => setActive(null)}>
      <ul className="border-t border-ink/15">
        {items.map((c, i) => (
          <li key={c.slug} data-reveal className="border-b border-ink/15">
            <Link
              href={`/case-studies/${c.slug}`}
              onMouseEnter={() => setActive(i)}
              className="group grid grid-cols-12 items-center gap-x-4 gap-y-2 py-7 sm:py-9"
            >
              <span className="col-span-2 font-mono text-sm text-ink/40 sm:col-span-1">{String(i + 1).padStart(2, '0')}</span>
              <span className="col-span-10 font-display text-[clamp(28px,4.5vw,64px)] font-bold leading-none tracking-[-0.045em] transition-all duration-500 group-hover:translate-x-3 sm:col-span-6">
                {c.title}
              </span>
              <span className="col-span-10 col-start-3 text-[15px] text-ink/60 sm:col-span-3 sm:col-start-auto">{c.subtitle}</span>
              <span className="col-span-12 hidden items-center justify-end gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50 sm:col-span-2 sm:flex">
                {c.year}
                <ArrowUpRight className="h-5 w-5 text-ink transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={preview}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[260px] w-[360px] -translate-x-1/2 -translate-y-1/2 scale-0 overflow-hidden rounded-2xl bg-ink opacity-0 shadow-2xl lg:block"
      >
        {items.map((c, i) => (
          <Image
            key={c.slug}
            src={c.heroImage}
            alt=""
            fill
            sizes="360px"
            className={`object-cover transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
}
