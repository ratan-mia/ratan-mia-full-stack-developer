'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Lightbulb,
  Rocket,
  Settings,
  Smartphone
} from 'lucide-react';
import { useRef } from 'react';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// --- Reusable Process Step Component ---
const ProcessStep = ({ step, index, inView }) => {
  return (
    <motion.div
      className="relative flex flex-col text-left group"
      variants={itemVariants}
      whileHover={{ y: -8 }}
    >
      {/* Step Number and Icon */}
      <div className="flex items-center mb-6">
        <motion.div 
          className={`w-16 h-16 rounded-2xl ${index % 2 === 0 ? 'bg-accent-lime' : 'bg-accent-orange'} flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 5 }}
        >
          <step.icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-black' : 'text-white'}`} />
        </motion.div>
        <div className="ml-4">
          <div className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">
            Step {index + 1}
          </div>
          <div className="text-sm font-medium text-accent-lime">
            {step.phase}
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-lime transition-colors">
        {step.title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-base lg:text-lg group-hover:text-gray-300 transition-colors">
        {step.description}
      </p>
    </motion.div>
  );
};

const ServiceFeature = ({ feature, index, inView }) => (
  <motion.div
    className="flex items-start gap-4 group"
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{
      duration: 0.6,
      delay: 0.8 + index * 0.1,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ x: 8 }}
  >
    <motion.div 
      className="w-8 h-8 rounded-lg bg-accent-lime flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
      whileHover={{ rotate: 90 }}
    >
      <feature.icon className="w-4 h-4 text-black" />
    </motion.div>
    <div>
      <h4 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-accent-lime transition-colors">
        {feature.title}
      </h4>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {feature.description}
      </p>
    </div>
  </motion.div>
);

// --- MAIN PROCESS COMPONENT ---
const ProcessHowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const processSteps = [
    {
      icon: Lightbulb,
      phase: 'Discovery',
      title: 'Requirements & Planning',
      description: 'Deep-dive consultation to understand your business goals, technical requirements, and project scope with detailed planning.',
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
      description: 'Writing clean, maintainable code with modern frameworks, API integrations, and comprehensive testing throughout.',
    },
    {
      icon: Rocket,
      phase: 'Deployment',
      title: 'Launch & Optimization',
      description: 'Seamless deployment with performance optimization, security implementation, and ongoing monitoring support.',
    }
  ];
  
  const technicalServices = [
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web applications using React, Next.js, Laravel, and modern frameworks.'
    },
    {
      icon: Database,
      title: 'Database & API Architecture', 
      description: 'Scalable database design and RESTful API development for robust backend systems.'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Cross-Platform Apps',
      description: 'React Native applications and progressive web apps for multi-platform reach.'
    }
  ];

  return (
    <section ref={ref} className="bg-black text-white" id="process">
      {/* Top Section: Process */}
      <div className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-4 mb-6"
                variants={itemVariants}
              >
                <div className="w-12 h-1 bg-accent-lime" />
                <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider">My Process</span>
              </motion.div>
              <motion.h2 
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
                variants={itemVariants}
              >
                How I Work With
                <br />
                <span className="text-accent-lime">My Clients</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                My proven 4-step development process ensures successful project delivery from concept to deployment.
              </motion.p>
            </motion.div>

            <div className="relative">
              {/* Enhanced Connecting Line */}
              <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-accent-lime via-gray-700 to-accent-orange hidden lg:block"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
          </motion.div>
        </div>
      </div>

      {/* Bottom Section: Technical Services */}
      <motion.div 
        className="grid lg:grid-cols-2 items-center"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Left Column: Image */}
        <div className="h-[500px] lg:h-[600px] relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
            alt="Developer working on multiple projects"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
          
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 hidden lg:block">
            <motion.div
              className="absolute top-20 right-20 w-16 h-16 bg-accent-lime/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="w-8 h-8 text-accent-lime" />
            </motion.div>
            <motion.div
              className="absolute bottom-32 right-32 w-12 h-12 bg-accent-orange/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Database className="w-6 h-6 text-accent-orange" />
            </motion.div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="text-left p-8 lg:p-16 xl:p-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="w-12 h-1 bg-accent-lime" />
              <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Technical Expertise</span>
            </motion.div>

            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Full-Stack Development
              <br />
              <span className="text-accent-lime">Solutions</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              As an IBM-certified developer with 8+ years of experience, I specialize in building scalable, modern applications using cutting-edge technologies.
            </motion.p>
            
            <div className="space-y-8 mb-12">
              {technicalServices.map((service, index) => (
                <ServiceFeature 
                  key={service.title}
                  feature={service}
                  index={index}
                  inView={isInView}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="group text-accent-lime font-bold inline-flex items-center gap-3 tracking-wider text-lg hover:gap-4 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <span>LET'S BUILD SOMETHING</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessHowIWork;