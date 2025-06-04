'use client';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowUp,
  Award,
  Briefcase,
  CheckCircle,
  Clock,
  Code,
  ExternalLink,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Shield,
  Star
} from 'lucide-react';
import { useState } from 'react';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle'); // idle, loading, success, error

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
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
    { name: 'React.js Applications', icon: Code },
    { name: 'Next.js Websites', icon: Globe }, 
    { name: 'WordPress Development', icon: Globe },
    { name: 'E-commerce Solutions', icon: Briefcase },
    { name: 'Performance Optimization', icon: Star }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-500',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github,
      color: 'from-gray-600 to-gray-500',
      hoverColor: 'hover:text-gray-400'
    },
    {
      name: 'Website',
      href: 'https://shorifullislamratan.com',
      icon: Globe,
      color: 'from-purple-600 to-purple-500',
      hoverColor: 'hover:text-purple-400'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801751010966',
      icon: MessageCircle,
      color: 'from-green-600 to-green-500',
      hoverColor: 'hover:text-green-400'
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
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'text-orange-400'
    }
  ];

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubscribeStatus('error');
      return;
    }

    setSubscribeStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribeStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background patterns */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Dotted pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Ratan Mia
                </motion.h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  Full Stack Developer with 10+ years of experience creating 
                  exceptional web applications and digital solutions that drive business growth.
                </p>
              </div>
              
              {/* Enhanced Status Indicator */}
              <motion.div 
                className="flex items-center gap-3 mb-6 p-3 bg-green-500/10 backdrop-blur-sm border border-green-400/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div 
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-300 font-medium text-sm uppercase tracking-wider">
                  Available for Projects
                </span>
              </motion.div>

              {/* Quick Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-sm">{item.value}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg md:text-xl font-bold mb-6 text-white flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-blue-400" />
                Quick Links
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
                      className="text-slate-300 hover:text-blue-400 transition-all duration-200 flex items-center gap-3 group py-1"
                    >
                      <link.icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg md:text-xl font-bold mb-6 text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service.name} 
                    className="text-slate-300 text-sm flex items-center gap-3 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 3 }}
                  >
                    <service.icon className="w-3 h-3 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                    <span className="group-hover:text-white transition-colors duration-200">
                      {service.name}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Quick Stats */}
              <motion.div 
                className="mt-6 p-4 bg-white/5 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-yellow-400">100+</div>
                    <div className="text-xs text-slate-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-400">10+</div>
                    <div className="text-xs text-slate-400">Years</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={slideInRight}>
              <h4 className="text-lg md:text-xl font-bold mb-6 text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                Stay Connected
              </h4>
              
              {/* Enhanced Newsletter */}
              <div className="mb-8">
                <p className="text-slate-300 text-sm mb-4">
                  Get updates on new projects, tech insights, and exclusive content
                </p>
                
                <div className="space-y-3">
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                      disabled={subscribeStatus === 'loading'}
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                  
                  <motion.button
                    onClick={handleNewsletterSubmit}
                    disabled={subscribeStatus === 'loading'}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
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
                        Subscribing...
                      </>
                    ) : subscribeStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Subscribed!
                      </>
                    ) : subscribeStatus === 'error' ? (
                      <>
                        <AlertCircle className="w-4 h-4" />
                        Try Again
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Subscribe
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Status Messages */}
                {subscribeStatus === 'success' && (
                  <motion.p 
                    className="text-green-400 text-xs mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thanks for subscribing! Check your email for confirmation.
                  </motion.p>
                )}
                {subscribeStatus === 'error' && (
                  <motion.p 
                    className="text-red-400 text-xs mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Please enter a valid email address.
                  </motion.p>
                )}
              </div>

              {/* Enhanced Social Links */}
              <div>
                <p className="text-slate-300 text-sm mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  Follow me on social media
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-xs font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Footer Bottom */}
        <motion.div 
          className="border-t border-slate-700 py-6 md:py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start gap-2">
                © {currentYear} Ratan Mia. All rights reserved.
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              </p>
              <p className="mt-1 flex items-center justify-center lg:justify-start gap-2">
                Crafted with passion using Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Privacy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Banner */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 md:p-8 text-center text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with cutting-edge technology and exceptional design.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 font-bold hover:bg-blue-50 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
         <ScrollToTop />
    </footer>
  );
};

export default Footer;