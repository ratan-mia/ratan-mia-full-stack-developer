'use client';

import { ExternalLink, Github, Play } from 'lucide-react';
import { useState } from 'react';
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
    <section className="relative py-20 px-4 md:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
            🚀 FEATURED WORK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="body-text text-gray-600 max-w-3xl mx-auto">
            Discover the projects that showcase my expertise in full stack development. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Main Project Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Project Visual */}
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-3xl shadow-2xl overflow-hidden relative border border-gray-200">
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
                <span className={`px-4 py-2 rounded-xl text-sm font-bold shadow-lg ${
                  currentProject.status === 'Live' 
                    ? 'bg-accent-lime text-black' 
                    : 'bg-accent-orange text-white'
                }`}>
                  {currentProject.status}
                </span>
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
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
                      ? 'bg-accent-lime scale-125' 
                      : 'bg-gray-300 hover:bg-accent-lime/50'
                  }`}
                  title={project.title}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
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
                <span className="px-4 py-2 bg-accent-lime/20 text-black rounded-lg text-sm font-bold">
                  {currentProject.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                <span className="text-gray-600 text-sm font-medium">
                  {currentProject.duration}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {currentProject.title}
              </h2>
              <p className="text-lg text-black/70 font-semibold mb-4">
                {currentProject.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-bold mb-3 text-lg">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-accent-lime rounded-3xl p-8">
              <h3 className="font-bold mb-6 text-xl">Key Results:</h3>
              <div className="grid grid-cols-3 gap-4">
                {currentProject.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-extrabold mb-1">
                      {result.split(' ')[0]}
                    </div>
                    <div className="text-sm font-semibold text-black/70">
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
                  className="inline-flex items-center px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live
                </a>
              ) : (
                <div className="inline-flex items-center px-8 py-4 bg-gray-400 text-white rounded-xl font-bold">
                  <Play className="w-5 h-5 mr-2" />
                  In Development
                </div>
              )}
              <button className="inline-flex items-center px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all">
                <Github className="w-5 h-5 mr-2" />
                Case Study
              </button>
            </div>

            {/* Client Info */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="text-sm text-gray-600 mb-1 font-semibold">Client</div>
              <div className="font-bold text-lg">{currentProject.client}</div>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-accent-lime rounded-2xl">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">15+</div>
            <div className="text-black/70 font-semibold">Projects Completed</div>
          </div>
          <div className="p-6 bg-accent-lime rounded-2xl">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">100%</div>
            <div className="text-black/70 font-semibold">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-accent-lime rounded-2xl">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">5+</div>
            <div className="text-black/70 font-semibold">Years Experience</div>
          </div>
          <div className="p-6 bg-accent-lime rounded-2xl">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">24/7</div>
            <div className="text-black/70 font-semibold">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
