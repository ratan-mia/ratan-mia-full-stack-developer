'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  Clock,
  Code,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  Phone,
  Search,
  Server,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Zap,
  X,
  Filter,
  ChevronDown,
  ChevronUp,
  Users,
  Briefcase,
  Calculator,
  MessageCircle,
  FileText,
  Shield,
  Rocket,
  Lightbulb,
  BarChart3,
  Heart,
  Sparkles,
  Timer,
  DollarSign,
  Package
} from 'lucide-react';
import { useState, useMemo, useCallback, useRef } from 'react';

// Constants
const SERVICE_DATA = [
  {
    id: 1,
    icon: Code,
    title: "Full Stack Development",
    shortDescription: "End-to-end web applications with modern architecture",
    description: "Complete web application development using cutting-edge technologies like React.js, Next.js, Node.js, and PHP Laravel. From concept to deployment with scalable architecture.",
    features: [
      "Responsive Design & Mobile-First Development",
      "RESTful API Development & Integration", 
      "Database Architecture & Optimization",
      "Performance Optimization & Core Web Vitals",
      "SEO Implementation & Technical SEO",
      "Progressive Web Apps (PWA)",
      "Real-time Features with WebSockets",
      "Authentication & Security Implementation"
    ],
    deliverables: [
      "Custom Web Application",
      "API Documentation",
      "Database Schema",
      "Deployment Guide",
      "Testing Suite",
      "Performance Report"
    ],
    packages: [
      { name: "Starter", price: "$2,500", features: ["Basic App", "5 Pages", "API Integration"] },
      { name: "Professional", price: "$5,000", features: ["Advanced App", "15 Pages", "Admin Panel", "Analytics"] },
      { name: "Enterprise", price: "$10,000", features: ["Complex App", "Unlimited Pages", "Custom Features", "Support"] }
    ],
    basePrice: "$2,500",
    gradient: "from-blue-600 to-indigo-600",
    category: "development",
    complexity: "High",
    timeline: "4-12 weeks",
    technologies: ["React", "Next.js", "Node.js", "Laravel", "TypeScript", "Tailwind"],
    featured: true,
    clientResults: {
      averageIncrease: "300%",
      satisfactionRate: "98%",
      projectsCompleted: 45
    },
    caseStudyUrl: "#case-study-fullstack",
    testimonial: {
      text: "Exceptional full-stack development that exceeded our expectations.",
      author: "Sarah Johnson",
      company: "TechCorp"
    }
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    shortDescription: "High-converting online stores with advanced features",
    description: "Complete e-commerce solutions with secure payments, inventory management, analytics dashboard, and conversion optimization for maximum sales performance.",
    features: [
      "Custom E-commerce Development",
      "Shopify & WooCommerce Integration",
      "Payment Gateway Integration (Stripe, PayPal)",
      "Inventory Management System",
      "Order Processing & Fulfillment",
      "Analytics & Sales Reporting",
      "Multi-currency & Multi-language",
      "Advanced SEO & Marketing Tools"
    ],
    deliverables: [
      "E-commerce Website",
      "Admin Dashboard",
      "Payment Integration",
      "Analytics Setup",
      "SEO Optimization",
      "Marketing Tools"
    ],
    packages: [
      { name: "Basic Store", price: "$4,000", features: ["Product Catalog", "Payment Gateway", "Basic Analytics"] },
      { name: "Advanced Store", price: "$8,000", features: ["Multi-vendor", "Advanced Analytics", "Marketing Automation"] },
      { name: "Enterprise Store", price: "$15,000", features: ["Custom Features", "API Integration", "White-label Solution"] }
    ],
    basePrice: "$4,000",
    gradient: "from-purple-600 to-pink-600",
    category: "ecommerce",
    complexity: "High",
    timeline: "6-16 weeks",
    technologies: ["Shopify", "WooCommerce", "Stripe", "React", "PHP", "MySQL"],
    featured: true,
    clientResults: {
      averageIncrease: "250%",
      satisfactionRate: "96%",
      projectsCompleted: 30
    },
    caseStudyUrl: "#case-study-ecommerce",
    testimonial: {
      text: "Our sales increased by 300% after the new e-commerce platform launch.",
      author: "Michael Chen",
      company: "Fashion Hub"
    }
  },
  {
    id: 3,
    icon: Globe,
    title: "WordPress Development",
    shortDescription: "Custom WordPress solutions and optimization",
    description: "Professional WordPress development including custom themes, plugins, performance optimization, and complete CMS implementations for businesses of all sizes.",
    features: [
      "Custom Theme Development",
      "Plugin Development & Customization",
      "Performance Optimization",
      "Security Hardening & Updates",
      "Migration & Multi-site Setup",
      "Gutenberg Blocks Development",
      "WooCommerce Integration",
      "SEO & Analytics Setup"
    ],
    deliverables: [
      "Custom WordPress Site",
      "Theme Files",
      "Plugin Documentation",
      "Security Setup",
      "Performance Report",
      "Training Materials"
    ],
    packages: [
      { name: "Basic Site", price: "$1,500", features: ["Custom Theme", "5 Pages", "Basic SEO"] },
      { name: "Business Site", price: "$3,000", features: ["Advanced Theme", "15 Pages", "E-commerce", "Analytics"] },
      { name: "Enterprise Site", price: "$6,000", features: ["Complex Site", "Custom Plugins", "Multi-site", "Support"] }
    ],
    basePrice: "$1,500",
    gradient: "from-green-600 to-teal-600",
    category: "cms",
    complexity: "Medium",
    timeline: "2-8 weeks",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Gutenberg", "WooCommerce"],
    featured: false,
    clientResults: {
      averageIncrease: "200%",
      satisfactionRate: "95%",
      projectsCompleted: 60
    },
    caseStudyUrl: "#case-study-wordpress",
    testimonial: {
      text: "Perfect WordPress solution that boosted our online presence significantly.",
      author: "Lisa Rodriguez",
      company: "Local Business"
    }
  },
  {
    id: 4,
    icon: Server,
    title: "DevOps & Cloud Services",
    shortDescription: "Infrastructure automation and cloud deployment",
    description: "Complete IT infrastructure setup, cloud deployment, containerization, automated CI/CD pipelines, and ongoing server management for optimal performance.",
    features: [
      "AWS/Digital Ocean Setup & Management",
      "Docker Containerization",
      "CI/CD Pipeline Implementation",
      "Server Monitoring & Alerts",
      "Database Administration",
      "Security & SSL Configuration",
      "Load Balancing & Scaling",
      "Backup & Disaster Recovery"
    ],
    deliverables: [
      "Cloud Infrastructure",
      "CI/CD Pipeline",
      "Monitoring Setup",
      "Security Configuration",
      "Documentation",
      "Training Session"
    ],
    packages: [
      { name: "Basic Setup", price: "$1,200", features: ["Server Setup", "Basic Monitoring", "SSL"] },
      { name: "Advanced Setup", price: "$2,500", features: ["CI/CD", "Load Balancer", "Advanced Monitoring"] },
      { name: "Enterprise Setup", price: "$5,000", features: ["Multi-region", "Auto-scaling", "24/7 Support"] }
    ],
    basePrice: "$1,200",
    gradient: "from-orange-600 to-red-600",
    category: "devops",
    complexity: "High",
    timeline: "1-4 weeks",
    technologies: ["AWS", "Docker", "Jenkins", "Linux", "Kubernetes", "Terraform"],
    featured: false,
    clientResults: {
      averageIncrease: "150%",
      satisfactionRate: "97%",
      projectsCompleted: 25
    },
    caseStudyUrl: "#case-study-devops",
    testimonial: {
      text: "Excellent DevOps setup that improved our deployment efficiency dramatically.",
      author: "David Park",
      company: "StartupTech"
    }
  },
  {
    id: 5,
    icon: Zap,
    title: "Performance Optimization",
    shortDescription: "Speed optimization for existing websites",
    description: "Comprehensive performance optimization for existing websites using advanced techniques, modern best practices, and cutting-edge tools to achieve perfect Core Web Vitals scores.",
    features: [
      "Core Web Vitals Optimization",
      "Database Query Optimization",
      "Image Compression & WebP Conversion",
      "Code Splitting & Lazy Loading",
      "CDN Implementation & Configuration",
      "Bundle Size Reduction",
      "Caching Strategy Implementation",
      "Performance Monitoring Setup"
    ],
    deliverables: [
      "Performance Audit",
      "Optimization Report",
      "Speed Improvements",
      "Monitoring Setup",
      "Best Practices Guide",
      "Ongoing Recommendations"
    ],
    packages: [
      { name: "Basic Audit", price: "$800", features: ["Performance Audit", "Basic Fixes", "Report"] },
      { name: "Complete Optimization", price: "$1,500", features: ["Full Optimization", "CDN Setup", "Monitoring"] },
      { name: "Enterprise Optimization", price: "$3,000", features: ["Advanced Optimization", "Custom Solutions", "Ongoing Support"] }
    ],
    basePrice: "$800",
    gradient: "from-indigo-600 to-purple-600",
    category: "optimization",
    complexity: "Medium",
    timeline: "1-3 weeks",
    technologies: ["Lighthouse", "GTmetrix", "Redis", "CloudFlare", "WebP", "Critical CSS"],
    featured: false,
    clientResults: {
      averageIncrease: "400%",
      satisfactionRate: "99%",
      projectsCompleted: 40
    },
    caseStudyUrl: "#case-study-performance",
    testimonial: {
      text: "Incredible performance boost - our site now loads in under 1 second!",
      author: "Emma Thompson",
      company: "E-commerce Plus"
    }
  },
  {
    id: 6,
    icon: Brain,
    title: "AI Integration",
    shortDescription: "Cutting-edge AI solutions and automation",
    description: "Advanced AI integration including chatbots, natural language processing, machine learning implementation, and intelligent automation for modern applications.",
    features: [
      "OpenAI GPT Integration",
      "Custom Chatbot Development",
      "Voice Recognition & Text-to-Speech",
      "Natural Language Processing",
      "Automated Content Generation",
      "Machine Learning Implementation",
      "Intelligent Data Analysis",
      "AI-powered Recommendations"
    ],
    deliverables: [
      "AI Integration",
      "Custom Models",
      "API Documentation",
      "Training Data",
      "Performance Metrics",
      "Maintenance Guide"
    ],
    packages: [
      { name: "Basic AI", price: "$2,000", features: ["Simple Chatbot", "API Integration", "Basic NLP"] },
      { name: "Advanced AI", price: "$5,000", features: ["Custom Models", "Advanced Features", "Analytics"] },
      { name: "Enterprise AI", price: "$10,000", features: ["Complex AI Systems", "Custom Training", "Full Support"] }
    ],
    basePrice: "$2,000",
    gradient: "from-teal-600 to-cyan-600",
    category: "ai",
    complexity: "High",
    timeline: "3-8 weeks",
    technologies: ["OpenAI", "Python", "TensorFlow", "Node.js", "Machine Learning", "NLP"],
    featured: true,
    clientResults: {
      averageIncrease: "500%",
      satisfactionRate: "94%",
      projectsCompleted: 15
    },
    caseStudyUrl: "#case-study-ai",
    testimonial: {
      text: "The AI chatbot revolutionized our customer service completely.",
      author: "James Wilson",
      company: "Support Solutions"
    }
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Services', icon: Award, color: 'text-blue-600' },
  { id: 'development', name: 'Development', icon: Code, color: 'text-blue-600' },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, color: 'text-purple-600' },
  { id: 'cms', name: 'CMS', icon: Globe, color: 'text-green-600' },
  { id: 'devops', name: 'DevOps', icon: Server, color: 'text-orange-600' },
  { id: 'optimization', name: 'Optimization', icon: Zap, color: 'text-indigo-600' },
  { id: 'ai', name: 'AI', icon: Brain, color: 'text-teal-600' }
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Requirements analysis, project roadmap, and comprehensive planning session.",
    icon: Search,
    gradient: "from-blue-500 to-blue-600",
    details: ["Requirements gathering", "Technical analysis", "Project timeline", "Resource allocation"]
  },
  {
    step: "02", 
    title: "Design & Architecture",
    description: "UX/UI design, system architecture, and interactive prototypes creation.",
    icon: Target,
    gradient: "from-purple-500 to-purple-600",
    details: ["User experience design", "System architecture", "Database design", "API planning"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous integration, testing, and quality assurance.",
    icon: Code,
    gradient: "from-green-500 to-green-600",
    details: ["Agile development", "Code reviews", "Automated testing", "Quality assurance"]
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Production deployment, performance monitoring, and ongoing maintenance support.",
    icon: Rocket,
    gradient: "from-orange-500 to-orange-600",
    details: ["Production deployment", "Performance monitoring", "User training", "Ongoing support"]
  }
];

