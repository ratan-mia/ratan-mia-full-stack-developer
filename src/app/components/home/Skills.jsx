'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useRef } from 'react';

// --- Reusable Skill Bar Component ---
const SkillBar = ({ skill, index, inView }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-black text-base uppercase tracking-wider">{skill.name}</span>
        <span className="font-bold text-black text-base">{skill.level}%</span>
      </div>
      <div className="h-0.5 bg-black/40 overflow-hidden">
        <motion.div
          className="h-full bg-black"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// --- MAIN SKILLS COMPONENT ---
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Original technical skills data preserved
  const allSkills = [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 92 },
    { name: 'TypeScript', level: 88 },
    { name: 'Laravel', level: 94 },
    { name: 'PHP', level: 91 },
    { name: 'Node.js', level: 85 },
    { name: 'WordPress', level: 93 },
    { name: 'Docker', level: 82 },
    { name: 'AWS', level: 78 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' }}
  };

  return (
    <div className="relative" id="skills">
      {/* Image that bleeds outside the main section - only top */}
      <div className="absolute left-0 top-0 w-1/2 z-10 -mt-20">
        <motion.div
          className="h-[90vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop"
            alt="Team collaborating on a project"
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
          {/* Left Column: Space for bleeding image */}
          <div className="relative">
            {/* Empty space - image is positioned absolutely outside */}
          </div>

          {/* Right Column: Content on lime background */}
          <motion.div 
            className="text-black flex flex-col justify-center px-12 py-16 lg:px-16 xl:px-20 lg:py-20 relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8"
              variants={itemVariants}
            >
              Skills & Technical Expertise
            </motion.h2>
            
            <motion.p 
              className="text-lg lg:text-xl text-black/80 leading-relaxed mb-12 max-w-lg"
              variants={itemVariants}
            >
              We are a creative agency working with brands building insightful strategy, creating unique designs and crafting value
            </motion.p>

            <div className="space-y-5 mb-16">
              {allSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                  inView={isInView}
                />
              ))}
            </div>

            {/* Up Arrow - Bottom Right */}
            <motion.div 
              className="absolute bottom-8 right-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
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
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;