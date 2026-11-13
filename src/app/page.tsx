import Capabilities from '@/components/home2/Capabilities';
import Contact from '@/components/home2/Contact';
import Experience from '@/components/home2/Experience';
import Hero from '@/components/home2/Hero';
import About from '@/components/home2/About';
import Marquee from '@/components/home2/Marquee';
import Work from '@/components/home2/Work';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-clip">
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Capabilities />
      <Experience />
      <Contact />
    </div>
  );
}
