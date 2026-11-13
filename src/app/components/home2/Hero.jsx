'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Magnetic from '@/components/motion/Magnetic';
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/lib/gsap';
import { PROFILE } from '@/app/data/site';

const ROLES = ['Full-stack products', 'Mobile apps', 'Headless commerce', 'WhatsApp & AI automation'];

export default function Hero() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.hero-name', { type: 'chars', charsClass: 'hero-char', mask: 'chars' });

      const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 });
      intro
        .from(split.chars, { yPercent: 110, duration: 1.4, stagger: 0.045 })
        .from('.hero-portrait', { clipPath: 'inset(100% 0% 0% 0% round 24px)', duration: 1.4 }, 0.35)
        .from('.hero-portrait img', { scale: 1.35, duration: 1.8 }, 0.35)
        .from('.hero-fade', { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.7)
        .from('.hero-line', { scaleX: 0, transformOrigin: 'left center', duration: 1.4 }, 0.5);

      // Rotating role ticker.
      const items = gsap.utils.toArray('.hero-role');
      const roleTl = gsap.timeline({ repeat: -1, delay: 1.6 });
      items.forEach((item) => {
        roleTl
          .fromTo(item, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'expo.out' })
          .to(item, { yPercent: -100, autoAlpha: 0, duration: 0.6, ease: 'expo.in' }, '+=1.6');
      });

      // Scroll-out: name drifts up and fades, portrait parallaxes.
      const out = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      out
        .to('.hero-name-wrap', { yPercent: -35, autoAlpha: 0.15, ease: 'none' }, 0)
        .to('.hero-portrait', { yPercent: 18, scale: 0.92, ease: 'none' }, 0)
        .to('.hero-meta', { yPercent: -60, autoAlpha: 0, ease: 'none' }, 0);

      return () => split.revert();
    });

    // Reduced motion: show the first role only.
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.hero-role', { autoAlpha: 0 });
      gsap.set('.hero-role:first-child', { autoAlpha: 1 });
    });
  }, { scope: root });

  return (
    <section ref={root} id="home" className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.35]" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col px-5 pb-10 pt-28 sm:px-8 lg:px-12">
        {/* Top meta row */}
        <div className="hero-meta grid grid-cols-2 gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-mute sm:grid-cols-4">
          <p className="hero-fade">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-lime align-middle animate-pulse" />
            Available for select projects
          </p>
          <p className="hero-fade">{PROFILE.location}</p>
          <p className="hero-fade hidden sm:block">IBM certified · 10+ yrs</p>
          <p className="hero-fade hidden text-right sm:block">Portfolio ’26</p>
        </div>

        <div className="hero-line mt-5 h-px w-full bg-white/15" />

        {/* Main composition */}
        <div className="relative grid flex-1 grid-cols-12 items-end gap-6 pt-10 lg:pt-6">
          <div className="hero-name-wrap col-span-12 lg:col-span-8">
            <p className="hero-fade mb-4 font-serif text-2xl italic text-paper/70 sm:text-3xl">
              Hello, I’m
            </p>
            <h1 className="hero-name font-display text-[22vw] font-extrabold uppercase leading-[0.82] tracking-[-0.06em] lg:text-[13.5vw] xl:text-[200px]">
              <span className="block">Ratan</span>
              <span className="block">
                Mia<span className="text-lime">.</span>
              </span>
            </h1>
          </div>

          <div className="col-span-12 flex flex-col gap-6 sm:flex-row sm:items-end lg:col-span-4 lg:flex-col lg:items-stretch">
            <div className="hero-portrait relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-3xl bg-white/5 sm:w-48 lg:w-full lg:max-w-[340px] lg:self-end">
              <Image
                src="/images/hero-image.png"
                alt="Ratan Mia at his desk"
                fill
                priority
                sizes="(min-width: 1024px) 340px, 192px"
                className="object-cover object-[50%_25%] grayscale-[35%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80">
                Full-Stack · Mobile · IT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-6">
            <div className="hero-fade flex items-center gap-3 text-lg leading-none text-paper/60 sm:text-xl">
              <span>I build</span>
              <span className="relative inline-block h-[1.2em] min-w-[16ch] overflow-hidden text-paper">
                {ROLES.map((r) => (
                  <span key={r} className="hero-role absolute left-0 top-0 whitespace-nowrap font-medium leading-[1.2em]">
                    {r}
                  </span>
                ))}
              </span>
            </div>
            <p className="hero-fade mt-4 max-w-xl text-base leading-relaxed text-paper/60 sm:text-lg">
              {PROFILE.intro}
            </p>
          </div>

          <div className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end">
            <Magnetic className="hero-fade">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-paper"
              >
                See selected work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-45deg]" />
              </a>
            </Magnetic>
            <Magnetic className="hero-fade">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-paper transition-colors hover:border-paper"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
