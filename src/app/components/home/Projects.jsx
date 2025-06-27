'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Code2,
  ExternalLink,
  Globe,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useRef, useState } from 'react';

// Simplified Project Data - Only Featured Projects for Homepage
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Elf Bangladesh",
    subtitle: "Modern Digital Platform for Global Lubricant Brand",
    description: "Complete e-commerce platform with 85% conversion increase using Next.js and modern technologies.",
    tech: ["Next.js", "Tailwind CSS", "Zoho CRM", "Strapi CMS"],
    link: "https://asian-petroleum.com/",
    year: "2024",
    client: "Asian Petroleum Limited",
    status: "Live",
    gradient: "from-emerald-600 to-teal-700",
    results: {
      conversion: "85%",
      performance: "97%",
      satisfaction: "98%"
    }
  },
  {
    id: 2,
    title: "Chery Bangladesh",
    subtitle: "Automotive Excellence Platform",
    description: "Official automotive website with 360° car viewer achieving 97% PageSpeed optimization.",
    tech: ["Next.js", "React.js", "360° Viewer", "CRM Integration"],
    link: "https://www.cherybd.com",
    year: "2023",
    client: "Chery Bangladesh",
    status: "Live",
    gradient: "from-blue-600 to-indigo-700",
    results: {
      conversion: "200%",
      performance: "97%",
      satisfaction: "96%"
    }
  },
  {
    id: 3,
    title: "ELF International",
    subtitle: "Premium E-commerce Platform",
    description: "High-converting e-commerce platform with advanced product configurator and inventory management.",
    tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO"],
    link: "https://elf-bangladesh.vercel.app",
    year: "2024",
    client: "ELF Bangladesh",
    status: "Live",
    gradient: "from-pink-600 to-rose-700",
    results: {
      conversion: "150%",
      performance: "95%",
      satisfaction: "94%"
    }
  },
  {
    id: 4,
    title: "OpenAI Counselling Bot",
    subtitle: "AI-Powered Mental Health Platform",
    description: "Revolutionary AI chatbot using OpenAI APIs with Text-to-Speech for 24/7 mental health support.",
    tech: ["WordPress", "OpenAI API", "Text-to-Speech", "PHP"],
    link: null,
    year: "2024",
    client: "Healthcare Provider",
    status: "Development",
    gradient: "from-purple-600 to-indigo-700",
    results: {
      conversion: "70%",
      performance: "92%",
      satisfaction: "89%"
    }
  }
];

const PROJECT_STATS = [
  { number: '50+', label: 'Projects', icon: Code2 },
  { number: '97%', label: 'Performance', icon: Zap },
  { number: '200%', label: 'ROI Increase', icon: TrendingUp },
  { number: '98%', label: 'Satisfaction', icon: Star }
];

// Project Card Component
const ProjectCard = ({ project, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.link ? <Globe className="w-10 h-10" /> : <Code2 className="w-10 h-10" />}
          </motion.div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Live' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
          }`}>
            <motion.div
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'
              }`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {project.status}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-bold">
            {project.year}
          </span>
        </div>

        {/* Hover Overlay */}
        {isHovered && project.link && (
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={handleClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Site
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-blue-600 font-semibold text-sm mb-3">{project.subtitle}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{project.description}</p>
          
          {/* Client Info */}
          <div className="text-xs text-gray-500 mb-4">
            Client: <span className="font-medium text-gray-700">{project.client}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span 
                key={i}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results Metrics */}
        <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-sm font-bold text-blue-600">{project.results.conversion}</div>
              <div className="text-xs text-gray-600">Growth</div>
            </div>
            <div>
              <div className="text-sm font-bold text-green-600">{project.results.performance}</div>
              <div className="text-xs text-gray-600">Score</div>
            </div>
            <div>
              <div className="text-sm font-bold text-purple-600">{project.results.satisfaction}</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {project.link ? (
            <motion.button
              onClick={handleClick}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              View Live
            </motion.button>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-sm">
              <Code2 className="w-4 h-4" />
              Custom Project
            </div>
          )}
          <span className="text-xs text-gray-500">Case Study →</span>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Component
const Projects = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const projectsInView = useInView(projectsRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      aria-label="Portfolio projects section"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-white/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Innovative solutions that drive business growth through cutting-edge technology and exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Project Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {PROJECT_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/80 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div 
          ref={projectsRef}
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={projectsInView}
            />
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="text-sm text-gray-600 mt-3">
            See 50+ more projects in my complete portfolio
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          ref={ctaRef}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"
                animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's create something amazing together. From concept to launch, I'll bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
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