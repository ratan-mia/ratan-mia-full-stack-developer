import Contact from '@/components/home/Contact';
import GetQuote from '@/components/home/GetQuote';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesPricing from '@/components/services/ServicesPricing';
import ServicesProcess from '@/components/services/ServicesProcess';

export const metadata = {
  title: 'Mobile & Web Development Services - Ratan Mia | Full Stack Solutions',
  description: 'Professional mobile app and web development services including React Native apps, Next.js development, Laravel APIs, e-commerce solutions, and custom applications.',
  keywords: 'mobile app development, React Native, web development services, React development, Laravel development, e-commerce, custom web applications',
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesPricing />
      <GetQuote />
      <Contact />
    </main>
  );
}
