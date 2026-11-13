'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Award,
    CheckCircle,
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

const CompactHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    const roles = ['Full Stack Developer', 'React.js Expert', 'Laravel Specialist', 'Tech Lead'];
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "backOut" }
  };

  const roles = ['Full Stack Developer', 'React.js Expert', 'Laravel Specialist', 'Tech Lead'];
  
  const statistics = [
    { 
      icon: Target, 
      number: '150+', 
      label: 'Projects',
      color: 'from-yellow-500 to-orange-500',
      textColor: 'text-yellow-400'
    },
    { 
      icon: Award, 
      number: '98%', 
      label: 'Satisfaction',
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-400'
    },
    { 
      icon: Users, 
      number: '50+', 
      label: 'Team Members',
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-400'
    },
    { 
      icon: Code2, 
      number: '10+', 
      label: 'Years',
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400'
    }
  ];

  const keyFeatures = [
    {
      icon: CheckCircle,
      title: '24/7 Available',
      description: 'Ready to discuss anytime',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick quality turnaround',
      color: 'text-yellow-400'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Enterprise-grade solutions',
      color: 'text-blue-400'
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
      value: 'Contact',
      href: 'mailto:shorifull@gmail.com',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Enhanced Compact Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-6">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div 
            className="text-center lg:text-left space-y-7 order-2 lg:order-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Status Badge */}
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 px-5 py-2.5 rounded-full backdrop-blur-md"
            >
              <motion.div 
                className="w-2.5 h-2.5 bg-green-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    "0 0 0 8px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-200 font-medium text-sm tracking-wider uppercase">Available For Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.p 
                className="text-blue-200 text-base md:text-lg font-medium tracking-wide uppercase"
                variants={fadeInUp}
              >
                Professional Web Developer
              </motion.p>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={fadeInUp}
              >
                <span className="block text-white mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ratan Mia
                </span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div 
                className="h-10 flex items-center justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <motion.span
                  key={currentRole}
                  className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[currentRole]}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Crafting high-performance web applications with{' '}
                <span className="text-white font-medium">10+ years of expertise</span>. 
                Specializing in React.js, Next.js, and Laravel to deliver exceptional experiences.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm md:text-base">
                <span className="text-blue-200">Based in</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-medium">Dhaka, Bangladesh</span>
                </div>
                <span className="text-blue-200">•</span>
                <span className="text-green-400 font-medium">Global Projects Welcome</span>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto lg:mx-0"
            >
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color} flex-shrink-0`} />
                  <div>
                    <div className={`font-medium ${feature.color} text-sm md:text-base`}>{feature.title}</div>
                    <div className="text-blue-200 text-xs md:text-sm font-light">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Statistics */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto lg:mx-0"
            >
              {statistics.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-xl md:text-2xl font-bold ${stat.textColor}`}>
                    {stat.number}
                  </div>
                  <div className="text-white text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-2xl lg:max-w-none"
            >
              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold text-lg rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Project</span>
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-medium text-base rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              className="pt-8 border-t border-white/10"
              variants={fadeInUp}
            >
              <div className="mb-5 text-center lg:text-left">
                <h4 className="text-xl font-semibold text-white mb-2">Ready to Start?</h4>
                <p className="text-blue-200 text-base font-light">Let's discuss your project requirements</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-3 p-4 bg-gradient-to-r ${method.color} text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg`}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <method.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <div className="flex-1">
                      <div className="font-semibold text-base">{method.label}</div>
                      <div className="text-sm opacity-90">{method.value}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div 
            className="relative flex justify-center order-1 lg:order-2"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="relative">
              {/* Main Profile Circle */}
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Profile Container */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-2 border-white/20 shadow-2xl overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl md:text-8xl mb-4">👨‍💻</div>
                      <div className="text-white font-bold text-2xl md:text-3xl mb-3">Ratan Mia</div>
                      <div className="text-blue-200 text-lg md:text-xl font-medium mb-3">Full Stack Developer</div>
                      <div className="text-white/70 text-base">Dhaka, Bangladesh</div>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-sm font-medium">Available</span>
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
                {[
                  { icon: Globe, metric: '25+', title: 'Countries', position: '-top-5 -left-5' },
                  { icon: Clock, metric: '<2h', title: 'Response', position: '-top-5 -right-5' },
                  { icon: Star, metric: '98.5%', title: 'Success', position: '-bottom-5 -right-5' }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className={`absolute ${achievement.position} bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20 shadow-xl`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <div className="text-center">
                      <achievement.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-white font-bold text-base">{achievement.metric}</div>
                      <div className="text-blue-200 text-sm font-medium">{achievement.title}</div>
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
                      x: Math.cos((index * 60) * Math.PI / 180) * 220,
                      y: Math.sin((index * 60) * Math.PI / 180) * 220,
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
        </div>

        {/* Modern Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.a 
            href="#about"
            className="group relative flex items-center gap-4 px-8 py-4 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:from-white/10 hover:to-white/15"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {/* Pulsing Dot */}
            <motion.div 
              className="relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <motion.div 
                className="absolute inset-0 w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [0.8, 0, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <span className="text-base font-medium tracking-wide">Discover My Work</span>
            
            {/* Animated Arrow */}
            <motion.div
              className="flex items-center"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
            
            {/* Flowing Background */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
              animate={{ 
                background: [
                  'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
                  'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))',
                  'linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                  'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompactHero;