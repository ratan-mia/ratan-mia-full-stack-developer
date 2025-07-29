'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Award,
  Code2,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  Star,
  Users
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Simplified Constants
const ROLES = [
  'Full Stack Developer',
  'React.js Expert',
  'Laravel Specialist', 
  'Next.js Developer'
];

const CORE_STATS = [
  { icon: Award, number: '150+', label: 'Projects', color: 'text-cyan-400' },
  { icon: Users, number: '8+', label: 'Years', color: 'text-cyan-400' },
  { icon: Globe, number: '25+', label: 'Countries', color: 'text-cyan-400' },
  { icon: Star, number: '98%', label: 'Success', color: 'text-cyan-400' }
];

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/shorifull', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shorifull', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ratanmiadev@gmail.com', label: 'Email' }
];

// Simplified Typewriter Effect
const TypewriterText = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`${className} min-h-[1.2em] inline-block`}>
      {currentText}
      <motion.span
        className="inline-block w-1 h-8 md:h-10 bg-cyan-400 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

// Availability Status Badge
const AvailabilityStatus = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const dhaka = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Dhaka"}));
      const hour = dhaka.getHours();
      setIsAvailable(hour >= 9 && hour < 18);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-cyan-400' : 'bg-yellow-400'}`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className={`text-sm font-semibold ${isAvailable ? 'text-cyan-400' : 'text-yellow-400'}`}>
        {isAvailable ? 'Available for Projects' : 'Currently Offline'}
      </span>
    </motion.div>
  );
};

// Professional Stats Component
const ProfessionalStats = ({ inView }) => {
  const [counts, setCounts] = useState(CORE_STATS.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const timers = CORE_STATS.map((stat, index) => {
      const target = parseInt(stat.number.replace(/\\D/g, ''));
      const increment = target / 40;
      
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < target) {
            newCounts[index] = Math.min(newCounts[index] + increment, target);
          }
          return newCounts;
        });
      }, 40);
    });

    return () => timers.forEach(clearInterval);
  }, [inView]);

  return (
    <motion.div
      className="grid grid-cols-4 gap-8 max-w-2xl mx-auto lg:mx-0 mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      {CORE_STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.2 + index * 0.1 }}
        >
          <stat.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            {Math.round(counts[index])}{stat.number.includes('%') ? '%' : '+'}
          </div>
          <div className="text-sm font-semibold tracking-wider text-gray-300">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Social Links Component
const SocialLinksSection = ({ inView }) => {
  return (
    <motion.div
      className="flex items-center justify-center lg:justify-start gap-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 1.4 }}
    >
      {SOCIAL_LINKS.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-cyan-400 hover:text-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1.6 + index * 0.1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          aria-label={`Visit my ${social.label} profile`}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
};

// Main Hero Component
const HeroMain = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  const handleDownloadCV = useCallback(() => {
    window.gtag?.('event', 'cv_download', {
      event_category: 'engagement',
      event_label: 'hero_section'
    });
  }, []);

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ratan Mia",
            "jobTitle": "Full Stack Developer",
            "description": "Expert Full Stack Developer with 8+ years experience in React.js, Next.js, Laravel, and WordPress development",
            "url": "https://ratanmia.dev",
            "sameAs": [
              "https://github.com/shorifull",
              "https://linkedin.com/in/shorifull"
            ],
            "knowsAbout": ["React.js", "Next.js", "Laravel", "PHP", "JavaScript", "WordPress"],
            "workLocation": {
              "@type": "Place",
              "name": "Dhaka, Bangladesh"
            }
          })
        }}
      />

      <section
        ref={containerRef}
        className="py-24 bg-black relative overflow-hidden"
        id="home"
        aria-label="Hero section - Ratan Mia, Full Stack Developer"
      >
        {/* Background Decoration */}
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 opacity-5 rounded-full blur-3xl" />
        
        {/* Enhanced glow for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* Eyebrow Text */}
            <motion.span
              className="text-cyan-400 font-semibold tracking-wider uppercase mb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Full Stack Developer
            </motion.span>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4 }}
            >
              Hello, I'm <span className="text-cyan-400">Ratan Mia</span>
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6 }}
            >
              <TypewriterText words={ROLES} />
            </motion.div>

            {/* Accent Line */}
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />

            {/* Description */}
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8 }}
            >
              Crafting exceptional web experiences with <span className="text-white font-semibold">8+ years</span> of expertise in 
              React.js, Next.js, Laravel, and WordPress development. Transforming ideas into powerful digital solutions.
            </motion.p>

            {/* Availability Status */}
            <div className="flex justify-center mb-12">
              <AvailabilityStatus />
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.0 }}
          >
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View my portfolio projects"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              onClick={handleDownloadCV}
              className="bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-cyan-400 hover:text-white border border-gray-700 hover:border-cyan-400 font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download my resume PDF"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Professional Stats */}
          <ProfessionalStats inView={isInView} />

          {/* Social Links */}
          <SocialLinksSection inView={isInView} />

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-label="Scroll down to learn more"
            >
              <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroMain;