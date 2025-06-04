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
import { useEffect, useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: 1024, height: 768 }); // Default size for SSR
  const [isMounted, setIsMounted] = useState(false);

  // Handle window resize and mount
  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Don't render positioning until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Loading state */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-blue-400/30 text-blue-400 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
              <span>Loading Skills...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/3 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/3 w-48 h-48 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl"
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
          className="text-center mb-10"
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
            <span>Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Interactive Skills
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Explore my technical expertise across different domains. Click categories to discover specialized skills.
          </motion.p>

          {/* Compact Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <achievement.icon className={`w-5 h-5 ${achievement.color} mx-auto mb-1`} />
                <div className={`text-xl font-black ${achievement.color} mb-1`}>{achievement.value}</div>
                <div className="text-gray-400 text-sm font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Compact Interactive Guide */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-xl font-medium text-sm mb-4">
            <MousePointer className="w-4 h-4" />
            <span>Click buttons to explore categories</span>
          </div>
        </motion.div>

        {/* Fixed Skill Category Selector */}
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            {/* Central Hub */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md border-2 border-blue-500/50 rounded-full flex items-center justify-center shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <currentCategory.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${currentCategory.textColor}`} />
            </motion.div>

            {/* Category Buttons */}
            {Object.entries(skillCategories).map(([key, category], index) => {
              const angle = (index * 90) - 45;
              // Fixed: Use windowSize state instead of direct window access
              const radius = windowSize.width < 640 ? 100 : 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div key={key} className="absolute" style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}>
                  <motion.button
                    className={`group relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-xl border-2 transition-all duration-300 ${
                      activeCategory === key 
                        ? 'border-white scale-110 shadow-2xl' 
                        : 'border-transparent hover:border-white/50 hover:scale-105'
                    }`}
                    onClick={() => setActiveCategory(key)}
                    whileHover={{ scale: activeCategory === key ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className={`absolute -inset-2 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 rounded-full blur-md ${
                      activeCategory === key ? 'opacity-40' : ''
                    } transition-opacity duration-300`}></div>
                    
                    <category.icon className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    
                    {/* Connecting Line */}
                    <motion.div
                      className={`absolute w-px bg-gradient-to-r ${category.color} ${
                        activeCategory === key ? 'opacity-60' : 'opacity-20'
                      } transition-opacity duration-300`}
                      style={{
                        height: `${radius - 40}px`,
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                        transformOrigin: 'bottom'
                      }}
                      animate={{
                        scaleY: activeCategory === key ? [0, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>

                  {/* Compact Category Label */}
                  <motion.div
                    className={`absolute ${
                      angle < 0 ? 'bottom-full mb-2' : 'top-full mt-2'
                    } left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm border border-gray-700 px-2 py-1 rounded-lg text-xs font-medium text-gray-300 whitespace-nowrap z-20 ${
                      activeCategory === key ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    } transition-opacity duration-300`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCategory === key ? 1 : 0 }}
                  >
                    {category.title}
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Current Category Info */}
          <motion.div 
            className="text-center mt-6"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={`text-xl sm:text-2xl font-black ${currentCategory.textColor} mb-2`}>
              {currentCategory.title}
            </h3>
            
            <div className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-4 py-2 rounded-xl text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentCategory.color}`}></div>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 hover:border-blue-500/50 shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="relative z-10">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white font-bold text-sm">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Compact Progress Bar */}
                  <div className="relative mb-4">
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${currentCategory.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <div className="absolute -top-1 bg-white text-gray-900 px-1 py-0.5 rounded text-xs font-bold"
                      style={{ left: `${skill.level}%`, transform: 'translateX(-50%)' }}
                    >
                      {skill.level}%
                    </div>
                  </div>

                  {/* Compact Details */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
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
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-blue-500/50 px-3 py-1 rounded-lg text-xs text-blue-400 whitespace-nowrap z-30"
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    >
                      <div className="flex items-center gap-2">
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

        {/* Compact Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                Ready to Bring Your Vision to Life?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Let's combine these skills to create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Project</span>
                </motion.a>

                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  <span>View Work</span>
                </motion.a>
              </div>

              {/* Compact Bottom Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/20">
                {[
                  { number: '24/7', label: 'Support' },
                  { number: '100%', label: 'Success' },
                  { number: '10+', label: 'Experience' }
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

export default Skills;