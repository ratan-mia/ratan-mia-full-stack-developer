'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
    AlertCircle,
    ArrowUp,
    Award,
    Briefcase,
    CheckCircle,
    Clock,
    Code,
    ExternalLink,
    FolderOpen,
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
    Shield,
    Star,
    Twitter,
    Users,
    Zap
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const footerRef = useRef(null);
  const statsRef = useRef(null);
  const contactRef = useRef(null);
  
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.3 });
  const contactInView = useInView(contactRef, { once: true, threshold: 0.3 });

  const { scrollYProgress } = useScroll();
  const footerY = useTransform(scrollYProgress, [0.8, 1], [50, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const footer = footerRef.current;
    if (footer) {
      footer.addEventListener('mousemove', handleMouseMove);
      return () => footer.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  // Enhanced data structures - organized by user journey
  const quickLinks = [
    { name: 'About Me', href: '#about', icon: Users, color: 'text-green-400', description: 'Learn my story' },
    { name: 'Skills', href: '#skills', icon: Code, color: 'text-purple-400', description: 'Technical expertise' },
    { name: 'Services', href: '#services', icon: Briefcase, color: 'text-orange-400', description: 'What I offer' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, color: 'text-cyan-400', description: 'Featured work' },
    { name: 'How I Work', href: '#process', icon: Clock, color: 'text-blue-400', description: 'My process' },
    { name: 'Get Quote', href: '#quote', icon: Mail, color: 'text-red-400', description: 'Start a project' }
  ];

  const services = [
    { name: 'Full Stack Development', icon: Code, color: 'text-blue-400', popularity: 95 },
    { name: 'React.js Applications', icon: Rocket, color: 'text-cyan-400', popularity: 90 },
    { name: 'Next.js Websites', icon: Globe, color: 'text-green-400', popularity: 85 },
    { name: 'WordPress Development', icon: Globe, color: 'text-purple-400', popularity: 80 },
    { name: 'E-commerce Solutions', icon: Briefcase, color: 'text-orange-400', popularity: 75 },
    { name: 'Performance Optimization', icon: Zap, color: 'text-yellow-400', popularity: 88 }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-400',
      hoverColor: 'hover:text-blue-400',
      followers: '5.2K'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github,
      color: 'from-gray-600 to-gray-400',
      hoverColor: 'hover:text-gray-300',
      followers: '1.8K'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/shorifull',
      icon: Twitter,
      color: 'from-blue-500 to-blue-300',
      hoverColor: 'hover:text-blue-300',
      followers: '2.1K'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801751010966',
      icon: MessageCircle,
      color: 'from-green-600 to-green-400',
      hoverColor: 'hover:text-green-400',
      followers: 'Direct'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shorifull@gmail.com',
      href: 'mailto:shorifull@gmail.com',
      color: 'text-blue-400',
      description: 'Primary contact method'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 175 101 0966',
      href: 'tel:+8801751010966',
      color: 'text-green-400',
      description: 'Available 9 AM - 6 PM (UTC+6)'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'text-orange-400',
      description: 'Working remotely worldwide'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Briefcase, color: 'text-blue-400' },
    { number: '10+', label: 'Years Experience', icon: Award, color: 'text-green-400' },
    { number: '25+', label: 'Countries Served', icon: Globe, color: 'text-purple-400' },
    { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'text-yellow-400' }
  ];

  // Enhanced newsletter handler
  const handleNewsletterSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubscribeStatus('error');
      return;
    }

    setSubscribeStatus('loading');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribeStatus('success');
      setEmail('');
      
      // Add analytics tracking
      window.gtag?.('event', 'newsletter_signup', {
        event_category: 'engagement',
        event_label: 'footer_newsletter'
      });
      
      setTimeout(() => setSubscribeStatus('idle'), 4000);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  }, [email]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Analytics tracking
    window.gtag?.('event', 'scroll_to_top', {
      event_category: 'navigation',
      event_label: 'footer_button'
    });
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Format time for different timezone
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Dhaka',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isBusinessHours = () => {
    const hour = new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka", hour: 'numeric', hour12: false});
    return hour >= 9 && hour < 18;
  };

  return (
    <>
      <footer 
        ref={footerRef}
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
        style={{ y: footerY, opacity: footerOpacity }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Interactive mouse follower */}
          <motion.div
            className="absolute w-40 h-40 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl pointer-events-none"
            animate={{
              x: mousePosition.x - 80,
              y: mousePosition.y - 80,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
          />
          
          {/* Floating geometric shapes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                right: `${10 + i * 12}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <motion.div
            className="py-16 md:py-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              
              {/* Brand & Status Section */}
              <motion.div variants={slideVariants} className="lg:col-span-1">
                <div className="mb-8">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Ratan Mia
                  </motion.h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-6">
                    Passionate Full Stack Developer with <span className="text-blue-400 font-semibold">10+ years</span> of experience crafting 
                    exceptional digital experiences that drive business growth and user engagement.
                  </p>
                  
                  {/* Real-time availability status */}
                  <motion.div 
                    className={`flex items-center gap-3 mb-6 p-4 backdrop-blur-sm border rounded-xl transition-all duration-300 ${
                      isBusinessHours() 
                        ? 'bg-green-500/10 border-green-400/30' 
                        : 'bg-orange-500/10 border-orange-400/30'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div 
                      className={`w-3 h-3 rounded-full ${
                        isBusinessHours() ? 'bg-green-400' : 'bg-orange-400'
                      }`}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="flex-1">
                      <span className={`font-semibold text-sm uppercase tracking-wider ${
                        isBusinessHours() ? 'text-green-300' : 'text-orange-300'
                      }`}>
                        {isBusinessHours() ? 'Available Now' : 'Currently Offline'}
                      </span>
                      <div className="text-xs text-slate-400 mt-1">
                        Dhaka Time: {formatTime(currentTime)}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 text-slate-300 hover:text-white transition-all duration-300 group p-3 rounded-lg hover:bg-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                        item.color === 'text-blue-400' ? 'from-blue-500/20 to-blue-400/20' :
                        item.color === 'text-green-400' ? 'from-green-500/20 to-green-400/20' :
                        'from-orange-500/20 to-orange-400/20'
                      } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.value}</div>
                        <div className="text-xs text-slate-500">{item.description}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl md:text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <ExternalLink className="w-6 h-6 text-blue-400" />
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <motion.button 
                        onClick={() => scrollToSection(link.href)}
                        className="w-full text-left text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-4 group p-3 rounded-lg hover:bg-white/5"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                          <link.icon className={`w-4 h-4 ${link.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{link.name}</div>
                          <div className="text-xs text-slate-500">{link.description}</div>
                        </div>
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services with Progress Bars */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl md:text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <Code className="w-6 h-6 text-purple-400" />
                  Services
                </h4>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <motion.li 
                      key={service.name} 
                      className="group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <service.icon className={`w-4 h-4 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                          {service.name}
                        </span>
                        <span className="ml-auto text-xs text-slate-500 font-medium">
                          {service.popularity}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${
                            service.color === 'text-blue-400' ? 'from-blue-500 to-blue-400' :
                            service.color === 'text-cyan-400' ? 'from-cyan-500 to-cyan-400' :
                            service.color === 'text-green-400' ? 'from-green-500 to-green-400' :
                            service.color === 'text-purple-400' ? 'from-purple-500 to-purple-400' :
                            service.color === 'text-orange-400' ? 'from-orange-500 to-orange-400' :
                            'from-yellow-500 to-yellow-400'
                          } rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${service.popularity}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* Enhanced Stats */}
                <motion.div 
                  ref={statsRef}
                  className="mt-8 p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    Quick Stats
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={stat.label}
                        className="text-center group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center justify-center mb-2">
                          <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <div className={`text-xl font-bold ${stat.color} mb-1`}>
                          {stat.number}
                        </div>
                        <div className="text-xs text-slate-400 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Newsletter & Social */}
              <motion.div variants={itemVariants} ref={contactRef}>
                <h4 className="text-xl md:text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-400" />
                  Stay Connected
                </h4>
                
                {/* Enhanced Newsletter */}
                <div className="mb-10">
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Join <span className="text-blue-400 font-semibold">2,500+</span> developers getting exclusive insights, 
                    project updates, and tech tips delivered monthly.
                  </p>
                  
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="relative group">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 group-hover:bg-white/15"
                        disabled={subscribeStatus === 'loading'}
                      />
                      <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={subscribeStatus === 'loading'}
                      className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: subscribeStatus !== 'loading' ? 1.02 : 1, y: -2 }}
                      whileTap={{ scale: subscribeStatus !== 'loading' ? 0.98 : 1 }}
                    >
                      {subscribeStatus === 'loading' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Subscribing...
                        </>
                      ) : subscribeStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Successfully Subscribed!
                        </>
                      ) : subscribeStatus === 'error' ? (
                        <>
                          <AlertCircle className="w-4 h-4" />
                          Please Try Again
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Subscribe to Newsletter
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Status Messages */}
                  {subscribeStatus === 'success' && (
                    <motion.div 
                      className="text-green-400 text-xs mt-3 flex items-center gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <CheckCircle className="w-3 h-3" />
                      Welcome aboard! Check your email for confirmation.
                    </motion.div>
                  )}
                  {subscribeStatus === 'error' && (
                    <motion.div 
                      className="text-red-400 text-xs mt-3 flex items-center gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <AlertCircle className="w-3 h-3" />
                      Please enter a valid email address.
                    </motion.div>
                  )}
                </div>

                {/* Enhanced Social Links */}
                <div>
                  <p className="text-slate-300 text-sm mb-6 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Connect with me across platforms
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-300 group rounded-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{social.name}</div>
                          <div className="text-xs text-slate-500">{social.followers} {social.followers !== 'Direct' ? 'followers' : ''}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Footer Bottom */}
          <motion.div 
            className="border-t border-slate-700/50 py-8 md:py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-slate-400 text-sm text-center lg:text-left">
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-2 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  © {currentYear} <span className="text-blue-400 font-semibold">Ratan Mia</span>. All rights reserved.
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-red-400" />
                  </motion.div>
                </motion.div>
                <p className="flex items-center justify-center lg:justify-start gap-2 text-xs">
                  Crafted with passion using <span className="text-blue-400">Next.js</span>, 
                  <span className="text-purple-400">Tailwind CSS</span> & 
                  <span className="text-pink-400">Framer Motion</span>
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <motion.a 
                  href="#privacy" 
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <Shield className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                  Privacy Policy
                </motion.a>
                <motion.a 
                  href="#terms" 
                  className="text-slate-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
                <motion.button
                  onClick={scrollToTop}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group px-3 py-2 rounded-lg hover:bg-white/10"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ y: 0, scale: 0.95 }}
                >
                  <span className="font-medium">Back to top</span>
                  <ArrowUp className="w-4 h-4 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <ScrollToTop />
      </footer>
    </>
  );
};

export default Footer;