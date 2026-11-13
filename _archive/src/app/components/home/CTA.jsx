'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
        }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-32 lg:py-40 bg-black"
    >
      <motion.div 
        className="max-w-6xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
          {/* Left Content */}
          <div>
            <motion.h2 
              className="text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tighter"
              variants={itemVariants}
            >
              Let's Create<br />Something Great
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mt-6 max-w-xl"
              variants={itemVariants}
            >
              We shift you from today's reality to tomorrow's potential, ensuring your brand thrives in the digital landscape.
            </motion.p>
          </div>

          {/* Right Content - Button */}
          <motion.div variants={circleVariants}>
            <a
              href="#contact"
              className="group relative w-48 h-48 lg:w-56 lg:h-56 flex items-center justify-center"
            >
              <motion.div
                className="absolute inset-0 bg-accent-lime rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
              <motion.span 
                className="relative text-black font-bold text-lg tracking-wider"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                LET'S TALK
              </motion.span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
