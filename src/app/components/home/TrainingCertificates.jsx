'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  Database,
  Download,
  ExternalLink,
  Eye,
  Globe,
  GraduationCap,
  Heart,
  Layers,
  MapPin,
  Monitor,
  Rocket,
  Search,
  Server,
  Shield,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  X
} from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';

// Constants
const EDUCATION_DATA = {
  degree: "Bachelor of Arts (English)",
  institution: "University of Dhaka",
  period: "2011 – 2017",
  location: "Dhaka, Bangladesh",
  gpa: "3.8/4.0",
  description: "Enhanced communication and critical thinking skills essential for technical documentation, client interaction, and cross-functional collaboration in technology teams.",
  achievements: [
    "Enhanced communication abilities for technical documentation",
    "Developed analytical and critical thinking capabilities", 
    "Built foundation for technical writing and documentation",
    "Improved client interaction and presentation skills",
    "Strengthened research and problem-solving methodologies",
    "Cultural and linguistic competency development"
  ],
  coursework: ["Technical Writing", "Research Methodology", "Critical Analysis", "Communication Skills"],
  icon: GraduationCap,
  gradient: "from-blue-600 to-indigo-600"
};

const AWARDS_DATA = [
  {
    id: 1,
    title: "Junior Scholarship",
    organization: "Dhaka Education Board",
    date: "September 2008",
    description: "Secured top position demonstrating academic excellence and commitment to continuous learning throughout educational journey.",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    category: "academic",
    rank: "Top 5%",
    impact: "Academic Excellence Recognition"
  }
];

const CERTIFICATES_DATA = [
  {
    id: 1,
    title: "Complete React.js Development Bootcamp",
    provider: "Udemy",
    instructor: "Jonas Schmedtmann",
    category: "frontend",
    skills: ["React.js", "Redux", "Context API", "Hooks", "JSX", "Component Architecture"],
    description: "Comprehensive React course covering fundamentals to advanced concepts including state management, performance optimization, and modern React patterns.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    level: "Advanced",
    duration: "40 hours",
    completionDate: "2023-08-15",
    certificateUrl: "#",
    featured: true,
    rating: 4.8,
    students: "180K+",
    credibility: "Industry Recognized",
    projects: 5,
    verificationId: "UC-12345678",
    skills_gained: [
      "Component-based architecture",
      "State management with Redux",
      "React Hooks mastery",
      "Performance optimization",
      "Testing with Jest"
    ]
  },
  {
    id: 2,
    title: "Modern JavaScript ES6+ Complete Guide",
    provider: "Udemy",
    instructor: "Jonas Schmedtmann",
    category: "frontend",
    skills: ["JavaScript ES6+", "Async/Await", "Promises", "Modules", "Classes"],
    description: "Modern ES6+ features essential for React development and contemporary web application building with advanced JavaScript concepts.",
    icon: Code,
    gradient: "from-yellow-500 to-orange-500",
    level: "Intermediate",
    duration: "28 hours",
    completionDate: "2023-06-20",
    certificateUrl: "#",
    featured: false,
    rating: 4.7,
    students: "250K+",
    credibility: "Industry Recognized",
    projects: 8,
    verificationId: "UC-87654321",
    skills_gained: [
      "ES6+ syntax mastery",
      "Asynchronous programming",
      "Module system",
      "Modern JavaScript patterns",
      "Browser APIs"
    ]
  },
  {
    id: 3,
    title: "Advanced PHP Debugging & Optimization",
    provider: "LinkedIn Learning",
    instructor: "David Powers",
    category: "backend",
    skills: ["PHP", "Debugging", "Xdebug", "Performance Optimization"],
    description: "Advanced debugging techniques for PHP applications including profiling, error handling, and performance optimization strategies.",
    icon: Server,
    gradient: "from-purple-500 to-indigo-500",
    level: "Advanced",
    duration: "3.5 hours",
    completionDate: "2023-04-10",
    certificateUrl: "#",
    featured: false,
    rating: 4.6,
    students: "45K+",
    credibility: "Professional",
    projects: 2,
    verificationId: "LL-PHP-DEBUG",
    skills_gained: [
      "Advanced debugging techniques",
      "Performance profiling",
      "Error handling strategies",
      "Code optimization",
      "Testing methodologies"
    ]
  },
  {
    id: 4,
    title: "PHP & MySQL Complete Development Course",
    provider: "Udemy",
    instructor: "Edwin Diaz",
    category: "backend",
    skills: ["PHP", "MySQL", "CRUD Operations", "Database Design", "Security"],
    description: "Complete guide to database-driven applications with secure coding practices, advanced SQL, and modern PHP development patterns.",
    icon: Database,
    gradient: "from-green-500 to-teal-500",
    level: "Complete",
    duration: "42 hours",
    completionDate: "2022-11-15",
    certificateUrl: "#",
    featured: true,
    rating: 4.5,
    students: "120K+",
    credibility: "Industry Recognized",
    projects: 12,
    verificationId: "UC-PHP-MYSQL",
    skills_gained: [
      "Database design principles",
      "Advanced SQL queries",
      "Secure coding practices",
      "API development",
      "Authentication systems"
    ]
  },
  {
    id: 5,
    title: "Node.js & Express.js Professional Development",
    provider: "IBM",
    instructor: "IBM Skills Network",
    category: "backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Authentication"],
    description: "Professional backend development with Node.js covering scalable architecture, security best practices, and production deployment.",
    icon: Server,
    gradient: "from-green-600 to-blue-600",
    level: "Professional",
    duration: "24 hours",
    completionDate: "2023-03-22",
    certificateUrl: "#",
    featured: true,
    rating: 4.7,
    students: "85K+",
    credibility: "IBM Certified",
    projects: 6,
    verificationId: "IBM-NODE-2023",
    skills_gained: [
      "Scalable API development",
      "Database integration",
      "Security implementation",
      "Testing strategies",
      "Deployment practices"
    ]
  },
  {
    id: 6,
    title: "Docker Containerization Masterclass",
    provider: "Udemy",
    instructor: "Stephen Grider",
    category: "devops",
    skills: ["Docker", "Containerization", "Docker Compose", "Kubernetes Basics"],
    description: "Comprehensive containerization course covering Docker fundamentals, multi-container applications, and orchestration basics.",
    icon: Shield,
    gradient: "from-cyan-500 to-blue-500",
    level: "Intermediate",
    duration: "18 hours",
    completionDate: "2023-01-15",
    certificateUrl: "#",
    featured: false,
    rating: 4.6,
    students: "90K+",
    credibility: "Industry Recognized",
    projects: 4,
    verificationId: "UC-DOCKER-2023",
    skills_gained: [
      "Container architecture",
      "Multi-container apps",
      "Volume management",
      "Network configuration",
      "Production deployment"
    ]
  },
  {
    id: 7,
    title: "AWS Cloud Computing Fundamentals",
    provider: "Amazon Web Services",
    instructor: "AWS Training",
    category: "cloud",
    skills: ["AWS", "EC2", "S3", "RDS", "Lambda", "CloudFormation"],
    description: "Foundational AWS services and cloud computing concepts for building scalable and reliable applications in the cloud.",
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    level: "Foundational",
    duration: "15 hours",
    completionDate: "2022-09-30",
    certificateUrl: "#",
    featured: true,
    rating: 4.8,
    students: "200K+",
    credibility: "AWS Official",
    projects: 8,
    verificationId: "AWS-FUND-2022",
    skills_gained: [
      "Cloud architecture",
      "Serverless computing",
      "Database services",
      "Storage solutions",
      "Security best practices"
    ]
  },
  {
    id: 8,
    title: "Next.js Full-Stack Development",
    provider: "Vercel",
    instructor: "Lee Robinson",
    category: "fullstack",
    skills: ["Next.js", "React", "API Routes", "SSR", "SSG", "Deployment"],
    description: "Modern full-stack development with Next.js covering server-side rendering, static generation, and production deployment strategies.",
    icon: Layers,
    gradient: "from-purple-600 to-pink-600",
    level: "Advanced",
    duration: "32 hours",
    completionDate: "2023-07-08",
    certificateUrl: "#",
    featured: true,
    rating: 4.9,
    students: "150K+",
    credibility: "Vercel Certified",
    projects: 10,
    verificationId: "VERCEL-NEXT-2023",
    skills_gained: [
      "Full-stack architecture",
      "Server-side rendering",
      "Static site generation",
      "API development",
      "Performance optimization"
    ]
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Certificates', icon: Award, color: 'from-blue-500 to-blue-600' },
  { id: 'frontend', name: 'Frontend', icon: Monitor, color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', name: 'Backend', icon: Server, color: 'from-green-500 to-teal-500' },
  { id: 'fullstack', name: 'Full Stack', icon: Layers, color: 'from-purple-500 to-pink-500' },
  { id: 'devops', name: 'DevOps', icon: Shield, color: 'from-orange-500 to-red-500' },
  { id: 'cloud', name: 'Cloud', icon: Globe, color: 'from-cyan-500 to-blue-500' },
  { id: 'academic', name: 'Academic', icon: BookOpen, color: 'from-indigo-500 to-purple-500' }
];

const LEVELS = ['All Levels', 'Foundational', 'Beginner', 'Intermediate', 'Advanced', 'Professional', 'Complete'];

// Certificate Modal Component
const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!certificate || !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${certificate.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    <certificate.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{certificate.title}</h3>
                    <p className="text-blue-600 font-semibold">{certificate.provider}</p>
                    <p className="text-gray-600 text-sm">Instructor: {certificate.instructor}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Course Details</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-700">{certificate.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">Completed: {certificate.completionDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-700">Rating: {certificate.rating}/5.0</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-700">{certificate.students} students</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Verification</h4>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-800">{certificate.credibility}</span>
                      </div>
                      <p className="text-xs text-green-700">ID: {certificate.verificationId}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Skills Gained</h4>
                    <div className="space-y-2">
                      {certificate.skills_gained.map((skill, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Projects Completed</h4>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-semibold text-blue-800">{certificate.projects} hands-on projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-700 leading-relaxed mb-6">{certificate.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    <Eye className="w-4 h-4" />
                    View Certificate
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Certificate Card Component
const CertificateCard = ({ certificate, index, searchTerm, inView, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, threshold: 0.1 });

  const isHighlighted = searchTerm && (
    certificate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    certificate.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
    certificate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getLevelColor = (level) => {
    const colors = {
      'Foundational': 'text-green-600 bg-green-100 border-green-200',
      'Beginner': 'text-blue-600 bg-blue-100 border-blue-200',
      'Intermediate': 'text-purple-600 bg-purple-100 border-purple-200',
      'Advanced': 'text-orange-600 bg-orange-100 border-orange-200',
      'Professional': 'text-indigo-600 bg-indigo-100 border-indigo-200',
      'Complete': 'text-red-600 bg-red-100 border-red-200'
    };
    return colors[level] || 'text-gray-600 bg-gray-100 border-gray-200';
  };

  return (
    <motion.div
      ref={cardRef}
      className={`bg-white/80 backdrop-blur-md rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
        isHighlighted ? 'ring-2 ring-yellow-400 ring-offset-2 border-yellow-200' : 'border-white/50 hover:border-blue-200'
      } ${certificate.featured ? 'ring-1 ring-blue-200' : ''}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onViewDetails(certificate)}
    >
      {/* Featured Badge */}
      {certificate.featured && (
        <div className="absolute top-3 right-3 z-10">
          <motion.div
            className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-3 h-3" />
            Featured
          </motion.div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${certificate.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <certificate.icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 text-xs font-semibold rounded-lg border ${getLevelColor(certificate.level)}`}>
                {certificate.level}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" />
                <span className="text-xs font-medium text-gray-600">{certificate.rating}</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {certificate.title}
            </h3>
            <p className="text-blue-600 font-semibold text-sm mb-1">{certificate.provider}</p>
            <p className="text-gray-600 text-xs">by {certificate.instructor}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
          {certificate.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Clock className="w-4 h-4 mx-auto mb-1 text-blue-500" />
            <div className="text-xs font-bold text-gray-800">{certificate.duration}</div>
            <div className="text-xs text-gray-600">Duration</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Briefcase className="w-4 h-4 mx-auto mb-1 text-green-500" />
            <div className="text-xs font-bold text-gray-800">{certificate.projects}</div>
            <div className="text-xs text-gray-600">Projects</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Users className="w-4 h-4 mx-auto mb-1 text-purple-500" />
            <div className="text-xs font-bold text-gray-800">{certificate.students}</div>
            <div className="text-xs text-gray-600">Students</div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills</h4>
          <div className="flex flex-wrap gap-1">
            {certificate.skills.slice(0, 4).map((skill, i) => (
              <span 
                key={i}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors"
              >
                {skill}
              </span>
            ))}
            {certificate.skills.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg border border-gray-200">
                +{certificate.skills.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Verification */}
        <div className="mb-4">
          <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-800">{certificate.credibility}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            <Calendar className="w-3 h-3 inline mr-1" />
            {certificate.completionDate}
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold hover:bg-blue-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(certificate);
              }}
            >
              <Eye className="w-3 h-3" />
              View
            </motion.button>
            <motion.button
              className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold hover:bg-green-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(certificate.certificateUrl, '_blank');
              }}
            >
              <Download className="w-3 h-3" />
              Get
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Search and Filter Component
const SearchAndFilter = ({ 
  searchTerm, 
  onSearchChange, 
  activeCategory, 
  onCategoryChange, 
  selectedLevel, 
  onLevelChange,
  sortBy,
  onSortChange,
  showFeaturedOnly,
  onToggleFeatured
}) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Search */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search certificates, providers, or skills..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-md border border-white/50 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
            aria-label="Search certificates"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-3">
          <select
            value={selectedLevel}
            onChange={(e) => onLevelChange(e.target.value)}
            className="px-4 py-3 bg-white/90 backdrop-blur-md border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            aria-label="Filter by level"
          >
            {LEVELS.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-3 bg-white/90 backdrop-blur-md border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            aria-label="Sort certificates"
          >
            <option value="recent">Most Recent</option>
            <option value="featured">Featured First</option>
            <option value="rating">Highest Rated</option>
            <option value="duration">Duration</option>
            <option value="alphabetical">Alphabetical</option>
          </select>

          <button
            onClick={onToggleFeatured}
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              showFeaturedOnly
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                : 'bg-white/90 text-gray-700 border border-white/50 hover:bg-white'
            }`}
            aria-label={`${showFeaturedOnly ? 'Show all' : 'Show featured'} certificates`}
          >
            <Star className="w-4 h-4" />
            Featured
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/90 backdrop-blur-md text-gray-700 border border-white/50 hover:bg-white hover:border-gray-300'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Filter by ${category.name}`}
          >
            <category.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{category.name}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

// Stats Component
const StatsSection = ({ certificates, inView }) => {
  const stats = useMemo(() => {
    const totalHours = certificates.reduce((sum, cert) => sum + parseInt(cert.duration), 0);
    const totalProjects = certificates.reduce((sum, cert) => sum + cert.projects, 0);
    const avgRating = certificates.reduce((sum, cert) => sum + cert.rating, 0) / certificates.length;
    const categories = [...new Set(certificates.map(cert => cert.category))].length;

    return [
      { label: 'Total Certificates', value: certificates.length, icon: Award, color: 'text-blue-500' },
      { label: 'Learning Hours', value: `${totalHours}h`, icon: Clock, color: 'text-green-500' },
      { label: 'Projects Built', value: totalProjects, icon: Briefcase, color: 'text-purple-500' },
      { label: 'Avg Rating', value: avgRating.toFixed(1), icon: Star, color: 'text-yellow-500' },
      { label: 'Categories', value: categories, icon: BarChart3, color: 'text-indigo-500' },
      { label: 'Years Learning', value: '6+', icon: TrendingUp, color: 'text-orange-500' }
    ];
  }, [certificates]);

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.4 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
          <div className={`text-xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
          <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Main Component
const TrainingCertificates = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('recent');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Memoized filtered and sorted certificates
  const filteredCertificates = useMemo(() => {
    let certs = CERTIFICATES_DATA;

    // Category filter
    if (activeCategory !== 'all') {
      certs = certs.filter(cert => cert.category === activeCategory);
    }

    // Level filter
    if (selectedLevel !== 'All Levels') {
      certs = certs.filter(cert => cert.level === selectedLevel);
    }

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      certs = certs.filter(cert => 
        cert.title.toLowerCase().includes(term) ||
        cert.provider.toLowerCase().includes(term) ||
        cert.instructor.toLowerCase().includes(term) ||
        cert.skills.some(skill => skill.toLowerCase().includes(term)) ||
        cert.description.toLowerCase().includes(term)
      );
    }

    // Featured filter
    if (showFeaturedOnly) {
      certs = certs.filter(cert => cert.featured);
    }

    // Sorting
    certs.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return b.featured - a.featured || new Date(b.completionDate) - new Date(a.completionDate);
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return parseInt(b.duration) - parseInt(a.duration);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default: // recent
          return new Date(b.completionDate) - new Date(a.completionDate);
      }
    });

    return certs;
  }, [activeCategory, selectedLevel, searchTerm, showFeaturedOnly, sortBy]);

  const handleViewDetails = useCallback((certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
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

  const featuredCertificates = CERTIFICATES_DATA.filter(cert => cert.featured);

  return (
    <section 
      ref={sectionRef}
      id="certificates" 
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      aria-label="Training certificates and education section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
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
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-orange-200/50 text-orange-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Education & Certifications</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Continuous Learning Journey
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Committed to staying current with latest technologies through formal education, industry certifications, 
            and specialized training programs. Knowledge that translates into better solutions.
          </motion.p>

          {/* Stats */}
          <StatsSection certificates={CERTIFICATES_DATA} inView={isInView} />
        </motion.div>

        {/* Featured Certificates Preview */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
            variants={fadeInUp}
          >
            🏆 Featured Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                onClick={() => handleViewDetails(cert)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs font-medium text-gray-600">{cert.rating}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h4>
                  </div>
                </div>
                
                <p className="text-blue-600 font-semibold text-xs mb-2">{cert.provider}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{cert.duration}</span>
                  <span>{cert.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Awards */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Education */}
          <motion.div 
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${EDUCATION_DATA.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <EDUCATION_DATA.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold rounded-full mb-2">
                  <GraduationCap className="w-3 h-3" />
                  Higher Education
                </div>
                <h3 className="text-xl font-bold text-gray-900">{EDUCATION_DATA.degree}</h3>
                <p className="text-blue-600 font-semibold">{EDUCATION_DATA.institution}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-800">{EDUCATION_DATA.period}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-gray-800">{EDUCATION_DATA.location}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Star className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-800">GPA: {EDUCATION_DATA.gpa}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <BookOpen className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-gray-800">{EDUCATION_DATA.coursework.length} Key Courses</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">{EDUCATION_DATA.description}</p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Outcomes:</h4>
              {EDUCATION_DATA.achievements.slice(0, 4).map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </div>
              ))}
              {EDUCATION_DATA.achievements.length > 4 && (
                <div className="text-sm text-gray-500 ml-6">+{EDUCATION_DATA.achievements.length - 4} more outcomes</div>
              )}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div 
            className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200 shadow-xl"
            variants={fadeInUp}
          >
            {AWARDS_DATA.map((award, index) => (
              <div key={award.id}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${award.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    <award.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 text-xs font-semibold rounded-full mb-2">
                      <Trophy className="w-3 h-3" />
                      Academic Excellence
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                    <p className="text-orange-600 font-semibold">{award.organization}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold text-gray-800">{award.date}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Target className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-800">{award.rank}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{award.description}</p>
                
                <div className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-orange-600" />
                    <span className="font-semibold text-orange-800">Impact:</span>
                  </div>
                  <p className="text-sm text-orange-700">{award.impact}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showFeaturedOnly={showFeaturedOnly}
          onToggleFeatured={() => setShowFeaturedOnly(!showFeaturedOnly)}
        />

        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((cert, index) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  index={index}
                  searchTerm={searchTerm}
                  inView={isInView}
                  onViewDetails={handleViewDetails}
                />
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No certificates found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setSelectedLevel('All Levels');
                    setShowFeaturedOnly(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Continuous Learning, Continuous Growth
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                My commitment to continuous learning ensures that I stay current with the latest technologies 
                and best practices. Let's work together to bring cutting-edge solutions to your projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start working together"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Let's Work Together</span>
                </motion.a>

                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View my project portfolio"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Projects</span>
                </motion.a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                {[
                  { number: `${CERTIFICATES_DATA.length}+`, label: 'Certifications', icon: Award },
                  { number: '300+', label: 'Study Hours', icon: Clock },
                  { number: '6+', label: 'Years Learning', icon: Heart }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 font-medium text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default TrainingCertificates;