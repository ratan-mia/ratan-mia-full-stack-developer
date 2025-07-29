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
        className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg relative group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        <step.icon className="w-10 h-10" />
        
        {/* Step Number */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
          {step.id}
        </div>
      </motion.div>

      {/* Step Content */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-500 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-cyan-500 font-semibold text-sm mb-3">{step.subtitle}</p>
        <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-4">
          <span>⏱️ {step.duration}</span>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
      </div>

      {/* Key Activities */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl hover:border-cyan-300 transition-all duration-300">
        <h4 className="text-sm font-bold text-gray-900 mb-3">Key Activities:</h4>
        <ul className="space-y-2 text-left">
          {step.activities.map((activity, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Connection Line (except for last step) */}
      {index < PROCESS_STEPS.length - 1 && (
        <div className="hidden lg:block absolute top-10 left-full w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent transform translate-x-4" />
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
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      aria-label="Development process"
    >
      {/* Background Decoration */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow Text */}
          <motion.span
            className="text-cyan-500 font-semibold tracking-wider uppercase mb-2 inline-block bg-cyan-50 px-4 py-2 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            My Process
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            How I <span className="text-cyan-500">Work With You</span>
          </motion.h2>

          {/* Accent Line */}
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
          
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {PROCESS_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl hover:border-cyan-300 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.0 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">{stat.number}</div>
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
          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-gray-200 rounded-full blur-3xl"
                animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-cyan-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's transform your vision into reality with my proven process. 
                Free consultation and project estimate available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="bg-white hover:bg-gray-100 text-cyan-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Project</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
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