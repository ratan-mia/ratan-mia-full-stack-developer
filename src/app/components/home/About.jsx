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

// Enhanced Stats with Graphics
const CORE_STATS = [
  { icon: Award, number: '150+', label: 'Projects Delivered', color: 'text-accent' },
  { icon: Calendar, number: '8+', label: 'Years Experience', color: 'text-accent-secondary' },
  { icon: Globe, number: '25+', label: 'Countries Served', color: 'text-accent' },
  { icon: Star, number: '98%', label: 'Client Satisfaction', color: 'text-accent-secondary' }
];

const KEY_SKILLS = [
  { name: 'React.js', level: 95, color: 'from-accent to-accent-secondary' },
  { name: 'Next.js', level: 92, color: 'from-accent-secondary to-accent' },
  { name: 'Laravel', level: 90, color: 'from-accent to-accent-secondary' },
  { name: 'PHP', level: 90, color: 'from-accent-secondary to-accent' },
  { name: 'JavaScript', level: 88, color: 'from-accent to-accent-secondary' },
  { name: 'WordPress', level: 95, color: 'from-accent-secondary to-accent' }
];

const ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    metric: '200%',
    title: 'Average Sales Growth',
    description: 'Client revenue increase through optimized e-commerce solutions',
    graphic: '📈'
  },
  {
    icon: Zap,
    metric: '97%',
    title: 'Performance Score',
    description: 'Average PageSpeed Insights score across all projects',
    graphic: '⚡'
  },
  {
    icon: Users,
    metric: '98%',
    title: 'Client Satisfaction',
    description: 'Happy clients with ongoing partnerships',
    graphic: '🎯'
  }
];

const WORK_EXPERIENCE = [
  {
    company: 'Kawasaki Bangladesh',
    role: 'Senior Full Stack Developer',
    period: '2020 - Present',
    description: 'Leading enterprise development initiatives for automotive industry leader',
    technologies: ['React.js', 'Laravel', 'MySQL', 'Docker', 'AWS'],
    logo: '🏍️'
  },
  {
    company: 'Continental Motors',
    role: 'IT Manager & Lead Developer',
    period: '2018 - 2020',
    description: 'Managed IT infrastructure and led digital transformation initiatives',
    technologies: ['PHP', 'WordPress', 'MySQL', 'Linux'],
    logo: '🚗'
  },
  {
    company: 'Chery Bangladesh',
    role: 'Lead Web Developer',
    period: '2016 - 2018',
    description: 'Spearheaded website development and e-commerce optimization',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    logo: '🔧'
  }
];

