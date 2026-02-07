'use client';

import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import CTA from '@/components/home/CTA';
import EmpoweringBusiness from '@/components/home/EmpoweringBusiness';
import Experience from '@/components/home/Experience';
import FeelanceCTA from '@/components/home/FeelanceCTA';
import HeroMain from '@/components/home/HeroMain';
import Process from '@/components/home/Process';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';
import TrainingCertificates from '@/components/home/TrainingCertificates';
import VideoIntro from '@/components/home/VideoIntro';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <HeroMain />
      {/* About */}
      <About />
      {/* Services */}
      <Services />

      <FeelanceCTA />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />
      <EmpoweringBusiness />
      <VideoIntro />
      {/* Process How I Work */}
      <Process />
      {/* Technical Expertise */}
      <CTA />
      {/* Experience */}
      <Experience />
      {/* Training Certificates */}
      <TrainingCertificates />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

    </div>
  );
}
