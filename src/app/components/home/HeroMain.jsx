'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const HeroMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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

  return (
    <section 
      ref={ref}
      className="h-screen bg-black flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <div className="text-left">
            <motion.p 
              className="text-xl md:text-2xl text-accent-lime font-medium mb-4"
              variants={itemVariants}
            >
              Hi, I'm Ratan Mia
            </motion.p>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tighter"
              variants={itemVariants}
            >
              Senior Full Stack Developer
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mt-8 max-w-lg"
              variants={itemVariants}
            >
              I am a digital agency that helps immersive and engaging user experiences that drive results.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-12">
              <motion.a
                href="#contact"
                className="group bg-accent-lime text-black font-bold px-8 py-4 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-400/40 transition-all duration-300 inline-flex items-center gap-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>WORK WITH ME</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces" 
                alt="Ratan Mia"
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroMain;
