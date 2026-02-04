'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Award, Check, ExternalLink, Globe, Target } from 'lucide-react';
import { useRef } from 'react';

/**
 * Case Study Detail Page Component
 * Comprehensive layout with features, images, and detailed sections
 */

const CaseStudyDetail = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-header text-black mb-4">Project Not Found</h1>
          <a href="/portfolio" className="text-accent-lime hover:underline">
            ← Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black" ref={ref}>
      
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          
          {/* Back Button */}
          <motion.a
            href="/portfolio"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black 
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
                  <span className="px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-lg border border-black/10">
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

              <p className="body-text text-gray-700 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="caption-text text-gray-500 mb-1">Client</div>
                  <div className="body-text-small font-semibold text-black">{project.client}</div>
                </div>
                <div>
                  <div className="caption-text text-gray-500 mb-1">Year</div>
                  <div className="body-text-small font-semibold text-black">{project.year}</div>
                </div>
                <div>
                  <div className="caption-text text-gray-500 mb-1">Status</div>
                  <div className="body-text-small font-semibold text-green-600 capitalize">
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black/5 text-black 
                             font-semibold rounded-xl hover:bg-black/10 transition-all duration-300
                             border border-black/10"
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
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="relative w-full py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-accent-lime mb-4">The Challenge</h3>
                <p className="body-text text-gray-700 mb-6 leading-relaxed">
                  {project.challenge || project.description}
                </p>
                
                <h3 className="text-2xl font-bold text-accent-lime mb-4 mt-8">The Solution</h3>
                <p className="body-text text-gray-700 mb-6 leading-relaxed">
                  {project.solution || 'A comprehensive solution tailored to meet client needs with modern technology stack and scalable architecture.'}
                </p>
              </div>
              
              <div className="space-y-6">
                {project.keyHighlights && project.keyHighlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-lime/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1">{highlight.title}</h4>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative w-full py-16 bg-gray-50 border-t border-gray-200">
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
                      <li key={i} className="text-gray-700 body-text-small">
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

      {/* Features Section with Images */}
      {project.detailedFeatures && project.detailedFeatures.length > 0 && (
        <section className="relative w-full py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Detailed Features</h2>
              <p className="text-gray-600 mb-12 max-w-3xl">
                Comprehensive feature breakdown showcasing the depth and breadth of functionality built into the platform.
              </p>
              
              <div className="space-y-20">
                {project.detailedFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Feature Content */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-accent-lime/20 text-green-700 text-xs font-bold rounded-full">
                          Feature {index + 1}
                        </span>
                        {feature.badge && (
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-700 text-xs font-bold rounded-full">
                            {feature.badge}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {feature.highlights && (
                        <ul className="space-y-3 mb-6">
                          {feature.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {feature.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {feature.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Feature Image */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-auto"
                        />
                        {feature.imageCaption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p className="text-white text-sm">{feature.imageCaption}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <section className="relative w-full py-16 bg-gray-50">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Complete Feature List</h2>
              <p className="text-gray-600 mb-12">
                All capabilities and functionalities built into the platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200
                             hover:shadow-md hover:border-accent-lime/50 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Technical Implementation Section */}
      {project.technicalDetails && (
        <section className="relative w-full py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12">Technical Implementation</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {project.technicalDetails.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <h3 className="text-xl font-bold mb-3 text-black">{detail.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{detail.description}</p>
                    {detail.specs && (
                      <ul className="space-y-2">
                        {detail.specs.map((spec, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-accent-lime">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      {project.impact && project.impact.length > 0 && (
        <section className="relative w-full py-16 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Business Impact & Results</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Measurable outcomes and key performance indicators demonstrating project success.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.impact.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-8 bg-gradient-to-br from-accent-lime/20 to-white rounded-xl 
                             border border-accent-lime/40 hover:border-accent-lime hover:shadow-lg
                             transition-all duration-300 text-center"
                  >
                    <div className="text-green-700 text-5xl font-bold mb-3">
                      {item.value || item.split(' ')[0]}
                    </div>
                    <p className="text-gray-700 font-medium">
                      {item.label || item.split(' ').slice(1).join(' ')}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="relative w-full py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12">Challenges & Solutions</h2>
              
              <div className="space-y-8">
                {project.challenges.map((challenge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border-l-4 border-accent-lime pl-6 py-2"
                  >
                    <h3 className="text-xl font-bold mb-2 text-black flex items-center gap-3">
                      <Target className="w-6 h-6 text-accent-lime" />
                      {challenge.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      {project.images && project.images.length > 1 && (
        <section className="relative w-full py-16 bg-gray-50">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Project Screenshots</h2>
              <p className="text-gray-600 mb-12">
                Visual showcase of the application interface and user experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.slice(1).map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer 
                             border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 
                               group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                  flex items-end p-4">
                      <p className="text-white text-sm font-medium">Screenshot {i + 1}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="relative w-full py-16 bg-white">
          <div className="mx-auto max-w-[900px] px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Award className="w-12 h-12 text-accent-lime mx-auto mb-6" />
              <blockquote className="text-2xl font-medium text-gray-800 mb-6 italic">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                {project.testimonial.image && (
                  <img
                    src={project.testimonial.image}
                    alt={project.testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-lime"
                  />
                )}
                <div className="text-left">
                  <p className="font-bold text-black">{project.testimonial.author}</p>
                  <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                  <p className="text-sm text-gray-500">{project.testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative w-full py-24 bg-gradient-to-t from-gray-50 to-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Interested in a similar project?
            </h2>
            <p className="body-text text-gray-600 mb-8 max-w-2xl mx-auto">
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
