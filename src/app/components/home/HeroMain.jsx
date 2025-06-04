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

// Typewriter Effect Component - No changes needed, already aligns with design principles.
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

// Particles Background Component
const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  // Particle class for individual particles
  class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.opacity = 0.5; // Initial opacity
    }

    // Draw the particle
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
      ctx.fill();
      ctx.closePath();
    }

    // Update particle position and properties
    update(ctx, canvas) {
      this.draw(ctx);
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.opacity -= 0.005; // Fade out over time

      // Reset particle if it goes off screen or fades out
      if (this.opacity < 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset(canvas);
      }
    }

    // Reset particle to a new random position and velocity
    reset(canvas) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 1.5 + 0.5; // Smaller particles
      this.opacity = 0.5;
      this.velocity = {
        x: (Math.random() - 0.5) * 0.5, // Slower movement
        y: (Math.random() - 0.5) * 0.5
      };
    }
  }

  // Initialize particles on canvas mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set initial canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize particles on resize to ensure they fit the new dimensions
      particles.current = [];
      for (let i = 0; i < 100; i++) { // Number of particles
        particles.current.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 1.5 + 0.5,
          { r: 173, g: 216, b: 230 }, // Light blue color for particles
          { x: (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 0.5 }
        ));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set up particles

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      ctx.fillStyle = 'transparent'; // Ensure background is transparent
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(particle => {
        particle.update(ctx, canvas);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-10" // Subtle opacity for background effect
      style={{ backgroundColor: 'transparent' }} // Ensure canvas itself is transparent
    />
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
    { icon: Award, number: '8+', label: 'Years', color: 'from-purple-500 to-pink-500' },
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

  // Fade in from bottom animation variant
  const fadeInUp = {
    initial: { opacity: 0, y: 40 }, // Adjusted y from 30 to 40 as per design guidelines
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" } // Changed ease to "easeOut" as per design guidelines
  };

  // Stagger children animation variant
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2 // Added delayChildren for better staggered appearance
      }
    }
  };

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
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-400/30 px-6 py-3 rounded-xl backdrop-blur-md" // Adjusted padding and rounded to xl
        >
          <motion.div
            className="relative w-3 h-3 bg-green-400 rounded-full" // Adjusted size to w-3 h-3
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
          <span className="text-green-200 font-bold text-sm tracking-wider uppercase">Available for Projects</span> {/* Adjusted text size to sm */}
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-4"> {/* Adjusted space-y to 4 */}
          <p className="text-blue-300 text-lg font-semibold tracking-wide uppercase">Professional Web Developer</p> {/* Adjusted text size to lg */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"> {/* Adjusted text sizes as per guidelines */}
            <span className="block text-white mb-2">Hi, I'm</span> {/* Adjusted mb to 2 */}
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ratan Mia
            </span>
          </h1>
          <div className="h-12 flex items-center justify-center lg:justify-start"> {/* Adjusted height to 12 */}
            <TypewriterText
              words={roles}
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" // Adjusted text sizes
              speed={100}
              deleteSpeed={50}
              delayBetweenWords={2000}
            />
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0" // Adjusted text sizes
        >
          Specialized in crafting high-performance web applications with{' '}
          <span className="text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">8+ years of expertise</span>.
          Expert in Laravel, React.js, and WordPress development.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" // Adjusted gap to 4
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" // Adjusted padding, rounded, and text size
            whileHover={{ scale: 1.05, y: -3 }} // Adjusted hover effect as per guidelines
            whileTap={{ scale: 0.95 }} // Adjusted tap effect as per guidelines
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> {/* Adjusted icon size */}
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-bold text-lg rounded-xl hover:border-blue-600 hover:bg-gray-800/50 transition-all duration-300" // Adjusted padding, rounded, and text size
            whileHover={{ scale: 1.05, y: -3 }} // Adjusted hover effect as per guidelines
            whileTap={{ scale: 0.95 }} // Adjusted tap effect as per guidelines
          >
            <span>Start Project</span>
            <MessageCircle className="w-5 h-5" /> {/* Adjusted icon size */}
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
        <div className="relative w-80 h-80 lg:w-96 lg:h-96"> {/* Adjusted sizes */}
          <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-900 to-black backdrop-blur-lg border-4 border-gray-800 shadow-2xl overflow-hidden relative"> {/* Adjusted border to 4 */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-pink-500/8 flex items-center justify-center">
              <div className="text-center z-10 p-6"> {/* Adjusted padding to 6 */}
                <motion.div
                  className="text-6xl lg:text-7xl mb-4" // Adjusted text sizes
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  👨‍💻
                </motion.div>
                <div className="text-white font-black text-2xl lg:text-3xl mb-2">Ratan Mia</div> {/* Adjusted text sizes */}
                <div className="text-blue-200 text-lg lg:text-xl font-bold mb-3">Full Stack Developer</div> {/* Adjusted text sizes */}
                <div className="text-white/70 text-sm mb-3">Dhaka, Bangladesh</div> {/* Adjusted text size */}
                <div className="flex items-center justify-center gap-2"> {/* Adjusted gap to 2 */}
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> {/* Adjusted size to w-2 h-2 */}
                  <span className="text-green-300 text-sm font-bold">Available Now</span> {/* Adjusted text size */}
                </div>
              </div>
            </div>
          </div>
        </div> {/* Corrected closing tag for the div opened on line 393 */}
      </motion.div>
    </div>
  );

  // Slide 2: Skills & Expertise
  const SkillsSlide = () => (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="space-y-8" // Adjusted space-y to 8
          initial={{ opacity: 0, y: 40 }} // Adjusted y from 30 to 40
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4"> {/* Adjusted space-y to 4 */}
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-400/30 px-6 py-3 rounded-xl backdrop-blur-md" // Adjusted padding and rounded to xl
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Code2 className="w-5 h-5 text-purple-400" /> {/* Adjusted icon size */}
              <span className="text-purple-200 font-bold text-sm tracking-wider uppercase">Tech Stack</span> {/* Adjusted text size */}
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight"> {/* Adjusted text sizes as per guidelines */}
              My <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto"> {/* Adjusted text size to xl */}
              Mastering modern technologies to build exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"> {/* Adjusted gap to 4 */}
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-600/50 rounded-xl backdrop-blur-sm hover:shadow-xl transition-all duration-300" // Adjusted padding and rounded to xl
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }} // Adjusted hover effect as per guidelines
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}> {/* Adjusted size and mb */}
                    <skill.icon className="w-6 h-6 text-white" /> {/* Adjusted icon size */}
                  </div>
                  <div className="text-white font-bold text-sm">{skill.name}</div> {/* Adjusted text size */}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12" // Adjusted gap and mt
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            {statistics.map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl"> {/* Adjusted padding and rounded to xl */}
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}> {/* Adjusted size and mb */}
                  <stat.icon className="w-6 h-6 text-white" /> {/* Adjusted icon size */}
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.number}</div> {/* Adjusted text size */}
                <div className="text-blue-200 text-sm font-bold">{stat.label}</div> {/* Adjusted text size */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center"> {/* Adjusted gap to 12 */}
          <motion.div
            className="space-y-6" // Adjusted space-y to 6
            initial={{ opacity: 0, x: -50 }} // Adjusted x from -30 to -50 as per guidelines
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} // Adjusted duration to 0.6
          >
            <div className="space-y-4"> {/* Adjusted space-y to 4 */}
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/15 to-green-500/15 border border-emerald-400/30 px-6 py-3 rounded-xl backdrop-blur-md" // Adjusted padding and rounded to xl
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Briefcase className="w-5 h-5 text-emerald-400" /> {/* Adjusted icon size */}
                <span className="text-emerald-200 font-bold text-sm tracking-wider uppercase">Services</span> {/* Adjusted text size */}
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight"> {/* Adjusted text sizes as per guidelines */}
                What I <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">Offer</span>
              </h2>
              <p className="text-xl text-slate-300 font-light"> {/* Adjusted text size to xl */}
                Comprehensive web development solutions tailored to your business needs
              </p>
            </div>

            <div className="space-y-4"> {/* Adjusted space-y to 4 */}
              {[
                { icon: Globe, title: 'Web Development', desc: 'Custom websites & web applications' },
                { icon: Smartphone, title: 'E-commerce Solutions', desc: 'Shopify & WooCommerce stores' },
                { icon: Server, title: 'Backend Development', desc: 'APIs & database management' },
                { icon: Settings, title: 'Maintenance & Support', desc: '24/7 technical assistance' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl hover:border-emerald-600/50 transition-all duration-300" // Adjusted padding, rounded to xl, and gap
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center shrink-0"> {/* Adjusted size */}
                    <service.icon className="w-6 h-6 text-white" /> {/* Adjusted icon size */}
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">{service.title}</div> {/* Adjusted text size */}
                    <div className="text-slate-400 text-sm">{service.desc}</div> {/* Adjusted text size */}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" // Adjusted padding, rounded, and gap
              whileHover={{ scale: 1.05, y: -3 }} // Adjusted hover effect as per guidelines
              whileTap={{ scale: 0.95 }} // Adjusted tap effect as per guidelines
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" /> {/* Adjusted icon size */}
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }} // Adjusted x from 30 to 50 as per guidelines
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} // Adjusted duration to 0.6
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-gray-800 overflow-hidden"> {/* Adjusted height and rounded to 2xl */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-6xl" // Adjusted text size
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
                  className="absolute w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center" // Adjusted size
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
                  <Icon className="w-6 h-6 text-white" /> {/* Adjusted icon size */}
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
          className="space-y-8" // Adjusted space-y to 8
          initial={{ opacity: 0, y: 40 }} // Adjusted y from 30 to 40
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6"> {/* Adjusted space-y to 6 */}
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/30 px-6 py-3 rounded-xl backdrop-blur-md" // Adjusted padding and rounded to xl
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Rocket className="w-5 h-5 text-blue-400" /> {/* Adjusted icon size */}
              <span className="text-blue-200 font-bold text-sm tracking-wider uppercase">Let's Connect</span> {/* Adjusted text size */}
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight"> {/* Adjusted text sizes as per guidelines */}
              Ready to Start Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto"> {/* Adjusted text size to xl */}
              Get in touch today and let's bring your ideas to life with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"> {/* Adjusted gap to 4 */}
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className={`group relative flex flex-col items-center gap-3 p-6 bg-gradient-to-r ${method.color} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg overflow-hidden`} // Adjusted padding, rounded to xl, and gap
                whileHover={{ scale: 1.05, y: -3 }} // Adjusted hover effect as per guidelines
                whileTap={{ scale: 0.95 }} // Adjusted tap effect as per guidelines
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <method.icon className="relative z-10 w-8 h-8" /> {/* Adjusted icon size */}
                <div className="relative z-10 text-center">
                  <div className="font-black text-lg">{method.label}</div> {/* Adjusted text size */}
                  <div className="text-sm opacity-80">{method.value}</div> {/* Adjusted text size */}
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"> {/* Adjusted gap to 4 */}
            <motion.a
              href="#quote"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" // Adjusted padding, rounded, and text size
              whileHover={{ scale: 1.05, y: -3 }} // Adjusted hover effect as per guidelines
              whileTap={{ scale: 0.95 }} // Adjusted tap effect as per guidelines
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> {/* Adjusted icon size */}
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-bold text-lg rounded-xl hover:border-blue-600 hover:bg-gray-800/50 transition-all duration-300" // Adjusted padding, rounded, and text size
              whileHover={{ scale: 1.05, y: -3 }} // Adjusted hover effect as per guidelines
              whileTap={{ scale: 0.95 }} // Adjusted tap effect as per guidelines
            >
              <Download className="w-5 h-5" /> {/* Adjusted icon size */}
              <span>Download CV</span>
            </motion.a>
          </div>

          <motion.div
            className="inline-flex items-center gap-2 text-green-300 text-sm font-bold" // Adjusted text size
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> {/* Adjusted size */}
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
      className="relative bg-gray-950 text-white overflow-hidden min-h-screen font-inter" // Added font-inter
    >
      {/* Particles Background */}
      <ParticlesBackground />

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
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20"> {/* Adjusted left to 4 */}
          <motion.button
            onClick={prevSlide}
            className="bg-black/50 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-blue-600/30 hover:border-blue-600/50" // Adjusted size
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" /> {/* Adjusted icon size */}
          </motion.button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20"> {/* Adjusted right to 4 */}
          <motion.button
            onClick={nextSlide}
            className="bg-black/50 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-blue-600/30 hover:border-blue-600/50" // Adjusted size
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" /> {/* Adjusted icon size */}
          </motion.button>
        </div>

        {/* Enhanced Pagination */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"> {/* Adjusted bottom to 8 */}
          <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-3"> {/* Adjusted padding and gap */}
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${ // Adjusted size
                    currentSlide === index
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125'
                      : 'bg-white/30 group-hover:bg-white/50'
                  }`}
                />
                <div className={`hidden sm:block text-sm font-medium transition-all duration-300 ${ // Adjusted text size
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
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20" // Adjusted bottom to 20
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: currentSlide === slides.length - 1 ? 1 : 0, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.a
            href="#about"
            className="group relative flex items-center gap-4 px-6 py-3 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-800/50 hover:border-blue-600/50 backdrop-blur-sm hover:shadow-lg" // Adjusted padding and rounded to xl
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <motion.div
              className="relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div> {/* Adjusted size */}
            </motion.div>

            <span className="relative text-sm font-bold tracking-wide">Discover My Work</span> {/* Adjusted text size */}

            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" /> {/* Adjusted icon size */}
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;