// Enhanced Skill Bar Component with Graphics
const SkillBar = ({ skill, index, inView }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="body-text-small font-medium text-primary-text">{skill.name}</span>
        <span className="caption-text font-bold text-accent">{skill.level}%</span>
      </div>
      <div className="h-3 bg-card rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Enhanced Achievement Card with Graphics
const AchievementCard = ({ achievement, index, inView }) => {
  return (
    <motion.div
      className="text-center p-8 card-design hover:border-accent group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      {/* Graphic Icon */}
      <div className="text-4xl mb-4">{achievement.graphic}</div>
      
      <div className="w-12 h-12 bg-accent rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
        <achievement.icon className="w-6 h-6 text-black" />
      </div>
      
      <div className="text-3xl font-bold text-accent mb-2">{achievement.metric}</div>
      <h4 className="text-lg font-bold text-primary-text mb-2">{achievement.title}</h4>
      <p className="caption-text text-neutral leading-relaxed">{achievement.description}</p>
    </motion.div>
  );
};

// Enhanced Experience Card with Graphics
const ExperienceCard = ({ experience, index, inView }) => {
  return (
    <motion.div
      className="card-design group hover:border-accent-secondary"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="text-4xl mb-3">{experience.logo}</div>
          <h4 className="text-xl font-bold text-primary-text mb-1">{experience.role}</h4>
          <h5 className="text-accent font-semibold mb-2">{experience.company}</h5>
          <span className="caption-text text-neutral">{experience.period}</span>
        </div>
      </div>
      
      <p className="body-text-small text-neutral mb-4 leading-relaxed">{experience.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-card-dark text-accent-secondary caption-text font-medium rounded-design"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Main About Component with Enhanced Graphics
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
      className="section-padding bg-black relative overflow-hidden"
      aria-label="About Ratan Mia section"
    >
      {/* Enhanced Background Graphics */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-secondary opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/5 to-accent-secondary/5 rounded-full blur-3xl" />
      
      {/* Floating Graphics */}
      <div className="absolute top-20 left-20 text-4xl animate-bounce">💻</div>
      <div className="absolute top-40 right-20 text-3xl animate-pulse">⚡</div>
      <div className="absolute bottom-40 left-40 text-3xl animate-bounce">🚀</div>

      <div className="container-design relative z-10">
        {/* Enhanced Header with Graphics */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Graphic Element */}
          <div className="text-6xl mb-6">👨‍💻</div>
          
          {/* Eyebrow Text */}
          <motion.span
            className="text-accent caption-text font-semibold tracking-wider uppercase mb-2 inline-block bg-card px-6 py-3 rounded-design border border-design"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.span>

          <motion.h2 
            className="section-header text-primary-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Crafting <span className="text-accent">Digital Excellence</span>
          </motion.h2>

          {/* Accent Line */}
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.p
            className="body-text text-neutral max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Transforming ideas into powerful web solutions with 8+ years of experience in 
            full-stack development, specializing in React.js, Next.js, and Laravel.
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Section with Graphics */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {CORE_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 card-design group hover:border-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 smooth-transition`} />
              <div className="text-3xl md:text-4xl font-bold text-primary-text mb-2">{stat.number}</div>
              <div className="caption-text text-neutral font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid with Enhanced Graphics */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column - Story & Skills */}
          <div className="space-y-12">
            
            {/* My Story with Graphics */}
            <motion.div
              className="card-design hover:border-accent"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-4xl mb-6">📖</div>
              
              <h3 className="text-2xl font-bold text-primary-text mb-6 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-accent" />
                My Story
              </h3>
              
              <div className="space-y-4 text-neutral leading-relaxed">
                <p className="body-text-small">
                  As a <strong className="text-primary-text">Senior Full Stack Developer</strong> with 8+ years of experience, 
                  I specialize in creating high-performance web applications that drive business growth.
                </p>
                <p className="body-text-small">
                  My expertise spans modern technologies like <strong className="text-accent">React.js</strong>, 
                  <strong className="text-accent"> Next.js</strong>, and <strong className="text-accent"> Laravel</strong>, 
                  helping businesses transform their digital presence.
                </p>
              </div>
              
              {/* Contact Info with Graphics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-design">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="caption-text text-neutral">Dhaka, Bangladesh 🇧🇩</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-4 h-4 text-accent" />
                  <span className="caption-text text-neutral">8+ Years Experience ⭐</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:ratanmiadev@gmail.com" className="caption-text text-accent hover:text-accent-secondary smooth-transition">
                    ratanmiadev@gmail.com 📧
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-accent" />
                  <a href="/resume.pdf" className="caption-text text-accent hover:text-accent-secondary smooth-transition">
                    Download CV 📄
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Core Skills with Enhanced Graphics */}
            <motion.div
              ref={skillsRef}
              className="card-design hover:border-accent-secondary"
              initial={{ opacity: 0, x: -30 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl mb-6">🎯</div>
              
              <h3 className="text-2xl font-bold text-primary-text mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-accent" />
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

          {/* Right Column - Achievements with Graphics */}
          <div className="space-y-12">
            
            {/* Key Achievements with Enhanced Graphics */}
            <motion.div
              ref={achievementsRef}
              initial={{ opacity: 0, x: 30 }}
              animate={achievementsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl mb-6">🏆</div>
              
              <h3 className="text-2xl font-bold text-primary-text mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
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

        {/* Work Experience with Enhanced Graphics */}
        <motion.div
          ref={experienceRef}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">💼</div>
            <h3 className="section-header text-primary-text">
              Professional Experience
            </h3>
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

        {/* Enhanced CTA Section with Graphics */}
        <motion.div
          className="text-center bg-accent p-12 rounded-design-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0 }}
        >
          {/* Background Graphics */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          <div className="absolute top-4 right-4 text-2xl animate-bounce">🚀</div>
          <div className="absolute bottom-4 left-4 text-2xl animate-pulse">💡</div>
          
          <div className="relative z-10">
            <div className="text-5xl mb-6">🤝</div>
            
            <h3 className="section-header text-black mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="body-text text-black/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's transform your ideas into powerful web solutions that drive growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-black hover:bg-black/90 text-accent font-semibold py-4 px-8 rounded-design shadow-lg hover:shadow-xl smooth-transition inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="bg-black/10 backdrop-blur-sm hover:bg-black/20 text-black border border-black/30 font-semibold py-4 px-8 rounded-design smooth-transition inline-flex items-center justify-center gap-2"
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
