'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Import slide components
import ContactSlide from '@/components/hero/ContactSlide';
import HeroSlide from '@/components/hero/HeroSlide';
import ServicesSlide from '@/components/hero/ServicesSlide';
import SkillsSlide from '@/components/hero/SkillsSlide';

// Import shared utilities
import {
  CursorTrail,
  FloatingShapes,
  MatrixRain,
  slideVariants
} from '@/utils/shared/heroSlider';

// Scroll Progress Component
const ScrollProgress = ({ progress }) => (
  <motion.div
    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-50 origin-left"
    style={{ scaleX: progress }}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: progress }}
    transition={{ type: "spring", stiffness: 400, damping: 40 }}
  />
);

// Scroll Bottom Indicator Component
const ScrollBottomIndicator = ({ isVisible, onClick }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={onClick}
          className="group flex flex-col items-center gap-2 px-6 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl text-white hover:bg-white/[0.12] hover:border-cyan-400/40 transition-all duration-300 shadow-2xl"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm md:text-base font-semibold tracking-wider uppercase opacity-90 group-hover:opacity-100">
            Explore More
          </span>
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-cyan-400" />
            <ChevronDown className="w-3 h-3 opacity-60 -mt-1 text-cyan-400" />
          </motion.div>
        </motion.button>
      </motion.div>
    )}
  </AnimatePresence>
);

// Main HeroSlider Component
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  // Slide configuration - Following design guidelines
  const slides = [
    { id: 'hero', title: 'Home', subtitle: 'Welcome', component: HeroSlide },
    { id: 'skills', title: 'Skills', subtitle: 'Expertise', component: SkillsSlide },
    { id: 'services', title: 'Services', subtitle: 'Solutions', component: ServicesSlide },
    { id: 'contact', title: 'Contact', subtitle: 'Connect', component: ContactSlide }
  ];

  // Scroll tracking effect
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(Math.min(progress, 1));
      
      if (scrollTop > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 8000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, slides.length]);

  // Navigation functions
  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  }, [slides.length]);

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#about, #skills, #projects, #contact');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key >= '1' && e.key <= '4') {
        goToSlide(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen"
    >
      {/* Ultimate Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/3 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Advanced Effects */}
      <MatrixRain />
      <FloatingShapes />
      <CursorTrail />

      {/* Scroll Progress */}
      <ScrollProgress progress={scrollProgress} />

      <div className="relative z-10 min-h-screen">
        {/* Slide Container */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              rotateY: { duration: 0.5 }
            }}
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Following design guidelines */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
          <motion.button
            onClick={prevSlide}
            className="group bg-white/[0.08] backdrop-blur-xl rounded-full w-16 h-16 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-white/[0.15] hover:border-cyan-400/50 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <ChevronLeft className="relative z-10 w-8 h-8" />
          </motion.button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
          <motion.button
            onClick={nextSlide}
            className="group bg-white/[0.08] backdrop-blur-xl rounded-full w-16 h-16 flex items-center justify-center border border-white/20 text-white transition-all duration-300 hover:bg-white/[0.15] hover:border-cyan-400/50 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <ChevronRight className="relative z-10 w-8 h-8" />
          </motion.button>
        </div>

        {/* Pagination - Enhanced design following guidelines */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-6 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`group relative flex items-center gap-3 transition-all duration-300 ${
                  currentSlide === index ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to ${slide.title} slide`}
              >
                <motion.div
                  className={`w-4 h-4 rounded-full transition-all duration-300 relative overflow-hidden ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 scale-125 shadow-lg shadow-cyan-400/50'
                      : 'bg-gray-500 group-hover:bg-gray-300'
                  }`}
                >
                  {currentSlide === index && (
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{ x: [-20, 20, -20] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                
                {/* Labels & Small Text - Following typography guidelines */}
                <div className={`hidden md:block text-sm md:text-base font-semibold transition-all duration-300 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                }`}>
                  {slide.title}
                </div>
                
                {/* Auto-play progress indicator */}
                {currentSlide === index && isAutoPlaying && (
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 8, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollBottomIndicator 
          isVisible={showScrollIndicator && currentSlide === slides.length - 1} 
          onClick={handleScrollDown}
        />

        {/* Slide Counter - Caption & Meta Info */}
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-full px-4 py-2">
            <span className="text-xs md:text-sm font-medium text-gray-300">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Auto-play toggle */}
        <div className="absolute top-8 left-8 z-20">
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 ${
              isAutoPlaying ? 'text-emerald-300 border-emerald-400/30' : 'text-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
          >
            {isAutoPlaying ? 'Auto ⏸' : 'Auto ▶'}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;