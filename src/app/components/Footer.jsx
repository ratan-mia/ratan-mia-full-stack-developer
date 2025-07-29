'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowUp,
  Award,
  Clock,
  Code2,
  ExternalLink,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star
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
      icon: Linkedin
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801751010966',
      icon: MessageCircle
    }
  ];

  const achievements = [
    { icon: Award, number: '150+', label: 'Projects Completed' },
    { icon: Globe, number: '25+', label: 'Countries Served' },
    { icon: Star, number: '98%', label: 'Client Satisfaction' },
    { icon: Clock, number: '24/7', label: 'Support Available' }
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
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 opacity-5 rounded-full blur-3xl"></div>
      
      {/* Enhanced glow for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Following Section Header Pattern */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-semibold tracking-wider uppercase mb-2 inline-block">
            Let's Connect
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ready to Start Your <span className="text-cyan-400">Next Project</span>?
          </h2>
          
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Let's transform your ideas into powerful digital solutions that drive growth and success.
          </p>
        </motion.div>

        {/* Achievement Stats - Following Card Pattern */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/10"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-xl">
                <achievement.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                <div className="text-sm text-gray-300 font-medium">{achievement.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Brand Section - Following Card Pattern */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 h-full group hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center text-gray-900 shadow-lg shadow-cyan-400/25">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ratan Mia</h3>
                  <p className="text-cyan-400 font-semibold text-sm tracking-wider">FULL STACK DEVELOPER</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                Crafting exceptional digital experiences with 8+ years of expertise in modern web technologies.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:shorifull@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">shorifull@gmail.com</span>
                </a>
                <a
                  href="tel:+8801751010966"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+880 175 101 0966</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Following Card Pattern */}
          <div>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 h-full group hover:-translate-y-1">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-left flex items-center gap-3 group w-full"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-base">{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services - Following Card Pattern */}
          <div>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 h-full group hover:-translate-y-1">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                Services
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={service} className="text-gray-300 flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & CTA - Following Card Pattern */}
          <div>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 h-full group hover:-translate-y-1">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                Connect
              </h4>
              
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700 hover:border-cyan-400 rounded-lg flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25"
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-6 rounded-lg shadow-lg shadow-cyan-400/25">
                <h5 className="font-bold mb-2 text-gray-900 text-lg">
                  Ready to Start?
                </h5>
                <p className="text-gray-900 text-base mb-4 opacity-80 leading-relaxed">
                  Let's discuss your project and bring your ideas to life.
                </p>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-cyan-400 hover:text-white border border-gray-700 hover:border-cyan-400 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 inline-flex items-center gap-2"
                >
                  <span>Get In Touch</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-base">© {currentYear} Ratan Mia. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-base">in Bangladesh</span>
              </div>
              <p className="text-sm text-gray-500">
                Built with Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-base"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-base"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group hover:scale-105"
              >
                <span className="text-base">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
