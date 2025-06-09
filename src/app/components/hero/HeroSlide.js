'use client';
import { LiveCounter, TypewriterText } from '@/utils/shared/heroSlider';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MessageCircle } from 'lucide-react';

const HeroSlide = () => {
  const roles = ['Full Stack Developer', 'Laravel Expert', 'React.js Specialist', 'Digital Innovation Leader'];
  
  const achievements = [
    { number: 150, label: 'Projects', suffix: '+' },
    { number: 8, label: 'Years', suffix: '+' },
    { number: 25, label: 'Countries', suffix: '+' },
    { number: 98, label: 'Success Rate', suffix: '%' }
  ];

  const coreSkills = [
    { name: 'PHP', color: 'from-purple-600 to-blue-600' },
    { name: 'Laravel', color: 'from-red-600 to-orange-600' },
    { name: 'React.js', color: 'from-cyan-600 to-blue-600' },
    { name: 'WordPress', color: 'from-blue-600 to-indigo-600' }
  ];

  // Animation variants following design guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <motion.div
          className="text-center lg:text-left space-y-4 md:space-y-6 order-2 lg:order-1"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Status Badge - Following design guidelines */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 px-4 py-2 rounded-full text-sm md:text-base font-semibold text-cyan-300"
          >
            <motion.div
              className="relative w-3 h-3"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="relative w-3 h-3 bg-emerald-400 rounded-full"></div>
            </motion.div>
            <span className="tracking-wider uppercase bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Available for Elite Projects
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="space-y-2">
              {/* Labels & Small Text */}
              <p className="text-sm md:text-base font-semibold text-cyan-400 tracking-wider uppercase">
                Elite Technology Partner
              </p>
              
              {/* Main Section Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="block text-white mb-1">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ratan Mia
                </span>
              </h1>
            </div>
            
            {/* Dynamic Role Display - Section Headings */}
            <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start">
              <TypewriterText
                words={roles}
                className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
                speed={80}
                deleteSpeed={40}
                delayBetweenWords={2000}
              />
            </div>
          </motion.div>

          {/* Body Text - Primary */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Crafting next-generation digital experiences with{' '}
            <span className="text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">8+ years of mastery</span>{' '}
            in cutting-edge web technologies.
          </motion.p>

          {/* Quick Stats - Card Design Standards */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-lg mx-auto lg:mx-0"
          >
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-xl p-3 hover:bg-white/[0.1] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {/* Card Title */}
                <div className="text-lg md:text-xl font-bold text-white">
                  <LiveCounter end={stat.number} duration={2} />
                  {stat.suffix}
                </div>
                {/* Caption & Meta Info */}
                <div className="text-xs md:text-sm font-medium text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons - Button Styles */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
          >
            {/* Primary Button */}
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base md:text-lg px-6 py-3 rounded-xl overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: [-100, 200] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-bold text-base md:text-lg px-6 py-3 rounded-xl hover:bg-white/[0.12] hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Project</span>
              <MessageCircle className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3D Profile Card - More Compact */}
        <motion.div
          className="relative flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8, rotateY: -25 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="relative w-72 h-96 sm:w-80 sm:h-[440px]">
            <motion.div 
              className="relative w-full h-full bg-gradient-to-br from-white/[0.1] via-cyan-500/[0.05] to-purple-500/[0.1] backdrop-blur-2xl border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20"
              animate={{ 
                rotateY: [0, 3, -3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              whileHover={{ 
                rotateY: 8, 
                scale: 1.03,
                boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.4)'
              }}
            >
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-4xl shadow-2xl shadow-cyan-500/30 relative overflow-hidden"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="relative z-10">👨‍💻</span>
                  </motion.div>
                  
                  {/* Card Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Ratan Mia</h3>
                  {/* Card Subtitle */}
                  <p className="text-lg md:text-xl font-bold text-cyan-300 mb-1">Full Stack Architect</p>
                  {/* Meta Info */}
                  <p className="text-sm md:text-base text-gray-300 mb-3">Dhaka, Bangladesh</p>
                  
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-xl px-3 py-1 rounded-full border border-emerald-400/30"
                    animate={{ 
                      boxShadow: [
                        '0 0 15px rgba(34, 197, 94, 0.3)',
                        '0 0 25px rgba(34, 197, 94, 0.6)',
                        '0 0 15px rgba(34, 197, 94, 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-emerald-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(34, 197, 94, 0.7)',
                          '0 0 0 6px rgba(34, 197, 94, 0)',
                          '0 0 0 0 rgba(34, 197, 94, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs md:text-sm font-semibold text-emerald-300">Available Now</span>
                  </motion.div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg md:text-xl font-bold text-center text-white mb-3">Core Technologies</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {coreSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="text-center cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.15, y: -3 }}
                      >
                        <motion.div 
                          className={`w-10 h-10 mx-auto mb-1 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center shadow-lg text-white text-sm font-bold`}
                        >
                          {skill.name.charAt(0)}
                        </motion.div>
                        <div className="text-xs font-medium text-gray-300">{skill.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="text-center space-y-1"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-cyan-400">Currently: Building Amazing Projects</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Orbs - Reduced count for cleaner look */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
                style={{
                  top: `${25 + i * 20}%`,
                  left: `${-5 + (i % 2) * 110}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlide;