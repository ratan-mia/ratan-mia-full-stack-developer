'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, Chrome, ExternalLink, Globe, ShoppingCart, Smartphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- DATA CONSTANTS ---
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Gamify (PieQR)',
    category: 'SaaS Product',
    year: '2024',
    client: 'FMCG & Automotive Brands',
    image: '/images/projects/pieqr/screenshots/home-screen.jpg',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'QR Engine'],
    description: 'Complete engagement engine for FMCG, oil companies, automotive parts with QR-based loyalty, gamification, and fraud detection.',
    liveUrl: '#',
    caseStudyUrl: '/case-studies/gamify',
    icon: Smartphone,
  },
  {
    id: 2,
    title: 'ELF Bangladesh Mobile App',
    category: 'Mobile App',
    year: '2024',
    client: 'ELF Lubricants Bangladesh',
    image: '/images/projects/elf-mobile-store/01-splash-screen.jpg',
    technologies: ['React Native', 'TypeScript', 'Supabase', 'Redux'],
    description: 'Comprehensive e-commerce mobile app for lubricant products with product catalog, dealer locator, cart, and user authentication.',
    liveUrl: '#',
    caseStudyUrl: '/case-studies/elf-bangladesh-app',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'Chery Bangladesh Mobile App',
    category: 'Mobile App',
    year: '2024',
    client: 'Chery Bangladesh',
    image: '/images/projects/cherymobileapp/02-home-screen.jpg',
    technologies: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    description: 'Full-stack automotive platform with test drive booking, service scheduling, e-commerce, and complete vehicle ecosystem.',
    liveUrl: '#',
    caseStudyUrl: '/case-studies/chery-bangladesh-app',
    icon: Smartphone,
  },
  {
    id: 4,
    title: 'TufLet',
    category: 'SaaS Product',
    year: '2024',
    client: 'Sports Venues',
    image: '/images/projects/turflet/www.turflet.app.png',
    technologies: ['React Native', 'Next.js', 'Prisma', 'PostgreSQL'],
    description: 'Complete booking platform for sports grounds with real-time availability, dynamic pricing, and SSL Commerce payment integration.',
    liveUrl: 'https://www.turflet.app',
    caseStudyUrl: '/case-studies/turfnations-booking',
    icon: Smartphone,
  },
  {
    id: 5,
    title: 'Matchlyzer',
    category: 'Chrome Extension',
    year: '2024',
    client: 'Job Matching Tool',
    image: '/images/projects/matchlyzer.png',
    technologies: ['JavaScript', 'Chrome API', 'Machine Learning'],
    description: 'A Google Chrome Extension to Match Job and Profile using AI-powered analysis.',
    liveUrl: 'https://www.matchlyzer.com/',
    icon: Chrome,
  },
  {
    id: 6,
    title: 'Elf BD',
    category: 'Mobile App',
    year: '2023',
    client: 'Elf Lubricant Bangladesh',
    image: '/images/projects/elf-international-mockup.png',
    technologies: ['React Native', 'Redux', 'Firebase'],
    description: 'React native App for Elf Lubricant bangladesh with product catalog and dealer network.',
    liveUrl: '#',
    icon: Smartphone,
  },
  {
    id: 7,
    title: 'Chery Bangladesh',
    category: 'E-commerce',
    year: '2023',
    client: 'Automotive Client',
    image: '/images/projects/cherybd-mockup.png',
    technologies: ['React.js', 'Laravel', '360° View', 'MySQL'],
    description: 'Complete automotive e-commerce platform with 360° car viewing and financing options.',
    liveUrl: 'https://chery-bd.myshopify.com/',
    icon: ShoppingCart,
  },
  {
    id: 8,
    title: 'ELF International',
    category: 'Corporate',
    year: '2022',
    client: 'Energy Sector',
    image: '/images/projects/elf-international-mockup.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Strapi'],
    description: 'Corporate website for international energy company with multi-language support.',
    liveUrl: 'https://elf-bangladesh.vercel.app/',
    icon: Globe,
  },
  {
    id: 9,
    title: 'Japan Auto Parts',
    category: 'E-commerce',
    year: '2021',
    client: 'Marketplace',
    image: '/images/projects/japan-parts-mockup.png',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    description: 'Auto parts marketplace with advanced inventory management and B2B features.',
    liveUrl: 'https://japanparts.com.bd/',
    icon: ShoppingCart,
  },
  {
    id: 10,
    title: 'ELF APL',
    category: 'Web App',
    year: '2021',
    client: 'Internal Tool',
    image: '/images/projects/elf-apl-mockup.jpg',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    description: 'Internal management system for tracking sales performance and inventory.',
    liveUrl: 'https://asian-petroleum.com/',
    icon: Globe,
  },
  {
    id: 11,
    title: 'MotoJP Shopify',
    category: 'E-commerce',
    year: '2023',
    client: 'Motorcycle Parts',
    image: '/images/projects/motojp-shopify-headless.png',
    technologies: ['Shopify', 'React.js', 'Headless Commerce', 'GraphQL'],
    description: 'Modern headless e-commerce solution for motorcycle parts with advanced filtering and search.',
    liveUrl: 'https://motojp.vercel.app/',
    icon: ShoppingCart,
  },
  {
    id: 12,
    title: 'Chery Bangladesh Next.js',
    category: 'E-commerce',
    year: '2024',
    client: 'Automotive Client',
    image: '/images/projects/cherybd-nextjs.png',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    description: 'Enhanced version of Chery Bangladesh platform built with Next.js for better performance.',
    liveUrl: 'https://cherybd.com',
    icon: ShoppingCart,
  },
  {
    id: 13,
    title: 'Shopify Headless for Japan Parts Ltd.',
    category: 'E-commerce',
    year: '2024',
    client: 'Marketplace',
    image: '/images/projects/japan-parts-headless.png',
    technologies: ['React.js', 'Node.js', 'Headless CMS', 'API'],
    description: 'Headless commerce solution for Japan Auto Parts with improved performance and SEO.',
    liveUrl: 'https://japanparts.com.bd/',
    icon: ShoppingCart,
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// --- REUSABLE ANIMATED COMPONENTS ---

const SectionHeader = ({ children, inView }) => (
  <motion.div
    className="text-center mb-20"
    variants={itemVariants}
  >
    {children}
  </motion.div>
);

const ProjectRow = ({ project, index, setHoveredImage, inView }) => (
  <motion.div
    onMouseEnter={() => setHoveredImage(project.image)}
    onMouseLeave={() => setHoveredImage(null)}
    className="group grid grid-cols-12 items-center gap-4 lg:gap-6 py-8 lg:py-12 border-b border-white/5 transition-all duration-500 hover:bg-white/5 rounded-2xl px-4 lg:px-8"
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ 
      duration: 0.8, 
      delay: 0.4 + index * 0.1,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ x: 8, scale: 1.01 }}
  >
    {/* Year and Icon */}
    <div className="col-span-3 lg:col-span-2 flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-accent-lime/10 border-2 border-accent-lime/20 group-hover:bg-accent-lime group-hover:border-accent-lime flex items-center justify-center transition-all duration-300 group-hover:rotate-12">
        <project.icon className="w-8 h-8 text-accent-lime group-hover:text-black transition-colors" />
      </div>
      <div className="hidden lg:block">
        <div className="text-accent-lime font-black text-xl tracking-[-0.02em]">
          {project.year}
        </div>
        <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
          {project.category}
        </div>
      </div>
    </div>

    {/* Project Details */}
    <div className="col-span-8 lg:col-span-6">
      <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-accent-lime transition-colors mb-3 tracking-[-0.02em] leading-tight">
        {project.title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-200 text-base lg:text-lg mb-4 transition-colors leading-[1.6]">
        {project.description}
      </p>
      {/* Project URL */}
      {project.liveUrl && project.liveUrl !== '#' && (
        <div className="flex items-center gap-2 mb-3">
          <ExternalLink className="w-4 h-4 text-accent-lime" />
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-lime text-sm font-medium hover:underline"
          >
            {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </a>
        </div>
      )}
      {/* Case Study Link */}
      {project.caseStudyUrl && (
        <motion.a
          href={project.caseStudyUrl}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-3 bg-accent-lime text-black text-sm font-bold rounded-xl hover:bg-lime-300 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      )}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map(tech => (
          <span 
            key={tech}
            className="px-4 py-2 text-xs lg:text-sm bg-white/5 border border-white/10 group-hover:bg-accent-lime/10 group-hover:border-accent-lime/30 text-gray-400 group-hover:text-accent-lime rounded-lg font-semibold transition-all duration-300 hover:bg-accent-lime hover:text-black cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Client Info and External Link */}
    <div className="col-span-1 lg:col-span-4 flex items-center justify-end gap-4">
      <div className="hidden lg:block text-right">
        <div className="text-white group-hover:text-accent-lime font-bold text-lg transition-colors tracking-[-0.01em]">
          {project.client}
        </div>
        <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Client</div>
      </div>
      {project.liveUrl && project.liveUrl !== '#' && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 group-hover:text-accent-lime opacity-70 group-hover:opacity-100 transition-all duration-300 hover:scale-125"
        >
          <ExternalLink className="w-6 h-6" />
        </a>
      )}
    </div>
  </motion.div>
);

const FilterButton = ({ category, filter, setFilter, index, inView }) => (
  <motion.button
    onClick={() => setFilter(category)}
    className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
      filter === category
        ? 'bg-accent-lime text-black shadow-xl shadow-accent-lime/20'
        : 'bg-white/5 border-2 border-white/10 text-gray-300 hover:bg-accent-lime/10 hover:text-accent-lime hover:border-accent-lime/30'
    }`}
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ 
      duration: 0.6, 
      delay: 0.3 + index * 0.1,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ y: -2, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {category === 'all' ? 'All Projects' : category}
  </motion.button>
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

  const categories = ['all', 'SaaS Product', 'Chrome Extension', 'Mobile App', 'E-commerce', 'Corporate', 'Web App'];

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === filter);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-black relative overflow-hidden" id="projects">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
      </div>
        
      {/* Enhanced Floating Image on Hover */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            className="hidden lg:block fixed top-0 left-0 w-96 h-80 rounded-2xl overflow-hidden shadow-2xl z-50 pointer-events-none bg-black p-3"
            style={{
              x: mousePosition.x + 30,
              y: mousePosition.y - 200,
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: '8deg' }}
            animate={{ opacity: 1, scale: 1, rotate: '2deg' }}
            exit={{ opacity: 0, scale: 0.8, rotate: '-8deg' }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 25,
              duration: 0.4
            }}
          >
            <div className="w-full h-full border-2 border-accent-lime/30 rounded-xl overflow-hidden relative">
              <img 
                src={hoveredImage} 
                alt="Project preview" 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeader inView={isInView}>
            <motion.div
              className="inline-flex items-center gap-5 mb-8"
              variants={itemVariants}
            >
              <div className="w-12 h-1 bg-accent-lime" />
              <span className="text-gray-400 font-semibold text-sm uppercase tracking-[0.15em]">Portfolio</span>
              <div className="w-12 h-1 bg-accent-lime" />
            </motion.div>
            <motion.h2 
              className="text-4xl lg:text-6xl xl:text-[72px] font-black text-white mb-8 leading-[1.1] tracking-[-0.04em]"
              variants={itemVariants}
            >
              Selected Work &
              <br />
              <span className="text-accent-lime">Case Studies</span>
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-[22px] text-gray-400 max-w-3xl mx-auto leading-[1.6]"
              variants={itemVariants}
            >
              Real-world projects delivering tangible results for clients across industries—from mobile apps to enterprise solutions.
            </motion.p>
          </SectionHeader>

          {/* Enhanced Filter Controls */}
          <motion.div
            className="flex flex-wrap gap-4 mb-16 justify-center"
            variants={itemVariants}
          >
            {categories.map((category, index) => (
              <FilterButton
                key={category}
                category={category}
                filter={filter}
                setFilter={setFilter}
                index={index}
                inView={isInView}
              />
            ))}
          </motion.div>

          {/* Projects Counter */}
          <motion.div 
            className="text-center mb-12 flex items-center justify-center gap-3"
            variants={itemVariants}
          >
            <div className="h-px w-12 bg-accent-lime/30" />
            <span className="text-gray-400 font-semibold uppercase tracking-wider text-sm">
              Showing <span className="text-accent-lime font-black">{filteredProjects.length}</span> of <span className="text-accent-lime font-black">{PROJECTS_DATA.length}</span> projects
            </span>
            <div className="h-px w-12 bg-accent-lime/30" />
          </motion.div>

          {/* Projects List */}
          <motion.div 
            className="border-t border-white/10"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectRow 
                  key={`${filter}-${project.id}`}
                  project={project}
                  index={index}
                  setHoveredImage={setHoveredImage}
                  inView={isInView}
                />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Enhanced CTA */}
          <motion.div 
            className="text-center mt-24 pt-16 border-t border-white/10"
            variants={itemVariants}
          >
            <div className="space-y-8">
              <h3 className="text-3xl lg:text-4xl font-black text-white tracking-[-0.02em]">
                Let's Build Something
                <br />
                <span className="text-accent-lime">Amazing Together</span>
              </h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-[1.6]">
                Have a project in mind? Let's discuss your ideas and create a solution that exceeds expectations.
              </p>
              <motion.a 
                href="#contact" 
                className="bg-accent-lime text-black font-black px-12 py-5 rounded-2xl hover:bg-lime-300 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl shadow-accent-lime/20 uppercase tracking-wider"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;