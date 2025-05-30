'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    CheckCircle,
    Clock,
    Code,
    FileText,
    MessageSquare,
    Palette,
    Rocket,
    Search,
    Settings,
    Shield,
    Star,
    Target,
    TestTube,
    Zap
} from 'lucide-react';
import { useState } from 'react';

const ProcessHowIWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

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

  // Main process steps
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      subtitle: "Understanding Your Vision",
      icon: MessageSquare,
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30",
      duration: "1-2 Days",
      activities: [
        "Initial consultation and requirement gathering",
        "Project scope definition and timeline creation",
        "Technology stack selection and architecture planning",
        "Budget discussion and proposal creation"
      ],
      deliverables: ["Project Proposal", "Technical Specification", "Timeline & Milestones"],
      description: "We start by understanding your business goals, target audience, and specific requirements to create a roadmap for success."
    },
    {
      id: 2,
      title: "Research & Analysis",
      subtitle: "Market & Competition Analysis",
      icon: Search,
      gradient: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/30",
      duration: "2-3 Days",
      activities: [
        "Market research and competitor analysis",
        "User persona development and journey mapping",
        "Technical feasibility study",
        "Performance benchmarking and optimization planning"
      ],
      deliverables: ["Research Report", "User Personas", "Technical Analysis"],
      description: "Deep dive into your market, competitors, and user needs to ensure we build something that stands out and performs excellently."
    },
    {
      id: 3,
      title: "Design & Prototyping",
      subtitle: "Visual Identity & User Experience",
      icon: Palette,
      gradient: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-400/30",
      duration: "3-5 Days",
      activities: [
        "Wireframing and user flow creation",
        "UI/UX design and visual identity development",
        "Interactive prototype development",
        "Client review and design iteration"
      ],
      deliverables: ["Wireframes", "UI/UX Designs", "Interactive Prototype"],
      description: "Creating intuitive, beautiful designs that provide exceptional user experiences while reflecting your brand identity."
    },
    {
      id: 4,
      title: "Development & Integration",
      subtitle: "Building Your Digital Solution",
      icon: Code,
      gradient: "from-green-600 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30",
      duration: "1-4 Weeks",
      activities: [
        "Frontend development with modern frameworks",
        "Backend API development and database design",
        "Third-party integrations and custom features",
        "Code review and quality assurance"
      ],
      deliverables: ["Working Application", "Source Code", "Documentation"],
      description: "Transforming designs into fully functional, high-performance applications using cutting-edge technologies and best practices."
    },
    {
      id: 5,
      title: "Testing & Optimization",
      subtitle: "Quality Assurance & Performance",
      icon: TestTube,
      gradient: "from-orange-600 to-yellow-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30",
      duration: "2-3 Days",
      activities: [
        "Comprehensive testing across devices and browsers",
        "Performance optimization and speed enhancement",
        "Security testing and vulnerability assessment",
        "User acceptance testing and final adjustments"
      ],
      deliverables: ["Test Reports", "Performance Metrics", "Security Audit"],
      description: "Rigorous testing to ensure your application is fast, secure, and works flawlessly across all platforms and devices."
    },
    {
      id: 6,
      title: "Launch & Support",
      subtitle: "Going Live & Ongoing Partnership",
      icon: Rocket,
      gradient: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-400/30",
      duration: "Ongoing",
      activities: [
        "Production deployment and domain setup",
        "Training and knowledge transfer",
        "24/7 monitoring and maintenance",
        "Ongoing support and feature updates"
      ],
      deliverables: ["Live Website", "Training Materials", "Support Documentation"],
      description: "Smooth launch with comprehensive support, training, and ongoing maintenance to ensure long-term success."
    }
  ];

  // Key features/methodologies
  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with regular client feedback and flexible adaptation to changes.",
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing processes ensuring bug-free, high-performance applications.",
      icon: Shield,
      color: "text-green-500"
    },
    {
      title: "24/7 Communication",
      description: "Regular updates, transparent communication, and quick response to your queries.",
      icon: MessageSquare,
      color: "text-blue-500"
    },
    {
      title: "Performance First",
      description: "Optimized code and modern technologies for lightning-fast, scalable solutions.",
      icon: Target,
      color: "text-purple-500"
    }
  ];

  // Process benefits
  const benefits = [
    {
      title: "Transparent Process",
      description: "Clear milestones and regular updates throughout the project",
      icon: FileText,
      metric: "100%"
    },
    {
      title: "On-Time Delivery",
      description: "Structured timeline with realistic deadlines and buffer time",
      icon: Clock,
      metric: "95%"
    },
    {
      title: "Client Satisfaction",
      description: "Regular feedback loops and iterative improvements",
      icon: Star,
      metric: "97%"
    },
    {
      title: "Quality Assurance",
      description: "Multiple testing phases and code review processes",
      icon: Award,
      metric: "99%"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
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
            className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-3 font-medium text-sm tracking-wider uppercase mb-6"
          >
            <Settings className="w-4 h-4" />
            My Methodology
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
            A proven 6-step process that ensures successful project delivery, 
            transparent communication, and exceptional results every time.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div 
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform -translate-y-1/2"></div>
            
            {/* Timeline Steps */}
            <div className="flex justify-between items-center relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center cursor-pointer group"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Step Number */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg mb-4 relative ${
                    activeStep === index ? 'ring-4 ring-blue-200' : ''
                  }`}>
                    {step.id}
                    {/* Pulse Animation for Active Step */}
                    {activeStep === index && (
                      <motion.div
                        className="absolute inset-0 bg-blue-500/30"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  {/* Step Info */}
                  <div className="text-center max-w-xs">
                    <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-200">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-xs">{step.subtitle}</p>
                    <div className="text-blue-600 text-xs font-medium mt-1">{step.duration}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Process Cards */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`${step.bgColor} backdrop-blur-sm p-6 border ${step.borderColor}`}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-bold text-slate-800">{step.title}</h4>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium">{step.duration}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{step.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-slate-800 text-sm mb-2">Key Activities:</h5>
                    <ul className="space-y-1">
                      {step.activities.slice(0, 2).map((activity, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 text-sm mb-2">Deliverables:</h5>
                    <div className="flex flex-wrap gap-1">
                      {step.deliverables.map((deliverable, i) => (
                        <span key={i} className="px-2 py-1 bg-white/50 text-slate-700 text-xs">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Step Details (Desktop) */}
        <motion.div 
          className="hidden lg:block mb-16 md:mb-20"
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {processSteps[activeStep] && (
            <div className={`${processSteps[activeStep].bgColor} backdrop-blur-sm p-8 border ${processSteps[activeStep].borderColor}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${processSteps[activeStep].gradient} flex items-center justify-center text-white`}>
                      {(() => {
                        const IconComponent = processSteps[activeStep].icon;
                        return <IconComponent className="w-8 h-8" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{processSteps[activeStep].title}</h3>
                      <p className="text-slate-600">{processSteps[activeStep].subtitle}</p>
                      <div className="text-blue-600 font-medium text-sm">{processSteps[activeStep].duration}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{processSteps[activeStep].description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3 uppercase tracking-wider text-sm">Key Activities</h4>
                      <ul className="space-y-2">
                        {processSteps[activeStep].activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Deliverables</h4>
                  <div className="grid gap-3">
                    {processSteps[activeStep].deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/50 border border-white/30">
                        <FileText className="w-5 h-5 text-blue-500" />
                        <span className="font-medium text-slate-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2 mt-6">
                    {processSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-3 h-3 transition-all duration-200 ${
                          activeStep === index ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Methodologies */}
        <motion.div 
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              My Development Philosophy
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Built on proven methodologies and best practices that ensure quality, efficiency, and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                className="bg-white/80 backdrop-blur-sm p-6 border border-white/50 hover:shadow-xl transition-all duration-300 text-center group"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <motion.div
                  className={`w-12 h-12 mx-auto mb-4 ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                  animate={{ 
                    scale: hoveredFeature === index ? 1.1 : 1,
                    rotate: hoveredFeature === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <method.icon className="w-6 h-6" />
                </motion.div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {method.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Benefits */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <benefit.icon className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-105 transition-transform duration-200">
                {benefit.metric}
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {benefit.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Let's discuss your requirements and see how my proven process can bring your vision to life.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-bold hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              Start Discovery Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessHowIWork;