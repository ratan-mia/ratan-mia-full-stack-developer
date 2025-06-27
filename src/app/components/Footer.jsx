'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowUp,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone
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
      color: 'hover:text-gray-300'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801751010966',
      icon: MessageCircle,
      color: 'hover:text-green-400'
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
      className="bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ratan Mia
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Full Stack Developer with 10+ years of experience crafting exceptional digital experiences for businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:shorifull@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  shorifull@gmail.com
                </a>
                <a
                  href="tel:+8801751010966"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  +880 175 101 0966
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & CTA */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Connect With Me
              </h4>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-colors`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h5 className="text-white font-semibold mb-2">
                  Ready to Start a Project?
                </h5>
                <p className="text-gray-300 text-sm mb-4">
                  Let's discuss your ideas and bring them to life.
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-gray-800 py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                © {currentYear} Ratan Mia. All rights reserved.
                <Heart className="w-4 h-4 text-red-400" />
              </div>
              <p className="text-xs">
                Built with Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                Back to top
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;