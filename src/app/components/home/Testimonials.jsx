'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- DATA CONSTANTS ---
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Dewan Saidur Rahman",
    position: "Managing Director, Kawasaki Bangladesh",
    quote: "The mobile app development and speed optimization work exceeded all our expectations, leading to a significant impact on our sales and customer engagement. Outstanding performance from a truly professional developer.",
    avatar: "D",
  },
  {
    id: 2,
    name: "Mohammad Nayab",
    position: "Operations Manager, Chery Bangladesh",
    quote: "The React Native mobile app and CRM integration delivered were game-changers for our operations. The cross-platform solution works flawlessly on both iOS and Android, resulting in tremendous business growth.",
    avatar: "M",
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    position: "CEO, ELF Lubricants Bangladesh",
    quote: "The e-commerce mobile app built with React Native transformed how we connect with customers. The intuitive design, smooth performance, and comprehensive features have significantly boosted our online sales.",
    avatar: "A",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    position: "Product Manager, TurfLet Sports",
    quote: "The booking platform's mobile app is exceptional. React Native expertise delivered a seamless experience for our users. Real-time availability, payment integration, and push notifications work perfectly.",
    avatar: "S",
  }
];

// --- MAIN TESTIMONIALS COMPONENT ---
const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative" id="testimonials">
      {/* Image that bleeds outside the main section - only top */}
      <div className="absolute right-0 top-0 w-1/2 z-10 -mt-20">
        <motion.div
          className="h-[60vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
            alt="Professional team collaborating in an office"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Main lime section */}
      <section ref={ref} className="bg-accent-lime relative min-h-[70vh] overflow-visible">
        <motion.div 
          className="grid lg:grid-cols-2 min-h-[70vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left Column: Testimonial Content on lime background */}
          <motion.div 
            className="text-black flex flex-col justify-center px-12 py-16 lg:px-16 xl:px-20 lg:py-20 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              What Our Clients Say About Our Work
            </motion.h2>
            
            <div className="relative flex-grow flex flex-col justify-center mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="flex flex-col justify-center"
                >
                  <div className="text-6xl font-serif mb-6 opacity-50 text-black">"</div>
                  <blockquote className="text-lg lg:text-xl font-medium mb-8 leading-relaxed text-black/90 max-w-lg">
                    {TESTIMONIALS_DATA[currentIndex].quote}
                  </blockquote>
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl text-black">{TESTIMONIALS_DATA[currentIndex].name}</h4>
                    <p className="text-black/70 text-base">{TESTIMONIALS_DATA[currentIndex].position}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex gap-2">
                {TESTIMONIALS_DATA.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 ${
                      currentIndex === index 
                        ? 'w-8 h-2 bg-black rounded-full' 
                        : 'w-2 h-2 bg-black/40 rounded-full hover:bg-black/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </div>
            </motion.div>


          </motion.div>

          {/* Right Column: Space for bleeding image */}
          <div className="relative">
            {/* Empty space - image is positioned absolutely outside */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonials;