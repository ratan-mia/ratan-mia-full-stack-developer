'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  ChevronRight,
  Cloud,
  Database,
  DollarSign,
  FileText,
  Palette,
  Rocket,
  Target,
  TrendingUp,
  User,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  // Professional animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const achievements = [
    {
      icon: DollarSign,
      metric: '40%',
      title: 'Cost Reduction',
      description: 'Reduced IT costs through strategic optimization and efficient resource management across multiple enterprise projects',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400'
    },
    {
      icon: TrendingUp,
      metric: '200%',
      title: 'Sales Growth',
      description: 'Sales increase achieved with innovative Car Price Calculator implementation and conversion optimization',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400'
    },
    {
      icon: Zap,
      metric: '97%',
      title: 'Performance Boost',
      description: 'Speed optimization on Chery Bangladesh website, dramatically improving user experience and SEO rankings',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400'
    },
    {
      icon: Users,
      metric: '25%',
      title: 'Team Excellence',
      description: 'Client satisfaction increase while leading a team of 15+ developers and implementing agile methodologies',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400'
    }
  ];

  const expertise = [
    { 
      category: 'Frontend Development', 
      icon: Palette,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+', 'Vue.js'],
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      category: 'Backend Development', 
      icon: Database,
      skills: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'RESTful APIs', 'GraphQL'],
      color: 'from-green-500 to-teal-600'
    },
    { 
      category: 'DevOps & Tools', 
      icon: Cloud,
      skills: ['Docker', 'AWS', 'Git', 'Linux', 'CI/CD', 'Nginx'],
      color: 'from-orange-500 to-red-600'
    },
    { 
      category: 'CMS & Platforms', 
      icon: FileText,
      skills: ['WordPress', 'Shopify', 'Drupal', 'Contentful', 'Strapi', 'Sanity'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const experience = [
    {
      company: 'Kawasaki Bangladesh',
      role: 'Senior Full Stack Developer',
      period: '2020 - Present',
      duration: '4+ Years',
      description: 'Leading development of enterprise-level applications, optimizing system performance, and mentoring junior developers. Spearheaded digital transformation initiatives resulting in 40% cost reduction.',
      achievements: ['Enterprise Application Development', 'Team Leadership', 'Performance Optimization'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      company: 'Continental Motors',
      role: 'IT Manager & Lead Developer',
      period: '2018 - 2020',
      duration: '2 Years',
      description: 'Managed complete IT infrastructure and led digital transformation initiatives. Implemented modern development practices and automated deployment processes.',
      achievements: ['IT Infrastructure Management', 'Digital Transformation', 'Process Automation'],
      color: 'from-green-500 to-teal-600'
    },
    {
      company: 'Chery Bangladesh',
      role: 'Lead Web Developer',
      period: '2016 - 2018',
      duration: '2 Years',
      description: 'Spearheaded website optimization and e-commerce platform development. Achieved 97% performance improvement and 200% sales increase through innovative solutions.',
      achievements: ['E-commerce Development', 'Performance Optimization', 'Sales Growth'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'expertise', label: 'Expertise', icon: Target },
    { id: 'experience', label: 'Experience', icon: Briefcase }
  ];

  const personalStats = [
    { label: 'Years of Experience', value: '10+', icon: Calendar },
    { label: 'Projects Completed', value: '100+', icon: Rocket },
    { label: 'Technologies Mastered', value: '20+', icon: Zap },
    { label: 'Team Members Led', value: '15+', icon: Users }
  ];

  return (
    <section id="about" className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Carbon Fiber Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Professional Section Header */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-800/30 backdrop-blur-sm text-blue-400 px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase mb-8"
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>About Me</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight"
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            With over a decade of experience, I transform complex challenges into elegant solutions, 
            delivering high-performance applications that drive business growth and exceed expectations.
          </motion.p>

          {/* Personal Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative text-center p-6 bg-gradient-to-b from-gray-900 to-black rounded-xl border border-gray-800 hover:border-blue-800/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                {/* Item Glow Effect */}
                <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-xl blur transition-all duration-500"></div>
                
                <stat.icon className="relative z-10 w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="relative z-10 text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Professional Tab Navigation */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                  : 'bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 border border-gray-700 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 hover:text-white hover:border-blue-800/50'
              }`}
              whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Item Glow Effect */}
              {activeTab !== tab.id && (
                <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-full blur transition-all duration-500"></div>
              )}
              
              <tab.icon className="relative z-10 w-5 h-5" />
              <span className="relative z-10">{tab.label}</span>

              {/* Accent Line */}
              {activeTab !== tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Professional Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Enhanced Story */}
              <motion.div 
                variants={slideInLeft}
                className="space-y-8"
              >
                <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 md:p-10 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl hover:border-blue-800/50 transition-all duration-500">
                  {/* Item Glow Effect */}
                  <div className="absolute -inset-1 bg-blue-600/0 hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                      A Decade Of Innovation
                    </h3>
                    <div className="space-y-6">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        As a highly accomplished Full Stack Developer, I bring a robust background in crafting 
                        high-performance, scalable web applications with specialized focus on React.js and Next.js 
                        ecosystems.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        My expertise lies in delivering comprehensive modern web solutions, consistently exceeding 
                        project goals by optimizing development workflows and fostering collaborative environments 
                        that drive innovation.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        I specialize in transforming complex business requirements into elegant, user-centric 
                        digital experiences that not only meet but exceed stakeholder expectations.
                      </p>
                    </div>
                    
                    {/* Enhanced Specialty Tags */}
                    <div className="flex flex-wrap gap-3 mt-8">
                      {[
                        { label: 'React.js Expert', color: 'from-indigo-500 to-indigo-600', textColor: 'text-indigo-400' },
                        { label: 'Next.js Specialist', color: 'from-green-500 to-green-600', textColor: 'text-green-400' },
                        { label: 'WordPress Pro', color: 'from-yellow-500 to-yellow-600', textColor: 'text-yellow-400' },
                        { label: 'Team Leader', color: 'from-purple-500 to-purple-600', textColor: 'text-purple-400' },
                        { label: 'Performance Expert', color: 'from-blue-500 to-blue-600', textColor: 'text-blue-400' }
                      ].map((tag, index) => (
                        <motion.span
                          key={tag.label}
                          className={`px-4 py-2 bg-gray-800 border border-gray-700 ${tag.textColor} text-sm font-medium rounded-full hover:bg-gray-700 hover:border-blue-800/50 transition-all duration-300 cursor-pointer`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.08, duration: 0.3 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tag.label}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>
                </div>
              </motion.div>
              
              {/* Right Column - Enhanced Achievements */}
              <motion.div 
                variants={slideInRight}
                className="space-y-8"
              >
                <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 md:p-10 rounded-2xl border border-gray-800 shadow-xl">
                  {/* Item Glow Effect */}
                  <div className="absolute -inset-1 bg-blue-600/0 hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                      Key Achievements
                    </h4>
                    <div className="grid gap-6">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="group relative p-6 bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-blue-800/50 transition-all duration-300 cursor-pointer"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          whileHover={{ scale: 1.01, x: 4 }}
                          onHoverStart={() => setHoveredAchievement(index)}
                          onHoverEnd={() => setHoveredAchievement(null)}
                        >
                          {/* Item Glow Effect */}
                          <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-xl blur transition-all duration-500"></div>
                          
                          <div className="relative z-10 flex items-start gap-5">
                            <motion.div 
                              className="flex-shrink-0"
                              animate={{ rotate: hoveredAchievement === index ? 5 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <achievement.icon className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-3">
                                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                                  {achievement.metric}
                                </div>
                                <h5 className={`text-lg font-bold ${achievement.textColor} group-hover:text-white transition-colors duration-300`}>
                                  {achievement.title}
                                </h5>
                              </div>
                              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {achievement.description}
                              </p>
                            </div>
                          </div>

                          {/* Accent Line */}
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'expertise' && (
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {expertise.map((category, index) => (
                <motion.div
                  key={category.category}
                  className="group relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-blue-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {/* Item Glow Effect */}
                  <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
                  
                  {/* Header */}
                  <div className="relative z-10 text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                      {category.category}
                    </h4>
                  </div>
                  
                  {/* Skills List */}
                  <div className="relative z-10 space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="group/skill flex items-center gap-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-blue-800/50 transition-all duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.08) + (skillIndex * 0.05), duration: 0.4 }}
                        whileHover={{ x: 4 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover/skill:scale-125 transition-transform duration-200`}></div>
                        <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6 max-w-6xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="group relative bg-gradient-to-b from-gray-900 to-black p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-blue-800/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  {/* Item Glow Effect */}
                  <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
                  
                  <div className="relative z-10 grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                            {exp.role}
                          </h4>
                          <h5 className="text-xl text-blue-400 font-bold mb-3">
                            {exp.company}
                          </h5>
                          <div className="flex items-center gap-4">
                            <span className="inline-flex items-center bg-blue-900/50 border border-blue-800/30 text-blue-400 px-4 py-2 text-sm font-medium rounded-full">
                              {exp.period}
                            </span>
                            <span className="text-gray-400 font-medium">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl group-hover:bg-gray-700 group-hover:border-blue-800/50 transition-all duration-300">
                      <h6 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">
                        Key Achievements
                      </h6>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achievement}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (achIndex * 0.05), duration: 0.4 }}
                          >
                            <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Professional Call to Action */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-12 md:p-16 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-blue-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready To Create Something Extraordinary?
              </h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                Let's collaborate to transform your vision into reality. With proven expertise and 
                a commitment to excellence, I'm ready to take your project to the next level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>

                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Services</span>
                  <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
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