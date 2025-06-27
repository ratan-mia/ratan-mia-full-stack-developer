'use client';

import { motion, useInView } from 'framer-motion';
import {
  Award,
  CheckCircle,
  Clock,
  Code,
  Globe,
  Heart,
  MessageCircle,
  RefreshCw,
  Shield,
  Star,
  Target,
  Users,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

const WhyChooseMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const reasons = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality. Most projects completed 20% faster than industry average.",
      color: "from-blue-500 to-cyan-500",
      stats: "20% Faster"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Clean, scalable code following industry best practices. Every project is thoroughly tested before delivery.",
      color: "from-yellow-500 to-orange-500",
      stats: "5-Star Quality"
    },
    {
      icon: Shield,
      title: "100% Guarantee",
      description: "Full satisfaction guarantee with unlimited revisions until you're completely happy with the result.",
      color: "from-green-500 to-emerald-500",
      stats: "100% Satisfaction"
    },
    {
      icon: RefreshCw,
      title: "Free Revisions",
      description: "Unlimited revisions included in every project. Your vision matters, and we'll perfect it together.",
      color: "from-purple-500 to-pink-500",
      stats: "Unlimited"
    },
    {
      icon: Users,
      title: "Personal Support",
      description: "Direct communication with me throughout the project. No middlemen, just clear and honest communication.",
      color: "from-indigo-500 to-blue-500",
      stats: "1-on-1 Support"
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description: "Latest frameworks and tools to ensure your project is future-proof and performs exceptionally.",
      color: "from-cyan-500 to-teal-500",
      stats: "Latest Tech"
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: "150+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries"
    },
    {
      icon: Users,
      number: "98%",
      label: "Client Satisfaction",
      description: "Happy clients who recommend our services"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local understanding"
    },
    {
      icon: Code,
      number: "8+",
      label: "Years Experience",
      description: "Proven expertise in web development"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-slate-800/50 relative overflow-hidden"
      id="why-choose-me"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Heart className="w-4 h-4" />
            Why Choose Me
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
          >
            Your Success Is My
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Top Priority
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            I don't just build websites – I create digital experiences that drive results. 
            Here's why <span className="font-semibold text-blue-600 dark:text-blue-400">150+ clients</span> have 
            trusted me with their most important projects.
          </motion.p>
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-white dark:bg-slate-800/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300/50 dark:hover:border-blue-500/50 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={false}
              />
              
              {/* Stats Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300">
                {reason.stats}
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {reason.description}
              </p>
              
              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Proven Track Record
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Numbers don't lie. Here's the proof of my commitment to excellence.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={cardVariants}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center p-6 lg:p-8 bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 group"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {achievement.number}
                </div>
                
                <div className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-2">
                  {achievement.label}
                </div>
                
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 lg:gap-8 p-6 lg:p-8 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">24/7 Communication</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <Target className="w-5 h-5" />
              <span className="text-sm font-semibold">Results-Driven</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;