'use client';

import { motion, useInView } from 'framer-motion';
import { Code2, Globe, Smartphone } from 'lucide-react';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Modern React.js and Next.js applications with stunning user interfaces and seamless user experiences.',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Globe,
      title: 'Backend Development',
      description: 'Robust Laravel APIs and server solutions that scale with your business needs and handle complex logic.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'REST APIs']
    },
    {
      icon: Smartphone,
      title: 'Full Stack Solutions',
      description: 'Complete web applications from database to deployment, providing end-to-end development expertise.',
      technologies: ['Full Stack', 'E-commerce', 'CMS', 'Custom Apps']
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-black" id="services">
      <div className="container-design">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="section-header text-primary-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What I Do
          </motion.h2>
          
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="body-text text-neutral max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Specialized expertise in modern web development
          </motion.p>
        </motion.div>

        {/* Services Grid - 3 Column Layout */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-design card-service text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-accent rounded-design-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-black" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-text mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="body-text-small text-neutral mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-card-dark text-accent caption-text font-medium rounded-design"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
