'use client';
import { motion, useScroll } from 'framer-motion';
import {
  AlertCircle,
  ArrowUp,
  Award,
  Briefcase,
  CheckCircle,
  Clock,
  Code,
  ExternalLink,
  Gauge,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Send,
  Settings,
  Shield,
  Star,
  Users,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

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
        className="inline-block w-0.5 h-4 bg-blue-400 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

// Floating Scroll to Top Button
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 500);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl border border-blue-800/30 backdrop-blur-sm group cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
      
      {/* Glow effect */}
      <div className="absolute -right-5 -top-5 w-20 h-20 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-full blur-2xl transition-all duration-300"></div>
    </motion.button>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle');
  
  const statusWords = ['High-Performance', 'Precision-Engineered', 'Racing-Inspired', 'Premium-Quality'];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
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

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Me', href: '#about', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Award },
    { name: 'Timeline', href: '#timeline', icon: Clock },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const services = [
    { name: 'Full Stack Development', icon: Code },
    { name: 'React.js Applications', icon: Rocket },
    { name: 'Next.js Websites', icon: Globe }, 
    { name: 'WordPress Development', icon: Globe },
    { name: 'E-commerce Solutions', icon: Briefcase },
    { name: 'Performance Optimization', icon: Zap }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: Linkedin,
      color: 'from-blue-600/20 to-purple-900/20',
      borderColor: 'border-blue-800/30',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github,
      color: 'from-blue-600/20 to-purple-900/20',
      borderColor: 'border-blue-800/30',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Website',
      href: 'https://shorifullislamratan.com',
      icon: Globe,
      color: 'from-blue-600/20 to-purple-900/20',
      borderColor: 'border-blue-800/30',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801751010966',
      icon: MessageCircle,
      color: 'from-blue-600/20 to-purple-900/20',
      borderColor: 'border-blue-800/30',
      hoverColor: 'hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shorifull@gmail.com',
      href: 'mailto:shorifull@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 175 101 0966',
      href: 'tel:+8801751010966',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'text-blue-400'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects', icon: Briefcase, color: 'from-blue-500 to-purple-500' },
    { number: '8+', label: 'Years', icon: Award, color: 'from-purple-500 to-pink-500' },
    { number: '25+', label: 'Countries', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '98%', label: 'Success', icon: Star, color: 'from-green-500 to-emerald-500' }
  ];

  const handleNewsletterSubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubscribeStatus('error');
      return;
    }

    setSubscribeStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  // Carbon Fiber Background Pattern
  const CarbonFiberPattern = () => (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='carbon' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 15h15v-15h15v30h-15v15h-15z' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.3'/%3E%3Cpath d='M15 0v30M0 15h30' stroke='%23ffffff' stroke-width='0.2' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='60' height='60' fill='url(%23carbon)'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );

  // Floating Animation Component with Blue Glow Effects
  const AutomotiveGlowEffects = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main ambient glows */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-purple-600/5 rounded-full blur-2xl"
        animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-3/4 left-1/2 w-32 h-32 bg-blue-600/8 rounded-full blur-xl"
        animate={{ x: [0, -30, 0], y: [0, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Racing-inspired light particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.6, 0.2],
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

  return (
    <>
      <ScrollToTopButton />
      
      <footer className="relative bg-gray-950 text-white overflow-hidden">
        <CarbonFiberPattern />
        <AutomotiveGlowEffects />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Automotive CTA Banner */}
          <motion.div 
            className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center text-white mb-12 md:mb-16 border border-blue-800/30 overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Racing stripe effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-60"></div>
            
            {/* Glow effect on hover */}
            <div className="absolute -right-5 -top-5 w-20 h-20 bg-blue-600/0 group-hover:bg-blue-600/20 rounded-full blur-2xl transition-all duration-500"></div>
            
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-900/20 border border-blue-800/30 rounded-xl flex items-center justify-center">
                <Gauge className="w-6 h-6 text-blue-100" />
              </div>
              <span className="inline-block px-4 py-2 bg-blue-900/40 border border-blue-800/30 rounded-full text-blue-100 text-sm font-medium uppercase tracking-wider">
                Performance Ready
              </span>
            </motion.div>
            
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Accelerate Your Next Project?
            </motion.h3>
            <motion.p 
              className="text-blue-100 text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Let's engineer high-performance solutions with precision, speed, and cutting-edge technology.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 md:gap-3 bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg group cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                Start Your Engine
              </motion.a>
              <motion.a
                href="#quote"
                className="inline-flex items-center gap-2 md:gap-3 bg-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 group cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                Get Performance Quote
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="py-12 md:py-16">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            >
              {/* Brand Section */}
              <motion.div variants={slideInLeft} className="lg:col-span-1">
                <div className="mb-6">
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Ratan Mia
                    </span>
                  </motion.h3>
                  <div className="text-lg md:text-xl text-gray-300 mb-4">
                    <TypewriterText
                      words={statusWords}
                      className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold"
                      speed={80}
                      deleteSpeed={40}
                      delayBetweenWords={2000}
                    />
                    <span className="text-white"> Web Solutions</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Performance-driven Full Stack Developer with 8+ years of precision engineering 
                    exceptional web applications that accelerate business growth.
                  </p>
                </div>
                
                {/* Enhanced Racing-Style Status Indicator */}
                <motion.div 
                  className="relative flex items-center gap-2 md:gap-3 mb-6 p-3 md:p-4 bg-gradient-to-br from-green-500/15 to-emerald-500/15 border border-green-400/30 rounded-xl backdrop-blur-sm overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Racing stripe */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
                  
                  <motion.div 
                    className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full relative"
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
                  <span className="text-green-200 font-bold text-xs md:text-sm tracking-wider uppercase">
                    Ready to Race
                  </span>
                </motion.div>

                {/* Enhanced Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="relative flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-lg hover:bg-blue-600/10 border border-transparent hover:border-blue-800/30 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600/20 to-purple-900/20 border border-blue-800/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-4 h-4 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium">{item.label}</div>
                        <div className="text-sm font-bold">{item.value}</div>
                      </div>
                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600/20 to-purple-900/20 border border-blue-800/30 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </div>
                  Quick Navigation
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <a 
                        href={link.href}
                        className="relative text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 group p-2 rounded-lg hover:bg-blue-600/10 border border-transparent hover:border-blue-800/30 cursor-pointer"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg flex items-center justify-center group-hover:from-blue-600/20 group-hover:to-purple-900/20 group-hover:border-blue-800/30 group-hover:scale-110 transition-all duration-300">
                          <link.icon className="w-4 h-4 group-hover:text-blue-500 transition-colors duration-300" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                          {link.name}
                        </span>
                        {/* Accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600/20 to-purple-900/20 border border-blue-800/30 rounded-lg flex items-center justify-center">
                    <Settings className="w-3 h-3 text-blue-500" />
                  </div>
                  Performance Services
                </h4>
                <ul className="space-y-3 mb-6">
                  {services.map((service, index) => (
                    <motion.li 
                      key={service.name} 
                      className="relative text-gray-300 text-sm flex items-center gap-3 group p-2 rounded-lg hover:bg-blue-600/10 border border-transparent hover:border-blue-800/30 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 3 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-600/20 to-purple-900/20 border border-blue-800/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-3 h-3 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                      </div>
                      <span className="group-hover:text-white transition-colors duration-300 font-medium">
                        {service.name}
                      </span>
                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.li>
                  ))}
                </ul>

                {/* Performance Stats */}
                <motion.div 
                  className="grid grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="relative text-center p-3 bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-800/30 rounded-lg group transition-all duration-300 cursor-pointer">
                      <div className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Newsletter & Social */}
              <motion.div variants={slideInRight}>
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600/20 to-purple-900/20 border border-blue-800/30 rounded-lg flex items-center justify-center">
                    <Heart className="w-3 h-3 text-blue-500" />
                  </div>
                  Stay in the Fast Lane
                </h4>
                
                {/* Enhanced Newsletter */}
                <div className="mb-8">
                  <p className="text-gray-300 text-sm mb-4">
                    Get updates on cutting-edge projects, performance insights, and exclusive racing-inspired content
                  </p>
                  
                  <div className="space-y-3">
                    <div className="relative">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-gradient-to-b from-gray-900 to-black border border-gray-700 focus:border-blue-600/50 text-white placeholder-white/60 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        disabled={subscribeStatus === 'loading'}
                        onKeyDown={(e) => e.key === 'Enter' && handleNewsletterSubmit(e)}
                      />
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                    
                    <motion.button
                      onClick={handleNewsletterSubmit}
                      disabled={subscribeStatus === 'loading'}
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                      whileHover={{ scale: subscribeStatus !== 'loading' ? 1.02 : 1 }}
                      whileTap={{ scale: subscribeStatus !== 'loading' ? 0.98 : 1 }}
                    >
                      {subscribeStatus === 'loading' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Engaging...
                        </>
                      ) : subscribeStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Welcome to the Team!
                        </>
                      ) : subscribeStatus === 'error' ? (
                        <>
                          <AlertCircle className="w-4 h-4" />
                          Retry Connection
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          Join the Crew
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Status Messages */}
                  {subscribeStatus === 'success' && (
                    <motion.p 
                      className="text-blue-400 text-xs mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Welcome aboard! Check your email for race updates.
                    </motion.p>
                  )}
                  {subscribeStatus === 'error' && (
                    <motion.p 
                      className="text-blue-400 text-xs mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Invalid email format. Please try again.
                    </motion.p>
                  )}
                </div>

                {/* Enhanced Social Links */}
                <div>
                  <p className="text-gray-300 text-sm mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Connect across all platforms
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative flex items-center gap-3 p-3 bg-gradient-to-br ${social.color} border ${social.borderColor} hover:border-blue-600/50 text-gray-300 hover:text-white transition-all duration-300 group rounded-lg cursor-pointer overflow-hidden`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600/20 to-purple-900/20 border border-blue-800/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <social.icon className="w-4 h-4 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                        </div>
                        <span className="text-xs font-bold">{social.name}</span>
                        {/* Accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {/* Glow effect */}
                        <div className="absolute -right-2 -top-2 w-8 h-8 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-full blur-xl transition-all duration-300"></div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Racing-Style Footer Bottom */}
          <motion.div 
            className="relative border-t border-gray-800 py-6 md:py-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Racing stripes */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
            
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center lg:text-left">
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  © {currentYear} Ratan Mia. All rights reserved.
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                </p>
                <p className="mt-1 flex items-center justify-center lg:justify-start gap-2">
                  Engineered with precision using Next.js, Tailwind CSS & Framer Motion
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 group cursor-pointer">
                  <Shield className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                  Privacy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Terms
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs">Ready to race</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;