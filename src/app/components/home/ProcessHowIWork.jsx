'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Code,
  Lightbulb,
  Palette,
  Rocket
} from 'lucide-react';
import { useRef } from 'react';

// --- Reusable Process Step Component ---
const ProcessStep = ({ step, index, inView }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.3 + index * 0.2,
      },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col text-left"
      variants={itemVariants}
    >
      <div className="flex items-center mb-4">
        <div className={`w-4 h-4 rounded-full ${index % 2 === 0 ? 'bg-accent-lime' : 'bg-accent-orange'} z-10`}></div>
        <div className="ml-4 text-sm font-semibold text-gray-400 tracking-widest">
          STEP {index + 1}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
      <p className="text-gray-400 leading-relaxed">{step.description}</p>
    </motion.div>
  );
};

// --- MAIN PROCESS COMPONENT ---
const ProcessHowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Strategy',
      description: 'A deep-dive consultation to understand your goals, audience, and project requirements.',
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Creating stunning, user-focused designs and interactive prototypes for feedback.',
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'Writing clean, scalable code and conducting rigorous testing for a flawless final product.',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Ensuring a smooth deployment with ongoing support and maintenance for long-term success.',
    }
  ];
  
  const offeredServices = [
    'Human Centered Design to Challenges',
    'Bring Their Individual Experience',
    'Developing Core Web Applications'
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-black text-white" id="process">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-28">
        
        {/* Top Section: Process */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-extrabold text-center mb-20 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Four Step Process
          </motion.h2>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-2 left-0 w-full h-0.5 bg-gray-800"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  step={step}
                  index={index}
                  inView={isInView}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section: Services */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          {/* Left Column: Image */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
              alt="Team collaborating on a project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="text-left">
            <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
              We Offer a Wide Range of Brand Services
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              We are a creative agency working with brands building insightful strategy, creating unique designs and crafting value.
            </p>
            <ul className="space-y-4 mb-12">
              {offeredServices.map((service) => (
                 <li key={service} className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-accent-lime rounded-full"></div>
                   <span className="text-lg font-semibold">{service}</span>
                 </li>
              ))}
            </ul>
            <a href="#about" className="group text-accent-lime font-bold inline-flex items-center gap-3 tracking-wider">
              <span>ABOUT US</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessHowIWork;
