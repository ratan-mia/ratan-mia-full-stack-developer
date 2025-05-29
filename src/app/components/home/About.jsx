'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
      description: 'Reduced IT costs through strategic optimization and efficient resource management'
    },
    {
      icon: '📈',
      metric: '200%',
      description: 'Sales increase achieved with innovative Car Price Calculator implementation'
    },
    {
      icon: '⚡',
      metric: '97%',
      description: 'Speed optimization on Chery Bangladesh website, dramatically improving user experience'
    },
    {
      icon: '👥',
      metric: '25%',
      description: 'Client satisfaction increase while leading a team of 15+ developers'
    }
  ];

  const expertise = [
    { category: 'Frontend', skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+'] },
    { category: 'Backend', skills: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'RESTful APIs'] },
    { category: 'Tools & Platforms', skills: ['Docker', 'AWS', 'Git', 'WordPress', 'Linux'] },
  ];

  const experience = [
    {
      company: 'Kawasaki Bangladesh',
      role: 'Full Stack Developer',
      period: '2020 - Present',
      description: 'Leading development of enterprise-level applications and optimizing system performance.'
    },
    {
      company: 'Continental Motors',
      role: 'IT Manager',
      period: '2018 - 2020',
      description: 'Managed IT infrastructure and led digital transformation initiatives.'
    },
    {
      company: 'Chery Bangladesh',
      role: 'Lead Developer',
      period: '2016 - 2018',
      description: 'Spearheaded website optimization and e-commerce platform development.'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <section id="about" className="py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-blue-100/50 border border-blue-200/30 px-6 py-3 rounded-full backdrop-blur-sm mb-6"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-800 font-medium text-sm tracking-wider uppercase">About Me</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 capitalize"
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            With over a decade of experience, I transform complex challenges into elegant solutions, 
            delivering high-performance applications that drive business growth.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-800 border border-slate-200/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Story */}
              <motion.div 
                variants={slideInLeft}
                className="space-y-6"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 capitalize">
                    A Decade Of Innovation
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
                    As a highly accomplished Full Stack Developer, I bring a robust background in crafting 
                    high-performance, scalable web applications with specialized focus on React.js and Next.js.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                    My expertise lies in delivering comprehensive modern web solutions, consistently exceeding 
                    project goals by optimizing development workflows and fostering collaborative environments.
                  </p>
                  
                  {/* Specialty Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors duration-200 cursor-pointer">
                      React.js Expert
                    </span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200 cursor-pointer">
                      Next.js Specialist
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors duration-200 cursor-pointer">
                      WordPress Pro
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200 cursor-pointer">
                      Team Leader
                    </span>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Column - Achievements */}
              <motion.div 
                variants={slideInRight}
                className="space-y-6"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 capitalize">
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 border border-slate-200/30 hover:bg-slate-50 hover:border-slate-200/50 transition-all duration-300 group cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors duration-200">
                            {achievement.metric}
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-light">
                            {achievement.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'expertise' && (
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((category, index) => (
                <motion.div
                  key={category.category}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <h4 className="text-xl font-bold text-slate-800 mb-6 capitalize">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-slate-600 font-light group-hover:text-slate-800 transition-colors duration-200">
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
            <div className="space-y-6 max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-800 capitalize">
                        {exp.role}
                      </h4>
                      <h5 className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </h5>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;