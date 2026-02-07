'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
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
    label: 'Years Experience', 
    description: 'Building robust web and mobile applications with modern technologies like React Native, Next.js, and Laravel across diverse industries.',
    icon: Award 
  },
  { 
    number: '150+', 
    label: 'Projects Delivered', 
    description: 'Delivered complete solutions including mobile apps, e-commerce platforms, and enterprise systems from concept to deployment.',
    icon: Target 
  },
  { 
    number: '98%', 
    label: 'Client Satisfaction', 
    description: 'Maintained exceptional relationships through clear communication, timely delivery, ongoing support, and quality-driven development.',
    icon: Users 
  }
];

const EXPERIENCE = [
  {
    company: 'ELF Bangladesh',
    role: 'Senior Mobile App Developer',
    period: '2022 - Present',
    tech: ['React Native', 'TypeScript', 'Supabase', 'Redux'],
    description: 'Developing cross-platform mobile applications for e-commerce, implementing real-time features and payment integrations.'
  },
  {
    company: 'Kawasaki Bangladesh',
    role: 'Senior Full Stack Developer',
    period: '2020 - 2022',
    tech: ['React', 'Laravel', 'AWS', 'MySQL'],
    description: 'Led development of enterprise-level applications, managed cloud infrastructure, and mentored junior developers.'
  },
  {
    company: 'Continental Motors',
    role: 'IT Manager & Lead Developer',
    period: '2018 - 2020',
    tech: ['PHP', 'WordPress', 'MySQL', 'Linux'],
    description: 'Managed IT operations while developing custom business solutions, CRM systems, and team leadership.'
  },
  {
    company: 'Chery Bangladesh',
    role: 'Lead Web Developer',
    period: '2016 - 2018',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    description: 'Developed responsive websites, mobile-first designs, and e-commerce platforms for automotive industry.'
  }
];

const DEVELOPMENT_SERVICES = [
  { name: 'Mobile App Development (React Native)', level: 95, color: 'bg-black' },
  { name: 'Front-End Development (React/Next.js)', level: 95, color: 'bg-black' },
  { name: 'Back-End Development (Laravel/Node.js)', level: 90, color: 'bg-black' },
  { name: 'E-commerce Solutions & API Integration', level: 92, color: 'bg-black' },
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
    className="text-center px-4 sm:px-6 lg:px-8 py-6 md:py-0 group"
    variants={ANIMATION_VARIANTS.fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.2 + index * 0.15 }}
    whileHover={{ y: -8 }}
  >
    <motion.div
      className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-accent-lime flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
      whileHover={{ rotate: 5 }}
    >
      <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-black" />
    </motion.div>
    <motion.h3 
      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black mb-2 sm:mb-3"
      whileHover={{ scale: 1.05 }}
    >
      {stat.number}
    </motion.h3>
    <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-3 sm:mb-4 lg:mb-6">{stat.label}</h4>
    <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg max-w-xs mx-auto">{stat.description}</p>
  </motion.div>
);

