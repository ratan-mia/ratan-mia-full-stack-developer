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
  <div className="relative bg-gradient-to-br from-white via-gray-50 to-white" id="about-main">
    {/* Decorative Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 -right-20 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl" />
    </div>

    {/* Desktop Image - Improved positioning */}
    <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full z-10">
      <motion.div
        className="sticky top-24 h-[80vh] ml-auto mr-8 xl:mr-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        variants={ANIMATION_VARIANTS.fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1.2 }}
        style={{ maxWidth: '600px' }}
      >
        <img 
          src="/images/about-image.jpg"
          alt="Ratan Mia - Full Stack Developer"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Floating badges on image */}
        <div className="absolute bottom-8 left-8 right-8 space-y-3">
          <div className="bg-black/80 backdrop-blur-md text-accent-lime px-5 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-lg">
            <span className="text-lg">🏆</span>
            <span>Top Rated Plus on Upwork</span>
          </div>
          <div className="bg-accent-lime/95 backdrop-blur-md text-black px-5 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-lg">
            <span className="text-lg">⚡</span>
            <span>100% Job Success Score</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Main Content Section */}
    <section className="relative py-16 sm:py-20 lg:py-24">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={ANIMATION_VARIANTS.stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Column: Content */}
          <motion.div 
            className="flex flex-col justify-center relative z-20"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            {/* Section Label */}
            <motion.div
              className="inline-flex items-center gap-3 mb-6 sm:mb-8"
              variants={ANIMATION_VARIANTS.fadeUp}
            >
              <div className="w-10 sm:w-12 h-1 bg-accent-lime rounded-full" />
              <span className="text-black/70 font-bold text-xs sm:text-sm uppercase tracking-widest">About Me</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 sm:mb-8"
              variants={ANIMATION_VARIANTS.fadeUp}
            >
              Building Exceptional
              <br />
              <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">Web & Mobile Experiences</span>
            </motion.h2>
            
            {/* Personal Introduction */}
            <motion.div
              className="space-y-6 sm:space-y-8 mb-8 sm:mb-10"
              variants={ANIMATION_VARIANTS.fadeUp}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 flex items-center gap-3">
                  <span className="text-3xl">👋</span>
                  <span>Hi, I'm Ratan Mia</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  A passionate full stack developer from Dhaka, Bangladesh, specializing in <strong className="text-black">React Native mobile apps</strong>, <strong className="text-black">Next.js web applications</strong>, and <strong className="text-black">Laravel backend systems</strong>. I started coding at 16 and haven't stopped building since.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent-lime/10 to-accent-lime/5 rounded-2xl p-6 sm:p-8 border-2 border-accent-lime/20 hover:border-accent-lime/40 transition-colors">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-5 flex items-center gap-3">
                  <span className="text-3xl">💡</span>
                  <span>What I Bring to Your Project</span>
                </h4>
                <ul className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-3 group">
                    <span className="text-accent-lime text-2xl font-black mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                    <span><strong className="text-black">10+ years</strong> of hands-on experience building production-ready apps</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-accent-lime text-2xl font-black mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                    <span><strong className="text-black">Cross-platform expertise</strong> in mobile (iOS/Android) and web development</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-accent-lime text-2xl font-black mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                    <span><strong className="text-black">End-to-end solutions</strong> from concept to deployment and ongoing support</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-accent-lime text-2xl font-black mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                    <span><strong className="text-black">Real results</strong> with 50K+ app users and 150+ successful projects delivered</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Info */}
            <ContactInfo isInView={isInView} />
          </motion.div>

          {/* Right Column: Mobile Image */}
          <div className="lg:hidden mt-12">
            <motion.div 
              className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              variants={ANIMATION_VARIANTS.fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <img 
                src="/images/about-image.jpg"
                alt="Ratan Mia - Full Stack Developer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating badges */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="bg-black/80 backdrop-blur-md text-accent-lime px-4 py-2.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-lg">
                  <span className="text-lg">🏆</span>
                  <span>Top Rated Plus</span>
                </div>
                <div className="bg-accent-lime/95 backdrop-blur-md text-black px-4 py-2.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-lg">
                  <span className="text-lg">⚡</span>
                  <span>100% Job Success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  </div>
);

// --- CTA SECTION ---
const CTASection = ({ isInView }) => (
  <div className="bg-black py-12 sm:py-16">
    <motion.div 
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-10 lg:p-12 rounded-3xl text-center relative overflow-hidden border-2 border-gray-700 hover:border-accent-lime/50 transition-all group">
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
    <section ref={sectionRef} id="about" className="bg-black">
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