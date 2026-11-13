'use client';
import { LiveCounter } from '@/utils/shared/heroSlider';
import { motion } from 'framer-motion';
import {
  Award,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Monitor,
  Server,
  Settings,
  Star,
  Target,
  Users
} from 'lucide-react';
import { useState } from 'react';

const SkillsSlide = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const coreSkills = [
    { name: 'PHP', icon: Code2, color: 'from-purple-600 to-blue-600', proficiency: 95 },
    { name: 'Laravel', icon: Server, color: 'from-red-600 to-orange-600', proficiency: 98 },
    { name: 'React.js', icon: Layers, color: 'from-cyan-600 to-blue-600', proficiency: 92 },
    { name: 'WordPress', icon: Monitor, color: 'from-blue-600 to-indigo-600', proficiency: 90 },
    { name: 'MySQL', icon: Database, color: 'from-green-600 to-teal-600', proficiency: 88 },
    { name: 'JavaScript', icon: Settings, color: 'from-yellow-600 to-orange-600', proficiency: 94 },
    { name: 'Docker', icon: Cloud, color: 'from-blue-600 to-cyan-600', proficiency: 85 },
    { name: 'Git', icon: GitBranch, color: 'from-orange-600 to-red-600', proficiency: 91 }
  ];

  const achievements = [
    { icon: Target, number: 150, label: 'Projects', color: 'from-yellow-600 to-orange-600', suffix: '+' },
    { icon: Award, number: 8, label: 'Years', color: 'from-purple-600 to-pink-600', suffix: '+' },
    { icon: Users, number: 25, label: 'Countries', color: 'from-blue-600 to-cyan-600', suffix: '+' },
    { icon: Star, number: 98, label: 'Success Rate', color: 'from-green-600 to-emerald-600', suffix: '%' }
  ];

  return (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section - Following design guidelines */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge - Labels & Small Text */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 px-6 py-3 rounded-full text-sm md:text-base font-semibold text-purple-300 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-4 h-4" />
            </motion.div>
            <span className="tracking-wider uppercase">Technical Mastery</span>
          </motion.div>

          {/* Main Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Skills That{' '}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Dominate
            </span>
          </h2>
          
          {/* Body Text - Primary */}
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Mastering cutting-edge technologies to build the impossible
          </p>
        </motion.div>

        {/* Skills Grid - Card Design Standards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(6, 182, 212, 0.3)'
              }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="relative z-10 text-center">
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                  animate={{
                    rotateY: hoveredSkill?.name === skill.name ? 360 : 0,
                    scale: hoveredSkill?.name === skill.name ? 1.2 : 1
                  }}
                  transition={{ duration: 1 }}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Card/Component Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700/50 rounded-full h-3 mb-3 overflow-hidden">
                  <motion.div 
                    className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ delay: 1 + index * 0.1, duration: 1.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
                
                {/* Proficiency Display */}
                <span className="text-lg md:text-xl font-bold text-white">{skill.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/[0.15] transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl relative`}
                animate={{ 
                  boxShadow: [
                    '0 10px 30px rgba(0,0,0,0.3)',
                    '0 15px 40px rgba(6,182,212,0.4)',
                    '0 10px 30px rgba(0,0,0,0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Achievement Number - Section Headings */}
              <motion.div 
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <LiveCounter end={achievement.number} duration={3} />
                {achievement.suffix}
              </motion.div>
              
              {/* Achievement Label - Card/Component Titles */}
              <div className="text-base md:text-lg font-semibold text-cyan-300">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          {/* Section Heading */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Additional Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Node.js', 'Vue.js', 'Python', 'PostgreSQL', 'Redis', 'AWS', 
              'Tailwind CSS', 'TypeScript', 'GraphQL', 'REST APIs'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="inline-block bg-white/[0.08] backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-sm md:text-base font-medium text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSlide;