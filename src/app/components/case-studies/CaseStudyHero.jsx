'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowLeft, ArrowUpRight, Monitor, TrendingUp, Zap } from 'lucide-react';
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/lib/gsap';

/**
 * Case study hero. Same props as before (category, title, subtitle,
 * description, techStack, liveUrl, heroImage, badges) with the new look.
 */
export default function CaseStudyHero({
  category = 'Project',
  categoryIcon: CategoryIcon = Monitor,
  title,
  subtitle,
  description,
  techStack = [],
  liveUrl,
  heroImage,
  imageAlt = 'Project preview',
  badge1Text = 'Live platform',
  badge1Icon: Badge1Icon = TrendingUp,
  badge2Text = 'Production ready',
  badge2Icon: Badge2Icon = Zap,
}) {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.csh-title', { type: 'words,chars', mask: 'chars' });
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.1 });
      tl.from(split.chars, { yPercent: 110, duration: 1.3, stagger: 0.03 })
        .from('.csh-fade', { y: 24, autoAlpha: 0, duration: 1, stagger: 0.07 }, 0.3)
        .from('.csh-frame', { clipPath: 'inset(100% 0% 0% 0% round 28px)', duration: 1.5 }, 0.2)
        .from('.csh-frame img', { scale: 1.25, duration: 1.8 }, 0.2)
        .from('.csh-badge', { scale: 0, autoAlpha: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(2)' }, 1);
      gsap.to('.csh-frame', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      return () => split.revert();
    });
  }, { scope: root });

  return (
    <section ref={root} className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-24">
        <div className="csh-fade flex flex-wrap items-center justify-between gap-4">
          <Link href="/case-studies" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mute transition-colors hover:text-lime">
            <ArrowLeft className="h-3.5 w-3.5" /> All case studies
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80">
            <CategoryIcon className="h-3.5 w-3.5 text-lime" /> {category}
          </span>
        </div>

        <div className="mt-12 grid grid-cols-12 items-end gap-x-4 gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="csh-title font-display text-[clamp(40px,5.6vw,96px)] font-extrabold uppercase leading-[0.88] [overflow-wrap:normal] [word-break:keep-all] tracking-[-0.055em]">
              {title}
            </h1>
            {subtitle && <p className="csh-fade mt-5 font-serif text-[clamp(24px,2.6vw,36px)] italic leading-tight text-lime">{subtitle}</p>}
            {description && <p className="csh-fade mt-6 max-w-xl text-lg leading-relaxed text-paper/65">{description}</p>}

            {techStack.length > 0 && (
              <ul className="csh-fade mt-8 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-paper/80">
                    {t}
                  </li>
                ))}
              </ul>
            )}

            <div className="csh-fade mt-10 flex flex-wrap gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-paper"
                >
                  Visit live site
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </a>
              )}
              <a href="#overview" className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition-colors hover:border-paper">
                Read the story
              </a>
            </div>
          </div>

          <div className="relative col-span-12 lg:col-span-6">
            {heroImage && (
              <div className="csh-frame relative aspect-[4/3] overflow-hidden rounded-[28px] bg-white/5">
                <Image src={heroImage} alt={imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            )}
            {badge1Text && (
              <span className="csh-badge absolute -left-3 top-6 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2.5 text-sm font-semibold text-ink shadow-xl sm:-left-6">
                <Badge1Icon className="h-4 w-4" /> {badge1Text}
              </span>
            )}
            {badge2Text && (
              <span className="csh-badge absolute -bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-ink shadow-xl">
                <Badge2Icon className="h-4 w-4" /> {badge2Text}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
