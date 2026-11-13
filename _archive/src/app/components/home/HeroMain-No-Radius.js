'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Award,
    CheckCircle,
    ChevronDown,
    Clock,
    Code2,
    Download,
    ExternalLink,
    Globe,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Star,
    Target,
    Users,
    Zap
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const HeroMain = ({ compact = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Rotating role animation
    const roles = ['Full Stack Developer', 'React.js Expert', 'Laravel Specialist', 'Tech Lead'];
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "backOut" }
  };

  // Dynamic styling based on compact mode
  const sectionClasses = compact
    ? "min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden py-12"
    : "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden";

  const containerClasses = compact 
    ? "max-w-5xl mx-auto w-full relative z-10 py-8" 
    : "max-w-7xl mx-auto w-full relative z-10 py-12";

  // Content data
  const roles = ['Full Stack Developer', 'React.js Expert', 'Laravel Specialist', 'Tech Lead'];
  
  const statistics = [
    { 
      icon: Target, 
      number: '150+', 
      label: 'Projects Completed',
      description: 'Successful deliveries',
      color: 'from-yellow-500 to-orange-500',
      textColor: 'text-yellow-400'
    },
    { 
      icon: Award, 
      number: '98%', 
      label: 'Client Satisfaction',
      description: 'Happy clients',
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-400'
    },
    { 
      icon: Users, 
      number: '50+', 
      label: 'Team Members Led',
      description: 'Leadership experience',
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-400'
    },
    { 
      icon: Code2, 
      number: '10+', 
      label: 'Years Experience',
      description: 'Industry expertise',
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400'
    }
  ];

  const keyFeatures = [
    {
      icon: CheckCircle,
      title: '24/7 Availability',
      description: 'Ready to discuss your project anytime',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality',
      color: 'text-yellow-400'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Enterprise-grade solutions and code standards',
      color: 'text-blue-400'
    }
  ];

  const achievements = [
    {
      icon: Globe,
      title: 'Global Reach',
      metric: '25+ Countries',
      description: 'Clients worldwide'
    },
    {
      icon: Clock,
      title: 'Response Time',
      metric: '< 2 Hours',
      description: 'Average response'
    },
    {
      icon: Star,
      title: 'Success Rate',
      metric: '98.5%',
      description: 'Project success'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call',
      value: '+8801751010966',
      href: 'tel:+8801751010966',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat Now',
      href: 'https://wa.me/8801751010966',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'shorifull@gmail.com',
      href: 'mailto:shorifull@gmail.com',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className={sectionClasses}
      style={{ y, opacity }}
    >
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/8 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[400px] md:h-[400px] bg-purple-500/8 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/6 blur-2xl"
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating particles */}
        {[...Array(compact ? 8 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className={containerClasses}>
        {/* Main Hero Content */}
        <div className={`grid ${compact ? 'grid-cols-1 gap-8' : 'lg:grid-cols-2 gap-12 lg:gap-16'} items-center`}>
          
          {/* Left Column - Main Content */}
          <motion.div 
            className={`space-y-8 text-center ${compact ? '' : 'lg:text-left'} ${compact ? 'order-1' : 'order-2 lg:order-1'}`}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Status Badge */}
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 px-6 py-3 backdrop-blur-md shadow-xl"
            >
              <motion.div 
                className="w-3 h-3 bg-green-400 shadow-lg"
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
              <span className="text-green-200 font-bold text-sm tracking-wider uppercase">Available For New Projects</span>
            </motion.div>

            {/* Main Heading with Rotating Role */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.div className="space-y-2">
                <motion.p 
                  className="text-blue-200 text-lg md:text-xl font-medium tracking-wide uppercase"
                  variants={slideInLeft}
                >
                  Professional Web Developer
                </motion.p>
                
                <motion.h1 
                  className={`${compact ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-6xl lg:text-7xl'} font-extrabold leading-tight`}
                  variants={slideInLeft}
                >
                  <span className="block text-white mb-2">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Shorifull Islam
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Ratan
                  </span>
                </motion.h1>

                {/* Animated Role */}
                <motion.div 
                  className="h-12 md:h-14 flex items-center justify-center lg:justify-start"
                  variants={fadeInUp}
                >
                  <motion.span
                    key={currentRole}
                    className={`${compact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[currentRole]}
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className={`${compact ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} text-slate-300 font-light leading-relaxed ${compact ? 'max-w-3xl' : 'max-w-2xl'} mx-auto ${compact ? '' : 'lg:mx-0'}`}>
                Crafting high-performance web applications with{' '}
                <span className="text-white font-semibold">10+ years of expertise</span>. 
                Specializing in React.js, Next.js, and Laravel to deliver exceptional user experiences 
                that drive business growth.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm">
                <span className="text-blue-200">Based in</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-medium">Dhaka, Bangladesh</span>
                </div>
                <span className="text-blue-200">•</span>
                <span className="text-green-400 font-medium">Open to Global Projects</span>
              </div>
            </motion.div>

            {/* Key Features */}
            {compact && (
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color} flex-shrink-0`} />
                    <div>
                      <div className={`font-semibold ${feature.color} text-sm`}>{feature.title}</div>
                      <div className="text-blue-200 text-xs font-light">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Statistics Grid */}
            <motion.div 
              variants={fadeInUp}
              className={`grid ${compact ? 'grid-cols-2' : 'grid-cols-4'} gap-4 py-6`}
            >
              {statistics.slice(0, compact ? 4 : 4).map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="group text-center p-4 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div 
                    className={`${compact ? 'text-2xl' : 'text-3xl'} font-bold ${stat.textColor} mb-1`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white font-medium text-sm mb-1">{stat.label}</div>
                  <div className="text-blue-200 text-xs font-light">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              variants={fadeInUp}
              className={`flex flex-col sm:flex-row gap-4 pt-6 justify-center ${compact ? '' : 'lg:justify-start'}`}
            >
              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-bold text-lg hover:bg-white hover:text-slate-900 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 15px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Project</span>
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements (Only in non-compact mode) */}
          {!compact && (
            <motion.div 
              className="relative flex justify-center order-1 lg:order-2"
              variants={slideInRight}
              initial="initial"
              animate="animate"
            >
              <div className="relative">
                {/* Main Profile Circle */}
                <motion.div
                  className="relative w-80 h-80 xl:w-96 xl:h-96"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {/* Profile Container */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border-4 border-white/30 shadow-2xl overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4">👨‍💻</div>
                        <div className="text-white font-bold text-2xl mb-2">Ratan Mia</div>
                        <div className="text-blue-200 text-lg font-medium mb-2">Full Stack Developer</div>
                        <div className="text-white/70 text-sm">Dhaka, Bangladesh</div>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-300 text-xs font-medium">Available</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rotating Border */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.6), transparent, rgba(147, 51, 234, 0.6), transparent)',
                        mask: 'radial-gradient(circle at center, transparent 46%, white 50%, white 54%, transparent 58%)'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Floating Achievement Cards */}
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      className={`absolute ${
                        index === 0 ? '-top-6 -left-6' : 
                        index === 1 ? '-top-6 -right-6' : 
                        '-bottom-6 -right-6'
                      } bg-white/10 backdrop-blur-lg p-4 border border-white/20 shadow-xl`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <div className="text-center">
                        <achievement.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <div className="text-white font-bold text-lg">{achievement.metric}</div>
                        <div className="text-blue-200 text-xs font-medium">{achievement.title}</div>
                        <div className="text-white/60 text-xs">{achievement.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Orbiting Tech Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  {['⚛️', '🚀', '🔧', '💎', '⚡', '🎯'].map((icon, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl border border-white/20"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '0 0',
                      }}
                      animate={{
                        rotate: 360,
                        x: Math.cos((index * 60) * Math.PI / 180) * 250,
                        y: Math.sin((index * 60) * Math.PI / 180) * 250,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Contact Section (Compact Mode) */}
        {compact && (
          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-2">Ready to Start Your Project?</h4>
              <p className="text-blue-200 font-light">Get in touch and let's discuss your requirements</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-4 p-4 bg-gradient-to-r ${method.color} text-white font-semibold transition-all duration-300 hover:shadow-xl`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.7 + index * 0.1 }}
                >
                  <method.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <div className="font-bold">{method.label}</div>
                    <div className="text-sm opacity-90">{method.value}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Scroll Indicator (Non-Compact Mode) */}
        {!compact && (
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <motion.a 
              href="#tech"
              className="group flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-sm font-medium tracking-wider uppercase">Explore Technologies</span>
              <motion.div
                className="flex flex-col items-center gap-1"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5" />
                <ChevronDown className="w-4 h-4 -mt-2 opacity-60" />
              </motion.div>
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default HeroMain;