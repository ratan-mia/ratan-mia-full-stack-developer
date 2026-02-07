'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const OurCommitment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const commitments = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto">
          <path d="M30 10 L50 25 L30 40 L10 25 Z M30 40 L50 55 L30 70 L10 55 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Innovation First',
      description: 'I embrace cutting-edge technologies and creative strategies to keep you ahead of the competition.'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto">
          <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M20 25 L25 30 L40 20 M15 35 L20 40 L35 30 M25 40 L30 45 L45 35" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Client-Centric Approach',
      description: 'Your success is my priority. I listen, collaborate, and tailor solutions to meet your unique needs.'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto">
          <path d="M15 30 L30 15 L45 30 M20 30 L30 20 L40 30 M25 30 L30 25 L35 30" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M15 35 L30 50 L45 35" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Transparency & Trust',
      description: 'Clear communication, honesty, and integrity are at the heart of my partnerships.'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-black relative overflow-hidden" id="commitment">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Lime Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/10 via-transparent to-accent-lime/5" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(rgba(204, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-start gap-8 lg:gap-12">
            {/* Badge */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-black rounded-full border-2 border-white" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4">
                  <svg viewBox="0 0 20 20" className="w-full h-full">
                    <polygon points="10,2 3,18 17,18" fill="#ccff00" />
                  </svg>
                </div>
              </div>
              <div className="mt-3 text-white text-xs font-bold tracking-wider">
                100% TRUSTED DEVELOPER
              </div>
            </motion.div>

            {/* Title */}
            <div className="flex-1">
              <motion.h2 
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                MY COMMITMENT
              </motion.h2>
              
              <motion.p 
                className="text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I specialize in delivering cutting-edge strategies, unparalleled creativity, and seamless execution.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Commitment Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-accent-lime rounded-2xl p-8 lg:p-10 border border-accent-lime/20 hover:border-accent-lime hover:shadow-2xl hover:shadow-accent-lime/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon */}
              <div className="mb-8 text-black transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-extrabold text-black mb-4 leading-tight">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-black/80 leading-relaxed font-medium">
                {item.description}
              </p>

              {/* Hover accent - bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
