'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  ChevronDown,
  Code2,
  DollarSign,
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants following design system guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
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
    'WordPress', 'Node.js', 'MySQL', 'Docker'
  ];

  const companies = [
    { name: 'Kawasaki Bangladesh', role: 'Full Stack Developer' },
    { name: 'Continental Motors', role: 'IT Manager' },
    { name: 'Chery Bangladesh', role: 'Lead Developer' }
  ];

  // Interactive hotspots data with Lucide icons
  const hotspots = [
    {
      id: 1,
      x: '15%',
      y: '20%',
      title: 'Leadership',
      description: 'Led 15+ developers with 25% satisfaction increase',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      x: '85%',
      y: '30%',
      title: 'Performance',
      description: '97% speed improvement on applications',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      x: '10%',
      y: '75%',
      title: 'Cost Reduction',
      description: '40% IT cost reduction through optimization',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      x: '90%',
      y: '80%',
      title: 'Growth',
      description: '200% sales increase with solutions',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Status Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 px-4 py-2 backdrop-blur-sm hover:bg-green-500/30 transition-all duration-300"
            >
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-200 font-medium text-xs sm:text-sm tracking-wider uppercase">Available For Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={slideInLeft}
              >
                <motion.span 
                  className="block text-blue-100 mb-1 text-sm sm:text-base md:text-lg font-light tracking-wider uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Full Stack Developer
                </motion.span>
                <span className="block text-white mb-1">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold">
                  Ratan Mia
                </span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.h2 
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light leading-relaxed"
            >
              Specializing In{' '}
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
              className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              With{' '}
              <span className="text-white font-semibold">10+ years of experience</span>, I craft high-performance 
              web applications that drive business growth and deliver exceptional user experiences.
            </motion.p>

            {/* Key Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 py-6"
            >
              {[
                { number: '100+', label: 'Projects', color: 'text-yellow-400', bg: 'bg-yellow-400/10', icon: Target },
                { number: '97%', label: 'Satisfaction', color: 'text-green-400', bg: 'bg-green-400/10', icon: Award },
                { number: '10+', label: 'Years', color: 'text-pink-400', bg: 'bg-pink-400/10', icon: Code2 }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className={`text-center group cursor-pointer p-3 ${stat.bg} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color} mx-auto mb-1`} />
                  <motion.div 
                    className={`text-lg sm:text-xl md:text-2xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-blue-200 text-xs sm:text-sm font-light">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm sm:text-base hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white hover:text-slate-900 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div 
            className="relative flex justify-center order-1 lg:order-2"
            variants={slideInRight}
            initial="initial"
            animate="animate"
          >
            <div className="relative">
              {/* Main Photo - Responsive sizing */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* Photo container */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-2 border-white/20 shadow-2xl overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-2">👨‍💻</div>
                      <div className="text-white/80 font-light text-sm sm:text-base md:text-lg">Ratan Mia</div>
                      <div className="text-white/60 text-xs sm:text-sm mt-1 tracking-wider uppercase">Full Stack Developer</div>
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

                {/* Interactive Hotspots - Responsive */}
                {hotspots.map((hotspot, index) => (
                  <motion.div
                    key={hotspot.id}
                    className="absolute cursor-pointer hidden md:block"
                    style={{ left: hotspot.x, top: hotspot.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.4 }}
                    onHoverStart={() => setActiveHotspot(hotspot.id)}
                    onHoverEnd={() => setActiveHotspot(null)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="relative">
                      <motion.div
                        className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r ${hotspot.color} flex items-center justify-center shadow-lg border-2 border-white/30`}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 4px 15px rgba(59, 130, 246, 0.3)",
                            "0 6px 20px rgba(59, 130, 246, 0.5)",
                            "0 4px 15px rgba(59, 130, 246, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <hotspot.icon className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                      </motion.div>

                      {/* Pulsing Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/40"
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.8, 0, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Tooltip */}
                      <motion.div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 pointer-events-none"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: activeHotspot === hotspot.id ? 1 : 0,
                          y: activeHotspot === hotspot.id ? 0 : 10
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-white/90 backdrop-blur-sm p-3 shadow-xl border border-white/50">
                          <h4 className="font-bold text-slate-800 mb-1 text-xs uppercase tracking-wider">
                            {hotspot.title}
                          </h4>
                          <p className="text-slate-600 text-xs leading-relaxed font-light">
                            {hotspot.description}
                          </p>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                            <div className="w-2 h-2 bg-white/90 rotate-45 border border-white/50"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Achievement Badges - Responsive */}
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20 shadow-xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-yellow-400 mb-1">100+</div>
                  <div className="text-white text-xs font-light uppercase tracking-wider">Projects</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20 shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-green-400 mb-1">10+</div>
                  <div className="text-white text-xs font-light uppercase tracking-wider">Years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div 
          className="mt-12 lg:mt-16 pt-6 border-t border-white/10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20 text-blue-100 font-medium text-xs sm:text-sm tracking-wider uppercase mb-3">
              Technical Expertise
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Technologies I Work With
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-medium text-blue-100 hover:bg-white/20 hover:border-white/40 hover:text-white transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 1.8 + index * 0.05, 
                  duration: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 6px 12px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div 
          className="pt-8 lg:pt-12 border-t border-white/10 mt-8 lg:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            <div className="inline-block bg-indigo-500/20 border border-indigo-400/30 px-4 py-2 backdrop-blur-sm text-indigo-200 font-medium text-xs sm:text-sm tracking-wider uppercase mb-3">
              Trusted Partner
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Companies I've Worked With
            </h3>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                variants={fadeInUp}
                transition={{ delay: 2.2 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -2,
                  boxShadow: "0 6px 12px rgba(255, 255, 255, 0.1)"
                }}
              >
                <div className="text-white font-semibold text-sm sm:text-base mb-1 group-hover:text-blue-300 transition-colors duration-200">
                  {company.name}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-light">{company.role}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-8 lg:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.a 
            href="#experience"
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 p-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
          >
            <span className="text-xs sm:text-sm font-light tracking-wider uppercase">Scroll To Explore</span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;