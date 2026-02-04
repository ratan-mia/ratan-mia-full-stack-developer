'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Calendar, Check, ExternalLink, Globe, Users } from 'lucide-react';
import { useRef } from 'react';

/**
 * Case Study Detail Page Component
 * Minimal design following portfolio guidelines
 */

const CaseStudyDetail = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-header text-white mb-4">Project Not Found</h1>
          <a href="/portfolio" className="text-accent-lime hover:underline">
            ← Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white" ref={ref}>
      
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          
          {/* Back Button */}
          <motion.a
            href="/portfolio"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-lime 
                     mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </motion.a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-accent-lime text-black text-sm font-bold rounded-lg">
                  {project.category}
                </span>
                {project.type === 'featured' && (
                  <span className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="hero-title mb-4">{project.title}</h1>
              
              {project.subtitle && (
                <p className="text-2xl text-accent-lime font-semibold mb-6">
                  {project.subtitle}
                </p>
              )}

              <p className="body-text text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="caption-text text-gray-500 mb-1">Client</div>
                  <div className="body-text-small font-semibold text-white">{project.client}</div>
                </div>
                <div>
                  <div className="caption-text text-gray-500 mb-1">Year</div>
                  <div className="body-text-small font-semibold text-white">{project.year}</div>
                </div>
                <div>
                  <div className="caption-text text-gray-500 mb-1">Status</div>
                  <div className="body-text-small font-semibold text-accent-lime capitalize">
                    {project.status}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-lime text-black 
                             font-semibold rounded-xl hover:shadow-lime-glow transition-all duration-300"
                  >
                    <Globe className="w-5 h-5" />
                    View Live Project
                  </a>
                )}
                {project.caseStudyPath && (
                  <a
                    href={project.caseStudyPath}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white 
                             font-semibold rounded-xl hover:bg-white/20 transition-all duration-300
                             border border-white/10"
                  >
                    Read Full Case Study
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right: Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.thumbnail || project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative w-full py-16 bg-black border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category}>
                  <h3 className="text-sm font-bold text-accent-lime uppercase mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {techs.map((tech, i) => (
                      <li key={i} className="text-gray-300 body-text-small">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <section className="relative w-full py-16 bg-gray-900/30">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12">Key Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10
                             hover:bg-white/10 hover:border-accent-lime/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-lime/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-lime" />
                    </div>
                    <p className="body-text-small text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      {project.impact && project.impact.length > 0 && (
        <section className="relative w-full py-16 bg-black border-t border-white/10">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12">Business Impact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.impact.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 bg-gradient-to-br from-accent-lime/10 to-transparent rounded-xl 
                             border border-accent-lime/30 hover:border-accent-lime hover:shadow-lime-glow
                             transition-all duration-300"
                  >
                    <div className="text-accent-lime text-4xl font-bold mb-2">
                      {item.split(' ')[0]}
                    </div>
                    <p className="body-text-small text-gray-300">
                      {item.split(' ').slice(1).join(' ')}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      {project.images && project.images.length > 1 && (
        <section className="relative w-full py-16 bg-gray-900/30">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12">Project Gallery</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.slice(1).map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 
                               group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative w-full py-24 bg-gradient-to-t from-gray-900 to-black">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interested in a similar project?
            </h2>
            <p className="body-text text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with modern technology 
              and clean, scalable solutions.
            </p>
            <a
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-lime text-black 
                       font-bold text-lg rounded-xl hover:shadow-lime-glow transition-all duration-300"
            >
              Get a Quote
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