// Service Card Component
const ServiceCard = ({ service, index, searchTerm, inView, isExpanded, onToggleExpand, onSelectService }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activePackage, setActivePackage] = useState(0);
  const cardRef = useRef(null);
  const serviceInView = useInView(cardRef, { once: true, threshold: 0.1 });

  const isHighlighted = searchTerm && (
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getComplexityColor = (complexity) => {
    switch(complexity) {
      case 'Medium': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'High': return 'text-purple-600 bg-purple-100 border-purple-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group h-full transition-all duration-300 ${
        isHighlighted ? 'ring-2 ring-yellow-400 ring-offset-2' : ''
      } ${isExpanded ? 'lg:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={serviceInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      layout
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.shortDescription}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              {service.featured && (
                <motion.div
                  className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-3 h-3" />
                  <span>Featured</span>
                </motion.div>
              )}
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getComplexityColor(service.complexity)}`}>
                {service.complexity}
              </span>
              <button
                onClick={() => onToggleExpand(service.id)}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${service.title} details`}
              >
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Timer className="w-3 h-3 text-blue-500" />
                <span className="text-sm font-bold text-gray-800">{service.timeline}</span>
              </div>
              <span className="text-xs text-gray-600">Timeline</span>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign className="w-3 h-3 text-green-500" />
                <span className="text-sm font-bold text-gray-800">{service.basePrice}</span>
              </div>
              <span className="text-xs text-gray-600">Starting</span>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Briefcase className="w-3 h-3 text-purple-500" />
                <span className="text-sm font-bold text-gray-800">{service.clientResults.projectsCompleted}</span>
              </div>
              <span className="text-xs text-gray-600">Projects</span>
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Basic Features */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-2 text-sm text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                  <span>{feature}</span>
                </motion.li>
              ))}
              {!isExpanded && service.features.length > 4 && (
                <li className="text-xs text-gray-500 ml-4">+{service.features.length - 4} more features</li>
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-500" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg border hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
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
                className="space-y-6"
              >
                {/* Packages */}
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Package className="w-4 h-4 text-purple-500" />
                    Service Packages
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {service.packages.map((pkg, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          activePackage === i
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                        }`}
                        onClick={() => setActivePackage(i)}
                      >
                        <div className="font-semibold text-sm text-gray-800 mb-1">{pkg.name}</div>
                        <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                          {pkg.price}
                        </div>
                        <ul className="space-y-1">
                          {pkg.features.map((feature, j) => (
                            <li key={j} className="text-xs text-gray-600 flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Results */}
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-green-500" />
                    Client Results
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-lg font-bold text-green-600">{service.clientResults.averageIncrease}</div>
                      <div className="text-xs text-green-700">Avg. Increase</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-lg font-bold text-blue-600">{service.clientResults.satisfactionRate}</div>
                      <div className="text-xs text-blue-700">Satisfaction</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-lg font-bold text-purple-600">{service.clientResults.projectsCompleted}</div>
                      <div className="text-xs text-purple-700">Projects</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {service.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 italic mb-2">"{service.testimonial.text}"</p>
                      <div className="text-xs text-gray-600">
                        <span className="font-semibold">{service.testimonial.author}</span>
                        <span className="text-gray-500"> - {service.testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-500" />
                    Deliverables
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-1`}>
                {isExpanded ? service.packages[activePackage].price : service.basePrice}
              </div>
              {isExpanded && (
                <div className="text-xs text-gray-500">{service.packages[activePackage].name} Package</div>
              )}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => onSelectService(service)}
                className={`px-4 py-2 bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200`}
              >
                Get Started
              </button>
              <button
                className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => console.log('Learn more about:', service.title)}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Search and Filter Component
const SearchAndFilter = ({ searchTerm, onSearchChange, activeCategory, onCategoryChange, sortBy, onSortChange, showFeaturedOnly, onToggleFeatured }) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          aria-label="Search services"
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

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300'
            }`}
            aria-label={`Filter by ${category.name}`}
          >
            <category.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Additional Filters */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleFeatured}
          className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
            showFeaturedOnly
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
              : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white'
          }`}
        >
          <Star className="w-4 h-4" />
          <span>Featured</span>
        </button>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm"
          aria-label="Sort services"
        >
          <option value="featured">Sort by Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="complexity">Complexity</option>
          <option value="timeline">Timeline</option>
        </select>
      </div>
    </motion.div>
  );
};

