'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Calendar, Phone, Mail, MessageCircle, Target, Zap, Users, Star } from 'lucide-react';

const QuoteHeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: '150+', label: 'Projects', icon: Target },
    { number: '10+', label: 'Years', icon: Zap },
    { number: '25+', label: 'Countries', icon: Users },
    { number: '100%', label: 'Satisfaction', icon: Star }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
      {/* Decorative floating icons - desktop only */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <motion.div
          className="absolute top-20 left-10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Briefcase className="w-16 h-16 text-black/5" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Target className="w-20 h-20 text-black/5" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4"
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-24 h-24 text-black/5" />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-20 h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6"
            >
              <Briefcase className="w-4 h-4" />
              <span>GET YOUR PROJECT QUOTE</span>
            </motion.div>

            {/* Hero Title */}
            <motion.h1 variants={fadeInUp} className="hero-title text-black mb-6">
              Let's Build Your<br />
              Next Project
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeInUp} className="body-text text-black/80 mb-8 max-w-2xl text-xl md:text-2xl font-medium">
              Get a detailed quote for your mobile app or web development project within 24 hours. 
              Transparent pricing, expert consultation, and no hidden fees.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 max-w-4xl"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group text-center p-6 bg-black/10 rounded-2xl hover:bg-black/20 transition-all hover:scale-105"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.number}</div>
                  <div className="text-sm text-black/70 font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Quick Contact Methods */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="text-sm font-bold text-black/70 mb-4 uppercase tracking-wider">
                Contact Me Directly
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                <a
                  href="tel:+8801751010966"
                  className="group flex items-center gap-3 p-4 bg-black/10 rounded-xl hover:bg-black hover:text-accent-lime transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-black/10 group-hover:bg-accent-lime/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Quick Call</div>
                    <div className="text-xs opacity-80">+880 1751 010966</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/8801751010966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-black/10 rounded-xl hover:bg-black hover:text-accent-lime transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-black/10 group-hover:bg-accent-lime/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">WhatsApp</div>
                    <div className="text-xs opacity-80">Chat Now</div>
                  </div>
                </a>

                <a
                  href="mailto:shorifull@gmail.com"
                  className="group flex items-center gap-3 p-4 bg-black/10 rounded-xl hover:bg-black hover:text-accent-lime transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-black/10 group-hover:bg-accent-lime/20 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Email</div>
                    <div className="text-xs opacity-80">Send Details</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote-form"
                className="group inline-flex items-center justify-center px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#consultation"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-extrabold hover:bg-black hover:text-accent-lime transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Schedule Call</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteHeroSection;