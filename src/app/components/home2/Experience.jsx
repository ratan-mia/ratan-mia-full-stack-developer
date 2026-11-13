'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { Download } from 'lucide-react';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { CERTIFICATIONS, EXPERIENCE, PROFILE } from '@/app/data/site';

export default function Experience() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      // The vertical rail draws itself as you scroll through the list.
      gsap.fromTo(
        '.xp-rail-fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.xp-list', start: 'top 70%', end: 'bottom 70%', scrub: true },
        }
      );

      gsap.utils.toArray('.xp-row').forEach((row) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 82%' } });
        tl.from(row.querySelector('.xp-dot'), { scale: 0, duration: 0.6, ease: 'back.out(3)' })
          .from(row.querySelectorAll('.xp-in'), { y: 30, autoAlpha: 0, stagger: 0.08, duration: 0.9, ease: 'expo.out' }, 0.05)
          .from(row.querySelector('.xp-line'), { scaleX: 0, transformOrigin: 'left', duration: 1.2, ease: 'expo.out' }, 0);
      });

      gsap.from('.cert', {
        y: 30,
        autoAlpha: 0,
        stagger: 0.06,
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.cert-grid', start: 'top 88%' },
      });
    });
  }, { scope: root });

  return (
    <section ref={root} id="experience" className="grain relative bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">(04) — Experience</p>
              <h2 className="mt-4 font-display text-[clamp(40px,5.5vw,88px)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em]">
                A decade of <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-lime">shipping</span>
              </h2>
              <p className="mt-6 max-w-sm text-paper/60">
                From leading a 15-person dev team to running IT for automotive groups — and building my own products on
                the side.
              </p>
              <a
                href={PROFILE.resume}
                download="Ratan_Mia_Resume.pdf"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-lime hover:bg-lime hover:text-ink"
              >
                <Download className="h-4 w-4" /> Download résumé
              </a>
              <Link href="/resume" className="mt-4 block w-fit border-b border-white/30 pb-1 text-sm text-paper/70 transition-colors hover:border-lime hover:text-lime">
                View full résumé page
              </Link>
            </div>
          </div>

          <div className="xp-list relative col-span-12 lg:col-span-8">
            <div className="absolute bottom-2 left-[5px] top-2 w-px bg-white/10" aria-hidden="true">
              <div className="xp-rail-fill h-full w-full origin-top bg-lime" />
            </div>
            <ol className="space-y-2">
              {EXPERIENCE.map((x) => (
                <li key={`${x.company}-${x.period}`} className="xp-row group relative pl-10">
                  <span className="xp-dot absolute left-0 top-9 h-[11px] w-[11px] rounded-full border-2 border-lime bg-ink transition-colors group-hover:bg-lime" />
                  <div className="py-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <p className="xp-in font-mono text-[11px] uppercase tracking-[0.18em] text-mute">{x.period}</p>
                      <p className="xp-in font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">{x.type}</p>
                    </div>
                    <h3 className="xp-in mt-3 font-display text-2xl font-bold tracking-[-0.03em] transition-colors group-hover:text-lime sm:text-4xl">
                      {x.role}
                    </h3>
                    <p className="xp-in mt-1 font-serif text-xl italic text-paper/80 sm:text-2xl">{x.company}</p>
                    <p className="xp-in mt-3 max-w-2xl text-[15px] leading-relaxed text-paper/55">{x.detail}</p>
                  </div>
                  <div className="xp-line h-px w-full bg-white/10" />
                </li>
              ))}
            </ol>

            <div className="mt-20">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Certifications</p>
              <ul className="cert-grid mt-6 grid gap-3 sm:grid-cols-2">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.title} className="cert flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-5 py-4">
                    <span className="text-sm text-paper/80">{c.title}</span>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                      {c.issuer} · {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
