'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Calendar, Clock, Mail, MessageCircle, Phone, Star, Users, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

// Typewriter Effect Component
const TypewriterText = ({ words, className = "", speed = 100, deleteSpeed = 50, delayBetweenWords = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

const QuoteHeroSection = () => {
  const projectTypes = ['Web Development', 'E-commerce Store', 'Mobile App', 'Custom Software', 'API Integration'];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Award, color: 'from-yellow-500 to-orange-500' },
    { number: '5.0', label: 'Average Rating', icon: Star, color: 'from-purple-500 to-pink-500' },
    { number: '24h', label: 'Response Time', icon: Clock, color: 'from-blue-500 to-cyan-500' },
    { number: '98%', label: 'Client Satisfaction', icon: Users, color: 'from-green-500 to-emerald-500' }
  ];

  const contactMethods = [
    { 
      icon: Phone, 
      label: 'Quick Call', 
      value: '+8801751010966', 
      href: 'tel:+8801751010966', 
      color: 'from-green-500 to-emerald-600',
      description: 'Instant consultation'
    },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      value: 'Chat Now', 
      href: 'https://wa.me/8801751010966', 
      color: 'from-emerald-500 to-green-600',
      description: 'Quick response'
    },
    { 
      icon: Mail, 
      label: 'Email Quote', 
      value: 'Send Details', 
      href: 'mailto:shorifull@gmail.com', 
      color: 'from-blue-500 to-indigo-600',
      description: 'Detailed proposal'
    }
  ];

  // Background Pattern Component
  const BackgroundPattern = () => (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 50h25v-25h50v50h-50v25h25' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Ccircle cx='25' cy='25' r='2' fill='%23ffffff'/%3E%3Ccircle cx='75' cy='75' r='2' fill='%23ffffff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23circuit)'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px'
        }}
      />
    </div>
  );

  // Floating Animation Component
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/6 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-purple-500/6 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative bg-gray-950 text-white overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <BackgroundPattern />
      <FloatingElements />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Status Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/30 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl backdrop-blur-md mb-6 md:mb-8"
          >
            <motion.div 
              className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.7)",
                  "0 0 0 6px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-200 font-bold text-xs md:text-sm tracking-wider uppercase">
              Free Quote & Consultation
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight"
          >
            <span className="block text-white mb-2">Get Your</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Project Quote
            </span>
            <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              for{' '}
              <TypewriterText
                words={projectTypes}
                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                speed={80}
                deleteSpeed={40}
                delayBetweenWords={2000}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-8 md:mb-12"
          >
            Transform your vision into reality with custom web development solutions. 
            Get a detailed quote tailored to your specific needs and timeline within{' '}
            <span className="text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">24 hours</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16"
          >
            <motion.a
              href="#quote-form"
              className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="w-4 h-4 md:w-5 md:h-5" />
              Get Free Quote
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="#consultation"
              className="group inline-flex items-center gap-2 md:gap-3 bg-transparent border-2 border-gray-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:border-blue-600 hover:bg-gray-800/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              Schedule Consultation
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === 'WhatsApp' ? '_blank' : undefined}
              rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              className={`group relative flex flex-col items-center gap-3 p-4 md:p-6 bg-gradient-to-r ${method.color} text-white font-bold rounded-lg md:rounded-xl transition-all duration-300 hover:shadow-lg overflow-hidden`}
              variants={scaleIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <method.icon className="relative z-10 w-6 h-6 md:w-8 md:h-8" />
              <div className="relative z-10 text-center">
                <div className="font-black text-base md:text-lg">{method.label}</div>
                <div className="text-sm opacity-80">{method.value}</div>
                <div className="text-xs opacity-70 mt-1">{method.description}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg md:rounded-xl backdrop-blur-sm hover:border-blue-600/50 hover:shadow-xl transition-all duration-300"
              variants={scaleIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-blue-200 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-bold">100% Satisfaction Guarantee</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-bold">Free Revisions Included</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-bold">Quick Turnaround</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteHeroSection;