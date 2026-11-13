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
    { number: 98, label: 'Success', suffix: '%' }
  ];

  const coreSkills = [
    { name: 'PHP', color: 'from-purple-600 to-blue-600' },
    { name: 'Laravel', color: 'from-red-600 to-orange-600' },
    { name: 'React', color: 'from-cyan-600 to-blue-600' },
    { name: 'WP', color: 'from-blue-600 to-indigo-600' }
  ];

  return (
    <section className="h-screen flex items-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6 items-center w-full">
        {/* Content - 3 columns */}
        <div className="lg:col-span-3 text-center lg:text-left space-y-4 order-2 lg:order-1">
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 px-3 py-1.5 rounded-full text-sm font-semibold text-cyan-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="uppercase tracking-wider">Available for Elite Projects</span>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Elite Technology Partner
            </p>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ratan Mia
              </span>
            </h1>
            
            {/* Dynamic Role */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <TypewriterText
                words={roles}
                className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
                speed={80}
                deleteSpeed={40}
                delayBetweenWords={2000}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Crafting next-generation digital experiences with{' '}
            <span className="text-white font-bold">10+ years of mastery</span>{' '}
            in cutting-edge web technologies.
          </p>

          {/* Stats - Inline */}
          <div className="grid grid-cols-4 gap-2 max-w-md mx-auto lg:mx-0">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/[0.05] border border-white/10 rounded-lg p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-sm md:text-base font-bold text-white">
                  <LiveCounter end={stat.number} duration={2} />
                  {stat.suffix}
                </div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <motion.a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm md:text-base px-5 py-2.5 rounded-lg"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.08] border border-white/20 text-white font-bold text-sm md:text-base px-5 py-2.5 rounded-lg hover:bg-white/[0.12] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span>Start Project</span>
              <MessageCircle className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Compact Profile Card - 2 columns */}
        <motion.div
          className="lg:col-span-2 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-96">
            <motion.div 
              className="relative w-full h-full bg-gradient-to-br from-white/[0.1] via-cyan-500/[0.05] to-purple-500/[0.1] backdrop-blur-2xl border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                {/* Profile Header */}
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-3xl shadow-xl"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    👨‍💻
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">Ratan Mia</h3>
                  <p className="text-lg font-bold text-cyan-300 mb-1">Full Stack Architect</p>
                  <p className="text-sm text-gray-300 mb-2">Dhaka, Bangladesh</p>
                  
                  <div className="inline-flex items-center gap-1 bg-emerald-500/20 px-2 py-1 rounded-full border border-emerald-400/30">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-300">Available Now</span>
                  </div>
                </div>

                {/* Core Skills */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-center text-white">Core Technologies</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {coreSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="text-center"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <div className={`w-8 h-8 mx-auto mb-1 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white text-xs font-bold`}>
                          {skill.name.charAt(0)}
                        </div>
                        <div className="text-xs text-gray-300">{skill.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="text-center space-y-1">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                    <Clock className="w-3 h-3" />
                    <span>{new Date().toLocaleTimeString()}</span>
                  </div>
                  <div className="text-xs font-semibold text-cyan-400">Building Amazing Projects</div>
                </div>
              </div>
            </motion.div>

            {/* Minimal floating elements */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/60 rounded-full blur-sm"
                style={{
                  top: `${30 + i * 25}%`,
                  left: `${-5 + (i % 2) * 110}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.7,
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