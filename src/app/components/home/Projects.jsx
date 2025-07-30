'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- DATA CONSTANTS ---
// Added year and client to match the new design
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Chery Bangladesh',
    category: 'E-commerce',
    year: '2023',
    client: 'Automotive Client',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    technologies: ['React.js', 'Laravel', '360° View'],
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'ELF International',
    category: 'Corporate',
    year: '2022',
    client: 'Energy Sector',
    image: 'https://images.unsplash.com/photo-1554672408-730436b60dde?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Japan Auto Parts',
    category: 'E-commerce',
    year: '2021',
    client: 'Marketplace',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'ELF APL',
    category: 'Web App',
    year: '2021',
    client: 'Internal Tool',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    category: 'Personal',
    year: '2024',
    client: 'Self-Project',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
  },
];

// --- REUSABLE ANIMATED COMPONENTS ---

const SectionHeader = ({ children, inView }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const ProjectRow = ({ project, setHoveredImage }) => (
  <motion.a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => setHoveredImage(project.image)}
    onMouseLeave={() => setHoveredImage(null)}
    className="group grid grid-cols-12 items-center gap-4 py-8 border-b border-gray-800 transition-colors hover:bg-gray-800/50"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="col-span-2 text-gray-400 group-hover:text-white transition-colors text-sm">{project.year}</div>
    <div className="col-span-10 md:col-span-5">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
        {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
      </div>
    </div>
    <div className="hidden md:block col-span-4 text-gray-500 group-hover:text-white transition-colors text-right">{project.client}</div>
    <div className="col-span-1 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="w-6 h-6" />
    </div>
  </motion.a>
);

// --- MAIN PROJECTS COMPONENT ---

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [filter, setFilter] = useState('all');
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = ['all', 'E-commerce', 'Corporate', 'Web App', 'Personal'];

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === filter);

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-black relative" id="projects">
        
      {/* Floating Image on Hover */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            className="hidden lg:block fixed top-0 left-0 w-80 h-96 rounded-lg overflow-hidden shadow-2xl z-50 pointer-events-none"
            style={{
              x: mousePosition.x + 20,
              y: mousePosition.y - 180, // Adjust vertical position
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: '5deg' }}
            animate={{ opacity: 1, scale: 1, rotate: '0deg' }}
            exit={{ opacity: 0, scale: 0.8, rotate: '-5deg' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img src={hoveredImage} alt="Project preview" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        <SectionHeader inView={isInView}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Selected <span className="text-accent-lime">Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A collection of my work, from corporate websites to complex web applications.
            </p>
        </SectionHeader>

        {/* Filter Controls */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-accent-lime text-black'
                  : 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects List */}
        <div>
          {filteredProjects.map((project) => (
            <ProjectRow 
              key={project.id} 
              project={project}
              setHoveredImage={setHoveredImage} 
            />
          ))}
        </div>
        
        {/* CTA at the bottom */}
        <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <a href="#contact" className="bg-accent-lime text-black font-semibold px-8 py-4 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-400/30 transition-all duration-300 inline-flex items-center justify-center gap-2">
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
