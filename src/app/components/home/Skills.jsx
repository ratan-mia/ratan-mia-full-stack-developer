'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Cloud,
  Code,
  Database,
  GitBranch,
  Globe,
  Palette,
  Rocket,
  Server,
  Settings,
  Shield,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

const Skills = () => {
  // Optimized animation variants following design guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      color: "blue",
      skills: [
        { name: "React.js", level: 95, experience: "5+ years", trending: true },
        { name: "Next.js", level: 90, experience: "3+ years", trending: true },
        { name: "JavaScript ES6+", level: 95, experience: "8+ years", trending: false },
        { name: "TypeScript", level: 85, experience: "2+ years", trending: true }
      ]
    },
    {
      category: "Backend Development",
      icon: Server,
      color: "purple",
      skills: [
        { name: "PHP & Laravel", level: 90, experience: "6+ years", trending: false },
        { name: "Node.js", level: 80, experience: "3+ years", trending: true },
        { name: "RESTful APIs", level: 90, experience: "5+ years", trending: false },
        { name: "GraphQL", level: 75, experience: "1+ years", trending: true }
      ]
    },
    {
      category: "CMS & E-commerce",
      icon: Globe,
      color: "emerald",
      skills: [
        { name: "WordPress", level: 95, experience: "8+ years", trending: false },
        { name: "Shopify", level: 85, experience: "4+ years", trending: true },
        { name: "WooCommerce", level: 90, experience: "5+ years", trending: false },
        { name: "Headless CMS", level: 80, experience: "2+ years", trending: true }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: Settings,
      color: "indigo",
      skills: [
        { name: "Docker", level: 85, experience: "3+ years", trending: true },
        { name: "AWS", level: 80, experience: "2+ years", trending: true },
        { name: "Vercel", level: 90, experience: "3+ years", trending: true },
        { name: "GitHub Actions", level: 75, experience: "1+ years", trending: true }
      ]
    }
  ];

  const techStack = [
    { name: 'HTML5', icon: Code, category: 'Frontend', level: 'Expert' },
    { name: 'CSS3', icon: Palette, category: 'Frontend', level: 'Expert' },
    { name: 'Tailwind CSS', icon: Palette, category: 'Frontend', level: 'Expert' },
    { name: 'JavaScript', icon: Code, category: 'Frontend', level: 'Expert' },
    { name: 'React.js', icon: Code, category: 'Frontend', level: 'Expert' },
    { name: 'Next.js', icon: Code, category: 'Frontend', level: 'Advanced' },
    { name: 'PHP', icon: Server, category: 'Backend', level: 'Expert' },
    { name: 'Laravel', icon: Server, category: 'Backend', level: 'Expert' },
    { name: 'Node.js', icon: Server, category: 'Backend', level: 'Advanced' },
    { name: 'WordPress', icon: Globe, category: 'CMS', level: 'Expert' },
    { name: 'Shopify', icon: Smartphone, category: 'E-commerce', level: 'Advanced' },
    { name: 'MySQL', icon: Database, category: 'Database', level: 'Expert' },
    { name: 'MongoDB', icon: Database, category: 'Database', level: 'Intermediate' },
    { name: 'Firebase', icon: Database, category: 'Database', level: 'Advanced' },
    { name: 'Git', icon: GitBranch, category: 'Tools', level: 'Expert' },
    { name: 'Docker', icon: Shield, category: 'DevOps', level: 'Advanced' },
    { name: 'AWS', icon: Cloud, category: 'Cloud', level: 'Advanced' },
    { name: 'Vercel', icon: Cloud, category: 'Cloud', level: 'Expert' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10 dark:bg-blue-900/20',
        border: 'border-blue-400/30 dark:border-blue-600/50',
        text: 'text-blue-600 dark:text-blue-400',
        progress: 'from-blue-600 to-blue-500',
        icon: 'text-blue-500 dark:text-blue-400',
        badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700'
      },
      purple: {
        bg: 'bg-purple-500/10 dark:bg-purple-900/20',
        border: 'border-purple-400/30 dark:border-purple-600/50',
        text: 'text-purple-600 dark:text-purple-400',
        progress: 'from-purple-600 to-purple-500',
        icon: 'text-purple-500 dark:text-purple-400',
        badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700'
      },
      emerald: {
        bg: 'bg-emerald-500/10 dark:bg-emerald-900/20',
        border: 'border-emerald-400/30 dark:border-emerald-600/50',
        text: 'text-emerald-600 dark:text-emerald-400',
        progress: 'from-emerald-600 to-emerald-500',
        icon: 'text-emerald-500 dark:text-emerald-400',
        badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700'
      },
      indigo: {
        bg: 'bg-indigo-500/10 dark:bg-indigo-900/20',
        border: 'border-indigo-400/30 dark:border-indigo-600/50',
        text: 'text-indigo-600 dark:text-indigo-400',
        progress: 'from-indigo-600 to-indigo-500',
        icon: 'text-indigo-500 dark:text-indigo-400',
        badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700'
      }
    };
    return colors[color];
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700';
      case 'Advanced': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700';
      case 'Intermediate': return 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-700';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-600';
    }
  };

  return (
    <section 
      id="skills" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-500/5 dark:bg-emerald-400/3 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase mb-6 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            TECHNICAL EXPERTISE
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white text-balance">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive expertise across modern web technologies with a focus on scalable, 
            performance-driven solutions that deliver exceptional user experiences.
          </p>
          
          {/* Status indicator */}
          <motion.div 
            className="inline-flex items-center gap-2 mt-4 sm:mt-6 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-emerald-200 dark:border-emerald-700"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Available for New Projects
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Categories */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-24"
        >
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div 
                key={category.category}
                variants={categoryIndex % 2 === 0 ? slideInLeft : slideInRight}
                className="group bg-white/90 dark:bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg border border-white/50 dark:border-white/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-500"
                whileHover={{ y: -2 }}
              >
                {/* Enhanced Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <motion.div 
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    whileHover={{ rotate: 5 }}
                  >
                    <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${colorClasses.icon}`} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {category.category}
                    </h3>
                    <div className={`inline-flex items-center gap-2 ${colorClasses.badge} border px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                      <Target className="w-3 h-3" />
                      {category.skills.length} Core Technologies
                    </div>
                  </div>
                </div>

                {/* Enhanced Skills List */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.08 + skillIndex * 0.05
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-3 gap-2">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          {skill.trending && (
                            <motion.div 
                              className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <TrendingUp className="w-3 h-3" />
                              <span className="hidden sm:inline">HOT</span>
                            </motion.div>
                          )}
                          <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 sm:px-3 py-1 rounded-full font-medium">
                            {skill.experience}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current" />
                          <span className="text-slate-600 dark:text-slate-300 font-bold text-sm sm:text-base">{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="w-full h-3 sm:h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative group-hover/skill:shadow-md transition-shadow duration-300">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${colorClasses.progress} relative overflow-hidden rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.08,
                            ease: [0.21, 0.47, 0.32, 0.98]
                          }}
                          viewport={{ once: true }}
                        >
                          {/* Enhanced progress bar shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ 
                              duration: 2, 
                              delay: categoryIndex * 0.3 + skillIndex * 0.2,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Technical Stack Grid */}
        <motion.div 
          className="bg-white/90 dark:bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg border border-white/50 dark:border-white/20 mb-12 sm:mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
              COMPLETE TOOLKIT
            </motion.div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 text-balance">
              Technology Arsenal
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Battle-tested technologies and frameworks for building scalable, modern applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-white/10 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg text-center font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer min-h-[100px] sm:min-h-[120px] flex flex-col items-center justify-center touch-manipulation focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                tabIndex={0}
                role="button"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2">{tech.name}</div>
                <div className="flex flex-col gap-1">
                  <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 px-2 py-1 rounded-full transition-colors duration-300">
                    {tech.category}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full border font-semibold ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Achievement Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '10+', label: 'Years Experience', icon: Award, color: 'text-amber-500 dark:text-amber-400', bg: 'from-amber-400 to-orange-400' },
            { number: '50+', label: 'Technologies Mastered', icon: Code, color: 'text-blue-500 dark:text-blue-400', bg: 'from-blue-500 to-cyan-500' },
            { number: '200+', label: 'Projects Delivered', icon: Shield, color: 'text-emerald-500 dark:text-emerald-400', bg: 'from-emerald-500 to-green-500' },
            { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'text-purple-500 dark:text-purple-400', bg: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 sm:p-6 md:p-8 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/50 dark:border-white/20 rounded-xl sm:rounded-2xl hover:bg-white/90 dark:hover:bg-white/20 hover:shadow-xl transition-all duration-500 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              whileHover={{ 
                scale: 1.02, 
                y: -4
              }}
            >
              <motion.div
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.08 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-6 sm:p-8 md:p-12 lg:p-16 rounded-xl sm:rounded-2xl md:rounded-3xl text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-700/90"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Ready to Build Something Extraordinary?
              </motion.h3>
              <motion.p 
                className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 font-light max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Let's transform your vision into a powerful digital solution that drives growth and exceeds expectations.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-blue-50 hover:shadow-xl hover:scale-102 transition-all duration-300 flex items-center gap-2 min-h-[44px] touch-manipulation focus:outline-none focus:ring-4 focus:ring-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  Start Your Project
                </motion.button>
                
                <motion.button
                  className="bg-transparent border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2 min-h-[44px] touch-manipulation focus:outline-none focus:ring-4 focus:ring-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Portfolio
                </motion.button>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-blue-100 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  Money-back guarantee
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  Fast delivery
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  5-star rated
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;