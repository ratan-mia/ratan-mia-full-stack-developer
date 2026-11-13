'use client';

import { motion } from 'framer-motion';
import {
    Award,
    CheckCircle,
    Clock,
    Globe,
    Shield,
    Star,
    Users,
    Zap
} from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround with agile methodology. Projects completed 20% faster than industry average.",
      stats: "20% Faster"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Clean, scalable code following best practices. Thoroughly tested and optimized.",
      stats: "5-Star Quality"
    },
    {
      icon: Shield,
      title: "100% Guarantee",
      description: "Full satisfaction guarantee with unlimited revisions until you're completely happy.",
      stats: "100% Satisfaction"
    },
    {
      icon: Clock,
      title: "24h Response",
      description: "Get your detailed quote within 24 hours. Direct communication throughout.",
      stats: "24-Hour Quote"
    },
    {
      icon: Users,
      title: "Direct Support",
      description: "Work directly with me throughout the project. No middlemen, just clear communication.",
      stats: "1-on-1 Support"
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "Successfully delivered projects to clients in 25+ countries worldwide.",
      stats: "25+ Countries"
    }
  ];

  return (
    <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent-lime/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-accent-lime rounded-full text-xs font-extrabold mb-6 uppercase tracking-widest shadow-lg"
            >
              <Star className="w-4 h-4" />
              <span>Why Choose Me</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-header text-black mb-6"
            >
              Your Success Is<br />
              <span className="relative inline-block">
                My Priority
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-3 bg-accent-lime/30 -z-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                ></motion.span>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="body-text text-gray-700 max-w-2xl mx-auto"
            >
              150+ clients have trusted me with their most important projects. 
              Here's what makes working together a success.
            </motion.p>
          </div>

          {/* Reasons Grid - Creative Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => {
              const isEven = index % 2 === 0;
              const isHighlighted = index % 3 === 0;
              
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, rotate: 1, scale: 1.02 }}
                  className={`relative p-8 rounded-3xl transition-all duration-500 group ${
                    isHighlighted 
                      ? 'bg-accent-lime border-4 border-black shadow-2xl' 
                      : 'bg-white border-2 border-gray-200 hover:border-accent-lime shadow-lg hover:shadow-2xl'
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isHighlighted ? 'bg-gradient-to-br from-accent-lime/20 to-transparent' : 'bg-gradient-to-br from-accent-lime/10 to-transparent'
                  }`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Stats Row */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                          isHighlighted ? 'bg-black' : 'bg-accent-lime'
                        } group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <reason.icon className={`w-8 h-8 ${isHighlighted ? 'text-accent-lime' : 'text-black'}`} />
                      </motion.div>
                      <div className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider ${
                        isHighlighted ? 'bg-black text-accent-lime' : 'bg-gray-100 text-black group-hover:bg-accent-lime'
                      }`}>
                        {reason.stats}
                      </div>
                    </div>

                    {/* Title with Number */}
                    <div className="flex items-start gap-3 mb-4">
                      <span className={`text-5xl font-extrabold leading-none ${
                        isHighlighted ? 'text-black/10' : 'text-gray-200 group-hover:text-accent-lime/30'
                      } transition-colors`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`text-2xl font-extrabold flex-1 pt-1 ${
                        isHighlighted ? 'text-black' : 'text-black'
                      }`}>
                        {reason.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={`leading-relaxed text-base ${
                      isHighlighted ? 'text-black/80' : 'text-gray-700'
                    }`}>
                      {reason.description}
                    </p>

                    {/* Decorative Corner */}
                    <div className={`absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 rounded-tr-2xl ${
                      isHighlighted ? 'border-black/20' : 'border-gray-200 group-hover:border-accent-lime'
                    } transition-colors`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-700 mb-6 font-semibold">Ready to start your project?</p>
            <motion.a
              href="#quote-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-black text-accent-lime rounded-2xl font-extrabold text-lg hover:shadow-2xl transition-all"
            >
              <span>Get Your Free Quote</span>
              <CheckCircle className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
