'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

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

  // Interactive hotspots data
  const hotspots = [
    {
      id: 1,
      x: '15%',
      y: '25%',
      title: 'Leadership Excellence',
      description: 'Led teams of 15+ developers with 25% satisfaction increase',
      icon: '👥',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      x: '85%',
      y: '35%',
      title: 'Performance Optimization',
      description: '97% speed improvement on enterprise applications',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      x: '10%',
      y: '70%',
      title: 'Cost Reduction',
      description: '40% IT cost reduction through strategic optimization',
      icon: '💰',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      x: '90%',
      y: '75%',
      title: 'Business Growth',
      description: '200% sales increase with innovative solutions',
      icon: '📈',
      color: 'from-purple-500 to-pink-500'
    }
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

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8 lg:pr-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Status Badge - Enhanced */}
            <motion.div
              variants={fadeInUp}
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

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={slideInLeft}
              >
                <span className="block text-white mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold">
                  Ratan Mia
                </span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.h2 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed"
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

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-slate-300 font-light leading-relaxed"
            >
              With{' '}
              <span className="text-white font-semibold">10+ years of experience</span>, I craft high-performance, 
              scalable web applications that drive business growth. From concept to deployment, 
              I deliver exceptional digital solutions that exceed expectations.
            </motion.p>

            {/* Key Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 py-6"
            >
              {[
                { number: '100+', label: 'Projects', color: 'text-yellow-400' },
                { number: '97%', label: 'Satisfaction', color: 'text-green-400' },
                { number: '10+', label: 'Years', color: 'text-pink-400' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-blue-200 text-sm font-light">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
          </motion.div>

          {/* Right Column - Photo with Interactive Hotspots */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={slideInRight}
            initial="initial"
            animate="animate"
          >
            {/* Photo Container */}
            <div className="relative">
              {/* Main Photo */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Photo placeholder with glassmorphism effect */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-2 border-white/20 shadow-2xl overflow-hidden relative">
                  {/* Replace this div with your actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <div className="text-white/80 font-light">Your Photo Here</div>
                      <div className="text-white/60 text-sm mt-2">Professional Headshot</div>
                    </div>
                  </div>
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.3), transparent 70%)',
                      maskImage: 'linear-gradient(0deg, transparent 48%, white 50%, white 52%, transparent 54%)'
                    }}
                  />
                </div>

                {/* Interactive Hotspots */}
                {hotspots.map((hotspot, index) => (
                  <motion.div
                    key={hotspot.id}
                    className="absolute cursor-pointer"
                    style={{ left: hotspot.x, top: hotspot.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    onHoverStart={() => setActiveHotspot(hotspot.id)}
                    onHoverEnd={() => setActiveHotspot(null)}
                    whileHover={{ scale: 1.2 }}
                  >
                    {/* Hotspot Indicator */}
                    <div className="relative">
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${hotspot.color} flex items-center justify-center shadow-lg border-2 border-white/30`}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 4px 20px rgba(59, 130, 246, 0.3)",
                            "0 8px 30px rgba(59, 130, 246, 0.5)",
                            "0 4px 20px rgba(59, 130, 246, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-white text-lg">{hotspot.icon}</span>
                      </motion.div>

                      {/* Pulsing Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/40"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.8, 0, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Tooltip */}
                      <motion.div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 pointer-events-none"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: activeHotspot === hotspot.id ? 1 : 0,
                          y: activeHotspot === hotspot.id ? 0 : 10
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/50">
                          <h4 className="font-bold text-slate-800 mb-2 text-sm">
                            {hotspot.title}
                          </h4>
                          <p className="text-slate-600 text-xs leading-relaxed">
                            {hotspot.description}
                          </p>
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                            <div className="w-3 h-3 bg-white/90 rotate-45 border border-white/50"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Achievement Badges */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">100+</div>
                  <div className="text-white text-xs font-light">Projects</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">10+</div>
                  <div className="text-white text-xs font-light">Years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack - Moved to bottom */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto mt-16"
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
                delay: 2 + index * 0.05, 
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

        {/* Trusted By Section */}
        <motion.div 
          className="pt-16 border-t border-white/10 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.p 
            className="text-slate-400 text-sm font-light mb-6 tracking-wider text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.6 }}
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
                transition={{ delay: 2.8 + index * 0.2 }}
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

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
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