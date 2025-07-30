'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Calendar,
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

// Streamlined Stats with Graphics Focus
const CORE_STATS = [
  { icon: Award, number: '150+', label: 'Projects', color: 'text-accent-lime', emoji: '🏆' },
  { icon: Calendar, number: '8+', label: 'Years', color: 'text-accent-orange', emoji: '⏰' },
  { icon: Globe, number: '25+', label: 'Countries', color: 'text-accent-lime', emoji: '🌍' },
  { icon: Star, number: '98%', label: 'Satisfaction', color: 'text-accent-orange', emoji: '⭐' }
];

const KEY_SKILLS = [
  { name: 'React.js', level: 95, emoji: '⚛️' },
  { name: 'Next.js', level: 92, emoji: '🚀' },
  { name: 'Laravel', level: 90, emoji: '🔧' },
  { name: 'PHP', level: 90, emoji: '💻' },
  { name: 'JavaScript', level: 88, emoji: '⚡' },
  { name: 'WordPress', level: 95, emoji: '📝' }
];

const ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    metric: '200%',
    title: 'Growth',
    description: 'Average client revenue increase',
    emoji: '📈'
  },
  {
    icon: Zap,
    metric: '97%',
    title: 'Performance',
    description: 'PageSpeed score average',
    emoji: '⚡'
  },
  {
    icon: Users,
    metric: '98%',
    title: 'Satisfaction',
    description: 'Happy client partnerships',
    emoji: '🎯'
  }
];

const EXPERIENCE = [
  {
    company: 'Kawasaki Bangladesh',
    role: 'Senior Full Stack Developer',
    period: '2020 - Present',
    tech: ['React', 'Laravel', 'AWS'],
    emoji: '🏍️'
  },
  {
    company: 'Continental Motors',
    role: 'IT Manager & Lead Dev',
    period: '2018 - 2020',
    tech: ['PHP', 'WordPress', 'MySQL'],
    emoji: '🚗'
  },
  {
    company: 'Chery Bangladesh',
    role: 'Lead Web Developer',
    period: '2016 - 2018',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    emoji: '🔧'
  }
];

