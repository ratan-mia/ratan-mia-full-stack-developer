'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  Award,
  Briefcase,
  Code,
  Eye,
  Globe,
  MousePointer,
  Server,
  Settings,
  Star,
  TrendingUp,
  Zap,
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Book,
  Calendar,
  Clock,
  Target,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Trophy,
  Flame
} from 'lucide-react';
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';

// Enhanced Skill Categories with Graphics
const SKILL_CATEGORIES = {
  frontend: {
    title: "Frontend Development",
    icon: Code,
    color: "from-accent to-accent-secondary",
    textColor: "text-accent",
    description: "Creating beautiful, responsive user interfaces",
    graphic: "🎨",
    skills: [
      { 
        name: "React.js", 
        level: 95, 
        years: 6, 
        specialty: "Component Architecture",
        certifications: ["React Developer Certificate"],
        projects: 45,
        trending: true,
        description: "Building scalable component-based UIs",
        graphic: "⚛️"
      },
      { 
        name: "Next.js", 
        level: 92, 
        years: 4, 
        specialty: "SSR & Performance",
        certifications: ["Next.js Expert"],
        projects: 25,
        trending: true,
        description: "Full-stack React framework for production",
        graphic: "🚀"
      },
      { 
        name: "JavaScript ES6+", 
        level: 95, 
        years: 8, 
        specialty: "Modern Syntax",
        certifications: ["JavaScript Expert"],
        projects: 80,
        trending: false,
        description: "Modern JavaScript features and patterns",
        graphic: "📱"
      },
      { 
        name: "TypeScript", 
        level: 88, 
        years: 3, 
        specialty: "Type Safety",
        certifications: ["TypeScript Pro"],
        projects: 20,
        trending: true,
        description: "Strongly typed JavaScript for better development",
        graphic: "🛡️"
      },
      { 
        name: "Tailwind CSS", 
        level: 93, 
        years: 4, 
        specialty: "Utility First",
        certifications: ["CSS Framework Master"],
        projects: 50,
        trending: true,
        description: "Utility-first CSS framework for rapid UI development",
        graphic: "💨"
      },
      { 
        name: "Framer Motion", 
        level: 87, 
        years: 3, 
        specialty: "Animations",
        certifications: ["Animation Specialist"],
        projects: 30,
        trending: true,
        description: "Production-ready motion library for React",
        graphic: "✨"
      }
    ]
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    color: "from-accent-secondary to-accent",
    textColor: "text-accent-secondary",
    description: "Building robust server-side applications",
    graphic: "⚙️",
    skills: [
      { 
        name: "PHP & Laravel", 
        level: 92, 
        years: 7, 
        specialty: "MVC Architecture",
        certifications: ["Laravel Certified", "PHP Expert"],
        projects: 60,
        trending: false,
        description: "Elegant PHP framework for web artisans",
        graphic: "🐘"
      },
      { 
        name: "Node.js", 
        level: 85, 
        years: 4, 
        specialty: "Runtime Environment",
        certifications: ["Node.js Developer"],
        projects: 25,
        trending: true,
        description: "JavaScript runtime for server-side development",
        graphic: "🟢"
      },
      { 
        name: "RESTful APIs", 
        level: 93, 
        years: 6, 
        specialty: "API Design",
        certifications: ["API Design Expert"],
        projects: 70,
        trending: false,
        description: "Designing scalable and maintainable APIs",
        graphic: "🔗"
      },
      { 
        name: "MySQL", 
        level: 88, 
        years: 8, 
        specialty: "Database Design",
        certifications: ["Database Administrator"],
        projects: 65,
        trending: false,
        description: "Relational database management and optimization",
        graphic: "🗄️"
      },
      { 
        name: "GraphQL", 
        level: 78, 
        years: 2, 
        specialty: "Query Language",
        certifications: ["GraphQL Fundamentals"],
        projects: 8,
        trending: true,
        description: "A query language for your API",
        graphic: "📊"
      },
      { 
        name: "Redis", 
        level: 82, 
        years: 3, 
        specialty: "Caching",
        certifications: ["Redis Expert"],
        projects: 15,
        trending: true,
        description: "In-memory data structure store for caching",
        graphic: "⚡"
      }
    ]
  },
  fullstack: {
    title: "Full Stack & CMS",
    icon: Globe,
    color: "from-accent to-accent-secondary",
    textColor: "text-accent",
    description: "End-to-end application development",
    graphic: "🌐",
    skills: [
      { 
        name: "WordPress", 
        level: 96, 
        years: 8, 
        specialty: "Custom Development",
        certifications: ["WordPress Expert", "WooCommerce Specialist"],
        projects: 90,
        trending: false,
        description: "Custom WordPress themes and plugins",
        graphic: "📝"
      },
      { 
        name: "Shopify", 
        level: 87, 
        years: 5, 
        specialty: "E-commerce",
        certifications: ["Shopify Partner"],
        projects: 35,
        trending: true,
        description: "Custom Shopify apps and theme development",
        graphic: "🛒"
      },
      { 
        name: "WooCommerce", 
        level: 91, 
        years: 6, 
        specialty: "Online Stores",
        certifications: ["WooCommerce Expert"],
        projects: 55,
        trending: false,
        description: "Custom e-commerce solutions",
        graphic: "💳"
      },
      { 
        name: "MERN Stack", 
        level: 86, 
        years: 4, 
        specialty: "Full Stack",
        certifications: ["Full Stack Developer"],
        projects: 20,
        trending: true,
        description: "MongoDB, Express, React, Node.js stack",
        graphic: "📚"
      }
    ]
  },
  devops: {
    title: "DevOps & Tools",
    icon: Settings,
    color: "from-accent-secondary to-accent",
    textColor: "text-accent-secondary",
    description: "Infrastructure and deployment automation",
    graphic: "🔧",
    skills: [
      { 
        name: "Docker", 
        level: 85, 
        years: 3, 
        specialty: "Containerization",
        certifications: ["Docker Certified"],
        projects: 25,
        trending: true,
        description: "Application containerization and deployment",
        graphic: "🐳"
      },
      { 
        name: "Git & GitHub", 
        level: 94, 
        years: 8, 
        specialty: "Version Control",
        certifications: ["Git Expert"],
        projects: 100,
        trending: false,
        description: "Version control and collaborative development",
        graphic: "🌿"
      },
      { 
        name: "AWS", 
        level: 82, 
        years: 3, 
        specialty: "Cloud Services",
        certifications: ["AWS Solutions Architect"],
        projects: 20,
        trending: true,
        description: "Amazon Web Services cloud platform",
        graphic: "☁️"
      },
      { 
        name: "Linux", 
        level: 83, 
        years: 6, 
        specialty: "System Administration",
        certifications: ["Linux Administrator"],
        projects: 50,
        trending: false,
        description: "Unix-like operating system administration",
        graphic: "🐧"
      }
    ]
  }
};

const ACHIEVEMENTS = [
  { icon: Trophy, value: "8+", label: "Years", color: "text-accent", description: "Professional experience", graphic: "🏆" },
  { icon: Code, value: "25+", label: "Technologies", color: "text-accent", description: "Mastered skills", graphic: "💻" },
  { icon: Briefcase, value: "150+", label: "Projects", color: "text-accent", description: "Completed successfully", graphic: "📁" },
  { icon: Star, value: "98%", label: "Success Rate", color: "text-accent", description: "Client satisfaction", graphic: "⭐" }
];

// Enhanced Skill Card Component with Graphics
const SkillCard = ({ skill, category, index, searchTerm, inView, isExpanded, onToggleExpand }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const skillInView = useInView(cardRef, { once: true, threshold: 0.1 });

  const isHighlighted = searchTerm && skill.name.toLowerCase().includes(searchTerm.toLowerCase());

  const getSkillLevel = () => {
    if (skill.level >= 90) return { label: "Expert", color: "text-accent", icon: Trophy };
    if (skill.level >= 80) return { label: "Advanced", color: "text-accent-secondary", icon: Star };
    if (skill.level >= 70) return { label: "Proficient", color: "text-neutral", icon: Target };
    return { label: "Intermediate", color: "text-neutral-dark", icon: Book };
  };

  const skillLevel = getSkillLevel();

  return (
    <motion.div
      ref={cardRef}
      className={`group relative card-design overflow-hidden hover:border-accent smooth-transition ${
        isHighlighted ? 'border-accent bg-card-dark' : ''
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
          <div className="flex items-center gap-1 bg-gradient-to-r from-accent-secondary to-accent text-black px-2 py-1 rounded-design text-xs font-bold">
            <Flame className="w-3 h-3" />
            <span>Hot</span>
          </div>
        </motion.div>
      )}

      <div className={`p-6 ${isExpanded ? 'h-full' : ''}`}>
        {/* Header with Graphics */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl">{skill.graphic}</div>
              <div>
                <h4 className="text-xl font-bold text-primary-text group-hover:text-accent smooth-transition">
                  {skill.name}
                </h4>
                <div className="flex items-center gap-2">
                  <skillLevel.icon className={`w-4 h-4 ${skillLevel.color}`} />
                  <span className={`caption-text ${skillLevel.color}`}>{skillLevel.label}</span>
                </div>
              </div>
            </div>
            <p className="body-text-small text-neutral">{skill.description}</p>
          </div>
          
          <button
            onClick={() => onToggleExpand(skill.name)}
            className="p-1 rounded-design hover:bg-card smooth-transition text-neutral hover:text-primary-text"
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${skill.name} details`}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Progress Bar with Enhanced Graphics */}
        <div className="relative mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`caption-text font-medium ${skillLevel.color}`}>{skillLevel.label}</span>
            <span className="text-primary-text font-bold caption-text">{skill.level}%</span>
          </div>
          <div className="w-full h-3 bg-card-dark rounded-design overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${category.color} rounded-design relative`}
              initial={{ width: 0 }}
              animate={skillInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-design"
                animate={isHovered ? { x: ['0%', '100%', '0%'] } : {}}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Basic Stats with Graphics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-3 bg-card-dark rounded-design border border-design">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Calendar className="w-3 h-3 text-accent" />
              <span className="text-primary-text font-bold caption-text">{skill.years}y</span>
            </div>
            <span className="text-xs text-neutral">Experience 📅</span>
          </div>
          <div className="text-center p-3 bg-card-dark rounded-design border border-design">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Briefcase className="w-3 h-3 text-accent" />
              <span className="text-primary-text font-bold caption-text">{skill.projects}</span>
            </div>
            <span className="text-xs text-neutral">Projects 🚀</span>
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
                <h5 className="caption-text font-semibold text-primary-text mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Specialty ✨
                </h5>
                <p className={`caption-text ${category.textColor} font-medium`}>{skill.specialty}</p>
              </div>

              {/* Certifications */}
              {skill.certifications.length > 0 && (
                <div>
                  <h5 className="caption-text font-semibold text-primary-text mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    Certifications 🏅
                  </h5>
                  <div className="space-y-1">
                    {skill.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-accent-secondary" />
                        <span className="caption-text text-neutral">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-card hover:bg-card-dark text-neutral px-3 py-2 rounded-design caption-text font-medium smooth-transition"
                  onClick={() => console.log('View projects for:', skill.name)}
                >
                  <Eye className="w-3 h-3" />
                  View Projects 👁️
                </button>
                <button
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-secondary text-black px-3 py-2 rounded-design caption-text font-medium smooth-transition"
                  onClick={() => console.log('Learn more about:', skill.name)}
                >
                  <ExternalLink className="w-3 h-3" />
                  Learn More 📖
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Enhanced Search and Filter Component
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
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral w-4 h-4" />
        <input
          type="text"
          placeholder="Search skills... 🔍"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-card border border-design rounded-design focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-primary-text placeholder-neutral"
          aria-label="Search skills"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral hover:text-primary-text"
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
          className={`inline-flex items-center gap-2 px-4 py-3 rounded-design font-medium caption-text smooth-transition ${
            showTrendingOnly
              ? 'bg-gradient-to-r from-accent-secondary to-accent text-black shadow-lg'
              : 'bg-card text-neutral border border-design hover:bg-card-dark'
          }`}
          aria-label={`${showTrendingOnly ? 'Show all' : 'Show trending'} skills`}
        >
          <Flame className="w-4 h-4" />
          <span>Trending 🔥</span>
        </button>

        <div className="hidden sm:flex items-center px-3 py-3 bg-card rounded-design border border-design caption-text text-neutral">
          <span>{filteredCount} of {totalSkills} skills 📊</span>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Skills Component with Graphics
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

  const currentCategory = SKILL_CATEGORIES[activeCategory];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section-padding bg-black relative overflow-hidden"
      aria-label="Technical skills and expertise"
    >
      {/* Enhanced Background Graphics */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-secondary opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/5 to-accent-secondary/5 rounded-full blur-3xl" />
      
      {/* Floating Graphics */}
      <div className="absolute top-20 left-20 text-4xl animate-bounce">💻</div>
      <div className="absolute top-40 right-20 text-3xl animate-pulse">⚡</div>
      <div className="absolute bottom-40 left-40 text-3xl animate-bounce">🚀</div>
      <div className="absolute bottom-20 right-40 text-3xl animate-pulse">🎯</div>

      <div className="container-design relative z-10">
        {/* Enhanced Header with Graphics */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Graphic */}
          <div className="text-6xl mb-6">🛠️</div>
          
          {/* Eyebrow Text */}
          <motion.span
            className="text-accent caption-text font-semibold tracking-wider uppercase mb-2 inline-block bg-card px-6 py-3 rounded-design border border-design"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            🔧 Technical Expertise 🔧
          </motion.span>
          
          <motion.h2 
            className="section-header text-primary-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Interactive <span className="text-accent">Skills Portfolio</span> 🎨
          </motion.h2>

          {/* Accent Line */}
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          <motion.p 
            className="body-text text-neutral max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Explore my comprehensive technical expertise across different domains. Search, filter, and dive deep into each skill to see certifications, project experience, and specializations. 🚀
          </motion.p>

          {/* Enhanced Achievement Stats with Graphics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7 }}
          >
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center p-6 card-design group hover:border-accent"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-3xl mb-2">{achievement.graphic}</div>
                <div className={`w-8 h-8 mx-auto mb-3 ${achievement.color} group-hover:scale-110 smooth-transition`}>
                  <achievement.icon className="w-full h-full" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary-text mb-2">{achievement.value}</div>
                <div className="caption-text font-medium text-neutral mb-1">{achievement.label}</div>
                <div className="text-xs text-neutral-dark opacity-0 group-hover:opacity-100 smooth-transition">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Guide with Graphics */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-card border border-accent text-accent px-4 py-2 rounded-design font-medium caption-text">
            <MousePointer className="w-4 h-4" />
            <span>👆 Click categories • 🔍 Search skills • 📖 Expand for details</span>
          </div>
        </motion.div>

        {/* Enhanced Category Navigation with Graphics */}
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
                className={`group relative inline-flex items-center gap-3 px-6 py-4 font-bold body-text-small smooth-transition rounded-design-lg ${
                  activeCategory === key 
                    ? `bg-gradient-to-r ${category.color} text-black shadow-lg scale-105` 
                    : 'bg-card text-neutral border border-design hover:bg-card-dark hover:border-accent hover:scale-102'
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
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-30 rounded-design-lg blur-sm`}></div>
                )}
                
                <div className="text-2xl relative z-10">{category.graphic}</div>
                
                <div className={`relative z-10 w-6 h-6 ${
                  activeCategory === key ? 'text-black' : category.textColor
                } smooth-transition`}>
                  <category.icon className="w-full h-full" />
                </div>
                
                <div className="relative z-10 text-left">
                  <div className="font-bold">{category.title}</div>
                  <div className="text-xs opacity-80">{category.description}</div>
                </div>

                <span className={`relative z-10 px-2 py-1 rounded-design caption-text font-bold ${
                  activeCategory === key 
                    ? 'bg-black/20 text-black' 
                    : 'bg-card-dark text-neutral'
                }`}>
                  {category.skills.length}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          showTrendingOnly={showTrendingOnly}
          onToggleTrending={() => setShowTrendingOnly(!showTrendingOnly)}
          totalSkills={totalSkillsCount}
          filteredCount={filteredSkills.length}
        />

        {/* Enhanced Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeCategory}-${searchTerm}-${showTrendingOnly}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                <div className="text-6xl mb-4">🔍</div>
                <div className="w-16 h-16 mx-auto mb-4 bg-card rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-neutral" />
                </div>
                <h3 className="text-xl font-semibold text-neutral mb-2">No skills found 😔</h3>
                <p className="text-neutral-dark mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setShowTrendingOnly(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-black rounded-design hover:bg-accent-secondary smooth-transition"
                >
                  <X className="w-4 h-4" />
                  Clear filters 🧹
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced CTA Section with Graphics */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="bg-accent rounded-design-lg p-12 text-black shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-black rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-black/50 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            {/* Background Graphics */}
            <div className="absolute top-4 right-4 text-2xl animate-bounce">🚀</div>
            <div className="absolute bottom-4 left-4 text-2xl animate-pulse">💡</div>
            <div className="absolute top-4 left-4 text-xl animate-bounce">⚡</div>
            <div className="absolute bottom-4 right-4 text-xl animate-pulse">🎯</div>

            <div className="relative z-10">
              <div className="text-5xl mb-6">🤝</div>
              
              <h3 className="section-header text-black mb-4">
                Ready to Leverage These Skills? 💪
              </h3>
              <p className="body-text text-black/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's combine these technical expertise to create innovative solutions for your business. 
                From concept to deployment, I'll bring your vision to life. 🌟
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="bg-black hover:bg-black/90 text-accent font-semibold py-4 px-8 rounded-design shadow-lg hover:shadow-xl smooth-transition inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start a project with me"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Project 🚀</span>
                </motion.a>

                <motion.a
                  href="#projects"
                  className="bg-black/10 backdrop-blur-sm border border-black/30 hover:bg-black/20 text-black font-semibold py-4 px-8 rounded-design smooth-transition inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View my project portfolio"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Portfolio 👁️</span>
                </motion.a>
              </div>

              {/* Skills Summary with Graphics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-black/20">
                {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl mb-1">{category.graphic}</div>
                    <div className="text-2xl font-bold mb-1">{category.skills.length}</div>
                    <div className="text-black/80 caption-text">{category.title}</div>
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
