'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Shield,
  Star,
  Zap
} from 'lucide-react';
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

const QuoteCTA = () => {
  const actionWords = ['Start Your Project', 'Transform Your Vision', 'Build Your Dreams', 'Launch Your Success'];

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

  const contactOptions = [
    {
      title: 'Get Instant Quote',
      description: 'Fill out our smart form and get a detailed quote in minutes',
      icon: Zap,
      href: '#quote-form',
      primary: true,
      color: 'from-blue-600 to-purple-600',
      bgColor: 'from-blue-500/15 to-purple-500/15',
      borderColor: 'border-blue-400/30'
    },
    {
      title: 'WhatsApp Chat',
      description: 'Quick questions? Chat with me directly on WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/8801751010966',
      primary: false,
      color: 'from-emerald-600 to-green-600',
      bgColor: 'from-emerald-500/15 to-green-500/15',
      borderColor: 'border-emerald-400/30'
    },
    {
      title: 'Schedule Call',
      description: 'Book a free 30-minute consultation call',
      icon: Calendar,
      href: 'https://calendly.com/shorifull',
      primary: false,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-500/15 to-pink-500/15',
      borderColor: 'border-purple-400/30'
    }
  ];

  const benefits = [
    { text: 'Free 30-minute consultation call', icon: Phone },
    { text: 'Detailed project breakdown', icon: CheckCircle },
    { text: 'Timeline and milestone planning', icon: Calendar },
    { text: 'Technology recommendations', icon: Rocket },
    { text: 'Ongoing support options', icon: Shield },
    { text: 'No hidden fees or charges', icon: Star }
  ];

  const urgencyReasons = [
    {
      icon: Clock,
      title: 'Limited Availability',
      description: 'Only taking 3 new projects this quarter',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/15 to-red-500/15',
      borderColor: 'border-orange-400/30'
    },
    {
      icon: Award,
      title: 'Special Pricing',
      description: 'Early bird discount for projects starting in Q1',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/15 to-orange-500/15',
      borderColor: 'border-yellow-400/30'
    },
    {
      icon: CheckCircle,
      title: 'Quick Turnaround',
      description: 'Faster delivery for projects booked this month',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/15 to-emerald-500/15',
      borderColor: 'border-green-400/30'
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
      <motion.div
        className="absolute top-3/4 left-1/2 w-24 h-24 md:w-48 md:h-48 bg-emerald-500/6 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      {[...Array(10)].map((_, i) => (
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
        
        {/* Main CTA Content */}
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
            className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-400/30 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl backdrop-blur-md mb-6 md:mb-8"
          >
            <motion.div 
              className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.7)",
                  "0 0 0 6px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-200 font-bold text-xs md:text-sm tracking-wider uppercase">
              Ready to Get Started?
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight"
          >
            <span className="block text-white mb-2">Ready to</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              <TypewriterText
                words={actionWords}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                speed={80}
                deleteSpeed={40}
                delayBetweenWords={2000}
              />
            </span>
            <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Today?</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 md:mb-12 leading-relaxed font-light max-w-4xl mx-auto"
          >
            Don't let your great ideas wait. Transform your vision into reality with 
            a development partner who understands your{' '}
            <span className="text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">business goals</span>.
          </motion.p>

          {/* Contact Options */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
            variants={staggerContainer}
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : '_self'}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`group relative block p-4 md:p-6 lg:p-8 rounded-lg md:rounded-2xl border transition-all duration-300 overflow-hidden ${
                  option.primary
                    ? `bg-gradient-to-r ${option.color} text-white shadow-lg hover:shadow-xl`
                    : `bg-gradient-to-r ${option.bgColor} backdrop-blur-sm text-white hover:bg-opacity-80 ${option.borderColor}`
                }`}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`relative z-10 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  option.primary
                    ? 'bg-white/20 text-white'
                    : `bg-gradient-to-r ${option.color} text-white`
                }`}>
                  <option.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="relative z-10 text-lg md:text-xl lg:text-2xl font-black mb-2 md:mb-3 text-white">
                  {option.title}
                </h3>
                
                <p className="relative z-10 text-sm md:text-base leading-relaxed text-white/80">
                  {option.description}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits List */}
        <motion.div 
          variants={fadeInUp}
          className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg md:rounded-2xl p-6 md:p-8 backdrop-blur-sm mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 text-center">
            What You Get With{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Every Quote
            </span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg md:rounded-xl border border-gray-700 hover:border-blue-600/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0">
                  <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-blue-100 text-sm md:text-base font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Urgency Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 text-center"
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Limited Time Offers
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {urgencyReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className={`relative p-4 md:p-6 bg-gradient-to-r ${reason.bgColor} border ${reason.borderColor} rounded-lg md:rounded-2xl backdrop-blur-sm overflow-hidden`}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="relative z-10">
                  <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                    <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h4 className="font-black text-white text-lg md:text-xl mb-2 text-center">{reason.title}</h4>
                  <p className="text-white/80 text-sm md:text-base text-center leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Direct Contact Info */}
        <motion.div 
          variants={fadeInUp}
          className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg md:rounded-2xl p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-2">
              Need to Talk{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Right Now?
              </span>
            </h3>
            <p className="text-slate-400 text-sm md:text-base">Get immediate assistance and personalized guidance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.a
              href="mailto:shorifull@gmail.com"
              className="group flex items-center gap-3 md:gap-4 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 border border-blue-400/30 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl hover:border-blue-400/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm md:text-base">Email Me</div>
                <div className="text-xs md:text-sm text-blue-200">shorifull@gmail.com</div>
              </div>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="tel:+8801751010966"
              className="group flex items-center gap-3 md:gap-4 bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-400/30 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl hover:border-green-400/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm md:text-base">Call Me</div>
                <div className="text-xs md:text-sm text-green-200">+8801751010966</div>
              </div>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mt-6 md:mt-8 text-slate-400 text-xs md:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available Monday-Friday, 9 AM - 6 PM (Bangladesh Time)</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Quick response guaranteed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCTA;