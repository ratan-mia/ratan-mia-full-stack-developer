'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/lib/gsap';
import { MANIFESTO, STATS } from '@/app/data/site';

export default function Manifesto() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.manifesto-text', { type: 'words', wordsClass: 'mf-word' });

      // Words light up one by one as the section scrolls through.
      gsap.fromTo(
        split.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: '.manifesto-text', start: 'top 80%', end: 'bottom 45%', scrub: true },
        }
      );

      gsap.from('.about-photo', {
        clipPath: 'inset(0% 0% 100% 0% round 24px)',
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.about-photo', start: 'top 85%' },
      });
      gsap.to('.about-photo img', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: { trigger: '.about-photo', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      // Count-up stats.
      gsap.utils.toArray('.stat-value').forEach((el) => {
        const end = Number(el.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: () => { el.textContent = Math.round(obj.v).toString(); },
        });
      });
      gsap.from('.stat', {
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.stats-grid', start: 'top 85%' },
      });

      return () => split.revert();
    });
  }, { scope: root });

  return (
    <section ref={root} id="intro" className="relative bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="grid grid-cols-12 gap-6">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50 lg:col-span-3">
            (01) — About
          </p>
          <div className="col-span-12 lg:col-span-9">
            <p className="manifesto-text font-display text-[clamp(28px,4.2vw,64px)] font-semibold leading-[1.08] tracking-[-0.035em]">
              {MANIFESTO}
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 lg:mt-28">
          <div className="about-photo relative col-span-12 aspect-[4/5] overflow-hidden rounded-3xl bg-ink/5 sm:col-span-5 lg:col-span-4">
            <Image
              src="/images/about-image.jpg"
              alt="Ratan Mia"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 42vw, 100vw"
              className="scale-110 object-cover"
            />
          </div>

          <div className="col-span-12 flex flex-col justify-between gap-12 sm:col-span-7 lg:col-span-7 lg:col-start-6">
            <div className="max-w-xl space-y-5 text-lg leading-relaxed text-ink/70">
              <p>
                I’m a full-stack and mobile engineer with an IT manager’s habits. For the last decade I’ve shipped
                storefronts, SaaS products and mobile apps for automotive brands, FMCG companies and founders around the
                world — and kept the servers, vendors and budgets behind them in order.
              </p>
              <p>
                Today I build my own products, like <span className="font-serif text-xl italic text-ink">NextPilot Chat</span>{' '}
                and <span className="font-serif text-xl italic text-ink">TurfLet</span>, and consult for the Asian
                Automotive group on its commerce and app platforms.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-base font-semibold text-ink"
              >
                More about me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            </div>

            <dl className="stats-grid grid grid-cols-2 gap-x-4 gap-y-10 border-t border-ink/15 pt-10 sm:gap-x-6">
              {STATS.map((s) => (
                <div key={s.label} className="stat">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-[clamp(40px,11vw,72px)] font-bold leading-none tracking-[-0.05em]">
                    {s.prefix}
                    <span className="stat-value" data-value={s.value}>{s.value}</span>
                    <span className="text-ink/30">{s.suffix}</span>
                  </dd>
                  <p className="mt-2 max-w-[20ch] text-sm text-ink/60">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
