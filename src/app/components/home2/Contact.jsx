'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ContactRings from '@/components/graphics/ContactRings';
import ContactForm from '@/components/site/ContactForm';
import Magnetic from '@/components/motion/Magnetic';
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/lib/gsap';
import { PROFILE } from '@/app/data/site';


export default function Contact() {
  const root = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.cta-big', { type: 'words,chars', mask: 'chars' });
      gsap.from(split.chars, {
        yPercent: 110,
        stagger: 0.025,
        duration: 1.3,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.cta-big', start: 'top 85%' },
      });
      gsap.from('.cr-ring', {
        drawSVG: '0%',
        duration: 2,
        stagger: 0.12,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: root.current, start: 'top 70%' },
      });
      gsap.to('.cr-sweep', { rotation: 360, svgOrigin: '300 300', duration: 9, repeat: -1, ease: 'none' });
      gsap.utils.toArray('.cr-pulse').forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 1, autoAlpha: 0.8, transformOrigin: '50% 50%' },
          { scale: 4, autoAlpha: 0, duration: 2.4, repeat: -1, ease: 'power2.out', delay: i * 0.5 }
        );
      });
      gsap.to('.contact-rings', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      return () => split.revert();
    });
  }, { scope: root });

  return (
    <section ref={root} id="get-in-touch" className="relative overflow-hidden bg-lime text-ink">
      <ContactRings className="contact-rings absolute -right-[30%] top-0 w-[140vw] max-w-none opacity-70 sm:-right-[12%] sm:w-[80vw] lg:-right-[18%] lg:top-[-4%] lg:w-[min(60vw,860px)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">(05) — Contact</p>
        <h2 className="cta-big mt-6 font-display text-[clamp(44px,12.5vw,220px)] font-extrabold uppercase leading-[0.82] tracking-[-0.06em]">
          Let’s build
          <br />
          <span className="font-serif font-normal normal-case italic tracking-[-0.03em]">something</span> good
        </h2>

        <div className="contact-grid mt-16 grid grid-cols-12 gap-x-4 gap-y-14 lg:mt-24 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <p data-reveal className="max-w-md text-lg leading-relaxed text-ink/75">
              Tell me what you’re building. I reply within a day — usually with a few questions and a rough plan.
            </p>
            <Magnetic className="mt-8" strength={0.2}>
              <a
                href={`mailto:${PROFILE.email}`}
                data-cursor="Write"
                className="group inline-flex items-center gap-3 border-b-2 border-ink pb-1 font-display text-[clamp(20px,5.5vw,36px)] font-bold tracking-[-0.02em]"
              >
                {PROFILE.email}
                <ArrowUpRight className="h-7 w-7 transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </Magnetic>
            <p data-reveal className="mt-8 text-sm text-ink/70">
              Prefer more detail? Use the{' '}
              <Link href="/contact" className="font-semibold underline underline-offset-4">contact page</Link> or{' '}
              <Link href="/quote" className="font-semibold underline underline-offset-4">request a quote</Link>.
            </p>
            <ul data-reveal className="mt-6 flex flex-wrap gap-2">
              {PROFILE.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-ink/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-lime"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm className="col-span-12 lg:col-span-6 lg:col-start-7" />
        </div>
      </div>
    </section>
  );
}
