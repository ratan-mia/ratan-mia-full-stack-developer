'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Code,
  Eye,
  Filter,
  Flame,
  Globe,
  Mail,
  Search,
  Server,
  Settings,
  Star,
  Target,
  Terminal,
  TrendingUp,
  Trophy,
  User
} from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

// Enhanced Skills Data with more detailed information
const SKILL_CATEGORIES = {
  frontend: {
    title: "FRONTEND MASTERY",
    subtitle: "Creating Beautiful Interfaces",
    icon: Code,
    gradient: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    description: "Crafting pixel-perfect, responsive user interfaces with modern frameworks and cutting-edge technologies.",
    skills: [
      { name: "React.js", level: 95, trending: true, experience: "5+ years", projects: 50 },
      { name: "Next.js", level: 92, trending: true, experience: "3+ years", projects: 25 },
      { name: "TypeScript", level: 88, trending: true, experience: "4+ years", projects: 40 },
      { name: "Tailwind CSS", level: 93, trending: true, experience: "3+ years", projects: 60 },
      { name: "Framer Motion", level: 87, trending: true, experience: "2+ years", projects: 30 },
      { name: "JavaScript ES6+", level: 95, trending: false, experience: "8+ years", projects: 100 }
    ]
  },
  backend: {
    title: "BACKEND EXPERTISE", 
    subtitle: "Scalable Server Solutions",
    icon: Server,
    gradient: "from-blue-500 to-violet-600",
    textColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Building robust, secure, and high-performance server-side applications with modern architectures.",
    skills: [
      { name: "PHP & Laravel", level: 92, trending: false, experience: "6+ years", projects: "45+" },
      { name: "Node.js", level: 85, trending: true, experience: "4+ years", projects: "30+" },
      { name: "RESTful APIs", level: 93, trending: false, experience: "6+ years", projects: "80+" },
      { name: "MySQL", level: 88, trending: false, experience: "7+ years", projects: "70+" },
      { name: "GraphQL", level: 78, trending: true, experience: "2+ years", projects: "15+" },
      { name: "Redis", level: 82, trending: true, experience: "3+ years", projects: "20+" }
    ]
  },
  fullstack: {
    title: "FULL STACK SOLUTIONS",
    subtitle: "End-to-End Development",
    icon: Globe,
    gradient: "from-violet-600 to-purple-500",
    textColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    description: "Delivering complete web solutions from database design to user interface implementation.",
    skills: [
      { name: "MERN Stack", level: 86, trending: true, experience: "3+ years", projects: "20+" },
      { name: "WordPress", level: 96, trending: false, experience: "8+ years", projects: "100+" },
      { name: "Shopify", level: 87, trending: true, experience: "4+ years", projects: "35+" },
      { name: "WooCommerce", level: 91, trending: false, experience: "5+ years", projects: "40+" },
      { name: "JAMstack", level: 83, trending: true, experience: "2+ years", projects: "15+" },
      { name: "Headless CMS", level: 88, trending: true, experience: "3+ years", projects: "25+" }
    ]
  },
  devops: {
    title: "DEVOPS & TOOLS",
    subtitle: "Infrastructure & Automation",
    icon: Settings,
    gradient: "from-orange-500 to-red-500", 
    textColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    description: "Streamlining deployment workflows and managing cloud infrastructure for optimal performance.",
    skills: [
      { name: "Docker", level: 85, trending: true, experience: "3+ years", projects: "25+" },
      { name: "AWS", level: 82, trending: true, experience: "4+ years", projects: "30+" },
      { name: "Git & GitHub", level: 94, trending: false, experience: "8+ years", projects: "150+" },
      { name: "CI/CD", level: 78, trending: true, experience: "2+ years", projects: "20+" },
      { name: "Linux", level: 83, trending: false, experience: "6+ years", projects: "50+" },
      { name: "Digital Ocean", level: 86, trending: false, experience: "5+ years", projects: "40+" }
    ]
  }
};

// Enhanced achievements with more context
const ACHIEVEMENTS = [
  { 
    icon: Trophy, 
    value: "8+", 
    label: "YEARS EXPERIENCE", 
    description: "Professional development journey",
    color: "text-cyan-400",
    gradient: "from-cyan-500 to-blue-500"
  },
  { 
    icon: Code, 
    value: "25+", 
    label: "TECHNOLOGIES", 
    description: "Mastered frameworks & tools",
    color: "text-blue-400",
    gradient: "from-blue-500 to-violet-600"
  },
  { 
    icon: Briefcase, 
    value: "150+", 
    label: "PROJECTS DELIVERED", 
    description: "Successful completions",
    color: "text-violet-400",
    gradient: "from-violet-600 to-purple-500"
  },
  { 
    icon: Star, 
    value: "98%", 
    label: "CLIENT SATISFACTION", 
    description: "Happy clients rating",
    color: "text-orange-400",
    gradient: "from-orange-500 to-red-500"
  }
];

// Enhanced Skill Card Component
const SkillCard = ({ skill, category, index, isInView, isDetailed = false }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setShowDetails(true)}
      onHoverEnd={() => setShowDetails(false)}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
              <span className="text-white font-black text-lg">{skill.name.charAt(0)}</span>
            </div>
            <div>
              <h4 className="font-black text-white uppercase tracking-tight">{skill.name}</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider">{skill.experience}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {skill.trending && (
              <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                <Flame className="w-3 h-3 text-orange-400" />
                <span className="text-xs font-bold text-orange-400 uppercase">HOT</span>
              </div>
            )}
            <div className={`px-2 py-1 ${category.bgColor} ${category.borderColor} border rounded-full`}>
              <span className={`text-xs font-bold ${category.textColor} uppercase`}>{skill.level}%</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
            />
          </div>
        </div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: showDetails ? 1 : 0, 
            height: showDetails ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-slate-700">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-400 uppercase tracking-wider">PROJECTS:</span>
                <p className="text-white font-bold">{skill.projects}</p>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider">LEVEL:</span>
                <p className="text-white font-bold">{skill.level > 90 ? 'Expert' : skill.level > 75 ? 'Advanced' : 'Intermediate'}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Category Card Component
const CategoryCard = ({ category, categoryKey, isActive, onClick, index, isInView }) => {
  return (
    <motion.button
      onClick={() => onClick(categoryKey)}
      className={`group relative p-6 rounded-2xl border transition-all duration-300 text-left w-full ${
        isActive 
          ? `bg-gradient-to-br ${category.gradient} text-white border-white/20` 
          : 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-slate-300 hover:border-cyan-500/50'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect for inactive cards */}
      {!isActive && (
        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
      )}
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
            isActive ? 'bg-white/20' : `bg-gradient-to-r ${category.gradient}`
          }`}>
            <category.icon className={`w-7 h-7 ${isActive ? 'text-white' : 'text-white'}`} />
          </div>
          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
            isActive ? 'text-white rotate-90' : 'text-slate-400 group-hover:translate-x-1'
          }`} />
        </div>
        
        <h3 className={`text-lg font-black mb-2 uppercase tracking-tight ${
          isActive ? 'text-white' : 'text-white'
        }`}>
          {category.title}
        </h3>
        
        <p className={`text-sm mb-4 uppercase tracking-wider font-medium ${
          isActive ? 'text-white/80' : 'text-slate-400'
        }`}>
          {category.subtitle}
        </p>
        
        <p className={`text-sm leading-relaxed ${
          isActive ? 'text-white/70' : 'text-slate-400'
        }`}>
          {category.description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className={`text-xs uppercase tracking-wider font-bold ${
              isActive ? 'text-white/80' : 'text-slate-400'
            }`}>
              {category.skills.length} SKILLS
            </span>
            <div className="flex gap-1">
              {category.skills.slice(0, 3).map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-white/40' : `bg-gradient-to-r ${category.gradient}`
                  }`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

// Search and Filter Component
const SkillsFilter = ({ searchTerm, onSearchChange, activeCategory, categories, onCategoryChange }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400"
        />
      </div>
      
      {/* Quick Filters */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 text-sm font-medium uppercase tracking-wider">
          <Filter className="w-4 h-4 inline mr-2" />
          ALL
        </button>
        <button className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:text-orange-400 hover:border-orange-500 transition-all duration-300 text-sm font-medium uppercase tracking-wider">
          <Flame className="w-4 h-4 inline mr-2" />
          TRENDING
        </button>
      </div>
    </div>
  );
};

// Main Skills Component
const Skills = () => {
  const sectionRef = useRef(null);
  const achievementsRef = useRef(null);
  const categoriesRef = useRef(null);
  const skillsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const achievementsInView = useInView(achievementsRef, { once: true, threshold: 0.1 });
  const categoriesInView = useInView(categoriesRef, { once: true, threshold: 0.1 });
  const skillsInView = useInView(skillsRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.1 });
  
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [searchTerm, setSearchTerm] = useState('');

  const currentSkills = useMemo(() => {
    const skills = SKILL_CATEGORIES[activeCategory].skills;
    if (!searchTerm) return skills;
    return skills.filter(skill => 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm]);

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
        id="skills" 
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
        aria-label="Technical skills and expertise"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-violet-600/5 to-orange-500/5 rounded-full blur-3xl"></div>
          
          {/* Geometric Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Enhanced Header */}
            <motion.div
              className="max-w-4xl mx-auto text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">TECHNICAL EXPERTISE</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                SKILLS & TECHNOLOGIES
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                A comprehensive showcase of my technical expertise across modern web development technologies, 
                frameworks, and tools that power today's digital experiences.
              </p>

              {/* Code Bracket Element */}
              <div className="text-cyan-500 font-mono text-3xl mb-8">&lt;Skills/&gt;</div>
              
              {/* Decorative Line */}
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full max-w-md mx-auto"></div>
            </motion.div>

            {/* Enhanced Achievement Stats */}
            <motion.div 
              ref={achievementsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20"
              variants={containerVariants}
              initial="hidden"
              animate={achievementsInView ? "visible" : "hidden"}
            >
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3 uppercase tracking-tight">{achievement.value}</div>
                  <div className="text-sm text-cyan-400 uppercase tracking-wider font-bold mb-2">{achievement.label}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{achievement.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Category Selection */}
            <motion.div
              ref={categoriesRef}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  CHOOSE YOUR DOMAIN
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Explore my expertise across different areas of web development and technology.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(SKILL_CATEGORIES).map(([key, category], index) => (
                  <CategoryCard
                    key={key}
                    category={category}
                    categoryKey={key}
                    isActive={activeCategory === key}
                    onClick={setActiveCategory}
                    index={index}
                    isInView={categoriesInView}
                  />
                ))}
              </div>
            </motion.div>

            {/* Skills Display */}
            <motion.div
              ref={skillsRef}
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Current Category Header */}
              <div className="text-center mb-12">
                {(() => {
                  const Icon = SKILL_CATEGORIES[activeCategory].icon;
                  return (
                    <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${SKILL_CATEGORIES[activeCategory].gradient} rounded-2xl mb-6`}>
                      <Icon className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">
                        {SKILL_CATEGORIES[activeCategory].title}
                      </h3>
                    </div>
                  );
                })()}
                <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {SKILL_CATEGORIES[activeCategory].description}
                </p>
              </div>

              {/* Search and Filter */}
              <SkillsFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                activeCategory={activeCategory}
                categories={SKILL_CATEGORIES}
                onCategoryChange={setActiveCategory}
              />

              {/* Skills Grid */}
              <motion.div 
                key={activeCategory}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentSkills.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    category={SKILL_CATEGORIES[activeCategory]} 
                    index={index} 
                    isInView={skillsInView}
                    isDetailed={true}
                  />
                ))}
              </motion.div>

              {/* No Results */}
              {currentSkills.length === 0 && (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">NO SKILLS FOUND</h3>
                  <p className="text-slate-400 mb-6">Try adjusting your search terms or browse different categories.</p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                  >
                    CLEAR SEARCH
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Decorative Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mb-20"></div>

            {/* Enhanced CTA Section */}
            <motion.div
              ref={ctaRef}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 lg:p-16 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                
                <div className="relative z-10">
                  <Terminal className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
                  
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    LET'S BUILD SOMETHING AMAZING
                  </h3>
                  
                  <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Ready to bring your ideas to life? Let's discuss how my expertise can help transform 
                    your vision into a powerful digital solution that drives results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                      <Mail className="w-5 h-5" />
                      <span>START A PROJECT</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                      <Eye className="w-5 h-5" />
                      <span>VIEW PORTFOLIO</span>
                    </button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="text-center">
                      <User className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <h4 className="font-bold text-white uppercase tracking-tight">150+ HAPPY CLIENTS</h4>
                      <p className="text-sm text-slate-400">Across 25+ countries</p>
                    </div>
                    <div className="text-center">
                      <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <h4 className="font-bold text-white uppercase tracking-tight">98% SUCCESS RATE</h4>
                      <p className="text-sm text-slate-400">Projects delivered on time</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                      <h4 className="font-bold text-white uppercase tracking-tight">200% AVG GROWTH</h4>
                      <p className="text-sm text-slate-400">Client business improvement</p>
                    </div>
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

export default Skills;
