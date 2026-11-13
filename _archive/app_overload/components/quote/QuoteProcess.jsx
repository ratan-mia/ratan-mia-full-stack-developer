'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Handshake,
  MessageCircle,
  Monitor,
  Rocket,
  Search,
  Settings,
  Star,
  Target,
  Users
} from 'lucide-react';
import { useRef, useState } from 'react';

const QuoteProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description: "We start with a detailed discussion about your project requirements, goals, and vision.",
      details: [
        "Free 30-minute consultation call",
        "Project scope discussion",
        "Technical requirements analysis",
        "Timeline and budget expectations"
      ],
      duration: "30 minutes",
      deliverable: "Project brief",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Requirements Analysis",
      description: "I analyze your needs and create a comprehensive project plan with detailed specifications.",
      details: [
        "Detailed feature breakdown",
        "Technical architecture planning",
        "Third-party integrations mapping",
        "User experience flow design"
      ],
      duration: "1-2 days",
      deliverable: "Technical spec",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Detailed Quote",
      description: "You receive a comprehensive quote with transparent pricing and clear project timeline.",
      details: [
        "Itemized cost breakdown",
        "Development timeline",
        "Payment schedule",
        "Terms and conditions"
      ],
      duration: "24 hours",
      deliverable: "Detailed proposal",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Handshake,
      title: "Agreement & Kickoff",
      description: "Once you approve the quote, we finalize the agreement and kickoff the project.",
      details: [
        "Contract signing",
        "Initial payment processing",
        "Project workspace setup",
        "Communication channels"
      ],
      duration: "Same day",
      deliverable: "Signed contract",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Settings,
      title: "Development Phase",
      description: "I build your project with regular updates and opportunities for feedback.",
      details: [
        "Agile development approach",
        "Weekly progress updates",
        "Regular demo sessions",
        "Continuous feedback integration"
      ],
      duration: "As per timeline",
      deliverable: "Working application",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Delivery & Launch",
      description: "Final testing, deployment, and launch support to ensure everything works perfectly.",
      details: [
        "Comprehensive testing",
        "Deployment setup",
        "Launch support",
        "Documentation handover"
      ],
      duration: "1-2 days",
      deliverable: "Live project",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "Get your quote within 24 hours",
      stats: "< 24h"
    },
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "100% satisfaction or money back",
      stats: "100%"
    },
    {
      icon: Users,
      title: "Direct Communication",
      description: "Work directly with me, no middlemen",
      stats: "1-on-1"
    },
    {
      icon: Target,
      title: "On-Time Delivery",
      description: "Projects delivered on schedule",
      stats: "98%"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-800 dark:to-slate-900/50 relative overflow-hidden"
      id="quote-process"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Rocket className="w-4 h-4" />
            Our Process
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
          >
            How We Work
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            From initial consultation to final delivery, here's exactly what you can expect 
            when working with me. Clear process, transparent communication, and guaranteed results.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Steps Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeStep === index
                    ? 'border-blue-300 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-blue-200 dark:hover:border-blue-600'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                    activeStep === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeStep === index
                      ? `bg-gradient-to-br ${step.color}`
                      : 'bg-slate-100 dark:bg-slate-700'
                  }`}>
                    <step.icon className={`w-6 h-6 transition-colors duration-300 ${
                      activeStep === index ? 'text-white' : 'text-slate-500 dark:text-slate-400'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${
                      activeStep === index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-white'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {step.deliverable}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                    activeStep === index 
                      ? 'text-blue-600 dark:text-blue-400 rotate-90' 
                      : 'text-slate-400 dark:text-slate-500'
                  }`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-8"
          >
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${steps[activeStep].color} rounded-2xl flex items-center justify-center mb-6`}>
                {(() => {
                  const IconComponent = steps[activeStep].icon;
                  return <IconComponent className="w-10 h-10 text-white" />;
                })()}
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {steps[activeStep].title}
              </h3>
              
              {/* Description */}
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>
              
              {/* Details */}
              <div className="space-y-3 mb-8">
                {steps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300">{detail}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Duration</div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {steps[activeStep].duration}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Deliverable</div>
                  <div className="text-lg font-bold text-slate-800 dark:text-white">
                    {steps[activeStep].deliverable}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">
                {benefit.stats}
              </div>
              
              <div className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                {benefit.title}
              </div>
              
              <div className="text-sm text-slate-600 dark:text-slate-300">
                {benefit.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="p-8 lg:p-12 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-3xl text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
              Let's begin with a free consultation. I'll analyze your requirements 
              and provide a detailed quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </motion.button>
              
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-slate-800 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Quick Chat via WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteProcess;