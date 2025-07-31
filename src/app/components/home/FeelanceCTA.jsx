'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const FeelanceCTA = () => {
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

  const freelancePlatforms = [
      {
          name: 'Upwork',
          badge: 'Top Rated Plus',
          earning: '$100k+ Earned',
          icon: 'https://www.upwork.com/favicon.ico'
      },
      {
          name: 'Fiverr',
          badge: 'Top Rated Seller',
          earning: '5-Star Rating',
          icon: 'https://www.fiverr.com/favicon.ico'
      }
  ];

  return (
    <section 
      ref={ref}
      className="bg-accent-lime text-black"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 items-center min-h-[70vh] lg:min-h-screen">
          {/* Left Column: Image */}
          <motion.div 
            className="h-[400px] lg:h-full w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop"
                alt="Freelancer working with a client"
                className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            className="p-12 lg:p-24"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6"
              variants={itemVariants}
            >
              A Top Rated Freelance Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg text-black/80 max-w-lg mb-10"
              variants={itemVariants}
            >
              I help businesses develop immersive and engaging user experiences that drive top-level growth for clients on Upwork and Fiverr.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-12">
              <a
                href="#projects"
                className="group bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-3 text-lg"
              >
                <span>VIEW MY WORKS</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div className="flex items-center gap-4" variants={itemVariants}>
                <div className="flex -space-x-4">
                    {freelancePlatforms.map(platform => (
                        <img 
                            key={platform.name}
                            src={platform.icon} 
                            alt={`${platform.name} logo`} 
                            className="w-12 h-12 rounded-full bg-white p-1 border-2 border-accent-lime"
                        />
                    ))}
                </div>
                <div>
                    <p className="font-bold text-black">MORE THAN 10K+</p>
                    <p className="text-sm text-black/70">TRUSTED CUSTOMERS</p>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeelanceCTA;
