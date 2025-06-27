'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Code,
  Lightbulb,
  Palette,
  Rocket
} from 'lucide-react';
import { useRef } from 'react';

// Process Steps - Updated with design system colors
const PROCESS_STEPS = [
  {
    id: 1,
    title: "DISCOVERY",
    subtitle: "UNDERSTANDING YOUR VISION",
    icon: Lightbulb,
    gradient: "from-cyan-500 to-blue-500",
    duration: "1-2 DAYS",
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
    title: "DESIGN",
    subtitle: "VISUAL EXCELLENCE",
    icon: Palette,
    gradient: "from-blue-500 to-violet-600",
    duration: "3-5 DAYS",
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
    title: "DEVELOPMENT",
    subtitle: "BRINGING IDEAS TO LIFE",
    icon: Code,
    gradient: "from-violet-600 to-cyan-500",
    duration: "1-4 WEEKS",
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
    title: "LAUNCH",
    subtitle: "GOING LIVE & BEYOND",
    icon: Rocket,
    gradient: "from-cyan-500 to-orange-500",
    duration: "ONGOING",
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
  { number: '4', label: 'STEP PROCESS' },
  { number: '98%', label: 'SUCCESS RATE' },
  { number: '150+', label: 'PROJECTS' },
  { number: '24/7', label: 'SUPPORT' }
];

// Container and item variants following design system
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Process Step Component
const ProcessStep = ({ step, index, inView }) => {
  return (
    <motion.div
      className="group relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
      variants={itemVariants}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Step Icon */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
          <step.icon className="w-8 h-8 text-white" />
          
          {/* Step Number */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center text-sm font-black">
            {step.id}
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-6">
          <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
            {step.title}
          </h3>
          <p className="text-cyan-400 font-bold text-sm mb-3 uppercase tracking-wide">{step.subtitle}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{step.duration}</span>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">{step.description}</p>
        </div>

        {/* Key Activities */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
          <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">KEY ACTIVITIES:</h4>
          <ul className="space-y-2">
            {step.activities.map((activity, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${step.gradient} rounded-full mt-2 flex-shrink-0`} />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connection Line */}
      {index < PROCESS_STEPS.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-full w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent transform translate-x-4" />
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
    <>
      {/* Developer Header Stripe */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      
      <section 
        ref={sectionRef}
        id="process" 
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
        aria-label="Development process"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-violet-600/10 rounded-full blur-3xl"></div>
          
          {/* Geometric Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">MY PROCESS</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                HOW I WORK WITH YOU
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                A streamlined 4-step process designed to deliver exceptional results. 
                Transparent, collaborative, and results-driven.
              </p>

              {/* Code Bracket Element */}
              <div className="text-cyan-500 font-mono text-2xl mb-8">&lt;/&gt;</div>
            </motion.div>

            {/* Process Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {PROCESS_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl"
                  variants={itemVariants}
                >
                  <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Process Steps */}
            <motion.div 
              ref={stepsRef}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative"
              variants={containerVariants}
              initial="hidden"
              animate={stepsInView ? "visible" : "hidden"}
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

            {/* Decorative Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mb-20"></div>

            {/* Call to Action */}
            <motion.div 
              ref={ctaRef}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    READY TO START YOUR PROJECT?
                  </h3>
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Let's transform your vision into reality with my proven process. 
                    Free consultation and project estimate available.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                      <span>START PROJECT</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                      VIEW EXAMPLES
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Footer Stripe */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
    </>
  );
};

export default ProcessHowIWork;
