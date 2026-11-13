'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/lib/gsap';
import { PROJECTS } from '@/app/data/site';

// Selected work. On large screens the cards ride a pinned, scroll-scrubbed
// horizontal track; on smaller screens they stack and reveal one by one.
export default function Work() {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({ big: '(min-width: 1024px)', motion: MOTION_OK }, (ctx) => {
      const { big, motion } = ctx.conditions;
      if (!motion) return;

      const split = SplitText.create('.work-title', { type: 'words,chars', mask: 'chars' });
      gsap.from(split.chars, {
        yPercent: 110,
        stagger: 0.03,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.work-title', start: 'top 85%' },
      });

      if (big) {
        const distance = () => track.current.scrollWidth - window.innerWidth;
        const scroll = gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: '.work-pin',
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set('.work-progress', { scaleX: self.progress }),
          },
        });

        // Inside the horizontal track, each image counter-pans for depth.
        gsap.utils.toArray('.work-card').forEach((card) => {
          gsap.fromTo(
            card.querySelector('.work-img'),
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: scroll,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          );
        });
      } else {
        gsap.utils.toArray('.work-card').forEach((card) => {
          gsap.from(card, {
            y: 80,
            autoAlpha: 0,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          });
        });
      }

      return () => split.revert();
    });
  }, { scope: root });

  return (
    <section ref={root} id="work" className="relative bg-ink text-paper">
      <div className="work-pin relative lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-5 pt-24 sm:px-8 lg:px-12 lg:pt-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">(02) — Selected work</p>
              <h2 className="work-title mt-4 font-display text-[clamp(48px,8vw,128px)] font-extrabold uppercase leading-[0.85] tracking-[-0.05em]">
                Things I’ve <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-lime">shipped</span>
              </h2>
            </div>
            <div className="hidden w-64 lg:block">
              <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                <span>Scroll</span>
                <span>{String(PROJECTS.length).padStart(2, '0')} projects</span>
              </div>
              <div className="mt-3 h-px w-full bg-white/15">
                <div className="work-progress h-px origin-left scale-x-0 bg-lime" />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={track}
          className="mt-12 flex flex-col gap-16 px-5 pb-24 sm:px-8 lg:mt-14 lg:w-max lg:flex-row lg:gap-8 lg:pb-0 lg:pl-12 lg:pr-[12vw]"
        >
          {PROJECTS.map((p, i) => (
            <article key={p.id} className="work-card group w-full lg:w-[min(46vw,640px)]">
              <a
                href={p.caseStudy || p.live || '#'}
                target={p.caseStudy ? undefined : '_blank'}
                rel={p.caseStudy ? undefined : 'noopener noreferrer'}
                data-cursor={p.caseStudy ? 'Case study' : 'Visit'}
                className="relative block aspect-[16/10] overflow-hidden rounded-2xl"
                style={{ backgroundColor: p.accent }}
              >
                <div className="work-img absolute inset-[-8%]">
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.category}`}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper backdrop-blur">
                  {String(i + 1).padStart(2, '0')} / {p.year}
                </span>
              </a>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">{p.title}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">{p.category}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  {p.caseStudy && (
                    <Link
                      href={p.caseStudy}
                      aria-label={`${p.title} case study`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center rounded-full border border-white/20 px-4 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors hover:border-paper"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-paper/60">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-paper/70">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="flex w-full items-center lg:w-[28vw]">
            <Link
              href="/portfolio"
              data-cursor="Open"
              className="group flex aspect-square w-full flex-col justify-between rounded-2xl border border-white/15 p-8 transition-colors hover:border-lime lg:w-auto lg:min-w-[320px]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Archive</span>
              <span className="font-display text-4xl font-bold leading-none tracking-[-0.04em] sm:text-5xl">
                All projects
                <ArrowUpRight className="ml-2 inline h-10 w-10 transition-transform duration-500 group-hover:rotate-45 group-hover:text-lime" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
