'use client';

import { useState } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';

const ProjectFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Real project data from home page
  const PROJECT_DATA = [
    {
      id: 1,
      title: "Elf Bangladesh - Asian Petroleum",
      description: "Complete digital presence for Elf Bangladesh using Next.js, Tailwind CSS, Zoho CRM, WhatsApp Business API, Strapi CMS, and Facebook Pixel. Built with performance and conversion optimization in mind.",
      category: "Web Development",
      tech: ["Next.js", "Tailwind CSS", "Zoho CRM", "WhatsApp API", "Strapi CMS", "Facebook Pixel"],
      image: "/images/projects/elf-apl-mockup.jpg",
      links: { live: "https://asian-petroleum.com/", github: "#" },
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Chery Bangladesh",
      description: "Official automotive website featuring an immersive 360° car viewer and achieving 97% PageSpeed optimization. Revolutionary customer experience with virtual showroom capabilities.",
      category: "Web Development",
      tech: ["Next.js", "React.js", "CRM Integration", "Facebook Pixel", "360° Viewer"],
      image: "/images/projects/cherybd-mockup.png",
      links: { live: "https://www.cherybd.com", github: "#" },
      featured: true,
      year: "2023"
    },
    {
      id: 3,
      title: "Car Parts E-commerce",
      description: "Comprehensive e-commerce platform with intelligent make/model/year specification system. Advanced inventory management and real-time pricing integration.",
      category: "E-commerce",
      tech: ["React.js", "PHP", "API Integration", "WhatsApp API", "MySQL"],
      image: "/images/projects/japan-parts-mockup.png",
      links: { live: "https://japanparts.com.bd", github: "#" },
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "ELF International",
      description: "High-converting e-commerce platform showcasing premium lubricant products with modern design principles. Advanced product configurator and real-time inventory management.",
      category: "E-commerce",
      tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO", "Product Configurator"],
      image: "/images/projects/elf-international-mockup.png",
      links: { live: "https://elf-bangladesh.vercel.app", github: "#" },
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "OpenAI Counselling Chatbot",
      description: "Revolutionary WordPress plugin integrating ChatGPT and OpenAI APIs with advanced Text-to-Speech functionality. 24/7 mental health support with personalized responses.",
      category: "AI Integration",
      tech: ["WordPress", "OpenAI API", "Text-to-Speech", "ChatGPT", "PHP"],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop",
      links: { live: null, github: "#" },
      featured: true,
      year: "2024"
    },
    {
      id: 6,
      title: "CWL Detailing Web",
      description: "Modern service business website leveraging React.js and Tailwind CSS with intuitive UI/UX. Integrated booking system and customer management portal.",
      category: "Web Development",
      tech: ["React.js", "Tailwind CSS", "Responsive Design", "Booking System"],
      image: null,
      links: { live: "https://cwl-detailing-web.vercel.app", github: "#" },
      featured: false,
      year: "2023"
    }
  ];

  const categories = ['All', 'Web Development', 'E-commerce', 'AI Integration'];

  const filteredProjects = PROJECT_DATA.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore my complete portfolio of web applications, from e-commerce platforms to AI solutions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-700'
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
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-200 dark:border-slate-700"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">
                      {project.category === 'Web Development' ? '🌐' :
                       project.category === 'E-commerce' ? '🛒' :
                       project.category === 'AI Integration' ? '🤖' : '🚀'}
                    </div>
                    <div className="text-sm opacity-90">{project.category}</div>
                  </div>
                </div>
                
                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-yellow-500 text-sm">⭐ Featured</span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                  ) : (
                    <div className="flex-1 text-center px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium">
                      In Development
                    </div>
                  )}
                  <a
                    href={project.links.github}
                    className="flex-1 text-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Case Study
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
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectFilters;
