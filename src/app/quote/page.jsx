import Contact from '@/components/home/Contact';
import GetQuote from '@/components/home/GetQuote';
import PricingSection from '@/components/quote/PricingSection';
import ProjectTypes from '@/components/quote/ProjectTypes';
import QuoteCTA from '@/components/quote/QuoteCTA';
import QuoteHeroSection from '@/components/quote/QuoteHeroSection';
import QuoteProcess from '@/components/quote/QuoteProcess';
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

      {/* Main Content Sections */}
      <WhyChooseMe />
      <ProjectTypes />
      <QuoteProcess />
      <PricingSection />
      <div id="quote-form" className="bg-gray-50">
        <GetQuote />
      </div>
      <QuoteCTA />
      <Contact />
    </main>
  );
}