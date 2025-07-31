'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Star, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const FeelanceCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const freelanceStats = [
    {
      icon: Star,
      number: '5.0',
      label: 'Average Rating',
      color: 'text-yellow-600'
    },
    {
      icon: Award,
      number: '100+',
      label: 'Projects Completed',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      number: '$100K+',
      label: 'Total Earned',
      color: 'text-green-600'
    }
  ];

  const freelancePlatforms = [
    {
      name: 'Upwork',
      badge: 'Top Rated Plus',
      earning: '$100k+ Earned',
      icon: 'https://www.upwork.com/favicon.ico',
      color: 'bg-green-100'
    },
    {
      name: 'Fiverr',
      badge: 'Top Rated Seller',
      earning: '5-Star Rating',
      icon: 'https://www.fiverr.com/favicon.ico',
      color: 'bg-green-100'
    }
  ];

  return (
    <div ref={ref} className="relative" id="FeelanceCTA">
      {/* Image that bleeds outside the main section */}
      <div className="absolute left-0 top-0 w-full lg:w-1/2 z-10 lg:-mt-20">
        <motion.div
          className="h-[50vh] lg:h-[90vh] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -60, scale: 1.1 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop"
            alt="Freelancer working with a client"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-accent-lime/10" />
        </motion.div>
      </div>

      {/* Main lime section */}
      <section className="bg-accent-lime relative min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 min-h-[70vh]">
          {/* Left Column: Space for bleeding image */}
          <div className="relative hidden lg:block">
            {/* Empty space */}
          </div>

          {/* Right Column: Content on lime background */}
          <motion.div 
            className="text-black flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-20 lg:py-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section Label */}
            <motion.div
              className="inline-flex items-center gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="w-12 h-1 bg-black" />
              <span className="text-black/70 font-semibold text-sm uppercase tracking-wider">Freelance Services</span>
            </motion.div>

            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8"
              variants={itemVariants}
            >
              A Top Rated
              <br />
              <span className="text-black/80">Freelance Developer</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-black/80 max-w-lg mb-12 leading-relaxed"
              variants={itemVariants}
            >
              I help businesses develop immersive and engaging user experiences that drive top-level growth for clients on Upwork and Fiverr.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-12"
              variants={itemVariants}
            >
              {freelanceStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.6 + index * 0.1,
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-black mb-1">{stat.number}</div>
                  <div className="text-sm text-black/70 font-medium uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mb-16">
              <motion.a
                href="#projects"
                className="group bg-black text-accent-lime font-bold px-10 py-4 rounded-xl hover:bg-black/90 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>VIEW MY PORTFOLIO</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Platform Badges & Customer Count */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              {/* Platform Badges */}
              <div className="flex flex-wrap gap-4">
                {freelancePlatforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    className="flex items-center gap-3 bg-black/10 hover:bg-black/20 px-4 py-3 rounded-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      duration: 0.6
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img 
                        src={platform.icon} 
                        alt={`${platform.name} logo`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm">{platform.name}</div>
                      <div className="text-xs text-black/70">{platform.badge}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Customer Trust Section */}
              <motion.div 
                className="flex items-center gap-4 p-6 bg-black/10 rounded-2xl hover:bg-black/20 transition-colors group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <div className="flex -space-x-2">
                  {/* Sample client avatars */}
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-accent-lime flex items-center justify-center text-white font-bold text-sm"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-accent-lime flex items-center justify-center text-accent-lime font-bold text-xs">
                    +10K
                  </div>
                </div>
                <div>
                  <p className="font-bold text-black text-lg">10,000+ Happy Clients</p>
                  <p className="text-sm text-black/70 font-medium">Trusted by businesses worldwide</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden px-8 pb-8">
          <div className="h-64 w-full rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop"
              alt="Freelancer working with a client"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeelanceCTA;