import Footer from '@components/Footer';
import Header from '@components/Header';
import About from '@components/home/About';
import Contact from '@components/home/Contact';
import Experience from '@components/home/Experience';
import Hero from '@components/home/Hero';
import Projects from '@components/home/Projects';
import Services from '@components/home/Services';
import Skills from '@components/home/Skills';
import Timeline from '@components/home/Timeline';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Timeline />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}