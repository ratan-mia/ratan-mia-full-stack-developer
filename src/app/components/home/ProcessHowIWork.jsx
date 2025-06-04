'use client';

import { AnimatePresence, motion } from 'framer-motion';
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
      description: "Comprehensive discovery to understand your business goals, target audience, and technical requirements.",
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
      description: "Comprehensive market and user research provides insights needed for informed design and development decisions.",
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
      description: "Creating stunning, conversion-focused designs that reflect your brand while providing exceptional user experiences.",
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
      description: "Transforming designs into high-performance, scalable applications using modern technologies and best practices.",
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
      description: "Smooth launch with comprehensive support, monitoring, and ongoing partnership to ensure long-term success.",
      metrics: { support: "24/7", response: "< 2h" }
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with continuous feedback and rapid adaptation",
      icon: Zap,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "User-Centered Design",
      description: "Every decision backed by user research and behavioral data",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Performance First",
      description: "Optimized for speed, scalability, and exceptional user experience",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and security at every development stage",
      icon: Shield,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const keyMetrics = [
    { metric: "98%", label: "Client Satisfaction", icon: Star, gradient: "from-amber-500 to-orange-500" },
    { metric: "< 2s", label: "Load Time", icon: Zap, gradient: "from-blue-500 to-cyan-500" },
    { metric: "95%", label: "On-Time Delivery", icon: Clock, gradient: "from-emerald-500 to-green-500" },
    { metric: "24/7", label: "Support Available", icon: Shield, gradient: "from-purple-500 to-indigo-500" }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <section id="process" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
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
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            How I Work
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A systematic 6-step process designed to deliver exceptional results and exceed expectations every time.
          </motion.p>

          {/* Compact Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
          >
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <metric.icon className={`w-5 h-5 mx-auto mb-1`} style={{ color: metric.gradient.includes('amber') ? '#f59e0b' : metric.gradient.includes('blue') ? '#3b82f6' : metric.gradient.includes('emerald') ? '#22c55e' : '#a855f7' }} />
                <div className={`text-xl font-black mb-1`} style={{ color: metric.gradient.includes('amber') ? '#f59e0b' : metric.gradient.includes('blue') ? '#3b82f6' : metric.gradient.includes('emerald') ? '#22c55e' : '#a855f7' }}>{metric.metric}</div>
                <div className="text-slate-600 text-sm font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Compact Interactive Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Mobile Timeline (Stepper Style) */}
          <div className="md:hidden mb-8">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`relative flex items-center gap-4 cursor-pointer ${
                      activeStep === index ? 'opacity-100' : 'opacity-50'
                    }`}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white shadow-lg z-10 ${
                      activeStep === index ? 'ring-4 ring-blue-400' : ''
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-sm">{step.title}</h3>
                      <p className="text-slate-600 text-xs">{step.duration}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Background Progress Bar */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 rounded-full transform -translate-y-1/2">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 via-blue-500 via-purple-500 via-emerald-500 via-red-500 to-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressWidth}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              {/* Timeline Steps */}
              <div className="relative flex justify-between items-center px-2">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="group relative cursor-pointer flex flex-col items-center max-w-32"
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Step Icon */}
                    <motion.div
                      className={`relative z-10 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white shadow-lg mb-3 ${
                        activeStep === index ? 'ring-4 ring-blue-400 shadow-2xl scale-110' : ''
                      } transition-all duration-300`}
                      whileHover={{ y: -2 }}
                    >
                      <step.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      
                      {/* Step number */}
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-white text-slate-800 rounded-full flex items-center justify-center text-xs font-bold">
                        {step.id}
                      </div>
                    </motion.div>

                    {/* Step Info */}
                    <div className="text-center">
                      <h3 className="text-sm lg:text-base font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-xs mb-2">
                        {step.subtitle}
                      </p>
                      <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-lg">
                        {step.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compact Active Step Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/50 shadow-xl">
              {/* Step Navigation for Mobile */}
              <div className="flex items-center justify-between mb-6 md:hidden">
                <motion.button
                  onClick={prevStep}
                  className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </motion.button>
                
                <div className="text-center">
                  <div className="text-sm text-slate-500">Step {activeStep + 1} of {processSteps.length}</div>
                  <h3 className="text-lg font-bold text-slate-800">{processSteps[activeStep].title}</h3>
                </div>
                
                <motion.button
                  onClick={nextStep}
                  className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </motion.button>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Left Column */}
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${processSteps[activeStep].gradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {(() => {
                        const IconComponent = processSteps[activeStep].icon;
                        return <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <div className="hidden md:block">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                          {processSteps[activeStep].title}
                        </h3>
                        <p className="text-lg text-slate-600 mb-3 font-light">
                          {processSteps[activeStep].subtitle}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-lg">
                          {processSteps[activeStep].duration}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <BarChart3 className="w-4 h-4" />
                          Progress Milestone
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                    {processSteps[activeStep].description}
                  </p>

                  {/* Compact Key Activities */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Key Activities
                    </h4>
                    <div className="space-y-2">
                      {processSteps[activeStep].activities.slice(0, 3).map((activity, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm leading-relaxed">
                            {activity}
                          </span>
                        </motion.div>
                      ))}
                      {processSteps[activeStep].activities.length > 3 && (
                        <div className="text-xs text-slate-500 ml-7">+{processSteps[activeStep].activities.length - 3} more activities</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Compact Deliverables */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      Deliverables
                    </h4>
                    <div className="space-y-2">
                      {processSteps[activeStep].deliverables.map((deliverable, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="font-medium text-slate-700 text-sm">
                            {deliverable}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Compact Metrics */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-500" />
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(processSteps[activeStep].metrics).map(([key, value], i) => (
                        <div key={i} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30">
                          <div className={`text-xl lg:text-2xl font-black bg-gradient-to-r ${processSteps[activeStep].gradient} bg-clip-text text-transparent mb-1`}>
                            {value}
                          </div>
                          <div className="text-xs text-slate-600 capitalize font-medium">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8 pt-6 border-t border-slate-200">
                {processSteps.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    whileHover={{ scale: activeStep === index ? 1.25 : 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Compact Development Philosophy */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">
              Development Philosophy
            </h3>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Built on proven methodologies and industry best practices that ensure exceptional quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <motion.div
                  className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <method.icon className="w-6 h-6" />
                </motion.div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {method.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                Ready to Transform Your Vision?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Let's discuss your project and discover how my proven process can deliver exceptional results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  <span>Start Project</span>
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>View Cases</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessHowIWork;