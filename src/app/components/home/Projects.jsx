'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Code2,
  ExternalLink,
  Github,
  Globe,
  Star,
  Terminal,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useRef, useState } from 'react';

// Updated Project Data with new design system
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
    gradient: "from-emerald-500 to-teal-500",
    color: "text-emerald-400",
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
    gradient: "from-blue-500 to-indigo-500",
    color: "text-blue-400",
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
    gradient: "from-pink-500 to-rose-500",
    color: "text-pink-400",
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
    gradient: "from-purple-500 to-indigo-500",
    color: "text-purple-400",
    results: {
      conversion: "70%",
      performance: "92%",
      satisfaction: "89%"
    }
  }
];

const PROJECT_STATS = [
  { number: '50+', label: 'Projects', icon: Code2, color: 'text-cyan-400' },
  { number: '97%', label: 'Performance', icon: Zap, color: 'text-blue-400' },
  { number: '200%', label: 'ROI Increase', icon: TrendingUp, color: 'text-purple-400' },
  { number: '98%', label: 'Satisfaction', icon: Star, color: 'text-orange-400' }
];

// Updated Project Card Component
const ProjectCard = ({ project, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="project-card group h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.link ? <Globe className="w-10 h-10" /> : <Code2 className="w-10 h-10" />}
          </motion.div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            project.status === 'Live' 
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
              : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
          }`}>
            <motion.div
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === 'Live' ? 'bg-emerald-400' : 'bg-orange-400'
              }`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {project.status}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-slate-800/80 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-slate-700">
            {project.year}
          </span>
        </div>

        {/* Hover Overlay */}
        {isHovered && project.link && (
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={handleClick}
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Live Site</span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Project Details */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 uppercase tracking-wide">
            {project.title}
          </h3>
          <p className={`${project.color} font-semibold text-sm mb-3 uppercase tracking-wider`}>{project.subtitle}</p>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">{project.description}</p>
          
          {/* Client Info */}
          <div className="text-xs text-slate-400 mb-4 font-medium">
            Client: <span className="text-slate-300">{project.client}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span 
                key={i}
                className="tech-badge"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results Metrics */}
        <div className="mb-6 p-4 bg-slate-800 border border-slate-700 rounded-xl flex-1">
          <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Project Results</h4>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className={`text-sm font-black ${project.color} uppercase tracking-tight`}>{project.results.conversion}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Growth</div>
            </div>
            <div>
              <div className="text-sm font-black text-emerald-400 uppercase tracking-tight">{project.results.performance}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Score</div>
            </div>
            <div>
              <div className="text-sm font-black text-purple-400 uppercase tracking-tight">{project.results.satisfaction}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Rating</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          {project.link ? (
            <motion.button
              onClick={handleClick}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              View Live
            </motion.button>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl text-sm uppercase tracking-wide">
              <Code2 className="w-4 h-4" />
              Custom Project
            </div>
          )}
          <span className="text-xs text-slate-400 uppercase tracking-wider hover:text-cyan-400 transition-colors cursor-pointer">Case Study →</span>
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
      className="py-16 lg:py-24 px-6 lg:px-8 xl:px-16 2xl:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
      aria-label="Portfolio projects section"
    >
      {/* Developer Brand Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Code Brackets Decoration */}
      <motion.div
        className="absolute top-20 right-10 text-6xl font-mono text-cyan-500/20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        &lt;Projects/&gt;
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Badge */}
          <motion.div
            className="section-badge mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            Portfolio Showcase
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Innovative solutions that drive business growth through cutting-edge technology and exceptional user experiences.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-20 mx-auto mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Project Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {PROJECT_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{stat.number}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
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
            className="btn-primary group mb-4"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">
            See 50+ more projects in my complete portfolio
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          ref={ctaRef}
          className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
          
          {/* Animated Background Effects */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <motion.div 
              className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
              animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>
          
          <div className="relative z-10 text-center">
            <Terminal className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            
            <motion.h3 
              className="text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              Let's create something amazing together. From concept to launch, I'll bring your vision to life.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Terminal className="w-5 h-5" />
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#services"
                className="btn-secondary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Developer Brand Stripe Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
    </section>
  );
};

export default Projects;
