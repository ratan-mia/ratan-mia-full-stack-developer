'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 });
  const currentYear = new Date().getFullYear();

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
      name: 'Email',
      href: 'mailto:ratanmiadev@gmail.com',
      icon: Mail
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className="section-padding-sm bg-black border-t border-design"
    >
      <div className="container-design">
        
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Brand Section */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-10 h-10 bg-accent rounded-design flex items-center justify-center">
                <span className="text-lg font-black text-black">R</span>
              </div>
              <div>
                <div className="text-xl font-bold text-primary-text">Ratan Mia</div>
                <div className="caption-text text-neutral">Full Stack Developer</div>
              </div>
            </motion.div>
            
            <motion.p
              className="body-text-small text-neutral leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Crafting modern web solutions with 8+ years of expertise in React.js, Next.js, Laravel, and WordPress development.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card hover:bg-accent border border-design hover:border-accent rounded-design flex items-center justify-center text-neutral hover:text-black smooth-transition"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-primary-text mb-6">Get In Touch</h4>
            <div className="space-y-4 text-neutral">
              <div>
                <div className="font-medium text-primary-text mb-1">Email</div>
                <a 
                  href="mailto:ratanmiadev@gmail.com"
                  className="hover:text-accent smooth-transition"
                >
                  ratanmiadev@gmail.com
                </a>
              </div>
              <div>
                <div className="font-medium text-primary-text mb-1">Location</div>
                <div>Dhaka, Bangladesh</div>
              </div>
              <div>
                <div className="font-medium text-primary-text mb-1">Availability</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-bold text-primary-text mb-6">Services</h4>
            <div className="space-y-2 text-neutral">
              <div>Frontend Development</div>
              <div>Backend Development</div>
              <div>Full Stack Solutions</div>
              <div>WordPress Development</div>
              <div>E-commerce Solutions</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-design pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
                <span className="caption-text">© {currentYear} Ratan Mia. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="caption-text">in Bangladesh</span>
              </div>
              <p className="caption-text text-neutral-dark">
                Built with Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="/privacy" 
                className="text-neutral hover:text-accent smooth-transition caption-text"
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-neutral hover:text-accent smooth-transition caption-text"
              >
                Terms
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-neutral hover:text-accent smooth-transition group"
                aria-label="Scroll to top"
              >
                <span className="caption-text">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 smooth-transition" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
