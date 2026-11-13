'use client';

import { motion } from 'framer-motion';
import {
    Award,
    Cloud,
    Code,
    Database,
    GitBranch,
    Globe,
    Palette,
    Rocket,
    Server,
    Settings,
    Shield,
    Smartphone,
    Star,
    Target,
    TrendingUp,
    Zap
} from 'lucide-react';

const Skills = () => {
  // Optimized animation variants following automotive design guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 95, experience: "5+ years", trending: true },
        { name: "Next.js", level: 90, experience: "3+ years", trending: true },
        { name: "JavaScript ES6+", level: 95, experience: "10+ years", trending: false },
        { name: "TypeScript", level: 85, experience: "2+ years", trending: true }
      ]
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "PHP & Laravel", level: 90, experience: "6+ years", trending: false },
        { name: "Node.js", level: 80, experience: "3+ years", trending: true },
        { name: "RESTful APIs", level: 90, experience: "5+ years", trending: false },
        { name: "GraphQL", level: 75, experience: "1+ years", trending: true }
      ]
    },
    {
      category: "CMS & E-commerce",
      icon: Globe,
      skills: [
        { name: "WordPress", level: 95, experience: "10+ years", trending: false },
        { name: "Shopify", level: 85, experience: "4+ years", trending: true },
        { name: "WooCommerce", level: 90, experience: "5+ years", trending: false },
        { name: "Headless CMS", level: 80, experience: "2+ years", trending: true }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: Settings,
      skills: [
        { name: "Docker", level: 85, experience: "3+ years", trending: true },
        { name: "AWS", level: 80, experience: "2+ years", trending: true },
        { name: "Vercel", level: 90, experience: "3+ years", trending: true },
        { name: "GitHub Actions", level: 75, experience: "1+ years", trending: true }
      ]
    }
  ];

  const techStack = [
    { name: 'HTML5', icon: Code, category: 'Frontend', level: 'Expert' },
    { name: 'CSS3', icon: Palette, category: 'Frontend', level: 'Expert' },
    { name: 'Tailwind CSS', icon: Palette, category: 'Frontend', level: 'Expert' },
    { name: 'JavaScript', icon: Code, category: 'Frontend', level: 'Expert' },
    { name: 'React.js', icon: Code, category: 'Frontend', level: 'Expert' },
    { name: 'Next.js', icon: Code, category: 'Frontend', level: 'Advanced' },
    { name: 'PHP', icon: Server, category: 'Backend', level: 'Expert' },
    { name: 'Laravel', icon: Server, category: 'Backend', level: 'Expert' },
    { name: 'Node.js', icon: Server, category: 'Backend', level: 'Advanced' },
    { name: 'WordPress', icon: Globe, category: 'CMS', level: 'Expert' },
    { name: 'Shopify', icon: Smartphone, category: 'E-commerce', level: 'Advanced' },
    { name: 'MySQL', icon: Database, category: 'Database', level: 'Expert' },
    { name: 'MongoDB', icon: Database, category: 'Database', level: 'Intermediate' },
    { name: 'Firebase', icon: Database, category: 'Database', level: 'Advanced' },
    { name: 'Git', icon: GitBranch, category: 'Tools', level: 'Expert' },
    { name: 'Docker', icon: Shield, category: 'DevOps', level: 'Advanced' },
    { name: 'AWS', icon: Cloud, category: 'Cloud', level: 'Advanced' },
    { name: 'Vercel', icon: Cloud, category: 'Cloud', level: 'Expert' }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'bg-red-600 text-white';
      case 'Advanced': return 'bg-red-900/40 border border-red-800/30 text-red-400';
      case 'Intermediate': return 'bg-gray-800 border border-gray-700 text-gray-400';
      default: return 'bg-gray-800 border border-gray-700 text-gray-400';
    }
  };

  return (
    <section 
      id="skills" 
      className="relative py-16 overflow-hidden bg-gray-950"
    >
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
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Enhanced Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-800/30 backdrop-blur-sm text-red-400 px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase mb-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-4 h-4" />
            TECHNICAL EXPERTISE
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 text-white">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive expertise across modern web technologies with a focus on scalable, 
            performance-driven solutions that deliver exceptional user experiences.
          </p>
          
          {/* Status indicator */}
          <motion.div 
            className="inline-flex items-center gap-2 mt-6 bg-red-900/40 border border-red-800/30 text-red-400 px-4 py-2 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Available for New Projects
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Categories */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-24"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.category}
              variants={categoryIndex % 2 === 0 ? slideInLeft : slideInRight}
              className="group relative cursor-pointer bg-gradient-to-b from-gray-900 to-black p-10 rounded-2xl border border-gray-800 group-hover:border-red-800/50 transition-all duration-500 hover:-translate-y-1"
              whileHover={{ y: -2 }}
            >
              {/* Item Glow Effect */}
              <div className="absolute -right-5 -top-5 w-20 h-20 bg-red-600/0 group-hover:bg-red-600/10 rounded-full blur-xl transition-all duration-500"></div>

              {/* Enhanced Category Header */}
              <div className="relative z-10 flex items-center gap-6 mb-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  whileHover={{ rotate: 5 }}
                >
                  <category.icon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300">
                    {category.category}
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-red-900/40 border border-red-800/30 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                    <Target className="w-3 h-3" />
                    {category.skills.length} Core Technologies
                  </div>
                </div>
              </div>

              {/* Enhanced Skills List */}
              <div className="relative z-10 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="group/skill"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.08 + skillIndex * 0.05
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-white group-hover/skill:text-red-100 transition-colors duration-300">
                          {skill.name}
                        </span>
                        {skill.trending && (
                          <motion.div 
                            className="flex items-center gap-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-1 rounded-full text-xs font-bold"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <TrendingUp className="w-3 h-3" />
                            <span>HOT</span>
                          </motion.div>
                        )}
                        <span className="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full font-medium">
                          {skill.experience}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-red-500 fill-current" />
                        <span className="text-gray-300 font-bold">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="w-full h-4 bg-gray-800 border border-gray-700 rounded-full overflow-hidden relative group-hover/skill:shadow-md transition-shadow duration-300">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.08,
                          ease: [0.21, 0.47, 0.32, 0.98]
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Enhanced progress bar shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12"
                          animate={{ x: ['-200%', '200%'] }}
                          transition={{ 
                            duration: 2, 
                            delay: categoryIndex * 0.3 + skillIndex * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/0 group-hover:via-red-600/50 to-transparent transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Technical Stack Grid */}
        <motion.div 
          className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-12 rounded-2xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-800/30 backdrop-blur-sm text-red-400 px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Rocket className="w-4 h-4" />
              COMPLETE TOOLKIT
            </motion.div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Technology Arsenal
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Battle-tested technologies and frameworks for building scalable, modern applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative cursor-pointer bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-800 hover:border-red-800/50 hover:shadow-lg text-center font-medium text-gray-300 hover:text-white transition-all duration-300 min-h-[120px] flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Item Glow Effect */}
                <div className="absolute -inset-1 bg-red-600/0 group-hover:bg-red-600/10 rounded-xl blur transition-all duration-300"></div>
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <tech.icon className="w-10 h-10 mx-auto mb-3 text-gray-500 group-hover:text-red-500 transition-colors duration-300" />
                </motion.div>
                <div className="relative z-10 text-base font-bold mb-2">{tech.name}</div>
                <div className="relative z-10 flex flex-col gap-1">
                  <div className="text-xs text-gray-400 bg-gray-800 border border-gray-700 group-hover:bg-gray-700 px-2 py-1 rounded-full transition-colors duration-300">
                    {tech.category}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Achievement Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '10+', label: 'Years Experience', icon: Award },
            { number: '50+', label: 'Technologies Mastered', icon: Code },
            { number: '200+', label: 'Projects Delivered', icon: Shield },
            { number: '98%', label: 'Client Satisfaction', icon: Star }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative cursor-pointer text-center p-8 bg-gradient-to-b from-gray-900 to-black border border-gray-800 group-hover:border-red-800/50 rounded-xl hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              whileHover={{ 
                scale: 1.02, 
                y: -4
              }}
            >
              {/* Item Glow Effect */}
              <div className="absolute -inset-1 bg-red-600/0 group-hover:bg-red-600/10 rounded-xl blur transition-all duration-300"></div>
              
              <motion.div
                className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-800/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
              </motion.div>
              <motion.div 
                className="relative z-10 text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.08 }}
              >
                {stat.number}
              </motion.div>
              <div className="relative z-10 text-base text-gray-400 group-hover:text-gray-300 font-medium transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white p-16 rounded-2xl relative overflow-hidden border border-gray-800">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-600 to-red-700 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
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
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-700 to-red-800 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
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
              <motion.h3 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Ready to Build Something Extraordinary?
              </motion.h3>
              <motion.p 
                className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Let's transform your vision into a powerful digital solution that drives growth and exceeds expectations.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-5 h-5" />
                  Start Your Project
                </motion.button>
                
                <motion.button
                  className="border-2 border-gray-700 text-gray-300 hover:border-red-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="w-5 h-5" />
                  View Portfolio
                </motion.button>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-500" />
                  Money-back guarantee
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-red-500" />
                  Fast delivery
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500 fill-current" />
                  5-star rated
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;