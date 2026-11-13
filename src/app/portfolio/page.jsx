import CtaBand from '@/components/site/CtaBand';
import PageHero from '@/components/site/PageHero';
import WorkGrid from '@/components/portfolio/WorkGrid';
import { STACK } from '@/app/data/site';

export const metadata = {
  title: 'Work',
  description:
    'Selected projects by Ratan Mia: NextPilot Chat, TurfLet, ELF Bangladesh, AutoTrader BD, OMODA & JAECOO, Chery Bangladesh, Japan Parts and more.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Products, apps &"
        accent="stores"
        meta={['2021 — 2026', '14 projects']}
        intro="SaaS products I own, apps for automotive brands, high-volume Shopify stores and the internal systems that run the business behind them."
      />

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <WorkGrid />
        </div>
      </section>

      <section className="overflow-hidden border-t border-white/10 bg-ink py-16 text-paper">
        <p className="mx-auto max-w-[1440px] px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-mute sm:px-8 lg:px-12">
          Built with
        </p>
        <ul className="mx-auto mt-6 flex max-w-[1440px] flex-wrap gap-2 px-5 sm:px-8 lg:px-12">
          {STACK.map((s) => (
            <li key={s} data-reveal className="rounded-full border border-white/15 px-4 py-2 text-sm text-paper/80">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title="Want something like this?" />
    </>
  );
}
