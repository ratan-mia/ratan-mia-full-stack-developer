import About from '@/app/components/home/About';
import Contact from '@/app/components/home/Contact';
import FAQ from '@/app/components/home/FAQ';
import GetQuote from '@/app/components/home/GetQuote';
import HeroMain from '@/app/components/home/HeroMain';
import ProcessHowIWork from '@/app/components/home/ProcessHowIWork';
import Projects from '@/app/components/home/Projects';
import Services from '@/app/components/home/Services';
import Skills from '@/app/components/home/Skills';
import Testimonials from '@/app/components/home/Testimonials';
import TrainingCertificates from '@/app/components/home/TrainingCertificates';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Hero Section */}
      <HeroMain />
      
      {/* Main Content Sections */}
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/20 pointer-events-none" />
        
        {/* Content Sections */}
        <Projects />
        <About />
        <Skills />
        <Services />
        <ProcessHowIWork />
        <TrainingCertificates />
        <Testimonials />
        <GetQuote />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
