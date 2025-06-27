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
  Terminal,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

// Updated Constants with new design system
const CORE_STATS = [
  { icon: Award, number: '150+', label: 'Projects Delivered', color: 'text-cyan-400' },
  { icon: Calendar, number: '8+', label: 'Years Experience', color: 'text-blue-400' },
  { icon: Globe, number: '25+', label: 'Countries Served', color: 'text-purple-400' },
  { icon: Star, number: '98%', label: 'Client Satisfaction', color: 'text-orange-400' }
];

const KEY_SKILLS = [
  { name: 'React.js', level: 95, color: 'from-cyan-500 to-blue-500' },
  { name: 'Next.js', level: 92, color: 'from-blue-500 to-purple-500' },
  { name: 'Laravel', level: 90, color: 'from-purple-500 to-pink-500' },
  { name: 'PHP', level: 90, color: 'from-pink-500 to-red-500' },
  { name: 'JavaScript', level: 88, color: 'from-orange-500 to-amber-500' },
  { name: 'WordPress', level: 95, color: 'from-emerald-500 to-teal-500' }
];

const ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    metric: '200%',
    title: 'Average Sales Growth',
    description: 'Client revenue increase through optimized e-commerce solutions',
    color: 'text-cyan-400'
  },
  {
    icon: Zap,
    metric: '97%',
    title: 'Performance Score',
    description: 'Average PageSpeed Insights score across all projects',
    color: 'text-blue-400'
  },
  {
    icon: Users,
    metric: '98%',
    title: 'Client Satisfaction',
    description: 'Happy clients with ongoing partnerships',
    color: 'text-purple-400'
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

// Updated Skill Bar Component
const SkillBar = ({ skill, index, inView }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-white uppercase tracking-wider">{skill.name}</span>
        <span className="text-sm font-bold text-cyan-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Updated Achievement Card Component
const AchievementCard = ({ achievement, index, inView }) => {
  return (
    <motion.div
      className="card-primary group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <achievement.icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-3xl font-black text-white mb-3 uppercase tracking-tight">{achievement.metric}</div>
        <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{achievement.title}</h4>
        <p className="text-sm text-slate-300 leading-relaxed">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

// Updated Experience Card Component
const ExperienceCard = ({ experience, index, inView }) => {
  return (
    <motion.div
      className="card-primary group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{experience.role}</h4>
            <h5 className="text-cyan-400 font-semibold mb-2 uppercase tracking-wider text-sm">{experience.company}</h5>
            <span className="text-sm text-slate-400 font-medium">{experience.period}</span>
          </div>
          <Terminal className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
        </div>
        
        <p className="text-slate-300 mb-6 leading-relaxed">{experience.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span 
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>
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
      className="py-16 lg:py-24 px-6 lg:px-8 xl:px-16 2xl:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
      aria-label="About Ratan Mia section"
    >
      {/* Developer Brand Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Code Brackets Decoration */}
      <motion.div
        className="absolute top-20 right-10 text-6xl font-mono text-cyan-500/20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        &lt;About/&gt;
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Badge */}
          <motion.div
            className="section-badge mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            About Developer
          </motion.div>

          <motion.h2 
            className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            className="text-lg text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Transforming ideas into powerful web solutions with 8+ years of experience in 
            full-stack development, specializing in React.js, Next.js, and Laravel.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-20 mx-auto mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
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
              className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{stat.number}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column - Story & Skills */}
          <div className="space-y-12">
            
            {/* My Story */}
            <motion.div
              className="card-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.8 }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-wide">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                  My Story
                </h3>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    As a <strong className="text-white">Senior Full Stack Developer</strong> with 8+ years of experience, 
                    I specialize in creating high-performance web applications that drive business growth.
                  </p>
                  <p>
                    My expertise spans modern technologies like <strong className="text-cyan-300">React.js</strong>, 
                    <strong className="text-blue-300"> Next.js</strong>, and <strong className="text-purple-300"> Laravel</strong>, 
                    helping businesses transform their digital presence.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code that not only solves problems but creates 
                    <strong className="text-orange-300"> lasting value</strong> for businesses and their users.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-700">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-slate-300 font-medium">Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-slate-300 font-medium">8+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <a href="mailto:ratanmiadev@gmail.com" className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors font-medium">
                      ratanmiadev@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Download className="w-4 h-4 text-purple-400" />
                    <a href="/resume.pdf" className="text-sm text-purple-300 hover:text-purple-200 transition-colors font-medium">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Skills */}
            <motion.div
              ref={skillsRef}
              className="card-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-wide">
                  <Zap className="w-6 h-6 text-orange-400" />
                  Core Skills
                </h3>
                
                <div className="space-y-6">
                  {KEY_SKILLS.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                      inView={skillsInView}
                    />
                  ))}
                </div>
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
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-wide">
                <Award className="w-6 h-6 text-orange-400" />
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
              Professional Experience
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-32 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
          className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0 }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
          
          <div className="relative z-10 text-center">
            <motion.h3 
              className="text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4 }}
            >
              Let's transform your ideas into powerful web solutions that drive growth and success.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.6 }}
            >
              <motion.a
                href="#contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="btn-secondary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 className="w-5 h-5" />
                <span>View My Work</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Developer Brand Stripe Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
    </section>
  );
};

export default About;
