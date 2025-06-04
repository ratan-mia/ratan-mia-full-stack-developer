'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Github,
  Globe,
  Heart,
  Linkedin,
  Loader,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Shield,
  Sparkles,
  Star,
  Target,
  User,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: ''
  });

  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [focusedField, setFocusedField] = useState(null);

  // Enhanced animation variants following design guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  };

  const projectTypes = [
    'Web Development',
    'E-commerce',
    'WordPress',
    'Mobile App',
    'API Development',
    'Performance Optimization',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Not sure yet'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: 'error', message: 'Please enter a subject.' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message.' });
      return false;
    }
    if (formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Project details must be at least 10 characters.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '', projectType: '', budget: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
      
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 6000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 4000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shorifull@gmail.com',
      href: 'mailto:shorifull@gmail.com',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/10 to-blue-600/20',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+8801751010966',
      href: 'tel:+8801751010966',
      color: 'text-green-400',
      bgColor: 'from-green-500/10 to-green-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'shorifullislamratan.com',
      href: 'https://shorifullislamratan.com',
      color: 'text-purple-400',
      bgColor: 'from-purple-500/10 to-purple-600/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'text-orange-400',
      bgColor: 'from-orange-500/10 to-orange-600/20',
      borderColor: 'border-orange-500/30'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/shorifull',
      color: 'from-blue-600 to-blue-500',
      hoverColor: 'hover:from-blue-500 hover:to-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/shorifull',
      color: 'from-slate-600 to-slate-500',
      hoverColor: 'hover:from-slate-500 hover:to-slate-400'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/8801751010966',
      color: 'from-green-600 to-green-500',
      hoverColor: 'hover:from-green-500 hover:to-green-400'
    }
  ];

  const quickStats = [
    { icon: Clock, label: '< 24h', description: 'Response Time', color: 'text-blue-400' },
    { icon: Star, label: '98%', description: 'Client Satisfaction', color: 'text-yellow-400' },
    { icon: Shield, label: '100%', description: 'Confidentiality', color: 'text-green-400' },
    { icon: Zap, label: '10+', description: 'Years Experience', color: 'text-purple-400' }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-8 md:py-12 lg:py-16 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Improved Carbon Fiber Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Enhanced floating background elements */}
        <motion.div 
          className="absolute top-1/4 right-1/6 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/[0.03] to-blue-600/[0.06] rounded-full blur-3xl"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/6 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500/[0.03] to-purple-600/[0.06] rounded-full blur-3xl"
          animate={{
            x: [0, 25, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-indigo-500/[0.02] to-indigo-600/[0.04] rounded-full blur-2xl"
          animate={{
            x: [0, -15, 15, 0],
            y: [0, 15, -15, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact & Responsive Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-blue-900/20 backdrop-blur-sm border border-blue-500/20 text-blue-300 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium tracking-wider uppercase mb-4 md:mb-6 rounded-full"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>Get In Touch</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Ready to transform your ideas into powerful web solutions? Let's discuss your next project and create something amazing.
          </motion.p>
        </motion.div>

        {/* Enhanced Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative text-center p-3 md:p-4 lg:p-5 bg-white/[0.02] backdrop-blur-md border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 rounded-xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              {/* Enhanced glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/0 via-blue-500/10 to-purple-600/0 group-hover:from-blue-600/20 group-hover:via-blue-500/30 group-hover:to-purple-600/20 rounded-xl blur-sm transition-all duration-500"></div>
              
              <stat.icon className={`relative z-10 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${stat.color} mx-auto mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300`} />
              <div className="relative z-10 text-base md:text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                {stat.label}
              </div>
              <div className="relative z-10 text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Enhanced Contact Information */}
          <motion.div 
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4 md:space-y-6"
          >
            {/* Contact Details Card */}
            <div className="relative bg-white/[0.02] backdrop-blur-md p-4 md:p-6 border border-slate-800/50 rounded-2xl overflow-hidden">
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-3 text-white">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  Contact Information
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className={`group relative flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r ${item.bgColor} border ${item.borderColor} hover:bg-slate-800/30 transition-all duration-300 rounded-xl`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                    >
                      <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${item.bgColor} border ${item.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 rounded-lg`}>
                        <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm md:text-base group-hover:text-blue-200 transition-colors duration-200">
                          {item.label}
                        </div>
                        <div className="text-blue-200 text-xs md:text-sm opacity-90">{item.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <motion.div 
              className="relative bg-white/[0.02] backdrop-blur-md p-4 md:p-6 border border-slate-800/50 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative z-10">
                <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-3 text-white">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  Connect With Me
                </h4>
                <div className="flex gap-2 md:gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${social.color} ${social.hoverColor} shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} opacity-20 group-hover:opacity-40 rounded-xl blur transition-all duration-300`}></div>
                      
                      <social.icon className="relative z-10 w-4 h-4 md:w-5 md:h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Quick Response Promise */}
            <motion.div 
              className="relative bg-gradient-to-r from-green-500/10 via-green-400/5 to-blue-500/10 backdrop-blur-md p-4 md:p-5 border border-green-400/20 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white">Quick Response Guarantee</h4>
                </div>
                <p className="text-green-100 text-xs md:text-sm leading-relaxed opacity-90">
                  I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call or WhatsApp me directly.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div 
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-8 relative bg-white/[0.02] backdrop-blur-md p-4 md:p-6 lg:p-8 border border-slate-800/50 rounded-2xl"
          >
            {/* Form glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 rounded-2xl blur-sm opacity-0 hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative z-10 space-y-4 md:space-y-6">
              <div className="text-center mb-4 md:mb-6">
                <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Send Me a Message</h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm">Fill out the form below and I'll get back to you soon</p>
              </div>

              {/* Enhanced Status Message */}
              <AnimatePresence mode="wait">
                {status.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    className={`relative p-3 md:p-4 border rounded-xl ${
                      status.type === 'success' 
                        ? 'bg-green-500/10 border-green-400/30 text-green-100' 
                        : status.type === 'error'
                        ? 'bg-red-500/10 border-red-400/30 text-red-100'
                        : 'bg-blue-500/10 border-blue-400/30 text-blue-100'
                    }`}
                  >
                    <div className={`absolute -inset-1 rounded-xl blur-sm transition-all duration-300 ${
                      status.type === 'success' 
                        ? 'bg-green-600/20' 
                        : status.type === 'error'
                        ? 'bg-red-600/20'
                        : 'bg-blue-600/20'
                    }`}></div>
                    
                    <div className="relative z-10 flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                      {status.type === 'loading' && <Loader className="w-4 h-4 animate-spin" />}
                      {status.type === 'success' && <CheckCircle className="w-4 h-4" />}
                      {status.type === 'error' && <AlertCircle className="w-4 h-4" />}
                      <span>{status.message}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Enhanced Form Fields */}
              <div className="space-y-3 md:space-y-4">
                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="group">
                    <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-blue-100">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-800/30 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 rounded-lg text-sm md:text-base"
                        placeholder="Enter your full name"
                        required
                      />
                      <AnimatePresence>
                        {focusedField === 'name' && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-blue-100">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-800/30 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 rounded-lg text-sm md:text-base"
                        placeholder="your.email@example.com"
                        required
                      />
                      <AnimatePresence>
                        {focusedField === 'email' && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-blue-100">
                    Subject *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-800/30 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 rounded-lg text-sm md:text-base"
                      placeholder="Brief subject of your inquiry"
                      required
                    />
                    <AnimatePresence>
                      {focusedField === 'subject' && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="group">
                    <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-blue-100">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('projectType')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-800/30 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent text-white transition-all duration-200 rounded-lg text-sm md:text-base"
                      >
                        <option value="" className="bg-slate-800 text-white">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-slate-800 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                      <AnimatePresence>
                        {focusedField === 'projectType' && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-blue-100">
                      Budget Range
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-800/30 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent text-white transition-all duration-200 rounded-lg text-sm md:text-base"
                      >
                        <option value="" className="bg-slate-800 text-white">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-slate-800 text-white">
                            {range}
                          </option>
                        ))}
                      </select>
                      <AnimatePresence>
                        {focusedField === 'budget' && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-blue-100">
                    Project Details (10 characters at least) *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-800/30 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent text-white placeholder-slate-400 resize-none transition-all duration-200 rounded-lg text-sm md:text-base"
                      placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                      required
                    />
                    <AnimatePresence>
                      {focusedField === 'message' && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <motion.button
                  onClick={handleSubmit}
                  disabled={status.type === 'loading'}
                  className="relative w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-bold py-3 md:py-4 px-6 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 group overflow-hidden rounded-xl text-sm md:text-base"
                  whileHover={{ scale: status.type !== 'loading' ? 1.02 : 1 }}
                  whileTap={{ scale: status.type !== 'loading' ? 0.98 : 1 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 via-blue-500/50 to-purple-600/50 opacity-0 group-hover:opacity-100 rounded-xl blur transition-all duration-300"></div>
                  
                  <div className="relative z-10 flex items-center gap-2 md:gap-3">
                    {status.type === 'loading' ? (
                      <>
                        <Loader className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.div 
          className="text-center mt-8 md:mt-12 pt-4 md:pt-6 border-t border-slate-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-slate-400 text-xs md:text-sm flex items-center justify-center gap-1 md:gap-2 flex-wrap">
            © 2025 Ratan Mia. Crafted with 
            <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-400 animate-pulse" />
            using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;