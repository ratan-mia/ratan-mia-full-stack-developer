import { ArrowUpRight } from 'lucide-react';
import CtaBand from '@/components/site/CtaBand';
import PageHero from '@/components/site/PageHero';
import { RESOURCES } from '@/app/data/pages';

export const metadata = {
  title: 'Resources',
  description: 'Tools, design resources and starter kits Ratan Mia uses and recommends for web and mobile development.',
  alternates: { canonical: '/resources' },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Tools &"
        accent="starter kits"
        intro="The tools I reach for every week, a few design helpers, and starter kits I’m packaging up from real projects."
      />

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] space-y-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          {RESOURCES.map((g, gi) => (
            <div key={g.group} className="grid grid-cols-12 gap-x-4 gap-y-8">
              <div className="col-span-12 lg:col-span-3">
                <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  ({String(gi + 1).padStart(2, '0')})
                </p>
                <h2 data-reveal className="mt-2 font-display text-3xl font-bold tracking-[-0.03em]">
                  {g.group}
                </h2>
              </div>
              <ul className="col-span-12 grid gap-3 sm:grid-cols-2 lg:col-span-9">
                {g.items.map((it) => (
                  <li key={it.name} data-reveal>
                    {it.href ? (
                      <a
                        href={it.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-ink/15 p-6 transition-colors duration-500 hover:bg-ink hover:text-paper"
                      >
                        <span>
                          <span className="block font-display text-xl font-bold tracking-[-0.02em]">{it.name}</span>
                          <span className="mt-1 block text-[15px] text-ink/60 transition-colors group-hover:text-paper/60">{it.note}</span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-45 group-hover:text-lime" />
                      </a>
                    ) : (
                      <div className="flex h-full items-start justify-between gap-4 rounded-2xl border border-dashed border-ink/20 p-6">
                        <span>
                          <span className="block font-display text-xl font-bold tracking-[-0.02em] text-ink/80">{it.name}</span>
                          <span className="mt-1 block text-[15px] text-ink/55">{it.note}</span>
                        </span>
                        <span className="shrink-0 rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-lime">Soon</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Need a hand instead?" body="If you’d rather have it built for you, I’m available for new projects." />
    </>
  );
}
