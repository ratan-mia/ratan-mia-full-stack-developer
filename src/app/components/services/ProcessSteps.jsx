'use client';

import { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import SectionHead from '@/components/site/SectionHead';
import { PROCESS } from '@/app/data/pages';

// Five steps on a rail that fills as you scroll; each step lights up in turn.
export default function ProcessSteps() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.proc-list', start: 'top 75%', end: 'bottom 55%', scrub: true },
      });
      tl.fromTo('.proc-fill', { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0);
      tl.fromTo('.proc-fill-v', { scaleY: 0 }, { scaleY: 1, ease: 'none' }, 0);
      gsap.utils.toArray('.proc-step').forEach((el, i, all) => {
        tl.fromTo(el, { opacity: 0.25 }, { opacity: 1, ease: 'none', duration: 0.2 }, i / all.length);
      });
    });
  }, { scope: root });

  return (
    <section ref={root} className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHead tone="dark" label="(02) — Process" title="How a project" accent="runs" />
        <div className="proc-list relative mt-20">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/10 lg:block">
            <div className="proc-fill h-full origin-left bg-lime" />
          </div>
          <div className="absolute bottom-0 left-[6px] top-0 w-px bg-white/10 lg:hidden">
            <div className="proc-fill-v h-full w-full origin-top bg-lime" />
          </div>
          <ol className="grid gap-12 lg:grid-cols-5 lg:gap-6">
            {PROCESS.map((p) => (
              <li key={p.step} className="proc-step relative pl-10 lg:pl-0 lg:pt-12">
                <span className="absolute left-0 top-1 h-[13px] w-[13px] rounded-full border-2 border-lime bg-ink lg:top-0" />
                <p className="font-mono text-sm text-lime">{p.step}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/60">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
