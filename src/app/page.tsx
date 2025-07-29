import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import GetQuote from '@/components/home/GetQuote';
import HeroMain from '@/components/home/HeroMain';
import ProcessHowIWork from '@/components/home/ProcessHowIWork';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';
import TrainingCertificates from '@/components/home/TrainingCertificates';

export default function Home() {
  return (
    <>
      {/* Hero Section - Dark Theme */}
      <HeroMain />

      {/* Main Content Sections - Alternating Dark/Light Theme */}
      <div className="relative">
        {/* 1. About - Light Theme */}
        <About />

        {/* 2. Services - Dark Theme */}
        <Services />

        {/* 3. Skills - Light Theme */}
        <Skills />

        {/* 4. Projects - Dark Theme */}
        <Projects />

        {/* 5. Process How I Work - Light Theme */}
        <ProcessHowIWork />

        {/* 6. Testimonials - Dark Theme */}
        <Testimonials />

        {/* 7. Training Certificates - Light Theme */}
        <TrainingCertificates />

        {/* 8. Get Quote CTA - Dark Theme */}
        <GetQuote />




        {/* 10. Contact - Dark Theme */}
        <Contact />
        {/* 9. FAQ - Light Theme */}
        <FAQ />
      </div>
    </>
  );
}
