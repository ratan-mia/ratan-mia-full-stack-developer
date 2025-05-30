import Footer from '@components/Footer';
import Header from '@components/Header';
import About from '@components/home/About';
import Contact from '@components/home/Contact';
import Experience from '@components/home/Experience';
import FAQ from '@components/home/FAQ';
import GetQuote from '@components/home/GetQuote';
import Hero from '@components/home/Hero';
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
      <Header />
      <Hero />
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
      <Footer />

    </div>
  );
}