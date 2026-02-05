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
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-accent-lime"
      style={{
        backgroundImage: 'linear-gradient(rgba(204, 255, 0, 0.75), rgba(204, 255, 0, 0.75)), url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2 bg-black/90 text-accent-lime rounded-full text-xs font-extrabold mb-6 uppercase tracking-wider"
            >
              <Briefcase className="w-4 h-4" />
              <span>Project Quote Request</span>
            </motion.div>

            {/* Hero Title */}
            <motion.h1 
              variants={fadeInUp} 
              className="hero-title text-black mb-6 max-w-4xl"
            >
              Let's Build Your<br />
              Next Project
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeInUp} 
              className="body-text text-black/90 mb-8 max-w-2xl"
            >
              Get a detailed quote for your mobile app or web development project within 24 hours. 
              Transparent pricing, expert consultation, and no hidden fees.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-black/10 backdrop-blur-sm rounded-xl hover:bg-black/20 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-black mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-black/70 font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick Contact Options */}
            <motion.div variants={fadeInUp} className="mb-10">
              <h3 className="text-sm font-bold text-black/80 mb-4 uppercase tracking-wider">
                Contact Methods
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
                <a
                  href="tel:+8801751010966"
                  className="flex items-center gap-3 p-4 bg-black/10 backdrop-blur-sm rounded-xl hover:bg-black hover:text-accent-lime transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-lime" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Phone</div>
                    <div className="text-xs opacity-70">+880 1751 010966</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/8801751010966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-black/10 backdrop-blur-sm rounded-xl hover:bg-black hover:text-accent-lime transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-accent-lime" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">WhatsApp</div>
                    <div className="text-xs opacity-70">Chat Now</div>
                  </div>
                </a>

                <a
                  href="mailto:shorifull@gmail.com"
                  className="flex items-center gap-3 p-4 bg-black/10 backdrop-blur-sm rounded-xl hover:bg-black hover:text-accent-lime transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-lime" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Email</div>
                    <div className="text-xs opacity-70">Send Details</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#quote-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#consultation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-extrabold text-lg hover:bg-black hover:text-accent-lime transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Schedule Call</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteHeroSection;