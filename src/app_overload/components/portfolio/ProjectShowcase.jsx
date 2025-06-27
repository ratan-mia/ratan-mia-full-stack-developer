'use client';

import { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import ProjectImage from './ProjectImage';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Real project data from home page
  const PROJECT_DATA = [
    {
      id: 1,
      title: "Elf Bangladesh - Asian Petroleum",
      subtitle: "Modern Digital Platform for Global Lubricant Brand",
      description: "Complete digital presence for Elf Bangladesh using Next.js, Tailwind CSS, Zoho CRM, WhatsApp Business API, Strapi CMS, and Facebook Pixel. Built with performance and conversion optimization in mind.",
      tech: ["Next.js", "Tailwind CSS", "Zoho CRM", "WhatsApp API", "Strapi CMS", "Facebook Pixel"],
      category: "web-development",
      link: "https://asian-petroleum.com/",
      image: "/images/projects/elf-apl-mockup.jpg",
      status: "Live",
      year: "2024",
      client: "Asian Petroleum Limited",
      duration: "3 months",
      results: ["85% Conversion Rate Increase", "Automated Sales Pipeline", "300% User Engagement Boost"],
      metrics: { conversion: "85%", performance: "97%", satisfaction: "98%" },
      featured: true
    },
    {
      id: 2,
      title: "Chery Bangladesh",
      subtitle: "Automotive Excellence Platform",
      description: "Official automotive website featuring an immersive 360° car viewer and achieving 97% PageSpeed optimization. Revolutionary customer experience with virtual showroom capabilities.",
      tech: ["Next.js", "React.js", "CRM Integration", "Facebook Pixel", "360° Viewer"],
      category: "web-development",
      link: "https://www.cherybd.com",
      image: "/images/projects/cherybd-mockup.png",
      status: "Live",
      year: "2023",
      client: "Chery Bangladesh",
      duration: "3 months",
      results: ["97% PageSpeed Score", "200% Sales Increase", "50% Bounce Rate Reduction"],
      metrics: { conversion: "200%", performance: "97%", satisfaction: "96%" },
      featured: true
    },
    {
      id: 3,
      title: "ELF International",
      subtitle: "Rebranding and E-commerce",
      description: "High-converting e-commerce platform showcasing premium lubricant products with modern design principles. Advanced product configurator and real-time inventory management.",
      tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO", "Product Configurator"],
      category: "ecommerce",
      link: "https://elf-bangladesh.vercel.app",
      image: "/images/projects/elf-international-mockup.png",
      status: "Live",
      year: "2024",
      client: "ELF Bangladesh",
      duration: "2 months",
      results: ["150% Conversion Rate", "40% Cart Recovery", "95% PageSpeed Score"],
      metrics: { conversion: "150%", performance: "95%", satisfaction: "94%" },
      featured: true
    },
    {
      id: 4,
      title: "OpenAI Counselling Chatbot",
      subtitle: "AI-Powered Mental Health Platform",
      description: "Revolutionary WordPress plugin integrating ChatGPT and OpenAI APIs with advanced Text-to-Speech functionality. 24/7 mental health support with personalized responses.",
      tech: ["WordPress", "OpenAI API", "Text-to-Speech", "ChatGPT", "PHP"],
      category: "ai-integration",
      link: null,
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop",
      status: "Development",
      year: "2024",
      client: "Healthcare Provider",
      duration: "6 months",
      results: ["24/7 Support Available", "70% Efficiency Improvement", "500+ Active Users"],
      metrics: { conversion: "70%", performance: "92%", satisfaction: "89%" },
      featured: true
    }
  ];

  const currentProject = PROJECT_DATA[activeProject];

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
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Project Image */}
              <ProjectImage 
                project={currentProject} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              
              {/* Overlay for images */}
              {currentProject.image && (
                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors" />
              )}

              {/* Project Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  currentProject.status === 'Live' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-yellow-900'
                }`}>
                  {currentProject.status}
                </span>
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-bold">
                  {currentProject.year}
                </span>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-center space-x-3 mt-6">
              {PROJECT_DATA.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 relative group ${
                    index === activeProject 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-blue-400'
                  }`}
                  title={project.title}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {project.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {currentProject.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {currentProject.duration}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {currentProject.title}
              </h2>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                {currentProject.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-semibold mb-3">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((tech) => (
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
                {currentProject.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {result.split(' ')[0]}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {result.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {currentProject.link ? (
                <a
                  href={currentProject.link}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </a>
              ) : (
                <div className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg font-medium">
                  <Play className="w-4 h-4 mr-2" />
                  In Development
                </div>
              )}
              <button className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors font-medium">
                <Github className="w-4 h-4 mr-2" />
                Case Study
              </button>
            </div>

            {/* Client Info */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Client</div>
              <div className="font-semibold">{currentProject.client}</div>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
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
