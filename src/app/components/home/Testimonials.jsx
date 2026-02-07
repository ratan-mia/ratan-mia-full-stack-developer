'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- DATA CONSTANTS ---
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Dewan Saidur Rahman",
    position: "Managing Director",
    company: "Kawasaki Bangladesh",
    quote: "The mobile app development and speed optimization work exceeded all our expectations, leading to a significant impact on our sales and customer engagement. Outstanding performance from a truly professional developer.",
    avatar: "D",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Mohammad Nayab",
    position: "Operations Manager",
    company: "Chery Bangladesh",
    quote: "The React Native mobile app and CRM integration delivered were game-changers for our operations. The cross-platform solution works flawlessly on both iOS and Android, resulting in tremendous business growth.",
    avatar: "M",
    rating: 5,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    position: "CEO",
    company: "ELF Lubricants Bangladesh",
    quote: "The e-commerce mobile app built with React Native transformed how we connect with customers. The intuitive design, smooth performance, and comprehensive features have significantly boosted our online sales.",
    avatar: "A",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Sarah Thompson",
    position: "Product Manager",
    company: "TurfLet Sports",
    quote: "The booking platform's mobile app is exceptional. React Native expertise delivered a seamless experience for our users. Real-time availability, payment integration, and push notifications work perfectly.",
    avatar: "S",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
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
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column - Header & Stats */}
          <motion.div
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-black" />
              <span className="text-black font-bold text-sm uppercase tracking-wider">What're They Says</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              TESTIMONIALS
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I pride myself on delivering innovative, impactful, and results-driven projects.
            </motion.p>

            {/* Stats Counter */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-6xl lg:text-7xl font-extrabold text-black mb-2">&gt;208</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Total Contract Agents</div>
            </motion.div>

            {/* Video Image Placeholder */}
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-black shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent-lime flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Testimonial Card */}
          <div className="lg:col-span-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="w-full"
              >
                {/* Testimonial Card */}
                <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 sm:p-10 lg:p-12 xl:p-14 shadow-xl">
                  
                  {/* Quote Text */}
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-relaxed mb-10">
                    {TESTIMONIALS_DATA[currentIndex].quote}
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h4 className="font-extrabold text-xl sm:text-2xl text-black mb-1">
                        {TESTIMONIALS_DATA[currentIndex].name}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        {TESTIMONIALS_DATA[currentIndex].position}, {TESTIMONIALS_DATA[currentIndex].company}
                      </p>
                    </div>

                    {/* Navigation Counter */}
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-extrabold text-black">
                        0{currentIndex + 1}
                      </span>
                      <div className="w-px h-8 bg-gray-300" />
                      <span className="text-xl font-bold text-gray-400">
                        0{TESTIMONIALS_DATA.length}
                      </span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="mt-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-black"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((currentIndex + 1) / TESTIMONIALS_DATA.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Decorative Image (Bottom Right) */}
                <motion.div
                  className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-black shadow-2xl hidden xl:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
                    alt="Mobile device"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <motion.div
          className="flex justify-end gap-3 mt-8 lg:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button
            onClick={handlePrev}
            className="w-14 h-14 bg-black hover:bg-accent-lime text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 bg-black hover:bg-accent-lime text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Lime Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-accent-lime" />
    </section>
  );
};

export default Testimonials;