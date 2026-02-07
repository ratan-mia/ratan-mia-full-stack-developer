'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  MapPin
} from 'lucide-react';
import { useRef } from 'react';

// --- CONSTANTS ---
const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }
};

const DEVELOPMENT_SERVICES = [
  { name: 'Mobile App Development (React Native)', level: 95, color: 'bg-black' },
  { name: 'Front-End Development (React/Next.js)', level: 95, color: 'bg-black' },
  { name: 'Back-End Development (Laravel/Node.js)', level: 90, color: 'bg-black' },
  { name: 'E-commerce Solutions & API Integration', level: 92, color: 'bg-black' },
];

// --- SERVICE SKILL BAR COMPONENT ---
const ServiceSkillBar = ({ service, index, isInView }) => (
  <motion.div
    className="mb-6 sm:mb-8 group"
    variants={ANIMATION_VARIANTS.slideInLeft}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.5 + index * 0.1 }}
    whileHover={{ x: 4 }}
  >
    <div className="flex justify-between items-center mb-3 sm:mb-4">
      <span className="font-bold text-black text-sm sm:text-base lg:text-lg uppercase tracking-wider group-hover:text-black/80 transition-colors">
        {service.name}
      </span>
      <motion.span 
        className="font-bold text-black text-base sm:text-lg"
        whileHover={{ scale: 1.1 }}
      >
        {service.level}%
      </motion.span>
    </div>
    <div className="h-2 bg-black/20 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-black rounded-full relative overflow-hidden"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${service.level}%` } : {}}
        transition={{ 
          duration: 1.5, 
          delay: 0.6 + index * 0.15, 
          ease: "easeOut" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </motion.div>
    </div>
  </motion.div>
);

// --- CONTACT INFO COMPONENT ---
const ContactInfo = ({ isInView }) => (
  <motion.div 
    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
    variants={ANIMATION_VARIANTS.fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.6 }}
  >
    <motion.div 
      className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white shadow-md border-2 border-gray-100 hover:border-accent-lime/50 hover:shadow-lg transition-all group"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
        <MapPin className="w-6 h-6 text-accent-lime" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Location</p>
        <p className="text-black font-extrabold text-base sm:text-lg truncate">Dhaka, Bangladesh 🇧🇩</p>
      </div>
    </motion.div>
    
    <motion.div 
      className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white shadow-md border-2 border-gray-100 hover:border-accent-lime/50 hover:shadow-lg transition-all group"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
        <Mail className="w-6 h-6 text-accent-lime" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Email</p>
        <a 
          href="mailto:shorifull@gmail.com" 
          className="text-black hover:text-accent-lime transition-colors font-extrabold text-base sm:text-lg truncate block"
        >
          shorifull@gmail.com
        </a>
      </div>
    </motion.div>
  </motion.div>
);

// --- MAIN ABOUT SECTION ---
const MainAboutSection = ({ isInView }) => (
  <div className="relative bg-white" id="about-main">
    <section className="relative py-20">
      <motion.div 
        className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8"
        variants={ANIMATION_VARIANTS.stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Top Section - Label & Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Simple Text Content */}
          <motion.div
            className="space-y-6"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-4">
              WHO WE ARE
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-black">Ratan Mia</strong> – a passionate full stack developer from Dhaka, Bangladesh. I started coding at 16 and haven't stopped building since.
              </p>
              <p>
                I specialize in <strong className="text-black">React Native mobile apps</strong>, <strong className="text-black">Next.js web applications</strong>, and <strong className="text-black">Laravel backend systems</strong>.
              </p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <span><strong className="text-black">10+ years</strong> building production-ready apps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <span><strong className="text-black">Cross-platform expertise</strong> in iOS/Android & web</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <span><strong className="text-black">End-to-end solutions</strong> from concept to deployment</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-6">
              <ContactInfo isInView={isInView} />
            </div>
          </motion.div>

          {/* Right Column - Main Heading */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Building Exceptional <span className="text-accent-lime">Web & Mobile</span> Experiences for Entrepreneurs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I leverage digital technologies to achieve specific business goals – creating scalable solutions that drive real results for my clients.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section - Stats & Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Years of Experience - Simple */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-6xl lg:text-7xl font-bold text-black leading-none mb-3">
              10<sup className="text-3xl">+</sup>
            </div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">
              Years Of<br />Experience
            </div>
          </motion.div>

          {/* Images & Geometric Element */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
            {/* First Image */}
            <motion.div
              className="sm:col-span-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/freelancer-working.jpg"
                  alt="Professional developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Geometric Element */}
            <motion.div
              className="sm:col-span-2 flex items-center justify-center"
              initial={{ opacity: 0, rotate: -45 }}
              animate={isInView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 relative">
                <div className="absolute inset-0 bg-accent-lime transform rotate-45 origin-center" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black transform rotate-45 origin-bottom-right" />
              </div>
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="sm:col-span-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/about-image.jpg"
                  alt="Ratan Mia - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12 flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-accent-lime text-black px-8 py-4 font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>START THE JOURNEY</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  </div>
);

// --- CTA SECTION ---
const CTASection = ({ isInView }) => (
  <div className="bg-white py-12 sm:py-16">
    <motion.div 
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="bg-gradient-to-br from-black to-gray-900 p-8 sm:p-10 lg:p-12 rounded-3xl text-center relative overflow-hidden border-2 border-gray-200 hover:border-accent-lime/50 transition-all group">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            Ready to Build Something <span className="text-accent-lime">Amazing?</span>
          </motion.h3>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with clean code and exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.a 
              href="#contact" 
              className="w-full sm:w-auto bg-accent-lime text-black font-extrabold px-8 py-3 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="/portfolio" 
              className="w-full sm:w-auto border-2 border-gray-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-700 hover:border-accent-lime/50 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Portfolio</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

// --- MAIN ABOUT COMPONENT ---
export default function About() {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  return (
    <section ref={sectionRef} id="about" className="bg-white">
      {/* Main About Section */}
      <div ref={servicesRef}>
        <MainAboutSection isInView={servicesInView} />
      </div>

      {/* CTA Section */}
      <div ref={ctaRef}>
        <CTASection isInView={ctaInView} />
      </div>
    </section>
  );
}