'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Clock, Shield, Star, Users } from 'lucide-react';

const ModernCTA = () => {
  const stats = [
    { icon: Star, number: '100%', label: 'Success', color: 'text-yellow-400' },
    { icon: Clock, number: '24/7', label: 'Support', color: 'text-green-400' },
    { icon: Users, number: '30+', label: 'Clients', color: 'text-purple-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Advanced Background Effects */}
          <div className="absolute inset-0">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            
            {/* Animated Orbs */}
            <motion.div 
              className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
              animate={{ 
                x: [0, 30, -15, 0],
                y: [0, -20, 10, 0],
                scale: [1, 1.2, 0.8, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/3 w-24 h-24 bg-purple-300/20 rounded-full blur-lg"
              animate={{ 
                x: [0, -25, 20, 0],
                y: [0, 15, -10, 0],
                scale: [1, 0.8, 1.3, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>
            </div>
          </div>

          <div className="relative z-10 p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              
              {/* Left: Main Content */}
              <motion.div 
                variants={itemVariants}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-xs font-medium text-white mb-3">
                  <Shield className="w-3 h-3" />
                  <span>Trusted Partner</span>
                </div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                  Ready To Create Something
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Extraordinary?
                  </span>
                </h3>
                
                <p className="text-sm md:text-base text-blue-100 leading-relaxed max-w-md lg:max-w-none">
                  Transform your vision into reality with proven expertise and cutting-edge solutions.
                </p>
              </motion.div>

              {/* Center: Stats (Desktop) */}
              <motion.div 
                variants={itemVariants}
                className="hidden lg:flex flex-col gap-3 px-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.15)" }}
                  >
                    <div className={`p-1.5 rounded-md bg-white/20`}>
                      <stat.icon className={`w-3 h-3 ${stat.color}`} />
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${stat.color}`}>{stat.number}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-fit"
              >
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Let's Connect</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium text-sm border border-white/30 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Services</span>
                  <Briefcase className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </motion.a>
              </motion.div>

            </div>

            {/* Mobile Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="lg:hidden flex justify-center gap-4 mt-6 pt-4 border-t border-white/20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                  <div className={`text-sm font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-xs text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Subtle Border Glow */}
          <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ModernCTA;