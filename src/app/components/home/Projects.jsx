'use client';

import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Play, ArrowRight, Filter, Grid, List, Eye, Code2, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [filter, setFilter] = useState('all');
  const [layout, setLayout] = useState('masonry');

  const projects = [
    {
      id: 1,
      title: 'Chery Bangladesh',
      category: 'E-commerce',
      type: 'featured',
      description: 'Automotive e-commerce platform with 360° car views.',
      image: '/images/projects/cherybd-mockup.png',
      technologies: ['React.js', 'Laravel', 'MySQL', '360° Integration'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { performance: '97%', sales: '+300%' },
      gradient: 'from-accent/30 to-accent-secondary/20',
      size: 'large'
    },
    {
      id: 2,
      title: 'ELF International',
      category: 'Corporate',
      type: 'featured',
      description: 'Professional business website with modern design.',
      image: '/images/projects/elf-international-mockup.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { uptime: '99.9%', speed: '2.1s' },
      gradient: 'from-accent-secondary/30 to-accent/20',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Japan Auto Parts',
      category: 'E-commerce',
      type: 'standard',
      description: 'Auto parts marketplace with inventory management.',
      image: '/images/projects/japan-parts-mockup.png',
      technologies: ['WordPress', 'WooCommerce', 'PHP'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { orders: '+250%', users: '5K+' },
      gradient: 'from-accent/20 to-accent-secondary/15',
      size: 'medium'
    },
    {
      id: 4,
      title: 'ELF APL',
      category: 'Web App',
      type: 'standard',
      description: 'Corporate application management system.',
      image: '/images/projects/elf-apl-mockup.jpg',
      technologies: ['Laravel', 'Vue.js', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { efficiency: '+180%', users: '2K+' },
      gradient: 'from-accent-secondary/25 to-accent/15',
      size: 'small'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Personal',
      type: 'standard',
      description: 'Modern developer portfolio with animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { visitors: '10K+', bounce: '15%' },
      gradient: 'from-accent/25 to-accent-secondary/20',
      size: 'small'
    },
    {
      id: 6,
      title: 'Task Manager Pro',
      category: 'Web App',
      type: 'standard',
      description: 'Team collaboration and project management.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { teams: '100+', tasks: '50K+' },
      gradient: 'from-accent-secondary/20 to-accent/25',
      size: 'medium'
    }
  ];

  const categories = ['all', 'E-commerce', 'Corporate', 'Web App', 'Personal'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = filteredProjects.filter(p => p.type === 'featured');
  const standardProjects = filteredProjects.filter(p => p.type === 'standard');

  const stats = [
    { icon: Sparkles, number: '150+', label: 'Projects', color: 'text-accent' },
    { icon: Eye, number: '1M+', label: 'Total Views', color: 'text-accent-secondary' },
    { icon: Code2, number: '25+', label: 'Countries', color: 'text-accent' },
    { icon: ArrowRight, number: '98%', label: 'Success Rate', color: 'text-accent-secondary' }
  ];

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden" id="projects">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        {/* Large Gradient Orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-accent-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-accent-secondary/15 to-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Code Pattern Background */}
        <div className="absolute top-1/4 left-1/4 grid grid-cols-8 gap-2 opacity-20 transform rotate-12">
          {Array.from({ length: 32 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-accent rounded-sm"
              animate={{ 
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-32 right-1/3 w-16 h-16 border-2 border-accent/30 rounded-design"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-12 h-12 bg-accent-secondary/20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity
          }}
        />
      </div>

      <div className="container-design relative z-10">
        
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-design mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="caption-text font-medium">Featured Work</span>
          </motion.div>

          <motion.h2
            className="section-header text-primary-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Selected <span className="text-accent">Projects</span>
          </motion.h2>
          
          <motion.div
            className="accent-line mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="body-text text-neutral max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transforming ideas into digital experiences that drive results
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 ${stat.color} bg-card rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="caption-text text-neutral">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-design text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-accent text-black'
                    : 'bg-card border border-design text-neutral hover:text-accent hover:border-accent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center gap-2 bg-card rounded-design p-1">
            <button
              onClick={() => setLayout('masonry')}
              className={`p-2 rounded-design transition-colors ${
                layout === 'masonry' ? 'bg-accent text-black' : 'text-neutral hover:text-accent'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout('grid')}
              className={`p-2 rounded-design transition-colors ${
                layout === 'grid' ? 'bg-accent text-black' : 'text-neutral hover:text-accent'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Featured Projects Showcase */}
        {featuredProjects.length > 0 && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-design-lg ${
                    index === 0 ? 'lg:row-span-2' : ''
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ delay: 1.3 + index * 0.2 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`relative ${index === 0 ? 'h-[600px]' : 'h-80'} overflow-hidden`}>
                    {/* Project Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                    
                    {/* Content Overlay */}
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end p-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-design text-accent text-sm font-medium mb-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          {project.category}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                        <p className="text-neutral-light mb-4 leading-relaxed">{project.description}</p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-black/30 rounded-design text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex gap-4 mb-6">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-accent font-bold text-lg">{value}</div>
                              <div className="text-xs capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <motion.a
                            href={project.liveUrl}
                            className="flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-design hover:bg-accent/90 transition-colors font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-design hover:bg-white/30 transition-colors font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Play Button Indicator */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-0 transition-opacity"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-black ml-1" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Grid - Masonry or Regular */}
        {standardProjects.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
                More Projects
              </h3>
              <div className="accent-line"></div>
            </div>

            <div className={`grid gap-8 ${
              layout === 'masonry' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {standardProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-design-lg ${
                    layout === 'masonry' && project.size === 'large' ? 'md:col-span-2' :
                    layout === 'masonry' && project.size === 'small' ? 'lg:col-span-1' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className={`relative ${
                    project.size === 'large' ? 'h-80' :
                    project.size === 'small' ? 'h-48' : 'h-64'
                  } overflow-hidden`}>
                    {/* Project Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      {/* Category */}
                      <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-2 py-1 rounded-design text-accent text-xs font-medium mb-2">
                        {project.category}
                      </div>

                      <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                      <p className="text-sm text-neutral-light mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.description}
                      </p>
                      
                      {/* Tech Pills */}
                      <div className="flex gap-2 flex-wrap mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-design">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex gap-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-accent font-bold">{value}</span>
                            <span className="text-neutral-light ml-1">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        href={project.liveUrl}
                        className="w-10 h-10 bg-accent/90 rounded-design flex items-center justify-center hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4 text-black" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-design flex items-center justify-center hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* View All Projects CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="relative bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 p-12 rounded-design-lg border border-accent/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-accent/20 rounded-design rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-secondary/10 rounded-full"></div>
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
                Like What You See?
              </h3>
              <p className="body-text text-neutral mb-8 max-w-2xl mx-auto">
                Explore my complete portfolio with 150+ projects across various industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/portfolio"
                  className="btn-primary group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View All Projects</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="btn-secondary group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Project</span>
                  <Sparkles className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
