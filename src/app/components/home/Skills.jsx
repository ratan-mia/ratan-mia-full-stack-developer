'use client';

import { motion } from 'framer-motion';
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
  Target,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Animation variants as per design guidelines
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
        staggerChildren: 0.1,
        delayChildren: 0.2 // Added delayChildren for better staggered appearance
      }
    }
  };

  const skillCategories = {
    frontend: {
      title: "Frontend Mastery",
      icon: Code,
      color: "from-blue-500 to-cyan-500", // Blue palette for frontend
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
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
      title: "Backend Excellence",
      icon: Server,
      color: "from-purple-500 to-pink-500", // Purple palette for backend
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
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
      title: "Full Stack Mastery",
      icon: Globe,
      color: "from-green-500 to-teal-500", // Green palette for fullstack
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
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
      title: "DevOps & Tools",
      icon: Settings,
      color: "from-orange-500 to-red-500", // Orange palette for devops
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
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
    { icon: Award, value: "10+", label: "Years Experience", color: "text-yellow-400" },
    { icon: Code, value: "50+", label: "Technologies", color: "text-blue-400" },
    { icon: Briefcase, value: "100+", label: "Projects", color: "text-green-400" },
    { icon: Star, value: "95%", label: "Satisfaction", color: "text-purple-400" }
  ];

  const currentCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900 relative overflow-hidden font-inter">
      {/* Enhanced Background Effects */}
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
        
        {/* Orbiting Elements - Adjusted for better visual appeal and subtle movement */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            x: [0, 200, 0, -200, 0],
            y: [0, -100, 0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            x: [0, -150, 0, 150, 0],
            y: [0, 150, 0, -150, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
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
            <span>Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight tracking-tight"
          >
            Interactive Skill Explorer
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Explore my technical expertise across different domains. Click on categories to discover specialized skills and experience levels.
          </motion.p>
        </motion.div>

        {/* Interactive Instructions */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 border border-cyan-800/30 backdrop-blur-sm text-cyan-400 px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase mb-4">
            <MousePointer className="w-4 h-4" />
            <span>Interactive Explorer</span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Click on the colored skill category buttons around the center hub to explore different areas of expertise. 
            Each category contains specialized skills with detailed experience levels.
          </p>
          
          {/* Visual Guide */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Click to Explore</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Hover for Details</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Interactive Categories</span>
            </div>
          </div>
        </motion.div>

        {/* Skill Category Selector - Circular Design */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            {/* Central Hub */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-800 to-black border-2 border-blue-500/50 rounded-full flex items-center justify-center shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <currentCategory.icon className={`w-8 h-8 md:w-12 md:h-12 ${currentCategory.textColor}`} />
            </motion.div>

            {/* Category Orbits */}
            {Object.entries(skillCategories).map(([key, category], index) => {
              const angle = (index * 90) - 45; // Spread around circle
              const radius = 140; // Distance from center
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div key={key} className="absolute" style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}>
                  {/* Category Label */}
                  <motion.div
                    className={`absolute ${
                      angle < 0 ? 'bottom-full mb-3' : 'top-full mt-3'
                    } left-1/2 transform -translate-x-1/2 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-300 whitespace-nowrap z-20 ${
                      activeCategory === key ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    } transition-opacity duration-300`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCategory === key ? 1 : 0 }}
                  >
                    {category.title}
                    <div className={`absolute ${
                      angle < 0 ? 'top-full' : 'bottom-full'
                    } left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-transparent ${
                      angle < 0 ? 'border-t-4 border-t-gray-800' : 'border-b-4 border-b-gray-800'
                    }`}></div>
                  </motion.div>

                  <motion.button
                    className={`group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-xl border-2 transition-all duration-300 ${
                      activeCategory === key 
                        ? 'border-white scale-110 shadow-2xl' 
                        : 'border-transparent hover:border-white/50 hover:scale-105'
                    }`}
                    onClick={() => setActiveCategory(key)}
                    whileHover={{ scale: activeCategory === key ? 1.1 : 1.05, y: activeCategory === key ? -3 : 0 }} // Adjusted hover for consistency
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Click Me Animation for First Load */}
                    {index === 0 && activeCategory === 'frontend' && (
                      <motion.div
                        className="absolute -inset-4 border-2 border-white/50 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: 3,
                          ease: "easeInOut"
                        }}
                      />
                    )}

                    {/* Glow Effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 rounded-full blur-md ${
                      activeCategory === key ? 'opacity-40' : ''
                    } transition-opacity duration-300`}></div>
                    
                    <category.icon className="relative z-10 w-6 h-6 md:w-8 md:h-8 text-white" />
                    
                    {/* Click Indicator */}
                    {activeCategory !== key && (
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <MousePointer className="w-3 h-3" />
                      </motion.div>
                    )}
                    
                    {/* Connecting Line */}
                    <motion.div
                      className={`absolute w-px bg-gradient-to-r ${category.color} ${
                        activeCategory === key ? 'opacity-60' : 'opacity-20'
                      } transition-opacity duration-300`}
                      style={{
                        height: `${radius - 60}px`,
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
                </div>
              );
            })}
          </div>

          {/* Category Title and Instructions */}
          <motion.div 
            className="text-center mt-8"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold ${currentCategory.textColor} mb-2`}>
              {currentCategory.title}
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4" />
                <span className="text-sm">Click category buttons above</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">Hover skills below for details</span>
              </div>
            </div>
            
            {/* Current Category Stats */}
            <div className="inline-flex items-center gap-6 bg-gray-800/50 border border-gray-700 px-6 py-3 rounded-full backdrop-blur-sm"> {/* Added backdrop-blur-sm */}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentCategory.color}`}></div>
                <span className="text-sm text-gray-300">{currentCategory.skills.length} Skills</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">
                  Avg: {Math.round(currentCategory.skills.reduce((acc, skill) => acc + skill.level, 0) / currentCategory.skills.length)}%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tutorial Hint for First Time Users */}
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm px-6 py-3 rounded-full text-blue-400 text-sm font-medium"
            initial={{ opacity: 1, y: 0 }}
            animate={{ 
              opacity: [1, 0.7, 1],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: 2,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Try clicking the colored buttons to explore different skill areas!</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section Header */}
        <motion.div 
          className="text-center mb-8"
          key={`skills-${activeCategory}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
            {currentCategory.title} Skills
          </h4>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Detailed breakdown of my expertise in {currentCategory.title.toLowerCase()}. 
            Hover over any skill card to see additional information and specialties.
          </p>
          
          {/* Skill Interaction Guide */}
          <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-gray-500 rounded-full animate-pulse"></div>
              </div>
              <span>Circular progress shows proficiency level</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center">
                <MousePointer className="w-3 h-3 text-gray-500" />
              </div>
              <span>Hover for specialty details</span>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid for Active Category */}
        <motion.div 
          key={activeCategory}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentCategory.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Skill Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${currentCategory.color} opacity-0 group-hover:opacity-20 rounded-2xl blur transition-all duration-500`}></div>
              
              <div className="relative z-10">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-bold">{skill.level}%</span>
                  </div>
                </div>

                {/* Circular Progress */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="rgb(55, 65, 81)"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - skill.level / 100) }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    {/* Gradient Definition - Adjusted to use palette colors directly */}
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={
                          currentCategory.color.includes('blue') ? '#3b82f6' : 
                          currentCategory.color.includes('purple') ? '#a855f7' :
                          currentCategory.color.includes('green') ? '#22c55e' : // green-500
                          currentCategory.color.includes('orange') ? '#f97316' : '#94a3b8' // orange-500 or slate-400 fallback
                        } />
                        <stop offset="100%" stopColor={
                          currentCategory.color.includes('blue') ? '#0ea5e9' : // blue-400
                          currentCategory.color.includes('purple') ? '#c084fc' : // purple-400
                          currentCategory.color.includes('green') ? '#16a34a' : // green-600
                          currentCategory.color.includes('orange') ? '#ea580c' : '#64748b' // orange-600 or slate-500 fallback
                        } />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-lg font-bold ${currentCategory.textColor}`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Skill Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white font-medium">{skill.years} years</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Specialty:</span>
                    <span className={`${currentCategory.textColor} font-medium`}>{skill.specialty}</span>
                  </div>
                </div>

                {/* Enhanced Hover Instructions */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-blue-500/50 px-4 py-2 rounded-lg text-xs text-blue-400 whitespace-nowrap z-30 backdrop-blur-sm" // Added backdrop-blur-sm
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3" />
                      <span>Specialty: {skill.specialty}</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-transparent border-t-4 border-t-gray-900"></div>
                  </motion.div>
                )}

                {/* Hover Indicator */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    className="absolute top-2 right-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <div className="w-6 h-6 bg-blue-500/20 border border-blue-500/50 rounded-full flex items-center justify-center">
                      <Eye className="w-3 h-3 text-blue-400" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent ${currentCategory.textColor} opacity-0 group-hover:opacity-50 transition-all duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats - Hexagonal Layout */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Career Achievements
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A decade of continuous growth and excellence in web development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="group relative flex flex-col items-center" // Added flex for centering content easily
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }} // Adjusted hover effect for consistency
              >
                {/* Hexagonal Container */}
                <div className="relative w-32 h-32 mx-auto overflow-hidden"
                  style={{
                    clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)'
                  }}
                >
                  {/* Hexagon Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300"
                    style={{
                      clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)'
                    }}
                  ></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    <achievement.icon className={`w-6 h-6 ${achievement.color} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-2xl font-bold ${achievement.color} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                      {achievement.value}
                    </div>
                  </div>
                </div>
                
                {/* Label */}
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    {achievement.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern - Enhanced with more subtle, dynamic elements */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                animate={{ x: ['-50%', '-40%', '-50%'], y: ['-50%', '-60%', '-50%'] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
                animate={{ x: ['50%', '40%', '50%'], y: ['50%', '60%', '50%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Ready to Bring Your Vision to Life?
              </h3>
              <p className="text-blue-100 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
                Let's combine these skills and create something extraordinary together.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
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
