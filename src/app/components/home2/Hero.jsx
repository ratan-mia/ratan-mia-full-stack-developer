'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Magnetic from '@/components/motion/Magnetic';
import HeroOrbit from '@/components/graphics/HeroOrbit';
import RotatingBadge from '@/components/graphics/RotatingBadge';
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
        .from('.hero-portrait', { clipPath: 'inset(100% 0% 0% 0% round 28px)', duration: 1.4 }, 0.35)
        .from('.hero-portrait img', { scale: 1.35, duration: 1.8 }, 0.35)
        .from('.hero-orbit', { scale: 0.55, rotation: -40, autoAlpha: 0, duration: 2.4 }, 0.2)
        .from('.hero-glow', { autoAlpha: 0, duration: 2 }, 0.3)
        .from('.hero-badge', { scale: 0, rotation: -120, duration: 1.4, ease: 'back.out(1.6)' }, 1)
        .from('.hero-fade', { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.7)
        .from('.hero-line', { scaleX: 0, transformOrigin: 'left center', duration: 1.4 }, 0.5);

      // Orbit system: rings counter-rotate, labels stay upright.
      const spin = (sel, deg, duration) => gsap.to(sel, { rotation: deg, duration, repeat: -1, ease: 'none' });
      spin('.orbit-ring-a', 360, 70);
      spin('.orbit-ring-a .orbit-label', -360, 70);
      spin('.orbit-ring-b', -360, 110);
      spin('.orbit-ring-b .orbit-label', 360, 110);
      spin('.orbit-ticks', 360, 160);
      gsap.to('.orbit-arc', { rotation: 360, svgOrigin: '100 100', duration: 12, repeat: -1, ease: 'none' });

      // Scroll cue.
      gsap.fromTo('.hero-scroll-fill', { scaleY: 0, transformOrigin: 'top' }, { scaleY: 1, duration: 1.4, repeat: -1, ease: 'power2.inOut', yoyo: true });

      // Rotating role ticker.
      const items = gsap.utils.toArray('.hero-role');
      const roleTl = gsap.timeline({ repeat: -1, delay: 1.6 });
      items.forEach((item) => {
        roleTl
          .fromTo(item, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'expo.out' })
          .to(item, { yPercent: -100, autoAlpha: 0, duration: 0.6, ease: 'expo.in' }, '+=1.6');
      });

      // Pointer: soft lime light follows the cursor, orbit drifts in parallax.
      const section = root.current;
      const glowX = gsap.quickTo('.hero-glow', 'x', { duration: 1.6, ease: 'power3' });
      const glowY = gsap.quickTo('.hero-glow', 'y', { duration: 1.6, ease: 'power3' });
      const orbX = gsap.quickTo('.hero-orbit-drift', 'x', { duration: 1.4, ease: 'power3' });
      const orbY = gsap.quickTo('.hero-orbit-drift', 'y', { duration: 1.4, ease: 'power3' });
      gsap.set('.hero-glow', { x: window.innerWidth * 0.62, y: window.innerHeight * 0.45 });
      const onMove = (e) => {
        const r = section.getBoundingClientRect();
        glowX(e.clientX - r.left);
        glowY(e.clientY - r.top);
        orbX((e.clientX / window.innerWidth - 0.5) * -36);
        orbY((e.clientY / window.innerHeight - 0.5) * -36);
      };
      section.addEventListener('pointermove', onMove);

      // Scroll-out: name drifts up and fades, portrait and orbit parallax.
      const out = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
      });
      out
        .to('.hero-name-wrap', { yPercent: -35, autoAlpha: 0.15, ease: 'none' }, 0)
        .to('.hero-portrait-wrap', { yPercent: 18, scale: 0.92, ease: 'none' }, 0)
        .to('.hero-orbit-scroll', { rotation: 50, scale: 1.25, autoAlpha: 0.2, ease: 'none' }, 0)
        .to('.hero-meta', { yPercent: -60, autoAlpha: 0, ease: 'none' }, 0);

      return () => {
        split.revert();
        section.removeEventListener('pointermove', onMove);
      };
    });

    // Reduced motion: show the first role only.
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.hero-role', { autoAlpha: 0 });
      gsap.set('.hero-role:first-child', { autoAlpha: 1 });
    });
  }, { scope: root });

  return (
    <section ref={root} id="top" className="grain relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper">
      {/* Atmosphere */}
      <div
        className="hero-glow pointer-events-none absolute left-0 top-0 -z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.09)_0%,rgba(204,255,0,0.025)_40%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      {/* Scroll cue */}
      <div className="hero-fade absolute bottom-12 left-5 hidden flex-col items-center gap-4 xl:flex" aria-hidden="true">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-16 w-px bg-white/15">
          <span className="hero-scroll-fill absolute inset-0 bg-lime" />
        </span>
      </div>

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

        <div className="hero-line mt-5 h-px w-full bg-white/10" />

        {/* Main composition */}
        <div className="relative grid flex-1 grid-cols-12 items-end gap-6 pt-10 lg:pt-6">
          <div className="hero-name-wrap relative z-10 col-span-12 lg:col-span-8">
            <p className="hero-fade mb-4 flex items-center gap-4 font-serif text-2xl italic text-paper/70 sm:text-3xl">
              <span className="h-px w-10 bg-lime not-italic" aria-hidden="true" />
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
            <div className="hero-portrait-wrap relative isolate w-40 shrink-0 sm:w-48 lg:w-full lg:max-w-[340px] lg:self-end">
              <div className="hero-orbit-scroll absolute inset-0">
                <div className="hero-orbit-drift absolute inset-0 scale-[0.55] opacity-60 sm:scale-75 lg:scale-100 lg:opacity-100">
                  <HeroOrbit size={760} />
                </div>
              </div>

              <div className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white/5">
                <Image
                  src="/images/hero-image.png"
                  alt="Ratan Mia at his desk"
                  fill
                  priority
                  sizes="(min-width: 1024px) 340px, 192px"
                  className="object-cover object-[50%_25%] grayscale-[35%]"
                />
                              </div>

              <RotatingBadge
                href="#get-in-touch"
                label="Start a project"
                text="Open for work · Let’s talk · 2026 · "
                size={112}
                className="hero-badge absolute -bottom-10 -left-12 z-20 hidden lg:grid"
              >
                <ArrowUpRight className="h-7 w-7" />
              </RotatingBadge>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="relative z-10 mt-10 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-6">
            <div className="hero-fade flex items-center gap-3 text-lg leading-none text-paper/60 sm:text-xl">
              <span>I build</span>
              <span className="relative inline-block h-[1.4em] min-w-[24ch] overflow-hidden text-paper">
                {ROLES.map((r) => (
                  <span key={r} className="hero-role absolute left-0 top-0 whitespace-nowrap font-serif text-[1.15em] italic leading-[1.2em] text-lime">
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
                href="#get-in-touch"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-paper backdrop-blur transition-colors hover:border-paper"
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
