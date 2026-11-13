'use client';

import { motion } from 'framer-motion';
import {
    Cloud,
    Code,
    Database,
    GitBranch,
    Globe,
    Palette,
    Server,
    Settings,
    Shield,
    Smartphone,
    Star,
    Zap
} from 'lucide-react';

const Skills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
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

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      color: "blue",
      skills: [
        { name: "React.js", level: 95, experience: "5+ years" },
        { name: "Next.js", level: 90, experience: "3+ years" },
        { name: "JavaScript ES6+", level: 95, experience: "10+ years" },
        { name: "TypeScript", level: 85, experience: "2+ years" }
      ]
    },
    {
      category: "Backend Development",
      icon: Server,
      color: "purple",
      skills: [
        { name: "PHP & Laravel", level: 90, experience: "6+ years" },
        { name: "Node.js", level: 80, experience: "3+ years" },
        { name: "RESTful APIs", level: 90, experience: "5+ years" },
        { name: "MySQL", level: 85, experience: "7+ years" }
      ]
    },
    {
      category: "CMS & E-commerce",
      icon: Globe,
      color: "green",
      skills: [
        { name: "WordPress", level: 95, experience: "10+ years" },
        { name: "Shopify", level: 85, experience: "4+ years" },
        { name: "WooCommerce", level: 90, experience: "5+ years" },
        { name: "Custom Themes", level: 92, experience: "6+ years" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: Settings,
      color: "orange",
      skills: [
        { name: "Docker", level: 85, experience: "3+ years" },
        { name: "Git & GitHub", level: 90, experience: "10+ years" },
        { name: "AWS", level: 80, experience: "2+ years" },
        { name: "Digital Ocean", level: 85, experience: "4+ years" }
      ]
    }
  ];

  const techStack = [
    { name: 'HTML5', icon: Code, category: 'Frontend' },
    { name: 'CSS3', icon: Palette, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: Palette, category: 'Frontend' },
    { name: 'JavaScript', icon: Code, category: 'Frontend' },
    { name: 'React.js', icon: Code, category: 'Frontend' },
    { name: 'Next.js', icon: Code, category: 'Frontend' },
    { name: 'PHP', icon: Server, category: 'Backend' },
    { name: 'Laravel', icon: Server, category: 'Backend' },
    { name: 'Node.js', icon: Server, category: 'Backend' },
    { name: 'WordPress', icon: Globe, category: 'CMS' },
    { name: 'Shopify', icon: Smartphone, category: 'E-commerce' },
    { name: 'MySQL', icon: Database, category: 'Database' },
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'Firebase', icon: Database, category: 'Database' },
    { name: 'Git', icon: GitBranch, category: 'Tools' },
    { name: 'Docker', icon: Shield, category: 'DevOps' },
    { name: 'AWS', icon: Cloud, category: 'Cloud' },
    { name: 'Digital Ocean', icon: Cloud, category: 'Cloud' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-400/30',
        text: 'text-blue-600',
        progress: 'from-blue-600 to-blue-500',
        icon: 'text-blue-500'
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-400/30',
        text: 'text-purple-600',
        progress: 'from-purple-600 to-purple-500',
        icon: 'text-purple-500'
      },
      green: {
        bg: 'bg-green-500/10',
        border: 'border-green-400/30',
        text: 'text-green-600',
        progress: 'from-green-600 to-green-500',
        icon: 'text-green-500'
      },
      orange: {
        bg: 'bg-orange-500/10',
        border: 'border-orange-400/30',
        text: 'text-orange-600',
        progress: 'from-orange-600 to-orange-500',
        icon: 'text-orange-500'
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block bg-indigo-100 text-indigo-800 px-6 py-3 font-medium text-sm tracking-wider uppercase mb-6">
            CORE COMPETENCIES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive overview of my technical expertise across frontend, backend, 
            and full-stack development with years of hands-on experience.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div 
                key={category.category}
                variants={categoryIndex % 2 === 0 ? slideInLeft : slideInRight}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 md:w-7 md:h-7 ${colorClasses.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 capitalize">
                      {category.category}
                    </h3>
                    <div className={`inline-block ${colorClasses.bg} ${colorClasses.text} px-3 py-1 text-xs font-medium mt-2`}>
                      {category.skills.length} Technologies
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-base md:text-lg font-bold text-slate-800">
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1">
                            {skill.experience}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-slate-600 font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="w-full h-3 bg-slate-200 overflow-hidden relative">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${colorClasses.progress} relative overflow-hidden`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.15,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        >
                          {/* Progress bar shine effect */}
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
            );
          })}
        </motion.div>

        {/* Technical Stack Grid */}
        <motion.div 
          className="bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <div className="inline-block bg-cyan-100 text-cyan-800 px-6 py-3 font-medium text-sm tracking-wider uppercase mb-4">
              TECHNICAL ARSENAL
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Complete Technology Stack
            </h3>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive toolkit spanning modern frameworks, databases, and development tools.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group bg-slate-50 hover:bg-white p-3 md:p-4 border border-slate-200 hover:border-blue-300 hover:shadow-lg text-center font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.03,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 8px 16px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <tech.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-slate-500 group-hover:text-blue-500 transition-colors duration-200" />
                <div className="text-xs md:text-sm font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-slate-500 bg-slate-100 group-hover:bg-blue-50 px-2 py-1 transition-colors duration-200">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { number: '10+', label: 'Years Experience', icon: Star, color: 'text-yellow-500' },
            { number: '50+', label: 'Technologies Mastered', icon: Code, color: 'text-blue-500' },
            { number: '100+', label: 'Projects Completed', icon: Shield, color: 'text-green-500' },
            { number: '95%', label: 'Client Satisfaction', icon: Zap, color: 'text-purple-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3
              }}
            >
              <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`} />
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1 group-hover:scale-105 transition-transform duration-200`}>
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-slate-600 font-light leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-blue-100 text-base md:text-lg mb-6 font-light max-w-2xl mx-auto">
              Let's leverage these skills to create exceptional digital solutions for your business.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 font-bold text-sm md:text-base hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;