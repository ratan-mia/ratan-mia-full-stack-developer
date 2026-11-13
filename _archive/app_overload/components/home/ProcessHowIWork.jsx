'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code,
  FileText,
  Lightbulb,
  MessageSquare,
  Palette,
  Play,
  Rocket,
  Search,
  Shield,
  Star,
  Target,
  TestTube,
  TrendingUp,
  Users,
  Zap,
  Pause,
  RotateCcw,
  Settings,
  Award,
  Calendar,
  Eye,
  Layers,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Timer,
  Activity,
  Briefcase,
  Globe,
  Monitor,
  Smartphone,
  Database,
  Lock
} from 'lucide-react';
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';

// Constants
const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discovery & Strategy",
    subtitle: "Understanding Your Vision",
    icon: Lightbulb,
    gradient: "from-amber-500 to-orange-500",
    duration: "1-2 Days",
    category: "Planning",
    activities: [
      "Deep-dive consultation & requirement gathering",
      "Competitive analysis & market research", 
      "Technology stack selection & architecture planning",
      "Project scope definition & timeline creation",
      "Budget planning & resource allocation",
      "Risk assessment & mitigation strategies"
    ],
    deliverables: [
      { name: "Strategic Blueprint", description: "Comprehensive project roadmap" },
      { name: "Technical Roadmap", description: "Technology and architecture plan" },
      { name: "Project Charter", description: "Scope, timeline, and deliverables" },
      { name: "Risk Analysis", description: "Potential challenges and solutions" }
    ],
    description: "Comprehensive discovery phase to understand your business goals, target audience, and technical requirements. We dive deep into your vision to create a strategic foundation for success.",
    metrics: { 
      accuracy: "99%", 
      satisfaction: "98%", 
      timeToComplete: "24h",
      documentsCreated: "4"
    },
    tools: ["Figma", "Notion", "Slack", "Google Analytics"],
    processFlow: [
      "Initial consultation call",
      "Requirements documentation",
      "Market research & analysis", 
      "Technical feasibility assessment",
      "Strategy presentation"
    ],
    successCriteria: [
      "Clear project objectives defined",
      "Technical architecture approved",
      "Timeline and budget confirmed",
      "Stakeholder alignment achieved"
    ]
  },
  {
    id: 2,
    title: "Research & Analysis",
    subtitle: "Data-Driven Insights",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
    duration: "2-3 Days",
    category: "Research",
    activities: [
      "User persona development & journey mapping",
      "Competitor analysis & industry benchmarking",
      "Technical feasibility studies & performance audits",
      "SEO & accessibility requirement analysis",
      "User behavior analytics review",
      "Content strategy development"
    ],
    deliverables: [
      { name: "Research Report", description: "Comprehensive market analysis" },
      { name: "User Personas", description: "Target audience profiles" },
      { name: "Competitive Analysis", description: "Market positioning insights" },
      { name: "Technical Assessment", description: "Feasibility and requirements" }
    ],
    description: "Comprehensive market and user research provides the insights needed for informed design and development decisions. We analyze your competition and understand your users deeply.",
    metrics: { 
      insights: "50+", 
      researchHours: "40h",
      competitorsAnalyzed: "10",
      userJourneys: "5"
    },
    tools: ["Google Analytics", "Hotjar", "SEMrush", "Ahrefs"],
    processFlow: [
      "Market landscape analysis",
      "User research & interviews",
      "Competitor deep-dive",
      "Technical audit",
      "Insights synthesis"
    ],
    successCriteria: [
      "User personas validated",
      "Market gaps identified", 
      "Technical requirements clarified",
      "Content strategy defined"
    ]
  },
  {
    id: 3,
    title: "Design & Prototyping",
    subtitle: "Visual Excellence",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    duration: "3-5 Days",
    category: "Design",
    activities: [
      "Wireframing & information architecture",
      "High-fidelity UI design & brand integration",
      "Interactive prototyping & user flow optimization",
      "Responsive design & accessibility compliance",
      "Design system creation",
      "Usability testing & iteration"
    ],
    deliverables: [
      { name: "Design System", description: "Comprehensive UI component library" },
      { name: "Interactive Prototype", description: "Clickable user experience demo" },
      { name: "Style Guide", description: "Brand and visual guidelines" },
      { name: "Responsive Layouts", description: "Mobile, tablet, and desktop designs" }
    ],
    description: "Creating stunning, conversion-focused designs that reflect your brand while providing exceptional user experiences. Every pixel is crafted with purpose and performance in mind.",
    metrics: { 
      screens: "25+", 
      iterations: "3",
      components: "50+",
      devices: "5"
    },
    tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
    processFlow: [
      "Wireframe creation",
      "Visual design development",
      "Interactive prototype building",
      "Usability testing",
      "Design refinement"
    ],
    successCriteria: [
      "Design system approved",
      "User flows validated",
      "Responsive design confirmed",
      "Accessibility standards met"
    ]
  },
  {
    id: 4,
    title: "Development & Build",
    subtitle: "Bringing Ideas to Life",
    icon: Code,
    gradient: "from-emerald-500 to-green-500",
    duration: "1-4 Weeks",
    category: "Development",
    activities: [
      "Clean, scalable code development",
      "API integration & database optimization",
      "Third-party service connections & automation",
      "Performance optimization & security implementation",
      "Responsive development & cross-browser testing",
      "Code review & quality assurance"
    ],
    deliverables: [
      { name: "Production Code", description: "Clean, scalable application code" },
      { name: "API Documentation", description: "Complete API reference" },
      { name: "Admin Dashboard", description: "Content management interface" },
      { name: "Database Schema", description: "Optimized data structure" }
    ],
    description: "Transforming designs into high-performance, scalable applications using modern technologies and best practices. Code quality and maintainability are our top priorities.",
    metrics: { 
      uptime: "99.9%", 
      loadTime: "< 2s",
      codeQuality: "A+",
      testCoverage: "95%"
    },
    tools: ["React", "Next.js", "Laravel", "Docker"],
    processFlow: [
      "Development environment setup",
      "Core functionality development",
      "API integration",
      "Performance optimization",
      "Quality assurance"
    ],
    successCriteria: [
      "All features functional",
      "Performance targets met",
      "Security standards implemented",
      "Code quality standards passed"
    ]
  },
  {
    id: 5,
    title: "Testing & Optimization", 
    subtitle: "Quality Assurance",
    icon: TestTube,
    gradient: "from-red-500 to-rose-500",
    duration: "2-3 Days",
    category: "Testing",
    activities: [
      "Cross-browser & device compatibility testing",
      "Performance optimization & speed enhancement",
      "Security audits & vulnerability assessments",
      "User acceptance testing & bug resolution",
      "Load testing & stress testing",
      "SEO optimization & accessibility audit"
    ],
    deliverables: [
      { name: "QA Report", description: "Comprehensive testing results" },
      { name: "Performance Metrics", description: "Speed and optimization data" },
      { name: "Security Audit", description: "Vulnerability assessment report" },
      { name: "Compatibility Matrix", description: "Browser and device support" }
    ],
    description: "Rigorous testing across all platforms ensures your application performs flawlessly and securely for every user. We test everything so you don't have to worry about anything.",
    metrics: { 
      testsPerformed: "200+", 
      bugsCaught: "15+",
      performanceScore: "95+",
      securityScore: "A+"
    },
    tools: ["Jest", "Cypress", "Lighthouse", "OWASP ZAP"],
    processFlow: [
      "Test plan creation",
      "Automated testing setup",
      "Manual testing execution",
      "Performance optimization",
      "Security audit"
    ],
    successCriteria: [
      "All tests passing",
      "Performance benchmarks met",
      "Security vulnerabilities resolved",
      "Cross-platform compatibility confirmed"
    ]
  },
  {
    id: 6,
    title: "Launch & Support",
    subtitle: "Going Live & Beyond",
    icon: Rocket,
    gradient: "from-indigo-500 to-blue-500",
    duration: "Ongoing",
    category: "Deployment",
    activities: [
      "Production deployment & DNS configuration",
      "Performance monitoring & analytics setup",
      "Team training & knowledge transfer",
      "Ongoing maintenance & feature updates",
      "Backup & disaster recovery setup",
      "24/7 monitoring & support"
    ],
    deliverables: [
      { name: "Live Application", description: "Fully deployed production system" },
      { name: "Training Materials", description: "User guides and documentation" },
      { name: "Support Plan", description: "Ongoing maintenance strategy" },
      { name: "Monitoring Dashboard", description: "Real-time performance tracking" }
    ],
    description: "Smooth launch with comprehensive support, monitoring, and ongoing partnership to ensure long-term success. Your success is our continued commitment.",
    metrics: { 
      support: "24/7", 
      responseTime: "< 2h",
      uptime: "99.99%",
      satisfaction: "98%"
    },
    tools: ["AWS", "Vercel", "Cloudflare", "Google Analytics"],
    processFlow: [
      "Production deployment",
      "DNS configuration",
      "Monitoring setup",
      "Team training",
      "Ongoing support"
    ],
    successCriteria: [
      "Successfully deployed",
      "Monitoring active",
      "Team trained",
      "Support processes established"
    ]
  }
];

