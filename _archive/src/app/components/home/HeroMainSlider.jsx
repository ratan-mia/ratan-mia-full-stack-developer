'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    Briefcase,
    ChevronLeft,
    ChevronRight,
    Cloud,
    Code2,
    Database,
    Download,
    GitBranch,
    Globe,
    Layers,
    Mail,
    MessageCircle,
    Monitor,
    Phone,
    Rocket,
    Server,
    Settings,
    Shield,
    Smartphone,
    Star,
    Target,
    Users
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Typewriter Effect Component
const TypewriterText = ({ words, className = "", speed = 100, deleteSpeed = 50, delayBetweenWords = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

// Custom Swiper-like component with better animation control
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  const roles = ['Full Stack Developer', 'Laravel Expert', 'React.js Specialist', 'IT Manager'];

  const coreSkills = [
    { name: 'PHP', icon: Code2, color: 'from-purple-500 to-blue-500' },
    { name: 'Laravel', icon: Server, color: 'from-red-500 to-orange-500' },
    { name: 'React.js', icon: Layers, color: 'from-cyan-500 to-blue-500' },
    { name: 'WordPress', icon: Monitor, color: 'from-blue-500 to-indigo-500' },
    { name: 'MySQL', icon: Database, color: 'from-green-500 to-teal-500' },
    { name: 'Shopify', icon: Smartphone, color: 'from-emerald-500 to-green-500' },
    { name: 'JavaScript', icon: Settings, color: 'from-yellow-500 to-orange-500' },
    { name: 'Docker', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { name: 'Git', icon: GitBranch, color: 'from-orange-500 to-red-500' },
    { name: 'Security', icon: Shield, color: 'from-indigo-500 to-purple-500' }
  ];

  const statistics = [
    { icon: Target, number: '150+', label: 'Projects', color: 'from-yellow-500 to-orange-500' },
    { icon: Award, number: '10+', label: 'Years', color: 'from-purple-500 to-pink-500' },
    { icon: Users, number: '25+', label: 'Countries', color: 'from-blue-500 to-cyan-500' },
    { icon: Star, number: '98%', label: 'Success', color: 'from-green-500 to-emerald-500' }
  ];

  const contactMethods = [
    { icon: Phone, label: 'Call', value: '+8801751010966', href: 'tel:+8801751010966', color: 'from-green-500 to-emerald-600' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat Now', href: 'https://wa.me/8801751010966', color: 'from-emerald-500 to-green-600' },
    { icon: Mail, label: 'Email', value: 'Contact', href: 'mailto:shorifull@gmail.com', color: 'from-blue-500 to-indigo-600' }
  ];

  const slides = [
    { id: 'hero', title: 'Welcome', subtitle: 'Meet Ratan' },
    { id: 'skills', title: 'Expertise', subtitle: 'Tech Stack' },
    { id: 'services', title: 'Services', subtitle: 'What I Offer' },
    { id: 'contact', title: 'Contact', subtitle: 'Let\'s Connect' }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 8000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, slides.length]);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  }, [slides.length]);

  // Slide transition variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Background Pattern Component
  const BackgroundPattern = () => (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 50h25v-25h50v50h-50v25h25' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Ccircle cx='25' cy='25' r='2' fill='%23ffffff'/%3E%3Ccircle cx='75' cy='75' r='2' fill='%23ffffff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23circuit)'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px'
        }}
      />
    </div>
  );

  // Floating Animation Component
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/6 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-purple-500/6 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  // Slide 1: Main Hero
  const MainHeroSlide = () => (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="text-center lg:text-left space-y-6 order-2 lg:order-1"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Status Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-400/30 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl backdrop-blur-md"
        >
          <motion.div
            className="relative w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.7)",
                "0 0 0 6px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-green-200 font-bold text-xs md:text-sm tracking-wider uppercase">Available for Projects</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-3 md:space-y-4">
          <p className="text-blue-300 text-sm md:text-lg font-semibold tracking-wide uppercase">Professional Web Developer</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            <span className="block text-white mb-1 md:mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ratan Mia
            </span>
          </h1>
          <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start">
            <TypewriterText
              words={roles}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              speed={100}
              deleteSpeed={50}
              delayBetweenWords={2000}
            />
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
        >
          Specialized in crafting high-performance web applications with{' '}
          <span className="text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10+ years of expertise</span>.
          Expert in Laravel, React.js, and WordPress development.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-gray-700 text-white font-bold text-base md:text-lg rounded-lg md:rounded-xl hover:border-blue-600 hover:bg-gray-800/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Project</span>
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Visual */}
      <motion.div
        className="relative flex justify-center order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-900 to-black backdrop-blur-lg border-2 md:border-4 border-gray-800 shadow-2xl overflow-hidden relative">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-pink-500/8 flex items-center justify-center">
              <div className="text-center z-10 p-4">
                <motion.div
                  className="text-4xl md:text-6xl lg:text-7xl mb-2 md:mb-4"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  👨‍💻
                </motion.div>
                <div className="text-white font-black text-lg md:text-2xl lg:text-3xl mb-1 md:mb-2">Ratan Mia</div>
                <div className="text-blue-200 text-sm md:text-lg lg:text-xl font-bold mb-2 md:mb-3">Full Stack Developer</div>
                <div className="text-white/70 text-xs md:text-sm mb-2 md:mb-3">Dhaka, Bangladesh</div>
                <div className="flex items-center justify-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-xs md:text-sm font-bold">Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // Slide 2: Skills & Expertise
  const SkillsSlide = () => (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-3 md:space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-400/30 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl backdrop-blur-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Code2 className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              <span className="text-purple-200 font-bold text-xs md:text-sm tracking-wider uppercase">Tech Stack</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              My <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto">
              Mastering modern technologies to build exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-3 md:p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-600/50 rounded-lg md:rounded-xl backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className={`w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                    <skill.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-white font-bold text-xs md:text-sm">{skill.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            {statistics.map((stat, index) => (
              <div key={stat.label} className="text-center p-4 md:p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg md:rounded-xl">
                <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                  <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-blue-200 text-xs md:text-sm font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  // Slide 3: Services Preview
  const ServicesSlide = () => (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3 md:space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/15 to-green-500/15 border border-emerald-400/30 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl backdrop-blur-md"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                <span className="text-emerald-200 font-bold text-xs md:text-sm tracking-wider uppercase">Services</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                What I <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">Offer</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-light">
                Comprehensive web development solutions tailored to your business needs
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                { icon: Globe, title: 'Web Development', desc: 'Custom websites & web applications' },
                { icon: Smartphone, title: 'E-commerce Solutions', desc: 'Shopify & WooCommerce stores' },
                { icon: Server, title: 'Backend Development', desc: 'APIs & database management' },
                { icon: Settings, title: 'Maintenance & Support', desc: '24/7 technical assistance' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg md:rounded-xl hover:border-emerald-600/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm md:text-base">{service.title}</div>
                    <div className="text-slate-400 text-xs md:text-sm">{service.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#services"
              className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-sm md:text-base rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-xl md:rounded-2xl border border-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-4xl md:text-6xl"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  🚀
                </motion.div>
              </div>

              {/* Floating icons */}
              {[Globe, Code2, Server, Database].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center"
                  style={{
                    top: `${20 + index * 20}%`,
                    left: `${15 + (index % 2) * 70}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  // Slide 4: Contact CTA
  const ContactSlide = () => (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4 md:space-y-6">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/30 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl backdrop-blur-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Rocket className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-blue-200 font-bold text-xs md:text-sm tracking-wider uppercase">Let's Connect</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to Start Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
              Get in touch today and let's bring your ideas to life with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className={`group relative flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 bg-gradient-to-r ${method.color} text-white font-bold rounded-lg md:rounded-xl transition-all duration-300 hover:shadow-lg overflow-hidden`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <method.icon className="relative z-10 w-6 h-6 md:w-8 md:h-8" />
                <div className="relative z-10 text-center">
                  <div className="font-black text-sm md:text-lg">{method.label}</div>
                  <div className="text-xs md:text-sm opacity-80">{method.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <motion.a
              href="#quote"
              className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-gray-700 text-white font-bold text-base md:text-lg rounded-lg md:rounded-xl hover:border-blue-600 hover:bg-gray-800/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span>Download CV</span>
            </motion.a>
          </div>

          <motion.div
            className="inline-flex items-center gap-2 text-green-300 text-xs md:text-sm font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Available for new projects • Quick response guaranteed</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <MainHeroSlide />;
      case 1:
        return <SkillsSlide />;
      case 2:
        return <ServicesSlide />;
      case 3:
        return <ContactSlide />;
      default:
        return <MainHeroSlide />;
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative bg-gray-950 text-white overflow-hidden min-h-screen"
    >
      <BackgroundPattern />
      <FloatingElements />

      <div className="relative z-10 h-screen">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-20">
          <motion.button
            onClick={prevSlide}
            className="bg-black/50 backdrop-blur-md rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-blue-600/30 hover:border-blue-600/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-20">
          <motion.button
            onClick={nextSlide}
            className="bg-black/50 backdrop-blur-md rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-blue-600/30 hover:border-blue-600/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>

        {/* Enhanced Pagination */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 md:gap-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-3 md:px-4 py-2 md:py-3">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`group relative flex items-center gap-2 transition-all duration-300 ${
                  currentSlide === index ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125'
                      : 'bg-white/30 group-hover:bg-white/50'
                  }`}
                />
                <div className={`hidden sm:block text-xs md:text-sm font-medium transition-all duration-300 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                }`}>
                  {slide.title}
                </div>
                
                {/* Progress bar for current slide */}
                {currentSlide === index && isAutoPlaying && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 8, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: currentSlide === slides.length - 1 ? 1 : 0, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.a
            href="#about"
            className="group relative flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-3 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg md:rounded-xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-800/50 hover:border-blue-600/50 backdrop-blur-sm hover:shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <motion.div
              className="relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </motion.div>

            <span className="relative text-xs md:text-sm font-bold tracking-wide">Discover My Work</span>

            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;