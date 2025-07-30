'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Calendar,
  Download,
  Globe,
  Mail,
  MapPin,
  Users
} from 'lucide-react';
import { useRef } from 'react';

// --- DATA CONSTANTS ---
const CORE_STATS = [
  { icon: Award, number: '150+', label: 'Projects Done' },
  { icon: Calendar, number: '8+', label: 'Years of Code' },
  { icon: Globe, number: '25+', label: 'Countries Served' },
  { icon: Users, number: '98%', label: 'Client Satisfaction' }
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

const SectionHeader = ({ children, inView }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const StatCard = ({ stat, index, inView }) => (
  <motion.div
    className="text-center p-6 bg-gray-800 border border-gray-700 rounded-2xl
               hover:-translate-y-2 hover:border-accent-lime transition-all duration-300 group"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-accent-lime mb-3"><stat.icon className="w-8 h-8 mx-auto" /></div>
    <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
    <div className="text-sm text-gray-400">{stat.label}</div>
  </motion.div>
);

const ExperienceCard = ({ experience, index, inView }) => (
    <motion.div
        className="bg-gray-800 border border-gray-700 rounded-2xl p-6 h-full flex flex-col
                   hover:-translate-y-1 hover:border-accent-orange transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.15, duration: 0.5 }}
    >
        <h4 className="text-xl font-bold text-white mb-1">{experience.role}</h4>
        <h5 className="text-accent-orange font-semibold mb-2">{experience.company}</h5>
        <span className="text-sm text-gray-400 mb-4 block">{experience.period}</span>
        <div className="flex flex-wrap gap-2 mt-auto">
            {experience.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-900 text-accent-lime text-xs font-medium rounded-lg">
                    {tech}
                </span>
            ))}
        </div>
    </motion.div>
);

const ServiceSkillBar = ({ service, index, inView }) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15 + 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center mb-2 font-semibold">
        <span className="text-gray-300">{service.name}</span>
        <span className="text-accent-lime">{service.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent-lime rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${service.level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.15 + 0.5, ease: "easeOut" }}
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
      {/* --- Services & Info Section (Full Width) --- */}
      <div className="w-full bg-gray-900 py-32 lg:py-40">
        <motion.div 
            ref={servicesRef} 
            className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-px bg-gray-800 rounded-2xl overflow-hidden border border-gray-700" 
            initial={{ opacity: 0, y: 50 }} 
            animate={servicesInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left Column: Image */}
          <div className="relative h-[600px] lg:h-auto">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&crop=faces" alt="Ratan Mia" className="w-full h-full object-cover object-center" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
          {/* Right Column: Content */}
          <div className="bg-gray-900 flex flex-col justify-center p-12 lg:p-16">
            <motion.h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
              Meet <span className="text-accent-lime">Ratan</span>
            </motion.h2>
            <motion.p className="text-lg text-gray-300 leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35, duration: 0.5 }}>
              A full-stack developer crafting high-performance web applications that drive business growth.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent-lime" /><div><p className="text-sm text-gray-400">Location</p><p className="text-white font-medium">Dhaka, BD 🇧🇩</p></div></div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent-lime" /><div><p className="text-sm text-gray-400">Email</p><a href="mailto:ratanmiadev@gmail.com" className="text-accent-lime hover:text-accent-orange transition-colors text-sm font-medium">ratanmiadev@gmail.com</a></div></div>
            </div>

            <div className="space-y-6">{DEVELOPMENT_SERVICES.map((service, index) => (<ServiceSkillBar key={service.name} service={service} index={index} inView={servicesInView} />))}</div>
          </div>
        </motion.div>
      </div>

      {/* --- Rest of the content in a constrained container --- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-28 py-28">
        {/* --- Stats Section --- */}
        <motion.div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CORE_STATS.map((stat, index) => (<StatCard key={stat.label} stat={stat} index={index} inView={statsInView} />))}
        </motion.div>

        {/* --- Experience Section --- */}
        <motion.div ref={experienceRef}>
            <SectionHeader inView={experienceInView}>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">Professional Journey</h3>
                <p className="text-gray-400">Companies that shaped my expertise.</p>
            </SectionHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {EXPERIENCE.map((experience, index) => (
                    <ExperienceCard key={experience.company} experience={experience} index={index} inView={experienceInView} />
                ))}
            </div>
        </motion.div>

        {/* --- CTA Section --- */}
        <motion.div ref={ctaRef} className="bg-gray-800 p-10 lg:p-16 rounded-2xl text-center relative overflow-hidden border border-gray-700" initial={{ opacity: 0, y: 50 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
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
