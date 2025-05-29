'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants following design system guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const technologies = [
    'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'PHP', 'Laravel', 
    'WordPress', 'Node.js', 'MySQL', 'Docker', 'AWS', 'Git'
  ];

  const companies = [
    { name: 'Kawasaki Bangladesh', role: 'Full Stack Developer' },
    { name: 'Continental Motors', role: 'IT Manager' },
    { name: 'Chery Bangladesh', role: 'Lead Developer' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-4 md:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating element */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Secondary floating element */}
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Central pulsing element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Additional accent elements */}
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-24 h-24 bg-pink-400/5 rounded-full blur-2xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Status Badge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-green-500/20 border border-green-400/30 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-green-500/30 transition-all duration-300"
          >
            <motion.div 
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-200 font-medium text-sm tracking-wider">Available For New Projects</span>
          </motion.div>

          {/* Main Heading - Following design system typography */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              variants={fadeInUp}
            >
              <motion.span 
                className="block text-white mb-2"
                variants={slideInLeft}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold"
                variants={slideInRight}
              >
                Ratan Mia
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle - Enhanced typography */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-blue-100 font-light max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Full Stack Developer Specializing In{' '}
            <motion.span 
              className="text-yellow-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              React.js
            </motion.span>{' '}
            &{' '}
            <motion.span 
              className="text-green-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Next.js
            </motion.span>
          </motion.h2>

          {/* Description - Following content guidelines */}
          <motion.p 
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            With{' '}
            <span className="text-white font-semibold">10+ years of experience</span>, I craft high-performance, 
            scalable web applications that drive business growth. From concept to deployment, 
            I deliver exceptional digital solutions that exceed expectations.
          </motion.p>

          {/* Key Stats - Enhanced with hover effects */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 py-8 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { number: '100+', label: 'Projects Delivered', color: 'text-yellow-400', delay: 0 },
              { number: '97%', label: 'Client Satisfaction', color: 'text-green-400', delay: 0.1 },
              { number: '10+', label: 'Years Experience', color: 'text-pink-400', delay: 0.2 }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center group cursor-pointer"
                variants={fadeInUp}
                transition={{ delay: 1.2 + stat.delay }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-200`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-200 text-sm md:text-base font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Stack - Enhanced with stagger animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-blue-100 hover:bg-white/20 hover:border-white/40 hover:text-white transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 1.4 + index * 0.05, 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 8px 16px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Call to Action Buttons - Enhanced following button guidelines */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              variants={fadeInUp}
              transition={{ delay: 1.6 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <motion.svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
              variants={fadeInUp}
              transition={{ delay: 1.7 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 12px 24px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Trusted By Section - Enhanced layout */}
          <motion.div 
            className="pt-12 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.p 
              className="text-slate-400 text-sm font-light mb-6 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              Trusted By Leading Companies
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  variants={fadeInUp}
                  transition={{ delay: 2 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 8px 16px rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <div className="text-white font-semibold text-sm mb-1">{company.name}</div>
                  <div className="text-slate-400 text-xs font-light">{company.role}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Enhanced */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.a 
            href="#about"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.1,
              y: -2
            }}
          >
            <span className="text-sm font-light tracking-wider">Scroll To Explore</span>
            <motion.svg 
              className="w-6 h-6"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;