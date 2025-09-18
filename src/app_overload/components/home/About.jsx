'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Coffee,
  Database,
  DollarSign,
  Download,
  FileText,
  Globe,
  Heart,
  Mail,
  MapPin,
  Palette,
  Rocket,
  Shield,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
  Zap
} from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';

// Constants
const PERSONAL_STATS = [
  { label: 'Years Experience', value: '8+', icon: Calendar, color: 'text-blue-400', description: 'Professional web development' },
  { label: 'Projects Delivered', value: '150+', icon: Rocket, color: 'text-green-400', description: 'Successful project completions' },
  { label: 'Technologies', value: '25+', icon: Zap, color: 'text-yellow-400', description: 'Modern tech stack mastery' },
  { label: 'Happy Clients', value: '50+', icon: Heart, color: 'text-red-400', description: 'Satisfied global clients' }
];

const ACHIEVEMENTS = [
  {
    icon: DollarSign,
    metric: '40%',
    title: 'Cost Reduction',
    description: 'Average IT cost reduction through strategic optimization and automation',
    color: 'from-green-500 to-emerald-600',
    impact: 'Enterprise clients save $50K+ annually'
  },
  {
    icon: TrendingUp,
    metric: '200%',
    title: 'Sales Growth',
    description: 'Average sales increase with innovative e-commerce solutions',
    color: 'from-blue-500 to-cyan-600',
    impact: 'Client revenue increased by $500K+'
  },
  {
    icon: Zap,
    metric: '97%',
    title: 'Performance Score',
    description: 'Average PageSpeed Insights score across all projects',
    color: 'from-yellow-500 to-orange-600',
    impact: '50% faster loading times'
  },
  {
    icon: Users,
    metric: '98%',
    title: 'Client Satisfaction',
    description: 'Client satisfaction rate with 24/7 support and maintenance',
    color: 'from-purple-500 to-pink-600',
    impact: '95% client retention rate'
  }
];

const EXPERTISE_CATEGORIES = [
  { 
    category: 'Frontend Development', 
    icon: Palette,
    skills: [
      { name: 'React.js', level: 95, years: 6 },
      { name: 'Next.js', level: 92, years: 4 },
      { name: 'TypeScript', level: 88, years: 3 },
      { name: 'Tailwind CSS', level: 95, years: 5 }
    ],
    color: 'from-blue-500 to-indigo-600',
    description: 'Modern, responsive, and performant user interfaces'
  },
  { 
    category: 'Backend Development', 
    icon: Database,
    skills: [
      { name: 'PHP', level: 90, years: 8 },
      { name: 'Laravel', level: 92, years: 6 },
      { name: 'Node.js', level: 85, years: 4 },
      { name: 'MySQL', level: 88, years: 7 }
    ],
    color: 'from-green-500 to-teal-600',
    description: 'Scalable APIs and robust server-side architecture'
  },
  { 
    category: 'DevOps & Cloud', 
    icon: Cloud,
    skills: [
      { name: 'Docker', level: 82, years: 3 },
      { name: 'AWS', level: 80, years: 4 },
      { name: 'Git', level: 95, years: 8 },
      { name: 'CI/CD', level: 78, years: 3 }
    ],
    color: 'from-orange-500 to-red-600',
    description: 'Efficient deployment and infrastructure management'
  },
  { 
    category: 'CMS & E-commerce', 
    icon: FileText,
    skills: [
      { name: 'WordPress', level: 95, years: 8 },
      { name: 'Shopify', level: 88, years: 5 },
      { name: 'Strapi', level: 85, years: 3 },
      { name: 'WooCommerce', level: 90, years: 6 }
    ],
    color: 'from-purple-500 to-pink-600',
    description: 'Content management and e-commerce solutions'
  }
];

