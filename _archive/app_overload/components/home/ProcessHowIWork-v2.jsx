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

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="process" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
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
        <motion.div 
          className="absolute top-1/2 right-1/3 w-32 h-32 md:w-64 md:h-64 bg-green-500/5 rounded-full blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-indigo-100 text-indigo-800 px-6 py-3 font-medium text-sm tracking-wider uppercase mb-6"
          >
            <Settings className="w-4 h-4" />
            My Process
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            How I Work
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A systematic 6-step process designed to deliver exceptional results, ensure transparent communication, and exceed your expectations every time
          </motion.p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="relative">
            {/* Background Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full transform -translate-y-1/2 shadow-inner">
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
                  className="group relative cursor-pointer flex flex-col items-center"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Step Icon */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-xl mb-4 ${
                      activeStep === index ? 'ring-4 ring-blue-400 shadow-2xl scale-110' : ''
                    } ${hoveredStep === index ? 'shadow-2xl' : ''} transition-all duration-300`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                    
                    {/* Active pulse animation */}
                    {activeStep === index && (
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-xl"
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
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-slate-800 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      {step.id}
                    </div>
                  </motion.div>

                  {/* Step Info */}
                  <div className="relative z-10 text-center max-w-sm">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {step.subtitle}
                    </p>
                    <motion.div 
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.duration}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Active Step Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-white/50">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column */}
                <div>
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${processSteps[activeStep].gradient} flex items-center justify-center text-white shadow-xl flex-shrink-0`}>
                      {(() => {
                        const IconComponent = processSteps[activeStep].icon;
                        return <IconComponent className="w-8 h-8 md:w-10 md:h-10" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                        {processSteps[activeStep].title}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-600 mb-4 font-light">
                        {processSteps[activeStep].subtitle}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium">
                          {processSteps[activeStep].duration}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <BarChart3 className="w-4 h-4" />
                          Progress Milestone
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {processSteps[activeStep].description}
                  </p>

                  {/* Key Activities */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Key Activities
                    </h4>
                    <div className="space-y-3">
                      {processSteps[activeStep].activities.map((activity, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:shadow-md transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 leading-relaxed">
                            {activity}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wider mb-6 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      Deliverables
                    </h4>
                    <div className="space-y-3">
                      {processSteps[activeStep].deliverables.map((deliverable, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:shadow-md transition-all duration-300"
                          whileHover={{ scale: 1.01, x: 2 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <FileText className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="font-medium text-slate-700 text-lg">
                            {deliverable}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wider mb-6 flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-500" />
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(processSteps[activeStep].metrics).map(([key, value], i) => (
                        <div key={i} className="text-center p-6 bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:shadow-md transition-all duration-300">
                          <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${processSteps[activeStep].gradient} bg-clip-text text-transparent mb-2`}>
                            {value}
                          </div>
                          <div className="text-sm text-slate-600 capitalize font-medium">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-12 pt-8 border-t border-slate-200">
                {processSteps.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-blue-600 shadow-lg scale-125' 
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

        {/* Development Philosophy */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              My Development Philosophy
            </h3>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Built on proven methodologies and industry best practices that ensure exceptional quality and client success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <method.icon className="w-8 h-8" />
                </motion.div>
                <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {method.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 md:p-8 bg-white/80 backdrop-blur-sm shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className={`w-12 h-12 mx-auto mb-6 bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {metric.metric}
                </div>
                <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {metric.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Let's discuss your project and discover how my proven process can deliver exceptional results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 font-bold text-lg hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Start Your Project
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-5 h-5" />
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessHowIWork;