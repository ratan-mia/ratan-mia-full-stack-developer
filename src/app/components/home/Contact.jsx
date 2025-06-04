'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
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
  Star,
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

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
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
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.' });
      setFormData({ name: '', email: '', subject: '', message: '', projectType: '', budget: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shorifull@gmail.com',
      href: 'mailto:shorifull@gmail.com',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-blue-600/20',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+8801751010966',
      href: 'tel:+8801751010966',
      color: 'text-green-400',
      bgColor: 'from-green-500/20 to-green-600/20',
      description: 'Call for urgent inquiries'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'shorifullislamratan.com',
      href: 'https://shorifullislamratan.com',
      color: 'text-purple-400',
      bgColor: 'from-purple-500/20 to-purple-600/20',
      description: 'Explore my portfolio'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'text-orange-400',
      bgColor: 'from-orange-500/20 to-orange-600/20',
      description: 'Available for remote work'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/shorifull',
      color: 'from-blue-600 to-blue-500',
      description: 'Professional network'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/shorifull',
      color: 'from-gray-600 to-gray-500',
      description: 'Code repositories'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/8801751010966',
      color: 'from-green-600 to-green-500',
      description: 'Quick messaging'
    }
  ];

  const quickStats = [
    { icon: Clock, label: '< 24h', description: 'Response Time' },
    { icon: Star, label: '98%', description: 'Client Satisfaction' },
    { icon: Shield, label: '100%', description: 'Confidentiality' },
    { icon: Zap, label: '10+', description: 'Years Experience' }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Carbon Fiber Pattern */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Ambient Glow Effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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
        
        {/* Floating Particles */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400/30 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-800/30 backdrop-blur-sm text-blue-400 px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase mb-8"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Ready to transform your ideas into powerful web solutions? 
            Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative text-center p-4 md:p-6 bg-gradient-to-b from-gray-800 to-black border border-gray-700 hover:border-blue-800/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-xl blur transition-all duration-500"></div>
              
              <stat.icon className="relative z-10 w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="relative z-10 text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {stat.label}
              </div>
              <div className="relative z-10 text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Contact Information */}
          <motion.div 
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 border border-gray-800 shadow-xl">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-blue-600/0 hover:bg-blue-600/10 rounded-xl blur transition-all duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left flex items-center gap-3">
                  <User className="w-6 h-6 text-blue-400" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="group relative flex items-center gap-5 p-5 bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-blue-800/50 transition-all duration-300"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 8 }}
                    >
                      {/* Enhanced Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${item.bgColor} opacity-0 group-hover:opacity-100 rounded-xl blur transition-all duration-500`}></div>
                      
                      <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-7 h-7 ${item.color}`} />
                      </div>
                      <div className="relative z-10">
                        <div className="font-bold text-lg text-white group-hover:text-blue-200 transition-colors duration-200">
                          {item.label}
                        </div>
                        <div className="text-blue-200 text-base mb-1">{item.value}</div>
                        <div className="text-gray-400 text-sm">{item.description}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <motion.div 
              className="relative bg-gradient-to-b from-gray-900 to-black p-8 border border-gray-800 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-purple-600/0 hover:bg-purple-600/10 rounded-xl blur transition-all duration-500"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-6 text-center lg:text-left flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-400" />
                  Connect With Me
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center gap-4 p-4 bg-gradient-to-r ${social.color} hover:shadow-xl transition-all duration-300`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Enhanced Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} opacity-20 group-hover:opacity-40 rounded-xl blur transition-all duration-300`}></div>
                      
                      <social.icon className="relative z-10 w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                      <div className="relative z-10">
                        <div className="font-bold text-white">{social.name}</div>
                        <div className="text-white/80 text-sm">{social.description}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div 
              className="relative bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm p-6 border border-green-400/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-green-600/0 hover:bg-green-600/20 rounded-xl blur transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-bold text-white">Quick Response Guarantee</h4>
                </div>
                <p className="text-green-100 leading-relaxed">
                  I typically respond to all inquiries within 24 hours. 
                  For urgent projects, feel free to call or WhatsApp me directly.
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
            className="relative bg-gradient-to-b from-gray-900 to-black p-8 border border-gray-800 shadow-2xl"
          >
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/0 to-purple-600/0 hover:from-blue-600/10 hover:to-purple-600/10 rounded-xl blur transition-all duration-500"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
                <p className="text-gray-400">Fill out the form below and I'll get back to you soon</p>
              </div>

              {/* Enhanced Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`relative p-5 border ${
                    status.type === 'success' 
                      ? 'bg-green-500/20 border-green-400/30' 
                      : status.type === 'error'
                      ? 'bg-red-500/20 border-red-400/30'
                      : 'bg-blue-500/20 border-blue-400/30'
                  }`}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 ${
                    status.type === 'success' 
                      ? 'bg-green-600/20' 
                      : status.type === 'error'
                      ? 'bg-red-600/20'
                      : 'bg-blue-600/20'
                  } rounded-xl blur transition-all duration-300`}></div>
                  
                  <div className={`relative z-10 flex items-center gap-3 ${
                    status.type === 'success' 
                      ? 'text-green-100' 
                      : status.type === 'error'
                      ? 'text-red-100'
                      : 'text-blue-100'
                  }`}>
                    {status.type === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
                    {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                    {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                    <span>{status.message}</span>
                  </div>
                </motion.div>
              )}

              {/* Enhanced Form Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-blue-100">
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                    {/* Field Glow Effect */}
                    {focusedField === 'name' && (
                      <div className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"></div>
                    )}
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-blue-100">
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                      placeholder="your.email@example.com"
                      required
                    />
                    {/* Field Glow Effect */}
                    {focusedField === 'email' && (
                      <div className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"></div>
                    )}
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium mb-2 text-blue-100">
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                    placeholder="Brief subject of your inquiry"
                    required
                  />
                  {/* Field Glow Effect */}
                  {focusedField === 'subject' && (
                    <div className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"></div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('projectType')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-200"
                    >
                      <option value="" className="bg-gray-800">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-gray-800">
                          {type}
                        </option>
                      ))}
                    </select>
                    {/* Field Glow Effect */}
                    {focusedField === 'projectType' && (
                      <div className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"></div>
                    )}
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-200"
                    >
                      <option value="" className="bg-gray-800">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-gray-800">
                          {range}
                        </option>
                      ))}
                    </select>
                    {/* Field Glow Effect */}
                    {focusedField === 'budget' && (
                      <div className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"></div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium mb-2 text-blue-100">
                  Project Details *
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-200"
                    placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                    required
                  />
                  {/* Field Glow Effect */}
                  {focusedField === 'message' && (
                    <div className="absolute -inset-1 bg-blue-600/20 rounded-lg blur transition-all duration-300"></div>
                  )}
                </div>
              </div>
              
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={status.type === 'loading'}
                className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden"
                whileHover={{ scale: status.type !== 'loading' ? 1.02 : 1 }}
                whileTap={{ scale: status.type !== 'loading' ? 0.98 : 1 }}
              >
                {/* Button Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 to-purple-600/50 opacity-0 group-hover:opacity-100 rounded-lg blur transition-all duration-300"></div>
                
                <div className="relative z-10 flex items-center gap-3">
                  {status.type === 'loading' ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </>
                  )}
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Ratan Mia. Crafted with 
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;