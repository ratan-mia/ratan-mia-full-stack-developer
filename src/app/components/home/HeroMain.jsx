'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';

const HeroMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/shorifull', 
      label: 'GitHub'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/shorifull', 
      label: 'LinkedIn'
    },
    { 
      icon: Mail, 
      href: 'mailto:ratanmiadev@gmail.com', 
      label: 'Email'
    }
  ];

  return (
    <section 
      ref={ref}
      className="hero-section bg-black relative overflow-hidden"
      id="home"
    >
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
      </div>

      <div className="container-design relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Availability Status */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-design bg-card border border-design mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-accent"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-accent caption-text font-medium">
              Available for Projects
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="hero-title text-primary-text mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I'm{' '}
            <span className="text-accent">Ratan Mia</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="section-header text-primary-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Full Stack Developer
          </motion.h2>

          {/* Accent Line */}
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Value Proposition */}
          <motion.p
            className="body-text text-neutral max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Crafting modern web solutions with 8+ years of expertise. 
            Transforming ideas into scalable applications that drive business growth.
          </motion.p>

          {/* Core Skills - Minimal */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {['React.js', 'Next.js', 'Laravel', 'WordPress'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-card border border-design rounded-design text-accent caption-text font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-design bg-card border border-design hover:border-accent flex items-center justify-center text-neutral hover:text-accent smooth-transition"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                aria-label={`Visit my ${social.label} profile`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats - Simple */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { number: '150+', label: 'Projects' },
              { number: '8+', label: 'Years' },
              { number: '25+', label: 'Countries' },
              { number: '98%', label: 'Success' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="caption-text text-neutral">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#services"
          className="flex flex-col items-center gap-2 text-neutral hover:text-accent smooth-transition"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down to services"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2" />
          </div>
          <span className="caption-text uppercase tracking-wider">Scroll</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroMain;
