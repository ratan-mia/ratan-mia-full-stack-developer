'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageCircle,
  AlertCircle,
  Loader,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import { useState, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: 'idle', message: '' });
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

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

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
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
      href: 'mailto:shorifull@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 175 101 0966',
      href: 'tel:+8801751010966'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/shorifull',
      color: 'bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/shorifull',
      color: 'bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/8801751010966',
      color: 'bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600'
    }
  ];

  const stats = [
    { icon: Clock, label: '< 24h Response', description: 'Quick turnaround guaranteed' },
    { icon: Shield, label: '100% Confidential', description: 'Your information is secure' },
    { icon: Star, label: 'Free Consultation', description: '30-minute strategy call included' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold tracking-wider uppercase mb-2 inline-block bg-gradient-to-r from-cyan-400 to-transparent bg-clip-text">
            Get In Touch
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>
          
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Ready to transform your ideas into powerful web solutions? Let's discuss your next project and create something amazing.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/25"
                  >
                    <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-xl flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{item.label}</div>
                        <div className="text-gray-300">{item.value}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.color} text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25`}
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-cyan-400 rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
                <h4 className="text-lg font-bold text-white">Quick Response Guarantee</h4>
              </div>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call or WhatsApp me directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-xl p-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Send Me a Message</h3>

            {/* Status Message */}
            <AnimatePresence mode="wait">
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-cyan-400 text-cyan-400' 
                      : status.type === 'error'
                      ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-red-500 text-red-400'
                      : 'bg-gradient-to-b from-gray-800 to-gray-900 border border-cyan-400 text-cyan-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {status.type === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
                    {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                    {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                    <span>{status.message}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Brief subject of your inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className={`w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-cyan-400/25 focus:ring-4 focus:ring-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 ${
                  status.type === 'loading' ? 'opacity-75 cursor-not-allowed' : 'hover:scale-110'
                }`}
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
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400">
            © 2025 Ratan Mia. Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;