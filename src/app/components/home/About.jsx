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

  // Animation variants following design system guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
      icon: TrendingUp,
      metric: '40%',
      title: 'Cost Reduction',
      description: 'Reduced IT costs through strategic optimization and efficient resource management across multiple enterprise projects',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      iconColor: 'text-green-500'
    },
    {
      icon: Target,
      metric: '200%',
      title: 'Sales Growth',
      description: 'Sales increase achieved with innovative Car Price Calculator implementation and conversion optimization',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      iconColor: 'text-blue-500'
    },
    {
      icon: Zap,
      metric: '97%',
      title: 'Performance Boost',
      description: 'Speed optimization on Chery Bangladesh website, dramatically improving user experience and SEO rankings',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      iconColor: 'text-yellow-500'
    },
    {
      icon: Users,
      metric: '25%',
      title: 'Team Excellence',
      description: 'Client satisfaction increase while leading a team of 15+ developers and implementing agile methodologies',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      iconColor: 'text-purple-500'
    }
  ];

  const expertise = [
    { 
      category: 'Frontend Development', 
      icon: Monitor,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+', 'Vue.js'],
      color: 'from-blue-500 to-indigo-500',
      iconBg: 'bg-blue-500'
    },
    { 
      category: 'Backend Development', 
      icon: Server,
      skills: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'RESTful APIs', 'GraphQL'],
      color: 'from-green-500 to-teal-500',
      iconBg: 'bg-green-500'
    },
    { 
      category: 'DevOps & Tools', 
      icon: Settings,
      skills: ['Docker', 'AWS', 'Git', 'Linux', 'CI/CD', 'Nginx'],
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-500'
    },
    { 
      category: 'CMS & Platforms', 
      icon: Database,
      skills: ['WordPress', 'Shopify', 'Drupal', 'Contentful', 'Strapi', 'Sanity'],
      color: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-500'
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
      color: 'from-blue-500 to-indigo-500',
      icon: Code2
    },
    {
      company: 'Continental Motors',
      role: 'IT Manager',
      period: '2018 - Present',
      duration: '6+ Years',
      description: 'Managed complete IT infrastructure and led digital transformation initiatives. Implemented modern development practices and automated deployment processes.',
      achievements: ['IT Infrastructure Management', 'Digital Transformation', 'Process Automation'],
      color: 'from-green-500 to-teal-500',
      icon: Cloud
    },
    {
      company: 'Bengal Group of Industries',
      role: 'Sr. Software Developer',
      period: '2018',
      duration: '8 Months',
      description: 'Spearheaded Laravel-based e-commerce solutions and led a team of fifteen members, achieving remarkable client satisfaction improvements.',
      achievements: ['E-commerce Development', 'Team Leadership', 'Client Satisfaction'],
      color: 'from-purple-500 to-pink-500',
      icon: Award
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'expertise', label: 'Expertise', icon: Target },
    { id: 'experience', label: 'Experience', icon: Award }
  ];

  const personalStats = [
    { label: 'Years of Experience', value: '8+', icon: Calendar, color: 'text-blue-400' },
    { label: 'Projects Completed', value: '150+', icon: Rocket, color: 'text-green-400' },
    { label: 'Technologies Mastered', value: '20+', icon: Zap, color: 'text-yellow-400' },
    { label: 'Team Members Led', value: '15+', icon: Users, color: 'text-purple-400' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Enhanced Section Header */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl mb-6 border border-white/50"
          >
            <motion.div 
              className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">About Me</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800"
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            With 8+ years of experience, I transform complex challenges into elegant solutions, 
            delivering high-performance applications that drive business growth and exceed expectations.
          </motion.p>

          {/* Personal Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-5xl mx-auto"
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 hover:bg-white hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105'
                  : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-800 border border-slate-200/50 hover:border-slate-300/50 shadow-lg'
              }`}
              whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </motion.button>
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
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Enhanced Story */}
              <motion.div 
                variants={slideInLeft}
                initial="initial"
                animate="animate"
                className="space-y-8"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                    8+ Years of Innovation
                  </h3>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                      As a seasoned Full Stack Developer with 8+ years of experience in Web Development, 
                      I specialize in crafting high-performance, scalable applications with expertise in 
                      PHP, Laravel, React.js, and modern web technologies.
                    </p>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                      I excel in Web Development, IT Project Management, and innovation, turning complex 
                      challenges into successful outcomes while delivering projects on time and within budget 
                      by efficiently managing resources and collaborating with cross-functional teams.
                    </p>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                      My proven track record includes leading teams of 15+ developers, achieving 200% sales 
                      increases, and implementing solutions that drive significant business growth.
                    </p>
                  </div>
                  
                  {/* Enhanced Specialty Tags */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {[
                      { label: 'Laravel Expert', color: 'bg-red-100 text-red-800 hover:bg-red-200' },
                      { label: 'React.js Specialist', color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
                      { label: 'WordPress Pro', color: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200' },
                      { label: 'Team Leader', color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
                      { label: 'IT Manager', color: 'bg-green-100 text-green-800 hover:bg-green-200' }
                    ].map((tag, index) => (
                      <motion.span
                        key={tag.label}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${tag.color}`}
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
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
                    Key Achievements
                  </h4>
                  <div className="grid gap-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className={`p-6 rounded-xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 group cursor-pointer ${achievement.bgColor}/30 hover:${achievement.bgColor}/50 hover:shadow-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 8 }}
                        onHoverStart={() => setHoveredAchievement(index)}
                        onHoverEnd={() => setHoveredAchievement(null)}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                            animate={{ rotate: hoveredAchievement === index ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <achievement.icon className="w-6 h-6" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`text-3xl font-bold ${achievement.textColor} group-hover:scale-110 transition-transform duration-300`}>
                                {achievement.metric}
                              </div>
                              <h5 className="text-lg font-bold text-slate-800">
                                {achievement.title}
                              </h5>
                            </div>
                            <p className="text-slate-600 leading-relaxed font-light text-sm">
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
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {expertise.map((category, index) => (
                <motion.div
                  key={category.category}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`w-14 h-14 ${category.iconBg} rounded-xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg`}>
                      <category.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">
                      {category.category}
                    </h4>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3 group p-2 rounded-lg hover:bg-slate-50/50 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-slate-600 font-light group-hover:text-slate-800 group-hover:font-medium transition-all duration-200 text-sm">
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
            <div className="space-y-6 max-w-6xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                          <exp.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
                            {exp.role}
                          </h4>
                          <h5 className="text-lg text-blue-600 font-semibold mb-3">
                            {exp.company}
                          </h5>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {exp.period}
                            </span>
                            <span className="text-slate-500 font-light text-sm">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="bg-slate-50/50 p-6 rounded-xl border border-slate-200/30">
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
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full`}></div>
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
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
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
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
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
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Create Something Extraordinary?
              </h3>
              <p className="text-blue-200 mb-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Let's collaborate to transform your vision into reality. With proven expertise and 
                a commitment to excellence, I'm ready to take your project to the next level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>

                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
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