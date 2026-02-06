'use client';

import { ExternalLink, Github, Search } from 'lucide-react';
import { useState } from 'react';
import ProjectImage from './ProjectImage';

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
      image: "/images/projects/cherybd-mockup.png",
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
      image: "/images/projects/turflet/www.turflet.app.png",
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
      image: "/images/projects/pieqr/screenshots/home-screen.jpg",
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
      image: "/images/projects/cherybd-nextjs.png",
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
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
            📁 ALL PROJECTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Portfolio</h2>
          <p className="body-text text-gray-600 max-w-2xl mx-auto">
            Explore my complete portfolio of web applications, from e-commerce platforms to AI solutions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:outline-none focus:border-accent-lime transition-all font-medium"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-black text-accent-lime shadow-lg scale-105'
                    : 'bg-white text-black border-2 border-gray-200 hover:border-accent-lime hover:bg-accent-lime/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-accent-lime"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <div className="relative w-full h-full">
                  <ProjectImage 
                    project={project} 
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-4 py-2 bg-accent-lime text-black rounded-full text-xs font-extrabold z-20 shadow-lg">
                    ⭐ FEATURED
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  {project.links.live ? (
                    <span className="px-3 py-2 bg-accent-lime text-black rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
                      <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                      LIVE
                    </span>
                  ) : (
                    <span className="px-3 py-2 bg-orange-400 text-black rounded-full text-xs font-extrabold shadow-lg">
                      IN DEV
                    </span>
                  )}
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    {project.year}
                  </span>
                </div>
                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-10">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-1.5 bg-accent-lime/20 text-black rounded-full text-xs font-extrabold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold mb-3 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Live URL */}
                {project.liveUrl && (
                  <div className="mb-5 pb-5 border-b-2 border-gray-100">
                    <div className="text-xs text-gray-500 mb-1 font-bold">Live URL</div>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black hover:text-accent-lime font-semibold break-all transition-colors line-clamp-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.liveUrl}
                    </a>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      className="flex-1 text-center px-4 py-3 bg-black text-accent-lime rounded-xl hover:shadow-lg transition-all font-bold"
                      target={project.links.live.startsWith('http') ? "_blank" : "_self"}
                      rel={project.links.live.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {project.links.live.startsWith('/case-studies') ? 'View Case' : 'View Live'}
                    </a>
                  ) : (
                    <div className="flex-1 text-center px-4 py-3 bg-gray-400 text-white rounded-xl font-bold">
                      In Dev
                    </div>
                  )}
                  <a
                    href={project.links.github}
                    className="flex-1 text-center px-4 py-3 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-all font-bold"
                    target={project.links.github.startsWith('http') ? "_blank" : "_self"}
                    rel={project.links.github.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-black text-accent-lime rounded-xl hover:shadow-xl transition-all duration-300 font-extrabold hover:scale-105">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectFilters;
