import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import ProcessHowIWork from '@/components/home/ProcessHowIWork';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';

import PricingSection from '@/components/quote/PricingSection';
import QuoteCTA from '@/components/quote/QuoteCTA';
import QuoteHeroSection from '@/components/quote/QuoteHeroSection';
import QuoteStats from '@/components/quote/QuoteStats';

import GetQuote from '@/components/home/GetQuote';

export const metadata = {
  title: 'Get Your Project Quote | Ratan Mia - Full Stack Developer',
  description: 'Get a detailed quote for your web development project. Fast response, transparent pricing, and expert consultation. Transform your vision into reality.',
  keywords: 'web development quote, project estimate, custom development, React developer, Next.js expert',
};

export default function QuotePage() {
  return (
    <main>
      <QuoteHeroSection />
      <Services />
      <PricingSection />
      <ProcessHowIWork />
      <QuoteStats />
      <div className="bg-gray-50">
        <GetQuote />
      </div>
      <Testimonials />
      <FAQ />
      <QuoteCTA />
      <Contact />
    </main>
  );
}