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

// Split hero: a full-height photo panel on the left with the orbit system
// straddling its edge, and the type-led introduction on the right.
export default function Hero() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.hero-name', { type: 'chars', mask: 'chars' });

      const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.1 });
      intro
        .from('.hero-panel', { clipPath: 'inset(0% 0% 100% 0% round 32px)', duration: 1.6 }, 0)
        .from('.hero-panel img', { scale: 1.3, duration: 2.2 }, 0)
        .from(split.chars, { yPercent: 110, duration: 1.4, stagger: 0.05 }, 0.3)
        .from('.hero-orbit', { scale: 0.5, rotation: -50, autoAlpha: 0, duration: 2.4 }, 0.3)
        .from('.hero-chip', { y: 30, autoAlpha: 0, stagger: 0.1, duration: 1 }, 0.9)
        .from('.hero-badge', { scale: 0, rotation: -120, duration: 1.4, ease: 'back.out(1.6)' }, 1)
        .from('.hero-fade', { y: 24, autoAlpha: 0, duration: 1, stagger: 0.07 }, 0.6)
        .from('.hero-rule', { scaleX: 0, transformOrigin: 'left center', duration: 1.4 }, 0.5);

      // Orbit: rings counter-rotate, labels stay upright.
      const spin = (sel, deg, duration) => gsap.to(sel, { rotation: deg, duration, repeat: -1, ease: 'none' });
      spin('.orbit-ring-a', 360, 70);
      spin('.orbit-ring-a .orbit-label', -360, 70);
      spin('.orbit-ring-b', -360, 110);
      spin('.orbit-ring-b .orbit-label', 360, 110);
      spin('.orbit-ticks', 360, 160);
      gsap.to('.orbit-arc', { rotation: 360, svgOrigin: '100 100', duration: 12, repeat: -1, ease: 'none' });
      gsap.to('.orbit-arc-2', { rotation: -360, svgOrigin: '100 100', duration: 8, repeat: -1, ease: 'none' });

      // Role ticker.
      const roleTl = gsap.timeline({ repeat: -1, delay: 1.6 });
      gsap.utils.toArray('.hero-role').forEach((item) => {
        roleTl
          .fromTo(item, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'expo.out' })
          .to(item, { yPercent: -100, autoAlpha: 0, duration: 0.6, ease: 'expo.in' }, '+=1.6');
      });

      // Pointer: glow follows, orbit and photo drift in parallax.
      const section = root.current;
      const glowX = gsap.quickTo('.hero-glow', 'x', { duration: 1.6, ease: 'power3' });
      const glowY = gsap.quickTo('.hero-glow', 'y', { duration: 1.6, ease: 'power3' });
      const orbX = gsap.quickTo('.hero-orbit-drift', 'x', { duration: 1.4, ease: 'power3' });
      const orbY = gsap.quickTo('.hero-orbit-drift', 'y', { duration: 1.4, ease: 'power3' });
      const imgX = gsap.quickTo('.hero-panel-img', 'x', { duration: 1.8, ease: 'power3' });
      gsap.set('.hero-glow', { x: window.innerWidth * 0.45, y: window.innerHeight * 0.5 });
      const onMove = (e) => {
        const r = section.getBoundingClientRect();
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        glowX(e.clientX - r.left);
        glowY(e.clientY - r.top);
        orbX(nx * -40);
        orbY(ny * -40);
        imgX(nx * 14);
      };
      section.addEventListener('pointermove', onMove);

      // Scroll-out.
      gsap
        .timeline({ scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true } })
        .to('.hero-panel-img', { yPercent: 12, ease: 'none' }, 0)
        .to('.hero-orbit-scroll', { rotation: 60, scale: 1.2, autoAlpha: 0.15, ease: 'none' }, 0)
        .to('.hero-copy', { yPercent: -18, autoAlpha: 0.2, ease: 'none' }, 0);

      return () => {
        split.revert();
        section.removeEventListener('pointermove', onMove);
      };
    });

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.hero-role', { autoAlpha: 0 });
      gsap.set('.hero-role:first-child', { autoAlpha: 1 });
    });
  }, { scope: root });

  return (
    <section ref={root} id="top" className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.3]" aria-hidden="true" />
      <div
        className="hero-glow pointer-events-none absolute left-0 top-0 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.15)_0%,rgba(204,255,0,0.04)_40%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-12 gap-x-6 px-3 pb-3 pt-24 sm:px-4">
        {/* Photo panel */}
        <div className="relative col-span-12 h-[44svh] min-h-[320px] lg:col-span-5 lg:h-auto">
          {/* Orbit straddles the panel edge */}
          <div className="hero-orbit-scroll pointer-events-none absolute right-0 top-1/2 hidden h-0 w-0 lg:block">
            <div className="hero-orbit-drift absolute left-0 top-0">
              <HeroOrbit size={720} />
            </div>
          </div>
          <div className="hero-panel relative h-full overflow-hidden rounded-[32px] bg-white/5">
            <div className="hero-panel-img absolute inset-[-4%]">
              <Image
                src="/images/hero-image.png"
                alt="Ratan Mia at his desk"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[50%_22%] grayscale-[40%] contrast-[1.05]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-tr from-lime/15 via-transparent to-transparent mix-blend-overlay" />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-ink/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80 backdrop-blur sm:left-6 sm:top-6">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
              Available · {PROFILE.location}
            </div>

            <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2 sm:inset-x-6 sm:bottom-6">
              {[
                ['10+', 'years shipping'],
                ['150+', 'projects'],
                ['$30M+', 'client sales'],
              ].map(([v, l]) => (
                <div key={l} className="hero-chip rounded-2xl border border-white/10 bg-ink/55 px-4 py-3 backdrop-blur-md">
                  <p className="font-display text-2xl font-bold leading-none tracking-[-0.04em] sm:text-3xl">{v}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <RotatingBadge
            href="#get-in-touch"
            label="Start a project"
            text="Open for work · Let’s talk · 2026 · "
            size={124}
            className="hero-badge absolute -right-10 top-1/2 z-20 hidden -translate-y-1/2 lg:grid"
          >
            <ArrowUpRight className="h-7 w-7" />
          </RotatingBadge>

        </div>

        {/* Copy */}
        <div className="hero-copy relative z-10 col-span-12 flex flex-col px-2 pb-8 pt-6 sm:px-4 lg:col-span-7 lg:pb-10 lg:pl-20 lg:pr-8 lg:pt-4">
          <div className="hero-fade flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
            <span>Portfolio ’26</span>
            <span className="hidden sm:inline">Full-stack · Mobile · IT</span>
          </div>
          <div className="hero-rule mt-4 h-px w-full bg-gradient-to-r from-white/25 via-white/10 to-transparent" />

          <div className="mt-auto pt-10">
            <p className="hero-fade flex items-center gap-4 font-serif text-2xl italic text-paper/70 sm:text-3xl">
              <span className="h-px w-10 bg-lime" aria-hidden="true" />
              Hello, I’m
            </p>
            <h1 className="hero-name mt-3 font-display text-[23vw] font-extrabold uppercase leading-[0.8] tracking-[-0.065em] lg:text-[11.5vw] 2xl:text-[184px]">
              <span className="block">Ratan</span>
              <span className="block lg:pl-[0.9em]">
                Mia<span className="text-lime">.</span>
              </span>
            </h1>

            <div className="hero-fade mt-10 flex items-center gap-3 text-lg leading-none text-paper/60 sm:text-xl">
              <span>I build</span>
              <span className="relative inline-block h-[1.4em] min-w-[24ch] overflow-hidden">
                {ROLES.map((r) => (
                  <span key={r} className="hero-role absolute left-0 top-0 whitespace-nowrap font-serif text-[1.15em] italic leading-[1.2em] text-lime">
                    {r}
                  </span>
                ))}
              </span>
            </div>
            <p className="hero-fade mt-4 max-w-xl text-base leading-relaxed text-paper/60 sm:text-lg">{PROFILE.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
      </div>
    </section>
  );
}
