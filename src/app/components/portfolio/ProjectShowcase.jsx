'use client';

import { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "Complete shopping solution",
      description: "A full-featured e-commerce platform built with Next.js and Laravel, featuring payment integration, inventory management, and admin dashboard.",
      image: "/projects/ecommerce-platform.jpg",
      tech: ["Next.js", "Laravel", "MySQL", "Stripe", "Tailwind CSS"],
      metrics: {
        users: "10K+",
        revenue: "$500K+",
        performance: "95% faster"
      },
      links: {
        live: "https://example.com",
        github: "https://github.com/ratanmia",
        demo: "https://demo.example.com"
      },
      category: "E-commerce",
      duration: "4 months",
      client: "TechMart Solutions"
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      subtitle: "Real-time business intelligence",
      description: "A comprehensive analytics dashboard for SaaS businesses with real-time data visualization, user tracking, and performance metrics.",
      image: "/projects/analytics-dashboard.jpg",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js", "Socket.io"],
      metrics: {
        users: "5K+",
        dataPoints: "1M+",
        uptime: "99.9%"
      },
      links: {
        live: "https://analytics.example.com",
        github: "https://github.com/ratanmia",
        demo: "https://demo-analytics.example.com"
      },
      category: "SaaS",
      duration: "3 months",
      client: "DataFlow Analytics"
    },
    {
      id: 3,
      title: "Real Estate Portal",
      subtitle: "Property listing platform",
      description: "A comprehensive real estate platform with advanced search, virtual tours, agent management, and property comparison features.",
      image: "/projects/real-estate.jpg",
      tech: ["Next.js", "Laravel", "MySQL", "MapBox", "AWS S3"],
      metrics: {
        properties: "50K+",
        agents: "1K+",
        searches: "100K+"
      },
      links: {
        live: "https://properties.example.com",
        github: "https://github.com/ratanmia",
        demo: "https://demo-properties.example.com"
      },
      category: "Real Estate",
      duration: "5 months",
      client: "PropertyHub Pro"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            🚀 Featured Work
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
            My Portfolio
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the projects that showcase my expertise in full stack development. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Main Project Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Project Visual */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
              {/* Project mockup placeholder */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">
                    {featuredProjects[activeProject].category === 'E-commerce' ? '🛒' :
                     featuredProjects[activeProject].category === 'SaaS' ? '📊' : '🏠'}
                  </div>
                  <div className="text-lg font-medium">{featuredProjects[activeProject].title}</div>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-center space-x-3 mt-6">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {featuredProjects[activeProject].category}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {featuredProjects[activeProject].duration}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {featuredProjects[activeProject].title}
              </h2>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                {featuredProjects[activeProject].subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {featuredProjects[activeProject].description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-semibold mb-3">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {featuredProjects[activeProject].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Key Results:</h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(featuredProjects[activeProject].metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                      {key === 'dataPoints' ? 'Data Points' : 
                       key === 'uptime' ? 'Uptime' :
                       key === 'properties' ? 'Properties' :
                       key === 'agents' ? 'Agents' :
                       key === 'searches' ? 'Searches' :
                       key === 'revenue' ? 'Revenue' :
                       key === 'performance' ? 'Performance' : key}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={featuredProjects[activeProject].links.live}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </a>
              <a
                href={featuredProjects[activeProject].links.github}
                className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
              <a
                href={featuredProjects[activeProject].links.demo}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </div>

            {/* Client Info */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Client</div>
              <div className="font-semibold">{featuredProjects[activeProject].client}</div>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-slate-600 dark:text-slate-300">Client Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
            <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-slate-600 dark:text-slate-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
