'use client';

import ContactCTA from '@/app/components/about/ContactCTA';
import CoreValuesSection from '@/app/components/about/CoreValuesSection';
import FeaturedProjectsSection from '@/app/components/about/FeaturedProjectsSection';
import HeroSection from '@/app/components/about/HeroSection';
import StorySection from '@/app/components/about/StorySection';
import Skills from '@/app/components/home/Skills';
import TrainingCertificates from '@/app/components/home/TrainingCertificates';

export default function AboutPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <HeroSection />
      <StorySection />
      <FeaturedProjectsSection />
      <Skills />
      <CoreValuesSection />
      <TrainingCertificates />
      <ContactCTA />
    </main>
  );
}
