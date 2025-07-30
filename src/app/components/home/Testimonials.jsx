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
    quote: "Their work on speed optimization exceeded all our expectations, leading to a direct and significant impact on our sales. An outstanding performance from a truly professional team.",
    avatar: "D",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CEO, Digital Innovations",
    quote: "They flawlessly transformed our complex vision into a scalable and user-friendly e-commerce platform. The final product was not just beautiful but also incredibly robust.",
    avatar: "S",
  },
  {
    id: 3,
    name: "Mohammad Nayab",
    position: "Operations Manager, Chery Bangladesh",
    quote: "The CRM integration and API work they delivered were game-changers for our operations, resulting in a 200% increase in sales. We couldn't be happier with the results.",
    avatar: "M",
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
    const interval = setInterval(handleNext, 7000); // Increased interval time
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="bg-black" id="testimonials">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="grid lg:grid-cols-2 min-h-[700px]">
          
          {/* Left Column: Testimonial Slider */}
          <div className="bg-accent-lime text-black flex flex-col p-12 lg:p-24 justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-10">Testimonials</h2>
            
            <div className="relative flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="flex flex-col justify-center flex-grow"
                >
                  <div className="text-6xl font-serif mb-6 opacity-50">"</div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-snug flex-grow">
                    {TESTIMONIALS_DATA[currentIndex].quote}
                  </blockquote>
                  <div>
                    <h4 className="font-bold text-xl">{TESTIMONIALS_DATA[currentIndex].name}</h4>
                    <p className="text-black/70">{TESTIMONIALS_DATA[currentIndex].position}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between">
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
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:block bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
              alt="Professional team collaborating in an office" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
