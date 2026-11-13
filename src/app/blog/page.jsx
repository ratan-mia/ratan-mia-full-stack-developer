import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import { PROFILE } from '@/app/data/site';
import { BLOG } from '@/app/data/pages';

export const metadata = {
  title: 'Blog',
  description: 'Notes on React, Next.js, Laravel, databases, CSS and API design from real-world projects.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from"
        accent="the work"
        meta={['In progress']}
        intro="Practical write-ups from shipping real products — patterns that worked, mistakes I made and what I’d do differently. The first articles are being written now."
      />

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
              Coming up
            </p>
            <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
              {BLOG.length} articles in the works
            </p>
          </div>
          <ul className="mt-8 border-t border-ink/15">
            {BLOG.map((b, i) => (
              <li key={b.title} data-reveal className="grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-b border-ink/15 py-8">
                <span className="col-span-2 font-mono text-sm text-ink/40 sm:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="col-span-10 font-display text-[clamp(24px,3vw,40px)] font-bold leading-tight tracking-[-0.035em] sm:col-span-8">
                  {b.title}
                </h2>
                <p className="col-span-10 col-start-3 flex gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50 sm:col-span-3 sm:col-start-auto sm:justify-end">
                  <span>{b.topic}</span>
                  <span>{b.read}</span>
                  <span className="rounded-full bg-ink px-2 py-0.5 text-lime">Soon</span>
                </p>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-ink p-8 text-paper sm:p-12">
            <div>
              <p className="font-display text-3xl font-bold tracking-[-0.03em]">Want a heads-up when they’re out?</p>
              <p className="mt-2 text-paper/60">Follow along on LinkedIn, or email me a topic you’d like covered.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/shorifull/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink">
                Follow on LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href={`mailto:${PROFILE.email}?subject=Blog topic idea`} className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
                Suggest a topic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
