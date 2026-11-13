'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CapGraphic from '@/components/graphics/CapGraphic';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { CAPABILITIES } from '@/app/data/site';

// Two-by-two grid of capability cards. Each card's line illustration draws
// itself in on arrival and keeps a small loop running; the card tilts gently
// toward the pointer.
export default function Capabilities() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const off = [];
      gsap.utils.toArray('.cap-card').forEach((card, i) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 80%' } });
        tl.from(card, { y: 80, autoAlpha: 0, duration: 1.2, ease: 'expo.out', delay: (i % 2) * 0.12 })
          .from(card.querySelectorAll('.cg-draw'), { drawSVG: '0%', duration: 1.6, stagger: 0.04, ease: 'power2.inOut' }, 0.2)
          .from(
            card.querySelectorAll('.cg-pop'),
            { scale: 0, autoAlpha: 0, transformOrigin: '50% 50%', stagger: 0.04, duration: 0.8, ease: 'back.out(2)' },
            0.7
          );

        // Pointer tilt.
        const rx = gsap.quickTo(card, 'rotationX', { duration: 0.8, ease: 'power3' });
        const ry = gsap.quickTo(card, 'rotationY', { duration: 0.8, ease: 'power3' });
        const move = (e) => {
          const r = card.getBoundingClientRect();
          ry(((e.clientX - r.left) / r.width - 0.5) * 6);
          rx(((e.clientY - r.top) / r.height - 0.5) * -6);
        };
        const leave = () => {
          rx(0);
          ry(0);
        };
        card.addEventListener('pointermove', move);
        card.addEventListener('pointerleave', leave);
        off.push(() => {
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerleave', leave);
        });
      });

      gsap.to('.cg-blink', { autoAlpha: 0, duration: 0.55, repeat: -1, yoyo: true, ease: 'steps(1)' });
      gsap.utils.toArray('.cg-pulse').forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 1, autoAlpha: 0.9, transformOrigin: '50% 50%' },
          { scale: 2.6, autoAlpha: 0, duration: 2, repeat: -1, ease: 'power2.out', delay: (i % 2) * 1 }
        );
      });
      gsap.utils.toArray('.cg-dot').forEach((dot, i) => {
        const path = root.current.querySelector(`#${dot.dataset.path}`);
        if (!path) return;
        gsap
          .timeline({ repeat: -1, repeatDelay: 0.6, delay: i * 0.45 })
          .set(dot, { autoAlpha: 1 })
          .to(dot, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 1.8, ease: 'power1.inOut' })
          .to(dot, { autoAlpha: 0, duration: 0.2 });
      });

      gsap.from('.cap-head > *', {
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.cap-head', start: 'top 85%' },
      });

      return () => off.forEach((fn) => fn());
    });
  }, { scope: root });

  return (
    <section ref={root} id="capabilities" className="relative bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="cap-head grid grid-cols-12 gap-6">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50 lg:col-span-3">
            (03) — What I do
          </p>
          <h2 className="col-span-12 font-display text-[clamp(40px,6vw,96px)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] lg:col-span-9">
            One engineer,{' '}
            <span className="font-serif font-normal normal-case italic tracking-[-0.02em]">the whole stack</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 [perspective:1400px] md:grid-cols-2">
          {CAPABILITIES.map((c, i) => (
            <article
              key={c.no}
              className="cap-card group relative flex flex-col overflow-hidden rounded-[32px] bg-ink p-7 text-paper will-change-transform sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lime/0 blur-3xl transition-colors duration-700 group-hover:bg-lime/15" />

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-sm text-lime">{c.no}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
                  {['Web', 'Mobile', 'Commerce', 'Ops'][i]}
                </span>
              </div>

              <div className="relative mx-auto my-8 w-full max-w-[380px] text-paper/45 sm:my-10">
                <CapGraphic index={i} />
              </div>

              <div className="relative mt-auto">
                <h3 className="font-display text-[clamp(30px,3.4vw,48px)] font-bold leading-[0.95] tracking-[-0.04em]">{c.title}</h3>
                <p className="mt-4 max-w-lg text-paper/65">{c.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.points.map((pt) => (
                    <li key={pt} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/75">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-ink/15 pt-10">
          <p className="max-w-md text-lg text-ink/70">Pricing, packages and how an engagement works.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper transition-colors hover:bg-lime hover:text-ink"
            >
              All services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center rounded-full border border-ink/25 px-7 py-4 text-sm font-semibold transition-colors hover:border-ink"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
