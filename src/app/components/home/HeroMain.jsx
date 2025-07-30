'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Download, ExternalLink, Github, Linkedin, Mail, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const HeroMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  // Portfolio showcase slides with high-quality online images
  const [currentSlide, setCurrentSlide] = useState(0);
  const portfolioSlides = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "React & Next.js",
      tech: ["React", "Next.js", "Stripe", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      gradient: "from-black/70 via-black/50 to-transparent",
      accent: "bg-accent-lime",
      description: "Modern e-commerce solution with seamless user experience"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "React & TypeScript",
      tech: ["TypeScript", "React", "D3.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      gradient: "from-black/70 via-black/50 to-transparent",
      accent: "bg-accent-orange",
      description: "Analytics dashboard with real-time data visualization"
    },
    {
      id: 3,
      title: "Mobile App Design",
      category: "React Native",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      gradient: "from-black/70 via-black/50 to-transparent",
      accent: "bg-blue-500",
      description: "Cross-platform mobile application with native performance"
    },
    {
      id: 4,
      title: "Brand Identity System",
      category: "Design & Development",
      tech: ["Figma", "React", "Framer Motion", "GSAP"],
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      gradient: "from-black/70 via-black/50 to-transparent",
      accent: "bg-purple-500",
      description: "Complete brand identity with digital implementation"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/shorifull', 
      label: 'GitHub',
      count: '150+ repos'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/shorifull', 
      label: 'LinkedIn',
      count: '5K+ connections'
    },
    { 
      icon: Mail, 
      href: 'mailto:ratanmiadev@gmail.com', 
      label: 'Email',
      count: 'Available 24/7'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
    }, 6000); // Slower transition for better viewing
    return () => clearInterval(timer);
  }, [portfolioSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length);
  };

  return (
    <section 
      ref={ref}
      className="h-screen relative overflow-hidden"
      id="home"
    >
      {/* Full-Width Background Image Slider with Enhanced Transitions */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
            }}
          >
            {/* Background Image - Full Width */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${portfolioSlides[currentSlide].image})`,
                backgroundColor: '#000000'
              }}
            />
            
            {/* Enhanced Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${portfolioSlides[currentSlide].gradient}`} />
            
            {/* Noise texture overlay for visual depth */}
            <div className="absolute inset-0 bg-black/20 opacity-60" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
                 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layer with Enhanced Layout */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
            
            {/* Left Content - Enhanced Typography & Layout */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center py-16 lg:py-0 space-y-8">
              
              {/* Availability Status - Enhanced Design */}
              <motion.div
                className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 mb-4 w-fit shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full bg-accent-lime shadow-lg shadow-lime-400/50"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(204, 255, 0, 0.7)",
                      "0 0 0 10px rgba(204, 255, 0, 0)",
                      "0 0 0 0 rgba(204, 255, 0, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-accent-lime text-base font-semibold tracking-wide">
                  Available for New Projects
                </span>
              </motion.div>

              {/* Enhanced Main Title with Layered Animation */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="w-20 h-1.5 bg-accent-lime rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 80 } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                
                <h1 className="text-7xl lg:text-9xl font-black leading-none tracking-tighter text-white">
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Creative
                  </motion.span>
                  <motion.span
                    className="block text-accent-lime"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Developer
                  </motion.span>
                </h1>
              </motion.div>

              {/* Enhanced Subtitle */}
              <motion.h2
                className="text-2xl lg:text-4xl font-light leading-relaxed text-white/90 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Crafting exceptional digital experiences through 
                <span className="font-semibold text-accent-lime"> innovative design</span> and 
                <span className="font-semibold text-accent-orange"> clean code</span>
              </motion.h2>

              {/* Enhanced Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-6 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.a
                  href="#projects"
                  className="group bg-accent-lime text-black font-bold px-10 py-5 rounded-2xl hover:bg-lime-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-400/40 transition-all duration-500 inline-flex items-center gap-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6" />
                  <span>View My Work</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="group border-2 border-white/60 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 inline-flex items-center gap-3 backdrop-blur-sm text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-6 h-6" />
                  <span>Download Resume</span>
                </motion.a>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                className="flex items-center gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-16 h-16 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 hover:border-accent-lime flex items-center justify-center text-white hover:text-accent-lime transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -8 }}
                    title={`${social.label} - ${social.count}`}
                  >
                    <social.icon size={24} />
                    <div className="absolute inset-0 bg-accent-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </motion.div>

            </div>

            {/* Right Side - Enhanced Project Showcase */}
            <div className="col-span-1 lg:col-span-5 flex justify-end items-center h-full">
              <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-6"
                    >
                      {/* Project Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white leading-tight">
                            {portfolioSlides[currentSlide].title}
                          </h3>
                          <p className="text-accent-lime text-base font-medium">
                            {portfolioSlides[currentSlide].category}
                          </p>
                        </div>
                        <motion.button
                          className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-accent-lime hover:text-black transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.button>
                      </div>

                      {/* Project Description */}
                      <p className="text-gray-300 text-base leading-relaxed">
                        {portfolioSlides[currentSlide].description}
                      </p>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {portfolioSlides[currentSlide].tech.map((tech, index) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex gap-2">
                          {portfolioSlides.map((_, index) => (
                            <motion.button
                              key={index}
                              onClick={() => setCurrentSlide(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                  ? 'bg-accent-lime scale-125' 
                                  : 'bg-white/30 hover:bg-white/50'
                              }`}
                              whileHover={{ scale: 1.2 }}
                              aria-label={`Go to slide ${index + 1}`}
                            />
                          ))}
                        </div>
                        
                        <div className="flex gap-2">
                          <motion.button
                            onClick={prevSlide}
                            className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:border-accent-lime hover:text-accent-lime transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous slide"
                          >
                            <ChevronLeft size={18} />
                          </motion.button>
                          
                          <motion.button
                            onClick={nextSlide}
                            className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:border-accent-lime hover:text-accent-lime transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next slide"
                          >
                            <ChevronRight size={18} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2.0 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-3 text-white/60 hover:text-accent-lime transition-colors duration-300 group"
          animate={{ 
            y: [0, 12, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-label="Scroll down to about section"
        >
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center relative overflow-hidden">
            <motion.div 
              className="w-1.5 h-4 bg-current rounded-full mt-2"
              animate={{
                y: [0, 16, 0],
                opacity: [1, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="text-xs font-medium uppercase tracking-widest group-hover:tracking-[0.3em] transition-all duration-300">
            Explore
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroMain;
