'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
    Award,
    BarChart3,
    Book,
    Briefcase,
    Calendar,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Code,
    ExternalLink,
    Eye,
    Flame,
    Globe,
    MousePointer,
    Search,
    Server,
    Settings,
    Sparkles,
    Star,
    Target,
    Trophy,
    X,
    Zap
} from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';

// Constants
const SKILL_CATEGORIES = {
  frontend: {
    title: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-400",
    description: "Creating beautiful, responsive user interfaces",
    skills: [
      { 
        name: "React.js", 
        level: 95, 
        years: 6, 
        specialty: "Component Architecture",
        certifications: ["React Developer Certificate"],
        projects: 45,
        trending: true,
        description: "Building scalable component-based UIs"
      },
      { 
        name: "Next.js", 
        level: 92, 
        years: 4, 
        specialty: "SSR & Performance",
        certifications: ["Next.js Expert"],
        projects: 25,
        trending: true,
        description: "Full-stack React framework for production"
      },
      { 
        name: "JavaScript ES6+", 
        level: 95, 
        years: 8, 
        specialty: "Modern Syntax",
        certifications: ["JavaScript Expert"],
        projects: 80,
        trending: false,
        description: "Modern JavaScript features and patterns"
      },
      { 
        name: "TypeScript", 
        level: 88, 
        years: 3, 
        specialty: "Type Safety",
        certifications: ["TypeScript Pro"],
        projects: 20,
        trending: true,
        description: "Strongly typed JavaScript for better development"
      },
      { 
        name: "Tailwind CSS", 
        level: 93, 
        years: 4, 
        specialty: "Utility First",
        certifications: ["CSS Framework Master"],
        projects: 50,
        trending: true,
        description: "Utility-first CSS framework for rapid UI development"
      },
      { 
        name: "Framer Motion", 
        level: 87, 
        years: 3, 
        specialty: "Animations",
        certifications: ["Animation Specialist"],
        projects: 30,
        trending: true,
        description: "Production-ready motion library for React"
      }
    ]
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-400",
    description: "Building robust server-side applications",
    skills: [
      { 
        name: "PHP & Laravel", 
        level: 92, 
        years: 7, 
        specialty: "MVC Architecture",
        certifications: ["Laravel Certified", "PHP Expert"],
        projects: 60,
        trending: false,
        description: "Elegant PHP framework for web artisans"
      },
      { 
        name: "Node.js", 
        level: 85, 
        years: 4, 
        specialty: "Runtime Environment",
        certifications: ["Node.js Developer"],
        projects: 25,
        trending: true,
        description: "JavaScript runtime for server-side development"
      },
      { 
        name: "RESTful APIs", 
        level: 93, 
        years: 6, 
        specialty: "API Design",
        certifications: ["API Design Expert"],
        projects: 70,
        trending: false,
        description: "Designing scalable and maintainable APIs"
      },
      { 
        name: "MySQL", 
        level: 88, 
        years: 8, 
        specialty: "Database Design",
        certifications: ["Database Administrator"],
        projects: 65,
        trending: false,
        description: "Relational database management and optimization"
      },
      { 
        name: "GraphQL", 
        level: 78, 
        years: 2, 
        specialty: "Query Language",
        certifications: ["GraphQL Fundamentals"],
        projects: 8,
        trending: true,
        description: "A query language for your API"
      },
      { 
        name: "Redis", 
        level: 82, 
        years: 3, 
        specialty: "Caching",
        certifications: ["Redis Expert"],
        projects: 15,
        trending: true,
        description: "In-memory data structure store for caching"
      }
    ]
  },
  fullstack: {
    title: "Full Stack & CMS",
    icon: Globe,
    color: "from-green-500 to-teal-500",
    textColor: "text-green-400",
    description: "End-to-end application development",
    skills: [
      { 
        name: "WordPress", 
        level: 96, 
        years: 8, 
        specialty: "Custom Development",
        certifications: ["WordPress Expert", "WooCommerce Specialist"],
        projects: 90,
        trending: false,
        description: "Custom WordPress themes and plugins"
      },
      { 
        name: "Shopify", 
        level: 87, 
        years: 5, 
        specialty: "E-commerce",
        certifications: ["Shopify Partner"],
        projects: 35,
        trending: true,
        description: "Custom Shopify apps and theme development"
      },
      { 
        name: "WooCommerce", 
        level: 91, 
        years: 6, 
        specialty: "Online Stores",
        certifications: ["WooCommerce Expert"],
        projects: 55,
        trending: false,
        description: "Custom e-commerce solutions"
      },
      { 
        name: "MERN Stack", 
        level: 86, 
        years: 4, 
        specialty: "Full Stack",
        certifications: ["Full Stack Developer"],
        projects: 20,
        trending: true,
        description: "MongoDB, Express, React, Node.js stack"
      },
      { 
        name: "JAMstack", 
        level: 83, 
        years: 3, 
        specialty: "Modern Architecture",
        certifications: ["JAMstack Developer"],
        projects: 15,
        trending: true,
        description: "JavaScript, APIs, and Markup architecture"
      },
      { 
        name: "Headless CMS", 
        level: 88, 
        years: 3, 
        specialty: "Content Management",
        certifications: ["Headless CMS Specialist"],
        projects: 18,
        trending: true,
        description: "Decoupled content management systems"
      }
    ]
  },
  devops: {
    title: "DevOps & Tools",
    icon: Settings,
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-400",
    description: "Infrastructure and deployment automation",
    skills: [
      { 
        name: "Docker", 
        level: 85, 
        years: 3, 
        specialty: "Containerization",
        certifications: ["Docker Certified"],
        projects: 25,
        trending: true,
        description: "Application containerization and deployment"
      },
      { 
        name: "Git & GitHub", 
        level: 94, 
        years: 8, 
        specialty: "Version Control",
        certifications: ["Git Expert"],
        projects: 100,
        trending: false,
        description: "Version control and collaborative development"
      },
      { 
        name: "AWS", 
        level: 82, 
        years: 3, 
        specialty: "Cloud Services",
        certifications: ["AWS Solutions Architect"],
        projects: 20,
        trending: true,
        description: "Amazon Web Services cloud platform"
      },
      { 
        name: "Digital Ocean", 
        level: 86, 
        years: 5, 
        specialty: "VPS Management",
        certifications: ["Cloud Infrastructure"],
        projects: 40,
        trending: false,
        description: "Cloud hosting and server management"
      },
      { 
        name: "CI/CD", 
        level: 78, 
        years: 2, 
        specialty: "Automation",
        certifications: ["DevOps Fundamentals"],
        projects: 12,
        trending: true,
        description: "Continuous integration and deployment"
      },
      { 
        name: "Linux", 
        level: 83, 
        years: 6, 
        specialty: "System Administration",
        certifications: ["Linux Administrator"],
        projects: 50,
        trending: false,
        description: "Unix-like operating system administration"
      }
    ]
  }
};

