'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Code2, Database, Globe, Layers, ShoppingCart, Smartphone } from 'lucide-react';
import { useRef } from 'react';

// --- Reusable Service Card Component ---
const ServiceCard = ({ icon: Icon, title, description, index, inView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.2 + index * 0.1 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative p-8 rounded-2xl bg-accent-lime text-black h-full flex flex-col group overflow-hidden"
    >
      <div className="relative z-10 flex flex-col h-full">
        <motion.div 
          className="mb-8 w-16 h-16 rounded-xl flex items-center justify-center bg-black/10"
        >
          <Icon className="w-8 h-8 text-black" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
        <p className="text-black/70 mb-10 flex-grow">{description}</p>
        
        <a href="#" className="flex items-center gap-2 font-semibold text-black mt-auto">
          <span>VIEW DETAILS</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};


// --- MAIN SERVICES COMPONENT ---
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Modern React & Next.js applications with stunning interfaces and seamless user experiences.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust Laravel APIs and server-side solutions that scale with your business needs.',
    },
    {
      icon: Smartphone,
      title: 'Full Stack Solutions',
      description: 'Complete web applications from database architecture to final deployment.',
    },
    {
      icon: Layers,
      title: 'WordPress Development',
      description: 'Custom themes, plugins, and high-performance websites using the world\'s most popular CMS.',
    },
    {
      icon: ShoppingCart,
      title: 'Shopify E-commerce',
      description: 'Building and customizing beautiful, high-converting online stores on the Shopify platform.',
    },
    {
      icon: Globe,
      title: 'Laravel Ecosystem',
      description: 'Expertise in the full Laravel ecosystem, including Livewire, Inertia, and Nova for rapid application development.',
    }
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(204,255,0,0.05),rgba(255,255,255,0))] text-white" id="services">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I Can Do for My Clients
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From custom front-end designs to complex back-end systems, I provide a comprehensive suite of development services to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
