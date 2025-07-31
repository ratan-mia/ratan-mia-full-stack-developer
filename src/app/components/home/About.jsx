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
import React, { useRef } from 'react';

// --- DATA CONSTANTS ---
const CORE_STATS = [
  { 
    number: '8+', 
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

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// --- REUSABLE ANIMATED COMPONENTS ---

const SectionHeader = ({ children, inView, textColor = 'text-white' }) => (
  <motion.div
    className="text-center mb-16 lg:mb-20"
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
  >
    {React.Children.map(children, child => 
        React.cloneElement(child, { className: `${child.props.className} ${textColor}` })
    )}
  </motion.div>
);

const StatColumn = ({ stat, index, inView }) => (
  <motion.div
    className="text-center px-6 lg:px-8 group"
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ 
      delay: 0.2 + index * 0.15, 
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ y: -8 }}
  >
    <motion.div
      className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent-lime flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
      whileHover={{ rotate: 5 }}
    >
      <stat.icon className="w-8 h-8 text-black" />
    </motion.div>
    <motion.h3 
      className="text-5xl lg:text-6xl font-extrabold text-black mb-4"
      whileHover={{ scale: 1.05 }}
    >
      {stat.number}
    </motion.h3>
    <h4 className="text-xl lg:text-2xl font-bold text-black mb-6">{stat.label}</h4>
    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">{stat.description}</p>
  </motion.div>
);

