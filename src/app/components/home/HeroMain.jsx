'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Globe,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Server,
  Settings,
  Shield,
  Smartphone,
  Star,
  Target,
  Users,
  Zap
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const CompactHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentSkill, setCurrentSkill] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    const roles = ['Full Stack Developer', 'Laravel Expert', 'React.js Specialist', 'IT Manager'];
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % coreSkills.length);
    }, 2000);
    
    return () => {
      clearInterval(roleInterval);
      clearInterval(skillInterval);
    };
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

  const roles = ['Full Stack Developer', 'Laravel Expert', 'React.js Specialist', 'IT Manager'];
  
  // Skills data from resume
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
    { 
      icon: Target, 
      number: '150+', 
      label: 'Projects',
      color: 'from-yellow-500 to-orange-500',
      textColor: 'text-yellow-400'
    },
    { 
      icon: Award, 
      number: '8+', 
      label: 'Years',
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400'
    },
    { 
      icon: Users, 
      number: '25+', 
      label: 'Countries',
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-400'
    },
    { 
      icon: Star, 
      number: '98%', 
      label: 'Satisfaction',
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-400'
    }
  ];

  const keyFeatures = [
    {
      icon: CheckCircle,
      title: 'Available 24/7',
      description: 'Ready to discuss your project anytime',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quality solutions delivered quickly',
      color: 'text-yellow-400'
    },
    {
      icon: Star,
      title: 'Enterprise Grade',
      description: 'Professional quality solutions',
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/8 rounded-full blur-3xl"
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
        {[...Array(12)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto w-full relative z-10 py-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Main Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8 order-2 lg:order-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Status Badge */}
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 px-6 py-3 rounded-full backdrop-blur-md"
            >
              <motion.div 
                className="w-3 h-3 bg-green-400 rounded-full"
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
              <span className="text-green-200 font-semibold text-sm tracking-wider uppercase">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-5">
              <motion.p 
                className="text-blue-200 text-lg font-medium tracking-wide uppercase"
                variants={fadeInUp}
              >
                Professional Web Developer
              </motion.p>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={fadeInUp}
              >
                <span className="block text-white mb-3">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ratan Mia
                </span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div 
                className="h-12 flex items-center justify-center lg:justify-start"
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

            {/* Enhanced Description */}
            <motion.div variants={fadeInUp} className="space-y-5">
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Specialized in crafting high-performance web applications with{' '}
                <span className="text-white font-semibold">8+ years of expertise</span>. 
                Expert in Laravel, React.js, and WordPress development for enterprise-grade solutions.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm md:text-base">
                <span className="text-blue-200">Based in</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-semibold">Dhaka, Bangladesh</span>
                </div>
                <span className="text-blue-200">•</span>
                <span className="text-green-400 font-semibold">Global Projects Welcome</span>
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
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color} flex-shrink-0`} />
                  <div>
                    <div className={`font-semibold ${feature.color} text-sm md:text-base`}>{feature.title}</div>
                    <div className="text-blue-200 text-xs md:text-sm font-light">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Statistics */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0"
            >
              {statistics.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-xl md:text-2xl font-bold ${stat.textColor}`}>
                    {stat.number}
                  </div>
                  <div className="text-white text-sm font-semibold">{stat.label}</div>
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
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/50 text-white font-bold text-lg rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Project</span>
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-base rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Visual Elements */}
          <motion.div 
            className="relative flex flex-col items-center order-1 lg:order-2 space-y-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {/* Profile Circle */}
            <div className="relative">
              {/* Main Profile Circle with Skills */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Profile Container */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-2 border-white/20 shadow-2xl overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center relative">
                    {/* Center Profile Info */}
                    <div className="text-center z-10">
                      <div className="text-6xl md:text-7xl mb-4">👨‍💻</div>
                      <div className="text-white font-bold text-2xl md:text-3xl mb-2">Ratan Mia</div>
                      <div className="text-blue-200 text-lg md:text-xl font-semibold mb-2">Full Stack Developer</div>
                      
                      {/* Current Skill Display */}
                      <motion.div 
                        key={currentSkill}
                        className="mb-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${coreSkills[currentSkill].color} rounded-full text-white font-semibold text-sm`}>
                          {React.createElement(coreSkills[currentSkill].icon, { className: "w-4 h-4" })}
                          {coreSkills[currentSkill].name}
                        </div>
                      </motion.div>
                      
                      <div className="text-white/70 text-base mb-4">Dhaka, Bangladesh</div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-sm font-semibold">Available</span>
                      </div>
                    </div>

                    {/* Skills Orbit Animation */}
                    <div className="absolute inset-0">
                      {coreSkills.slice(0, 8).map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="absolute w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '0 0',
                          }}
                          animate={{
                            rotate: 360,
                            x: Math.cos((index * 45) * Math.PI / 180) * 140,
                            y: Math.sin((index * 45) * Math.PI / 180) * 140,
                          }}
                          transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5
                          }}
                          whileHover={{ scale: 1.2 }}
                        >
                          {React.createElement(skill.icon, { className: "w-5 h-5 text-white" })}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced Rotating Border */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.8), transparent, rgba(147, 51, 234, 0.8), transparent)',
                      mask: 'radial-gradient(circle at center, transparent 46%, white 50%, white 54%, transparent 58%)'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Enhanced Achievement Cards */}
                {[
                  { icon: Globe, metric: '25+', title: 'Countries', position: '-top-6 -left-6', delay: 1 },
                  { icon: Clock, metric: '<2h', title: 'Response', position: '-top-6 -right-6', delay: 1.2 },
                  { icon: Award, metric: '200%', title: 'Growth', position: '-bottom-6 -left-6', delay: 1.4 },
                  { icon: Star, metric: '98%', title: 'Success', position: '-bottom-6 -right-6', delay: 1.6 }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className={`absolute ${achievement.position} bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-xl`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: achievement.delay, duration: 0.6 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="text-center">
                      <achievement.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-white font-bold text-base">{achievement.metric}</div>
                      <div className="text-blue-200 text-sm font-semibold">{achievement.title}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Quick Contact - Moved to Right Side */}
            <motion.div
              className="w-full max-w-md mt-16 pt-8"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <div className="mb-4 text-center">
                <h4 className="text-lg font-bold text-white mb-1 capitalize">Ready to Start?</h4>
                <p className="text-blue-200 text-sm font-light">Let's discuss your project</p>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-3 p-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg`}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 + index * 0.1 }}
                  >
                    <method.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <div className="flex-1">
                      <div className="font-bold text-sm">{method.label}</div>
                      <div className="text-xs opacity-90">{method.value}</div>
                    </div>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.a 
            href="#about"
            className="group relative flex items-center gap-4 px-8 py-4 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:from-white/10 hover:to-white/15"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <motion.div 
              className="relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <motion.div 
                className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                animate={{ 
                  scale: [1, 2.5, 1],
                  opacity: [0.8, 0, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <span className="text-base font-semibold tracking-wide">Discover My Work</span>
            
            <motion.div
              className="flex items-center"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompactHero;