'use client';

import { AnimatePresence, motion } from 'framer-motion';
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

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-blue-400/30 text-blue-400 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>About Me</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Transforming complex challenges into elegant solutions with over a decade of experience in high-performance web development.
          </motion.p>

          {/* Compact Personal Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Compact Tab Navigation */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 md:px-6 py-3 font-bold text-sm transition-all duration-300 rounded-xl ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-md text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Story Section */}
                <motion.div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                      A Decade Of Innovation
                    </h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        As a highly accomplished Full Stack Developer, I bring expertise in crafting 
                        high-performance, scalable web applications with specialized focus on React.js and Next.js.
                      </p>
                      <p>
                        My expertise lies in delivering comprehensive modern web solutions, consistently exceeding 
                        project goals by optimizing development workflows and fostering innovation.
                      </p>
                    </div>
                    
                    {/* Compact Specialty Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {['React.js Expert', 'Next.js Specialist', 'WordPress Pro', 'Team Leader'].map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-white/10 border border-white/20 text-blue-300 text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Compact Achievements */}
                <motion.div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-6">
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="group p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        onHoverStart={() => setHoveredAchievement(index)}
                        onHoverEnd={() => setHoveredAchievement(null)}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="flex-shrink-0"
                            animate={{ rotate: hoveredAchievement === index ? 5 : 0 }}
                          >
                            <achievement.icon className="w-8 h-8 text-blue-400" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`text-2xl font-black bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                                {achievement.metric}
                              </div>
                              <h5 className="text-base font-bold text-white">
                                {achievement.title}
                              </h5>
                            </div>
                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl mx-auto mb-3 flex items-center justify-center text-white shadow-lg`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {category.category}
                      </h4>
                    </div>
                    
                    {/* Compact Skills List */}
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="flex items-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                          whileHover={{ x: 4 }}
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${category.color} rounded-full`}></div>
                          <span className="text-sm text-gray-300 font-medium">
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01, y: -2 }}
                  >
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Company Info */}
                      <div className="lg:col-span-2">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                              {exp.role}
                            </h4>
                            <h5 className="text-lg text-blue-400 font-bold mb-3">
                              {exp.company}
                            </h5>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <span className="inline-flex items-center bg-blue-900/50 border border-blue-400/30 text-blue-300 px-3 py-1 text-sm font-medium rounded-full">
                                {exp.period}
                              </span>
                              <span className="text-sm text-gray-400 font-medium">
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      </div>

                      {/* Compact Achievements */}
                      <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                        <h6 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
                          Achievements
                        </h6>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achievement}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                            >
                              <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300 font-medium">
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

        {/* Compact Call to Action */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                Ready To Create Something Extraordinary?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Let's collaborate to transform your vision into reality with proven expertise and commitment to excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-base md:text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Services</span>
                  <Briefcase className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Compact Bottom Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                {[
                  { number: '100%', label: 'Success Rate' },
                  { number: '24/7', label: 'Support' },
                  { number: '30+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">{stat.number}</div>
                    <div className="text-blue-200 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;