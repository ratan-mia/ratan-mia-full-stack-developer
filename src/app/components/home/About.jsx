'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
  Zap
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
  <div className="relative bg-gray-50 overflow-hidden" id="about-main">
    {/* Background Texture & Pattern */}
    <div className="absolute inset-0 opacity-40">
      {/* Dot Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-lime/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl"></div>
    </div>

    <section className="relative py-20 lg:py-28">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        variants={ANIMATION_VARIANTS.stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image with Badge */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            className="relative"
          >
            <div className="relative h-[600px] lg:h-[750px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              {/* Background Texture */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />
              
              <img
                src="/images/freelancer-working.jpg"
                alt="Professional developer workspace"
                className="w-full h-full object-cover relative z-10"
              />
              
              {/* Circular Badge Overlay - Enhanced */}
              <motion.div
                className="absolute bottom-8 left-8 w-48 h-48 bg-accent-lime rounded-full flex items-center justify-center shadow-2xl z-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              >
                <div className="text-center p-6">
                  <div className="text-black font-black text-xl uppercase tracking-wider leading-tight mb-2">
                    Full Stack
                  </div>
                  <div className="w-12 h-1 bg-black mx-auto mb-2"></div>
                  <div className="text-black font-black text-base uppercase tracking-wider leading-tight">
                    Developer
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
            <motion.div 
              className="inline-flex items-center gap-3 mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="w-5 h-5 text-black" />
              </motion.div>
              <span className="text-black font-extrabold text-sm uppercase tracking-widest">About Me</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Building Exceptional<br />
              <span className="relative inline-block">
                <span className="text-black">Web & Mobile</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-accent-lime -z-10"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span><br />
              <span className="text-gray-400">Experiences</span>
            </motion.h2>

            {/* Stats Section */}
            <motion.div 
              className="flex items-start gap-8 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {/* Years Experience */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-8xl lg:text-9xl font-black text-black leading-none mb-3"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  10<sup className="text-4xl">+</sup>
                </motion.div>
                <motion.div 
                  className="inline-block bg-accent-lime px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-black font-black text-xs uppercase tracking-wider">Years Of Experience</span>
                </motion.div>
              </motion.div>

              {/* Divider */}
              <motion.div 
                className="w-px h-40 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.8 }}
              ></motion.div>

              {/* Rating & Image */}
              <div className="space-y-5">
                {/* Team Image */}
                <motion.div 
                  className="w-36 h-36 rounded-full overflow-hidden border-4 border-accent-lime shadow-2xl hover:shadow-accent-lime/50 transition-all"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.9, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img
                    src="/images/about-image.jpg"
                    alt="Ratan Mia"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Stars & Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0 }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-accent-lime text-2xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.1 + i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <div className="text-black font-extrabold text-base">150+ Projects Delivered</div>
                  <div className="text-gray-600 font-semibold text-sm">50K+ Active Users</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0 }}
            >
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Hi, I'm <strong className="text-black font-bold">Ratan Mia</strong>, a passionate full-stack developer from Dhaka, Bangladesh 🇧🇩
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mt-4">
                I bring your ideas to life by crafting <span className="text-black font-bold relative inline-block">engaging, impactful digital experiences</span> using React Native, Next.js, and Laravel.
              </p>
            </motion.div>

            {/* Contact Info - Elegant Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div 
                className="flex items-center gap-4 p-5 rounded-2xl bg-accent-lime hover:bg-yellow-300 transition-all group overflow-hidden relative shadow-lg"
                whileHover={{ y: -6, scale: 1.03 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 right-2 w-20 h-20 rounded-full bg-black blur-2xl"></div>
                </div>
                
                <div className="relative z-10 w-14 h-14 rounded-xl bg-black/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-accent-lime" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs text-black/60 font-bold uppercase tracking-wide mb-1">Location</div>
                  <div className="text-black font-extrabold text-base">Dhaka, Bangladesh</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-5 rounded-2xl bg-black hover:bg-gray-900 transition-all group overflow-hidden relative shadow-lg"
                whileHover={{ y: -6, scale: 1.03 }}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.3 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute bottom-2 left-2 w-20 h-20 rounded-full bg-accent-lime blur-2xl"></div>
                </div>
                
                <div className="relative z-10 w-14 h-14 rounded-xl bg-accent-lime flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-black" />
                </div>
                <div className="relative z-10 flex-1 min-w-0">
                  <div className="text-xs text-accent-lime/60 font-bold uppercase tracking-wide mb-1">Email</div>
                  <a href="mailto:shorifull@gmail.com" className="text-accent-lime font-extrabold text-base hover:text-white transition-colors break-all">
                    shorifull@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-black text-accent-lime px-10 py-5 rounded-full font-extrabold text-lg hover:bg-accent-lime hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              <span>Let's Work Together</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
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