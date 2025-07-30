'use client';

import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'Modern e-commerce solution with React.js frontend and Laravel backend, featuring payment integration and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&q=80',
      technologies: ['React.js', 'Laravel', 'MySQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      description: 'Collaborative task management application built with Next.js and modern UI components.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center&q=80',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Restaurant Website',
      category: 'WordPress',
      description: 'Custom WordPress theme with online ordering system and reservation management.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center&q=80',
      technologies: ['WordPress', 'PHP', 'Custom Theme'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Dashboard',
      category: 'Backend',
      description: 'Laravel-based API and admin dashboard for managing portfolio content and analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&q=80',
      technologies: ['Laravel', 'Vue.js', 'REST API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-black" id="projects">
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
            Selected Projects
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
            Recent work showcasing modern web development
          </motion.p>
        </motion.div>

        {/* Projects Grid - Varied Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`card-design card-project overflow-hidden group ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`${project.featured ? 'md:flex md:gap-8' : ''}`}>
                
                {/* Project Image */}
                <div className={`image-overlay relative overflow-hidden ${
                  project.featured ? 'md:w-1/2' : ''
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 smooth-transition"
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent-secondary text-black caption-text font-medium rounded-design">
                      Featured
                    </div>
                  )}
                  
                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent rounded-design flex items-center justify-center text-black hover-elevate smooth-transition"
                      whileHover={{ rotate: 5 }}
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-design flex items-center justify-center text-black hover-elevate smooth-transition"
                      whileHover={{ rotate: -5 }}
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-8 ${project.featured ? 'md:w-1/2' : ''}`}>
                  
                  {/* Category */}
                  <div className="text-accent caption-text font-medium mb-2">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-text mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="body-text-small text-neutral mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-card-dark text-accent-secondary caption-text font-medium rounded-design"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
            href="/portfolio"
            className="btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
