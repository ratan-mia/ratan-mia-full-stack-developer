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
  { icon: Award, number: '150+', label: 'PROJECTS DELIVERED', color: 'text-cyan-400' },
  { icon: Calendar, number: '8+', label: 'YEARS EXPERIENCE', color: 'text-blue-400' },
  { icon: Globe, number: '25+', label: 'COUNTRIES SERVED', color: 'text-violet-400' },
  { icon: Star, number: '98%', label: 'CLIENT SATISFACTION', color: 'text-orange-400' }
];

const ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    metric: '200%',
    title: 'AVERAGE SALES GROWTH',
    description: 'Client revenue increase through optimized solutions',
    color: 'text-cyan-400'
  },
  {
    icon: Zap,
    metric: '97%',
    title: 'PERFORMANCE SCORE',
    description: 'Average PageSpeed Insights score across projects',
    color: 'text-blue-400'
  },
  {
    icon: Users,
    metric: '98%',
    title: 'CLIENT SATISFACTION',
    description: 'Happy clients with ongoing partnerships',
    color: 'text-violet-400'
  }
];

const WORK_EXPERIENCE = [
  {
    company: 'KAWASAKI BANGLADESH',
    role: 'SENIOR FULL STACK DEVELOPER',
    period: '2020 - PRESENT',
    description: 'Leading enterprise development initiatives for automotive industry leader with cutting-edge solutions.',
    technologies: ['React.js', 'Laravel', 'MySQL', 'Docker', 'AWS']
  },
  {
    company: 'CONTINENTAL MOTORS',
    role: 'IT MANAGER & LEAD DEVELOPER',
    period: '2018 - 2020',
    description: 'Managed IT infrastructure and led digital transformation initiatives across multiple departments.',
    technologies: ['PHP', 'WordPress', 'MySQL', 'Linux']
  },
  {
    company: 'CHERY BANGLADESH',
    role: 'LEAD WEB DEVELOPER',
    period: '2016 - 2018',
    description: 'Spearheaded website development and e-commerce optimization for automotive brand presence.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP']
  }
];

