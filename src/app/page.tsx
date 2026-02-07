'use client';

import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Experience from '@/components/home/Experience';
import HeroMain from '@/components/home/HeroMain';
import Process from '@/components/home/Process';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import TechnicalExpertise from '@/components/home/TechnicalExpertise';
import Testimonials from '@/components/home/Testimonials';
import TrainingCertificates from '@/components/home/TrainingCertificates';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section - Dark */}
      <HeroMain />

      {/* About - Light (White background) */}
      <About />

      {/* Services - Dark (Black background) */}
      <Services />

      {/* Process - Light (White background) */}
      <Process />

      {/* Technical Expertise - Dark (Black background) */}
      <TechnicalExpertise />

      {/* Experience - Light (White background) */}
      <Experience />

      {/* Projects - Dark (Black background) */}
      <Projects />

      {/* Training Certificates - Light (White background) */}
      <TrainingCertificates />

      {/* Testimonials - Dark (Black background) */}
      <Testimonials />

      {/* Contact - Light (White background) */}
      <Contact />
    </div>
  );
}
