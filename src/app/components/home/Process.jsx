'use client';

import { motion, useInView } from 'framer-motion';
import { CheckCircle, Code, Lightbulb, Rocket, Settings, Star, Zap } from 'lucide-react';
import { useRef } from 'react';

// Process Step Component
const ProcessStep = ({ step, index, inView }) => {
  return (
    <motion.div
      className="relative flex flex-col text-left group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      {/* Step Number and Icon */}
      <div className="flex items-center mb-5">
        <motion.div 
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent-lime flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
          
          {/* Number Badge */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
          >
            <span className="text-xs font-bold text-accent-lime">{index + 1}</span>
          </motion.div>
        </motion.div>
        
        <div className="ml-3 sm:ml-4">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Step {index + 1}
          </div>
          <div className="text-sm font-extrabold text-black">
            {step.phase}
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 leading-tight">
        {step.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
        {step.description}
      </p>

      {/* Connection line for desktop */}
      {index < 3 && (
        <motion.div
          className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-accent-lime/40 to-gray-200"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </motion.div>
  );
};

// Main Process Component
const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const processSteps = [
    {
      icon: Lightbulb,
      phase: 'Discovery',
      title: 'Requirements & Planning',
      description: 'Deep-dive consultation to understand your business goals, technical requirements, and project scope with comprehensive planning.',
    },
    {
      icon: Settings,
      phase: 'Architecture',
      title: 'System Design & Architecture',
      description: 'Creating scalable system architecture, database design, and technology stack selection for optimal performance.',
    },
    {
      icon: Code,
      phase: 'Development',
      title: 'Development & Integration',
      description: 'Writing clean, maintainable code with modern frameworks, API integrations, and comprehensive testing.',
    },
    {
      icon: Rocket,
      phase: 'Deployment',
      title: 'Launch & Optimization',
      description: 'Seamless deployment with performance optimization, security implementation, and ongoing monitoring.',
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white" id="process">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-8 bg-accent-lime rounded-xl flex items-center justify-center">
              <Zap className="w-4 h-4 text-black" />
            </div>
            <span className="text-black font-extrabold text-sm uppercase tracking-widest">
              My Process
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-extrabold mb-6 leading-tight text-black"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            How I Work With<br />My Clients
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            style={{ lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Proven 4-step development process ensuring successful project delivery from concept to deployment.
          </motion.p>

          {/* Success metrics */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-accent-lime/50 transition-colors">
              <CheckCircle size={18} className="text-accent-lime" />
              <span className="text-sm font-bold text-black">150+ Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-accent-lime/50 transition-colors">
              <Zap size={18} className="text-accent-lime" />
              <span className="text-sm font-bold text-black">98% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-accent-lime/50 transition-colors">
              <Star size={18} className="text-accent-lime" />
              <span className="text-sm font-bold text-black">10+ Years</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px">
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={index}
                inView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
