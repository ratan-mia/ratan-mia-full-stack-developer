'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import RotatingBadge from '@/components/graphics/RotatingBadge';
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/lib/gsap';
import { MANIFESTO, PROFILE, STACK, STATS } from '@/app/data/site';

// Bento-grid introduction: manifesto, portrait, stats, stack and a CTA as
// tiles of one grid. Tiles rise in as a batch; the manifesto lights up word
// by word and the stats count up.
export default function About() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.bento-manifesto', { type: 'words' });
      gsap.fromTo(
        split.words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: '.bento-manifesto', start: 'top 80%', end: 'bottom 50%', scrub: true },
        }
      );

      gsap.from('.bento-tile', {
        y: 70,
        autoAlpha: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: { each: 0.08 },
        scrollTrigger: { trigger: '.bento-grid', start: 'top 80%' },
      });

      gsap.to('.bento-photo img', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: { trigger: '.bento-photo', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      gsap.utils.toArray('.stat-value').forEach((el) => {
        const end = Number(el.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      });

      // Stack chips drift in two slow loops.
      gsap.utils.toArray('.bento-stack-row').forEach((row, i) => {
        gsap.fromTo(
          row,
          { xPercent: i % 2 ? -50 : 0 },
          { xPercent: i % 2 ? 0 : -50, duration: 30, ease: 'none', repeat: -1 }
        );
      });

      gsap.from('.about-head > *', {
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.about-head', start: 'top 85%' },
      });

      return () => split.revert();
    });
  }, { scope: root });

  const stackRow = (items) => (
    <div className="overflow-hidden">
      <div className="bento-stack-row inline-flex gap-2 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((t, i) => (
          <span key={`${t}-${i}`} className="rounded-full border border-white/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={root} id="intro" className="relative bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="about-head flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">(01) — About</p>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(40px,6vw,96px)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em]">
              An engineer with an{' '}
              <span className="font-serif font-normal normal-case italic tracking-[-0.02em]">IT manager’s</span> habits
            </h2>
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-base font-semibold"
          >
            More about me
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>

        <div className="bento-grid mt-14 grid grid-cols-12 gap-3 sm:gap-4">
          {/* Manifesto */}
          <div className="bento-tile relative col-span-12 flex flex-col justify-between overflow-hidden rounded-[28px] bg-ink p-7 text-paper sm:p-10 lg:col-span-7 lg:row-span-2">
            <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" aria-hidden="true" />
            <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
              <span>Why I do this</span>
              <span className="text-lime">●</span>
            </div>
            <p className="bento-manifesto relative mt-16 font-display text-[clamp(24px,2.6vw,40px)] font-semibold leading-[1.15] tracking-[-0.03em] lg:mt-24">
              {MANIFESTO}
            </p>
          </div>

          {/* Portrait */}
          <div className="bento-tile relative col-span-12 sm:col-span-6 lg:col-span-5 lg:row-span-2">
            <div className="bento-photo relative h-full min-h-[420px] overflow-hidden rounded-[28px] bg-ink/5">
              <Image
                src="/images/about-image.jpg"
                alt="Ratan Mia"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                className="scale-110 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-paper">
                <p className="font-serif text-3xl italic">{PROFILE.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
                  {PROFILE.role} · {PROFILE.location}
                </p>
              </div>
            </div>
            <RotatingBadge
              tone="lime"
              text="Since 2015 · Full-stack · Mobile · "
              size={112}
              className="absolute -top-6 right-6"
            >
              <span className="font-serif text-4xl italic">R</span>
            </RotatingBadge>
          </div>

          {/* Stats */}
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`bento-tile col-span-6 flex min-h-[180px] flex-col justify-between rounded-[28px] p-6 sm:col-span-3 lg:col-span-3 ${
                i === 0 ? 'bg-lime' : 'border border-ink/10 bg-white/50'
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">0{i + 1}</p>
              <div>
                <p className="font-display text-[clamp(40px,5vw,72px)] font-bold leading-none tracking-[-0.05em]">
                  {s.prefix}
                  <span className="stat-value" data-value={s.value}>
                    {s.value}
                  </span>
                  <span className="text-ink/30">{s.suffix}</span>
                </p>
                <p className="mt-2 max-w-[22ch] text-sm text-ink/60">{s.label}</p>
              </div>
            </div>
          ))}

          {/* Stack */}
          <div className="bento-tile col-span-12 flex flex-col justify-between gap-8 overflow-hidden rounded-[28px] bg-ink p-7 text-paper sm:p-8 lg:col-span-7">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Daily stack</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">{STACK.length} tools</p>
            </div>
            <div className="space-y-2">
              {stackRow(STACK.slice(0, 9))}
              {stackRow(STACK.slice(8))}
            </div>
          </div>

          {/* Now */}
          <Link
            href="https://www.nextpilot.chat"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Visit"
            className="bento-tile group col-span-12 flex flex-col justify-between gap-8 rounded-[28px] border border-ink/10 bg-white/50 p-7 transition-colors hover:bg-lime sm:p-8 lg:col-span-5"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-ink" /> Currently building
              </span>
              <ArrowUpRight className="h-5 w-5 text-ink transition-transform duration-500 group-hover:rotate-45" />
            </div>
            <div>
              <p className="font-display text-4xl font-bold tracking-[-0.04em]">NextPilot Chat</p>
              <p className="mt-2 max-w-sm text-ink/60">
                A WhatsApp-first CRM with a shared inbox, broadcasts and AI replies in Bangla and English.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
