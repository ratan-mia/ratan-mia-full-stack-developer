'use client';

import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, MapPin, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dewan Saidur Rahman",
      position: "Managing Director",
      company: "Kawasaki Bangladesh", 
      quote: "97% speed optimization exceeded our expectations. Outstanding work!",
      rating: 5,
      impact: "300% Sales Growth",
      avatar: "D",
      gradient: "from-accent/20 to-accent-secondary/20"
    },
    {
      id: 2,
      name: "Sarah Johnson", 
      position: "CEO",
      company: "Digital Innovations",
      quote: "Transformed our vision into a scalable e-commerce platform perfectly.",
      rating: 5,
      impact: "$500K Revenue",
      avatar: "S",
      gradient: "from-accent-secondary/20 to-accent/20"
    },
    {
      id: 3,
      name: "Mohammad Nayab",
      position: "Operations Manager",
      company: "Chery Bangladesh",
      quote: "CRM integration and API work delivered 200% sales increase.",
      rating: 5,
      impact: "200% Growth",
      avatar: "M",
      gradient: "from-accent/15 to-accent-secondary/15"
    }
  ];

  const stats = [
    { icon: Users, number: '50+', label: 'Happy Clients', color: 'text-accent' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate', color: 'text-accent-secondary' },
    { icon: Award, number: '5.0', label: 'Avg Rating', color: 'text-accent' },
    { icon: Star, number: '150+', label: 'Projects', color: 'text-accent-secondary' }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden" id="testimonials">
      {/* Background Graphics - Quote Marks */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 text-9xl text-accent/10 font-serif">"</div>
        <div className="absolute bottom-20 right-10 text-9xl text-accent/10 font-serif rotate-180">"</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-accent-secondary/5 font-serif">"</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-24 h-24 bg-accent-secondary/10 rounded-full blur-2xl"
          animate={{ 
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-design relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="section-header text-primary-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Client Success Stories
          </motion.h2>
          
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 ${stat.color} bg-card rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="caption-text text-neutral">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative bg-gradient-to-br from-accent/95 to-accent-secondary/95 rounded-design-lg p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 text-center text-black">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-black fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-semibold mb-8 leading-tight">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Impact Badge */}
                <div className="inline-flex items-center gap-2 bg-black/20 px-6 py-3 rounded-design mb-8">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-bold">{testimonials[currentIndex].impact}</span>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-black rounded-design-lg flex items-center justify-center text-accent text-2xl font-bold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-black/80">{testimonials[currentIndex].position}</p>
                    <p className="text-black/70 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <button
                  onClick={() => setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                  className="w-12 h-12 bg-black/20 hover:bg-black/30 rounded-design flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`transition-all ${
                        currentIndex === index 
                          ? 'w-8 h-3 bg-black rounded-design' 
                          : 'w-3 h-3 bg-black/50 rounded-full hover:bg-black/70'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentIndex(prev => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 bg-black/20 hover:bg-black/30 rounded-design flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Testimonials - Compact Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`card-design group cursor-pointer relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent mb-4 group-hover:text-accent-secondary transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>

                {/* Quote Text - Shortened */}
                <blockquote className="body-text-small text-neutral mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Impact */}
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-design text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  {testimonial.impact}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 border-t border-design pt-4">
                  <div className="w-10 h-10 bg-accent rounded-design flex items-center justify-center text-black font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-text">{testimonial.name}</h4>
                    <p className="text-sm text-neutral">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="relative bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 p-12 rounded-design-lg border border-accent/30">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-accent/20 rounded-design rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-secondary/10 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
                Join These Success Stories
              </h3>
              <p className="body-text text-neutral mb-8 max-w-2xl mx-auto">
                Ready to transform your business? Let's create your success story.
              </p>
              
              <motion.a
                href="#contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
