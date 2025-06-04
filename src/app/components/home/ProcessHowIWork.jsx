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

  // Professional animation variants
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

  // Professional process steps
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500",
      duration: "1-2 Days",
      activities: [
        "Deep-dive consultation & requirement gathering",
        "Competitive analysis & market research",
        "Technology stack selection & architecture planning",
        "Project scope definition & timeline creation"
      ],
      deliverables: ["Strategic Blueprint", "Technical Roadmap", "Project Charter"],
      description: "We begin with comprehensive discovery to understand your business goals, target audience, and technical requirements, creating a strategic foundation for success.",
      metrics: { accuracy: "99%", satisfaction: "98%" }
    },
    {
      id: 2,
      title: "Research & Analysis",
      subtitle: "Data-Driven Insights",
      icon: Search,
      gradient: "from-blue-500 to-cyan-500",
      duration: "2-3 Days",
      activities: [
        "User persona development & journey mapping",
        "Competitor analysis & industry benchmarking",
        "Technical feasibility studies & performance audits",
        "SEO & accessibility requirement analysis"
      ],
      deliverables: ["Research Report", "User Personas", "Competitive Analysis"],
      description: "Comprehensive market and user research provides the insights needed to make informed design and development decisions that drive results.",
      metrics: { insights: "50+", research: "40h" }
    },
    {
      id: 3,
      title: "Design & Prototyping",
      subtitle: "Visual Excellence",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
      duration: "3-5 Days",
      activities: [
        "Wireframing & information architecture",
        "High-fidelity UI design & brand integration",
        "Interactive prototyping & user flow optimization",
        "Responsive design & accessibility compliance"
      ],
      deliverables: ["Design System", "Interactive Prototype", "Style Guide"],
      description: "Creating stunning, conversion-focused designs that reflect your brand while providing exceptional user experiences across all devices.",
      metrics: { screens: "25+", iterations: "3" }
    },
    {
      id: 4,
      title: "Development & Build",
      subtitle: "Bringing Ideas to Life",
      icon: Code,
      gradient: "from-emerald-500 to-green-500",
      duration: "1-4 Weeks",
      activities: [
        "Clean, scalable code development",
        "API integration & database optimization",
        "Third-party service connections & automation",
        "Performance optimization & security implementation"
      ],
      deliverables: ["Production Code", "API Documentation", "Admin Dashboard"],
      description: "Transforming designs into high-performance, scalable applications using modern technologies and industry best practices.",
      metrics: { uptime: "99.9%", speed: "< 2s" }
    },
    {
      id: 5,
      title: "Testing & Optimization",
      subtitle: "Quality Assurance",
      icon: TestTube,
      gradient: "from-red-500 to-rose-500",
      duration: "2-3 Days",
      activities: [
        "Cross-browser & device compatibility testing",
        "Performance optimization & speed enhancement",
        "Security audits & vulnerability assessments",
        "User acceptance testing & bug resolution"
      ],
      deliverables: ["QA Report", "Performance Metrics", "Security Audit"],
      description: "Rigorous testing across all platforms ensures your application performs flawlessly and securely for every user.",
      metrics: { tests: "200+", coverage: "95%" }
    },
    {
      id: 6,
      title: "Launch & Support",
      subtitle: "Going Live & Beyond",
      icon: Rocket,
      gradient: "from-indigo-500 to-blue-500",
      duration: "Ongoing",
      activities: [
        "Production deployment & DNS configuration",
        "Performance monitoring & analytics setup",
        "Team training & knowledge transfer",
        "Ongoing maintenance & feature updates"
      ],
      deliverables: ["Live Application", "Training Materials", "Support Plan"],
      description: "Smooth launch with comprehensive support, monitoring, and ongoing partnership to ensure long-term success and growth.",
      metrics: { support: "24/7", response: "< 2h" }
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with continuous feedback and rapid adaptation",
      icon: Zap,
      color: "text-amber-500 dark:text-amber-400"
    },
    {
      title: "User-Centered Design",
      description: "Every decision backed by user research and behavioral data",
      icon: Users,
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      title: "Performance First",
      description: "Optimized for speed, scalability, and exceptional user experience",
      icon: TrendingUp,
      color: "text-emerald-500 dark:text-emerald-400"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and security at every development stage",
      icon: Shield,
      color: "text-purple-500 dark:text-purple-400"
    }
  ];

  const keyMetrics = [
    { metric: "98%", label: "Client Satisfaction", icon: Star, color: "text-amber-500 dark:text-amber-400" },
    { metric: "< 2s", label: "Load Time", icon: Zap, color: "text-blue-500 dark:text-blue-400" },
    { metric: "95%", label: "On-Time Delivery", icon: Clock, color: "text-emerald-500 dark:text-emerald-400" },
    { metric: "24/7", label: "Support Available", icon: Shield, color: "text-purple-500 dark:text-purple-400" }
  ];

  return (
    <section id="process" className="relative py-16 overflow-hidden bg-gray-950">
      {/* Carbon Fiber Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Professional Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-800/30 backdrop-blur-sm text-blue-400 px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase mb-8"
          >
            <Settings className="w-4 h-4" />
            My Process
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight"
          >
            How I Work
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A systematic 6-step process designed to deliver exceptional results, ensure transparent communication, and exceed your expectations every time
          </motion.p>
        </motion.div>

        {/* Professional Horizontal Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative">
            {/* Background Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-800 border border-gray-700 rounded-full transform -translate-y-1/2 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-blue-500 via-purple-500 via-emerald-500 via-red-500 to-indigo-500 rounded-full shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${progressWidth}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="relative flex justify-between items-center px-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="group relative cursor-pointer flex flex-col items-center touch-manipulation"
                  variants={itemVariants}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Item Glow Effect */}
                  <div className="absolute -inset-5 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-full blur-xl transition-all duration-500"></div>
                  
                  {/* Step Icon with Enhanced Design */}
                  <motion.div
                    className={`relative z-10 w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl mb-4 ${
                      activeStep === index ? 'ring-4 ring-white shadow-2xl scale-110' : ''
                    } ${hoveredStep === index ? 'shadow-2xl' : ''} transition-all duration-300`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-9 h-9" />
                    
                    {/* Active pulse animation */}
                    {activeStep === index && (
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-2xl"
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
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      {step.id}
                    </div>
                  </motion.div>

                  {/* Step Info */}
                  <div className="relative z-10 text-center max-w-sm">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {step.subtitle}
                    </p>
                    <motion.div 
                      className="inline-block px-4 py-2 bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-800/30 backdrop-blur-sm text-blue-400 text-xs font-medium rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.duration}
                    </motion.div>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute -bottom-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional Active Step Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl">
              {/* Item Glow Effect */}
              <div className="absolute -inset-1 bg-blue-600/0 hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column */}
                <div>
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${processSteps[activeStep].gradient} rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0`}>
                      {(() => {
                        const IconComponent = processSteps[activeStep].icon;
                        return <IconComponent className="w-10 h-10" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                        {processSteps[activeStep].title}
                      </h3>
                      <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                        {processSteps[activeStep].subtitle}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                          {processSteps[activeStep].duration}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <BarChart3 className="w-4 h-4" />
                          Progress Milestone
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {processSteps[activeStep].description}
                  </p>

                  {/* Key Activities */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider">
                      Key Activities
                    </h4>
                    <div className="space-y-4">
                      {processSteps[activeStep].activities.map((activity, i) => (
                        <motion.div
                          key={i}
                          className="group flex items-start gap-4 p-4 bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-blue-800/50 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          whileHover={{ x: 4 }}
                        >
                          {/* Item Glow Effect */}
                          <div className="absolute -right-5 -top-5 w-20 h-20 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-xl blur transition-all duration-500"></div>
                          
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">
                            {activity}
                          </span>

                          {/* Accent Line */}
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-6">
                      Deliverables
                    </h4>
                    <div className="space-y-4">
                      {processSteps[activeStep].deliverables.map((deliverable, i) => (
                        <motion.div
                          key={i}
                          className="group flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-blue-800/50 hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.01, x: 2 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          {/* Item Glow Effect */}
                          <div className="absolute -right-5 -top-5 w-20 h-20 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-xl blur transition-all duration-500"></div>
                          
                          <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />
                          <span className="font-medium text-gray-300 text-lg">
                            {deliverable}
                          </span>

                          {/* Accent Line */}
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-6">
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(processSteps[activeStep].metrics).map(([key, value], i) => (
                        <div key={i} className="text-center p-6 bg-gray-800 border border-gray-700 rounded-xl">
                          <div className="text-3xl font-bold text-blue-400 mb-2">
                            {value}
                          </div>
                          <div className="text-sm text-gray-400 capitalize font-medium">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-12 pt-8 border-t border-gray-800">
                {processSteps.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation ${
                      activeStep === index 
                        ? 'bg-blue-600 shadow-lg scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: activeStep === index ? 1.25 : 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className={`w-3 h-3 rounded-full ${
                      activeStep === index 
                        ? 'bg-blue-600' 
                        : 'bg-gray-600'
                    }`} />
                  </motion.button>
                ))}
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Professional Methodologies Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              My Development Philosophy
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Built on proven methodologies and industry best practices that ensure exceptional quality and client success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                transition={{ delay: index * 0.08 }}
                className="group relative cursor-pointer bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-blue-800/50 hover:shadow-xl transition-all duration-500 text-center"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Item Glow Effect */}
                <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
                
                <motion.div
                  className={`relative z-10 w-16 h-16 mx-auto mb-6 ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <method.icon className="w-8 h-8" />
                </motion.div>
                <h4 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {method.title}
                </h4>
                <p className="relative z-10 text-gray-400 leading-relaxed text-sm">
                  {method.description}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/0 group-hover:via-blue-600/50 to-transparent transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Key Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                transition={{ delay: index * 0.08 }}
                className="group relative cursor-pointer text-center p-8 bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-800/50 rounded-2xl hover:shadow-xl transition-all duration-500"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                {/* Item Glow Effect */}
                <div className="absolute -inset-1 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-2xl blur transition-all duration-500"></div>
                
                <metric.icon className={`relative z-10 w-12 h-12 ${metric.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} />
                <div className={`relative z-10 text-4xl md:text-5xl font-bold ${metric.color} mb-4 group-hover:scale-105 transition-transform duration-300 leading-none`}>
                  {metric.metric}
                </div>
                <h4 className="relative z-10 text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {metric.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional CTA Section */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform Your Vision?
              </h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
                Let's discuss your project and discover how my proven process can deliver exceptional results for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-102 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-6 h-6" />
                  Start Your Project
                </motion.button>
                <motion.button
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-6 h-6" />
                  View Case Studies
                  <ArrowRight className="w-6 h-6" />
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