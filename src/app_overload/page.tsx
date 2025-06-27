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
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Hero Section */}
      <HeroMain />

      {/* Main Content Sections - Organized for optimal user journey */}
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/20 pointer-events-none" />

        {/* Content Sections in logical order */}
        <About />          {/* 1. Who I am */}
        <Skills />         {/* 2. What I can do */}
        <Services />       {/* 3. What I offer */}
        <Projects />       {/* 4. My work examples */}
        <ProcessHowIWork />     {/* 5. How I work */}
        <Testimonials />   {/* 6. Social proof */}
        <TrainingCertificates /> {/* 7. My credentials */}
        <GetQuote />       {/* 8. Primary CTA */}
        <FAQ />            {/* 9. Common questions */}
        <Contact />        {/* 10. Final contact */}
      </div>
    </main>
  );
}
