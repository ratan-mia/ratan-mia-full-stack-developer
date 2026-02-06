'use client';

import { ExternalLink, Search } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Real project data with actual images
  const PROJECT_DATA = [
    {
      id: 1,
      title: "Chery Bangladesh Mobile App",
      description: "Revolutionary mobile app for Chery Bangladesh featuring vehicle showroom, test drive booking, service management, parts e-commerce, and customer engagement. Built with React Native and Expo.",
      category: "Mobile Apps",
      tech: ["React Native", "Expo", "Supabase", "SSL Commerz", "Push Notifications"],
      image: "/images/projects/cherymobileapp/chery-mobile-app.png",
      links: { live: "/case-studies/chery-bangladesh", github: "/case-studies/chery-bangladesh" },
      liveUrl: null,
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "TurfLet Booking Platform",
      description: "Comprehensive real-time booking platform for sports turfs with 30-day calendar, dynamic pricing, SSL Commerz payment integration, and owner dashboard with analytics.",
      category: "SaaS Platform",
      tech: ["React Native", "Next.js", "Prisma", "SSL Commerz", "Supabase"],
      image: "/images/projects/turflet/owner-dashboard and player.png",
      links: { live: "/case-studies/TurfLet-booking", github: "/case-studies/TurfLet-booking" },
      liveUrl: "https://www.turflet.app",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "Gamify Loyalty Platform",
      description: "Innovative QR-based loyalty platform with gamification (spin wheel, card flip), digital wallet, prize redemption, and fraud prevention for nationwide campaigns.",
      category: "Mobile Apps",
      tech: ["React Native", "Supabase", "QR Scanner", "Gamification", "Fraud Detection"],
      image: "/images/projects/pieqr/home-screen.png",
      links: { live: "/case-studies/gamify", github: "/case-studies/gamify" },
      liveUrl: null,
      featured: true,
      year: "2024"
    },
    {
      id: 4,
      title: "Elf Bangladesh - Asian Petroleum",
      description: "Complete digital presence for Elf Bangladesh using Next.js, Tailwind CSS, Zoho CRM, WhatsApp Business API, Strapi CMS, and Facebook Pixel. Built with performance optimization.",
      category: "Web Development",
      tech: ["Next.js", "Tailwind CSS", "Zoho CRM", "WhatsApp API", "Strapi CMS"],
      image: "/images/projects/elf-apl-mockup.jpg",
      links: { live: "https://asian-petroleum.com/", github: "https://asian-petroleum.com/" },
      liveUrl: "https://asian-petroleum.com/",
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "ELF International",
      description: "High-converting e-commerce platform showcasing premium lubricant products with modern design principles. Advanced product configurator and real-time inventory management.",
      category: "E-commerce",
      tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO", "Product Configurator"],
      image: "/images/projects/elf-international-mockup.png",
      links: { live: "https://elf-bangladesh.vercel.app", github: "https://elf-bangladesh.vercel.app" },
      liveUrl: "https://elf-bangladesh.vercel.app",
      featured: true,
      year: "2024"
    },
    {
      id: 6,
      title: "Japan Auto Parts",
      description: "Modern headless e-commerce platform for automotive parts with advanced search, filtering, and inventory management. 20K+ products with real-time stock updates.",
      category: "E-commerce",
      tech: ["Next.js", "Headless CMS", "E-commerce", "Search Engine", "Inventory"],
      image: "/images/projects/japan-parts-headless.png",
      links: { live: null, github: "#" },
      liveUrl: null,
      featured: true,
      year: "2024"
    },
    {
      id: 7,
      title: "Japan Parts Mockup",
      description: "Comprehensive e-commerce platform with intelligent make/model/year specification system. Advanced inventory management and real-time pricing integration.",
      category: "E-commerce",
      tech: ["React.js", "PHP", "API Integration", "WhatsApp API", "MySQL"],
      image: "/images/projects/japan-parts-mockup.png",
      links: { live: "https://japanparts.com.bd", github: "https://japanparts.com.bd" },
      liveUrl: "https://japanparts.com.bd",
      featured: false,
      year: "2023"
    },
    {
      id: 8,
      title: "Matchlyzer",
      description: "Intelligent sports analytics platform using AI to analyze match data, player performance, and team statistics. Real-time insights and predictive analytics for coaches.",
      category: "AI & Analytics",
      tech: ["React Native", "AI/ML", "Analytics", "Real-time Data", "Supabase"],
      image: "/images/projects/matchlyzer.png",
      links: { live: null, github: "#" },
      liveUrl: null,
      featured: true,
      year: "2024"
    },
    {
      id: 9,
      title: "Chery Bangladesh Website",
      description: "Official automotive website featuring immersive 360° car viewer and achieving 97% PageSpeed optimization. Revolutionary customer experience with virtual showroom.",
      category: "Web Development",
      tech: ["Next.js", "React.js", "CRM Integration", "Facebook Pixel", "360° Viewer"],
      image: "/images/projects/cherybd-mockup.png",
      links: { live: "https://www.cherybd.com", github: "https://www.cherybd.com" },
      liveUrl: "https://www.cherybd.com",
      featured: true,
      year: "2023"
    },
    {
      id: 10,
      title: "MotoJP Shopify Headless",
      description: "Modern headless Shopify implementation for Japanese motorcycle parts. Seamless shopping experience with advanced filtering and search capabilities.",
      category: "E-commerce",
      tech: ["Next.js", "Shopify", "Headless Commerce", "GraphQL", "Tailwind CSS"],
      image: "/images/projects/motojp-shopify-headless.png",
      links: { live: null, github: "#" },
      liveUrl: null,
      featured: false,
      year: "2024"
    }
  ];

  const categories = ['All', 'Mobile Apps', 'Web Development', 'E-commerce', 'SaaS Platform', 'AI & Analytics'];

  const filteredProjects = PROJECT_DATA.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-accent-lime/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-8 mb-6">
            <motion.h2 
              className="text-6xl md:text-7xl lg:text-8xl font-black text-black uppercase tracking-tighter"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WORK
            </motion.h2>
            <motion.div 
              className="flex-1 h-1 bg-gradient-to-r from-accent-lime via-accent-lime/50 to-transparent rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          <motion.p 
            className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We pride ourselves on delivering innovative, impactful, and results-driven projects that exceed expectations.
          </motion.p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Search Bar */}
          <motion.div 
            className="relative flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-accent-lime focus:shadow-lg transition-all font-medium"
            />
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 text-sm ${
                  activeFilter === category
                    ? 'bg-accent-lime text-black shadow-lg'
                    : 'bg-white text-black border-2 border-gray-200 hover:border-accent-lime'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="break-inside-avoid mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-accent-lime relative group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Hover Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/60 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    {/* Top Section - Category & Year */}
                    <div className="flex items-center justify-between transform translate-y-6 group-hover:translate-y-0 transition-all duration-400">
                      <span className="px-3 py-1.5 bg-accent-lime/30 backdrop-blur-md text-accent-lime rounded-lg text-xs font-bold border border-accent-lime/50 shadow-lg">
                        {project.category}
                      </span>
                      <span className="px-3 py-1.5 bg-white/15 backdrop-blur-md text-white rounded-lg text-xs font-bold shadow-lg">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom Section - Details */}
                    <div>
                      {/* Title */}
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-5 transform translate-y-6 group-hover:translate-y-0 transition-all duration-400 delay-75 leading-tight">
                        {project.title}
                      </h3>

                      {/* Action Button & Live Status */}
                      <div className="flex items-center gap-3 transform translate-y-6 group-hover:translate-y-0 transition-all duration-400 delay-100">
                        {project.links.live && (
                          <>
                            <a
                              href={project.links.live}
                              className="flex-1 px-5 py-3 bg-accent-lime text-black rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
                              target={project.links.live.startsWith('http') ? "_blank" : "_self"}
                              rel={project.links.live.startsWith('http') ? "noopener noreferrer" : undefined}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
                              {project.links.live.startsWith('/case-studies') ? 'Case Study' : 'View Live'}
                            </a>
                            <span className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 backdrop-blur-md border border-green-400/50 text-green-400 font-bold text-xs whitespace-nowrap rounded-lg shadow-lg">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                              LIVE
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content - Only Title Visible by Default */}
                <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-black line-clamp-2 leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-black mb-3">No projects found</h3>
            <p className="text-gray-600 text-lg">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectFilters;
