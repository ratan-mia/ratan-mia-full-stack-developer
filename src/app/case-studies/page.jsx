import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CaseIndex from '@/components/case-studies/CaseIndex';
import CtaBand from '@/components/site/CtaBand';
import PageHero from '@/components/site/PageHero';
import { CASE_STUDIES } from '@/app/data/case-studies';

export const metadata = {
  title: 'Case studies',
  description:
    'In-depth case studies: AutoTrader BD, Japan Parts headless commerce, Chery Bangladesh, OMODA & JAECOO, TurfLet, ELF Bangladesh and Gamify.',
  alternates: { canonical: '/case-studies' },
};

const OMODA = {
  slug: 'omoda-jaecoo',
  title: 'OMODA & JAECOO',
  subtitle: 'Dual-brand automotive app',
  category: 'Automotive & mobile',
  year: '2024',
  heroImage: '/images/projects/omodajaecoo/home.png',
};

export default function CaseStudiesPage() {
  const list = [...CASE_STUDIES.slice(0, 3), OMODA, ...CASE_STUDIES.slice(3)];

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="How the work"
        accent="got done"
        meta={[`${list.length} studies`, '2024 — 2026']}
        intro="The problem, the constraints, what I built and what changed afterwards — for the projects I’m proudest of."
      />

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <CaseIndex items={list} />
        </div>
      </section>

      {CASE_STUDIES.map((c, i) => (
        <section key={c.slug} className={i % 2 ? 'bg-paper text-ink' : 'bg-ink text-paper'}>
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-12 px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
            <div className="col-span-12 lg:col-span-6">
              <p data-reveal className={`font-mono text-[11px] uppercase tracking-[0.2em] ${i % 2 ? 'text-ink/50' : 'text-mute'}`}>
                {String(i + 1).padStart(2, '0')} — {c.category} · {c.year}
              </p>
              <h2 data-reveal className="mt-4 font-display text-[clamp(40px,6vw,96px)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em]">
                {c.title}
              </h2>
              <p data-reveal className={`mt-3 font-serif text-2xl italic ${i % 2 ? 'text-ink/70' : 'text-lime'}`}>
                {c.subtitle}
              </p>
              <div className="mt-10 space-y-6">
                <div data-reveal>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-50">Challenge</h3>
                  <p className="mt-2 text-lg leading-relaxed opacity-75">{c.challenge}</p>
                </div>
                <div data-reveal>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-50">Solution</h3>
                  <p className="mt-2 text-lg leading-relaxed opacity-75">{c.solution}</p>
                </div>
              </div>
              <ul data-reveal className="mt-8 flex flex-wrap gap-2">
                {c.technologies.map((t) => (
                  <li key={t} className={`rounded-full border px-3 py-1 text-xs ${i % 2 ? 'border-ink/15' : 'border-white/15'}`}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Link href={`/case-studies/${c.slug}`} data-cursor="Read" className="group block">
                <div data-reveal="scale" className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5">
                  <Image
                    src={c.heroImage}
                    alt={`${c.title} — ${c.subtitle}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                  />
                </div>
              </Link>
              <dl className={`mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4 ${i % 2 ? 'bg-ink/10' : 'bg-white/10'}`}>
                {c.results.map((r) => (
                  <div key={r.label} data-reveal className={`p-5 ${i % 2 ? 'bg-paper' : 'bg-ink'}`}>
                    <dd className="font-display text-3xl font-bold tracking-[-0.04em]">{r.value}</dd>
                    <dt className="mt-1 text-xs opacity-60">{r.label}</dt>
                  </div>
                ))}
              </dl>
              <Link
                href={`/case-studies/${c.slug}`}
                className={`group mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-colors ${
                  i % 2 ? 'bg-ink text-lime' : 'bg-lime text-ink hover:bg-paper'
                }`}
              >
                Read the case study
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Your project could be next" />
    </>
  );
}
