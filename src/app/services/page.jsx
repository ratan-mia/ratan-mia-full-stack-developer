import CtaBand from '@/components/site/CtaBand';
import Faq from '@/components/site/Faq';
import PageHero from '@/components/site/PageHero';
import PricingGrid from '@/components/site/PricingGrid';
import SectionHead from '@/components/site/SectionHead';
import ProcessSteps from '@/components/services/ProcessSteps';
import ServiceList from '@/components/services/ServiceList';

export const metadata = {
  title: 'Services',
  description:
    'Mobile apps, full-stack web apps and SaaS, Shopify and headless commerce, WhatsApp & AI automation, WordPress and IT management by Ratan Mia.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What I can"
        accent="build for you"
        meta={['Remote-friendly', 'Fixed or capped pricing']}
        intro="From a single landing page to a full product with mobile apps, admin panels and the servers underneath — one person accountable for the whole thing."
      />

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <SectionHead label="(01) — Capabilities" title="Seven ways" accent="I help" />
          <div className="mt-16">
            <ServiceList />
          </div>
        </div>
      </section>

      <ProcessSteps />
      <PricingGrid label="(03) — Pricing" />
      <Faq label="(04) — FAQ" />
      <CtaBand />
    </>
  );
}
