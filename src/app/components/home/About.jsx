'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  Download,
  Mail,
  MapPin,
} from 'lucide-react';
import React, { useRef } from 'react';

// --- DATA CONSTANTS ---
const CORE_STATS = [
  { number: '8+', label: 'Years of Experience', description: 'We are a creative agency brands building insightful strategy, creating unique designs helping' },
  { number: '150+', label: 'Successful Projects', description: 'We are a creative agency brands building insightful strategy, creating unique designs helping' },
  { number: '98%', label: 'Client Satisfaction', description: 'We are a creative agency brands building insightful strategy, creating unique designs helping' }
];

const EXPERIENCE = [
  {
    company: 'Kawasaki Bangladesh',
    role: 'Senior Full Stack Developer',
    period: '2020 - Present',
    tech: ['React', 'Laravel', 'AWS'],
  },
  {
    company: 'Continental Motors',
    role: 'IT Manager & Lead Dev',
    period: '2018 - 2020',
    tech: ['PHP', 'WordPress', 'MySQL'],
  },
  {
    company: 'Chery Bangladesh',
    role: 'Lead Web Developer',
    period: '2016 - 2018',
    tech: ['HTML5', 'CSS3', 'JS'],
  }
];

const DEVELOPMENT_SERVICES = [
  { name: 'Front-End Development (React/Next.js)', level: 95 },
  { name: 'Back-End Development (Laravel/PHP)', level: 90 },
  { name: 'CMS & E-commerce (WordPress)', level: 92 },
  { name: 'API & Database Architecture', level: 88 },
];

// --- REUSABLE ANIMATED COMPONENTS ---

const SectionHeader = ({ children, inView, textColor = 'text-white' }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    {React.Children.map(children, child => 
        React.cloneElement(child, { className: `${child.props.className} ${textColor}` })
    )}
  </motion.div>
);

const StatColumn = ({ stat, index, inView }) => (
    <motion.div
        className="text-center px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
    >
        <h3 className="text-6xl font-bold text-black mb-4">{stat.number}</h3>
        <h4 className="text-xl font-bold text-black mb-4">{stat.label}</h4>
        <p className="text-gray-600 leading-relaxed">{stat.description}</p>
    </motion.div>
);

const ExperienceRow = ({ experience, index, inView }) => (
    <motion.div
        className="grid grid-cols-12 items-center gap-4 py-8 border-b border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
    >
        <div className="col-span-2 text-gray-500 font-medium">{experience.period.split(' - ')[0]}</div>
        <div className="col-span-10 md:col-span-6">
            <h3 className="text-3xl font-bold text-black mb-1">{experience.role}</h3>
            <div className="flex flex-wrap gap-x-4 text-sm text-gray-500">
                {experience.tech.map(t => <span key={t}>{t}</span>)}
            </div>
        </div>
        <div className="hidden md:block col-span-4 text-gray-500 text-right font-medium">{experience.company}</div>
    </motion.div>
);

const ServiceSkillBar = ({ service, index, inView }) => (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-black text-base uppercase tracking-wider">{service.name}</span>
        <span className="font-bold text-black text-base">{service.level}%</span>
      </div>
      <div className="h-0.5 bg-black/40 overflow-hidden">
        <motion.div
          className="h-full bg-black"
          initial={{ width: 0 }}
          animate={inView ? { width: `${service.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: "easeOut" }}
        />
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
        <div className="absolute right-0 top-0 w-1/2 z-10 -mt-20">
          <motion.div
            className="h-[60vh]"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&crop=faces" 
              alt="Ratan Mia - Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Main lime section */}
        <section ref={servicesRef} className="bg-accent-lime relative min-h-[70vh] overflow-visible">
          <motion.div 
            className="grid lg:grid-cols-2 min-h-[70vh]"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Left Column: Content on lime background */}
            <motion.div 
              className="text-black flex flex-col justify-center px-12 py-16 lg:px-16 xl:px-20 lg:py-20 relative"
              initial={{ opacity: 0, x: -30 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Passionate About Creating Quality Development
              </motion.h2>
              
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-lg lg:text-xl font-bold text-black mb-4">
                  We Love What We Do
                </h3>
                <p className="text-lg text-black/80 leading-relaxed max-w-lg mb-8">
                  We are a creative agency working with brands building insightful strategy, creating unique designs and crafting value
                </p>

                <h4 className="text-lg lg:text-xl font-bold text-black mb-4">
                  Why Work With Us
                </h4>
                <p className="text-lg text-black/80 leading-relaxed max-w-lg">
                  If you ask our clients what it's like working with us, they'll talk about how much we care about their success. For us, real relationships fuel real success. We love building brands
                </p>
              </motion.div>

              <div className="space-y-5 mb-16">
                {DEVELOPMENT_SERVICES.map((service, index) => (
                  <ServiceSkillBar
                    key={service.name}
                    service={service}
                    index={index}
                    inView={servicesInView}
                  />
                ))}
              </div>

              {/* Contact Info */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-black" />
                  <div>
                    <p className="text-sm text-black/60">Location</p>
                    <p className="text-black font-medium">Dhaka, BD 🇧🇩</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-black" />
                  <div>
                    <p className="text-sm text-black/60">Email</p>
                    <a href="mailto:ratanmiadev@gmail.com" className="text-black hover:text-black/70 transition-colors text-sm font-medium">
                      ratanmiadev@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Up Arrow - Bottom Right */}
              <motion.div 
                className="absolute bottom-8 right-8"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp className="w-6 h-6 text-accent-lime" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column: Space for bleeding image */}
            <div className="relative">
              {/* Empty space - image is positioned absolutely outside */}
            </div>
          </motion.div>
        </section>
      </div>

      {/* --- Stats Section --- */}
      <div ref={statsRef} className="py-32 lg:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 divide-x divide-gray-200">
                {CORE_STATS.map((stat, index) => (
                    <StatColumn key={stat.label} stat={stat} index={index} inView={statsInView} />
                ))}
            </div>
        </div>
      </div>

      {/* --- Experience Section --- */}
      <div ref={experienceRef} className="py-32 lg:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <SectionHeader inView={experienceInView} textColor="text-black">
                <h3 className="text-4xl lg:text-5xl font-bold mb-2">Professional Journey</h3>
                <p className="text-lg text-gray-500">Companies that shaped my expertise.</p>
            </SectionHeader>
            <div className="border-t border-gray-200">
                {EXPERIENCE.map((experience, index) => (
                    <ExperienceRow key={experience.company} experience={experience} index={index} inView={experienceInView} />
                ))}
            </div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div className="bg-black py-28">
        <motion.div ref={ctaRef} className="max-w-6xl mx-auto px-6 lg:px-8 bg-gray-800 p-10 lg:p-16 rounded-2xl text-center relative overflow-hidden border border-gray-700" initial={{ opacity: 0, y: 50 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's connect and build something amazing together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#contact" className="bg-accent-lime text-black font-semibold px-8 py-4 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-400/30 transition-all duration-300 inline-flex items-center justify-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Get In Touch</span><ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a href="/resume.pdf" className="border-2 border-gray-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-700 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Download CV</span><Download className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}