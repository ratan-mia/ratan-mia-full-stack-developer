'use client';

import { motion, useInView } from 'framer-motion';
import {
  Building2,
  ChevronLeft,
  ChevronRight, // Added Mail for CTA
  Eye,
  Mail,
  MapPin,
  Quote,
  Star,
  Target, // Added Eye for CTA
  Terminal // Added Terminal import
  ,
  Trophy,
  Zap
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Enhanced testimonials data with more technical focus
const TESTIMONIALS = [
  {
    id: 1,
    name: "DEWAN SAIDUR RAHMAN",
    position: "MANAGING DIRECTOR",
    company: "KAWASAKI BANGLADESH",
    location: "DHAKA, BANGLADESH",
    rating: 5,
    testimonial: "Ratan delivered an exceptional website for Chery Bangladesh with incredible 97% speed optimization. His expertise in React.js and Next.js, combined with 360-degree car model integration, exceeded our expectations.",
    project: "CHERY BANGLADESH WEBSITE",
    results: [
      { metric: "97%", label: "SPEED OPTIMIZATION" },
      { metric: "360°", label: "CAR INTEGRATION" },
      { metric: "100%", label: "ON-TIME DELIVERY" }
    ],
    technologies: ["React.js", "Next.js", "3D Integration"],
    featured: true,
    category: "E-COMMERCE"
  },
  {
    id: 2,
    name: "MOHAMMAD NAYAB MAHMOOD",
    position: "OPERATION MANAGER", 
    company: "CHERY BANGLADESH",
    location: "DHAKA, BANGLADESH",
    rating: 5,
    testimonial: "Working with Ratan was a game-changer for our business. He integrated CRM, Facebook Pixel, and WhatsApp Business API seamlessly. The 200% sales increase speaks for itself!",
    project: "CORPORATE WEBSITE DEVELOPMENT",
    results: [
      { metric: "200%", label: "SALES INCREASE" },
      { metric: "5+", label: "API INTEGRATIONS" },
      { metric: "100%", label: "CLIENT SATISFACTION" }
    ],
    technologies: ["Laravel", "API Integration", "CRM"],
    featured: true,
    category: "BUSINESS"
  },
  {
    id: 3,
    name: "SARAH JOHNSON",
    position: "FOUNDER & CEO",
    company: "DIGITAL INNOVATIONS INC.",
    location: "NEW YORK, USA",
    rating: 5,
    testimonial: "Ratan transformed our vision into reality with exceptional full-stack development skills. The Laravel-based e-commerce platform is scalable, user-friendly, and performs excellently.",
    project: "E-COMMERCE PLATFORM",
    results: [
      { metric: "300%", label: "ONLINE GROWTH" },
      { metric: "95%", label: "PERFORMANCE SCORE" },
      { metric: "$500K", label: "REVENUE GENERATED" }
    ],
    technologies: ["Laravel", "Vue.js", "MySQL"],
    featured: true,
    category: "E-COMMERCE"
  },
  {
    id: 4,
    name: "AHMED HASSAN",
    position: "BUSINESS OWNER",
    company: "HASSAN ENTERPRISES",
    location: "DUBAI, UAE",
    rating: 5,
    testimonial: "Complete website overhaul delivered beyond expectations. The site is fast, mobile-responsive, and has significantly improved our online inquiries. Great value for money!",
    project: "BUSINESS WEBSITE REDESIGN",
    results: [
      { metric: "400%", label: "INQUIRY INCREASE" },
      { metric: "98%", label: "MOBILE SCORE" },
      { metric: "#1", label: "GOOGLE RANKING" }
    ],
    technologies: ["React.js", "Tailwind", "SEO"],
    featured: false,
    category: "BUSINESS"
  },
  {
    id: 5,
    name: "EMILY CHEN",
    position: "MARKETING DIRECTOR", 
    company: "TECHSTART SOLUTIONS",
    location: "TORONTO, CANADA",
    rating: 5,
    testimonial: "Impressive expertise in React.js and modern web technologies. Clean code, excellent performance, and intuitive user experience. Problem-solving skills made development smooth.",
    project: "REACT.JS WEB APPLICATION",
    results: [
      { metric: "99%", label: "UPTIME" },
      { metric: "50MS", label: "LOAD TIME" },
      { metric: "95%", label: "USER SATISFACTION" }
    ],
    technologies: ["React.js", "Node.js", "MongoDB"],
    featured: false,
    category: "WEB APP"
  },
  {
    id: 6,
    name: "DAVID MARTINEZ",
    position: "CTO",
    company: "FINTECH SOLUTIONS",
    location: "LONDON, UK",
    rating: 5,
    testimonial: "Outstanding technical expertise and attention to detail. The custom dashboard with real-time analytics exceeded our requirements. Delivered secure, scalable architecture.",
    project: "FINTECH DASHBOARD",
    results: [
      { metric: "REAL-TIME", label: "DATA PROCESSING" },
      { metric: "100%", label: "SECURITY COMPLIANCE" },
      { metric: "24/7", label: "SYSTEM UPTIME" }
    ],
    technologies: ["Vue.js", "Laravel", "Redis"],
    featured: false,
    category: "FINTECH"
  }
];

// Enhanced stats with more technical focus
const STATS = [
  { number: '150+', label: 'PROJECTS DELIVERED', icon: Trophy },
  { number: '98%', label: 'SUCCESS RATE', icon: Target },
  { number: '5.0', label: 'AVERAGE RATING', icon: Star },
  { number: '24/7', label: 'SUPPORT', icon: Zap }
];

// Testimonial Card Component (for carousel)
const TestimonialCard = ({ testimonial, index, itemWidth, isInView }) => {
  return (
    <motion.div
      className="group relative p-8 bg-slate-900 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden flex-shrink-0 flex flex-col"
      style={{ width: `${itemWidth}px` }} // Dynamic width
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.05, duration: 0.6 }} // Staggered entry
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with category badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{testimonial.category}</span>
          </div>
          <Quote className="w-8 h-8 text-cyan-500/20" />
        </div>
        
        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }, (_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-cyan-500 fill-current' : 'text-slate-600'}`} 
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow">
          "{testimonial.testimonial}"
        </blockquote>

        {/* Results Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {testimonial.results.map((result, i) => (
            <div key={i} className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <div className="text-2xl font-black text-white mb-1">{result.metric}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">{result.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">TECHNOLOGIES:</h4>
          <div className="flex flex-wrap gap-2">
            {testimonial.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Client Info */}
        <div className="border-t border-slate-700 pt-6 mt-auto">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tight">
                {testimonial.name}
              </h4>
              <p className="text-cyan-400 font-bold text-sm mb-1 uppercase tracking-wide">
                {testimonial.position}
              </p>
              <p className="text-slate-300 text-sm flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4" />
                {testimonial.company}
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {testimonial.location}
              </p>
            </div>
            
            {/* Avatar */}
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-black ml-4">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          
          {/* Project */}
          <div className="mt-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              PROJECT: {testimonial.project}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// Main Testimonials Component
const Testimonials = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const carouselWrapperRef = useRef(null); // Ref for the overflow-hidden container
  const carouselInnerRef = useRef(null); // Ref for the flex container inside
  const ctaRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.1 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [itemFullWidth, setItemFullWidth] = useState(0); // Width of one card + its right margin/gap

  const calculateItemWidth = useCallback(() => {
    if (carouselInnerRef.current) {
      const firstCard = carouselInnerRef.current.children[0];
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        const gap = 32; // Assuming gap-8 for the carousel items
        setItemFullWidth(cardRect.width + gap);
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      let newItemsPerView;
      if (window.innerWidth >= 1024) { // lg breakpoint and above
        newItemsPerView = 3; 
      } else if (window.innerWidth >= 768) { // md breakpoint
        newItemsPerView = 2;
      } else { // sm and below
        newItemsPerView = 1;
      }
      setItemsPerView(newItemsPerView);
      // Recalculate item width after itemsPerView potentially changes, as card width classes might change
      setTimeout(calculateItemWidth, 100); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateItemWidth]);

  useEffect(() => {
    // Recalculate item width whenever currentIndex changes to ensure accurate translation
    calculateItemWidth();
  }, [currentIndex, calculateItemWidth]);

  const totalSlides = Math.ceil(TESTIMONIALS.length / itemsPerView);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      {/* Developer Header Stripe */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      
      <section 
        ref={sectionRef}
        id="testimonials" 
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
        aria-label="Client testimonials"
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
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">CLIENT SUCCESS STORIES</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                TRUSTED BY INDUSTRY LEADERS
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Real stories from satisfied clients who trusted me to transform their digital presence and drive exceptional business growth.
              </p>

              {/* Code Bracket Element */}
              <div className="text-cyan-500 font-mono text-2xl mb-8">&lt;/&gt;</div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                  <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonials Carousel */}
            <motion.div
              className="mb-20 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  WHAT MY CLIENTS SAY
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Discover how I've helped businesses across different industries achieve their digital transformation goals.
                </p>
              </div>
              
              <div className="relative overflow-hidden px-10 md:px-0" ref={carouselWrapperRef}>
                <motion.div 
                  className="flex gap-8 pb-4" // Tailwind gap-8 for 32px gap
                  ref={carouselInnerRef}
                  animate={{
                    x: -currentIndex * itemFullWidth // Use calculated itemFullWidth for translation
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {TESTIMONIALS.map((testimonial, index) => (
                    <TestimonialCard 
                      key={testimonial.id} 
                      testimonial={testimonial} 
                      index={index}
                      itemWidth={
                        // Calculate width dynamically based on itemsPerView and container width
                        // Subtract total gap space from container width, then divide by itemsPerView
                        carouselWrapperRef.current 
                          ? (carouselWrapperRef.current.offsetWidth - (32 * (itemsPerView - 1))) / itemsPerView 
                          : 300 // Fallback width
                      }
                      isInView={isInView} // Pass isInView to cards for individual animation
                    />
                  ))}
                </motion.div>

                {/* Carousel Navigation Buttons */}
                {totalSlides > 1 && (
                  <>
                    <motion.button
                      onClick={goToPrev}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 shadow-lg z-20"
                      aria-label="Previous testimonial"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      onClick={goToNext}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 shadow-lg z-20"
                      aria-label="Next testimonial"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </>
                )}

                {/* Carousel Dots/Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        currentIndex === idx ? 'bg-cyan-500' : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>


            {/* Enhanced Call to Action */}
            <motion.div 
              ref={ctaRef}
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>

                <div className="relative z-10">
                  <Terminal className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    READY TO JOIN THESE SUCCESS STORIES?
                  </h3>
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Let's create your next success story together. I'm excited to help transform your vision into reality with proven results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="#contact"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5" />
                      <span>START YOUR PROJECT</span>
                    </motion.a>
                    
                    <motion.a
                      href="#projects"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 uppercase tracking-wide group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-5 h-5" />
                      VIEW PORTFOLIO
                    </motion.a>
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

export default Testimonials;
