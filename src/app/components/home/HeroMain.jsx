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
  { icon: Award, number: '150+', label: 'Projects', color: 'text-blue-400' },
  { icon: Users, number: '8+', label: 'Years', color: 'text-green-400' },
  { icon: Globe, number: '25+', label: 'Countries', color: 'text-purple-400' },
  { icon: Star, number: '98%', label: 'Success', color: 'text-yellow-400' }
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
        className="inline-block w-1 h-8 md:h-10 bg-blue-500 ml-1"
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
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-400' : 'bg-yellow-400'}`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className={`text-sm font-medium ${isAvailable ? 'text-green-200' : 'text-yellow-200'}`}>
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
      const target = parseInt(stat.number.replace(/\D/g, ''));
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
      className="grid grid-cols-4 gap-6 max-w-2xl mx-auto lg:mx-0 mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      {CORE_STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
          <div className="text-2xl font-bold text-white mb-1">
            {Math.round(counts[index])}{stat.number.includes('%') ? '%' : '+'}
          </div>
          <div className="text-sm text-gray-300">{stat.label}</div>
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
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1.6 + index * 0.1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          aria-label={`Visit my ${social.label} profile`}
        >
          <social.icon size={18} />
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        id="home"
        aria-label="Hero section - Ratan Mia, Full Stack Developer"
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            
            {/* Availability Status */}
            <div className="flex justify-center lg:justify-start mb-8">
              <AvailabilityStatus />
            </div>

            {/* Main Heading */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4 }}
            >
              <motion.p 
                className="text-blue-300 text-lg font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 }}
              >
                <span className="block text-white mb-2">Ratan Mia</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  <TypewriterText words={ROLES} />
                </span>
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8 }}
            >
              Crafting exceptional web experiences with{' '}
              <span className="text-white font-semibold">8+ years</span> of expertise in 
              React.js, Next.js, Laravel, and WordPress development.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.0 }}
            >
              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View my portfolio projects"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                onClick={handleDownloadCV}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
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
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
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