'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Star,
  Twitter,
  Users
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Constants
const ROLES = [
  'Full Stack Developer',
  'React.js Expert',
  'Laravel Specialist', 
  'Next.js Developer',
  'WordPress Expert'
];

const SKILLS = [
  'React.js', 'Next.js', 'Laravel', 'PHP', 'JavaScript', 
  'WordPress', 'MySQL', 'Docker', 'AWS', 'Git'
];

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/shorifull', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shorifull', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Twitter, href: 'https://twitter.com/shorifull', label: 'Twitter', color: 'hover:text-blue-300' }
];

const STATS = [
  { icon: Award, number: '150+', label: 'Projects Completed', color: 'text-orange-500', description: 'Successfully delivered projects' },
  { icon: Users, number: '8+', label: 'Years Experience', color: 'text-purple-500', description: 'Years in web development' },
  { icon: Globe, number: '25+', label: 'Countries Served', color: 'text-blue-500', description: 'Global client reach' },
  { icon: Star, number: '98%', label: 'Client Satisfaction', color: 'text-green-500', description: 'Happy clients rate' }
];

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: 'Call',
    value: '+880 1751 010966',
    href: 'tel:+8801751010966',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Available Mon-Fri, 9 AM - 6 PM (UTC+6)'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat Now',
    href: 'https://wa.me/8801751010966',
    gradient: 'from-emerald-500 to-green-500',
    description: 'Quick response guaranteed'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Send Message',
    href: 'mailto:shorifull@gmail.com',
    gradient: 'from-blue-500 to-indigo-500',
    description: 'Professional inquiries welcome'
  }
];

const QUICK_FACTS = [
  { icon: CheckCircle2, text: '150+ Projects Delivered', metric: '100%' },
  { icon: CheckCircle2, text: '8+ Years Experience', metric: 'Since 2016' },
  { icon: CheckCircle2, text: '25+ Countries Served', metric: 'Global' },
  { icon: CheckCircle2, text: '98% Client Satisfaction', metric: '5★ Rating' }
];

// Optimized Floating Elements Component
const FloatingElements = ({ inView }) => {
  const floatingIcons = useMemo(() => [
    { Icon: Code2, delay: 0 },
    { Icon: Globe, delay: 0.5 },
    { Icon: Rocket, delay: 1 }
  ], []);

  if (!inView) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-500/30 dark:text-blue-400/30"
          style={{
            top: `${20 + index * 25}%`,
            right: `${10 + index * 15}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 0.5, delay },
            scale: { duration: 0.5, delay },
            y: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Typewriter Effect Component
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
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`${className} min-h-[1.2em] inline-block`} aria-label={`I am a ${words.join(', ')}`}>
      {currentText}
      <motion.span
        className="inline-block w-1 h-8 md:h-10 bg-blue-500 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        aria-hidden="true"
      />
    </span>
  );
};

// Enhanced Stats Component with Counter Animation
const Stats = ({ inView }) => {
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const timers = STATS.map((stat, index) => {
      const target = parseInt(stat.number.replace(/\D/g, ''));
      const increment = target / 50;
      
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < target) {
            newCounts[index] = Math.min(newCounts[index] + increment, target);
          }
          return newCounts;
        });
      }, 30);
    });

    return () => timers.forEach(clearInterval);
  }, [inView]);

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-4 lg:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -5 }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 + index * 0.1 }}
        >
          <stat.icon className={`w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
          <div className="text-xl lg:text-2xl font-bold text-white mb-1">
            {Math.round(counts[index])}{stat.number.includes('%') ? '%' : '+'}
          </div>
          <div className="text-xs lg:text-sm text-gray-300 font-medium">{stat.label}</div>
          <div className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {stat.description}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Enhanced Social Links Component
const SocialLinks = ({ inView }) => {
  return (
    <motion.div
      className="flex items-center gap-4 mt-8"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <span className="text-gray-300 text-sm font-medium">Follow me:</span>
      {SOCIAL_LINKS.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 ${social.color}`}
          whileHover={{ y: -2 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1.6 + index * 0.1 }}
          aria-label={`Visit my ${social.label} profile`}
        >
          <social.icon size={18} />
        </motion.a>
      ))}
    </motion.div>
  );
};

// Enhanced Contact Card Component
const ContactCard = ({ method, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={method.href}
      target={method.label === 'WhatsApp' ? '_blank' : undefined}
      rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
      className={`block p-6 rounded-2xl bg-gradient-to-r ${method.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: 1.4 + index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      aria-label={`Contact via ${method.label}: ${method.value}`}
    >
      <div className="flex items-center gap-4">
        <motion.div 
          className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <method.icon className="w-6 h-6" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{method.label}</h3>
          <p className="text-white/80">{method.value}</p>
          <p className="text-white/60 text-xs mt-1">{method.description}</p>
        </div>
        <ExternalLink className="w-5 h-5 opacity-60" />
      </div>
    </motion.a>
  );
};

// Enhanced Availability Status
const AvailabilityStatus = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const dhaka = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Dhaka"}));
      const hour = dhaka.getHours();
      setIsAvailable(hour >= 9 && hour < 18); // 9 AM to 6 PM
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // Check every minute

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
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            `0 0 0 0 rgba(${isAvailable ? '34, 197, 94' : '251, 191, 36'}, 0.7)`,
            `0 0 0 8px rgba(${isAvailable ? '34, 197, 94' : '251, 191, 36'}, 0)`,
            `0 0 0 0 rgba(${isAvailable ? '34, 197, 94' : '251, 191, 36'}, 0)`
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className={`text-sm font-medium ${isAvailable ? 'text-green-200' : 'text-yellow-200'}`}>
        {isAvailable ? 'Available for Projects' : 'Currently Offline'}
      </span>
      <Clock className="w-4 h-4 text-gray-300" />
    </motion.div>
  );
};

// Main Hero Component
const HeroMain = () => {
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const leftInView = useInView(leftContentRef, { once: true, threshold: 0.1 });
  const rightInView = useInView(rightContentRef, { once: true, threshold: 0.1 });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleDownloadCV = useCallback(() => {
    // Add analytics tracking here if needed
    window.gtag?.('event', 'cv_download', {
      event_category: 'engagement',
      event_label: 'hero_section'
    });
  }, []);

  return (
    <>
      {/* Structured Data for SEO */}
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
              "https://linkedin.com/in/shorifull",
              "https://twitter.com/shorifull"
            ],
            "knowsAbout": ["React.js", "Next.js", "Laravel", "PHP", "JavaScript", "WordPress", "MySQL", "Docker", "AWS"],
            "alumniOf": "Bangladesh",
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
        aria-label="Hero section introducing Ratan Mia, Full Stack Developer"
      >
        {/* Background Elements */}
        <FloatingElements inView={leftInView} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" aria-hidden="true" />

        <motion.div 
          className="container mx-auto px-6 lg:px-8 relative z-10"
          style={{ y, opacity }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              ref={leftContentRef}
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <AvailabilityStatus />

              {/* Main Heading */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-blue-300 text-lg font-semibold tracking-wide">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="block text-white">Ratan Mia</span>
                  <span className="block gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    <TypewriterText words={ROLES} />
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 }}
              >
                Crafting exceptional web experiences with <span className="text-white font-semibold">8+ years</span> of expertise in modern technologies. Specialized in React.js, Next.js, Laravel, and WordPress development with a passion for clean, scalable code.
              </motion.p>

              {/* Skills Pills */}
              <motion.div
                className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8 }}
              >
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={leftInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.2 }}
              >
                <motion.a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
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
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Download my resume PDF"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <SocialLinks inView={leftInView} />

              {/* Stats */}
              <Stats inView={leftInView} />
            </motion.div>

            {/* Right Content - Contact Cards */}
            <motion.div
              ref={rightContentRef}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Location Card */}
              <motion.div
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Based in Bangladesh</h3>
                    <p className="text-gray-300">Dhaka, Bangladesh (UTC+6)</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-sm text-gray-400">Available worldwide</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Methods */}
              {CONTACT_METHODS.map((method, index) => (
                <ContactCard 
                  key={method.label} 
                  method={method} 
                  index={index} 
                  inView={rightInView} 
                />
              ))}

              {/* Quick Stats */}
              <motion.div
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.8 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  {QUICK_FACTS.map((fact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between text-gray-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 2 + index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <fact.icon className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-white transition-colors">{fact.text}</span>
                      </div>
                      <span className="text-xs text-blue-300 font-medium">{fact.metric}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Simple Mouse Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <motion.a
              href="#projects"
              className="flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white group"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-label="Scroll down to explore my projects"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                Scroll to explore
              </span>
              
              {/* Simple Mouse Icon */}
              <motion.div
                className="w-6 h-10 border-2 border-white/40 group-hover:border-white/70 rounded-full flex justify-center transition-colors duration-300"
                whileHover={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
              >
                <motion.div
                  className="w-0.5 h-2 bg-white/50 group-hover:bg-white/80 rounded-full mt-2 transition-colors duration-300"
                  animate={{ 
                    y: [0, 12, 0], 
                    opacity: [1, 0.3, 1] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroMain;