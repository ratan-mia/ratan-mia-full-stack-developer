'use client';

import { PORTFOLIO_PROJECTS, PROJECT_CATEGORIES, getFeaturedProjects } from '@/data/portfolio-data';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react';

/**
 * Projects Component - Minimal Design
 * Following design guidelines with lime accent and clean typography
 */

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  // Show featured projects first
  const displayProjects = activeCategory === 'All' 
    ? [...getFeaturedProjects(), ...PORTFOLIO_PROJECTS.filter(p => p.type !== 'featured')].slice(0, 9)
    : filteredProjects.slice(0, 9);

  return (
    <section 
      ref={ref} 
      className="relative w-full bg-black py-24 md:py-32"
      id="projects"
    >
      {/* Container */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Overline */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent-lime" />
            <span className="text-sm font-medium uppercase tracking-wider text-gray-400">
              Portfolio
            </span>
          </div>

          {/* Title */}
          <h2 className="section-header mb-6">
            Selected <span className="text-accent-lime">Projects</span>
          </h2>

          {/* Description */}
          <p className="body-text text-gray-400 max-w-2xl">
            A collection of products and client work across mobile apps, SaaS platforms, 
            e-commerce solutions, and enterprise systems.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 flex flex-wrap gap-3"
        >
          {PROJECT_CATEGORIES.map((category, idx) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2.5 text-sm font-medium rounded-lg
                transition-all duration-300
                ${activeCategory === category
                  ? 'bg-accent-lime text-black shadow-lime-glow'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayProjects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx}
              inView={isInView}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-accent-lime
                     text-white hover:text-black border border-white/10 hover:border-accent-lime
                     rounded-xl font-semibold transition-all duration-300 hover:shadow-lime-glow"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Project Card Component
 * Clean, minimal card design with hover effects
 */
const ProjectCard = ({ project, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: 0.3 + (index * 0.1),
        ease: [0.23, 1, 0.32, 1]
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={project.liveUrl || '#'}
        target={project.liveUrl ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 mb-6">
          <img
            src={project.thumbnail || project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Status Badge */}
          {project.type === 'featured' && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-accent-lime text-black text-xs font-bold rounded-full">
                Featured
              </span>
            </div>
          )}
          
          {/* Hover Icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 
                          transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-accent-lime flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Category & Year */}
          <div className="flex items-center gap-3 text-sm">
            <span className="caption-text text-accent-lime font-medium">
              {project.category}
            </span>
            <span className="caption-text text-gray-600">•</span>
            <span className="caption-text text-gray-500">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-lime 
                         transition-colors duration-300 leading-tight">
            {project.title}
          </h3>

          {/* Subtitle */}
          {project.subtitle && (
            <p className="body-text-small text-gray-500 leading-relaxed">
              {project.subtitle}
            </p>
          )}

          {/* Short Description */}
          <p className="body-text-small text-gray-400 leading-relaxed line-clamp-2">
            {project.shortDescription || project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {Object.values(project.technologies)
              .flat()
              .slice(0, 3)
              .map((tech, i) => (
                <span
                  key={i}
                  className="caption-text px-3 py-1 bg-white/5 text-gray-400 rounded-full
                           group-hover:bg-white/10 group-hover:text-gray-300 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            {Object.values(project.technologies).flat().length > 3 && (
              <span className="caption-text px-3 py-1 text-gray-600">
                +{Object.values(project.technologies).flat().length - 3} more
              </span>
            )}
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export default Projects;
