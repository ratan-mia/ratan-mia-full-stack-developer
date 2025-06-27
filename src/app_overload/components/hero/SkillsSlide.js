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
    { icon: Target, number: 150, label: 'Projects', suffix: '+' },
    { icon: Award, number: 8, label: 'Experience', suffix: 'y' },
    { icon: Users, number: 25, label: 'Countries', suffix: '+' },
    { icon: Star, number: 98, label: 'Success', suffix: '%' }
  ];

  const additionalSkills = [
    'Node.js', 'Vue.js', 'Python', 'PostgreSQL', 'Redis', 'AWS', 
    'Tailwind', 'TypeScript', 'GraphQL', 'REST APIs'
  ];

  return (
    <section className="h-screen flex items-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Compact Header */}
          <div className="text-center space-y-2">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 px-3 py-1.5 rounded-full text-sm font-semibold text-purple-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-3 h-3" />
              </motion.div>
              <span className="tracking-wider uppercase">Technical Mastery</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Skills That{' '}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Dominate
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
              Mastering cutting-edge technologies to build the impossible
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Core Skills - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Core Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-lg p-3 hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <div className="text-center">
                      <motion.div 
                        className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}
                        animate={{
                          rotateY: hoveredSkill?.name === skill.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      
                      <h4 className="text-sm font-bold text-white mb-1">{skill.name}</h4>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700/50 rounded-full h-1.5 mb-1">
                        <motion.div 
                          className={`h-1.5 bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        />
                      </div>
                      
                      <span className="text-xs font-bold text-white">{skill.proficiency}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements - Takes 1 column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className="flex items-center gap-3 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-lg p-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-lg font-bold text-white">
                        <LiveCounter end={achievement.number} duration={2} />
                        {achievement.suffix}
                      </div>
                      <div className="text-sm text-cyan-300">{achievement.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills - Compact Tags */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Additional Expertise</h3>
            
            <div className="flex flex-wrap justify-center gap-2">
              {additionalSkills.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="inline-block bg-white/[0.08] backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-full text-sm text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSlide;