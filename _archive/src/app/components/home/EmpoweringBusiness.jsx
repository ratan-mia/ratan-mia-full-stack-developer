'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useRef } from 'react';

// --- MAIN EMPOWERING BUSINESS COMPONENT ---
export default function EmpoweringBusiness() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div className="relative" id="empowering-business">
      {/* Image that bleeds outside the main section - only top */}
      <div className="absolute right-0 top-0 w-1/2 z-10 -mt-20">
        <motion.div
          className="h-[60vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
            alt="Business professionals collaborating in a meeting"
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
          {/* Left Column: Content on lime background */}
          <motion.div 
            className="text-black flex flex-col justify-center px-12 py-16 lg:px-16 xl:px-20 lg:py-20 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Empowering Your Businesses in the Digital Realm
            </motion.h2>
            
            <motion.p 
              className="text-lg lg:text-xl text-black/80 leading-relaxed mb-16 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              If you ask our clients what it's like working with us, they'll talk about how much we care about their success. For us, real relationships fuel real success. We love building digital solutions that drive growth.
            </motion.p>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* First Stat */}
              <motion.div
                className="border-r border-black/20 pr-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-5xl lg:text-6xl font-extrabold text-black mb-2">
                  150+
                </div>
                <div className="text-lg font-semibold text-black/80">
                  Successful Projects
                </div>
              </motion.div>

              {/* Second Stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="text-5xl lg:text-6xl font-extrabold text-black mb-2">
                  98%
                </div>
                <div className="text-lg font-semibold text-black/80">
                  Satisfied Customers
                </div>
              </motion.div>
            </motion.div>

            {/* Up Arrow - Bottom Right */}
            <motion.div 
              className="absolute bottom-8 right-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="w-6 h-6 text-accent-lime" />
              </motion.button>
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
}