const ACHIEVEMENTS = [
  { icon: Trophy, value: "10+", label: "Years", color: "text-yellow-400", description: "Professional experience" },
  { icon: Code, value: "25+", label: "Technologies", color: "text-blue-400", description: "Mastered skills" },
  { icon: Briefcase, value: "150+", label: "Projects", color: "text-green-400", description: "Completed successfully" },
  { icon: Star, value: "98%", label: "Success Rate", color: "text-purple-400", description: "Client satisfaction" }
];

// Skill Card Component
const SkillCard = ({ skill, category, index, searchTerm, inView, isExpanded, onToggleExpand }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const skillInView = useInView(cardRef, { once: true, threshold: 0.1 });

  const isHighlighted = searchTerm && skill.name.toLowerCase().includes(searchTerm.toLowerCase());

  const getSkillLevel = () => {
    if (skill.level >= 90) return { label: "Expert", color: "text-emerald-400", icon: Trophy };
    if (skill.level >= 80) return { label: "Advanced", color: "text-blue-400", icon: Star };
    if (skill.level >= 70) return { label: "Proficient", color: "text-yellow-400", icon: Target };
    return { label: "Intermediate", color: "text-orange-400", icon: Book };
  };

  const skillLevel = getSkillLevel();

  return (
    <motion.div
      ref={cardRef}
      className={`group relative bg-white/10 backdrop-blur-md rounded-xl border transition-all duration-300 overflow-hidden ${
        isHighlighted ? 'border-yellow-400/60 bg-yellow-400/5' : 'border-white/20 hover:border-blue-500/50'
      } ${isExpanded ? 'row-span-2' : ''}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={skillInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Trending Badge */}
      {skill.trending && (
        <motion.div
          className="absolute top-3 right-3 z-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            <Flame className="w-3 h-3" />
            <span>Hot</span>
          </div>
        </motion.div>
      )}

      <div className={`p-5 ${isExpanded ? 'h-full' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </h4>
              <skillLevel.icon className={`w-4 h-4 ${skillLevel.color}`} />
            </div>
            <p className="text-sm text-gray-400">{skill.description}</p>
          </div>
          
          <button
            onClick={() => onToggleExpand(skill.name)}
            className="p-1 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${skill.name} details`}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${skillLevel.color}`}>{skillLevel.label}</span>
            <span className="text-white font-bold text-sm">{skill.level}%</span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
              initial={{ width: 0 }}
              animate={skillInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={isHovered ? { x: ['0%', '100%', '0%'] } : {}}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Basic Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-2 bg-white/5 rounded-lg">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Calendar className="w-3 h-3 text-blue-400" />
              <span className="text-white font-bold text-sm">{skill.years}y</span>
            </div>
            <span className="text-xs text-gray-400">Experience</span>
          </div>
          <div className="text-center p-2 bg-white/5 rounded-lg">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Briefcase className="w-3 h-3 text-green-400" />
              <span className="text-white font-bold text-sm">{skill.projects}</span>
            </div>
            <span className="text-xs text-gray-400">Projects</span>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Specialty */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Specialty
                </h5>
                <p className={`text-sm ${category.textColor} font-medium`}>{skill.specialty}</p>
              </div>

              {/* Certifications */}
              {skill.certifications.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    Certifications
                  </h5>
                  <div className="space-y-1">
                    {skill.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                        <span className="text-sm text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => console.log('View projects for:', skill.name)}
                >
                  <Eye className="w-3 h-3" />
                  View Projects
                </button>
                <button
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => console.log('Learn more about:', skill.name)}
                >
                  <ExternalLink className="w-3 h-3" />
                  Learn More
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Search and Filter Component
const SearchAndFilter = ({ searchTerm, onSearchChange, showTrendingOnly, onToggleTrending, totalSkills, filteredCount }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
          aria-label="Search skills"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleTrending}
          className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
            showTrendingOnly
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
              : 'bg-white/10 backdrop-blur-sm text-gray-300 border border-white/20 hover:bg-white/20'
          }`}
          aria-label={`${showTrendingOnly ? 'Show all' : 'Show trending'} skills`}
        >
          <Flame className="w-4 h-4" />
          <span>Trending</span>
        </button>

        <div className="hidden sm:flex items-center px-3 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-sm text-gray-300">
          <span>{filteredCount} of {totalSkills} skills</span>
        </div>
      </div>
    </motion.div>
  );
};

// Category Stats Component
const CategoryStats = ({ category, isActive }) => {
  const avgLevel = Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length);
  const expertSkills = category.skills.filter(skill => skill.level >= 90).length;
  const trendingSkills = category.skills.filter(skill => skill.trending).length;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span className="text-xl font-bold text-white">{avgLevel}%</span>
                </div>
                <span className="text-xs text-gray-400">Avg Level</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-xl font-bold text-white">{expertSkills}</span>
                </div>
                <span className="text-xs text-gray-400">Expert Level</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span className="text-xl font-bold text-white">{trendingSkills}</span>
                </div>
                <span className="text-xs text-gray-400">Trending</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Briefcase className="w-4 h-4 text-green-400" />
                  <span className="text-xl font-bold text-white">{category.skills.length}</span>
                </div>
                <span className="text-xs text-gray-400">Total Skills</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Skills Component
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [searchTerm, setSearchTerm] = useState('');
  const [showTrendingOnly, setShowTrendingOnly] = useState(false);
  const [expandedSkills, setExpandedSkills] = useState(new Set());
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Memoized filtered skills
  const filteredSkills = useMemo(() => {
    const currentCategory = SKILL_CATEGORIES[activeCategory];
    let skills = currentCategory.skills;

    if (searchTerm.trim()) {
      skills = skills.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (showTrendingOnly) {
      skills = skills.filter(skill => skill.trending);
    }

    return skills;
  }, [activeCategory, searchTerm, showTrendingOnly]);

  const totalSkillsCount = useMemo(() => 
    Object.values(SKILL_CATEGORIES).reduce((acc, cat) => acc + cat.skills.length, 0),
    []
  );

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    setSearchTerm('');
    setExpandedSkills(new Set());
  }, []);

  const handleToggleExpand = useCallback((skillName) => {
    setExpandedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skillName)) {
        newSet.delete(skillName);
      } else {
        newSet.add(skillName);
      }
      return newSet;
    });
  }, []);

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

  const currentCategory = SKILL_CATEGORIES[activeCategory];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900 relative overflow-hidden"
      aria-label="Technical skills and expertise"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/3 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-500/8 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/3 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-500/8 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto relative z-10">
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
            <span>Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Interactive Skills Portfolio
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Explore my comprehensive technical expertise across different domains. Search, filter, and dive deep into each skill to see certifications, project experience, and specializations.
          </motion.p>

          {/* Achievement Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className={`w-8 h-8 mx-auto mb-2 ${achievement.color} group-hover:scale-110 transition-transform`}>
                  <achievement.icon className="w-full h-full" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-sm font-medium text-gray-400 mb-1">{achievement.label}</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Guide */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-lg font-medium text-sm">
            <MousePointer className="w-4 h-4" />
            <span>Click categories • Search skills • Expand for details</span>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
              <motion.button
                key={key}
                className={`group relative inline-flex items-center gap-3 px-6 py-4 font-bold text-base transition-all duration-300 rounded-2xl ${
                  activeCategory === key 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105` 
                    : 'bg-white/10 backdrop-blur-md text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white hover:scale-102'
                }`}
                onClick={() => handleCategoryChange(key)}
                whileHover={{ scale: activeCategory === key ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Object.keys(SKILL_CATEGORIES).indexOf(key) * 0.1, duration: 0.4 }}
                aria-label={`Switch to ${category.title} skills`}
              >
                {activeCategory === key && (
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-30 rounded-2xl blur-sm`}></div>
                )}
                
                <div className={`relative z-10 w-6 h-6 ${
                  activeCategory === key ? 'text-white' : category.textColor
                } transition-colors duration-300`}>
                  <category.icon className="w-full h-full" />
                </div>
                
                <div className="relative z-10 text-left">
                  <div className="font-bold">{category.title}</div>
                  <div className="text-xs opacity-80">{category.description}</div>
                </div>

                <span className={`relative z-10 px-2 py-1 rounded-full text-xs font-bold ${
                  activeCategory === key 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}>
                  {category.skills.length}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Category Stats */}
          <CategoryStats category={currentCategory} isActive={activeCategory} />
        </motion.div>

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          showTrendingOnly={showTrendingOnly}
          onToggleTrending={() => setShowTrendingOnly(!showTrendingOnly)}
          totalSkills={totalSkillsCount}
          filteredCount={filteredSkills.length}
        />

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeCategory}-${searchTerm}-${showTrendingOnly}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  category={currentCategory}
                  index={index}
                  searchTerm={searchTerm}
                  inView={isInView}
                  isExpanded={expandedSkills.has(skill.name)}
                  onToggleExpand={handleToggleExpand}
                />
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No skills found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setShowTrendingOnly(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Leverage These Skills?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
                Let's combine these technical expertise to create innovative solutions for your business. 
                From concept to deployment, I'll bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Start a project with me"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Project</span>
                </motion.a>

                <motion.a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="View my project portfolio"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Portfolio</span>
                </motion.a>
              </div>

              {/* Skills Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
                {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold mb-1">{category.skills.length}</div>
                    <div className="text-blue-200 text-sm">{category.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;