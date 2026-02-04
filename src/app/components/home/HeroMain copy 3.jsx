'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Cloud,
    Code2,
    Cpu,
    Database,
    Download,
    GitBranch,
    Globe,
    Layers,
    Mail,
    MessageCircle,
    Monitor,
    Palette,
    Phone,
    Rocket,
    Server,
    Settings,
    Shield,
    Smartphone,
    Star,
    Target,
    Users,
    Zap
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Enhanced Responsive Typewriter Effect Component
const TypewriterText = ({ words, className = "", speed = 120, deleteSpeed = 60, delayBetweenWords = 2500 }) => {
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
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
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
        className="inline-block w-0.5 h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </span>
  );
};

// Advanced Particles Background Component
const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.life = Math.random() * 200 + 100;
      this.maxLife = this.life;
    }

    draw(ctx) {
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
      gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
      gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
      
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.closePath();
    }

    update(ctx, canvas) {
      this.draw(ctx);
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.life -= 1;
      this.opacity = (this.life / this.maxLife) * 0.4;

      if (this.life <= 0 || this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
        this.reset(canvas);
      }
    }

    reset(canvas) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.life = Math.random() * 200 + 100;
      this.maxLife = this.life;
      this.velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5
      };
    }
  }

  useEffect(() => {
    if (!isMounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles.current = [];
      const particleCount = window.innerWidth < 640 ? 20 : 
                          window.innerWidth < 1024 ? 35 : 50;
      
      const colors = [
        { r: 59, g: 130, b: 246 },   // blue
        { r: 147, g: 51, b: 234 },   // purple
        { r: 236, g: 72, b: 153 },   // pink
        { r: 6, g: 182, b: 212 },    // cyan
      ];
      
      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.current.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 2 + 1,
          color,
          { x: (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 0.5 }
        ));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        particle.update(ctx, canvas);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-30"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

// Scroll Progress Indicator
const ScrollProgress = ({ progress }) => (
  <motion.div
    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-50 origin-left"
    style={{ scaleX: progress }}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: progress }}
    transition={{ type: "spring", stiffness: 400, damping: 40 }}
  />
);

// Scroll Indicator
const ScrollBottomIndicator = ({ isVisible, onClick }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={onClick}
          className="group flex flex-col items-center gap-2 px-6 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl text-white hover:bg-white/[0.12] hover:border-cyan-400/40 transition-all duration-300 shadow-2xl"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90 group-hover:opacity-100">
            Explore More
          </span>
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-cyan-400" />
            <ChevronDown className="w-3 h-3 opacity-60 -mt-1 text-cyan-400" />
          </motion.div>
        </motion.button>
      </motion.div>
    )}
  </AnimatePresence>
);

