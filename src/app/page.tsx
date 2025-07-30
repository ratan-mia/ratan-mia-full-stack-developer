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
    <>
      {/* Hero Section - Full screen with enhanced graphics */}
      <HeroMain />

      {/* All Sections with Enhanced Graphics & Reduced Text */}
      <div className="relative">
        {/* Background Decoration Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Graphics */}
          <div className="absolute top-1/4 left-4 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-8 w-48 h-48 bg-accent-secondary/5 rounded-full blur-2xl animate-bounce-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-lg"></div>
          
          {/* Geometric Patterns */}
          <svg className="absolute top-20 right-20 w-16 h-16 text-accent/20 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
          </svg>
          <svg className="absolute bottom-40 left-16 w-12 h-12 text-accent-secondary/20 rotate-45" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
          </svg>
        </div>

        {/* 1. Services - 3 core offerings with enhanced icons */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5"></div>
          <Services />
        </section>

        {/* 2. About - Enhanced with visual timeline */}
        <section className="relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <About />
        </section>

        {/* 3. Skills - Visual skill bars and tech icons */}
        <section className="relative overflow-hidden">
          {/* Tech Icons Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-8 transform rotate-12 scale-150">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="w-8 h-8 bg-accent rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
          <Skills />
        </section>

        {/* 4. Projects - Selected projects with enhanced visual layout */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          <Projects />
        </section>

        {/* 5. Process How I Work - Step by step visual process */}
        <section className="relative">
          {/* Process Flow Background */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent via-transparent to-transparent"></div>
          <ProcessHowIWork />
        </section>

        {/* 6. Training Certificates - Achievement showcase with badges */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/5 to-transparent"></div>
          <TrainingCertificates />
        </section>

        {/* 7. Testimonials - Client feedback with enhanced cards */}
        <section className="relative overflow-hidden">
          {/* Quote Marks Background */}
          <div className="absolute top-20 left-10 text-9xl text-accent/10 font-serif">"</div>
          <div className="absolute bottom-20 right-10 text-9xl text-accent/10 font-serif rotate-180">"</div>
          <Testimonials />
        </section>

        {/* 8. Get Quote CTA - Strong visual call to action */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent-secondary/20"></div>
          <GetQuote />
        </section>

        {/* 9. FAQ - Enhanced accordion with visual indicators */}
        <section className="relative">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-secondary/5 rounded-full blur-2xl"></div>
          <FAQ />
        </section>

        {/* 10. Contact - Bright accent background with graphics */}
        <section className="relative">
          {/* Contact Graphics */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-black/20 rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-black/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/5 rounded-full"></div>
          </div>
          <Contact />
        </section>
      </div>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex flex-col gap-4">
          {/* Scroll to Top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          
          {/* Quick Contact */}
          <a 
            href="#contact"
            className="w-12 h-12 bg-accent-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
            aria-label="Quick contact"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="h-1 bg-gradient-to-r from-accent via-accent-secondary to-accent transform-gpu origin-left scale-x-0 transition-transform duration-200" 
             style={{
               transform: `scaleX(${typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0})`
             }}
        ></div>
      </div>
    </>
  );
}
