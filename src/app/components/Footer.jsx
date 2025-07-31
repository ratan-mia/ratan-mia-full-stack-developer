'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowUp, Clock, Github, Heart, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: Linkedin,
      label: 'Professional Network'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github,
      label: 'Source Code'
    },
    {
      name: 'Email',
      href: 'mailto:ratanmiadev@gmail.com',
      icon: Mail,
      label: 'Direct Contact'
    }
  ];

  const services = [
    'Frontend Development',
    'Backend Development', 
    'Full Stack Solutions',
    'WordPress Development',
    'E-commerce Solutions',
    'Custom Web Applications'
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-black relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ccff00' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Brand & Description - 4 Columns */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center">
                <span className="text-xl font-black text-black">R</span>
              </div>
              <div>
                <div className="text-2xl font-black text-white">Ratan Mia</div>
                <div className="text-accent-lime font-semibold">Full Stack Developer</div>
              </div>
            </motion.div>
            
            {/* Description */}
            <motion.p
              className="text-gray-400 leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting exceptional digital experiences with modern technologies. 
              Let's build something amazing together.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent-lime" />
                <a 
                  href="mailto:ratanmiadev@gmail.com"
                  className="hover:text-accent-lime transition-colors duration-300"
                >
                  ratanmiadev@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent-orange" />
                <span>Dhaka, Bangladesh</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-accent-lime" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
                  <span>Available for projects</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links - 2 Columns */}
          <div className="lg:col-span-2 space-y-6">
            <motion.h4
              className="text-xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Quick Links
            </motion.h4>
            
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-accent-lime transition-colors duration-300 font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Services - 3 Columns */}
          <div className="lg:col-span-3 space-y-6">
            <motion.h4
              className="text-xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Services
            </motion.h4>
            
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="text-gray-400 font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Newsletter/CTA - 3 Columns */}
          <div className="lg:col-span-3 space-y-6">
            <motion.h4
              className="text-xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Let's Connect
            </motion.h4>
            
            <motion.p
              className="text-gray-400 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Ready to start your next project? Let's discuss how we can bring your ideas to life.
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-accent-lime text-black font-bold px-6 py-3 rounded-xl hover:bg-lime-300 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </motion.a>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-accent-lime hover:border-accent-lime/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Ratan Mia. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400" />
              </motion.div>
              <span>in Bangladesh</span>
            </div>
            
            {/* Tech Stack */}
            <div className="text-gray-500 text-sm">
              Built with Next.js, Tailwind CSS & Framer Motion
            </div>
            
            {/* Links & Back to Top */}
            <div className="flex items-center gap-6">
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-accent-lime transition-colors duration-300 text-sm"
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-accent-lime transition-colors duration-300 text-sm"
              >
                Terms
              </a>
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 bg-gray-800 border border-gray-700 text-gray-400 hover:text-accent-lime hover:border-accent-lime/50 px-4 py-2 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <span className="text-sm font-medium">Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