const METHODOLOGIES = [
  {
    title: "Agile Development",
    description: "Iterative approach with continuous feedback and rapid adaptation",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    benefits: ["Faster delivery", "Continuous feedback", "Flexible scope"],
    implementation: "2-week sprints with daily standups"
  },
  {
    title: "User-Centered Design",
    description: "Every decision backed by user research and behavioral data",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    benefits: ["Better UX", "Higher conversion", "User satisfaction"],
    implementation: "User testing at every stage"
  },
  {
    title: "Performance First",
    description: "Optimized for speed, scalability, and exceptional user experience",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-green-500",
    benefits: ["Fast loading", "SEO friendly", "Better engagement"],
    implementation: "Continuous performance monitoring"
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive testing and security at every development stage",
    icon: Shield,
    gradient: "from-purple-500 to-indigo-500",
    benefits: ["Bug-free code", "Secure applications", "Reliable performance"],
    implementation: "Automated testing & code reviews"
  }
];

const KEY_METRICS = [
  { metric: "98%", label: "Client Satisfaction", icon: Star, gradient: "from-amber-500 to-orange-500", description: "Happy clients across all projects" },
  { metric: "< 2s", label: "Load Time", icon: Zap, gradient: "from-blue-500 to-cyan-500", description: "Average page load speed" },
  { metric: "95%", label: "On-Time Delivery", icon: Clock, gradient: "from-emerald-500 to-green-500", description: "Projects delivered on schedule" },
  { metric: "24/7", label: "Support Available", icon: Shield, gradient: "from-purple-500 to-indigo-500", description: "Round-the-clock assistance" }
];

