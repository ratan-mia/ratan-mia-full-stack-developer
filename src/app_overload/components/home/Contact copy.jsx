'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  Github,
  Globe,
  Linkedin,
  Loader,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.' });
        setFormData({ name: '', email: '', subject: '', message: '', projectType: '', budget: '' });
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }
  };

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
      value: '+8801751010966',
      href: 'tel:+8801751010966',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'shorifullislamratan.com',
      href: 'https://shorifullislamratan.com',
      color: 'text-purple-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'text-orange-400'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/shorifull',
      color: 'from-blue-600 to-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/shorifull',
      color: 'from-gray-600 to-gray-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/8801751010966',
      color: 'from-green-600 to-green-500'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 mb-6"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm tracking-wider uppercase">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Ready to transform your ideas into powerful web solutions? 
            Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center lg:text-left">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={`w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="font-bold text-base md:text-lg text-white group-hover:text-blue-200 transition-colors duration-200">
                        {item.label}
                      </div>
                      <div className="text-blue-200 text-sm md:text-base">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold mb-4 text-center lg:text-left">Connect With Me</h4>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} hover:shadow-lg flex items-center justify-center transition-all duration-300 group`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div 
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm p-6 border border-green-400/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-bold text-white">Quick Response Guarantee</h4>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                I typically respond to all inquiries within 24 hours. 
                For urgent projects, feel free to call or WhatsApp me directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-6 md:p-8 border border-white/20"
          >
            <div className="space-y-6">
              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 border ${
                    status.type === 'success' 
                      ? 'bg-green-500/20 border-green-400/30 text-green-100' 
                      : status.type === 'error'
                      ? 'bg-red-500/20 border-red-400/30 text-red-100'
                      : 'bg-blue-500/20 border-blue-400/30 text-blue-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {status.type === 'loading' && <Loader className="w-4 h-4 animate-spin" />}
                    {status.type === 'success' && <CheckCircle className="w-4 h-4" />}
                    {status.type === 'error' && <AlertCircle className="w-4 h-4" />}
                    <span className="text-sm">{status.message}</span>
                  </div>
                </motion.div>
              )}

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-blue-100">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-200"
                  placeholder="Brief subject of your inquiry"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-200"
                  >
                    <option value="" className="bg-slate-800">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-200"
                  >
                    <option value="" className="bg-slate-800">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-slate-800">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-blue-100">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 resize-none transition-all duration-200"
                  placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                  required
                />
              </div>
              
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={status.type === 'loading'}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: status.type !== 'loading' ? 1.02 : 1 }}
                whileTap={{ scale: status.type !== 'loading' ? 0.98 : 1 }}
              >
                {status.type === 'loading' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-12 md:mt-16 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-white/60 text-sm md:text-base">
            © 2025 Ratan Mia. Crafted with ❤️ using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;