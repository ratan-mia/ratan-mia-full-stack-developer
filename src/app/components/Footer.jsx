'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowUp,
  Code2,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Terminal
} from 'lucide-react';
import { useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 });

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Full Stack Development',
    'React.js Applications',
    'Next.js Websites',
    'WordPress Development',
    'E-commerce Solutions',
    'Performance Optimization'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github,
      color: 'hover:text-cyan-400'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801751010966',
      icon: MessageCircle,
      color: 'hover:text-emerald-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="footer-gradient relative overflow-hidden"
    >
      {/* Developer Brand Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Code Brackets Decoration */}
      <motion.div
        className="absolute top-10 right-10 text-6xl font-mono text-cyan-500/10 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
      >
        &lt;Footer/&gt;
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 lg:py-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  Ratan Mia
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-slate-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer with 8+ years of experience crafting exceptional digital experiences for businesses worldwide.
              </motion.p>
              
              {/* Contact Info */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="mailto:shorifull@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">shorifull@gmail.com</span>
                </a>
                <a
                  href="tel:+8801751010966"
                  className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">+880 175 101 0966</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="font-medium">Dhaka, Bangladesh</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-left font-medium uppercase tracking-wide text-sm group flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-cyan-500 rounded-full group-hover:w-2 transition-all duration-300" />
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    className="text-slate-300 font-medium text-sm flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-400" />
                Connect With Me
              </h4>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-cyan-500/50 group`}
                    title={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div 
                className="card-primary p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Terminal className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="text-white font-bold mb-2 uppercase tracking-wide">
                    Ready to Start a Project?
                  </h5>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    Let's discuss your ideas and bring them to life.
                  </p>
                  <motion.button
                    onClick={() => scrollToSection('#contact')}
                    className="btn-primary w-full text-sm group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get In Touch</span>
                    <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
        />

        {/* Footer Bottom */}
        <motion.div 
          className="pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 font-medium">
                <span>© {currentYear} Ratan Mia. All rights reserved.</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                Built with Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#privacy" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium uppercase tracking-wide"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium uppercase tracking-wide"
              >
                Terms
              </a>
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group font-medium uppercase tracking-wide"
                whileHover={{ y: -2 }}
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Developer Brand Stripe Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
    </footer>
  );
};

export default Footer;
