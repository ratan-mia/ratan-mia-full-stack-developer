'use client';

import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import EmpoweringBusiness from '@/components/home/EmpoweringBusiness';
import FAQ from '@/components/home/FAQ';
import GetQuote from '@/components/home/GetQuote';
import HeroMain from '@/components/home/HeroMain';
import PricingPlan from '@/components/home/PricingPlan';
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

      {/* Pricing Plan */}
      <PricingPlan />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />
      <EmpoweringBusiness />

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
