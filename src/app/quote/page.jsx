import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import GetQuote from '@/components/home/GetQuote';
import PricingPlan from '@/components/home/PricingPlan';
import ProcessHowIWork from '@/components/home/ProcessHowIWork';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import ProjectTypes from '@/components/quote/ProjectTypes';
import QuoteCTA from '@/components/quote/QuoteCTA';
import QuoteHeroSection from '@/components/quote/QuoteHeroSection';
import WhyChooseMe from '@/components/quote/WhyChooseMe';

export const metadata = {
  title: 'Get Your Project Quote | Ratan Mia - Mobile & Web Developer',
  description: 'Get a detailed quote for your mobile app or web development project. Expert React Native and Next.js development with transparent pricing. 24-hour response time.',
  keywords: 'mobile app quote, web development quote, React Native developer, project estimate, custom development, Next.js expert',
};

export default function QuotePage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <QuoteHeroSection />
   {/* Supporting Content Sections */}
      <WhyChooseMe />
      {/* Prominent Quote Form Section - Moved Early */}
      <div id="quote-form" className="bg-accent-lime">
        <GetQuote />
      </div>

   
      <Services />
      <ProjectTypes />
      <ProcessHowIWork />
      <PricingPlan />
      <Testimonials />
      <FAQ />
      <QuoteCTA />
      <Contact />
    </main>
  );
}