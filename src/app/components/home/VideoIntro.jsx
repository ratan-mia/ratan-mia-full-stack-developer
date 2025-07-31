'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { X } from 'lucide-react';
import { useRef, useState } from 'react';

const VideoIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Replace with your actual YouTube video ID
  const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ'; 

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
  
  const playButtonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        type: 'spring',
        stiffness: 100,
      }
    }
  };

  return (
    <>
      <section 
        ref={ref}
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop')" }}
        id="intro-video"
      >
        {/* Enhanced Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 z-0"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-accent-lime/10 rounded-full blur-2xl"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 bg-accent-lime/5 rounded-full blur-3xl"
            animate={{ 
              y: [0, 30, 0],
              x: [0, -20, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center h-full"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6"
            variants={itemVariants}
          >
            Meet Ratan Mia
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            Get to know the developer behind your next project. Watch my personal introduction and discover my journey, expertise, and passion for creating exceptional web solutions.
          </motion.p>

          {/* Perfectly Centered Play Button */}
          <motion.div 
            className="flex items-center justify-center"
            variants={playButtonVariants}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="group relative w-48 h-48 lg:w-56 lg:h-56 flex items-center justify-center rounded-full bg-accent-lime text-black shadow-2xl hover:shadow-lime-400/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Enhanced Ripple Effects */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-accent-lime/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-accent-lime/20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8
                }}
              />
              
              <span className="relative font-bold text-lg tracking-wider z-10">PLAY VIDEO</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="relative w-full max-w-4xl aspect-video"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Close Button */}
              <motion.button 
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-16 right-0 lg:-right-16 text-white hover:text-accent-lime transition-colors z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Video Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoIntro;