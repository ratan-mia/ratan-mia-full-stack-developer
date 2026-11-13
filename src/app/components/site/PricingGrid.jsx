import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import SectionHead from '@/components/site/SectionHead';
import { PRICING } from '@/app/data/pages';

export default function PricingGrid({ label = 'Pricing' }) {
  return (
    <section id="pricing" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHead
          tone="dark"
          label={label}
          title="Starting"
          accent="points"
          intro="Every project gets its own quote. These ranges are here so you know where we’ll land before the first call."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((p) => (
            <article
              key={p.title}
              data-reveal
              className={`group relative flex flex-col rounded-3xl border p-7 transition-colors duration-500 sm:p-8 ${
                p.popular ? 'border-lime bg-lime text-ink' : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className={p.popular ? 'text-ink/60' : 'text-mute'}>{p.category}</span>
                {p.popular && <span className="rounded-full bg-ink px-3 py-1 text-lime">Most requested</span>}
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.03em]">{p.title}</h3>
              <p className={`mt-3 text-[15px] leading-relaxed ${p.popular ? 'text-ink/70' : 'text-paper/60'}`}>{p.description}</p>
              <div className="mt-8">
                <span className={`text-xs ${p.popular ? 'text-ink/60' : 'text-mute'}`}>{p.per ? 'From' : 'Starting from'}</span>
                <p className="font-display text-6xl font-bold tracking-[-0.05em]">
                  {p.price}
                  {p.per && <span className="text-2xl font-semibold opacity-50">{p.per}</span>}
                </p>
                <p className={`mt-1 font-mono text-[11px] uppercase tracking-[0.15em] ${p.popular ? 'text-ink/60' : 'text-mute'}`}>
                  {p.timeline}
                </p>
              </div>
              <ul className={`mt-8 space-y-3 border-t pt-6 ${p.popular ? 'border-ink/15' : 'border-white/10'}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? 'text-ink' : 'text-lime'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/quote?type=${encodeURIComponent(p.title)}`}
                className={`mt-8 inline-flex items-center justify-between rounded-full px-6 py-4 text-sm font-semibold transition-colors ${
                  p.popular ? 'bg-ink text-lime' : 'bg-white/[0.06] hover:bg-lime hover:text-ink'
                }`}
              >
                Get a quote
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
