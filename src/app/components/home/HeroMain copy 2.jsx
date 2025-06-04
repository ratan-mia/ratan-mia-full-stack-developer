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
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
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

  const slideInFromLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInFromRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
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
      label: 'Success',
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-400'
    }
  ];

  const keyFeatures = [
    {
      icon: CheckCircle,
      title: 'Available 24/7',
      description: 'Ready anytime',
      color: 'text-green-400',
      bgGradient: 'from-green-500/10 to-emerald-500/5'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Premium quality',
      color: 'text-yellow-400',
      bgGradient: 'from-yellow-500/10 to-orange-500/5'
    },
    {
      icon: Star,
      title: 'Enterprise Grade',
      description: 'Scalable solutions',
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/5'
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
      className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-12 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Circuit Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 50h25v-25h50v50h-50v25h25' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Ccircle cx='25' cy='25' r='2' fill='%23ffffff'/%3E%3Ccircle cx='75' cy='75' r='2' fill='%23ffffff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23circuit)'/%3E%3C/svg%3E")`,
            backgroundSize: '400px 400px'
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 10h100M0 20h100M0 30h100M0 40h100M0 50h100M0 60h100M0 70h100M0 80h100M0 90h100M10 0v100M20 0v100M30 0v100M40 0v100M50 0v100M60 0v100M70 0v100M80 0v100M90 0v100' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
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
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/6 rounded-full blur-3xl"
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

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6 order-2 lg:order-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Status Badge */}
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-400/30 px-6 py-3 rounded-xl backdrop-blur-md"
            >
              <motion.div 
                className="relative w-3 h-3 bg-green-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    "0 0 0 8px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
              </motion.div>
              <span className="text-green-200 font-bold text-sm tracking-wider uppercase">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={slideInFromLeft} className="space-y-4">
              <motion.p 
                className="text-blue-300 text-lg font-semibold tracking-wide uppercase"
                variants={fadeInUp}
              >
                Professional Web Developer
              </motion.p>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                variants={fadeInUp}
              >
                <span className="block text-white mb-2">Hi, I'm</span>
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
                  className="block text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRole]}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div variants={slideInFromLeft} className="space-y-4">
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Specialized in crafting high-performance web applications with{' '}
                <span className="text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">8+ years of expertise</span>. 
                Expert in Laravel, React.js, and WordPress development.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm md:text-base">
                <span className="text-blue-200">Based in</span>
                <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/20 px-3 py-1 rounded-full">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-bold">Dhaka, Bangladesh</span>
                </div>
                <span className="text-blue-200">•</span>
                <span className="text-green-400 font-bold">Global Projects</span>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              variants={slideInFromLeft}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0"
            >
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative p-4 bg-gradient-to-b from-gray-900 to-black border border-gray-800 group-hover:border-blue-600/50 rounded-xl backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="relative z-10 text-center">
                    <motion.div
                      className={`w-10 h-10 mx-auto mb-3 ${feature.color} flex items-center justify-center rounded-lg bg-gradient-to-br ${feature.bgGradient} border border-gray-700`}
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon className="w-5 h-5" />
                    </motion.div>
                    <div className={`font-bold ${feature.color} text-sm mb-1`}>{feature.title}</div>
                    <div className="text-blue-200 text-xs">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={slideInFromLeft}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Portfolio</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-bold text-lg rounded-xl hover:border-blue-600 hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Start Project</span>
                <MessageCircle className="relative z-10 w-5 h-5" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div 
            className="relative flex flex-col items-center order-1 lg:order-2 space-y-6"
            variants={slideInFromRight}
            initial="initial"
            animate="animate"
          >
            {/* Profile Circle */}
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {/* Profile Container */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-900 to-black backdrop-blur-lg border-4 border-gray-800 shadow-2xl overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-pink-500/8 flex items-center justify-center relative">
                    {/* Center Profile Info */}
                    <div className="text-center z-10 p-6">
                      <motion.div 
                        className="text-6xl lg:text-7xl mb-4"
                        animate={{ 
                          scale: [1, 1.02, 1],
                          rotateY: [0, 3, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        👨‍💻
                      </motion.div>
                      <div className="text-white font-black text-2xl lg:text-3xl mb-2">Ratan Mia</div>
                      <div className="text-blue-200 text-lg lg:text-xl font-bold mb-3">Full Stack Developer</div>
                      
                      {/* Current Skill Display */}
                      <motion.div 
                        key={currentSkill}
                        className="mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${coreSkills[currentSkill].color} rounded-xl text-white font-bold text-sm shadow-lg`}>
                          {React.createElement(coreSkills[currentSkill].icon, { className: "w-4 h-4" })}
                          {coreSkills[currentSkill].name}
                        </div>
                      </motion.div>
                      
                      <div className="text-white/70 text-sm mb-3">Dhaka, Bangladesh</div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="relative">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-green-300 text-sm font-bold">Available Now</span>
                      </div>
                    </div>

                    {/* Skills Orbit Animation */}
                    <div className="absolute inset-0">
                      {coreSkills.slice(0, 6).map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="absolute w-10 h-10 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 backdrop-blur-sm rounded-lg flex items-center justify-center hover:border-blue-600/50 transition-all duration-300 group"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '0 0',
                          }}
                          animate={{
                            rotate: 360,
                            x: Math.cos((index * 60) * Math.PI / 180) * 120,
                            y: Math.sin((index * 60) * Math.PI / 180) * 120,
                          }}
                          transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5
                          }}
                          whileHover={{ scale: 1.2 }}
                        >
                          {React.createElement(skill.icon, { className: "w-4 h-4 text-white" })}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Rotating Borders */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.6), transparent, rgba(147, 51, 234, 0.6), transparent)',
                      mask: 'radial-gradient(circle at center, transparent 46%, white 48%, white 52%, transparent 54%)'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Achievement Cards */}
                {[
                  { icon: Globe, metric: '25+', title: 'Countries', position: '-top-4 -left-4', delay: 0.8, color: 'from-blue-500 to-cyan-500' },
                  { icon: Clock, metric: '<2h', title: 'Response', position: '-top-4 -right-4', delay: 1, color: 'from-green-500 to-emerald-500' },
                  { icon: Award, metric: '8+', title: 'Years', position: '-bottom-4 -left-4', delay: 1.2, color: 'from-purple-500 to-pink-500' },
                  { icon: Star, metric: '98%', title: 'Success', position: '-bottom-4 -right-4', delay: 1.4, color: 'from-yellow-500 to-orange-500' }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className={`group absolute ${achievement.position} bg-gradient-to-b from-gray-900 to-black backdrop-blur-lg p-4 rounded-xl border border-gray-800 group-hover:border-blue-600/50 shadow-xl transition-all duration-300`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: achievement.delay, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <div className="relative z-10 text-center min-w-[80px]">
                      <div className={`w-8 h-8 mx-auto mb-2 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center`}>
                        <achievement.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-white font-black text-lg">{achievement.metric}</div>
                      <div className="text-blue-200 text-xs font-bold">{achievement.title}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Statistics Grid */}
            <motion.div 
              className="w-full max-w-md grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {statistics.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="group relative text-center p-4 bg-gradient-to-b from-gray-900 to-black border border-gray-800 group-hover:border-blue-600/50 rounded-xl backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="relative z-10">
                    <div className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <stat.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className={`text-xl font-black ${stat.textColor} mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-white text-xs font-bold">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              <div className="mb-4 text-center">
                <h4 className="text-xl font-black text-white mb-1">Ready to Start?</h4>
                <p className="text-blue-200 text-sm">Let's discuss your project</p>
              </div>
              
              <div className="space-y-2">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className={`group relative flex items-center gap-3 p-3 bg-gradient-to-r ${method.color} text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg overflow-hidden`}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.4 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <method.icon className="relative z-10 w-5 h-5" />
                    <div className="relative z-10 flex-1">
                      <div className="font-black text-sm">{method.label}</div>
                    </div>
                    <ExternalLink className="relative z-10 w-3 h-3 opacity-60" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          <motion.a 
            href="#about"
            className="group relative flex items-center gap-4 px-6 py-3 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-600/50 backdrop-blur-sm hover:shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <motion.div 
              className="relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </motion.div>
            
            <span className="relative text-sm font-bold tracking-wide">Discover My Work</span>
            
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompactHero;