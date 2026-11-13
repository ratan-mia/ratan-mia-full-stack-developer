'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  // Animation variants following design system guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
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

  const achievements = [
    {
      icon: '💰',
      metric: '40%',
      title: 'Cost Reduction',
      description: 'Reduced IT costs through strategic optimization and efficient resource management across multiple enterprise projects',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800'
    },
    {
      icon: '📈',
      metric: '200%',
      title: 'Sales Growth',
      description: 'Sales increase achieved with innovative Car Price Calculator implementation and conversion optimization',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800'
    },
    {
      icon: '⚡',
      metric: '97%',
      title: 'Performance Boost',
      description: 'Speed optimization on Chery Bangladesh website, dramatically improving user experience and SEO rankings',
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800'
    },
    {
      icon: '👥',
      metric: '25%',
      title: 'Team Excellence',
      description: 'Client satisfaction increase while leading a team of 15+ developers and implementing agile methodologies',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800'
    }
  ];

  const expertise = [
    { 
      category: 'Frontend Development', 
      icon: '🎨',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+', 'Vue.js'],
      color: 'from-blue-600 to-indigo-600'
    },
    { 
      category: 'Backend Development', 
      icon: '⚙️',
      skills: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'RESTful APIs', 'GraphQL'],
      color: 'from-green-600 to-teal-600'
    },
    { 
      category: 'DevOps & Tools', 
      icon: '🛠️',
      skills: ['Docker', 'AWS', 'Git', 'Linux', 'CI/CD', 'Nginx'],
      color: 'from-orange-600 to-red-600'
    },
    { 
      category: 'CMS & Platforms', 
      icon: '📝',
      skills: ['WordPress', 'Shopify', 'Drupal', 'Contentful', 'Strapi', 'Sanity'],
      color: 'from-purple-600 to-pink-600'
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
      color: 'from-blue-600 to-indigo-600'
    },
    {
      company: 'Continental Motors',
      role: 'IT Manager & Lead Developer',
      period: '2018 - 2020',
      duration: '2 Years',
      description: 'Managed complete IT infrastructure and led digital transformation initiatives. Implemented modern development practices and automated deployment processes.',
      achievements: ['IT Infrastructure Management', 'Digital Transformation', 'Process Automation'],
      color: 'from-green-600 to-teal-600'
    },
    {
      company: 'Chery Bangladesh',
      role: 'Lead Web Developer',
      period: '2016 - 2018',
      duration: '2 Years',
      description: 'Spearheaded website optimization and e-commerce platform development. Achieved 97% performance improvement and 200% sales increase through innovative solutions.',
      achievements: ['E-commerce Development', 'Performance Optimization', 'Sales Growth'],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '👤' },
    { id: 'expertise', label: 'Expertise', icon: '🎯' },
    { id: 'experience', label: 'Experience', icon: '💼' }
  ];

  const personalStats = [
    { label: 'Years of Experience', value: '10+', icon: '📅' },
    { label: 'Projects Completed', value: '100+', icon: '🚀' },
    { label: 'Technologies Mastered', value: '20+', icon: '⚡' },
    { label: 'Team Members Led', value: '15+', icon: '👥' }
  ];

  return (
    <section id="about" className="py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/8 to-pink-500/8 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Enhanced Section Header */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 shadow-xl mb-8 border border-white/50"
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">About Me</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-8 text-slate-800 capitalize"
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            With over a decade of experience, I transform complex challenges into elegant solutions, 
            delivering high-performance applications that drive business growth and exceed expectations.
          </motion.p>

          {/* Personal Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-white/80 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105'
                  : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-800 border border-slate-200/50 hover:border-slate-300/50'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Enhanced Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Enhanced Story */}
              <motion.div 
                variants={slideInLeft}
                className="space-y-8"
              >
                <div className="bg-white/80 backdrop-blur-sm p-10 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 capitalize">
                    A Decade Of Innovation
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      As a highly accomplished Full Stack Developer, I bring a robust background in crafting 
                      high-performance, scalable web applications with specialized focus on React.js and Next.js 
                      ecosystems.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      My expertise lies in delivering comprehensive modern web solutions, consistently exceeding 
                      project goals by optimizing development workflows and fostering collaborative environments 
                      that drive innovation.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      I specialize in transforming complex business requirements into elegant, user-centric 
                      digital experiences that not only meet but exceed stakeholder expectations.
                    </p>
                  </div>
                  
                  {/* Enhanced Specialty Tags */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { label: 'React.js Expert', color: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200' },
                      { label: 'Next.js Specialist', color: 'bg-green-100 text-green-800 hover:bg-green-200' },
                      { label: 'WordPress Pro', color: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' },
                      { label: 'Team Leader', color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
                      { label: 'Performance Expert', color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' }
                    ].map((tag, index) => (
                      <motion.span
                        key={tag.label}
                        className={`px-5 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${tag.color}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tag.label}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Right Column - Enhanced Achievements */}
              <motion.div 
                variants={slideInRight}
                className="space-y-8"
              >
                <div className="bg-white/80 backdrop-blur-sm p-10 shadow-xl border border-white/50">
                  <h4 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 capitalize">
                    Key Achievements
                  </h4>
                  <div className="grid gap-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className={`p-6 border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 group cursor-pointer ${achievement.bgColor}/30 hover:${achievement.bgColor}/50`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 8 }}
                        onHoverStart={() => setHoveredAchievement(index)}
                        onHoverEnd={() => setHoveredAchievement(null)}
                      >
                        <div className="flex items-start gap-5">
                          <motion.div 
                            className="text-4xl group-hover:scale-110 transition-transform duration-300"
                            animate={{ rotate: hoveredAchievement === index ? 10 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {achievement.icon}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                                {achievement.metric}
                              </div>
                              <h5 className={`text-lg font-bold ${achievement.textColor}`}>
                                {achievement.title}
                              </h5>
                            </div>
                            <p className="text-slate-600 leading-relaxed font-light">
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
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {expertise.map((category, index) => (
                <motion.div
                  key={category.category}
                  className="bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 capitalize">
                      {category.category}
                    </h4>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-4 group p-3 hover:bg-slate-50/50 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform duration-200`}></div>
                        <span className="text-slate-600 font-light group-hover:text-slate-800 group-hover:font-medium transition-all duration-200">
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
            <div className="space-y-8 max-w-6xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="bg-white/80 backdrop-blur-sm p-10 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <h4 className="text-2xl md:text-3xl font-bold text-slate-800 capitalize mb-2">
                            {exp.role}
                          </h4>
                          <h5 className="text-xl text-blue-600 font-semibold mb-2">
                            {exp.company}
                          </h5>
                          <div className="flex items-center gap-4">
                            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
                              {exp.period}
                            </span>
                            <span className="text-slate-500 font-light">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed font-light text-lg mb-6">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="bg-slate-50/50 p-6 border border-slate-200/30">
                      <h6 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">
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
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.color}`}></div>
                            <span className="text-slate-600 text-sm font-light">{achievement}</span>
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
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-12 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 capitalize">
                Ready To Create Something Extraordinary?
              </h3>
              <p className="text-blue-200 mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                Let's collaborate to transform your vision into reality. With proven expertise and 
                a commitment to excellence, I'm ready to take your project to the next level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Work Together</span>
                  <motion.svg 
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.a>

                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Services</span>
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
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
