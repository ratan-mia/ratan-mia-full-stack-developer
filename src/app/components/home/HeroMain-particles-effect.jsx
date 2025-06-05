'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  Eye,
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
  Users,
  Zap
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Advanced Typewriter Effect with Glitch
const TypewriterText = ({ words, className = "", speed = 80, deleteSpeed = 40, delayBetweenWords = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
          if (Math.random() < 0.1) {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 100);
          }
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
    <span className={`${className} ${isGlitching ? 'animate-pulse text-red-400' : ''}`}>
      {currentText}
      <motion.span
        className="inline-block w-1 h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 ml-1"
        animate={{ 
          opacity: [0, 1, 0],
          scaleY: [1, 1.2, 1],
          backgroundColor: ['#06b6d4', '#3b82f6', '#8b5cf6', '#06b6d4']
        }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </span>
  );
};

// Matrix Code Rain Effect
const MatrixRain = () => {
  const canvasRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0ff';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = `hsl(${180 + Math.sin(Date.now() * 0.001) * 60}, 70%, ${50 + Math.random() * 30}%)`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-15"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

// Floating Geometric Shapes
const FloatingShapes = () => {
  const shapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    color: ['cyan', 'blue', 'purple', 'pink', 'emerald'][Math.floor(Math.random() * 5)],
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute opacity-5 blur-sm`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            rotate: [0, 360, 180, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {shape.shape === 'circle' && (
            <div className={`w-full h-full bg-gradient-to-br from-${shape.color}-400 to-${shape.color}-600 rounded-full`} />
          )}
          {shape.shape === 'square' && (
            <div className={`w-full h-full bg-gradient-to-br from-${shape.color}-400 to-${shape.color}-600 rounded-lg rotate-45`} />
          )}
          {shape.shape === 'triangle' && (
            <div 
              className={`w-full h-full bg-gradient-to-br from-${shape.color}-400 to-${shape.color}-600`}
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Interactive Cursor Trail
const CursorTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrail(prev => [...prev.slice(-15), newPoint]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
};

// Live Counter Component
const LiveCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * end);
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

// Scroll Progress and Indicator
const ScrollProgress = ({ progress }) => (
  <motion.div
    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-50 origin-left"
    style={{ scaleX: progress }}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: progress }}
    transition={{ type: "spring", stiffness: 400, damping: 40 }}
  />
);

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
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  const slides = [
    { id: 'hero', title: 'Home', subtitle: 'Welcome' },
    { id: 'skills', title: 'Skills', subtitle: 'Expertise' },
    { id: 'services', title: 'Services', subtitle: 'Solutions' },
    { id: 'contact', title: 'Contact', subtitle: 'Connect' }
  ];

  // Data for components
  const roles = ['Full Stack Developer', 'Laravel Expert', 'React.js Specialist', 'Digital Innovation Leader'];
  
  const coreSkills = [
    { name: 'PHP', icon: Code2, color: 'from-purple-600 to-blue-600', proficiency: 95 },
    { name: 'Laravel', icon: Server, color: 'from-red-600 to-orange-600', proficiency: 98 },
    { name: 'React.js', icon: Layers, color: 'from-cyan-600 to-blue-600', proficiency: 92 },
    { name: 'WordPress', icon: Monitor, color: 'from-blue-600 to-indigo-600', proficiency: 90 },
    { name: 'MySQL', icon: Database, color: 'from-green-600 to-teal-600', proficiency: 88 },
    { name: 'JavaScript', icon: Settings, color: 'from-yellow-600 to-orange-600', proficiency: 94 },
    { name: 'Docker', icon: Cloud, color: 'from-blue-600 to-cyan-600', proficiency: 85 },
    { name: 'Git', icon: GitBranch, color: 'from-orange-600 to-red-600', proficiency: 91 }
  ];

  const achievements = [
    { icon: Target, number: 150, label: 'Projects', color: 'from-yellow-600 to-orange-600' },
    { icon: Award, number: 8, label: 'Years', color: 'from-purple-600 to-pink-600' },
    { icon: Users, number: 25, label: 'Countries', color: 'from-blue-600 to-cyan-600' },
    { icon: Star, number: 98, label: 'Success Rate', color: 'from-green-600 to-emerald-600' }
  ];

  const services = [
    { 
      icon: Globe, 
      title: 'Full Stack Development', 
      desc: 'Custom web applications with modern technologies',
      features: ['Custom Web Apps', 'API Development', 'Database Design'],
      color: 'from-blue-600 to-cyan-600',
      clients: 50
    },
    { 
      icon: Smartphone, 
      title: 'E-commerce Solutions', 
      desc: 'High-converting online stores and marketplaces',
      features: ['Shopify Stores', 'WooCommerce', 'Payment Systems'],
      color: 'from-emerald-600 to-green-600',
      clients: 30
    },
    { 
      icon: Shield, 
      title: 'Enterprise Applications', 
      desc: 'Scalable solutions for large-scale operations',
      features: ['Custom CRM', 'ERP Systems', 'Cloud Solutions'],
      color: 'from-purple-600 to-pink-600',
      clients: 15
    },
    { 
      icon: Zap, 
      title: 'Performance Optimization', 
      desc: 'Speed and efficiency improvements',
      features: ['Site Speed', 'SEO Enhancement', 'Code Review'],
      color: 'from-orange-600 to-red-600',
      clients: 40
    }
  ];

  const contactMethods = [
    { icon: Phone, label: 'Call Now', value: '+8801751010966', href: 'tel:+8801751010966', color: 'from-green-600 to-emerald-600', response: '< 1 min' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Quick Chat', href: 'https://wa.me/8801751010966', color: 'from-emerald-600 to-green-600', response: '< 5 min' },
    { icon: Mail, label: 'Email', value: 'Professional', href: 'mailto:shorifull@gmail.com', color: 'from-blue-600 to-indigo-600', response: '< 2 hours' }
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
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 15 : -15
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

  // 1. Hero Component (Slide 0)
  const HeroSlide = () => (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <motion.div
        className="text-center lg:text-left space-y-6 order-2 lg:order-1"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Status Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 px-6 py-3 rounded-full text-sm font-semibold text-cyan-300"
        >
          <motion.div
            className="relative w-3 h-3"
            animate={{ scale: [1, 1.4, 1] }}
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
          <div className="space-y-4">
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
              speed={80}
              deleteSpeed={40}
              delayBetweenWords={2000}
            />
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0"
        >
          Crafting next-generation digital experiences with{' '}
          <span className="text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">8+ years of mastery</span>{' '}
          in cutting-edge web technologies.
        </motion.p>

        {/* Quick Stats */}
        <motion.div 
          variants={fadeInUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0"
        >
          {achievements.slice(0, 4).map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/[0.1] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-white">
                <LiveCounter end={stat.number} duration={2} />
                {stat.label === 'Success Rate' && '%'}
                {stat.label === 'Projects' && '+'}
                {stat.label === 'Years' && '+'}
                {stat.label === 'Countries' && '+'}
              </div>
              <div className="text-xs text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

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
            <motion.div
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ x: [-100, 200] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">View Portfolio</span>
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
      </motion.div>

      {/* Revolutionary 3D Profile Card */}
      <motion.div
        className="relative flex justify-center order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.8, rotateY: -25 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className="relative w-80 h-[500px] sm:w-96 sm:h-[600px]">
          <motion.div 
            className="relative w-full h-full bg-gradient-to-br from-white/[0.1] via-cyan-500/[0.05] to-purple-500/[0.1] backdrop-blur-2xl border border-cyan-400/30 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20"
            animate={{ 
              rotateY: [0, 5, -5, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            whileHover={{ 
              rotateY: 10, 
              scale: 1.05,
              boxShadow: '0 35px 70px -12px rgba(6, 182, 212, 0.4)'
            }}
          >
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="text-center">
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-cyan-500/30 relative overflow-hidden"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: [-100, 200] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">👨‍💻</span>
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-2">Ratan Mia</h3>
                <p className="text-cyan-300 font-semibold text-lg mb-1">Full Stack Architect</p>
                <p className="text-gray-300 text-sm mb-4">Dhaka, Bangladesh</p>
                
                <motion.div 
                  className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-xl px-4 py-2 rounded-full border border-emerald-400/30"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(34, 197, 94, 0.3)',
                      '0 0 30px rgba(34, 197, 94, 0.6)',
                      '0 0 20px rgba(34, 197, 94, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-emerald-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(34, 197, 94, 0.7)',
                        '0 0 0 8px rgba(34, 197, 94, 0)',
                        '0 0 0 0 rgba(34, 197, 94, 0)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-emerald-300 text-sm font-bold">Available Now</span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold text-center mb-4 text-lg">Core Technologies</h4>
                <div className="grid grid-cols-4 gap-3">
                  {coreSkills.slice(0, 4).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="text-center cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <motion.div 
                        className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}
                        animate={{
                          boxShadow: hoveredSkill?.name === skill.name ? 
                            '0 10px 30px rgba(6, 182, 212, 0.6)' : 
                            '0 5px 15px rgba(0, 0, 0, 0.3)'
                        }}
                      >
                        <skill.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="text-xs text-gray-300 font-semibold">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className="text-center space-y-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center justify-center gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
                <div className="text-cyan-400 text-sm font-bold">Currently: Building Amazing Projects</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Orbs */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
              style={{
                top: `${20 + i * 15}%`,
                left: `${-10 + (i % 2) * 120}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );

  // 2. Skills Component (Slide 1)
  const SkillsSlide = () => (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 px-6 py-3 rounded-full text-sm font-semibold text-purple-300 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-4 h-4" />
            </motion.div>
            <span className="tracking-wider uppercase">Technical Mastery</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Skills That <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Dominate</span>
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Mastering cutting-edge technologies to build the impossible
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(6, 182, 212, 0.3)'
              }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="relative z-10 text-center">
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                  animate={{
                    rotateY: hoveredSkill?.name === skill.name ? 360 : 0,
                    scale: hoveredSkill?.name === skill.name ? 1.2 : 1
                  }}
                  transition={{ duration: 1 }}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-white font-bold text-lg mb-3">{skill.name}</h3>
                
                <div className="w-full bg-gray-700/50 rounded-full h-3 mb-3 overflow-hidden">
                  <motion.div 
                    className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ delay: 1 + index * 0.1, duration: 1.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
                
                <span className="text-white text-lg font-bold">{skill.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/[0.15] transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl relative`}
                animate={{ 
                  boxShadow: [
                    '0 10px 30px rgba(0,0,0,0.3)',
                    '0 15px 40px rgba(6,182,212,0.4)',
                    '0 10px 30px rgba(0,0,0,0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <LiveCounter end={achievement.number} duration={3} />
                {achievement.label === 'Success Rate' && '%'}
                {achievement.label === 'Projects' && '+'}
                {achievement.label === 'Years' && '+'}
                {achievement.label === 'Countries' && '+'}
              </motion.div>
              
              <div className="text-cyan-300 font-semibold text-lg">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  // 3. Services Component (Slide 2)
  const ServicesSlide = () => (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-xl border border-emerald-400/30 px-6 py-3 rounded-full text-sm font-semibold text-emerald-300 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4" />
            <span className="tracking-wider uppercase">Premium Solutions</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Services That <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Revolutionary solutions that drive real business results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-500 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(6, 182, 212, 0.2)'
              }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex items-start gap-6">
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shrink-0 shadow-2xl`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 15,
                    boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)'
                  }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed text-lg">{service.desc}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + featureIndex * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">{service.clients}+ clients</span>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8 text-cyan-400" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#services"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg px-10 py-5 rounded-2xl hover:from-emerald-400 hover:to-green-500 transition-all duration-300 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ x: [-100, 200] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">Explore All Solutions</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );

  // 4. Contact Component (Slide 3)
  const ContactSlide = () => (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 px-6 py-3 rounded-full text-sm font-semibold text-blue-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-4 h-4" />
              </motion.div>
              <span className="tracking-wider uppercase">Let's Create Magic</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Build Something{' '}
              <span className="block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Extraordinary?
                </span>
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Transform your wildest ideas into digital reality with cutting-edge technology and unmatched expertise.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className={`group relative flex flex-col items-center gap-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-semibold p-6 rounded-2xl hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-500 overflow-hidden`}
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <motion.div 
                  className={`relative z-10 w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                  animate={{
                    boxShadow: [
                      '0 20px 40px rgba(6, 182, 212, 0.3)',
                      '0 25px 50px rgba(59, 130, 246, 0.5)',
                      '0 20px 40px rgba(6, 182, 212, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 15,
                    boxShadow: '0 30px 60px rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="relative z-10 text-center">
                  <div className="font-bold text-lg mb-2">{method.label}</div>
                  <div className="text-gray-300 text-sm mb-3">{method.value}</div>
                  <motion.div 
                    className="inline-flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-xs font-bold">Response: {method.response}</span>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <motion.a
              href="#quote"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg px-12 py-6 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: [-100, 200] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative z-10">Get Free Consultation</span>
              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-3 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-bold text-lg px-12 py-6 rounded-2xl hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Download className="relative z-10 w-6 h-6" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {[
              { icon: Clock, number: 24, label: 'Hours Available', suffix: '/7' },
              { icon: Target, number: 98, label: 'Success Rate', suffix: '%' },
              { icon: Eye, number: 2, label: 'Response Time', suffix: 'hrs' },
              { icon: Award, number: 150, label: 'Happy Clients', suffix: '+' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center bg-white/[0.08] backdrop-blur-xl rounded-xl p-3">
                <div className="text-lg font-bold text-white">
                  <LiveCounter end={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Status */}
          <motion.div
            className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 px-8 py-4 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.div 
              className="w-3 h-3 bg-emerald-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 0 0 rgba(34, 197, 94, 0.7)',
                  '0 0 0 10px rgba(34, 197, 94, 0)',
                  '0 0 0 0 rgba(34, 197, 94, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-emerald-300 font-bold">
              Available for elite projects • Lightning-fast response guaranteed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <HeroSlide />;
      case 1: return <SkillsSlide />;
      case 2: return <ServicesSlide />;
      case 3: return <ContactSlide />;
      default: return <HeroSlide />;
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen"
    >
      {/* Ultimate Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/3 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Advanced Effects */}
      <MatrixRain />
      <FloatingShapes />
      <CursorTrail />

      {/* Scroll Progress */}
      <ScrollProgress progress={scrollProgress} />

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
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              rotateY: { duration: 0.5 }
            }}
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>

        {/* Ultimate Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
          <motion.button
            onClick={prevSlide}
            className="group bg-white/[0.08] backdrop-blur-xl rounded-full w-16 h-16 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-white/[0.15] hover:border-cyan-400/50 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <ChevronLeft className="relative z-10 w-8 h-8" />
          </motion.button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
          <motion.button
            onClick={nextSlide}
            className="group bg-white/[0.08] backdrop-blur-xl rounded-full w-16 h-16 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-white/[0.15] hover:border-cyan-400/50 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <ChevronRight className="relative z-10 w-8 h-8" />
          </motion.button>
        </div>

        {/* Ultimate Pagination */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-6 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
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
                <motion.div
                  className={`w-4 h-4 rounded-full transition-all duration-300 relative overflow-hidden ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 scale-125 shadow-lg shadow-cyan-400/50'
                      : 'bg-gray-500 group-hover:bg-gray-300'
                  }`}
                >
                  {currentSlide === index && (
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{ x: [-20, 20, -20] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                
                <div className={`hidden md:block text-sm font-semibold transition-all duration-300 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                }`}>
                  {slide.title}
                </div>
                
                {currentSlide === index && isAutoPlaying && (
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"
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
        <ScrollBottomIndicator 
          isVisible={showScrollIndicator && currentSlide === slides.length - 1} 
          onClick={handleScrollDown}
        />
      </div>
    </section>
  );
};

export default HeroSlider;