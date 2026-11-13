'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    Briefcase,
    ChevronDown,
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
        className="inline-block w-0.5 h-6 md:h-8 bg-gradient-to-b from-blue-400 to-purple-400 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

// Enhanced Particles Background Component
const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
      ctx.fill();
      ctx.closePath();
    }

    update(ctx, canvas) {
      this.draw(ctx);
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.opacity -= 0.003;

      if (this.opacity < 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset(canvas);
      }
    }

    reset(canvas) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.velocity = {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3
      };
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles.current = [];
      const particleCount = window.innerWidth < 768 ? 50 : 80;
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 2 + 0.5,
          { r: 59, g: 130, b: 246 },
          { x: (Math.random() - 0.5) * 0.3, y: (Math.random() - 0.5) * 0.3 }
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
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-20"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

// Scroll Progress Indicator
const ScrollProgress = ({ progress }) => (
  <motion.div
    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
    style={{ scaleX: progress }}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: progress }}
    transition={{ type: "spring", stiffness: 400, damping: 40 }}
  />
);

// Enhanced Hero Slider Component
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  const roles = ['Full Stack Developer', 'Laravel Expert', 'React.js Specialist', 'IT Manager', 'Cloud Architect'];

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

  // Enhanced scroll progress tracking
  useEffect(() => {
    const updateScrollProgress = () => {
      if (containerRef.current) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollTop / docHeight;
        setScrollProgress(Math.min(progress, 1));
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

  // Enhanced slide transition variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9
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
      scale: 0.9
    })
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Slide 1: Enhanced Main Hero
  const MainHeroSlide = () => (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <motion.div
        className="text-center lg:text-left space-y-8 order-2 lg:order-1"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Enhanced Status Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-green-400/30 px-6 py-3 rounded-2xl shadow-lg"
        >
          <motion.div
            className="relative w-3 h-3 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.7)",
                "0 0 0 8px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-green-200 font-bold text-sm tracking-wider uppercase">Available for Projects</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-6">
          <p className="text-blue-300 text-lg md:text-xl font-semibold tracking-wide uppercase">Professional Web Developer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ratan Mia
            </span>
          </h1>
          <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start">
            <TypewriterText
              words={roles}
              className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              speed={100}
              deleteSpeed={50}
              delayBetweenWords={2000}
            />
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
        >
          Specialized in crafting high-performance web applications with{' '}
          <span className="text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10+ years of expertise</span>.
          Expert in Laravel, React.js, and WordPress development.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-gray-700 text-white font-bold text-base md:text-lg rounded-2xl hover:border-blue-600 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Project</span>
            <MessageCircle className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enhanced Profile Visual */}
      <motion.div
        className="relative flex justify-center order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
          <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-lg border-4 border-white/20 shadow-2xl overflow-hidden relative">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <div className="text-center z-10 p-6">
                <motion.div
                  className="text-5xl sm:text-6xl lg:text-7xl mb-4"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  👨‍💻
                </motion.div>
                <div className="text-white font-black text-xl sm:text-2xl lg:text-3xl mb-2">Ratan Mia</div>
                <div className="text-blue-200 text-lg sm:text-xl font-bold mb-3">Full Stack Developer</div>
                <div className="text-white/70 text-sm mb-4">Dhaka, Bangladesh</div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-bold">Available Now</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating background elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  );

  // Enhanced Skills Slide
  const SkillsSlide = () => (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-purple-400/30 px-6 py-3 rounded-2xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Code2 className="w-5 h-5 text-purple-400" />
              <span className="text-purple-200 font-bold text-sm tracking-wider uppercase">Tech Stack</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              My <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto">
              Mastering modern technologies to build exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-600/50 rounded-2xl hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-bold text-sm md:text-base">{skill.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            {statistics.map((stat, index) => (
              <div key={stat.label} className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  // Enhanced Services Slide
  const ServicesSlide = () => (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-emerald-400/30 px-6 py-3 rounded-2xl shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-200 font-bold text-sm tracking-wider uppercase">Services</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                What I <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">Offer</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-light">
                Comprehensive web development solutions tailored to your business needs
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Globe, title: 'Web Development', desc: 'Custom websites & web applications' },
                { icon: Smartphone, title: 'E-commerce Solutions', desc: 'Shopify & WooCommerce stores' },
                { icon: Server, title: 'Backend Development', desc: 'APIs & database management' },
                { icon: Settings, title: 'Maintenance & Support', desc: '24/7 technical assistance' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-center gap-4 p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:border-emerald-600/50 transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base md:text-lg">{service.title}</div>
                    <div className="text-slate-400 text-sm md:text-base">{service.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-base md:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full h-80 md:h-96 bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-5xl md:text-6xl"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  🚀
                </motion.div>
              </div>

              {/* Enhanced floating icons */}
              {[Globe, Code2, Server, Database].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    top: `${20 + index * 20}%`,
                    left: `${15 + (index % 2) * 70}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  // Enhanced Contact Slide
  const ContactSlide = () => (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-blue-400/30 px-6 py-3 rounded-2xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Rocket className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-bold text-sm tracking-wider uppercase">Let's Connect</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              Ready to Start Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
              Get in touch today and let's bring your ideas to life with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className={`group relative flex flex-col items-center gap-3 p-6 bg-gradient-to-r ${method.color} text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl overflow-hidden`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <method.icon className="relative z-10 w-8 h-8" />
                <div className="relative z-10 text-center">
                  <div className="font-black text-base md:text-lg">{method.label}</div>
                  <div className="text-sm opacity-80">{method.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#quote"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-gray-700 text-white font-bold text-base md:text-lg rounded-2xl hover:border-blue-600 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </div>

          <motion.div
            className="inline-flex items-center gap-2 text-green-300 text-sm md:text-base font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
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
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen font-inter"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgress progress={scrollProgress} />

      {/* Particles Background */}
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

        {/* Enhanced Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
          <motion.button
            onClick={prevSlide}
            className="bg-white/10 backdrop-blur-md rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-blue-600/30 hover:border-blue-600/50 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </motion.button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
          <motion.button
            onClick={nextSlide}
            className="bg-white/10 backdrop-blur-md rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-blue-600/30 hover:border-blue-600/50 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </motion.button>
        </div>

        {/* Enhanced Pagination */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 shadow-lg">
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125 shadow-lg'
                      : 'bg-white/30 group-hover:bg-white/50'
                  }`}
                />
                <div className={`hidden sm:block text-sm font-medium transition-all duration-300 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                }`}>
                  {slide.title}
                </div>
                
                {/* Enhanced progress bar */}
                {currentSlide === index && isAutoPlaying && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 7, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: currentSlide === slides.length - 1 ? 1 : 0, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.a
            href="#about"
            className="group relative flex flex-col items-center gap-4 px-6 py-4 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-600/50 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <span className="relative text-sm font-bold tracking-wide">Discover My Work</span>
            
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
              <ChevronDown className="w-4 h-4 opacity-60" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;