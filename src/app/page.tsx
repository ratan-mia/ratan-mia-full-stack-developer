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
      {/* Hero Section - Full screen with graphics */}
      <HeroMain />

      {/* All Sections with Enhanced Graphics */}
      <div className="relative">
        {/* 1. About - Enhanced with graphics */}
        <About />

        {/* 2. Services - 3 core offerings with icons */}
        <Services />

        {/* 3. Skills - Visual skill representation */}
        <Skills />

        {/* 4. Projects - Selected projects with varied layouts */}
        <Projects />

        {/* 5. Process How I Work - Step by step visual process */}
        <ProcessHowIWork />

        {/* 6. Testimonials - Client feedback with avatars */}
        <Testimonials />

        {/* 7. Training Certificates - Achievement showcase */}
        <TrainingCertificates />

        {/* 8. Get Quote CTA - Strong visual call to action */}
        <GetQuote />

        {/* 9. FAQ - Common questions with accordion */}
        <FAQ />

        {/* 10. Contact - Bright accent background */}
        <Contact />
      </div>
    </>
  );
}
