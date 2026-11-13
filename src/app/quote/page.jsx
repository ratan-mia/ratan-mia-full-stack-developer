import { Suspense } from 'react';
import Faq from '@/components/site/Faq';
import PageHero from '@/components/site/PageHero';
import PricingGrid from '@/components/site/PricingGrid';
import QuoteWizard from '@/components/quote/QuoteWizard';

export const metadata = {
  title: 'Get a quote',
  description: 'Request a free, detailed quote for your app, website, store or automation project. Reply within 24 hours.',
  alternates: { canonical: '/quote' },
};

const PROMISES = [
  { k: '24h', v: 'Detailed reply' },
  { k: '$0', v: 'Cost of a quote' },
  { k: '30 min', v: 'Free strategy call' },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell me about"
        accent="your project"
        intro="Three quick steps. You’ll get a written quote with scope, timeline and price within 24 hours — no obligation."
      >
        <dl className="grid grid-cols-3 gap-6">
          {PROMISES.map((p) => (
            <div key={p.v}>
              <dt className="sr-only">{p.v}</dt>
              <dd className="font-display text-4xl font-bold tracking-[-0.04em] text-lime">{p.k}</dd>
              <p className="mt-1 text-sm text-paper/55">{p.v}</p>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
          <Suspense fallback={<div className="min-h-[520px] rounded-3xl border border-ink/15" />}>
            <QuoteWizard />
          </Suspense>
        </div>
      </section>

      <PricingGrid label="Pricing" />
      <Faq />
    </>
  );
}
