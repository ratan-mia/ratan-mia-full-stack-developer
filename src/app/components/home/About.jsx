'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Calendar,
  Code2,
  Coffee,
  Download,
  Globe,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

// Simplified Constants
const CORE_STATS = [
  { icon: Award, number: '150+', label: 'Projects Delivered' },
  { icon: Calendar, number: '8+', label: 'Years Experience' },
  { icon: Globe, number: '25+', label: 'Countries Served' },
  { icon: Star, number: '98%', label: 'Client Satisfaction' }
];

const KEY_SKILLS = [
  { name: 'React.js', level: 95 },
  { name: 'Next.js', level: 92 },
  { name: 'Laravel', level: 90 },
  { name: 'PHP', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'WordPress', level: 95 }
];

const ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    metric: '200%',
    title: 'Average Sales Growth',
    description: 'Client revenue increase through optimized e-commerce solutions'
  },
  {
    icon: Zap,
    metric: '97%',
    title: 'Performance Score',
    description: 'Average PageSpeed Insights score across all projects'
  },
  {
    icon: Users,
    metric: '98%',
    title: 'Client Satisfaction',
    description: 'Happy clients with ongoing partnerships'
  }
];

const WORK_EXPERIENCE = [
  {
    company: 'Kawasaki Bangladesh',
    role: 'Senior Full Stack Developer',
    period: '2020 - Present',
    description: 'Leading enterprise development initiatives for automotive industry leader',
    technologies: ['React.js', 'Laravel', 'MySQL', 'Docker', 'AWS']
  },
  {
    company: 'Continental Motors',
    role: 'IT Manager & Lead Developer',
    period: '2018 - 2020',
    description: 'Managed IT infrastructure and led digital transformation initiatives',
    technologies: ['PHP', 'WordPress', 'MySQL', 'Linux']
  },
  {
    company: 'Chery Bangladesh',
    role: 'Lead Web Developer',
    period: '2016 - 2018',
    description: 'Spearheaded website development and e-commerce optimization',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP']
  }
];

// Skill Bar Component
const SkillBar = ({ skill, index, inView }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm font-bold text-white">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// Achievement Card Component
const AchievementCard = ({ achievement, index, inView }) => {
  return (
    <motion.div
      className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
        <achievement.icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-3xl font-bold text-white mb-2">{achievement.metric}</div>
      <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
      <p className="text-sm text-gray-400">{achievement.description}</p>
    </motion.div>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience, index, inView }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.01, y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-white mb-1">{experience.role}</h4>
          <h5 className="text-blue-400 font-semibold mb-2">{experience.company}</h5>
          <span className="text-sm text-gray-400">{experience.period}</span>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-400/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Main About Component
const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);
  const experienceRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const skillsInView = useInView(skillsRef, { once: true, threshold: 0.1 });
  const achievementsInView = useInView(achievementsRef, { once: true, threshold: 0.1 });
  const experienceInView = useInView(experienceRef, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
      aria-label="About Ratan Mia section"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-blue-400/30 text-blue-400 px-4 py-2 rounded-xl font-semibold text-sm uppercase tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>About Me</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Transforming ideas into powerful web solutions with 8+ years of experience in 
            full-stack development, specializing in React.js, Next.js, and Laravel.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {CORE_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column - Story & Skills */}
          <div className="space-y-12">
            
            {/* My Story */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-blue-400" />
                My Story
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As a <strong className="text-white">Senior Full Stack Developer</strong> with 8+ years of experience, 
                  I specialize in creating high-performance web applications that drive business growth.
                </p>
                <p>
                  My expertise spans modern technologies like <strong className="text-blue-300">React.js</strong>, 
                  <strong className="text-green-300"> Next.js</strong>, and <strong className="text-purple-300"> Laravel</strong>, 
                  helping businesses transform their digital presence.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-300">8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-green-400" />
                  <a href="mailto:ratanmiadev@gmail.com" className="text-sm text-blue-300 hover:text-blue-200 transition-colors">
                    ratanmiadev@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-purple-400" />
                  <a href="/resume.pdf" className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Core Skills */}
            <motion.div
              ref={skillsRef}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              initial={{ opacity: 0, x: -30 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                Core Skills
              </h3>
              
              <div className="space-y-4">
                {KEY_SKILLS.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    inView={skillsInView}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-12">
            
            {/* Key Achievements */}
            <motion.div
              ref={achievementsRef}
              initial={{ opacity: 0, x: 30 }}
              animate={achievementsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-400" />
                Key Achievements
              </h3>
              
              <div className="grid gap-6">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <AchievementCard
                    key={index}
                    achievement={achievement}
                    index={index}
                    inView={achievementsInView}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Work Experience */}
        <motion.div
          ref={experienceRef}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Professional Experience
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {WORK_EXPERIENCE.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
                inView={experienceInView}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-12 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0 }}
        >
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's transform your ideas into powerful web solutions that drive growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;