import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import ProcessHowIWork from '@/components/home/ProcessHowIWork';
import Services from '@/components/home/Services';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';

import GetQuote from '@/components/home/GetQuote';
import PricingSection from '@/components/quote/PricingSection';
import QuoteCTA from '@/components/quote/QuoteCTA';
import QuoteHeroSection from '@/components/quote/QuoteHeroSection';
import QuoteStats from '@/components/quote/QuoteStats';
import WhyChooseMe from '@/components/quote/WhyChooseMe';
import ProjectTypes from '@/components/quote/ProjectTypes';
import QuoteProcess from '@/components/quote/QuoteProcess';

export const metadata = {
  title: 'Get Your Project Quote | Ratan Mia - Full Stack Developer',
  description: 'Get a detailed quote for your web development project. Fast response, transparent pricing, and expert consultation. Transform your vision into reality.',
  keywords: 'web development quote, project estimate, custom development, React developer, Next.js expert',
};

export default function QuotePage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Hero Section */}
      <QuoteHeroSection />

      {/* Main Content Sections - Optimized for conversion */}
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/20 pointer-events-none" />

        {/* Content Sections in logical order for quotes */}
        <WhyChooseMe />      {/* 1. Build trust first */}
        <ProjectTypes />     {/* 2. Show what we can do */}
        <Services />         {/* 3. Detailed services */}
        <Skills />           {/* 4. Technical capabilities */}
        <QuoteProcess />     {/* 5. How we work together */}
        <ProcessHowIWork />  {/* 6. Development process */}
        <PricingSection />   {/* 7. Pricing transparency */}
        <QuoteStats />       {/* 8. Social proof */}
        <Testimonials />     {/* 9. Client testimonials */}
        <div className="bg-slate-50 dark:bg-slate-900">
          <GetQuote />       {/* 10. Main quote form */}
        </div>
        <FAQ />              {/* 11. Address concerns */}
        <QuoteCTA />         {/* 12. Final call to action */}
        <Contact />          {/* 13. Alternative contact */}
      </div>
    </main>
  );
}