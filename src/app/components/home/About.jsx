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
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-accent-lime rounded-full flex items-center justify-center">
                <span className="text-black font-black text-base">⚡</span>
              </div>
              <span className="text-black font-extrabold text-sm uppercase tracking-widest">About Me</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight">
              Building Exceptional<br />
              <span className="text-accent-lime">Web & Mobile</span><br />
              Experiences
            </h2>

            {/* Stats Section */}
            <div className="flex items-start gap-8 py-4">
              {/* Years Experience */}
              <div className="flex-shrink-0">
                <div className="text-8xl lg:text-9xl font-black text-black leading-none mb-3">
                  10<sup className="text-4xl">+</sup>
                </div>
                <div className="inline-block bg-accent-lime px-6 py-2 rounded-full">
                  <span className="text-black font-black text-xs uppercase tracking-wider">Years Of Experience</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-40 bg-gray-300"></div>

              {/* Rating & Image */}
              <div className="space-y-5">
                {/* Team Image */}
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-accent-lime shadow-2xl">
                  <img
                    src="/images/about-image.jpg"
                    alt="Ratan Mia"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stars & Rating */}
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-lime text-2xl">★</span>
                    ))}
                  </div>
                  <div className="text-black font-extrabold text-base">150+ Projects Delivered</div>
                  <div className="text-gray-600 font-semibold text-sm">50K+ Active Users</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Hi, I'm <strong className="text-black font-bold">Ratan Mia</strong>, a passionate full-stack developer from Dhaka, Bangladesh. I bring your ideas to life by crafting engaging, impactful digital experiences using React Native, Next.js, and Laravel.
            </p>

            {/* Contact Info - Elegant Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div 
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-accent-lime transition-all"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-accent-lime" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Location</div>
                  <div className="text-black font-extrabold text-base">Dhaka, Bangladesh</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-accent-lime transition-all"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-accent-lime" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Email</div>
                  <a href="mailto:shorifull@gmail.com" className="text-black font-extrabold text-base hover:text-accent-lime transition-colors break-all">
                    shorifull@gmail.com
                  </a>
                </div>
              </motion.div>
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

// --- MAIN ABOUT COMPONENT ---
export default function About() {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="about" className="bg-white">
      {/* Main About Section */}
      <div ref={servicesRef}>
        <MainAboutSection isInView={servicesInView} />
      </div>
    </section>
  );
}