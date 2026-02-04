'use client';

import { motion, useInView } from 'framer-motion';
import {
    ArrowRight,
    Award,
    Download,
    Mail,
    MapPin,
    Target,
    Users
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

const CORE_STATS = [
  { 
    number: '10+', 
    label: 'Years of Experience', 
    description: 'Building robust, scalable applications with modern technologies and best practices across multiple industries.',
    icon: Award 
  },
  { 
    number: '150+', 
    label: 'Successful Projects', 
    description: 'Delivered end-to-end solutions from concept to deployment, helping businesses grow and succeed digitally.',
    icon: Target 
  },
  { 
    number: '98%', 
    label: 'Client Satisfaction', 
    description: 'Maintained exceptional relationships through clear communication, timely delivery, and ongoing support.',
    icon: Users 
  }
];

const EXPERIENCE = [
  {
    company: 'Kawasaki Bangladesh',
    role: 'Senior Full Stack Developer',
    period: '2020 - Present',
    tech: ['React', 'Laravel', 'AWS', 'MySQL'],
    description: 'Leading development of enterprise-level applications and managing cloud infrastructure.'
  },
  {
    company: 'Continental Motors',
    role: 'IT Manager & Lead Developer',
    period: '2018 - 2020',
    tech: ['PHP', 'WordPress', 'MySQL', 'Linux'],
    description: 'Managed IT operations while developing custom business solutions and team leadership.'
  },
  {
    company: 'Chery Bangladesh',
    role: 'Lead Web Developer',
    period: '2016 - 2018',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    description: 'Developed responsive websites and e-commerce platforms for automotive industry.'
  }
];

const DEVELOPMENT_SERVICES = [
  { name: 'Front-End Development (React/Next.js)', level: 95, color: 'bg-black' },
  { name: 'Back-End Development (Laravel/PHP)', level: 90, color: 'bg-black' },
  { name: 'E-commerce & CMS (Shopify/WordPress)', level: 92, color: 'bg-black' },
  { name: 'API & Database Architecture', level: 88, color: 'bg-black' },
];

// --- SECTION HEADER COMPONENT ---
const SectionHeader = ({ children, isInView, textColor = 'text-white' }) => (
  <motion.div
    className="text-center mb-12 lg:mb-16"
    variants={ANIMATION_VARIANTS.fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
  >
    {children}
  </motion.div>
);

// --- STAT COLUMN COMPONENT ---
const StatColumn = ({ stat, index, isInView }) => (
  <motion.div
    className="text-center px-4 sm:px-6 lg:px-8 group"
    variants={ANIMATION_VARIANTS.fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.2 + index * 0.15 }}
    whileHover={{ y: -8 }}
  >
    <motion.div
      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-accent-lime flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
      whileHover={{ rotate: 5 }}
    >
      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
    </motion.div>
    <motion.h3 
      className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-3 sm:mb-4"
      whileHover={{ scale: 1.05 }}
    >
      {stat.number}
    </motion.h3>
    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4 sm:mb-6">{stat.label}</h4>
    <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{stat.description}</p>
  </motion.div>
);

// --- EXPERIENCE ROW COMPONENT ---
const ExperienceRow = ({ experience, index, isInView }) => (
  <motion.div
    className="flex flex-col lg:grid lg:grid-cols-12 items-start lg:items-center gap-4 lg:gap-6 py-6 sm:py-8 lg:py-12 border-b border-gray-200 group hover:bg-gray-50/50 transition-colors duration-300 rounded-lg px-4 lg:px-6"
    variants={ANIMATION_VARIANTS.slideInLeft}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.2 + index * 0.15 }}
    whileHover={{ x: 8 }}
  >
    {/* Mobile Period at Top */}
    <div className="lg:hidden w-full mb-2">
      <div className="text-accent-lime font-bold text-base">
        {experience.period}
      </div>
    </div>

    {/* Desktop Period Column */}
    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
      <div className="text-accent-lime font-bold text-lg group-hover:scale-105 transition-transform">
        {experience.period.split(' - ')[0]}
      </div>
      <div className="text-gray-500 text-sm">
        {experience.period.split(' - ')[1]}
      </div>
    </div>

    {/* Main Content */}
    <div className="w-full lg:col-span-6 xl:col-span-7">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-accent-lime transition-colors">
        {experience.role}
      </h3>
      <div className="lg:hidden text-black font-semibold text-base mb-2">
        {experience.company}
      </div>
      <p className="text-gray-600 mb-3 text-sm sm:text-base leading-relaxed">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.tech.map(tech => (
          <span 
            key={tech}
            className="px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-accent-lime hover:text-black transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Desktop Company Column */}
    <div className="hidden lg:block lg:col-span-3 xl:col-span-3 text-left xl:text-right">
      <div className="text-black font-bold text-lg group-hover:text-accent-lime transition-colors">
        {experience.company}
      </div>
      <div className="text-gray-500 text-sm">Company</div>
    </div>
  </motion.div>
);

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
    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
    variants={ANIMATION_VARIANTS.fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.6 }}
  >
    <motion.div 
      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-black/10 hover:bg-black/20 transition-colors group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent-lime" />
      </div>
      <div>
        <p className="text-xs sm:text-sm text-black/60 font-medium uppercase tracking-wide">Location</p>
        <p className="text-black font-bold text-base sm:text-lg">Dhaka, Bangladesh 🇧🇩</p>
      </div>
    </motion.div>
    
    <motion.div 
      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-black/10 hover:bg-black/20 transition-colors group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent-lime" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs sm:text-sm text-black/60 font-medium uppercase tracking-wide">Email</p>
        <a 
          href="mailto:shorifull@gmail.com" 
          className="text-black hover:text-black/70 transition-colors font-bold text-base sm:text-lg truncate block"
        >
          shorifull@gmail.com
        </a>
      </div>
    </motion.div>
  </motion.div>
);

