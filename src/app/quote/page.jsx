

// Existing components from home page - reusing the best ones
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import ProcessHowIWork from '@/components/home/ProcessHowIWork';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';

// New quote-specific components
import PricingSection from '@/components/quote/PricingSection';
import QuoteCTA from '@/components/quote/QuoteCTA';
import QuoteHeroSection from '@/components/quote/QuoteHeroSection';
import QuoteStats from '@/components/quote/QuoteStats';

// Multi-step form component (keeping the existing one)
import GetQuote from '@/components/home/GetQuote';

// Metadata for SEO (can only be exported from server components)
export const metadata = {
  title: 'Get Your Project Quote | Ratan Mia - Full Stack Developer',
  description: 'Get a detailed quote for your web development project. Fast response, transparent pricing, and expert consultation. Transform your vision into reality.',
  keywords: 'web development quote, project estimate, custom development, React developer, Next.js expert',
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 1. Quote-specific Hero Section with compelling CTA */}
      <QuoteHeroSection />

      {/* 2. Reuse existing Services component - perfect for showing what's available */}
      <Services />

      {/* 3. New Pricing Section - transparent pricing builds trust */}
      <PricingSection />

      {/* 4. Reuse existing Process component - shows methodology */}
      <ProcessHowIWork />

      {/* 5. New Quote Stats/Trust Indicators - builds credibility */}
      <QuoteStats />

      {/* 6. Main Multi-Step Quote Form - KEEPING THE EXISTING ONE */}
      <div id="quote-form">
        <GetQuote />
      </div>

      {/* 7. Reuse existing Testimonials - social proof */}
      <Testimonials />

      {/* 8. Reuse existing FAQ - answers common questions */}
      <FAQ />

      {/* 9. New Quote CTA Section - final push to convert */}
      <QuoteCTA />

      {/* 10. Reuse existing Contact component - alternative contact methods */}
      <Contact />
    </div>
  );
}