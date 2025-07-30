'use client';

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
    <div className="w-full">
      {/* Hero Section */}
      <HeroMain />

      {/* Services */}
      <Services />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Process How I Work */}
      <ProcessHowIWork />

      {/* Training Certificates */}
      <TrainingCertificates />

      {/* Testimonials */}
      <Testimonials />

      {/* Get Quote */}
      <GetQuote />

      {/* FAQ */}
      <FAQ />

      {/* Contact */}
      <Contact />
    </div>
  );
}
