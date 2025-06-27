'use client';

import { useState } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';

const ProjectFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'E-commerce', 'SaaS', 'Real Estate', 'Portfolio', 'Blog', 'API'];

  const projects = [
    {
      id: 1,
      title: "TechMart E-commerce Platform",
      description: "Complete e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      category: "E-commerce",
      tech: ["Next.js", "Laravel", "MySQL", "Stripe"],
      image: "/projects/techmart.jpg",
      links: { live: "#", github: "#" },
      featured: true
    },
    {
      id: 2,
      title: "DataFlow Analytics SaaS",
      description: "Real-time analytics platform for businesses with customizable dashboards and reporting.",
      category: "SaaS",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      image: "/projects/dataflow.jpg",
      links: { live: "#", github: "#" },
      featured: true
    },
    {
      id: 3,
      title: "PropertyHub Real Estate Portal",
      description: "Comprehensive property listing platform with virtual tours and agent management.",
      category: "Real Estate",
      tech: ["Next.js", "Laravel", "MySQL", "MapBox"],
      image: "/projects/propertyhub.jpg",
      links: { live: "#", github: "#" },
      featured: true
    },
    {
      id: 4,
      title: "Creative Agency Portfolio",
      description: "Modern portfolio website for a creative agency with stunning animations and interactions.",
      category: "Portfolio",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image: "/projects/creative-agency.jpg",
      links: { live: "#", github: "#" },
      featured: false
    },
    {
      id: 5,
      title: "TechBlog CMS",
      description: "Custom content management system for tech blogs with SEO optimization and social sharing.",
      category: "Blog",
      tech: ["Laravel", "React", "MySQL", "Redis"],
      image: "/projects/techblog.jpg",
      links: { live: "#", github: "#" },
      featured: false
    },
    {
      id: 6,
      title: "Restaurant API & Mobile App",
      description: "RESTful API and mobile app for restaurant ordering system with real-time updates.",
      category: "API",
      tech: ["Laravel", "React Native", "PostgreSQL", "Socket.io"],
      image: "/projects/restaurant-api.jpg",
      links: { live: "#", github: "#" },
      featured: false
    },
    {
      id: 7,
      title: "FashionStore E-commerce",
      description: "Fashion e-commerce platform with AR try-on feature and social commerce integration.",
      category: "E-commerce",
      tech: ["Next.js", "Laravel", "MySQL", "AR.js"],
      image: "/projects/fashionstore.jpg",
      links: { live: "#", github: "#" },
      featured: false
    },
    {
      id: 8,
      title: "ProjectManager SaaS",
      description: "Team collaboration and project management platform with time tracking and reporting.",
      category: "SaaS",
      tech: ["React", "Express.js", "MongoDB", "Socket.io"],
      image: "/projects/projectmanager.jpg",
      links: { live: "#", github: "#" },
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => {
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
            Explore my complete portfolio of web applications, from e-commerce platforms to SaaS solutions.
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
                      {project.category === 'E-commerce' ? '🛒' :
                       project.category === 'SaaS' ? '📊' :
                       project.category === 'Real Estate' ? '🏠' :
                       project.category === 'Portfolio' ? '🎨' :
                       project.category === 'Blog' ? '📝' : '🔗'}
                    </div>
                    <div className="text-sm opacity-90">{project.category}</div>
                  </div>
                </div>
                
                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <a
                    href={project.links.live}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
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

                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
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
                  <a
                    href={project.links.live}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    href={project.links.github}
                    className="flex-1 text-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
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
