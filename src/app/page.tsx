import About from '@components/home/About';
import Contact from '@components/home/Contact';
import FAQ from '@components/home/FAQ';
import GetQuote from '@components/home/GetQuote';
import HeroMain from '@components/home/HeroMain';
import ProcessHowIWork from '@components/home/ProcessHowIWork';
import Projects from '@components/home/Projects';
import Services from '@components/home/Services';
import Skills from '@components/home/Skills';
import Testimonials from '@components/home/Testimonials';
import TrainingCertificates from '@components/home/TrainingCertificates';

export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      <HeroMain />
      <Projects />
      <About />
      <GetQuote />
      <Services />
      <Testimonials />
      <Skills />
      <TrainingCertificates />
      <ProcessHowIWork />

      <FAQ />

      <Contact />
    </main>
  );
}
