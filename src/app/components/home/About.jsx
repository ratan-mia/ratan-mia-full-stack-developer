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
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        variants={ANIMATION_VARIANTS.stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with Badge */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/freelancer-working.jpg"
                alt="Professional developer workspace"
                className="w-full h-full object-cover"
              />
              
              {/* Circular Badge Overlay */}
              <motion.div
                className="absolute bottom-8 left-8 w-40 h-40 bg-accent-lime rounded-full flex items-center justify-center shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              >
                <div className="text-center">
                  <div className="text-black font-black text-sm uppercase tracking-wider leading-tight">
                    Full Stack<br />Developer
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            className="space-y-8"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-6 bg-accent-lime rounded-full flex items-center justify-center">
                <span className="text-black font-black text-xs">⚡</span>
              </div>
              <span className="text-black font-bold text-sm uppercase tracking-widest">About Me</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black leading-[1.1]">
              Web & Mobile  <span className="text-accent-lime">Experiences</span>
             
            </h2>

            {/* Stats Section */}
            <div className="flex items-start gap-8">
              {/* Years Experience */}
              <div className="flex-shrink-0">
                <div className="text-7xl lg:text-8xl font-black text-black leading-none mb-2">
                  10<sup className="text-3xl">+</sup>
                </div>
                <div className="text-accent-lime font-bold text-sm uppercase tracking-wide">
                  Years Of Experience
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-32 bg-gray-300"></div>

              {/* Rating & Image */}
              <div className="space-y-4">
                {/* Team Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/about-image.jpg"
                    alt="Ratan Mia"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stars & Rating */}
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-lime text-xl">★</span>
                    ))}
                  </div>
                  <div className="text-black font-bold text-sm">150+ Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi, I'm <strong className="text-black">Ratan Mia</strong>, a passionate full-stack developer from Dhaka, Bangladesh. I bring your ideas to life by crafting engaging, impactful digital experiences using React Native, Next.js, and Laravel. With 10+ years of experience and 50,000+ active users across my projects.
            </p>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <MapPin className="w-5 h-5 text-accent-lime flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">Location</div>
                  <div className="text-black font-bold text-sm">Dhaka, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <Mail className="w-5 h-5 text-accent-lime flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">Email</div>
                  <div className="text-black font-bold text-sm break-all">shorifull@gmail.com</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all duration-300"
              whileHover={{ scale: 1.05, x: 4 }}
            >
              <ArrowRight className="w-5 h-5 text-accent-lime" />
              <span>Let's Work Together</span>
            </motion.a>
          </motion.div>
        </div>
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