// Process Timeline Component
const ProcessTimeline = ({ activeStep, onStepClick, inView }) => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="relative mb-12">
      {/* Mobile Timeline */}
      <div className="md:hidden">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          <div className="space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={() => onStepClick(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: activeStep === index ? 1 : 0.6, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white shadow-lg z-10 relative ${
                  activeStep === index ? 'ring-4 ring-blue-400 scale-110' : ''
                }`}>
                  <step.icon className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-white text-gray-800 rounded-full flex items-center justify-center text-xs font-bold">
                    {step.id}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.subtitle}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-blue-500" />
                    <span className="text-xs text-blue-600 font-medium">{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 rounded-full transform -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 via-blue-500 via-purple-500 via-emerald-500 via-red-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` } : { width: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="relative flex justify-between items-center px-2">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                className="group relative cursor-pointer flex flex-col items-center max-w-40"
                onClick={() => onStepClick(index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step Icon */}
                <motion.div
                  className={`relative z-10 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white shadow-lg mb-4 transition-all duration-300 ${
                    activeStep === index ? 'ring-4 ring-blue-400 shadow-2xl scale-110' : ''
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <step.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  
                  {/* Step Number */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-gray-800 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>

                  {/* Progress Ring */}
                  {activeStep >= index && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: activeStep > index ? 1 : (activeStep === index ? 0.7 : 0) }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>

                {/* Step Info */}
                <div className="text-center">
                  <div className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg mb-2">
                    {step.category}
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-2 leading-tight">
                    {step.subtitle}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-blue-600 font-medium">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </div>
                </div>

                {/* Hover Tooltip */}
                <AnimatePresence>
                  {hoveredStep === index && (
                    <motion.div
                      className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-3 rounded-lg shadow-xl z-20 w-48"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs text-gray-300 mb-2">Quick Preview:</p>
                      <p className="text-sm">{step.description.slice(0, 80)}...</p>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Step Details Component
const StepDetails = ({ step, stepIndex, onNext, onPrev, totalSteps, inView }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const toggleSection = useCallback((section) => {
    setExpandedSection(prev => prev === section ? null : section);
  }, []);

  return (
    <motion.div
      key={stepIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
              <step.icon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-lg">
                  Step {stepIndex + 1} of {totalSteps}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                  {step.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.subtitle}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={stepIndex === 0}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={onNext}
              disabled={stepIndex === totalSteps - 1}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Step Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-white/60 rounded-lg">
            <Timer className="w-5 h-5 mx-auto mb-1 text-blue-500" />
            <div className="text-sm font-bold text-gray-800">{step.duration}</div>
            <div className="text-xs text-gray-600">Duration</div>
          </div>
          <div className="text-center p-3 bg-white/60 rounded-lg">
            <Activity className="w-5 h-5 mx-auto mb-1 text-green-500" />
            <div className="text-sm font-bold text-gray-800">{step.activities.length}</div>
            <div className="text-xs text-gray-600">Activities</div>
          </div>
          <div className="text-center p-3 bg-white/60 rounded-lg">
            <FileText className="w-5 h-5 mx-auto mb-1 text-purple-500" />
            <div className="text-sm font-bold text-gray-800">{step.deliverables.length}</div>
            <div className="text-xs text-gray-600">Deliverables</div>
          </div>
          <div className="text-center p-3 bg-white/60 rounded-lg">
            <Settings className="w-5 h-5 mx-auto mb-1 text-orange-500" />
            <div className="text-sm font-bold text-gray-800">{step.tools.length}</div>
            <div className="text-xs text-gray-600">Tools</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">{step.description}</p>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {/* Activities Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('activities')}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <h4 className="text-lg font-bold text-gray-900">Key Activities</h4>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  {step.activities.length} items
                </span>
              </div>
              {expandedSection === 'activities' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expandedSection === 'activities' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-3">
                    {step.activities.map((activity, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Deliverables Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('deliverables')}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-500" />
                <h4 className="text-lg font-bold text-gray-900">Deliverables</h4>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {step.deliverables.length} items
                </span>
              </div>
              {expandedSection === 'deliverables' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expandedSection === 'deliverables' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.deliverables.map((deliverable, i) => (
                      <motion.div
                        key={i}
                        className="p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div className="flex items-start gap-3">
                          <FileText className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">{deliverable.name}</h5>
                            <p className="text-sm text-gray-600">{deliverable.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Metrics Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('metrics')}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-purple-500" />
                <h4 className="text-lg font-bold text-gray-900">Key Metrics</h4>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                  {Object.keys(step.metrics).length} metrics
                </span>
              </div>
              {expandedSection === 'metrics' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expandedSection === 'metrics' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries(step.metrics).map(([key, value], i) => (
                      <motion.div
                        key={i}
                        className="text-center p-4 bg-white rounded-lg border border-gray-100"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-1`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 pt-6 border-t border-gray-200">
          {PROCESS_STEPS.map((_, index) => (
            <button
              key={index}
              onClick={() => onStepClick && onStepClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                stepIndex === index 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Methodology Card Component
const MethodologyCard = ({ method, index, inView }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -3, scale: 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="text-center mb-4">
          <motion.div
            className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 5 }}
          >
            <method.icon className="w-8 h-8" />
          </motion.div>
          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {method.title}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {method.description}
          </p>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-gray-200 pt-4"
            >
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Benefits:</h5>
                  <ul className="space-y-1">
                    {method.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Implementation:</h5>
                  <p className="text-sm text-gray-600">{method.implementation}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-4">
          {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const ProcessHowIWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  
  const sectionRef = useRef(null);
  const methodologyRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const methodologyInView = useInView(methodologyRef, { once: true, threshold: 0.1 });

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % PROCESS_STEPS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleStepClick = useCallback((index) => {
    setActiveStep(index);
    setAutoPlay(false);
  }, []);

  const handleNext = useCallback(() => {
    setActiveStep(prev => Math.min(prev + 1, PROCESS_STEPS.length - 1));
    setAutoPlay(false);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveStep(prev => Math.max(prev - 1, 0));
    setAutoPlay(false);
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
      id="process" 
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      aria-label="Development process and methodology"
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
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-indigo-200/50 text-indigo-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>My Process</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            How I Work With You
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            A systematic 6-step process designed to deliver exceptional results and exceed expectations every time. 
            Transparent, collaborative, and results-driven.
          </motion.p>

          {/* Key Metrics */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {KEY_METRICS.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                title={metric.description}
              >
                <metric.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" />
                <div className="text-xl font-bold text-blue-600 mb-1">{metric.metric}</div>
                <div className="text-gray-600 text-sm font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Auto-play Control */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                autoPlay
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 border border-gray-200 hover:bg-white'
              }`}
              aria-label={autoPlay ? 'Pause auto-play' : 'Start auto-play'}
            >
              {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{autoPlay ? 'Pause Tour' : 'Auto Tour'}</span>
            </button>
            <button
              onClick={() => setActiveStep(0)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 text-gray-700 border border-gray-200 rounded-lg font-medium text-sm hover:bg-white transition-colors"
              aria-label="Reset to first step"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Process Timeline */}
        <ProcessTimeline 
          activeStep={activeStep} 
          onStepClick={handleStepClick}
          inView={isInView}
        />

        {/* Active Step Details */}
        <AnimatePresence mode="wait">
          <StepDetails
            step={PROCESS_STEPS[activeStep]}
            stepIndex={activeStep}
            onNext={handleNext}
            onPrev={handlePrev}
            onStepClick={handleStepClick}
            totalSteps={PROCESS_STEPS.length}
            inView={isInView}
          />
        </AnimatePresence>

        {/* Development Methodology */}
        <motion.div
          ref={methodologyRef}
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={methodologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={methodologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            >
              Development Philosophy
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={methodologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Built on proven methodologies and industry best practices that ensure exceptional quality and client satisfaction.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGIES.map((method, index) => (
              <MethodologyCard
                key={method.title}
                method={method}
                index={index}
                inView={methodologyInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
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
                Ready To Start Your Project?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Let's discuss your vision and discover how my proven process can transform your ideas into reality. 
                Free consultation and project estimate available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start your project with a free consultation"
                >
                  <Play className="w-5 h-5" />
                  <span>Start Project</span>
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View case studies and examples"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Case Studies</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                {[
                  { number: '6', label: 'Step Process', icon: Target },
                  { number: '150+', label: 'Projects Delivered', icon: Award },
                  { number: '98%', label: 'Client Satisfaction', icon: Star }
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

export default ProcessHowIWork;