// Achievement Card Component with controlled hover
const AchievementCircleItem = ({ achievement, index, total, inView }) => {
  const angle = (360 / total) * index;
  const radius = 120;
  const offsetX = radius * Math.cos((angle - 90) * (Math.PI / 180));
  const offsetY = radius * Math.sin((angle - 90) * (Math.PI / 180));

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl shadow-lg text-center group transition-all duration-300"
      style={{
        left: `calc(50% + ${offsetX}px)`,
        top: `calc(50% + ${offsetY}px)`,
        transform: 'translate(-50%, -50%)',
        width: '140px',
        height: '140px',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Glow effect - only on individual hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <div className="relative z-10">
        <achievement.icon className={`w-8 h-8 mx-auto mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
        <div className="text-xl font-black text-white mb-1 uppercase tracking-tight">{achievement.metric}</div>
        <p className="text-xs text-slate-400 leading-tight uppercase tracking-wider">{achievement.title}</p>
      </div>
    </motion.div>
  );
};

// Experience Card Component with controlled hover
const ExperienceCard = ({ experience, index, inView }) => {
  return (
    <motion.div
      className="group relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Glow effect - only on individual card hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{experience.role}</h4>
            <h5 className="text-cyan-400 font-bold mb-2 uppercase tracking-wider text-sm">{experience.company}</h5>
            <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">{experience.period}</span>
          </div>
          <Terminal className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
        </div>
        
        <p className="text-slate-300 mb-6 leading-relaxed">{experience.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full"
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
  const achievementsPhotoRef = useRef(null);
  const experienceRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const achievementsPhotoInView = useInView(achievementsPhotoRef, { once: true, threshold: 0.1 });
  const experienceInView = useInView(experienceRef, { once: true, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Developer Header Stripe */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      
      <section 
        ref={sectionRef}
        id="about" 
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
        aria-label="About Ratan Mia section"
      >
        {/* New Background Design - Layered geometric patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Primary background layers */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
          
          {/* Geometric mesh overlay */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <defs>
                <pattern id="triangles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <polygon points="0,0 50,25 0,50" fill="rgba(6, 182, 212, 0.05)" />
                  <polygon points="50,0 100,25 50,50" fill="rgba(59, 130, 246, 0.05)" />
                  <polygon points="25,50 75,75 25,100" fill="rgba(124, 58, 237, 0.05)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#triangles)" />
            </svg>
          </div>
          
          {/* Floating glow effects */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-violet-600/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-violet-600/5 to-orange-500/5 rounded-full blur-3xl"></div>
          
          {/* Diagonal lines pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <defs>
                <pattern id="diagonals" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="40" y2="40" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1" />
                  <line x1="0" y1="40" x2="40" y2="0" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonals)" />
            </svg>
          </div>
          
          {/* Tech-inspired circuit pattern */}
          <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z" stroke="cyan" strokeWidth="2" fill="none" />
              <circle cx="20" cy="20" r="3" fill="cyan" />
              <circle cx="80" cy="20" r="3" fill="blue" />
              <circle cx="50" cy="50" r="3" fill="purple" />
              <circle cx="20" cy="80" r="3" fill="orange" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">ABOUT DEVELOPER</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                CRAFTING DIGITAL EXCELLENCE
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Transforming ideas into powerful web solutions with 8+ years of experience in 
                full-stack development, specializing in React.js, Next.js, and Laravel.
              </p>

              {/* Code Bracket Element */}
              <div className="text-cyan-500 font-mono text-2xl mb-8">&lt;/&gt;</div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20"
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {CORE_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] group"
                  variants={itemVariants}
                >
                  {/* Glow effect only on individual card hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              
              {/* Left Column - Story */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.4 }}
              >
                <div className="group relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  {/* Glow effect only on card hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3 uppercase tracking-tight">
                      <Code2 className="w-6 h-6 text-cyan-400" />
                      MY STORY
                    </h3>
                    
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        As a <strong className="text-white">SENIOR FULL STACK DEVELOPER</strong> with 8+ years of experience, 
                        I specialize in creating high-performance web applications that drive business growth.
                      </p>
                      <p>
                        My expertise spans modern technologies like <strong className="text-cyan-300">React.js</strong>, 
                        <strong className="text-blue-300"> Next.js</strong>, and <strong className="text-violet-300"> Laravel</strong>, 
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
                        <span className="text-sm text-slate-300 font-medium uppercase tracking-wider">DHAKA, BANGLADESH</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Coffee className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-slate-300 font-medium uppercase tracking-wider">8+ YEARS EXPERIENCE</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-emerald-400" />
                        <a href="mailto:ratanmiadev@gmail.com" className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors font-medium uppercase tracking-wider">
                          RATANMIADEV@GMAIL.COM
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Download className="w-4 h-4 text-violet-400" />
                        <a href="/resume.pdf" className="text-sm text-violet-300 hover:text-violet-200 transition-colors font-medium uppercase tracking-wider">
                          DOWNLOAD CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Developer Photo & Achievements */}
              <div className="flex flex-col items-center justify-center p-8 relative" ref={achievementsPhotoRef}>
                <motion.div
                  className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl border-4 border-cyan-500/50 flex items-center justify-center overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={achievementsPhotoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                  {/* Developer Avatar/Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-6xl font-black">
                    RM
                  </div>
                  {/* Overlay for subtle effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 rounded-xl" />
                </motion.div>

                {/* Achievements displayed around the photo */}
                {ACHIEVEMENTS.map((achievement, index) => (
                  <AchievementCircleItem
                    key={index}
                    achievement={achievement}
                    index={index}
                    total={ACHIEVEMENTS.length}
                    inView={achievementsPhotoInView}
                  />
                ))}
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
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  PROFESSIONAL EXPERIENCE
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full max-w-md mx-auto"></div>
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

            {/* Decorative Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mb-20"></div>

            {/* CTA Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8 }}
            >
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    READY TO START YOUR PROJECT?
                  </h3>
                  
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Let's transform your ideas into powerful web solutions that drive growth and success.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                      <span>GET IN TOUCH</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                      <Code2 className="w-5 h-5" />
                      <span>VIEW MY WORK</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Footer Stripe */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
    </>
  );
};

export default About;
