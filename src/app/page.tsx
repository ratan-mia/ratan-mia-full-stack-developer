
'use client';

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
import SideNavigation from '@components/SideNavigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNavigation = () => setIsNavOpen(!isNavOpen);

  return (
    <main className="relative flex bg-gray-100">
      {/* Side Navigation */}
      <motion.aside
        className={`fixed top-0 left-0 h-screen ${isNavOpen ? 'w-16 md:w-20' : 'w-0'} bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 z-50 shadow-xl overflow-hidden transition-all`}
        initial={{ width: isNavOpen ? '4rem' : '0rem' }}
        animate={{ width: isNavOpen ? '4rem' : '0rem' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SideNavigation />
          </motion.div>
        )}
      </motion.aside>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleNavigation}
        className={`fixed top-6 ${isNavOpen ? 'left-16 md:left-20' : 'left-2'} bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg z-50 transition-transform transform focus:outline-none`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Navigation"
      >
        {isNavOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </motion.button>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isNavOpen ? 'ml-16 md:ml-20' : 'ml-0'} space-y-12`}>
        <HeroMain />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <TrainingCertificates />
        <ProcessHowIWork />
        <FAQ />
        <GetQuote />
        <Contact />
      </div>
    </main>
  );
}

