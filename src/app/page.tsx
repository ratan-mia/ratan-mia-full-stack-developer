import About from '@components/home/About';
import Contact from '@components/home/Contact';
import Experience from '@components/home/Experience';
import FAQ from '@components/home/FAQ';
import GetQuote from '@components/home/GetQuote';
import HeroMain from '@components/home/HeroMain';
import ProcessHowIWork from '@components/home/ProcessHowIWork';
import Projects from '@components/home/Projects';
import Services from '@components/home/Services';
import Skills from '@components/home/Skills';
import Testimonials from '@components/home/Testimonials';
import Timeline from '@components/home/Timeline';


import TrainingCertificates from '@components/home/TrainingCertificates';


export default function Home() {
  return (
    <div className="font-sans text-gray-800">

      <HeroMain />

      {/* <Hero /> */}
      <About />
      <Services />
      <Skills />
      <ProcessHowIWork />
      <Timeline />
      <Experience />
      <TrainingCertificates />
      <Projects />
      <GetQuote />
      <FAQ />
      <Testimonials />
      <Contact />


    </div>
  );
}