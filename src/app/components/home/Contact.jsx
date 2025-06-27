'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Code,
  Github,
  Globe,
  Linkedin,
  Loader,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Shield,
  Star,
  Zap
} from 'lucide-react';
import { useRef, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: 'idle', message: '' });
  
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const formInView = useInView(formRef, { once: true, threshold: 0.1 });
  const infoInView = useInView(infoRef, { once: true, threshold: 0.1 });

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

    setStatus({ type: 'loading', message: 'SENDING YOUR MESSAGE...' });

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
          message: 'MESSAGE SENT SUCCESSFULLY! I\'LL GET BACK TO YOU WITHIN 24 HOURS.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
      
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 6000);
    } catch (error) {
      setStatus({ type: 'error', message: 'FAILED TO SEND MESSAGE. PLEASE TRY AGAIN LATER.' });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 4000);
    }
  };

  // Enhanced contact info with design system styling
  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL ADDRESS',
      value: 'shorifull@gmail.com',
      href: 'mailto:shorifull@gmail.com',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      label: 'PHONE NUMBER',
      value: '+880 175 101 0966',
      href: 'tel:+8801751010966',
      gradient: 'from-blue-500 to-violet-600'
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'DHAKA, BANGLADESH',
      href: '#',
      gradient: 'from-violet-600 to-cyan-500'
    }
  ];

  // Enhanced social links
  const socialLinks = [
    {
      name: 'LINKEDIN',
      icon: Linkedin,
      href: 'https://linkedin.com/in/shorifull',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'GITHUB',
      icon: Github,
      href: 'https://github.com/shorifull',
      gradient: 'from-slate-700 to-slate-600'
    },
    {
      name: 'WHATSAPP',
      icon: MessageCircle,
      href: 'https://wa.me/8801751010966',
      gradient: 'from-green-500 to-cyan-500'
    }
  ];

  // Enhanced stats with design system styling
  const stats = [
    { 
      icon: Clock, 
      label: '< 24H RESPONSE', 
      description: 'Quick turnaround guaranteed',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      icon: Shield, 
      label: '100% CONFIDENTIAL', 
      description: 'Your information is secure',
      gradient: 'from-blue-500 to-violet-600'
    },
    { 
      icon: Star, 
      label: 'FREE CONSULTATION', 
      description: '30-minute strategy call included',
      gradient: 'from-violet-600 to-cyan-500'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Developer Header Stripe */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      
      <section 
        ref={sectionRef}
        id="contact" 
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
        aria-label="Contact information and form"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-violet-600/10 rounded-full blur-3xl"></div>
          
          {/* Geometric Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">GET IN TOUCH</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                LET'S WORK TOGETHER
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Ready to transform your ideas into powerful web solutions? Let's discuss your next project and create something amazing together.
              </p>

              {/* Code Bracket Element */}
              <div className="text-cyan-500 font-mono text-2xl mb-8">&lt;/&gt;</div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
                  variants={itemVariants}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{stat.label}</h3>
                  <p className="text-slate-300 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Information */}
              <motion.div 
                ref={infoRef}
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
              >
                <div>
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-8 uppercase tracking-tight">
                    CONTACT INFORMATION
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-6 p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
                        variants={itemVariants}
                      >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        
                        <div className={`relative w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="relative">
                          <div className="font-bold text-cyan-400 text-sm uppercase tracking-wider mb-1">{item.label}</div>
                          <div className="text-white font-semibold">{item.value}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <motion.div variants={itemVariants}>
                  <h4 className="text-xl font-black text-white mb-6 uppercase tracking-tight">CONNECT WITH ME</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`}
                        title={social.name}
                      >
                        <social.icon className="w-7 h-7 text-white" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Response Promise */}
                <motion.div 
                  className="relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
                  variants={itemVariants}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <h4 className="text-lg font-bold text-white uppercase tracking-tight">QUICK RESPONSE GUARANTEE</h4>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call or WhatsApp me directly.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                ref={formRef}
                className="relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-8 uppercase tracking-tight">
                    SEND ME A MESSAGE
                  </h3>

                  {/* Status Message */}
                  <AnimatePresence mode="wait">
                    {status.type !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mb-6 p-4 rounded-xl border ${
                          status.type === 'success' 
                            ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                            : status.type === 'error'
                            ? 'bg-red-500/10 border-red-500/20 text-red-400'
                            : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {status.type === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
                          {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                          {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                          <span className="font-bold text-sm uppercase tracking-wider">{status.message}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                        SUBJECT *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                        MESSAGE *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400 resize-none"
                        placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status.type === 'loading'}
                      className={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl focus:ring-4 focus:ring-cyan-200 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wide hover:scale-105 ${
                        status.type === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {status.type === 'loading' ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          SENDING MESSAGE...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          SEND MESSAGE
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Decorative Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full my-20"></div>

            {/* Footer */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-slate-400 text-sm">
                    © 2025 RATAN MIA. BUILT WITH NEXT.JS, TAILWIND CSS & FRAMER MOTION
                  </p>
                  <div className="flex items-center gap-4">
                    <Code className="w-5 h-5 text-cyan-400" />
                    <Globe className="w-5 h-5 text-blue-400" />
                    <Zap className="w-5 h-5 text-violet-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Footer Stripe */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
    </>
  );
};

export default Contact;