// Main Hero Slider Component
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  const roles = ['Full Stack Developer', 'Laravel Architect', 'React.js Specialist', 'Tech Innovation Leader'];

  const coreSkills = [
    { name: 'PHP', icon: Code2, color: 'from-purple-500 to-blue-500', proficiency: 95 },
    { name: 'Laravel', icon: Server, color: 'from-red-500 to-orange-500', proficiency: 98 },
    { name: 'React.js', icon: Layers, color: 'from-cyan-500 to-blue-500', proficiency: 92 },
    { name: 'WordPress', icon: Monitor, color: 'from-blue-500 to-indigo-500', proficiency: 90 },
    { name: 'MySQL', icon: Database, color: 'from-green-500 to-teal-500', proficiency: 88 },
    { name: 'JavaScript', icon: Settings, color: 'from-yellow-500 to-orange-500', proficiency: 94 },
    { name: 'Docker', icon: Cloud, color: 'from-blue-500 to-cyan-500', proficiency: 85 },
    { name: 'Git', icon: GitBranch, color: 'from-orange-500 to-red-500', proficiency: 91 }
  ];

  const achievements = [
    { icon: Target, number: '150+', label: 'Projects Delivered', color: 'from-yellow-400 to-orange-400', desc: 'Successfully completed' },
    { icon: Award, number: '10+', label: 'Years Experience', color: 'from-purple-400 to-pink-400', desc: 'In web development' },
    { icon: Users, number: '25+', label: 'Countries Served', color: 'from-blue-400 to-cyan-400', desc: 'Global clientele' },
    { icon: Star, number: '98%', label: 'Success Rate', color: 'from-green-400 to-emerald-400', desc: 'Client satisfaction' }
  ];

  const services = [
    { 
      icon: Globe, 
      title: 'Full Stack Development', 
      desc: 'End-to-end web application development using modern technologies',
      features: ['Custom Web Apps', 'API Development', 'Database Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Smartphone, 
      title: 'E-commerce Solutions', 
      desc: 'High-converting online stores with seamless user experience',
      features: ['Shopify Stores', 'WooCommerce', 'Payment Integration'],
      color: 'from-emerald-500 to-green-500'
    },
    { 
      icon: Shield, 
      title: 'Enterprise Solutions', 
      desc: 'Scalable enterprise-grade applications with robust security',
      features: ['Custom CRM', 'ERP Systems', 'Cloud Solutions'],
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Zap, 
      title: 'Performance Optimization', 
      desc: 'Speed optimization and performance enhancement services',
      features: ['Site Speed', 'SEO Optimization', 'Code Review'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const contactMethods = [
    { icon: Phone, label: 'Call Now', value: '+8801751010966', href: 'tel:+8801751010966', color: 'from-green-500 to-emerald-500' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Quick Chat', href: 'https://wa.me/8801751010966', color: 'from-emerald-500 to-green-500' },
    { icon: Mail, label: 'Email', value: 'Send Message', href: 'mailto:shorifull@gmail.com', color: 'from-blue-500 to-indigo-500' }
  ];

  const slides = [
    { id: 'hero', title: 'Home', subtitle: 'Welcome' },
    { id: 'skills', title: 'Skills', subtitle: 'Expertise' },
    { id: 'services', title: 'Services', subtitle: 'Solutions' },
    { id: 'contact', title: 'Contact', subtitle: 'Connect' }
  ];

  // Scroll tracking
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(Math.min(progress, 1));
      
      if (scrollTop > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 7000);
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

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#about, #skills, #projects, #contact');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  // Slide transition variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96
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
      scale: 0.96
    })
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Hero Slide - Modern Glassmorphism Design
  const MainHeroSlide = () => (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <motion.div
        className="text-center lg:text-left space-y-8 order-2 lg:order-1"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Premium Status Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 px-6 py-3 rounded-full text-sm font-semibold text-cyan-300"
        >
          <motion.div
            className="relative w-3 h-3"
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
            <div className="relative w-3 h-3 bg-emerald-400 rounded-full"></div>
          </motion.div>
          <span className="tracking-wider uppercase bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Available for Elite Projects
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="space-y-2">
            <p className="text-base md:text-lg font-semibold text-cyan-400 tracking-wider uppercase">
              Elite Technology Partner
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ratan Mia
              </span>
            </h1>
          </div>
          
          <div className="h-16 flex items-center justify-center lg:justify-start">
            <TypewriterText
              words={roles}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
              speed={120}
              deleteSpeed={60}
              delayBetweenWords={2500}
            />
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0"
        >
          Crafting next-generation digital experiences with{' '}
          <span className="text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">10+ years of mastery</span>{' '}
          in cutting-edge web technologies. Transforming ideas into powerful, scalable solutions.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Explore Portfolio</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-bold text-base md:text-lg px-8 py-4 rounded-2xl hover:bg-white/[0.12] hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Project</span>
            <MessageCircle className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0"
        >
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-bold text-white">150+</div>
            <div className="text-sm text-gray-300">Projects</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Profile Card */}
      <motion.div
        className="relative flex justify-center order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem]">
          {/* Main Card */}
          <motion.div 
            className="relative w-full h-full bg-white/[0.08] backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ rotateY: 5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
            
            {/* Profile Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="text-center">
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-4xl shadow-2xl"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  👨‍💻
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Ratan Mia</h3>
                <p className="text-cyan-300 font-semibold mb-1">Full Stack Developer</p>
                <p className="text-gray-300 text-sm mb-4">Dhaka, Bangladesh</p>
                
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300 text-sm font-semibold">Available Now</span>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-center mb-4">Core Technologies</h4>
                <div className="grid grid-cols-4 gap-3">
                  {coreSkills.slice(0, 4).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs text-gray-300">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.3, 1], 
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"
            animate={{ 
              scale: [1.3, 1, 1.3], 
              rotate: [360, 180, 0],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  );

  // Skills Slide - Enhanced Grid Design
  const SkillsSlide = () => (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 px-6 py-3 rounded-full text-sm font-semibold text-purple-300 mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Cpu className="w-4 h-4" />
            <span className="tracking-wider uppercase">Technical Excellence</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Mastering <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Expertise across the full technology stack, delivering cutting-edge solutions with proven methodologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/[0.12] hover:border-cyan-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div 
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                  />
                </div>
                <span className="text-gray-300 text-sm font-semibold">{skill.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/[0.12] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
              <div className="text-cyan-300 font-semibold mb-1">{achievement.label}</div>
              <div className="text-gray-400 text-sm">{achievement.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  // Services Slide - Card-based Layout
  const ServicesSlide = () => (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-xl border border-emerald-400/30 px-6 py-3 rounded-full text-sm font-semibold text-emerald-300 mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Palette className="w-4 h-4" />
            <span className="tracking-wider uppercase">Premium Solutions</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Comprehensive <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            End-to-end digital solutions tailored to transform your business and drive exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/[0.12] hover:border-cyan-400/40 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{service.desc}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-6 h-6 text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#services"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-2xl hover:from-emerald-400 hover:to-green-500 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );

  // Contact Slide - Premium Layout
  const ContactSlide = () => (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 px-6 py-3 rounded-full text-sm font-semibold text-blue-300"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Rocket className="w-4 h-4" />
              <span className="tracking-wider uppercase">Let's Collaborate</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Build Something <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Amazing?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Transform your vision into reality with cutting-edge technology and expert craftsmanship. Let's create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className={`group relative flex flex-col items-center gap-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-semibold p-8 rounded-3xl hover:bg-white/[0.12] hover:border-cyan-400/40 transition-all duration-300 overflow-hidden`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="font-bold text-lg mb-1">{method.label}</div>
                  <div className="text-gray-300 text-sm">{method.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#quote"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base md:text-lg px-10 py-5 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Free Consultation</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-3 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-bold text-base md:text-lg px-10 py-5 rounded-2xl hover:bg-white/[0.12] hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          <motion.div
            className="inline-flex items-center gap-3 text-emerald-300 text-sm font-semibold bg-emerald-500/20 px-6 py-3 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Available for new projects • Response within 2 hours</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <MainHeroSlide />;
      case 1: return <SkillsSlide />;
      case 2: return <ServicesSlide />;
      case 3: return <ContactSlide />;
      default: return <MainHeroSlide />;
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Scroll Progress */}
      <ScrollProgress progress={scrollProgress} />

      {/* Enhanced Particles */}
      <ParticlesBackground />

      <div className="relative z-10 min-h-screen">
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
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>

        {/* Premium Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
          <motion.button
            onClick={prevSlide}
            className="bg-white/[0.08] backdrop-blur-xl rounded-full w-14 h-14 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-white/[0.15] hover:border-cyan-400/50 shadow-2xl"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
          <motion.button
            onClick={nextSlide}
            className="bg-white/[0.08] backdrop-blur-xl rounded-full w-14 h-14 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-white/[0.15] hover:border-cyan-400/50 shadow-2xl"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Enhanced Pagination */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-full px-6 py-4 shadow-2xl">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`group relative flex items-center gap-3 transition-all duration-300 ${
                  currentSlide === index ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 scale-125 shadow-lg'
                      : 'bg-gray-500 group-hover:bg-gray-300'
                  }`}
                />
                <div className={`hidden md:block text-sm font-semibold transition-all duration-300 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                }`}>
                  {slide.title}
                </div>
                
                {currentSlide === index && isAutoPlaying && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 7, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollBottomIndicator 
          isVisible={showScrollIndicator && currentSlide === slides.length - 1} 
          onClick={handleScrollDown}
        />
      </div>
    </section>
  );
};

export default HeroSlider;