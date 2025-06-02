'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Clock,
  Code,
  FileText,
  Lightbulb,
  MessageSquare,
  Palette,
  Play,
  Rocket,
  Search,
  Settings,
  Shield,
  Star,
  TestTube,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ProcessHowIWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressWidth((activeStep + 1) / processSteps.length * 100);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeStep]);

  // Optimized animation variants following design guidelines
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Enhanced process steps
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      duration: "1-2 Days",
      progress: 16.66,
      activities: [
        "Deep-dive consultation & requirement gathering",
        "Competitive analysis & market research",
        "Technology stack selection & architecture planning",
        "Project scope definition & timeline creation"
      ],
      deliverables: ["Strategic Blueprint", "Technical Roadmap", "Project Charter"],
      description: "We begin with comprehensive discovery to understand your business goals, target audience, and technical requirements, creating a strategic foundation for success.",
      metrics: { accuracy: "99%", satisfaction: "98%" },
      tools: ["Figma", "Notion", "Miro", "Analytics"]
    },
    {
      id: 2,
      title: "Research & Analysis",
      subtitle: "Data-Driven Insights",
      icon: Search,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      duration: "2-3 Days",
      progress: 33.33,
      activities: [
        "User persona development & journey mapping",
        "Competitor analysis & industry benchmarking",
        "Technical feasibility studies & performance audits",
        "SEO & accessibility requirement analysis"
      ],
      deliverables: ["Research Report", "User Personas", "Competitive Analysis"],
      description: "Comprehensive market and user research provides the insights needed to make informed design and development decisions that drive results.",
      metrics: { insights: "50+", research: "40h" },
      tools: ["Hotjar", "SEMrush", "Google Analytics", "Ahrefs"]
    },
    {
      id: 3,
      title: "Design & Prototyping",
      subtitle: "Visual Excellence",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      duration: "3-5 Days",
      progress: 50,
      activities: [
        "Wireframing & information architecture",
        "High-fidelity UI design & brand integration",
        "Interactive prototyping & user flow optimization",
        "Responsive design & accessibility compliance"
      ],
      deliverables: ["Design System", "Interactive Prototype", "Style Guide"],
      description: "Creating stunning, conversion-focused designs that reflect your brand while providing exceptional user experiences across all devices.",
      metrics: { screens: "25+", iterations: "3" },
      tools: ["Figma", "Principle", "InVision", "Zeplin"]
    },
    {
      id: 4,
      title: "Development & Build",
      subtitle: "Bringing Ideas to Life",
      icon: Code,
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
      duration: "1-4 Weeks",
      progress: 66.66,
      activities: [
        "Clean, scalable code development",
        "API integration & database optimization",
        "Third-party service connections & automation",
        "Performance optimization & security implementation"
      ],
      deliverables: ["Production Code", "API Documentation", "Admin Dashboard"],
      description: "Transforming designs into high-performance, scalable applications using modern technologies and industry best practices.",
      metrics: { uptime: "99.9%", speed: "< 2s" },
      tools: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      id: 5,
      title: "Testing & Optimization",
      subtitle: "Quality Assurance",
      icon: TestTube,
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20",
      duration: "2-3 Days",
      progress: 83.33,
      activities: [
        "Cross-browser & device compatibility testing",
        "Performance optimization & speed enhancement",
        "Security audits & vulnerability assessments",
        "User acceptance testing & bug resolution"
      ],
      deliverables: ["QA Report", "Performance Metrics", "Security Audit"],
      description: "Rigorous testing across all platforms ensures your application performs flawlessly and securely for every user.",
      metrics: { tests: "200+", coverage: "95%" },
      tools: ["Jest", "Cypress", "Lighthouse", "OWASP"]
    },
    {
      id: 6,
      title: "Launch & Support",
      subtitle: "Going Live & Beyond",
      icon: Rocket,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20",
      duration: "Ongoing",
      progress: 100,
      activities: [
        "Production deployment & DNS configuration",
        "Performance monitoring & analytics setup",
        "Team training & knowledge transfer",
        "Ongoing maintenance & feature updates"
      ],
      deliverables: ["Live Application", "Training Materials", "Support Plan"],
      description: "Smooth launch with comprehensive support, monitoring, and ongoing partnership to ensure long-term success and growth.",
      metrics: { support: "24/7", response: "< 2h" },
      tools: ["Vercel", "Cloudflare", "Sentry", "Slack"]
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with continuous feedback and rapid adaptation",
      icon: Zap,
      color: "text-amber-500 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
      title: "User-Centered Design",
      description: "Every decision backed by user research and behavioral data",
      icon: Users,
      color: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Performance First",
      description: "Optimized for speed, scalability, and exceptional user experience",
      icon: TrendingUp,
      color: "text-emerald-500 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and security at every development stage",
      icon: Shield,
      color: "text-purple-500 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  const keyMetrics = [
    { metric: "98%", label: "Client Satisfaction", icon: Star, color: "text-amber-500 dark:text-amber-400" },
    { metric: "< 2s", label: "Load Time", icon: Zap, color: "text-blue-500 dark:text-blue-400" },
    { metric: "95%", label: "On-Time Delivery", icon: Clock, color: "text-emerald-500 dark:text-emerald-400" },
    { metric: "24/7", label: "Support Available", icon: Shield, color: "text-purple-500 dark:text-purple-400" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase mb-6 sm:mb-8 shadow-lg border border-blue-200/50 dark:border-blue-800/50"
          >
            <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
            My Process
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-balance"
          >
            How I Work
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            A systematic 6-step process designed to deliver exceptional results, ensure transparent communication, and exceed your expectations every time
          </motion.p>
        </motion.div>

        {/* Enhanced Horizontal Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Timeline Container */}
          <div className="relative">
            {/* Background Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-1 sm:h-2 bg-slate-200 dark:bg-slate-700 rounded-full transform -translate-y-1/2 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-blue-500 via-purple-500 via-emerald-500 via-red-500 to-indigo-500 rounded-full shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${progressWidth}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="relative flex justify-between items-center px-2 sm:px-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center cursor-pointer group min-h-[44px] touch-manipulation"
                  variants={itemVariants}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Step Icon with Enhanced Design */}
                  <motion.div
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${step.gradient} rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center text-white shadow-lg sm:shadow-xl mb-3 sm:mb-4 ${
                      activeStep === index ? 'ring-2 sm:ring-4 ring-white shadow-xl sm:shadow-2xl scale-105 sm:scale-110' : ''
                    } ${hoveredStep === index ? 'shadow-xl sm:shadow-2xl' : ''} focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select step ${step.id}: ${step.title}`}
                  >
                    <step.icon className="w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9" />
                    
                    {/* Active pulse animation */}
                    {activeStep === index && (
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl lg:rounded-3xl"
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          opacity: [0.5, 0, 0.5] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-white text-slate-900 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      {step.id}
                    </div>
                  </motion.div>

                  {/* Step Info */}
                  <div className="text-center max-w-[120px] sm:max-w-xs lg:max-w-sm">
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm lg:text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs lg:text-sm leading-relaxed mb-1 sm:mb-2 hidden sm:block">
                      {step.subtitle}
                    </p>
                    <motion.div 
                      className="inline-block px-2 sm:px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-200/50 dark:border-blue-800/50 shadow-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="hidden sm:inline">{step.duration}</span>
                      <span className="sm:hidden">{step.duration.split(' ')[0]}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Active Step Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className={`bg-gradient-to-br ${processSteps[activeStep].bgGradient} backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/50 dark:border-slate-700/50 shadow-xl sm:shadow-2xl`}>
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {/* Left Column */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${processSteps[activeStep].gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg sm:shadow-xl flex-shrink-0`}>
                      {(() => {
                        const IconComponent = processSteps[activeStep].icon;
                        return <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        {processSteps[activeStep].title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-3">
                        {processSteps[activeStep].subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-full">
                          {processSteps[activeStep].duration}
                        </span>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
                          {processSteps[activeStep].progress}% Complete
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
                    {processSteps[activeStep].description}
                  </p>

                  {/* Key Activities */}
                  <div className="space-y-4 sm:space-y-6">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg uppercase tracking-wider">
                      Key Activities
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {processSteps[activeStep].activities.map((activity, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-slate-700/30"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                            {activity}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Deliverables */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg uppercase tracking-wider mb-4 sm:mb-6">
                      Deliverables
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {processSteps[activeStep].deliverables.map((deliverable, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.01, x: 2 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
                          <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm sm:text-lg">
                            {deliverable}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Technologies */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg uppercase tracking-wider mb-3 sm:mb-4">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {processSteps[activeStep].tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 sm:px-4 py-1 sm:py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium rounded-full border border-slate-200 dark:border-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg uppercase tracking-wider mb-3 sm:mb-4">
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {Object.entries(processSteps[activeStep].metrics).map(([key, value], i) => (
                        <div key={i} className="text-center p-3 sm:p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/50 dark:border-slate-700/50">
                          <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            {value}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/30 dark:border-slate-700/30">
                {processSteps.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                      activeStep === index 
                        ? 'bg-blue-600 shadow-lg scale-125' 
                        : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                    }`}
                    whileHover={{ scale: activeStep === index ? 1.25 : 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to step ${index + 1}`}
                  >
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      activeStep === index 
                        ? 'bg-blue-600' 
                        : 'bg-slate-300 dark:bg-slate-600'
                    }`} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Methodologies Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 text-balance">
              My Development Philosophy
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              Built on proven methodologies and industry best practices that ensure exceptional quality and client success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                transition={{ delay: index * 0.08 }}
                className={`${method.bgColor} backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/50 dark:border-slate-700/50 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 text-center group cursor-pointer`}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <method.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {method.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Key Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                transition={{ delay: index * 0.08 }}
                className="text-center p-6 sm:p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/50 dark:border-slate-700/50 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 group"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <metric.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${metric.color} mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`} />
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${metric.color} mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {metric.metric}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {metric.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl sm:shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                Ready to Transform Your Vision?
              </h3>
              <p className="text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
                Let's discuss your project and discover how my proven process can deliver exceptional results for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-blue-50 hover:scale-102 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 min-h-[44px] touch-manipulation"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  Start Your Project
                </motion.button>
                <motion.button
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white/50 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white/10 hover:border-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 min-h-[44px] touch-manipulation"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span className="hidden sm:inline">View Case Studies</span>
                  <span className="sm:hidden">Case Studies</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessHowIWork;