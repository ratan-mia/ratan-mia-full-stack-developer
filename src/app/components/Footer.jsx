'use client';

import { motion, useInView, useScroll } from 'framer-motion';
import { ArrowUp, Code, Database, Download, Github, Globe, Instagram, Linkedin, Mail, Palette, Smartphone, Twitter, Zap } from 'lucide-react';
import Link from 'next/link';
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
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github,
      label: 'GitHub'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
      label: 'Twitter'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: Instagram,
      label: 'Instagram'
    },
    {
      name: 'Mail',
      href: 'mailto:shorifull@gmail.com',
      icon: Mail,
      label: 'Email'
    }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Full Stack Solutions',
    'E-commerce',
    'API Development',
    'Database Design'
  ];

  const servicesColumn2 = [
    'React & Next.js',
    'React Native',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
    'Figma Design',
    'Performance Optimization'
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Resume', href: '/resume' }
  ];

  const reviews = [
    { name: 'GitHub', href: 'https://github.com/shorifull' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/shorifull' },
    { name: 'Behance', href: 'https://behance.net' },
    { name: 'Dribbble', href: 'https://dribbble.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Dev.to', href: 'https://dev.to' }
  ];

  const skills = [
    {
      icon: Code,
      title: 'React & Next.js',
      description: 'Building modern, performant web applications with server-side rendering and static generation',
      level: 'Expert'
    },
    {
      icon: Smartphone,
      title: 'React Native',
      description: 'Creating cross-platform mobile applications for iOS and Android with native performance',
      level: 'Advanced'
    },
    {
      icon: Database,
      title: 'Node.js & PostgreSQL',
      description: 'Developing scalable backend systems and efficient database architectures',
      level: 'Expert'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing beautiful, user-centered interfaces with Figma and modern design principles',
      level: 'Advanced'
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'End-to-end application development from conception to deployment',
      level: 'Expert'
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Optimizing web applications for speed, accessibility, and search engine visibility',
      level: 'Advanced'
    }
  ];

  return (
    <>
      <footer 
        ref={footerRef}
        className="bg-black relative overflow-hidden"
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
          
          {/* Top Section - 5 Column Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Brand & Description */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-accent-lime flex items-center justify-center">
                  <span className="text-xl font-black text-black">R</span>
                </div>
              </motion.div>
              
              <motion.p
                className="text-white text-sm leading-relaxed max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A Full Stack Developer focused on building exceptional, user-centered digital experiences with modern web technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-accent-lime text-black font-bold px-8 py-3 rounded-full hover:bg-lime-300 hover:shadow-lime-glow transition-all duration-300 text-sm"
                >
                  Contact me now
                </Link>
              </motion.div>
            </div>

            {/* Services - Column 1 */}
            <div className="space-y-4">
              <motion.h4
                className="text-white text-xs font-bold uppercase tracking-wider mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                SERVICES
              </motion.h4>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    className="text-white hover:text-accent-lime transition-colors duration-300 cursor-pointer text-sm font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {service}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <motion.h4
                className="text-white text-xs font-bold uppercase tracking-wider mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                QUICK LINK
              </motion.h4>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-white hover:text-accent-lime transition-colors duration-300 text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Tech Stack - Column 2 */}
            <div className="space-y-4">
              <motion.h4
                className="text-white text-xs font-bold uppercase tracking-wider mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                TECH STACK
              </motion.h4>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.75 }}
              >
                {servicesColumn2.map((item, idx) => (
                  <div key={idx} className="text-white hover:text-accent-lime transition-colors duration-300 text-sm font-medium cursor-pointer">
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <motion.h4
                className="text-white text-xs font-bold uppercase tracking-wider mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                CONNECT
              </motion.h4>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {reviews.map((review, index) => (
                  <motion.a
                    key={review.name}
                    href={review.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-accent-lime transition-colors duration-300 text-sm font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 1.0 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {review.name}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Large RATAN Background Text */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center py-12">
              <motion.div
                className="text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] font-black italic select-none whitespace-nowrap leading-none"
                style={{
                  WebkitTextStroke: '3px rgba(204, 255, 0, 0.5)',
                  textStroke: '3px rgba(204, 255, 0, 0.5)',
                  color: 'rgba(255, 255, 255, 0.03)',
                  opacity: 1
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1.2 }}
              >
                RATAN
              </motion.div>
            </div>

            {/* Skills Cards */}
            <div className="relative z-10 bg-gray-900 p-8 -mt-20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    className="flex flex-col items-center text-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-accent-lime/10 transition-colors duration-300">
                      <skill.icon className="w-6 h-6 text-accent-lime" />
                    </div>
                    <h4 className="text-white font-bold text-sm">{skill.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="pt-8 border-t border-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Link
                  href="/resume/ratan-mia-resume.pdf"
                  download
                  className="flex items-center gap-3 bg-accent-lime text-black font-bold px-6 py-3 rounded-full hover:bg-lime-300 hover:shadow-lime-glow transition-all duration-300 text-sm group"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                  <span className="text-xs opacity-70">PDF</span>
                </Link>
              </motion.div>
              
              {/* Copyright */}
              <div className="text-gray-500 text-sm font-medium">
                © 2021-{currentYear} Ratan Mia. All Rights Reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-lime hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1.1 + index * 0.08 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    title={social.label}
                  >
                    <social.icon size={18} strokeWidth={2} />
                  </motion.a>
                ))}
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