// Enhanced Components
const SkillBar = ({ skill, index, inView }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.emoji}</span>
          <span className="text-base font-medium text-white">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-accent-lime">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-lime to-accent-orange rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const StatCard = ({ stat, index, inView }) => {
  return (
    <motion.div
      className="text-center p-6 bg-gray-800 border border-gray-700 rounded-2xl
                 hover:-translate-y-2 hover:border-accent-lime hover:shadow-xl
                 hover:shadow-lime-400/10 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl mb-3">{stat.emoji}</div>
      <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.color}`} />
      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
      <div className="text-sm text-gray-400">{stat.label}</div>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index, inView }) => {
  return (
    <motion.div
      className="text-center p-6 bg-gray-800 border border-gray-700 rounded-2xl
                 hover:-translate-y-2 hover:border-accent-orange hover:shadow-xl
                 hover:shadow-orange-400/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      <div className="text-3xl mb-4">{achievement.emoji}</div>
      <div className="w-12 h-12 bg-accent-orange rounded-xl flex items-center justify-center mx-auto mb-4">
        <achievement.icon className="w-6 h-6 text-black" />
      </div>
      <div className="text-2xl font-bold text-accent-orange mb-2">{achievement.metric}</div>
      <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
      <p className="text-sm text-gray-400">{achievement.description}</p>
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index, inView }) => {
  return (
    <motion.div
      className="bg-gray-800 border border-gray-700 rounded-2xl p-6
                 hover:-translate-y-2 hover:border-accent-lime hover:shadow-xl
                 hover:shadow-lime-400/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
    >
      <div className="text-4xl mb-4">{experience.emoji}</div>
      <h4 className="text-lg font-bold text-white mb-1">{experience.role}</h4>
      <h5 className="text-accent-lime font-semibold mb-2">{experience.company}</h5>
      <span className="text-sm text-gray-400 mb-4 block">{experience.period}</span>
      
      <div className="flex flex-wrap gap-2">
        {experience.tech.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-gray-900 text-accent-orange text-sm font-medium rounded-lg"
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
  const photoRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);
  const experienceRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const photoInView = useInView(photoRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const skillsInView = useInView(skillsRef, { once: true, threshold: 0.1 });
  const achievementsInView = useInView(achievementsRef, { once: true, threshold: 0.1 });
  const experienceInView = useInView(experienceRef, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background Graphics */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-orange/5 rounded-full blur-3xl" />
      
      {/* Floating Emojis */}
      <div className="absolute top-20 left-20 text-4xl animate-bounce">💻</div>
      <div className="absolute top-40 right-20 text-3xl animate-pulse">⚡</div>
      <div className="absolute bottom-40 left-40 text-3xl animate-bounce">🚀</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-1 bg-accent-lime mx-auto mb-8"></div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Meet <span className="text-accent-lime">Ratan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Full-stack developer crafting digital solutions for 8+ years
          </p>
        </motion.div>

        {/* Photo & Intro Section */}
        <motion.div
          ref={photoRef}
          className="grid lg:grid-cols-2 gap-12 mb-20 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={photoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Photo Section */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Background Graphics */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent-lime/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent-orange/20 rounded-2xl transform -rotate-3"></div>
              
              {/* Photo Container */}
              <div className="relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden border-4 border-gray-700 hover:border-accent-lime transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Ratan Mia - Full Stack Developer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with Contact Info */}
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="text-2xl">👋</div>
                    <p className="text-white font-semibold">Hello there!</p>
                    <p className="text-accent-lime text-sm">Let's build something amazing</p>
                  </div>
                </div>
              </div>

              {/* Floating Status Badge */}
              <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Available
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-8">
            <div>
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Senior Full Stack Developer
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Specializing in React.js, Next.js, and Laravel. Transforming ideas into 
                high-performance web applications that drive business growth.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <MapPin className="w-5 h-5 text-accent-lime" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Dhaka, BD 🇧🇩</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <Coffee className="w-5 h-5 text-accent-lime" />
                <div>
                  <p className="text-sm text-gray-400">Experience</p>
                  <p className="text-white font-medium">8+ Years ⭐</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <Mail className="w-5 h-5 text-accent-lime" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:ratanmiadev@gmail.com" className="text-accent-lime hover:text-accent-orange transition-colors text-sm">
                    ratanmiadev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <Download className="w-5 h-5 text-accent-lime" />
                <div>
                  <p className="text-sm text-gray-400">Resume</p>
                  <a href="/resume.pdf" className="text-accent-lime hover:text-accent-orange transition-colors text-sm">
                    Download CV 📄
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {CORE_STATS.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              inView={statsInView}
            />
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Skills Section */}
          <motion.div
            ref={skillsRef}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8
                       hover:border-accent-lime hover:shadow-xl hover:shadow-lime-400/10
                       transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Core Skills</h3>
                <p className="text-gray-400">Technologies I excel at</p>
              </div>
            </div>
            
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

          {/* Achievements Section */}
          <motion.div
            ref={achievementsRef}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="text-4xl">🏆</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
                <p className="text-gray-400">Numbers that matter</p>
              </div>
            </div>
            
            {ACHIEVEMENTS.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                index={index}
                inView={achievementsInView}
              />
            ))}
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          ref={experienceRef}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">💼</div>
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Professional Journey
            </h3>
            <p className="text-gray-400">Companies that shaped my expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {EXPERIENCE.map((experience, index) => (
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
          className="bg-accent-lime p-12 rounded-2xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          <div className="absolute top-4 right-4 text-2xl animate-bounce">🚀</div>
          <div className="absolute bottom-4 left-4 text-2xl animate-pulse">💡</div>
          
          <div className="relative z-10">
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="text-3xl lg:text-5xl font-bold text-black mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-black text-accent-lime font-semibold px-8 py-4 rounded-xl
                           hover:bg-gray-900 hover:-translate-y-1 hover:shadow-xl 
                           transition-all duration-300 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="bg-black/10 text-black border border-black/30 font-semibold px-8 py-4 rounded-xl
                           hover:bg-black/20 hover:-translate-y-1 transition-all duration-300 
                           inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
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