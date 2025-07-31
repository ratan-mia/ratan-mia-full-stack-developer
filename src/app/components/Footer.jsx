'use client';

import { motion, useInView, useScroll } from 'framer-motion';
import { ArrowUp, Clock, Github, Heart, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- Floating Scroll to Top Button ---
const FloatingScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 300);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-accent-lime text-black rounded-2xl shadow-lime-glow flex items-center justify-center group hover:bg-lime-300 transition-colors duration-300"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }}
      whileHover={{ 
        scale: 1.1, 
        y: -4,
        boxShadow: "0 12px 30px rgba(204, 255, 0, 0.4)"
      }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </motion.button>
  );
};

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github,
      label: 'GitHub'
    },
    {
      name: 'Email',
      href: 'mailto:ratanmiadev@gmail.com',
      icon: Mail,
      label: 'Email'
    }
  ];

  const services = [
    'Frontend Development',
    'Backend Development', 
    'Full Stack Solutions',
    'WordPress Development',
    'E-commerce Solutions'
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <footer 
        ref={footerRef}
        className="bg-gray-900 relative overflow-hidden"
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32 relative z-10">
          
          {/* Top Section - Visual First */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Brand & Description - 5 Columns */}
            <div className="lg:col-span-5 space-y-10">
              {/* Large Logo */}
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-accent-lime rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-black">R</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tight">Ratan Mia</div>
                  <div className="text-accent-lime font-bold text-lg">Full Stack Developer</div>
                </div>
              </motion.div>
              
              {/* Minimal Description */}
              <motion.p
                className="text-xl text-gray-400 leading-relaxed max-w-md font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Crafting exceptional digital experiences with modern technologies.
              </motion.p>

              {/* Contact Info - Visual Icons */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-lime" />
                  </div>
                  <a 
                    href="mailto:ratanmiadev@gmail.com"
                    className="hover:text-accent-lime transition-colors duration-300 font-medium"
                  >
                    ratanmiadev@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-orange" />
                  </div>
                  <span className="font-medium">Dhaka, Bangladesh</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-lime" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent-lime rounded-full animate-pulse" />
                    <span className="font-medium">Available for projects</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links - 2 Columns */}
            <div className="lg:col-span-2 space-y-8">
              <motion.h4
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Links
              </motion.h4>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-accent-lime transition-colors duration-300 font-medium text-lg"
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
            <div className="lg:col-span-3 space-y-8">
              <motion.h4
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Services
              </motion.h4>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    className="text-gray-400 font-medium text-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {service}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA & Social - 2 Columns */}
            <div className="lg:col-span-2 space-y-8">
              <motion.h4
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Connect
              </motion.h4>
              
              <motion.p
                className="text-gray-400 leading-relaxed font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Ready to start your project?
              </motion.p>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 bg-accent-lime text-black font-bold px-8 py-4 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-lime-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.a>

              {/* Large Social Links */}
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
                    className="w-12 h-12 bg-gray-800 border-2 border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-accent-lime hover:border-accent-lime/50 hover:bg-gray-700 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Bar - Minimal */}
          <motion.div 
            className="border-t border-gray-800 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Copyright with Heart */}
              <div className="flex items-center gap-2 text-gray-400">
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
              <div className="text-gray-500">
                Next.js × Tailwind × Framer Motion
              </div>
              
              {/* Legal Links */}
              <div className="flex items-center gap-6">
                <a 
                  href="/privacy" 
                  className="text-gray-400 hover:text-accent-lime transition-colors duration-300"
                >
                  Privacy
                </a>
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-accent-lime transition-colors duration-300"
                >
                  Terms
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <FloatingScrollButton />
    </>
  );
};

export default Footer;