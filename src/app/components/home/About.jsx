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
    className="space-y-4"
    variants={ANIMATION_VARIANTS.fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.6 }}
  >
    <motion.div
      className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-md border-2 border-gray-100 hover:border-accent-lime/50 hover:shadow-lg transition-all group"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
        <MapPin className="w-6 h-6 text-accent-lime" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-2">Location</p>
        <p className="text-black font-extrabold text-lg leading-relaxed">Dhaka, Bangladesh 🇧🇩</p>
      </div>
    </motion.div>

    <motion.div
      className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-md border-2 border-gray-100 hover:border-accent-lime/50 hover:shadow-lg transition-all group"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
        <Mail className="w-6 h-6 text-accent-lime" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-2">Email</p>
        <a
          href="mailto:shorifull@gmail.com"
          className="text-black hover:text-accent-lime transition-colors font-extrabold text-lg block break-all"
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
        {/* Section Header - Bold & Elegant */}
        <motion.div
          className="mb-16"
          variants={ANIMATION_VARIANTS.fadeUp}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-accent-lime rounded-full" />
            <span className="text-black/70 font-bold text-sm uppercase tracking-widest">About Me</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black mb-8 leading-[1.1] tracking-tight">
            Building Digital Products<br />
            That <span className="text-accent-lime">Drive Results</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl leading-relaxed font-light">
            Full-stack developer with <strong className="font-bold text-black">10+ years of experience</strong> creating scalable, high-performance web and mobile applications that deliver measurable business impact
          </p>
        </motion.div>

        {/* Main Content Grid - Bold Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Main Content - Larger Column */}
          <motion.div
            className="lg:col-span-7"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            {/* Introduction - Bold Typography */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-accent-lime rounded-full" />
                <p className="text-2xl sm:text-3xl font-bold text-black leading-tight mb-6 pl-6">
                  Hi, I'm Ratan Mia
                </p>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                A passionate full-stack developer based in <strong className="text-black font-semibold">Dhaka, Bangladesh</strong>, specializing in building exceptional digital experiences that combine beautiful design with powerful functionality.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                I started coding at 16 and have since delivered <strong className="text-black font-bold">150+ successful projects</strong> reaching over <strong className="text-black font-bold">50,000 active users</strong>. My expertise spans React Native mobile applications, Next.js web platforms, and Laravel backend systems.
              </p>

              {/* CTA Button */}
              <motion.div 
                className="pt-8"
                whileHover={{ scale: 1.02 }}
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 bg-accent-lime text-black px-8 py-5 font-extrabold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Sidebar - Contact */}
          <motion.div
            className="lg:col-span-5"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            <div className="lg:sticky lg:top-8 space-y-8">
              <ContactInfo isInView={isInView} />
              
              {/* Additional Info Card */}
              <div className="bg-black text-white p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">Why Choose Me?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-sm font-black">✓</span>
                    </div>
                    <span className="text-gray-300 leading-relaxed">Clean, maintainable code that scales with your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-sm font-black">✓</span>
                    </div>
                    <span className="text-gray-300 leading-relaxed">On-time delivery with attention to detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-sm font-black">✓</span>
                    </div>
                    <span className="text-gray-300 leading-relaxed">Ongoing support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
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