'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  ChevronRight,
  Clock,
  Cloud,
  Database,
  DollarSign,
  FileText,
  Palette,
  Rocket,
  Shield,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';

// ModernCTA Component
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

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const achievements = [
    {
      icon: DollarSign,
      metric: '40%',
      title: 'Cost Reduction',
      description: 'Reduced IT costs through strategic optimization',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      metric: '200%',
      title: 'Sales Growth',
      description: 'Sales increase with innovative solutions',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      metric: '97%',
      title: 'Performance',
      description: 'Speed optimization achievements',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      metric: '25%',
      title: 'Team Excellence',
      description: 'Client satisfaction improvement',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const expertise = [
    { 
      category: 'Frontend', 
      icon: Palette,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      category: 'Backend', 
      icon: Database,
      skills: ['PHP', 'Laravel', 'Node.js', 'MySQL'],
      color: 'from-green-500 to-teal-600'
    },
    { 
      category: 'DevOps', 
      icon: Cloud,
      skills: ['Docker', 'AWS', 'Git', 'CI/CD'],
      color: 'from-orange-500 to-red-600'
    },
    { 
      category: 'CMS', 
      icon: FileText,
      skills: ['WordPress', 'Shopify', 'Strapi', 'Sanity'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const experience = [
    {
      company: 'Kawasaki Bangladesh',
      role: 'Senior Full Stack Developer',
      period: '2020 - Present',
      duration: '4+ Years',
      description: 'Leading enterprise development and digital transformation initiatives.',
      achievements: ['Enterprise Development', 'Team Leadership', 'Performance Optimization'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      company: 'Continental Motors',
      role: 'IT Manager & Lead Developer',
      period: '2018 - 2020',
      duration: '2 Years',
      description: 'Managed IT infrastructure and led digital transformation.',
      achievements: ['IT Management', 'Digital Transformation', 'Process Automation'],
      color: 'from-green-500 to-teal-600'
    },
    {
      company: 'Chery Bangladesh',
      role: 'Lead Web Developer',
      period: '2016 - 2018',
      duration: '2 Years',
      description: 'Spearheaded website optimization and e-commerce development.',
      achievements: ['E-commerce Development', 'Performance Optimization', 'Sales Growth'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'expertise', label: 'Skills', icon: Target },
    { id: 'experience', label: 'Experience', icon: Briefcase }
  ];

  const personalStats = [
    { label: 'Experience', value: '10+', icon: Calendar },
    { label: 'Projects', value: '100+', icon: Rocket },
    { label: 'Technologies', value: '20+', icon: Zap },
    { label: 'Team Size', value: '15+', icon: Users }
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-blue-400/30 text-blue-400 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider mb-6"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>About Me</span>
          </motion.div>

          {/* Main Section Title - Following Guidelines */}
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Crafting Digital Excellence
          </motion.h2>

          {/* Body Text - Primary - Following Guidelines */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming complex challenges into elegant solutions with over a decade of experience in high-performance web development.
          </motion.p>

          {/* Personal Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                {/* Stats Numbers - Using bold as per guidelines */}
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                {/* Meta Info - Following Guidelines */}
                <div className="text-xs md:text-sm font-medium text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 md:px-6 py-3 font-semibold text-sm md:text-base transition-all duration-300 rounded-xl whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-md text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="min-h-[400px]"
          >
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Story Section */}
                <motion.div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                    {/* Subsection Title - Following Guidelines */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                      A Decade Of Innovation
                    </h3>
                    {/* Body Text - Secondary - Following Guidelines */}
                    <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                      <p>
                        As a highly accomplished Full Stack Developer, I bring expertise in crafting 
                        high-performance, scalable web applications with specialized focus on React.js and Next.js.
                      </p>
                      <p>
                        My expertise lies in delivering comprehensive modern web solutions, consistently exceeding 
                        project goals by optimizing development workflows and fostering innovation.
                      </p>
                    </div>
                    
                    {/* Specialty Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {['React.js Expert', 'Next.js Specialist', 'WordPress Pro', 'Team Leader'].map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-white/10 border border-white/20 text-blue-300 text-xs md:text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.08 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Achievements */}
                <motion.div className="space-y-4">
                  {/* Subsection Title - Following Guidelines */}
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-6">
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="group p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ scale: 1.02, x: 2 }}
                        onHoverStart={() => setHoveredAchievement(index)}
                        onHoverEnd={() => setHoveredAchievement(null)}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="flex-shrink-0"
                            animate={{ rotate: hoveredAchievement === index ? 5 : 0 }}
                          >
                            <achievement.icon className="w-7 h-7 text-blue-400" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              {/* Achievement metrics - Using bold */}
                              <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                                {achievement.metric}
                              </div>
                              {/* Card Title - Following Guidelines */}
                              <h5 className="text-sm md:text-base font-bold text-white">
                                {achievement.title}
                              </h5>
                            </div>
                            {/* Caption - Following Guidelines */}
                            <p className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'expertise' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertise.map((category, index) => (
                  <motion.div
                    key={category.category}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl mx-auto mb-3 flex items-center justify-center text-white shadow-lg`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      {/* Card Title - Following Guidelines */}
                      <h4 className="text-lg md:text-xl font-bold text-white">
                        {category.category}
                      </h4>
                    </div>
                    
                    {/* Skills List */}
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="flex items-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.08) + (skillIndex * 0.03) }}
                          whileHover={{ x: 2 }}
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${category.color} rounded-full`}></div>
                          {/* Small text - Following Guidelines */}
                          <span className="text-xs md:text-sm font-medium text-gray-300">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.01, y: -2 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Company Info */}
                      <div className="lg:col-span-2">
                        <div className="flex flex-col gap-3 mb-4">
                          <div>
                            {/* Card Title - Following Guidelines */}
                            <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                              {exp.role}
                            </h4>
                            {/* Company name with accent color */}
                            <h5 className="text-base md:text-lg text-blue-400 font-bold mb-3">
                              {exp.company}
                            </h5>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              {/* Label styling - Following Guidelines */}
                              <span className="inline-flex items-center bg-blue-900/50 border border-blue-400/30 text-blue-300 px-3 py-1 text-xs md:text-sm font-semibold rounded-full">
                                {exp.period}
                              </span>
                              {/* Meta info - Following Guidelines */}
                              <span className="text-xs md:text-sm font-medium text-gray-400">
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Body text - Secondary - Following Guidelines */}
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                        {/* Small label - Following Guidelines */}
                        <h6 className="text-xs md:text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                          Achievements
                        </h6>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achievement}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.08) + (achIndex * 0.03) }}
                            >
                              <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0" />
                              {/* Small text with medium weight - Following Guidelines */}
                              <span className="text-xs md:text-sm font-medium text-gray-300">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Modern CTA Section */}
        <ModernCTA />
      </div>
    </section>
  );
};

export default About;