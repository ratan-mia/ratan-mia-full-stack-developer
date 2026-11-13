import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CtaBand from '@/components/site/CtaBand';
import PageHero from '@/components/site/PageHero';
import SectionHead from '@/components/site/SectionHead';
import Journey from '@/components/about/Journey';
import { CERTIFICATIONS, PROFILE, PROJECTS, STATS } from '@/app/data/site';
import { EDUCATION, SKILL_GROUPS, VALUES } from '@/app/data/pages';

export const metadata = {
  title: 'About',
  description:
    'Ratan Mia is a full-stack and mobile engineer and IT manager in Dhaka with 10+ years building SaaS products, React Native apps and commerce platforms.',
  alternates: { canonical: '/about' },
};

const FEATURED = ['nextpilot', 'turflet', 'elf'];

export default function AboutPage() {
  const featured = PROJECTS.filter((p) => FEATURED.includes(p.id));

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineer with an"
        accent="IT manager’s habits"
        meta={[PROFILE.location, '10+ years', 'IBM certified']}
        intro="I’m Ratan — I build web, mobile and commerce products end-to-end, and I’ve spent a decade keeping the servers, vendors and budgets behind them in order."
      />

      {/* Story */}
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-12 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="col-span-12 sm:col-span-6 lg:col-span-5">
            <div data-reveal="scale" className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink/5">
              <Image src="/images/hero-image.png" alt="Ratan Mia" fill sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-[50%_25%]" priority />
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-between gap-12 sm:col-span-6 lg:col-span-6 lg:col-start-7">
            <div className="space-y-6 text-lg leading-relaxed text-ink/75 sm:text-xl">
              <p data-reveal className="font-display text-[clamp(26px,3vw,40px)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink">
                I started building websites in 2015. Ten years and 150+ projects later, I still enjoy the moment a product goes live.
              </p>
              <p data-reveal>
                My work sits where software meets operations. I’ve led a 15-person development team, run IT for an
                automotive group, built 100+ Shopify stores — including one doing around $13M a year — and shipped
                mobile apps used every day by mechanics, retailers and car owners.
              </p>
              <p data-reveal>
                Today I consult for the Asian Automotive group and build my own products:{' '}
                <span className="font-serif text-2xl italic text-ink">NextPilot Chat</span>, a WhatsApp-first CRM;{' '}
                <span className="font-serif text-2xl italic text-ink">TurfLet</span>, a sports-venue marketplace; and{' '}
                <span className="font-serif text-2xl italic text-ink">PieQR</span>, white-label loyalty infrastructure.
              </p>
              <p data-reveal>
                I studied English at the University of Dhaka, which turns out to be useful: most software problems are
                communication problems first.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-8 border-t border-ink/15 pt-10 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} data-reveal>
                  <dd className="font-display text-5xl font-bold tracking-[-0.05em]">
                    {s.prefix}
                    {s.value}
                    <span className="text-ink/30">{s.suffix}</span>
                  </dd>
                  <dt className="mt-2 text-sm text-ink/60">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Journey />

      {/* Values */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <SectionHead label="(02) — How I work" title="What I" accent="care about" />
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <article key={v.title} data-reveal className="group bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper sm:p-12">
                <span className="font-mono text-sm text-ink/40 transition-colors group-hover:text-lime">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-10 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">{v.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/65 transition-colors group-hover:text-paper/65">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <SectionHead tone="dark" label="(03) — Toolkit" title="Tools I" accent="reach for" />
          <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {SKILL_GROUPS.map((g) => (
              <div key={g.group} data-reveal className="grid grid-cols-12 gap-x-4 gap-y-4 py-8">
                <h3 className="col-span-12 font-display text-2xl font-bold tracking-[-0.03em] lg:col-span-3">{g.group}</h3>
                <ul className="col-span-12 flex flex-wrap gap-2 lg:col-span-9">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full border border-white/15 px-4 py-2 text-sm text-paper/80 transition-colors hover:border-lime hover:text-lime">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & certifications */}
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-16 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="col-span-12 lg:col-span-5">
            <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">(04) — Education</p>
            <ul className="mt-8 space-y-8">
              {EDUCATION.map((e) => (
                <li key={e.title} data-reveal className="border-t border-ink/15 pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">{e.year}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em]">{e.title}</h3>
                  <p className="mt-1 font-serif text-xl italic text-ink/70">{e.place}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">(05) — Certifications</p>
            <ul className="mt-8 grid gap-3">
              {CERTIFICATIONS.map((c) => (
                <li key={c.title} data-reveal className="flex items-center justify-between gap-4 rounded-2xl border border-ink/15 px-5 py-4">
                  <span className="text-[15px]">{c.title}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                    {c.issuer} · {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead tone="dark" label="(06) — Recent work" title="Lately" accent="I’ve built" className="flex-1" />
            <Link data-reveal href="/portfolio" className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-semibold hover:border-lime hover:text-lime">
              All work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link key={p.id} href={p.caseStudy || p.live} data-reveal className="group block" data-cursor="View">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ backgroundColor: p.accent }}>
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.03em]">{p.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">{p.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