const ExperienceRow = ({ experience, index, inView }) => (
  <motion.div
    className="grid grid-cols-12 items-center gap-4 lg:gap-6 py-8 lg:py-12 border-b border-gray-200 group hover:bg-gray-50/50 transition-colors duration-300 rounded-lg px-4 lg:px-6"
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ 
      delay: 0.2 + index * 0.15, 
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ x: 8 }}
  >
    <div className="col-span-3 lg:col-span-2">
      <div className="text-accent-lime font-bold text-lg group-hover:scale-105 transition-transform">
        {experience.period.split(' - ')[0]}
      </div>
      <div className="text-gray-500 text-sm">
        {experience.period.split(' - ')[1]}
      </div>
    </div>
    <div className="col-span-9 lg:col-span-6">
      <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-accent-lime transition-colors">
        {experience.role}
      </h3>
      <p className="text-gray-600 mb-3 text-sm lg:text-base">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.tech.map(tech => (
          <span 
            key={tech}
            className="px-3 py-1 text-xs lg:text-sm bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-accent-lime hover:text-black transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="hidden lg:block col-span-4 text-right">
      <div className="text-black font-bold text-lg group-hover:text-accent-lime transition-colors">
        {experience.company}
      </div>
      <div className="text-gray-500 text-sm">Company</div>
    </div>
  </motion.div>
);

const ServiceSkillBar = ({ service, index, inView }) => (
  <motion.div
    className="mb-8 group"
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ 
      delay: 0.5 + index * 0.1, 
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ x: 4 }}
  >
    <div className="flex justify-between items-center mb-4">
      <span className="font-bold text-black text-base lg:text-lg uppercase tracking-wider group-hover:text-black/80 transition-colors">
        {service.name}
      </span>
      <motion.span 
        className="font-bold text-black text-lg"
        whileHover={{ scale: 1.1 }}
      >
        {service.level}%
      </motion.span>
    </div>
    <div className="h-2 bg-black/20 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-black rounded-full relative overflow-hidden"
        initial={{ width: 0 }}
        animate={inView ? { width: `${service.level}%` } : {}}
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
      
      {/* --- Main About Section (Full Width Like Skills) --- */}
      <div className="relative" id="about-main">
        {/* Image that bleeds outside the main section - only top */}
        <div className="absolute right-0 top-0 w-1/2 z-10 -mt-20 hidden lg:block">
          <motion.div
            className="h-[60vh] rounded-l-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 60, scale: 1.1 }}
            animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&crop=faces" 
              alt="Ratan Mia - Full Stack Developer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-accent-lime/10" />
          </motion.div>
        </div>

        {/* Main lime section */}
        <section ref={servicesRef} className="bg-accent-lime relative min-h-[70vh] overflow-visible">
          <motion.div 
            className="grid lg:grid-cols-2 min-h-[70vh]"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {/* Left Column: Content on lime background */}
            <motion.div 
              className="text-black flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-20 lg:py-20 relative"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center gap-4 mb-8"
                variants={itemVariants}
              >
                <div className="w-12 h-1 bg-black" />
                <span className="text-black/70 font-semibold text-sm uppercase tracking-wider">About Me</span>
              </motion.div>

              <motion.h2 
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8"
                variants={itemVariants}
              >
                Passionate About Creating
                <br />
                <span className="text-black/80">Quality Development</span>
              </motion.h2>
              
              <motion.div
                className="mb-12 space-y-8"
                variants={itemVariants}
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-4">
                    IBM Certified Developer
                  </h3>
                  <p className="text-lg text-black/80 leading-relaxed max-w-lg">
                    Specializing in full-stack development with over 8 years of experience building scalable applications using modern technologies and industry best practices.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-black mb-4">
                    Why Choose My Services
                  </h4>
                  <p className="text-lg text-black/80 leading-relaxed max-w-lg">
                    I focus on delivering robust, maintainable solutions that scale with your business. From e-commerce platforms to enterprise applications, I bring technical expertise and strategic thinking to every project.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="space-y-6 mb-16"
                variants={itemVariants}
              >
                {DEVELOPMENT_SERVICES.map((service, index) => (
                  <ServiceSkillBar
                    key={service.name}
                    service={service}
                    index={index}
                    inView={servicesInView}
                  />
                ))}
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/10 hover:bg-black/20 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-accent-lime" />
                  </div>
                  <div>
                    <p className="text-sm text-black/60 font-medium uppercase tracking-wide">Location</p>
                    <p className="text-black font-bold text-lg">Dhaka, Bangladesh 🇧🇩</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/10 hover:bg-black/20 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-accent-lime" />
                  </div>
                  <div>
                    <p className="text-sm text-black/60 font-medium uppercase tracking-wide">Email</p>
                    <a 
                      href="mailto:ratanmiadev@gmail.com" 
                      className="text-black hover:text-black/70 transition-colors font-bold text-lg"
                    >
                      ratanmiadev@gmail.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>


            </motion.div>

            {/* Right Column: Space for bleeding image */}
            <div className="relative lg:hidden">
              {/* Mobile image */}
              <div className="h-64 w-full rounded-2xl overflow-hidden mx-8 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces" 
                  alt="Ratan Mia - Full Stack Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* --- Stats Section --- */}
      <div ref={statsRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-gray-200"
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {CORE_STATS.map((stat, index) => (
              <StatColumn key={stat.label} stat={stat} index={index} inView={statsInView} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Experience Section --- */}
      <div ref={experienceRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader inView={experienceInView} textColor="text-black">
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">Professional Journey</h3>
            <p className="text-xl text-gray-500">Companies and roles that shaped my expertise in full-stack development.</p>
          </SectionHeader>
          <motion.div 
            className="border-t border-gray-200 mt-16"
            variants={containerVariants}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
          >
            {EXPERIENCE.map((experience, index) => (
              <ExperienceRow 
                key={experience.company} 
                experience={experience} 
                index={index} 
                inView={experienceInView} 
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div className="bg-black py-24 lg:py-32">
        <motion.div 
          ref={ctaRef} 
          className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8"
          initial={{ opacity: 0, y: 60 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="bg-gray-800 p-12 lg:p-16 rounded-3xl text-center relative overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Ready to Collaborate?
              </motion.h3>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and build something exceptional together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a 
                  href="#contact" 
                  className="bg-accent-lime text-black font-bold px-10 py-4 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-400/30 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="/resume.pdf" 
                  className="border-2 border-gray-500 text-white font-bold px-10 py-4 rounded-xl hover:bg-gray-700 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}