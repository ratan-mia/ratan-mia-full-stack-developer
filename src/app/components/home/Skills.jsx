'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Code,
  Eye,
  Globe,
  MousePointer,
  Server,
  Settings,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-400",
      skills: [
        { name: "React.js", level: 95, years: 5, specialty: "Component Architecture" },
        { name: "Next.js", level: 90, years: 3, specialty: "SSR & Performance" },
        { name: "JavaScript ES6+", level: 95, years: 8, specialty: "Modern Syntax" },
        { name: "TypeScript", level: 85, years: 2, specialty: "Type Safety" },
        { name: "Tailwind CSS", level: 90, years: 3, specialty: "Utility First" },
        { name: "Framer Motion", level: 85, years: 2, specialty: "Animations" }
      ]
    },
    backend: {
      title: "Backend",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
      skills: [
        { name: "PHP & Laravel", level: 90, years: 6, specialty: "MVC Architecture" },
        { name: "Node.js", level: 80, years: 3, specialty: "Runtime Environment" },
        { name: "RESTful APIs", level: 90, years: 5, specialty: "API Design" },
        { name: "MySQL", level: 85, years: 7, specialty: "Database Design" },
        { name: "GraphQL", level: 75, years: 2, specialty: "Query Language" },
        { name: "Redis", level: 80, years: 3, specialty: "Caching" }
      ]
    },
    fullstack: {
      title: "Full Stack",
      icon: Globe,
      color: "from-green-500 to-teal-500",
      textColor: "text-green-400",
      skills: [
        { name: "WordPress", level: 95, years: 8, specialty: "Custom Development" },
        { name: "Shopify", level: 85, years: 4, specialty: "E-commerce" },
        { name: "WooCommerce", level: 90, years: 5, specialty: "Online Stores" },
        { name: "MERN Stack", level: 85, years: 3, specialty: "Full Stack" },
        { name: "JAMstack", level: 80, years: 2, specialty: "Modern Architecture" },
        { name: "Headless CMS", level: 85, years: 3, specialty: "Content Management" }
      ]
    },
    devops: {
      title: "DevOps",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-400",
      skills: [
        { name: "Docker", level: 85, years: 3, specialty: "Containerization" },
        { name: "Git & GitHub", level: 90, years: 8, specialty: "Version Control" },
        { name: "AWS", level: 80, years: 2, specialty: "Cloud Services" },
        { name: "Digital Ocean", level: 85, years: 4, specialty: "VPS Management" },
        { name: "CI/CD", level: 75, years: 2, specialty: "Automation" },
        { name: "Linux", level: 80, years: 5, specialty: "System Administration" }
      ]
    }
  };

  const achievements = [
    { icon: Award, value: "10+", label: "Years", color: "text-yellow-400" },
    { icon: Code, value: "50+", label: "Technologies", color: "text-blue-400" },
    { icon: Briefcase, value: "100+", label: "Projects", color: "text-green-400" },
    { icon: Star, value: "95%", label: "Success Rate", color: "text-purple-400" }
  ];

  const currentCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900 relative overflow-hidden">
      {/* Optimized Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/3 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-500/8 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/3 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-500/8 rounded-full blur-3xl"
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
        {/* Compact Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-blue-400/30 text-blue-400 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 md:mb-6"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Interactive Skills
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-2"
          >
            Explore my technical expertise across different domains. Click categories to discover specialized skills.
          </motion.p>

          {/* Compact Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8 max-w-2xl mx-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center p-2.5 md:p-3 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl border border-white/20 shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                whileHover={{ scale: 1.05 }}
              >
                <achievement.icon className={`w-4 h-4 md:w-5 md:h-5 ${achievement.color} mx-auto mb-1`} />
                <div className={`text-lg md:text-xl font-black ${achievement.color} mb-0.5`}>{achievement.value}</div>
                <div className="text-gray-400 text-xs md:text-sm font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Compact Interactive Guide */}
        <motion.div 
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-cyan-400/30 text-cyan-400 px-3 py-1.5 rounded-lg font-medium text-xs md:text-sm">
            <MousePointer className="w-3 h-3 md:w-4 md:h-4" />
            <span>Click categories to explore</span>
          </div>
        </motion.div>

        {/* Horizontal Skill Category Selector */}
        <motion.div 
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Horizontal Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                className={`group relative inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 font-bold text-sm md:text-base transition-all duration-300 rounded-xl md:rounded-2xl ${
                  activeCategory === key 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105` 
                    : 'bg-white/10 backdrop-blur-md text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white hover:scale-102'
                }`}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: activeCategory === key ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Object.keys(skillCategories).indexOf(key) * 0.1, duration: 0.4 }}
              >
                {/* Glow Effect */}
                {activeCategory === key && (
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-30 rounded-xl md:rounded-2xl blur-sm`}></div>
                )}
                
                {/* Icon */}
                <div className={`relative z-10 w-5 h-5 md:w-6 md:h-6 ${
                  activeCategory === key ? 'text-white' : category.textColor
                } transition-colors duration-300`}>
                  <category.icon className="w-full h-full" />
                </div>
                
                {/* Title */}
                <span className="relative z-10 font-bold">
                  {category.title}
                </span>

                {/* Skill Count */}
                <span className={`relative z-10 px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeCategory === key 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}>
                  {category.skills.length}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Current Category Info */}
          <motion.div 
            className="text-center"
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-4 py-2 rounded-xl text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentCategory.color}`}></div>
                <span className="text-gray-300">{currentCategory.skills.length} Skills</span>
              </div>
              <div className="w-px h-3 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-gray-300">
                  Avg: {Math.round(currentCategory.skills.reduce((acc, skill) => acc + skill.level, 0) / currentCategory.skills.length)}%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Compact Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/20 hover:border-blue-500/50 shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="relative z-10">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white font-bold text-xs md:text-sm">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Compact Progress Bar */}
                  <div className="relative mb-3 md:mb-4">
                    <div className="w-full h-1.5 md:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${currentCategory.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.08 }}
                      />
                    </div>
                    <div className="absolute -top-1 bg-white text-gray-900 px-1 py-0.5 rounded text-xs font-bold"
                      style={{ left: `${skill.level}%`, transform: 'translateX(-50%)' }}
                    >
                      {skill.level}%
                    </div>
                  </div>

                  {/* Compact Details */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                    <div>
                      <span className="text-gray-400 block">Experience:</span>
                      <span className="text-white font-medium">{skill.years} years</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Specialty:</span>
                      <span className={`${currentCategory.textColor} font-medium text-xs`}>{skill.specialty}</span>
                    </div>
                  </div>

                  {/* Hover Tooltip */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-blue-500/50 px-2.5 py-1 rounded-lg text-xs text-blue-400 whitespace-nowrap z-30"
                      initial={{ opacity: 0, scale: 0.8, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 5 }}
                    >
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>{skill.specialty}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Compact CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4">
                Ready to Bring Your Vision to Life?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
                Let's combine these skills to create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Zap className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Start Project</span>
                </motion.a>

                <motion.a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Eye className="w-4 h-4 md:w-5 md:h-5" />
                  <span>View Work</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;