const EXPERIENCE_DATA = [
  {
    company: 'Kawasaki Bangladesh',
    role: 'Senior Full Stack Developer',
    period: '2020 - Present',
    duration: '4+ Years',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Leading enterprise development initiatives and managing complex web applications for automotive industry leader.',
    achievements: [
      'Led team of 5+ developers on enterprise projects',
      'Implemented microservices architecture reducing load time by 60%',
      'Developed real-time inventory management system',
      'Achieved 99.9% uptime for critical business applications'
    ],
    technologies: ['React.js', 'Laravel', 'MySQL', 'Docker', 'AWS'],
    color: 'from-blue-500 to-indigo-600',
    impact: '$2M+ in operational efficiency improvements'
  },
  {
    company: 'Continental Motors',
    role: 'IT Manager & Lead Developer',
    period: '2018 - 2020',
    duration: '2 Years',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Managed complete IT infrastructure while leading digital transformation initiatives for automotive dealership.',
    achievements: [
      'Migrated legacy systems to modern cloud infrastructure',
      'Developed custom CRM increasing sales efficiency by 45%',
      'Implemented automated backup and disaster recovery',
      'Reduced IT operational costs by 30%'
    ],
    technologies: ['PHP', 'WordPress', 'MySQL', 'Linux', 'Network Admin'],
    color: 'from-green-500 to-teal-600',
    impact: '$500K+ annual cost savings'
  },
  {
    company: 'Chery Bangladesh',
    role: 'Lead Web Developer',
    period: '2016 - 2018',
    duration: '2 Years',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Spearheaded website development and e-commerce optimization for automotive manufacturer.',
    achievements: [
      'Built responsive e-commerce platform from scratch',
      'Optimized website achieving 97% PageSpeed score',
      'Integrated payment gateways and CRM systems',
      'Increased online sales by 200%'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    color: 'from-purple-500 to-pink-600',
    impact: '200% increase in online lead generation'
  }
];

const TABS = [
  { id: 'overview', label: 'Overview', icon: User, description: 'My story and achievements' },
  { id: 'expertise', label: 'Skills', icon: Target, description: 'Technical expertise and tools' },
  { id: 'experience', label: 'Experience', icon: Briefcase, description: 'Professional journey' }
];

const CTA_STATS = [
  { icon: Star, number: '100%', label: 'Success Rate', color: 'text-yellow-400' },
  { icon: Clock, number: '24/7', label: 'Support', color: 'text-green-400' },
  { icon: Globe, number: '25+', label: 'Countries', color: 'text-blue-400' }
];

// Enhanced CTA Component
const ModernCTA = ({ inView }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            
            <motion.div 
              className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
              animate={{ 
                x: [0, 30, -15, 0],
                y: [0, -20, 10, 0],
                scale: [1, 1.2, 0.8, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/3 w-24 h-24 bg-purple-300/20 rounded-full blur-lg"
              animate={{ 
                x: [0, -25, 20, 0],
                y: [0, 15, -10, 0],
                scale: [1, 0.8, 1.3, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>
            </div>
          </div>

          <div className="relative z-10 p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              
              {/* Main Content */}
              <motion.div 
                variants={itemVariants}
                className="flex-1 text-center lg:text-left"
              >
                <motion.div 
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-xs font-medium text-white mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Shield className="w-3 h-3" />
                  <span>Trusted Partner</span>
                </motion.div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                  Ready To Create Something
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Extraordinary?
                  </span>
                </h3>
                
                <p className="text-sm md:text-base text-blue-100 leading-relaxed max-w-md lg:max-w-none">
                  Transform your vision into reality with proven expertise and cutting-edge solutions. Let's build something amazing together.
                </p>
              </motion.div>

              {/* Stats - Desktop */}
              <motion.div 
                variants={itemVariants}
                className="hidden lg:flex flex-col gap-3 px-6"
              >
                {CTA_STATS.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className="p-1.5 rounded-md bg-white/20">
                      <stat.icon className={`w-3 h-3 ${stat.color}`} />
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${stat.color}`}>{stat.number}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-fit"
              >
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Contact me to start your project"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium text-sm border border-white/30 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="View my services"
                >
                  <span>View Services</span>
                  <Briefcase className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Stats */}
            <motion.div 
              variants={itemVariants}
              className="lg:hidden flex justify-center gap-4 mt-6 pt-4 border-t border-white/20"
            >
              {CTA_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                  <div className={`text-sm font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-xs text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Skill Progress Bar Component
const SkillBar = ({ skill, index, inView }) => {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">{skill.years}y</span>
          <span className="text-sm font-bold text-white">{skill.level}%</span>
        </div>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
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
const AchievementCard = ({ achievement, index, inView, isHovered, onHover }) => {
  return (
    <motion.div
      className="group p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, x: 15 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 2 }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      role="article"
      aria-label={`Achievement: ${achievement.title}`}
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className="flex-shrink-0"
          animate={{ rotate: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
            <achievement.icon className="w-6 h-6" />
          </div>
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
              {achievement.metric}
            </div>
            <h5 className="text-lg font-bold text-white">
              {achievement.title}
            </h5>
          </div>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-2">
            {achievement.description}
          </p>
          <AnimatePresence>
            {isHovered && (
              <motion.p
                className="text-xs text-blue-300 font-medium"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                💡 {achievement.impact}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// Main About Component
const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [isTabChanging, setIsTabChanging] = useState(false);
  
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.1 });

  const handleTabChange = useCallback((newTab) => {
    if (newTab === activeTab) return;
    
    setIsTabChanging(true);
    setActiveTab(newTab);
    
    // Reset changing state after animation
    setTimeout(() => {
      setIsTabChanging(false);
    }, 300);
  }, [activeTab]);

  const handleKeyboardTabChange = useCallback((e, tabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabChange(tabId);
    }
  }, [handleTabChange]);

  // Memoized personal info
  const personalInfo = useMemo(() => ({
    name: 'Ratan Mia',
    title: 'Senior Full Stack Developer',
    location: 'Dhaka, Bangladesh',
    experience: '8+ Years',
    email: 'shorifull@gmail.com',
    specialties: ['React.js Expert', 'Next.js Specialist', 'Laravel Pro', 'WordPress Expert', 'Team Leader']
  }), []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
      aria-label="About Ratan Mia section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-blue-400/30 text-blue-400 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider mb-6"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>About Me</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Transforming complex challenges into elegant solutions with over a decade of experience in high-performance web development and digital innovation.
          </motion.p>

          {/* Personal Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {PERSONAL_STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className={`w-8 h-8 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-full h-full" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-gray-400 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2"
          role="tablist"
          aria-label="About me sections"
        >
          {TABS.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              onKeyDown={(e) => handleKeyboardTabChange(e, tab.id)}
              className={`inline-flex items-center gap-2 px-4 md:px-6 py-3 font-semibold text-sm md:text-base transition-all duration-300 rounded-xl whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-md text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              aria-label={`${tab.label}: ${tab.description}`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="min-h-[500px]"
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
            >
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Story Section */}
                  <motion.div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Code2 className="w-6 h-6 text-blue-400" />
                        My Development Journey
                      </h3>
                      <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                        <p>
                          As a <strong className="text-white">Senior Full Stack Developer</strong> with 8+ years of experience, 
                          I specialize in creating high-performance, scalable web applications that drive business growth.
                        </p>
                        <p>
                          My expertise spans the complete development lifecycle, from concept to deployment, 
                          with a focus on modern technologies like <strong className="text-blue-300">React.js</strong>, 
                          <strong className="text-green-300"> Next.js</strong>, and <strong className="text-purple-300">Laravel</strong>.
                        </p>
                        <p>
                          I'm passionate about clean code, user experience, and helping businesses transform 
                          their digital presence through innovative web solutions.
                        </p>
                      </div>
                      
                      {/* Personal Info */}
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-gray-300">{personalInfo.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Coffee className="w-4 h-4 text-orange-400" />
                            <span className="text-sm text-gray-300">{personalInfo.experience}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-green-400" />
                            <a href={`mailto:${personalInfo.email}`} className="text-sm text-blue-300 hover:text-blue-200 transition-colors">
                              {personalInfo.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <Download className="w-4 h-4 text-purple-400" />
                            <a href="/resume.pdf" className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
                              Download CV
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Specialty Tags */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {personalInfo.specialties.map((tag, index) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1 bg-white/10 border border-white/20 text-blue-300 text-xs md:text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Achievements */}
                  <motion.div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Award className="w-6 h-6 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {ACHIEVEMENTS.map((achievement, index) => (
                        <AchievementCard
                          key={index}
                          achievement={achievement}
                          index={index}
                          inView={isInView}
                          isHovered={hoveredAchievement === index}
                          onHover={setHoveredAchievement}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === 'expertise' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {EXPERTISE_CATEGORIES.map((category, index) => (
                    <motion.div
                      key={category.category}
                      className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                          <category.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-bold text-white">
                            {category.category}
                          </h4>
                          <p className="text-sm text-gray-400">{category.description}</p>
                        </div>
                      </div>
                      
                      {/* Skills */}
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <SkillBar
                            key={skill.name}
                            skill={skill}
                            index={skillIndex}
                            inView={isInView && activeTab === 'expertise'}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {EXPERIENCE_DATA.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01, y: -2 }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                          <div className="flex flex-col gap-3 mb-4">
                            <div>
                              <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                                {exp.role}
                              </h4>
                              <h5 className="text-base md:text-lg text-blue-400 font-bold mb-3 flex items-center gap-2">
                                <Briefcase className="w-5 h-5" />
                                {exp.company}
                              </h5>
                              <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="inline-flex items-center bg-blue-900/50 border border-blue-400/30 text-blue-300 px-3 py-1 text-xs md:text-sm font-semibold rounded-full">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {exp.period}
                                </span>
                                <span className="text-xs md:text-sm font-medium text-gray-400">
                                  {exp.duration} • {exp.type}
                                </span>
                                <span className="text-xs md:text-sm font-medium text-gray-400 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                            {exp.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="mb-4">
                            <h6 className="text-sm font-semibold text-white mb-2">Technologies Used:</h6>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-white/10 border border-white/20 text-blue-300 text-xs rounded-lg"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Achievements & Impact */}
                        <div className="space-y-4">
                          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                            <h6 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              Key Achievements
                            </h6>
                            <div className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.div
                                  key={achievement}
                                  className="flex items-start gap-2"
                                  initial={{ opacity: 0, x: 15 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                                >
                                  <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs md:text-sm font-medium text-gray-300">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Impact */}
                          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-4 rounded-xl border border-green-400/20">
                            <h6 className="text-sm font-semibold text-green-300 mb-2 uppercase tracking-wider flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              Business Impact
                            </h6>
                            <p className="text-xs md:text-sm font-medium text-green-200">
                              {exp.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modern CTA Section */}
        <div ref={ctaRef}>
          <ModernCTA inView={ctaInView} />
        </div>
      </div>
    </section>
  );
};

export default About;