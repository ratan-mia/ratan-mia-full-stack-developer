'use client';

import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Palette, Server, Smartphone, Star, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'accent',
      skills: [
        { name: 'React.js', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 92, icon: '▲' },
        { name: 'TypeScript', level: 88, icon: 'TS' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' }
      ]
    },
    {
      title: 'Backend', 
      icon: Server,
      color: 'accent-secondary',
      skills: [
        { name: 'Laravel', level: 94, icon: '🔥' },
        { name: 'PHP', level: 91, icon: '🐘' },
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'MySQL', level: 89, icon: '🗄️' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Globe,
      color: 'accent',
      skills: [
        { name: 'WordPress', level: 93, icon: 'W' },
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'AWS', level: 78, icon: '☁️' }
      ]
    }
  ];

  const achievements = [
    { icon: Star, number: '8+', label: 'Years Experience', color: 'text-accent' },
    { icon: TrendingUp, number: '150+', label: 'Projects Completed', color: 'text-accent-secondary' },
    { icon: Palette, number: '25+', label: 'Countries Served', color: 'text-accent' },
    { icon: Database, number: '98%', label: 'Client Satisfaction', color: 'text-accent-secondary' }
  ];

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden" id="skills">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-accent rounded-sm"
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut"
              }}
              style={{ height: `${Math.random() * 4 + 1}px` }}
            />
          ))}
        </div>
      </div>

      <div className="container-design relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="section-header text-primary-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 ${achievement.color} rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <achievement.icon className="w-8 h-8" />
              </motion.div>
              <motion.div
                className={`text-3xl font-bold ${achievement.color} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {achievement.number}
              </motion.div>
              <div className="caption-text text-neutral">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card-design group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.8 + categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`w-12 h-12 bg-${category.color} rounded-design-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 15 }}
                >
                  <category.icon className="w-6 h-6 text-black" />
                </motion.div>
                <h3 className="text-xl font-bold text-primary-text">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.0 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-primary-text font-medium">{skill.name}</span>
                      </div>
                      <span className={`text-${category.color} font-bold text-sm`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="relative h-2 bg-card-dark rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1.5,
                          ease: "easeOut"
                        }}
                      />
                      
                      {/* Skill Bar Glow Effect */}
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-${category.color} rounded-full opacity-50 blur-sm`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Visual */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-text mb-4">Tech Stack Ecosystem</h3>
            <div className="accent-line"></div>
          </div>

          {/* Circular Tech Layout */}
          <div className="relative w-80 h-80 mx-auto">
            {/* Center Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent rounded-full flex items-center justify-center z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-8 h-8 text-black" />
            </motion.div>

            {/* Orbiting Technologies */}
            {[
              { name: 'React', icon: '⚛️', angle: 0 },
              { name: 'Laravel', icon: '🔥', angle: 60 },
              { name: 'Next.js', icon: '▲', angle: 120 },
              { name: 'PHP', icon: '🐘', angle: 180 },
              { name: 'MySQL', icon: '🗄️', angle: 240 },
              { name: 'Node.js', icon: '🟢', angle: 300 }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="absolute w-12 h-12 bg-card border-2 border-accent/30 rounded-design-lg flex items-center justify-center"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${tech.angle}deg) translateX(120px) rotate(-${tech.angle}deg)`
                }}
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                }}
                whileHover={{ scale: 1.3, zIndex: 20 }}
              >
                <span className="text-lg">{tech.icon}</span>
              </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <circle 
                cx="50%" 
                cy="50%" 
                r="120" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="text-accent"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
