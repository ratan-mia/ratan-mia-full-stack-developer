'use client';

import { motion } from 'framer-motion';
import {
    Award,
    Briefcase,
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
    Target,
    TrendingUp
} from 'lucide-react';

const Skills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
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
        bg: 'bg-blue-900/20',
        border: 'border-blue-800/30',
        text: 'text-blue-400',
        progress: 'from-blue-600 to-blue-500',
        icon: 'text-blue-400'
      },
      purple: {
        bg: 'bg-purple-900/20',
        border: 'border-purple-800/30',
        text: 'text-purple-400',
        progress: 'from-purple-600 to-purple-500',
        icon: 'text-purple-400'
      },
      green: {
        bg: 'bg-green-900/20',
        border: 'border-green-800/30',
        text: 'text-green-400',
        progress: 'from-green-600 to-green-500',
        icon: 'text-green-400'
      },
      orange: {
        bg: 'bg-orange-900/20',
        border: 'border-orange-800/30',
        text: 'text-orange-400',
        progress: 'from-orange-600 to-orange-500',
        icon: 'text-orange-400'
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900 relative overflow-hidden">
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
        <motion.div 
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-800/30 backdrop-blur-sm text-blue-400 px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase mb-8"
          >
            <Target className="w-4 h-4" />
            <span>Core Competencies</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight tracking-tight"
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A comprehensive overview of my technical expertise across frontend, backend, 
            and full-stack development with years of hands-on experience.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div 
                key={category.category}
                variants={categoryIndex % 2 === 0 ? slideInLeft : slideInRight}
                className="group relative bg-gradient-to-b from-gray-900 to-black p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-800/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                {/* Item Glow Effect */}
                <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
                
                {/* Category Header */}
                <div className="relative z-10 flex items-center gap-4 mb-6 md:mb-8">
                  <div className={`w-14 h-14 md:w-16 md:h-16 ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 md:w-8 md:h-8 ${colorClasses.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                      {category.category}
                    </h3>
                    <div className={`inline-block ${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border} px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium rounded-full mt-2`}>
                      {category.skills.length} Technologies
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="relative z-10 space-y-4 md:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                        <div className="flex items-center gap-3">
                          <span className="text-base md:text-lg lg:text-xl font-bold text-white group-hover/skill:text-blue-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-2 md:px-3 py-1 rounded-full">
                            {skill.experience}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                          <span className="text-sm md:text-base text-gray-300 font-bold">{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="w-full h-2 md:h-3 bg-gray-800 border border-gray-700 rounded-full overflow-hidden relative">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${colorClasses.progress} relative overflow-hidden rounded-full`}
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

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technical Stack Grid */}
        <motion.div 
          className="relative bg-gradient-to-b from-gray-900 to-black p-6 md:p-8 lg:p-12 rounded-2xl border border-gray-800 shadow-xl mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Item Glow Effect */}
          <div className="absolute -inset-1 bg-blue-600/0 hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 border border-cyan-800/30 backdrop-blur-sm text-cyan-400 px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase mb-6">
                <Briefcase className="w-4 h-4" />
                <span>Technical Arsenal</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Complete Technology Stack
              </h3>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                Comprehensive toolkit spanning modern frameworks, databases, and development tools.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-blue-800/50 p-3 md:p-4 rounded-xl text-center transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.02,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Item Glow Effect */}
                  <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-xl blur transition-all duration-500"></div>
                  
                  <tech.icon className="relative z-10 w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                  <div className="relative z-10 text-xs md:text-sm font-bold mb-1 md:mb-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="relative z-10 text-xs text-gray-500 bg-gray-900 border border-gray-600 group-hover:bg-blue-900/50 group-hover:border-blue-800/50 group-hover:text-blue-400 px-2 py-1 rounded-full transition-all duration-300">
                    {tech.category}
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { number: '10+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' },
            { number: '50+', label: 'Technologies Mastered', icon: Code, color: 'text-blue-400' },
            { number: '100+', label: 'Projects Completed', icon: Shield, color: 'text-green-400' },
            { number: '95%', label: 'Client Satisfaction', icon: TrendingUp, color: 'text-purple-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative text-center p-4 md:p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-800/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3
              }}
            >
              {/* Item Glow Effect */}
              <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
              
              <stat.icon className={`relative z-10 w-6 h-6 md:w-8 md:h-8 ${stat.color} mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300`} />
              <div className={`relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="relative z-10 text-xs md:text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 lg:p-16 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-blue-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-blue-100 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's leverage these skills to create exceptional digital solutions for your business.
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;