// components/quote/QuoteStats.jsx
'use client';

import { motion } from 'framer-motion';
import {
    Award,
    CheckCircle,
    Clock,
    Shield,
    Star,
    TrendingUp,
    Users
} from 'lucide-react';

const QuoteStats = () => {
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

  const stats = [
    {
      number: '100+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries',
      icon: Award,
      color: 'blue'
    },
    {
      number: '5.0',
      label: 'Client Rating',
      description: 'Average rating from satisfied clients worldwide',
      icon: Star,
      color: 'yellow'
    },
    {
      number: '24hrs',
      label: 'Response Time',
      description: 'Quick turnaround for all project inquiries',
      icon: Clock,
      color: 'green'
    },
    {
      number: '98%',
      label: 'Success Rate',
      description: 'Projects delivered on time and within budget',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const guarantees = [
    {
      title: 'Quick Response Guarantee',
      description: 'Get your detailed quote within 24 hours with comprehensive project breakdown',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. You know exactly what you\'re paying for',
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks ensure your project meets the highest standards',
      icon: CheckCircle,
      color: 'purple'
    },
    {
      title: 'Ongoing Support',
      description: 'Comprehensive support and maintenance options to keep your project running smoothly',
      icon: Users,
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200',
      yellow: 'from-yellow-500 to-yellow-600 text-yellow-600 bg-yellow-50 border-yellow-200',
      green: 'from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200',
      purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200',
      orange: 'from-orange-500 to-orange-600 text-orange-600 bg-orange-50 border-orange-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            Trusted by Clients Worldwide
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-16"
          >
            Numbers that speak for themselves. Here's why clients choose to work with me.
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => {
              const colorClasses = getColorClasses(stat.color);
              
              return (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${colorClasses} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Guarantees Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800"
          >
            Our Commitment to You
          </motion.h3>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {guarantees.map((guarantee, index) => {
              const colorClasses = getColorClasses(guarantee.color);
              
              return (
                <motion.div
                  key={guarantee.title}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center group"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${colorClasses} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <guarantee.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {guarantee.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {guarantee.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Additional Trust Indicators */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              From startups to enterprises, I've helped businesses transform their digital presence. 
              Your project could be the next success story.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-blue-100">Free Consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-blue-100">Detailed Quote</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-blue-100">No Obligation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteStats;