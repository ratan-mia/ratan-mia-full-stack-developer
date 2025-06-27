'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Lightbulb,
  Palette,
  Code,
  Rocket
} from 'lucide-react';
import { useRef } from 'react';

// Simplified Process Steps - Only 4 Core Steps
const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    icon: Lightbulb,
    gradient: "from-amber-500 to-orange-500",
    duration: "1-2 Days",
    description: "Deep-dive consultation to understand your business goals, target audience, and technical requirements.",
    activities: [
      "Requirements gathering & consultation",
      "Market research & analysis", 
      "Technology planning",
      "Project roadmap creation"
    ]
  },
  {
    id: 2,
    title: "Design",
    subtitle: "Visual Excellence",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    duration: "3-5 Days",
    description: "Creating stunning, user-focused designs that reflect your brand and drive conversions.",
    activities: [
      "Wireframing & prototyping",
      "UI/UX design creation",
      "Responsive design",
      "Design system development"
    ]
  },
  {
    id: 3,
    title: "Development",
    subtitle: "Bringing Ideas to Life",
    icon: Code,
    gradient: "from-emerald-500 to-green-500",
    duration: "1-4 Weeks",
    description: "Clean, scalable code development using modern technologies and best practices.",
    activities: [
      "Frontend & backend development",
      "API integration",
      "Performance optimization",
      "Quality assurance testing"
    ]
  },
  {
    id: 4,
    title: "Launch",
    subtitle: "Going Live & Beyond",
    icon: Rocket,
    gradient: "from-indigo-500 to-blue-500",
    duration: "Ongoing",
    description: "Smooth deployment with ongoing support, monitoring, and maintenance for long-term success.",
    activities: [
      "Production deployment",
      "Performance monitoring",
      "Team training",
      "Ongoing support & updates"
    ]
  }
];

const PROCESS_STATS = [
  { number: '4', label: 'Step Process' },
  { number: '98%', label: 'Success Rate' },
  { number: '150+', label: 'Projects' },
  { number: '24/7', label: 'Support' }
];

// Process Step Component
const ProcessStep = ({ step, index, inView }) => {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Step Icon */}
      <motion.div
        className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg relative group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: 5 }}
      >
        <step.icon className="w-10 h-10" />
        
        {/* Step Number */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-gray-800 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
          {step.id}
        </div>
      </motion.div>

      {/* Step Content */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-blue-600 font-semibold text-sm mb-3">{step.subtitle}</p>
        <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-4">
          <span>⏱️ {step.duration}</span>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
      </div>

      {/* Key Activities */}
      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50">
        <h4 className="text-sm font-bold text-gray-800 mb-3">Key Activities:</h4>
        <ul className="space-y-2 text-left">
          {step.activities.map((activity, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${step.gradient} rounded-full mt-2 flex-shrink-0`} />
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Connection Line (except for last step) */}
      {index < PROCESS_STEPS.length - 1 && (
        <div className="hidden lg:block absolute top-10 left-full w-20 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-4" />
      )}
    </motion.div>
  );
};

// Main Process Component
const ProcessHowIWork = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);
  const ctaRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const stepsInView = useInView(stepsRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      aria-label="Development process"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200/50 text-indigo-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>My Process</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            How I Work With You
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            A streamlined 4-step process designed to deliver exceptional results. 
            Transparent, collaborative, and results-driven.
          </motion.p>
        </motion.div>

        {/* Process Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {PROCESS_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/80 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.0 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          ref={stepsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
              inView={stepsInView}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          ref={ctaRef}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's transform your vision into reality with my proven process. 
                Free consultation and project estimate available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Project</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Examples
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