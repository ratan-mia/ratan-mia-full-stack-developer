
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
    Phone
} from 'lucide-react';

const QuoteCTA = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const contactOptions = [
    {
      title: 'Get Instant Quote',
      description: 'Fill out our smart form and get a detailed quote in minutes',
      icon: ArrowRight,
      href: '#quote-form',
      primary: true,
      color: 'blue'
    },
    {
      title: 'WhatsApp Chat',
      description: 'Quick questions? Chat with me directly on WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/8801751010966',
      primary: false,
      color: 'green'
    },
    {
      title: 'Schedule Call',
      description: 'Book a free 30-minute consultation call',
      icon: Calendar,
      href: 'https://calendly.com/shorifull',
      primary: false,
      color: 'purple'
    }
  ];

  const benefits = [
    'Free 30-minute consultation call',
    'Detailed project breakdown',
    'Timeline and milestone planning',
    'Technology recommendations',
    'Ongoing support options',
    'No hidden fees or charges'
  ];

  const urgencyReasons = [
    {
      icon: Clock,
      title: 'Limited Availability',
      description: 'Only taking 3 new projects this quarter'
    },
    {
      icon: Award,
      title: 'Special Pricing',
      description: 'Early bird discount for projects starting in Q1'
    },
    {
      icon: CheckCircle,
      title: 'Quick Turnaround',
      description: 'Faster delivery for projects booked this month'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main CTA Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-light max-w-4xl mx-auto"
          >
            Don't let your great ideas wait. Transform your vision into reality with 
            a development partner who understands your business goals.
          </motion.p>

          {/* Contact Options */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : '_self'}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`block p-6 md:p-8 rounded-2xl border transition-all duration-300 group ${
                  option.primary
                    ? 'bg-white text-slate-800 hover:bg-blue-50 border-white shadow-xl'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/30'
                }`}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  option.primary
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/20 text-white'
                }`}>
                  <option.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                
                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
                  option.primary ? 'text-slate-800' : 'text-white'
                }`}>
                  {option.title}
                </h3>
                
                <p className={`leading-relaxed ${
                  option.primary ? 'text-slate-600' : 'text-blue-200'
                }`}>
                  {option.description}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Benefits List */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              What You Get With Every Quote
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Urgency Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {urgencyReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-400/30"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <reason.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-orange-100 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Direct Contact Info */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Need to Talk Right Now?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <motion.a
                href="mailto:shorifull@gmail.com"
                className="flex items-center justify-center gap-3 bg-white/20 text-white px-6 py-4 rounded-xl hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Email Me</div>
                  <div className="text-sm text-blue-200">shorifull@gmail.com</div>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:+8801751010966"
                className="flex items-center justify-center gap-3 bg-white/20 text-white px-6 py-4 rounded-xl hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Call Me</div>
                  <div className="text-sm text-blue-200">+8801751010966</div>
                </div>
              </motion.a>
            </div>
            
            <p className="text-blue-200 text-sm mt-6">
              Available Monday-Friday, 9 AM - 6 PM (Bangladesh Time)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCTA;