'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  ExternalLink,
  Eye,
  Filter,
  Globe,
  Plus,
  Search,
  Star,
  Target,
  TrendingUp,
  Users2,
  X,
  Zap
} from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';

// Constants
const PROJECTS_PER_PAGE = 6;
const IMAGE_PLACEHOLDER_API = 'https://placehold.co/800x600/e2e8f0/94a3b8?text=';

// Project Data
const PROJECT_DATA = [
  {
    id: 1,
    title: "Elf Bangladesh - Asian Petroleum",
    subtitle: "Modern Digital Platform for Global Lubricant Brand",
    description: "Complete digital presence for Elf Bangladesh using Next.js, Tailwind CSS, Zoho CRM, WhatsApp Business API, Strapi CMS, and Facebook Pixel. Built with performance and conversion optimization in mind.",
    tech: ["Next.js", "Tailwind CSS", "Zoho CRM", "WhatsApp API", "Strapi CMS", "Facebook Pixel"],
    category: "web-development",
    link: "https://asian-petroleum.com/",
    mockupImage: "/images/projects/elf-apl-mockup.jpg",
    status: "Live",
    gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    accentColor: "emerald",
    year: "2024",
    client: "Asian Petroleum Limited",
    duration: "3 months",
    results: ["85% Conversion Rate Increase", "Automated Sales Pipeline", "300% User Engagement Boost"],
    devices: ["desktop", "mobile"], 
    tags: ["Featured", "Full-Stack", "CRM Integration"],
    metrics: { conversion: "85%", performance: "97%", satisfaction: "98%" },
    featured: true,
    priority: 1
  },
  {
    id: 2,
    title: "Chery Bangladesh",
    subtitle: "Automotive Excellence Platform",
    description: "Official automotive website featuring an immersive 360° car viewer and achieving 97% PageSpeed optimization. Revolutionary customer experience with virtual showroom capabilities.",
    tech: ["Next.js", "React.js", "CRM Integration", "Facebook Pixel", "360° Viewer"],
    category: "web-development",
    link: "https://www.cherybd.com",
    mockupImage: "/images/projects/cherybd-mockup.png", 
    status: "Live",
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    accentColor: "blue",
    year: "2023",
    client: "Chery Bangladesh",
    duration: "3 months",
    results: ["97% PageSpeed Score", "200% Sales Increase", "50% Bounce Rate Reduction"],
    devices: ["desktop", "mobile"],
    tags: ["Featured", "E-commerce", "Automotive"],
    metrics: { conversion: "200%", performance: "97%", satisfaction: "96%" },
    featured: true,
    priority: 2
  },
  {
    id: 3,
    title: "Car Parts E-commerce",
    subtitle: "Advanced Auto Parts Platform",
    description: "Comprehensive e-commerce platform with intelligent make/model/year specification system. Advanced inventory management and real-time pricing integration.",
    tech: ["React.js", "PHP", "API Integration", "WhatsApp API", "MySQL"],
    category: "ecommerce",
    link: "https://japanparts.com.bd",
    mockupImage: "/images/projects/japan-parts-mockup.png",
    status: "Live",
    gradient: "from-green-600 via-green-700 to-teal-800",
    accentColor: "green",
    year: "2023",
    client: "Japan Parts Ltd",
    duration: "4 months",
    results: ["300% Order Volume Increase", "85% Customer Satisfaction", "60% Operational Cost Reduction"],
    devices: ["desktop", "tablet"],
    tags: ["E-commerce", "API Integration", "B2B"],
    metrics: { conversion: "300%", performance: "94%", satisfaction: "85%" },
    featured: false,
    priority: 3
  },
  {
    id: 4,
    title: "ELF International",
    subtitle: "Rebranding and E-commerce",
    description: "High-converting e-commerce platform showcasing premium lubricant products with modern design principles. Advanced product configurator and real-time inventory management.",
    tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO", "Product Configurator"],
    category: "ecommerce",
    link: "https://elf-bangladesh.vercel.app",
    mockupImage: "/images/projects/elf-international-mockup.png",
    status: "Live",
    gradient: "from-pink-600 via-rose-700 to-red-800",
    accentColor: "pink",
    year: "2024",
    client: "ELF Bangladesh",
    duration: "2 months",
    results: ["150% Conversion Rate", "40% Cart Recovery", "95% PageSpeed Score"],
    devices: ["desktop", "mobile"],
    tags: ["Featured", "E-commerce", "Premium"],
    metrics: { conversion: "150%", performance: "95%", satisfaction: "94%" },
    featured: true,
    priority: 4
  },
  {
    id: 5,
    title: "OpenAI Counselling Chatbot",
    subtitle: "AI-Powered Mental Health Platform",
    description: "Revolutionary WordPress plugin integrating ChatGPT and OpenAI APIs with advanced Text-to-Speech functionality. 24/7 mental health support with personalized responses.",
    tech: ["WordPress", "OpenAI API", "Text-to-Speech", "ChatGPT", "PHP"],
    category: "ai-integration",
    link: null,
    mockupImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop",
    status: "Development",
    gradient: "from-purple-600 via-indigo-700 to-blue-800",
    accentColor: "purple",
    year: "2024",
    client: "Healthcare Provider",
    duration: "6 months",
    results: ["24/7 Support Available", "70% Efficiency Improvement", "500+ Active Users"],
    devices: ["desktop", "tablet"],
    tags: ["AI", "Healthcare", "Innovation"],
    metrics: { conversion: "70%", performance: "92%", satisfaction: "89%" },
    featured: true,
    priority: 5
  },
  {
    id: 6,
    title: "CWL Detailing Web",
    subtitle: "Professional Auto Detailing Services",
    description: "Modern service business website leveraging React.js and Tailwind CSS with intuitive UI/UX. Integrated booking system and customer management portal.",
    tech: ["React.js", "Tailwind CSS", "Responsive Design", "Booking System"],
    category: "web-development",
    link: "https://cwl-detailing-web.vercel.app",
    mockupImage: null,
    status: "Live",
    gradient: "from-orange-600 via-red-600 to-red-800",
    accentColor: "orange",
    year: "2023",
    client: "CWL Detailing",
    duration: "1.5 months",
    results: ["200% Booking Increase", "90% Mobile Score", "45% Lead Growth"],
    devices: ["mobile", "tablet"],
    tags: ["Service Business", "Mobile-First", "Booking"],
    metrics: { conversion: "200%", performance: "90%", satisfaction: "92%" },
    featured: false,
    priority: 6
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects', icon: Globe, count: PROJECT_DATA.length },
  { id: 'web-development', label: 'Web Development', icon: Code2, count: PROJECT_DATA.filter(p => p.category === 'web-development').length },
  { id: 'ecommerce', label: 'E-commerce', icon: TrendingUp, count: PROJECT_DATA.filter(p => p.category === 'ecommerce').length },
  { id: 'ai-integration', label: 'AI Integration', icon: Zap, count: PROJECT_DATA.filter(p => p.category === 'ai-integration').length },
  { id: 'custom-development', label: 'Custom Development', icon: Target, count: PROJECT_DATA.filter(p => p.category === 'custom-development').length }
];

// Utility Functions
const generatePlaceholderUrl = (title) => {
  const encodedTitle = encodeURIComponent(title.slice(0, 20));
  return `${IMAGE_PLACEHOLDER_API}${encodedTitle}`;
};

const getStatusConfig = (status) => {
  const configs = {
    'Live': { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-400', border: 'border-green-200' },
    'Development': { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-400', border: 'border-yellow-200' },
    'Maintenance': { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-400', border: 'border-blue-200' }
  };
  return configs[status] || configs['Live'];
};

// Components
const ProjectImage = ({ project, onLoad, onError }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  }, [onError]);

  const imageSrc = useMemo(() => {
    if (hasError || !project.mockupImage) {
      return generatePlaceholderUrl(project.title);
    }
    return project.mockupImage;
  }, [hasError, project.mockupImage, project.title]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
      <img
        src={imageSrc}
        alt={`${project.title} project preview`}
        className={`w-full h-full object-cover transition-all duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } group-hover:scale-105`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 });

  const statusConfig = getStatusConfig(project.status);

  const handleCardClick = useCallback(() => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  }, [project.link]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  }, [handleCardClick]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cardRef}
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      onKeyDown={handleKeyPress}
      tabIndex={project.link ? 0 : -1}
      role={project.link ? "button" : "article"}
      aria-label={project.link ? `Visit ${project.title} website` : `View ${project.title} project details`}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <ProjectImage 
          project={project} 
          onLoad={() => setImageLoaded(true)}
        />

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && imageLoaded && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 backdrop-blur-sm flex flex-col items-center justify-center text-white z-10 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                {project.link ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Globe className="w-12 h-12 mx-auto mb-4 text-green-400" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <div className="text-xs bg-white/20 px-3 py-1.5 rounded-full mb-4 font-mono">
                      {project.link.replace(/^https?:\/\//, '').slice(0, 30)}...
                    </div>
                    <motion.div
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-300 mb-4">
                      Custom solution for {project.client}
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
                      <Code2 className="w-4 h-4" />
                      Custom Development
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${statusConfig.bg} ${statusConfig.text} text-xs font-semibold uppercase tracking-wider border ${statusConfig.border}`}>
            <motion.span 
              className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {project.status}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1.5 rounded-full text-xs font-bold border border-white/50">
            {project.year}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute bottom-3 left-3 z-20">
            <motion.span 
              className="inline-flex items-center gap-1.5 bg-yellow-400/90 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3" />
              Featured
            </motion.span>
          </div>
        )}

        {/* Live Indicator */}
        <div className="absolute bottom-3 right-3 z-20">
          {project.link ? (
            <div className="flex items-center gap-1.5 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Live
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-blue-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
              <Code2 className="w-3 h-3" />
              Custom
            </div>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-blue-600 font-semibold text-sm mb-3">{project.subtitle}</p>
          
          {/* Client Info */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Users2 className="w-3 h-3" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Clock className="w-3 h-3" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  tag === 'Featured' 
                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech, i) => (
              <motion.span 
                key={i} 
                className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium border border-blue-200 hover:bg-blue-200 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium border border-gray-200">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <div className="grid grid-cols-1 gap-2">
            {project.results.slice(0, 2).map((result, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-2 text-xs text-slate-600"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span>{result}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-sm font-bold text-blue-600">{project.metrics.conversion}</div>
              <div className="text-xs text-slate-600">Growth</div>
            </div>
            <div>
              <div className="text-sm font-bold text-green-600">{project.metrics.performance}</div>
              <div className="text-xs text-slate-600">Score</div>
            </div>
            <div>
              <div className="text-sm font-bold text-purple-600">{project.metrics.satisfaction}</div>
              <div className="text-xs text-slate-600">Rating</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          {project.link ? (
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg text-sm shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </motion.div>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-sm shadow-lg">
              <Code2 className="w-4 h-4" />
              <span>Custom Project</span>
            </div>
          )}
          <motion.button 
            type="button"
            className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-200 text-sm"
            whileHover={{ x: 5 }}
            onClick={(e) => {
              e.stopPropagation();
              console.log('View case study for:', project.title);
            }}
            aria-label={`View case study for ${project.title}`}
          >
            Case Study
            <ChevronRight className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const SearchAndFilter = ({ searchTerm, onSearchChange, activeFilter, onFilterChange, totalResults }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      {/* Search */}
      <div className="relative flex-1 max-w-md mx-auto sm:mx-0">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          aria-label="Search projects"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Toggle (Mobile) */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl font-medium text-sm"
        >
          <Filter className="w-4 h-4" />
          Filter ({totalResults})
          <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Results Count */}
      <div className="hidden sm:flex items-center px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 text-sm text-slate-600">
        <span className="font-medium">{totalResults} projects found</span>
      </div>

      {/* Filter Categories (Mobile Dropdown) - FIXED */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="sm:hidden flex flex-wrap gap-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onFilterChange(category.id);
                  setIsFilterOpen(false);
                }}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white border border-white/50'
                }`}
              >
                <category.icon className="w-3 h-3" />
                <span>{category.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${
                  activeFilter === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CategoryFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <motion.div 
      className="hidden sm:flex flex-wrap justify-center gap-3 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {CATEGORIES.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
            activeFilter === category.id
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
              : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-800 border border-white/50 hover:shadow-md'
          }`}
          whileHover={{ scale: activeFilter === category.id ? 1.05 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Filter by ${category.label}`}
        >
          <category.icon className="w-4 h-4" />
          <span>{category.label}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
            activeFilter === category.id 
              ? 'bg-white/20 text-white' 
              : 'bg-slate-200 text-slate-600'
          }`}>
            {category.count}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

// Main Projects Component
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Memoized filtered projects
  const filteredProjects = useMemo(() => {
    let projects = activeFilter === 'all' 
      ? PROJECT_DATA 
      : PROJECT_DATA.filter(project => project.category === activeFilter);

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      projects = projects.filter(project => 
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.tech.some(tech => tech.toLowerCase().includes(term)) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    return projects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.priority - b.priority;
    });
  }, [activeFilter, searchTerm]);

  const visibleFilteredProjects = useMemo(() => 
    filteredProjects.slice(0, visibleProjects), 
    [filteredProjects, visibleProjects]
  );

  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const handleLoadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => Math.min(prev + PROJECTS_PER_PAGE, filteredProjects.length));
      setIsLoading(false);
    }, 800);
  }, [filteredProjects.length]);

  const handleFilterChange = useCallback((newFilter) => {
    setActiveFilter(newFilter);
    setVisibleProjects(PROJECTS_PER_PAGE);
    setSearchTerm('');
  }, []);

  const handleSearchChange = useCallback((term) => {
    setSearchTerm(term);
    setVisibleProjects(PROJECTS_PER_PAGE);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      aria-label="Portfolio projects section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -25, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-6 border border-white/50"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">Portfolio Showcase</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-8"
          >
            Discover innovative solutions that drive business growth through cutting-edge technology and exceptional user experiences.
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projects', icon: Award },
              { number: '97%', label: 'Performance', icon: Zap },
              { number: '15+', label: 'Industries', icon: Target },
              { number: '200%', label: 'ROI Increase', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 group hover:bg-white/80 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" />
                <div className="text-xl md:text-2xl font-black text-blue-600 mb-1">{stat.number}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          totalResults={filteredProjects.length}
        />

        {/* Category Filters */}
        <CategoryFilters
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16"
          layout
        >
          <AnimatePresence mode="popLayout">
            {visibleFilteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={true}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Load More */}
        {hasMoreProjects && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Load more projects"
            >
              {isLoading ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  <span>Load More Projects</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </motion.button>
            <p className="text-slate-600 mt-3 text-sm">
              Showing {visibleFilteredProjects.length} of {filteredProjects.length} projects
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                Ready To Create Your Success Story?
              </h3>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Join satisfied clients who've transformed their business with innovative web solutions. Let's discuss your project and bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button
                  type="button"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg rounded-xl shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start your project with us"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  type="button"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-base md:text-lg border-2 border-white/30 rounded-xl hover:bg-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Schedule a consultation"
                >
                  <span>Book Consultation</span>
                  <Calendar className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                {[
                  { number: '100%', label: 'Success Rate' },
                  { number: '24/7', label: 'Support' },
                  { number: '30+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">{stat.number}</div>
                    <div className="text-blue-200 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
