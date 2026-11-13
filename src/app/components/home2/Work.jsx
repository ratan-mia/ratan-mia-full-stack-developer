'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap, MOTION_OK, ScrollTrigger, SplitText, useGSAP } from '@/lib/gsap';
import { PROJECTS } from '@/app/data/site';
import { ARCHIVE } from '@/app/data/pages';

const FEATURED = PROJECTS.slice(0, 7);

// Sticky index + scrolling showcase. On large screens the project list stays
// pinned on the left and highlights whichever project is in view on the
// right; clicking a title scrolls to it. Small screens get the cards only.
export default function Work() {
  const root = useRef(null);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.work-card');
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 55%',
        end: 'bottom 55%',
        onToggle: (self) => self.isActive && setActive(i),
      });
    });

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.work-title', { type: 'words,chars', mask: 'chars' });
      gsap.from(split.chars, {
        yPercent: 110,
        stagger: 0.03,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.work-title', start: 'top 85%' },
      });

      cards.forEach((card) => {
        gsap.from(card.querySelector('.work-media'), {
          clipPath: 'inset(12% 8% 12% 8% round 28px)',
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        });
        gsap.fromTo(
          card.querySelector('.work-img'),
          { yPercent: -6, scale: 1.12 },
          {
            yPercent: 6,
            scale: 1.02,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
        gsap.from(card.querySelectorAll('.work-in'), {
          y: 30,
          autoAlpha: 0,
          stagger: 0.08,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: card, start: 'top 75%' },
        });
      });

      gsap.fromTo(
        '.work-progress',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.work-cards', start: 'top 55%', end: 'bottom 55%', scrub: true },
        }
      );

      return () => split.revert();
    });
  }, { scope: root });

  const goTo = (i) => {
    const el = root.current?.querySelectorAll('.work-card')[i];
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.2;
    if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.4 });
    else window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const current = FEATURED[active];

  return (
    <section ref={root} id="work" className="grain relative bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">(02) — Selected work</p>
            <h2 className="work-title mt-4 font-display text-[clamp(48px,8vw,128px)] font-extrabold uppercase leading-[0.85] tracking-[-0.05em]">
              Things I’ve <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-lime">shipped</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-lime hover:bg-lime hover:text-ink"
          >
            All {PROJECTS.length + ARCHIVE.length} projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 lg:mt-24">
          {/* Sticky index */}
          <aside className="col-span-4 hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-baseline gap-3 font-display">
                <span className="text-[96px] font-extrabold leading-none tracking-[-0.06em] text-lime tabular-nums">
                  {String(active + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl font-bold text-paper/30">/ {String(FEATURED.length).padStart(2, '0')}</span>
              </div>
              <p className="mt-3 min-h-[3em] font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                {current.category} · {current.year}
              </p>

              <div className="relative mt-8 pl-6">
                <span className="absolute left-0 top-0 h-full w-px bg-white/10" />
                <span className="work-progress absolute left-0 top-0 h-full w-px origin-top bg-lime" />
                <ol className="space-y-1">
                  {FEATURED.map((p, i) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        className={`group flex w-full items-center justify-between py-2 text-left font-display text-2xl font-bold tracking-[-0.03em] transition-all duration-500 ${
                          i === active ? 'translate-x-2 text-paper' : 'text-paper/25 hover:text-paper/60'
                        }`}
                      >
                        {p.title}
                        <ArrowUpRight
                          className={`h-5 w-5 transition-all duration-500 ${i === active ? 'text-lime opacity-100' : 'opacity-0'}`}
                        />
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>

          {/* Showcase */}
          <div className="work-cards col-span-12 space-y-20 lg:col-span-8 lg:space-y-32">
            {FEATURED.map((p, i) => (
              <article key={p.id} className="work-card group">
                <a
                  href={p.caseStudy || p.live || '#'}
                  target={p.caseStudy ? undefined : '_blank'}
                  rel={p.caseStudy ? undefined : 'noopener noreferrer'}
                  data-cursor={p.caseStudy ? 'Case study' : 'Visit'}
                  className="work-media relative block aspect-[16/10] overflow-hidden rounded-[28px]"
                  style={{ backgroundColor: p.accent }}
                >
                  <div className="work-img absolute inset-0">
                    <Image
                      src={p.image}
                      alt={`${p.title} — ${p.category}`}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper backdrop-blur">
                    {String(i + 1).padStart(2, '0')} / {p.year}
                  </span>
                  <span className="absolute bottom-5 right-5 grid h-14 w-14 translate-y-4 place-items-center rounded-full bg-lime text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-6 w-6" />
                  </span>
                </a>

                <div className="mt-6 grid grid-cols-12 gap-4">
                  <div className="work-in col-span-12 sm:col-span-5">
                    <h3 className="font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">{p.title}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">{p.category}</p>
                  </div>
                  <div className="work-in col-span-12 sm:col-span-7">
                    <p className="text-[15px] leading-relaxed text-paper/60">{p.summary}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-paper/70">
                          {t}
                        </span>
                      ))}
                      {p.caseStudy && (
                        <Link href={p.caseStudy} className="ml-auto text-sm font-semibold text-lime underline-offset-4 hover:underline">
                          Case study →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
