'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  Lightbulb,
  Rocket,
  Settings,
  Smartphone,
  Star,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

// --- ENHANCED ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const floatingVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// --- Enhanced Process Step Component ---
const ProcessStep = ({ step, index, inView }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className="relative flex flex-col text-left group"
      variants={itemVariants}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Enhanced Step Number and Icon */}
      <div className="flex items-center mb-8">
        <motion.div 
          className={`relative w-20 h-20 rounded-3xl ${isEven ? 'bg-accent-lime' : 'bg-accent-orange'} 
                     flex items-center justify-center z-10 shadow-xl
                     ${isEven ? 'shadow-accent-lime/25' : 'shadow-accent-orange/25'}
                     group-hover:shadow-2xl transition-all duration-500`}
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
          
          <step.icon className={`w-10 h-10 relative z-10 ${isEven ? 'text-black' : 'text-white'}`} />
          
          {/* Floating indicator */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.1, type: "spring", bounce: 0.5 }}
          >
            <span className="text-xs font-bold text-black">{index + 1}</span>
          </motion.div>
        </motion.div>
        
        <div className="ml-6">
          <motion.div 
            className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-2 flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <div className="w-2 h-2 bg-accent-lime rounded-full" />
            Step {index + 1}
          </motion.div>
          <motion.div 
            className="text-base font-bold text-accent-lime tracking-wide"
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            {step.phase}
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced title with gradient text effect */}
      <motion.h3 
        className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 tracking-tight 
                   group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-lime 
                   group-hover:to-white group-hover:bg-clip-text transition-all duration-500 leading-tight"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 + index * 0.1 }}
      >
        {step.title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-400 leading-relaxed text-base lg:text-lg group-hover:text-gray-300 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 + index * 0.1 }}
      >
        {step.description}
      </motion.p>

      {/* Enhanced connection line for desktop */}
      {index < 3 && (
        <motion.div
          className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-accent-lime/40 via-gray-700/60 to-transparent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </motion.div>
  );
};

// --- Enhanced Service Feature Component ---
const ServiceFeature = ({ feature, index, inView }) => (
  <motion.div
    className="flex items-start gap-6 group cursor-default"
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{
      duration: 0.7,
      delay: 0.9 + index * 0.15,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ x: 12 }}
  >
    <motion.div 
      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-lime to-accent-lime/80 
                 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-accent-lime/25
                 group-hover:shadow-xl group-hover:shadow-accent-lime/40 transition-all duration-300"
      whileHover={{ rotate: 180, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <feature.icon className="w-6 h-6 text-black" />
    </motion.div>
    <div className="flex-1">
      <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-accent-lime transition-colors duration-300">
        {feature.title}
      </h4>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-base lg:text-lg">
        {feature.description}
      </p>
    </div>
  </motion.div>
);

// --- ENHANCED MAIN PROCESS COMPONENT ---
const ProcessHowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const processSteps = [
    {
      icon: Lightbulb,
      phase: 'Discovery',
      title: 'Requirements & Planning',
      description: 'Deep-dive consultation to understand your business goals, technical requirements, and project scope with comprehensive planning and timeline creation.',
    },
    {
      icon: Settings,
      phase: 'Architecture',
      title: 'System Design & Architecture',
      description: 'Creating scalable system architecture, database design, and technology stack selection for optimal performance and future growth.',
    },
    {
      icon: Code,
      phase: 'Development',
      title: 'Development & Integration',
      description: 'Writing clean, maintainable code with modern frameworks, API integrations, and comprehensive testing throughout the development cycle.',
    },
    {
      icon: Rocket,
      phase: 'Deployment',
      title: 'Launch & Optimization',
      description: 'Seamless deployment with performance optimization, security implementation, and ongoing monitoring with post-launch support.',
    }
  ];
  
  const technicalServices = [
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web applications using React, Next.js, Laravel, and modern frameworks with responsive design and optimal performance.'
    },
    {
      icon: Database,
      title: 'Database & API Architecture', 
      description: 'Scalable database design and RESTful API development for robust backend systems with security and performance optimization.'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Cross-Platform Apps',
      description: 'React Native applications and progressive web apps for multi-platform reach with native performance and user experience.'
    }
  ];

  return (
    <section ref={ref} className="bg-black text-white relative overflow-hidden" id="process">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(204, 255, 0, 0.3) 1px, transparent 0)`,
               backgroundSize: '50px 50px'
             }} 
        />
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent-orange/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Top Section: Enhanced Process */}
      <div className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Enhanced Section Header */}
            <motion.div className="text-center mb-20 lg:mb-24" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-6 mb-8"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-16 h-1 bg-accent-lime rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 64 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span className="text-gray-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  <Star size={16} className="text-accent-lime" />
                  My Process
                </span>
                <motion.div 
                  className="w-16 h-1 bg-accent-lime rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 64 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
              
              <motion.h2 
                className="text-4xl lg:text-6xl xl:text-7xl font-extrabold mb-8 tracking-tight leading-[0.9]"
                variants={itemVariants}
              >
                How I Work With
                <br />
                <span className="bg-gradient-to-r from-accent-lime to-accent-orange bg-clip-text text-transparent">
                  My Clients
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
                variants={itemVariants}
              >
                My proven 4-step development process ensures successful project delivery from initial concept to final deployment and beyond.
              </motion.p>

              {/* Success metrics */}
              <motion.div 
                className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>150+ Projects Delivered</span>
                </div>
                <div className="w-px h-4 bg-gray-600" />
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-accent-lime" />
                  <span>98% Client Satisfaction</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Process Steps Grid */}
            <div className="relative">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
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

      {/* Enhanced Bottom Section: Technical Services */}
      <motion.div 
        className="grid lg:grid-cols-2 items-center relative"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Left Column: Enhanced Image */}
        <div className="h-[500px] lg:h-[700px] relative overflow-hidden">
          <motion.img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
            alt="Developer working on multiple projects"
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          
          {/* Enhanced gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Enhanced Floating Tech Icons */}
          <div className="absolute inset-0 hidden lg:block">
            <motion.div
              className="absolute top-16 right-16 w-20 h-20 bg-accent-lime/15 backdrop-blur-md rounded-2xl 
                        flex items-center justify-center border border-accent-lime/20 shadow-xl shadow-accent-lime/10"
              variants={floatingVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Code className="w-10 h-10 text-accent-lime" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-24 right-24 w-16 h-16 bg-accent-orange/15 backdrop-blur-md rounded-xl 
                        flex items-center justify-center border border-accent-orange/20 shadow-xl shadow-accent-orange/10"
              variants={floatingVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Database className="w-8 h-8 text-accent-orange" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg 
                        flex items-center justify-center border border-white/20"
              variants={floatingVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
              transition={{ delay: 1.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <Smartphone className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Stats overlay */}
          <motion.div
            className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-lime">8+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-lime">150+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-lime">IBM</div>
                <div className="text-xs text-gray-400">Certified</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Enhanced Content */}
        <div className="text-left p-8 lg:p-16 xl:p-24 relative">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div 
                className="w-16 h-1 bg-accent-lime rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />
              <span className="text-gray-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Zap size={16} className="text-accent-lime" />
                Technical Expertise
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-8 leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              Full-Stack Development
              <br />
              <span className="bg-gradient-to-r from-accent-lime to-accent-orange bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
            >
              As an IBM-certified developer with 8+ years of experience, I specialize in building scalable, 
              modern applications using cutting-edge technologies and industry best practices.
            </motion.p>
            
            <div className="space-y-10 mb-12">
              {technicalServices.map((service, index) => (
                <ServiceFeature 
                  key={service.title}
                  feature={service}
                  index={index}
                  inView={isInView}
                />
              ))}
            </div>

            {/* Enhanced CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.a 
                href="#contact" 
                className="group bg-accent-lime text-black font-bold px-8 py-4 rounded-2xl
                         hover:bg-accent-lime/90 hover:shadow-xl hover:shadow-accent-lime/25
                         transition-all duration-300 inline-flex items-center gap-3 text-lg"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>LET'S BUILD SOMETHING</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.a>

              <motion.button
                className="group text-gray-400 hover:text-white font-medium inline-flex items-center gap-2 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-full border border-gray-600 group-hover:border-gray-400 
                              flex items-center justify-center transition-colors">
                  <Star className="w-5 h-5" />
                </div>
                <span>View Portfolio</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessHowIWork;