'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    CheckCircle,
    Cloud,
    Code2,
    Database,
    GitBranch,
    Globe,
    Layers,
    Monitor,
    Palette,
    Server,
    Settings,
    Shield,
    Smartphone,
    Star,
    Target,
    TrendingUp,
    Zap
} from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

  const skillCategories = [
    {
      id: 'frontend',
      category: "Frontend Development",
      icon: Monitor,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      description: "Modern UI/UX development with cutting-edge frameworks",
      skills: [
        { name: "React.js", level: 95, experience: "5+ years", icon: Layers },
        { name: "Next.js", level: 90, experience: "3+ years", icon: Code2 },
        { name: "JavaScript ES6+", level: 95, experience: "10+ years", icon: Code2 },
        { name: "TypeScript", level: 85, experience: "2+ years", icon: Code2 },
        { name: "Tailwind CSS", level: 90, experience: "4+ years", icon: Palette },
        { name: "HTML5 & CSS3", level: 95, experience: "10+ years", icon: Palette }
      ]
    },
    {
      id: 'backend',
      category: "Backend Development",
      icon: Server,
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      description: "Robust server-side solutions and API development",
      skills: [
        { name: "PHP & Laravel", level: 95, experience: "10+ years", icon: Server },
        { name: "Node.js", level: 80, experience: "3+ years", icon: Server },
        { name: "RESTful APIs", level: 90, experience: "5+ years", icon: Settings },
        { name: "MySQL", level: 90, experience: "7+ years", icon: Database },
        { name: "MongoDB", level: 75, experience: "2+ years", icon: Database },
        { name: "Firebase", level: 80, experience: "3+ years", icon: Database }
      ]
    },
    {
      id: 'cms',
      category: "CMS & E-commerce",
      icon: Globe,
      color: "green",
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      description: "Content management and e-commerce platforms",
      skills: [
        { name: "WordPress", level: 95, experience: "10+ years", icon: Globe },
        { name: "Shopify", level: 85, experience: "4+ years", icon: Smartphone },
        { name: "WooCommerce", level: 90, experience: "5+ years", icon: Smartphone },
        { name: "Custom Themes", level: 92, experience: "6+ years", icon: Palette },
        { name: "Plugin Development", level: 88, experience: "5+ years", icon: Settings }
      ]
    },
    {
      id: 'devops',
      category: "DevOps & Tools",
      icon: Settings,
      color: "orange",
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      description: "Development operations and deployment tools",
      skills: [
        { name: "Docker", level: 85, experience: "3+ years", icon: Shield },
        { name: "Git & GitHub", level: 90, experience: "10+ years", icon: GitBranch },
        { name: "AWS", level: 80, experience: "2+ years", icon: Cloud },
        { name: "Digital Ocean", level: 85, experience: "4+ years", icon: Cloud },
        { name: "CI/CD", level: 75, experience: "2+ years", icon: Settings }
      ]
    }
  ];

  const categories = [
    { id: 'All', name: 'All Skills', icon: Target },
    { id: 'frontend', name: 'Frontend', icon: Monitor },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'cms', name: 'CMS', icon: Globe },
    { id: 'devops', name: 'DevOps', icon: Settings }
  ];

  const achievements = [
    { 
      number: '10+', 
      label: 'Years Experience', 
      icon: Award, 
      color: 'text-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    { 
      number: '30+', 
      label: 'Technologies', 
      icon: Code2, 
      color: 'text-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    { 
      number: '150+', 
      label: 'Projects', 
      icon: Target, 
      color: 'text-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    },
    { 
      number: '98%', 
      label: 'Success Rate', 
      icon: TrendingUp, 
      color: 'text-orange-500',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const filteredCategories = activeCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
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
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl mb-6 border border-white/50"
          >
            <motion.div 
              className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">
              Core Competencies
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800"
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            A comprehensive overview of my technical expertise across frontend, backend, 
            and full-stack development with years of hands-on experience.
          </motion.p>

          {/* Achievement Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-5xl mx-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 hover:bg-white hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.gradient} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${achievement.color} mb-1`}>
                  {achievement.number}
                </div>
                <div className="text-slate-600 text-sm font-semibold">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105'
                  : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-800 border border-slate-200/50 hover:border-slate-300/50 shadow-lg'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: activeCategory === category.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div 
          key={activeCategory}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              variants={categoryIndex % 2 === 0 ? slideInLeft : slideInRight}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                    {category.category}
                  </h3>
                  <p className="text-slate-600 font-light text-sm mb-3">
                    {category.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 ${category.bgColor} ${category.textColor} px-3 py-1 rounded-full text-xs font-bold`}>
                    <CheckCircle className="w-3 h-3" />
                    {category.skills.length} Technologies
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="group p-4 rounded-xl border border-slate-200/50 hover:border-slate-300/50 hover:bg-slate-50/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    onHoverStart={() => setHoveredSkill(`${category.id}-${skillIndex}`)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className={`w-5 h-5 ${category.textColor} group-hover:scale-110 transition-transform duration-200`} />
                        <div>
                          <span className="text-base font-bold text-slate-800">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full font-medium">
                              {skill.experience}
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-current" />
                              <span className="text-xs font-bold text-slate-600">{skill.level}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Skill Progress Bar */}
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: hoveredSkill === `${category.id}-${skillIndex}` ? `${skill.level}%` : '0%'
                        }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.15,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Progress shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ 
                            duration: 2, 
                            delay: categoryIndex * 0.5 + skillIndex * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
                Ready to Build Something Amazing?
              </h3>
              <p className="text-blue-200 mb-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Let's leverage these skills to create exceptional digital solutions that drive your business forward. 
                With proven expertise and cutting-edge technologies, I'm ready to turn your vision into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-bold rounded-full hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                
                <motion.button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Portfolio</span>
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;