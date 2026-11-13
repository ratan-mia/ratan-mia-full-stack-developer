import Link from 'next/link';
import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import { CERTIFICATIONS, EXPERIENCE, PROFILE, PROJECTS } from '@/app/data/site';
import { AWARDS, EDUCATION, RESUME_DETAIL, SKILL_GROUPS } from '@/app/data/pages';

export const metadata = {
  title: 'Résumé',
  description:
    'Résumé of Ratan Mia — full-stack & mobile engineer and IT manager with 10+ years across automotive platforms, SaaS, e-commerce and IT operations.',
  alternates: { canonical: '/resume' },
};

function Block({ label, children }) {
  return (
    <section className="grid grid-cols-12 gap-x-4 gap-y-6 border-t border-ink/15 py-14">
      <h2 data-reveal className="col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50 lg:col-span-3">
        {label}
      </h2>
      <div className="col-span-12 lg:col-span-9">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Résumé"
        title="Ratan"
        accent="Mia"
        meta={['Updated Nov 2026']}
        intro="IT leader and hands-on software developer with 10+ years across automotive technology, web and mobile engineering, e-commerce, SaaS products and IT operations."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={PROFILE.resume}
            download="Ratan_Mia_Resume.pdf"
            className="inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-paper"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition-colors hover:border-paper">
            Hire me <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <div className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
          <div data-reveal className="flex flex-wrap gap-x-8 gap-y-3 pb-10 text-[15px] text-ink/70">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 hover:text-ink">
              <Mail className="h-4 w-4" /> {PROFILE.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {PROFILE.location}
            </span>
            {PROFILE.socials
              .filter((s) => s.href.startsWith('http'))
              .map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-ink">
                  {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
          </div>

          <Block label="Experience">
            <ol className="space-y-12">
              {EXPERIENCE.map((x) => (
                <li key={`${x.company}-${x.period}`} data-reveal>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">{x.role}</h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                      {x.period} · {x.type}
                    </p>
                  </div>
                  <p className="mt-1 font-serif text-xl italic text-ink/75">{x.company}</p>
                  <ul className="mt-4 space-y-2">
                    {(RESUME_DETAIL[x.company] || [x.detail]).map((d) => (
                      <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-ink/70">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Block>

          <Block label="Selected projects">
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {PROJECTS.map((p) => (
                <li key={p.id} data-reveal className="border-b border-ink/10 pb-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em]">{p.title}</h3>
                    {(p.caseStudy || p.live) && (
                      <Link href={p.caseStudy || p.live} className="text-ink/50 hover:text-ink" aria-label={`${p.title} details`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">{p.category}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{p.summary}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Skills">
            <dl className="divide-y divide-ink/10">
              {SKILL_GROUPS.map((g) => (
                <div key={g.group} data-reveal className="grid grid-cols-12 gap-x-4 gap-y-2 py-4">
                  <dt className="col-span-12 font-semibold sm:col-span-3">{g.group}</dt>
                  <dd className="col-span-12 text-ink/70 sm:col-span-9">{g.items.join(' · ')}</dd>
                </div>
              ))}
              <div data-reveal className="grid grid-cols-12 gap-x-4 gap-y-2 py-4">
                <dt className="col-span-12 font-semibold sm:col-span-3">Management</dt>
                <dd className="col-span-12 text-ink/70 sm:col-span-9">
                  IT operations · Project delivery · Vendor coordination · Stakeholder communication · Team leadership
                </dd>
              </div>
              <div data-reveal className="grid grid-cols-12 gap-x-4 gap-y-2 py-4">
                <dt className="col-span-12 font-semibold sm:col-span-3">Languages</dt>
                <dd className="col-span-12 text-ink/70 sm:col-span-9">Bangla (native) · English (professional)</dd>
              </div>
            </dl>
          </Block>

          <Block label="Education">
            <ul className="space-y-6">
              {EDUCATION.map((e) => (
                <li key={e.title} data-reveal className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em]">{e.title}</h3>
                    <p className="font-serif text-lg italic text-ink/70">{e.place}</p>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">{e.year}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Certifications & awards">
            <ul className="grid gap-3 sm:grid-cols-2">
              {[...CERTIFICATIONS, ...AWARDS].map((c) => (
                <li key={c.title} data-reveal className="flex items-center justify-between gap-4 rounded-2xl border border-ink/15 px-5 py-4">
                  <span className="text-[15px]">{c.title}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                    {c.issuer} · {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>
    </>
  );
}
