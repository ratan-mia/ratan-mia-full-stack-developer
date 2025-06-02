'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Monitor,
  Rocket,
  Server,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  // Optimized animation variants following design guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const achievements = [
    {
      icon: TrendingUp,
      metric: '40%',
      title: 'Cost Reduction',
      description: 'Reduced IT costs through strategic optimization and efficient resource management across multiple enterprise projects',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/10',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      iconColor: 'text-emerald-500',
      borderColor: 'border-emerald-200 dark:border-emerald-800'
    },
    {
      icon: Target,
      metric: '200%',
      title: 'Sales Growth',
      description: 'Sales increase achieved with innovative Car Price Calculator implementation and conversion optimization',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      textColor: 'text-blue-600 dark:text-blue-400',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      icon: Zap,
      metric: '97%',
      title: 'Performance Boost',
      description: 'Speed optimization on Chery Bangladesh website, dramatically improving user experience and SEO rankings',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-900/10',
      textColor: 'text-amber-600 dark:text-amber-400',
      iconColor: 'text-amber-500',
      borderColor: 'border-amber-200 dark:border-amber-800'
    },
    {
      icon: Users,
      metric: '25%',
      title: 'Team Excellence',
      description: 'Client satisfaction increase while leading a team of 15+ developers and implementing agile methodologies',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10',
      textColor: 'text-purple-600 dark:text-purple-400',
      iconColor: 'text-purple-500',
      borderColor: 'border-purple-200 dark:border-purple-800'
    }
  ];

  const expertise = [
    { 
      category: 'Frontend Development', 
      icon: Monitor,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+', 'Vue.js'],
      color: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    { 
      category: 'Backend Development', 
      icon: Server,
      skills: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'RESTful APIs', 'GraphQL'],
      color: 'from-emerald-500 to-green-600',
      iconBg: 'bg-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/10',
      borderColor: 'border-emerald-200 dark:border-emerald-800'
    },
    { 
      category: 'DevOps & Tools', 
      icon: Settings,
      skills: ['Docker', 'AWS', 'Git', 'Linux', 'CI/CD', 'Nginx'],
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/10',
      borderColor: 'border-orange-200 dark:border-orange-800'
    },
    { 
      category: 'CMS & Platforms', 
      icon: Database,
      skills: ['WordPress', 'Shopify', 'Drupal', 'Contentful', 'Strapi', 'Sanity'],
      color: 'from-purple-500 to-pink-600',
      iconBg: 'bg-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10',
      borderColor: 'border-purple-200 dark:border-purple-800'
    }
  ];

  const experience = [
    {
      company: 'Kawasaki Bangladesh',
      role: 'Full Stack Web Developer',
      period: '2018 - Present',
      duration: '6+ Years',
      description: 'Leading development of enterprise-level applications, optimizing system performance, and mentoring junior developers. Spearheaded digital transformation initiatives resulting in significant cost reduction.',
      achievements: ['Enterprise Application Development', 'Team Leadership', 'Performance Optimization'],
      color: 'from-blue-500 to-indigo-600',
      icon: Code2,
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      company: 'Continental Motors',
      role: 'IT Manager',
      period: '2018 - Present',
      duration: '6+ Years',
      description: 'Managed complete IT infrastructure and led digital transformation initiatives. Implemented modern development practices and automated deployment processes.',
      achievements: ['IT Infrastructure Management', 'Digital Transformation', 'Process Automation'],
      color: 'from-emerald-500 to-green-600',
      icon: Cloud,
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/10',
      borderColor: 'border-emerald-200 dark:border-emerald-800'
    },
    {
      company: 'Bengal Group of Industries',
      role: 'Sr. Software Developer',
      period: '2018',
      duration: '8 Months',
      description: 'Spearheaded Laravel-based e-commerce solutions and led a team of fifteen members, achieving remarkable client satisfaction improvements.',
      achievements: ['E-commerce Development', 'Team Leadership', 'Client Satisfaction'],
      color: 'from-purple-500 to-pink-600',
      icon: Award,
      bgColor: 'bg-purple-50 dark:bg-purple-900/10',
      borderColor: 'border-purple-200 dark:border-purple-800'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'expertise', label: 'Expertise', icon: Target },
    { id: 'experience', label: 'Experience', icon: Award }
  ];

  const personalStats = [
    { label: 'Years of Experience', value: '8+', icon: Calendar, color: 'text-blue-500 dark:text-blue-400' },
    { label: 'Projects Completed', value: '150+', icon: Rocket, color: 'text-emerald-500 dark:text-emerald-400' },
    { label: 'Technologies Mastered', value: '20+', icon: Zap, color: 'text-amber-500 dark:text-amber-400' },
    { label: 'Team Members Led', value: '15+', icon: Users, color: 'text-purple-500 dark:text-purple-400' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/8 dark:bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-500/8 dark:bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/5 dark:bg-cyan-400/3 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Enhanced Section Header */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/90 dark:bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg mb-6 border border-white/50 dark:border-white/20"
          >
            <motion.div 
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs sm:text-sm uppercase tracking-wider">About Me</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white text-balance"
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            With 8+ years of experience, I transform complex challenges into elegant solutions, 
            delivering high-performance applications that drive business growth and exceed expectations.
          </motion.p>

          {/* Personal Stats - Improved responsive grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 max-w-5xl mx-auto"
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 sm:p-6 md:p-8 bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-white/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 hover:scale-102 transition-all duration-300 min-h-[120px] sm:min-h-[140px] flex flex-col justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 sm:mb-3`} />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 min-h-[44px] min-w-[44px] touch-manipulation focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-102'
                  : 'bg-white/90 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-white/20 hover:text-slate-800 dark:hover:text-white border border-slate-200/50 dark:border-white/20 hover:border-slate-300/50 dark:hover:border-white/30 shadow-md'
              }`}
              whileHover={{ scale: activeTab === tab.id ? 1.02 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
              {/* Left Column - Enhanced Story */}
              <motion.div 
                variants={slideInLeft}
                initial="initial"
                animate="animate"
                className="space-y-6 sm:space-y-8"
              >
                <div className="bg-white/90 dark:bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg border border-white/50 dark:border-white/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-500">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                    8+ Years of Innovation
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      As a seasoned Full Stack Developer with 8+ years of experience in Web Development, 
                      I specialize in crafting high-performance, scalable applications with expertise in 
                      PHP, Laravel, React.js, and modern web technologies.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      I excel in Web Development, IT Project Management, and innovation, turning complex 
                      challenges into successful outcomes while delivering projects on time and within budget 
                      by efficiently managing resources and collaborating with cross-functional teams.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      My proven track record includes leading teams of 15+ developers, achieving 200% sales 
                      increases, and implementing solutions that drive significant business growth.
                    </p>
                  </div>
                  
                  {/* Enhanced Specialty Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                    {[
                      { label: 'Laravel Expert', color: 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/30' },
                      { label: 'React.js Specialist', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/30' },
                      { label: 'WordPress Pro', color: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/30' },
                      { label: 'Team Leader', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30' },
                      { label: 'IT Manager', color: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/30' }
                    ].map((tag, index) => (
                      <motion.span
                        key={tag.label}
                        className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${tag.color}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -1 }}
                      >
                        {tag.label}
                      </motion.span>
                    ))}
                  </div>

                  {/* Download Resume CTA */}
                  <div className="mt-6 sm:mt-8">
                    <motion.button
                      className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 hover:scale-102 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-sm sm:text-base"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Column - Enhanced Achievements */}
              <motion.div 
                variants={slideInRight}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                <div className="bg-white/90 dark:bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg border border-white/50 dark:border-white/20">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
                    Key Achievements
                  </h4>
                  <div className="grid gap-4 sm:gap-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 sm:p-6 rounded-lg md:rounded-xl border ${achievement.borderColor} ${achievement.bgColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.01, x: 4 }}
                        onHoverStart={() => setHoveredAchievement(index)}
                        onHoverEnd={() => setHoveredAchievement(null)}
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <motion.div 
                            className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${achievement.color} rounded-lg md:rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                            animate={{ rotate: hoveredAchievement === index ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                              <div className={`text-2xl sm:text-3xl font-bold ${achievement.textColor} group-hover:scale-110 transition-transform duration-300`}>
                                {achievement.metric}
                              </div>
                              <h5 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                {achievement.title}
                              </h5>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-xs sm:text-sm">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'expertise' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {expertise.map((category, index) => (
                <motion.div
                  key={category.category}
                  className={`${category.bgColor} backdrop-blur-sm p-4 sm:p-6 rounded-xl md:rounded-2xl shadow-lg border ${category.borderColor} hover:shadow-xl hover:scale-102 transition-all duration-500 h-full`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  {/* Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${category.iconBg} rounded-lg md:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white shadow-md`}>
                      <category.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {category.category}
                    </h4>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-2 sm:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2 sm:gap-3 group p-1 sm:p-2 rounded-md hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-200"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.08) + (skillIndex * 0.03), duration: 0.3 }}
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400 font-light group-hover:text-slate-900 dark:group-hover:text-slate-200 group-hover:font-medium transition-all duration-200 text-xs sm:text-sm">
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
            <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className={`${exp.bgColor} backdrop-blur-sm p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg border ${exp.borderColor} hover:shadow-xl hover:scale-[1.005] transition-all duration-500`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${exp.color} rounded-lg md:rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                          <exp.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            {exp.role}
                          </h4>
                          <h5 className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                            {exp.company}
                          </h5>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                              {exp.period}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 font-light text-xs sm:text-sm">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="bg-slate-50/50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-lg md:rounded-xl border border-slate-200/30 dark:border-slate-700/30">
                      <h6 className="font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">
                        Key Achievements
                      </h6>
                      <div className="space-y-2 sm:space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achievement}
                            className="flex items-center gap-2 sm:gap-3"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (achIndex * 0.03), duration: 0.3 }}
                          >
                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${exp.color} rounded-full flex-shrink-0`}></div>
                            <span className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-light">{achievement}</span>
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

        {/* Enhanced Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-6 sm:p-8 md:p-12 rounded-xl md:rounded-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
                Ready to Create Something Extraordinary?
              </h3>
              <p className="text-blue-200 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-light">
                Let's collaborate to transform your vision into reality. With proven expertise and 
                a commitment to excellence, I'm ready to take your project to the next level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group min-h-[44px] text-sm sm:text-base"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>

                <motion.a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:ring-offset-2 group min-h-[44px] text-sm sm:text-base"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Services</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;