// Process Step Component
const ProcessStep = ({ step, index, inView }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -3, scale: 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <step.icon className="w-8 h-8" />
        </div>

        <div className={`text-2xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-2`}>
          {step.step}
        </div>
        
        <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {step.title}
        </h4>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {step.description}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {step.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {detail}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center mt-4">
          {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </div>
    </motion.div>
  );
};

// Main Services Component
const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [expandedServices, setExpandedServices] = useState(new Set());
  const [selectedService, setSelectedService] = useState(null);

  const sectionRef = useRef(null);
  const processRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const processInView = useInView(processRef, { once: true, threshold: 0.1 });

  // Memoized filtered and sorted services
  const filteredServices = useMemo(() => {
    let services = SERVICE_DATA;

    // Category filter
    if (activeCategory !== 'all') {
      services = services.filter(service => service.category === activeCategory);
    }

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      services = services.filter(service => 
        service.title.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term) ||
        service.technologies.some(tech => tech.toLowerCase().includes(term)) ||
        service.features.some(feature => feature.toLowerCase().includes(term))
      );
    }

    // Featured filter
    if (showFeaturedOnly) {
      services = services.filter(service => service.featured);
    }

    // Sorting
    services.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.basePrice.replace(/\D/g, '')) - parseInt(b.basePrice.replace(/\D/g, ''));
        case 'price-high':
          return parseInt(b.basePrice.replace(/\D/g, '')) - parseInt(a.basePrice.replace(/\D/g, ''));
        case 'complexity':
          const complexityOrder = { 'Medium': 1, 'High': 2 };
          return complexityOrder[a.complexity] - complexityOrder[b.complexity];
        case 'timeline':
          return parseInt(a.timeline.split('-')[0]) - parseInt(b.timeline.split('-')[0]);
        default: // featured
          return b.featured - a.featured;
      }
    });

    return services;
  }, [searchTerm, activeCategory, sortBy, showFeaturedOnly]);

  const handleToggleExpand = useCallback((serviceId) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  }, []);

  const handleSelectService = useCallback((service) => {
    setSelectedService(service);
    // Scroll to contact or open modal
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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

  const featuredServices = SERVICE_DATA.filter(service => service.featured);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      aria-label="Professional web development services"
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
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-purple-200/50 text-purple-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Professional Services</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Comprehensive Web Solutions
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            From concept to deployment, delivering exceptional digital solutions that drive business growth and exceed expectations. Choose from our comprehensive service packages.
          </motion.p>

          {/* Overall Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { number: '150+', label: 'Projects Delivered', icon: Briefcase },
              { number: '98%', label: 'Success Rate', icon: Star },
              { number: '24/7', label: 'Support Available', icon: Clock },
              { number: '6', label: 'Service Categories', icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/80 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" />
                <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Services Showcase */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center"
            variants={fadeInUp}
          >
            🌟 Most Popular Services
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.basePrice}
                    </span>
                    <div className="text-xs text-gray-500">Starting price</div>
                  </div>
                  <button
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                    onClick={() => handleSelectService(service)}
                  >
                    Get Started
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>⏱️ {service.timeline}</span>
                    <span>⭐ {service.clientResults.satisfactionRate}</span>
                    <span>📊 {service.clientResults.projectsCompleted} projects</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showFeaturedOnly={showFeaturedOnly}
          onToggleFeatured={() => setShowFeaturedOnly(!showFeaturedOnly)}
        />

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  searchTerm={searchTerm}
                  inView={isInView}
                  isExpanded={expandedServices.has(service.id)}
                  onToggleExpand={handleToggleExpand}
                  onSelectService={handleSelectService}
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
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
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

        {/* Development Process */}
        <motion.div 
          ref={processRef}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-800"
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            >
              Our Proven Development Process
            </motion.h3>
            <motion.p 
              className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              A systematic methodology ensuring successful delivery from initial consultation to ongoing support and maintenance.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                inView={processInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
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
                Ready To Transform Your Digital Presence?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Let's collaborate to create exceptional digital solutions that drive your business forward. 
                Get started with a free consultation and project estimate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start your project with a free consultation"
                >
                  <Mail className="w-5 h-5" />
                  <span>Start Project</span>
                  <Sparkles className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="tel:+8801751010966"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Schedule a consultation call"
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule Call</span>
                </motion.a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                {[
                  { number: '150+', label: 'Projects Delivered', icon: Briefcase },
                  { number: '98%', label: 'Client Satisfaction', icon: Heart },
                  { number: '24/7', label: 'Support Available', icon: Shield }
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
    </section>
  );
};

export default Services;