// --- MAIN ABOUT SECTION ---
const MainAboutSection = ({ isInView }) => (
  <div className="relative" id="about-main">
    {/* Desktop Image - Bleeding Outside */}
    <div className="hidden lg:block absolute right-0 top-0 w-1/2 z-10 -mt-20">
      <motion.div
        className="h-[60vh] rounded-l-3xl overflow-hidden shadow-2xl"
        variants={ANIMATION_VARIANTS.fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1.2 }}
      >
        <img 
          src="/images/about-image.jpg" 
          alt="Ratan Mia - Full Stack Developer"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-accent-lime/10" />
      </motion.div>
    </div>

    {/* Main Content Section */}
    <section className="contact-section relative min-h-screen lg:min-h-[70vh] overflow-visible">
      <motion.div 
        className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen lg:min-h-[70vh]"
        variants={ANIMATION_VARIANTS.stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Column: Content */}
        <motion.div 
          className="text-black flex flex-col justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 sm:py-12 md:py-16 lg:py-20 relative"
          variants={ANIMATION_VARIANTS.fadeUp}
        >
          {/* Section Label */}
          <motion.div
            className="inline-flex items-center gap-4 mb-6 sm:mb-8"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            <div className="w-8 sm:w-12 h-1 bg-black" />
            <span className="text-black/70 font-semibold text-xs sm:text-sm uppercase tracking-wider">About Me</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 sm:mb-8"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            Passionate About Creating
            <br />
            <span className="text-black/80">Quality Development</span>
          </motion.h2>
          
          {/* Content Sections */}
          <motion.div
            className="mb-6 sm:mb-8 space-y-6 sm:space-y-8"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">
                IBM Certified Developer
              </h3>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-lg">
                Specializing in full-stack development with over 8 years of experience building scalable applications using modern technologies and industry best practices.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">
                Why Choose My Services
              </h4>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-lg">
                I focus on delivering robust, maintainable solutions that scale with your business. From e-commerce platforms to enterprise applications, I bring technical expertise and strategic thinking to every project.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="space-y-4 sm:space-y-6 mb-6 sm:mb-8"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            {DEVELOPMENT_SERVICES.map((service, index) => (
              <ServiceSkillBar
                key={service.name}
                service={service}
                index={index}
                inView={isInView}
              />
            ))}
          </motion.div>

          {/* Contact Info */}
          <ContactInfo isInView={isInView} />
        </motion.div>

        {/* Right Column: Mobile Image */}
        <div className="lg:hidden relative">
          <motion.div 
            className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden mx-4 sm:mx-6 md:mx-8 my-6 sm:my-8"
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  </div>
);

// --- STATS SECTION ---
const StatsSection = ({ isInView }) => (
  <div className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-gray-200"
        variants={ANIMATION_VARIANTS.stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {CORE_STATS.map((stat, index) => (
          <StatColumn key={stat.label} stat={stat} index={index} isInView={isInView} />
        ))}
      </motion.div>
    </div>
  </div>
);

// --- EXPERIENCE SECTION ---
const ExperienceSection = ({ isInView }) => (
  <div className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader isInView={isInView} textColor="text-black">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-black">
          Professional Journey
        </h3>
        <p className="text-lg sm:text-xl text-gray-500">
          Companies and roles that shaped my expertise in full-stack development.
        </p>
      </SectionHeader>
      
      <motion.div 
        className="border-t border-gray-200 mt-8 sm:mt-12 lg:mt-16"
        variants={ANIMATION_VARIANTS.stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {EXPERIENCE.map((experience, index) => (
          <ExperienceRow 
            key={experience.company} 
            experience={experience} 
            index={index} 
            isInView={isInView} 
          />
        ))}
      </motion.div>
    </div>
  </div>
);

// --- CTA SECTION ---
const CTASection = ({ isInView }) => (
  <div className="bg-black py-16 sm:py-20 lg:py-24 xl:py-32">
    <motion.div 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="bg-gray-800 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl text-center relative overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Ready to Collaborate?
          </motion.h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and build something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <motion.a 
              href="#contact" 
              className="bg-accent-lime text-black font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-400/30 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
            <motion.a 
              href="/resume.pdf" 
              className="border-2 border-gray-500 text-white font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl hover:bg-gray-700 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Resume</span>
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
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const experienceRef = useRef(null);
  const ctaRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const experienceInView = useInView(experienceRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  return (
    <section ref={sectionRef} id="about" className="bg-black">
      {/* Main About Section */}
      <div ref={servicesRef}>
        <MainAboutSection isInView={servicesInView} />
      </div>

      {/* Stats Section */}
      <div ref={statsRef}>
        <StatsSection isInView={statsInView} />
      </div>

      {/* Experience Section */}
      <div ref={experienceRef}>
        <ExperienceSection isInView={experienceInView} />
      </div>

      {/* CTA Section */}
      <div ref={ctaRef}>
        <CTASection isInView={ctaInView} />
      </div>
    </section>
  );
}