// --- EXPERIENCE ROW COMPONENT ---
const ExperienceRow = ({ experience, index, isInView }) => (
  <motion.div
    className="group grid grid-cols-1 lg:grid-cols-12 items-start lg:items-center gap-4 lg:gap-6 py-8 lg:py-12 border-b border-gray-200 hover:bg-gray-50/50 rounded-lg px-0 lg:px-6 transition-all duration-300"
    variants={ANIMATION_VARIANTS.slideInLeft}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.2 + index * 0.15 }}
    whileHover={{ x: 8 }}
  >
    {/* Year/Period - 2-3 columns */}
    <div className="lg:col-span-3 flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-accent-lime flex items-center justify-center transition-all duration-300 flex-shrink-0">
        <Award className="w-6 h-6 text-black" />
      </div>
      <div>
        <div className="text-accent-lime font-bold text-base lg:text-lg group-hover:scale-105 transition-transform">
          {experience.period.split(' - ')[0]}
        </div>
        <div className="text-gray-500 text-sm">
          {experience.period.split(' - ')[1]}
        </div>
      </div>
    </div>

    {/* Main Content - 6 columns */}
    <div className="lg:col-span-6">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-accent-lime transition-colors">
        {experience.role}
      </h3>
      <p className="text-gray-600 mb-3 text-base leading-relaxed">{experience.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {experience.tech.map(tech => (
          <span 
            key={tech}
            className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-accent-lime/20 hover:text-black transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Company Info - 3 columns */}
    <div className="lg:col-span-3 text-left lg:text-right mt-2 lg:mt-0">
      <div className="text-lg lg:text-xl font-bold text-black group-hover:text-accent-lime transition-colors">
        {experience.company}
      </div>
      <div className="text-sm text-gray-500 font-medium">Company</div>
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

// --- STATS SECTION ---
const StatsSection = ({ isInView }) => (
  <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-lime/5 rounded-full blur-3xl" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        className="text-center mb-16 sm:mb-20"
        variants={ANIMATION_VARIANTS.fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="inline-block px-6 py-2 bg-accent-lime/20 text-accent-lime rounded-full text-xs sm:text-sm font-bold mb-6 uppercase tracking-wider"
          variants={ANIMATION_VARIANTS.fadeUp}
        >
          📊 By The Numbers
        </motion.div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-white">
          Proven Track Record
        </h3>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Numbers that reflect commitment, quality, and client success
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
        variants={ANIMATION_VARIANTS.stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {CORE_STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="relative group"
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 + index * 0.15 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-gray-700 group-hover:border-accent-lime/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-lime/20 hover:-translate-y-2">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-6 sm:mb-8 rounded-2xl bg-gradient-to-br from-accent-lime to-lime-300 flex items-center justify-center shadow-lg shadow-accent-lime/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black" />
              </motion.div>
              <motion.h3 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-3 sm:mb-4 group-hover:text-accent-lime transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {stat.number}
              </motion.h3>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-accent-lime mb-4 sm:mb-6">{stat.label}</h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg">{stat.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

// --- EXPERIENCE SECTION ---
const ExperienceSection = ({ isInView }) => (
  <div className="py-20 bg-white relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
          💼 Experience
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Professional Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Over a decade of experience across web, mobile, and enterprise development with leading companies in Bangladesh
        </p>
      </motion.div>
      
      <motion.div 
        className="space-y-0"
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
  <div className="bg-black py-16 sm:py-20 lg:py-24">
    <motion.div 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-10 md:p-14 lg:p-16 xl:p-20 rounded-3xl text-center relative overflow-hidden border-2 border-gray-700 hover:border-accent-lime/50 transition-all group">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent-lime/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent-lime/5 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <motion.div
            className="inline-block px-6 py-2 bg-accent-lime/20 text-accent-lime rounded-full text-xs sm:text-sm font-bold mb-6 uppercase tracking-wider"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            💬 Let's Talk
          </motion.div>
          
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            Ready to Build Something
            <br className="hidden sm:block" />
            <span className="text-accent-lime"> Amazing Together?</span>
          </motion.h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need a mobile app, web platform, or custom solution - I'm here to help bring your vision to life with clean code and exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
            <motion.a 
              href="#contact" 
              className="w-full sm:w-auto bg-accent-lime text-black font-extrabold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-400/40 transition-all duration-300 inline-flex items-center justify-center gap-3 text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="/portfolio" 
              className="w-full sm:w-auto border-2 border-gray-600 text-white font-bold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-xl hover:bg-gray-700 hover:border-accent-lime/50 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-3 text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Portfolio</span>
            </motion.a>
          </div>
          
          {/* Additional Info */}
          <motion.div
            className="mt-10 sm:mt-12 pt-8 border-t border-gray-700 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-400"
            variants={ANIMATION_VARIANTS.fadeUp}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-lime rounded-full" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-lime rounded-full" />
              <span>Free consultation call</span>
            </div>
          </motion.div>
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