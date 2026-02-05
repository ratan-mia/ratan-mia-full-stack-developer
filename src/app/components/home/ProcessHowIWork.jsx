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
      className="relative flex flex-col text-left group cursor-pointer"
      variants={itemVariants}
      whileHover={{ y: -16, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-accent-lime/0 group-hover:bg-accent-lime/5 rounded-3xl blur-xl transition-all duration-500 -z-10"></div>
      
      {/* Enhanced Step Number and Icon */}
      <div className="flex items-center mb-8">
        <motion.div 
          className={`relative w-20 h-20 rounded-3xl bg-accent-lime
                     flex items-center justify-center z-10 shadow-xl
                     shadow-accent-lime/25 group-hover:shadow-accent-lime/50
                     group-hover:shadow-2xl transition-all duration-500`}
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent group-hover:from-white/30 transition-all duration-500" />
          
          {/* Animated border on hover */}
          <motion.div 
            className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500"
          />
          
          <step.icon className="w-10 h-10 relative z-10 text-black group-hover:scale-110 transition-transform duration-300" />
          
          {/* Floating indicator with pulse */}
          <motion.div
            className="absolute -top-2 -right-2 w-7 h-7 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.1, type: "spring", bounce: 0.5 }}
            whileHover={{ rotate: 360 }}
          >
            <span className="text-xs font-bold text-accent-lime">{index + 1}</span>
          </motion.div>

          {/* Pulse ring on hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-4 border-accent-lime opacity-0 group-hover:opacity-100"
            animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        
        <div className="ml-6">
          <motion.div 
            className="text-xs font-bold text-gray-500 group-hover:text-accent-lime tracking-widest uppercase mb-2 flex items-center gap-2 transition-colors duration-300"
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <div className="w-2 h-2 bg-accent-lime rounded-full group-hover:scale-150 transition-transform duration-300" />
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
        className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white mb-6 tracking-tight 
                   group-hover:text-accent-lime transition-all duration-300 leading-tight
                   transform group-hover:translate-x-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 + index * 0.1 }}
      >
        {step.title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-400 leading-relaxed text-base lg:text-lg group-hover:text-gray-300 transition-all duration-300
                   transform group-hover:translate-x-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 + index * 0.1 }}
      >
        {step.description}
      </motion.p>

      {/* Decorative line on hover */}
      <motion.div 
        className="absolute left-0 bottom-0 h-1 bg-accent-lime rounded-full"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />

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
    className="flex items-start gap-6 group cursor-pointer relative p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{
      duration: 0.7,
      delay: 0.9 + index * 0.15,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ x: 16, scale: 1.02 }}
  >
    {/* Glow effect on hover */}
    <div className="absolute inset-0 bg-accent-lime/0 group-hover:bg-accent-lime/5 rounded-2xl blur-xl transition-all duration-500 -z-10"></div>
    
    <motion.div 
      className="w-14 h-14 rounded-2xl bg-accent-lime
                 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-accent-lime/25
                 group-hover:shadow-2xl group-hover:shadow-accent-lime/50 transition-all duration-300
                 relative overflow-hidden"
      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
      transition={{ duration: 0.5 }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />
      <feature.icon className="w-7 h-7 text-black relative z-10 group-hover:scale-110 transition-transform duration-300" />
    </motion.div>
    <div className="flex-1">
      <h4 className="text-xl lg:text-2xl font-extrabold text-white mb-3 group-hover:text-accent-lime transition-all duration-300
                     transform group-hover:translate-x-2">
        {feature.title}
      </h4>
      <p className="text-gray-400 group-hover:text-gray-300 transition-all duration-300 leading-relaxed text-base lg:text-lg
                    transform group-hover:translate-x-2">
        {feature.description}
      </p>
    </div>

    {/* Arrow indicator on hover */}
    <motion.div
      className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ x: -10 }}
      whileHover={{ x: 0 }}
    >
      <ArrowRight className="w-6 h-6 text-accent-lime" />
    </motion.div>
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
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using React Native for iOS and Android with native performance, smooth animations, and offline capabilities.'
    },
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web applications using React, Next.js, Laravel, and modern frameworks with responsive design, SEO optimization, and optimal performance.'
    },
    {
      icon: Database,
      title: 'Database & API Architecture', 
      description: 'Scalable database design with PostgreSQL/MySQL and RESTful API development using Node.js, Laravel, or Supabase for robust backend systems.'
    }
  ];

  return (
    <section ref={ref} className="bg-black text-white relative overflow-hidden" id="process">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{
               backgroundImage: `linear-gradient(rgba(204, 255, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.15) 1px, transparent 1px)`,
               backgroundSize: '100px 100px'
             }} 
        />
        
        {/* Large gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-accent-lime/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-accent-lime/8 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-lime/5 rounded-full blur-3xl"></div>
      </div>

      {/* Process Steps Section */}
      <div className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div className="text-center mb-20 lg:mb-28" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-accent-lime/10 backdrop-blur-sm border border-accent-lime/20 rounded-full"
                variants={itemVariants}
              >
                <Star size={20} className="text-accent-lime" />
                <span className="text-accent-lime font-extrabold text-sm uppercase tracking-widest">
                  My Process
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl lg:text-7xl xl:text-8xl font-extrabold mb-8 tracking-tight leading-[0.95]"
                variants={itemVariants}
              >
                How I Work With
                <br />
                <span className="text-accent-lime">
                  My Clients
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                My proven 4-step development process ensures successful project delivery from initial concept to final deployment.
              </motion.p>

              {/* Success metrics with icons */}
              <motion.div 
                className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="text-sm font-bold text-gray-300">150+ Projects</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <Zap size={20} className="text-accent-lime" />
                  <span className="text-sm font-bold text-gray-300">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <Star size={20} className="text-accent-lime" />
                  <span className="text-sm font-bold text-gray-300">25+ Countries</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Process Steps Grid */}
            <div className="relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-10 left-0 right-0 h-px">
                <motion.div 
                  className="h-full bg-gradient-to-r from-transparent via-accent-lime/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 1.5, duration: 1.5 }}
                />
              </div>

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

      {/* Technical Services Section */}
      <motion.div 
        className="grid lg:grid-cols-2 items-center relative border-t border-white/10"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Left Column: Image with overlay */}
        <div className="h-[500px] lg:h-[700px] relative overflow-hidden">
          <motion.img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
            alt="Developer working on projects"
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          {/* Floating Tech Icons with glow */}
          <div className="absolute inset-0 hidden lg:block">
            <motion.div
              className="absolute top-20 right-20 w-24 h-24 bg-accent-lime/20 backdrop-blur-xl rounded-3xl 
                        flex items-center justify-center border-2 border-accent-lime/40 shadow-2xl shadow-accent-lime/20"
              variants={floatingVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
              transition={{ delay: 1.2 }}
              whileHover={{ rotate: 180, scale: 1.1 }}
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

          {/* Enhanced Stats overlay */}
          <motion.div
            className="absolute bottom-8 left-8 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 
                      backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-lime">10+</div>
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
        <div className="text-left p-8 lg:p-16 xl:p-24 relative bg-gradient-to-br from-gray-900/50 to-black/50">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-lime/5 rounded-full blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-accent-lime/10 backdrop-blur-sm border border-accent-lime/20 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Zap size={20} className="text-accent-lime" />
              <span className="text-accent-lime font-extrabold text-sm uppercase tracking-widest">
                Technical Expertise
              </span>
            </motion.div>

            {/* Title with underline effect */}
            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              Full-Stack Development
              <br />
              <span className="relative inline-block text-accent-lime">
                Solutions
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-accent-lime rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 1.3, duration: 0.8 }}
                />
              </span>
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
            >
              IBM-certified developer with 10+ years of experience building scalable, 
              modern applications with cutting-edge technologies.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {['React Native', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase', 'AWS'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-accent-lime/10 hover:border-accent-lime/30 hover:text-accent-lime transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + i * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Service Features */}
            <div className="space-y-6 mb-12">
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
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-white/10"
            >
              <motion.a 
                href="#contact" 
                className="group relative overflow-hidden bg-accent-lime text-black font-extrabold px-10 py-5 rounded-2xl
                         hover:shadow-2xl hover:shadow-accent-lime/40
                         transition-all duration-300 inline-flex items-center gap-3 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.div 
                className="flex items-center gap-4 text-sm text-gray-400"
                whileHover={{ x: 4 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-accent-lime/20 border-2 border-black flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-accent-lime" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent-lime/20 border-2 border-black flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent-lime" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent-lime/20 border-2 border-black flex items-center justify-center">
                    <Star className="w-4 h-4 text-accent-lime" />
                  </div>
                </div>
                <span className="font-semibold">Join 150+ happy clients</span>
              </motion.div>

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