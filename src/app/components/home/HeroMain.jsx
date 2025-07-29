'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  Server,
  Smartphone,
  Star,
  Users
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Enhanced Slider Data with background images
const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: "Full Stack Developer",
    title: "Hello, I'm Ratan Mia",
    subtitle: "Crafting Digital Excellence",
    description: "Transforming ideas into powerful web solutions with 8+ years of expertise in modern technologies. From concept to deployment, I build scalable applications that drive business growth.",
    backgroundImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1920&h=1080&fit=crop&crop=center&q=80",
    cta: { text: "View My Work", href: "#projects" },
    features: ["React.js Expert", "Laravel Specialist", "Next.js Developer", "WordPress Pro"],
    icon: Code2
  },
  {
    id: 2,
    eyebrow: "Frontend Development",
    title: "Beautiful User Interfaces",
    subtitle: "React.js & Next.js Specialist",
    description: "Creating stunning, responsive, and interactive user experiences using cutting-edge frontend technologies. Every pixel matters in delivering exceptional user journeys that convert.",
    backgroundImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&h=1080&fit=crop&crop=center&q=80",
    cta: { text: "See Frontend Projects", href: "#projects" },
    features: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: Smartphone
  },
  {
    id: 3,
    eyebrow: "Backend Development",
    title: "Robust Server Solutions",
    subtitle: "Laravel & PHP Excellence",
    description: "Building secure, scalable backend systems that power your applications. From APIs to databases, ensuring your data flows seamlessly and securely with enterprise-grade architecture.",
    backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&crop=center&q=80",
    cta: { text: "Explore Backend Work", href: "#projects" },
    features: ["Laravel", "PHP", "MySQL", "RESTful APIs"],
    icon: Server
  },
  {
    id: 4,
    eyebrow: "Full Stack Solutions",
    title: "Complete Web Applications",
    subtitle: "End-to-End Development",
    description: "Delivering comprehensive web solutions from database design to user interface. Single developer, complete solutions - faster delivery, consistent quality, seamless integration.",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center&q=80",
    cta: { text: "View Full Projects", href: "#projects" },
    features: ["Full Stack", "E-commerce", "CMS", "Custom Solutions"],
    icon: Layers
  }
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
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        className={`w-3 h-3 rounded-full ${isAvailable ? 'bg-cyan-400' : 'bg-yellow-400'} shadow-lg`}
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
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {CORE_STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-6 bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-2 group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.0 + index * 0.1 }}
        >
          <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">
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
      className="flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      {SOCIAL_LINKS.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-lg bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400 flex items-center justify-center text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1.4 + index * 0.1 }}
          whileHover={{ scale: 1.1, y: -4 }}
          aria-label={`Visit my ${social.label} profile`}
        >
          <social.icon size={22} />
        </motion.a>
      ))}
    </motion.div>
  );
};

// Slide Navigation Dots
const SlideDots = ({ slides, currentSlide, onSlideChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-12">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            currentSlide === index
              ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
              : 'bg-gray-600/60 hover:bg-gray-500 hover:scale-110'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Enhanced Progress Bar
const SlideProgress = ({ currentSlide, totalSlides, isPlaying }) => {
  return (
    <div className="flex items-center gap-2 mt-6">
      <div className="flex items-center gap-1">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-300 ${
              index <= currentSlide ? 'bg-cyan-400' : 'bg-gray-600/40'
            }`}
            style={{ width: index === currentSlide && isPlaying ? '60px' : '20px' }}
          />
        ))}
      </div>
    </div>
  );
};

// Main Hero Slider Component
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handleDownloadCV = useCallback(() => {
    window.gtag?.('event', 'cv_download', {
      event_category: 'engagement',
      event_label: 'hero_section'
    });
  }, []);

  const currentSlideData = HERO_SLIDES[currentSlide];

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
        className="relative overflow-hidden min-h-screen flex items-center"
        id="home"
        aria-label="Hero section - Ratan Mia, Full Stack Developer"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${currentSlideData.backgroundImage})`,
              }}
            />
            
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-400/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:from-gray-700/90 hover:to-gray-800/90 border border-gray-700/50 hover:border-cyan-400 rounded-lg flex items-center justify-center text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-110 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:from-gray-700/90 hover:to-gray-800/90 border border-gray-700/50 hover:border-cyan-400 rounded-lg flex items-center justify-center text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-110 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Overlay */}
        <div className="container mx-auto px-6 relative z-10 py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="max-w-4xl text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Availability Status */}
              <div className="flex mb-8">
                <AvailabilityStatus />
              </div>

              {/* Icon Badge */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-full shadow-lg shadow-cyan-400/25 mb-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <currentSlideData.icon className="w-10 h-10 text-gray-900" />
              </motion.div>

              {/* Eyebrow Text */}
              <motion.span
                className="text-cyan-400 font-semibold tracking-wider uppercase mb-4 inline-block text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {currentSlideData.eyebrow}
              </motion.span>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {currentSlideData.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                className="text-2xl md:text-4xl font-bold text-cyan-400 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {currentSlideData.subtitle}
              </motion.h2>

              {/* Accent Line */}
              <motion.div
                className="w-32 h-1 bg-cyan-400 mb-8"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />

              {/* Description */}
              <motion.p
                className="text-gray-200 max-w-3xl text-lg md:text-xl leading-relaxed mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {currentSlideData.description}
              </motion.p>

              {/* Features */}
              <motion.div
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {currentSlideData.features.map((feature, index) => (
                  <motion.span
                    key={feature}
                    className="px-6 py-3 bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg text-cyan-400 text-sm md:text-base font-semibold shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.a
                  href={currentSlideData.cta.href}
                  className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{currentSlideData.cta.text}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:from-gray-700/90 hover:to-gray-800/90 text-cyan-400 hover:text-white border border-gray-700/50 hover:border-cyan-400 font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <SocialLinksSection inView={isInView} />
            </motion.div>
          </AnimatePresence>

          {/* Professional Stats - Left Aligned */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.3 }}
          >
            <ProfessionalStats inView={isInView} />
          </motion.div>

          {/* Slide Navigation - Left Aligned */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center gap-6">
              <SlideDots 
                slides={HERO_SLIDES} 
                currentSlide={currentSlide} 
                onSlideChange={setCurrentSlide} 
              />
              <SlideProgress 
                currentSlide={currentSlide}
                totalSlides={HERO_SLIDES.length}
                isPlaying={isPlaying}
              />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-label="Scroll down to learn more"
            >
              <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
