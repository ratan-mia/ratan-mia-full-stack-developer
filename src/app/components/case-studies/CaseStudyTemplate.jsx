'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, Link2, Linkedin, Share2 } from 'lucide-react';
import { useState } from 'react';
import ProjectInquirySection from '../ProjectInquirySection';

/**
 * Case study layout: hero, then a sticky project-details sidebar beside the
 * content on large screens. All exported building blocks keep their original
 * props so existing case study pages work unchanged.
 */
export default function CaseStudyTemplate({ project, heroSection, children }) {
  const [copied, setCopied] = useState(false);
  const share = (url) => window.open(url, '_blank', 'noopener,noreferrer');
  const here = () => encodeURIComponent(window.location.href);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const rows = [
    ['Client', project.company],
    ['Category', project.category],
    ['Timeline', project.timeline],
  ].filter(([, v]) => v);

  return (
    <div className="bg-paper text-ink">
      {heroSection}

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-6 lg:px-12">
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6 py-24">
            <dl className="space-y-5 border-t border-ink/15 pt-6">
              {rows.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{k}</dt>
                  <dd className="mt-1 font-display text-lg font-bold leading-snug tracking-[-0.02em]">{v}</dd>
                </div>
              ))}
            </dl>

            {project.services?.length > 0 && (
              <div className="border-t border-ink/15 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">What I did</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.services.map((s) => (
                    <li key={s} className="rounded-full border border-ink/15 px-3 py-1 text-xs">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-lime"
              >
                Visit website
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </a>
            )}

            <div className="border-t border-ink/15 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Share</p>
              <div className="mt-3 flex gap-2">
                <button type="button" onClick={() => share(`https://www.linkedin.com/sharing/share-offsite/?url=${here()}`)} aria-label="Share on LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors hover:border-ink hover:bg-ink hover:text-lime">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => share(`https://wa.me/?text=${here()}`)} aria-label="Share on WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors hover:border-ink hover:bg-ink hover:text-lime">
                  <Share2 className="h-4 w-4" />
                </button>
                <button type="button" onClick={copy} aria-label="Copy link" className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors hover:border-ink hover:bg-ink hover:text-lime">
                  {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Link href="/case-studies" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 hover:text-ink">
              ← All case studies
            </Link>
          </div>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>

      <ProjectInquirySection />
    </div>
  );
}

/** Generic content section. */
export function CaseStudySection({ id, label, icon: Icon, title, description, children, className = '', centered = false }) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-24 lg:px-10 ${className}`}>
      {(label || title) && (
        <div className={centered ? 'mx-auto mb-14 max-w-4xl text-center' : 'mb-12'}>
          {label && (
            <p data-reveal className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
              {Icon && <Icon className="h-3.5 w-3.5" />}
              {label}
            </p>
          )}
          {title && (
            <h2 data-reveal className="mt-4 font-display text-[clamp(32px,4.2vw,60px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
              {title}
            </h2>
          )}
          {description && (
            <p data-reveal className={`mt-6 text-lg leading-relaxed text-ink/70 ${centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

/** Cards grid. */
export function FeatureGrid({ features }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <div key={i} data-reveal className="group bg-paper p-7 transition-colors duration-500 hover:bg-ink hover:text-paper">
            {Icon && <Icon className="h-6 w-6 text-ink/50 transition-colors group-hover:text-lime" />}
            <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em]">{f.title}</h3>
            <p className="mt-2 leading-relaxed text-ink/65 transition-colors group-hover:text-paper/65">{f.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function FeatureList({ features }) {
  if (!features.length) return null;
  return (
    <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <li key={i} className="flex gap-4 py-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-lime">
              {Icon ? <Icon className="h-4 w-4" /> : <Check className="h-4 w-4" />}
            </span>
            <div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="mt-1 text-[15px] leading-relaxed text-ink/65">{f.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** Image beside text, inside a rounded panel. */
export function ImageContentGrid({ image, imageAlt, badge, badgeIcon: BadgeIcon, title, description, features = [], imagePosition = 'left' }) {
  const right = imagePosition === 'right';
  return (
    <div className="mb-10 grid items-stretch overflow-hidden rounded-3xl border border-ink/10 bg-white lg:grid-cols-2">
      <div data-reveal="scale" className={`flex items-center justify-center bg-[#ebe8df] p-6 sm:p-10 ${right ? 'lg:order-2' : ''}`}>
        <Image src={image} alt={imageAlt || title} width={1600} height={1600} sizes="(min-width: 1024px) 40vw, 100vw" className="h-auto max-h-[560px] w-full rounded-xl object-contain" />
      </div>
      <div className={`flex flex-col justify-center p-7 sm:p-10 ${right ? 'lg:order-1' : ''}`}>
        {badge && (
          <p data-reveal className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
            {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
            {badge}
          </p>
        )}
        <h3 data-reveal className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
          {title}
        </h3>
        {description && (
          <p data-reveal className="mt-4 text-lg leading-relaxed text-ink/70">
            {description}
          </p>
        )}
        <div data-reveal>
          <FeatureList features={features} />
        </div>
      </div>
    </div>
  );
}

/** Full-width image + text split (no panel). */
export function FullWidthImageContent({ image, imageAlt, badge, badgeIcon: BadgeIcon, title, description, features = [], imagePosition = 'left' }) {
  const right = imagePosition === 'right';
  return (
    <section className="grid items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
      <div data-reveal="scale" className={`overflow-hidden rounded-3xl bg-[#ebe8df] p-6 sm:p-10 ${right ? 'lg:order-2' : ''}`}>
        <Image src={image} alt={imageAlt || title} width={1410} height={1182} sizes="(min-width: 1024px) 40vw, 100vw" className="h-auto max-h-[600px] w-full rounded-xl object-contain" />
      </div>
      <div className={right ? 'lg:order-1' : ''}>
        {badge && (
          <p data-reveal className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
            {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
            {badge}
          </p>
        )}
        <h3 data-reveal className="mt-3 font-display text-[clamp(30px,3.6vw,52px)] font-extrabold leading-[0.98] tracking-[-0.04em]">
          {title}
        </h3>
        {description && (
          <p data-reveal className="mt-5 text-lg leading-relaxed text-ink/70">
            {description}
          </p>
        )}
        <div data-reveal>
          <FeatureList features={features} />
        </div>
      </div>
    </section>
  );
}

/** Tech stack by category. */
export function TechStack({ technologies }) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {Object.entries(technologies).map(([cat, techs]) => (
        <div key={cat} data-reveal className="grid gap-3 py-6 sm:grid-cols-[200px_1fr]">
          <h3 className="font-display text-lg font-bold">{cat}</h3>
          <ul className="flex flex-wrap gap-2">
            {techs.map((t) => (
              <li key={t} className="rounded-full border border-ink/15 px-3 py-1 text-sm text-ink/80">
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Big numbers. */
export function MetricsGrid({ metrics }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/15 lg:grid-cols-4">
      {metrics.map((m, i) => {
        const Icon = m.icon;
        return (
          <div key={i} data-reveal className="bg-ink p-7 text-paper sm:p-8">
            {Icon && <Icon className="h-5 w-5 text-lime" />}
            <div className="mt-8 font-display text-[clamp(36px,4vw,60px)] font-bold leading-none tracking-[-0.05em]">{m.value}</div>
            <p className="mt-2 text-sm text-paper/60">{m.label}</p>
          </div>
        );
      })}
    </div>
  );
}

/** Two-up captioned screenshots. */
export function ImageShowcaseGrid({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((it, i) => (
        <figure key={i} data-reveal className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
          <div className="bg-[#ebe8df] p-5">
            <Image src={it.image} alt={it.alt || it.title} width={1600} height={1600} sizes="(min-width: 768px) 35vw, 100vw" className="h-auto w-full rounded-xl" />
          </div>
          <figcaption className="p-6">
            <h3 className="font-display text-xl font-bold tracking-[-0.02em]">{it.title}</h3>
            {it.caption && <p className="mt-2 text-[15px] text-ink/65">{it.caption}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Benefits per audience. */
export function BusinessImpactCards({ cards }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((c, i) => (
        <div key={i} data-reveal className="rounded-3xl border border-ink/10 bg-white p-8">
          <h3 className="font-display text-2xl font-bold tracking-[-0.03em]">{c.title}</h3>
          <ul className="mt-6 space-y-3">
            {c.benefits.map((b, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime">
                  <Check className="h-3 w-3 text-ink" />
                </span>
                <span className="leading-relaxed text-ink/75">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Lime highlight with three key numbers. */
export function KeyAchievementsCard({ achievements }) {
  return (
    <div data-reveal className="mt-6 rounded-3xl bg-lime p-8 sm:p-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">Key achievements</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {achievements.map((a, i) => (
          <div key={i}>
            <div className="font-display text-5xl font-bold tracking-[-0.05em]">{a.value}</div>
            <p className="mt-1 text-ink/70">{a.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Closing call to action. */
export function CTASection({ title, subtitle, primaryButton, secondaryButton }) {
  return (
    <section className="mx-5 my-16 rounded-3xl bg-ink px-8 py-16 text-paper sm:mx-8 sm:px-12 lg:mx-10">
      <h2 data-reveal className="max-w-3xl font-display text-[clamp(32px,4.5vw,64px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
        {title}
      </h2>
      {subtitle && (
        <p data-reveal className="mt-5 max-w-2xl text-lg text-paper/65">
          {subtitle}
        </p>
      )}
      <div data-reveal className="mt-10 flex flex-wrap gap-3">
        {primaryButton && (
          <Link href={primaryButton.href} className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-paper">
            {primaryButton.text} <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
        {secondaryButton && (
          <Link href={secondaryButton.href} className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition-colors hover:border-paper">
            {secondaryButton.text}
          </Link>
        )}
      </div>
    </section>
  );
}

/** Simple overview text + optional image. */
export function OverviewSection({ title, paragraphs, image, imageAlt }) {
  return (
    <section id="overview" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <h2 data-reveal className="font-display text-[clamp(32px,4.2vw,60px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
        {title}
      </h2>
      <div className="mt-8 max-w-3xl space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i} data-reveal className="text-lg leading-relaxed text-ink/70">
            {p}
          </p>
        ))}
      </div>
      {image && (
        <div data-reveal="scale" className="relative mt-12 aspect-video overflow-hidden rounded-3xl border border-ink/10 bg-white">
          <Image src={image} alt={imageAlt || title} fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-contain" />
        </div>
      )}
    </section>
  );
}
