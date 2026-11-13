
'use client';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Chery Bangladesh",
      subtitle: "Automotive Excellence Platform",
      description: "Official automotive website featuring an immersive 360° car viewer and achieving 97% speed optimization. Built with Next.js and React.js for optimal performance, SEO excellence, and superior user experience.",
      fullDescription: "A comprehensive automotive platform that revolutionized the online car shopping experience in Bangladesh. Features include interactive 360° car visualization, advanced filtering systems, dealer locator, and integrated CRM for lead management.",
      tech: ["Next.js", "React.js", "CRM Integration", "Facebook Pixel", "360° Viewer", "Performance Optimization"],
      category: "web-development",
      link: "cherybd.vercel.app",
      status: "Live",
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      accentColor: "blue",
      year: "2023",
      client: "Chery Bangladesh",
      duration: "3 months",
      results: ["97% Speed Improvement", "200% Sales Increase", "50% Bounce Rate Reduction"],
      image: "/api/placeholder/600/400",
      tags: ["Featured", "E-commerce", "Automotive"]
    },
    {
      id: 2,
      title: "Car Parts E-commerce",
      subtitle: "Advanced Auto Parts Platform",
      description: "Comprehensive e-commerce platform with intelligent make/model/year specification system. Seamlessly integrated with WhatsApp Business API, Facebook Pixel, and advanced CRM for enhanced customer engagement.",
      fullDescription: "A sophisticated auto parts marketplace featuring advanced vehicle compatibility matching, real-time inventory management, multi-vendor support, and integrated communication channels for seamless customer service.",
      tech: ["React.js", "PHP", "API Integration", "WhatsApp API", "MySQL", "Payment Gateway"],
      category: "ecommerce",
      link: "japanparts.com",
      status: "Live",
      gradient: "from-green-600 via-green-700 to-teal-800",
      accentColor: "green",
      year: "2023",
      client: "Japan Parts Ltd",
      duration: "4 months",
      results: ["300% Order Increase", "85% Customer Satisfaction", "60% Support Cost Reduction"],
      image: "/api/placeholder/600/400",
      tags: ["E-commerce", "API Integration", "B2B"]
    },
    {
      id: 3,
      title: "ELF Bangladesh",
      subtitle: "Premium Lubricants E-commerce",
      description: "High-converting e-commerce platform showcasing premium lubricant products. Built with React.js and Tailwind CSS, demonstrating scalable online retail solutions with modern design principles.",
      fullDescription: "A premium e-commerce experience for ELF lubricants featuring product configurators, dealer networks, technical specifications database, and comprehensive customer support systems.",
      tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO", "Product Configurator", "CMS"],
      category: "ecommerce",
      link: "elf-bangladesh.vercel.app",
      status: "Live",
      gradient: "from-pink-600 via-rose-700 to-red-800",
      accentColor: "pink",
      year: "2024",
      client: "ELF Bangladesh",
      duration: "2 months",
      results: ["150% Conversion Rate", "40% Cart Abandonment Reduction", "95% Page Speed Score"],
      image: "/api/placeholder/600/400",
      tags: ["Featured", "E-commerce", "Premium"]
    },
    {
      id: 4,
      title: "OpenAI Counselling Chatbot",
      subtitle: "AI-Powered Mental Health Platform",
      description: "Revolutionary WordPress plugin integrating ChatGPT and OpenAI APIs with advanced Text-to-Speech functionality, specifically designed for mental health counselling and therapeutic support.",
      fullDescription: "An innovative mental health support system combining AI counseling capabilities with voice interaction, session management, crisis intervention protocols, and integration with healthcare systems.",
      tech: ["WordPress", "OpenAI API", "Text-to-Speech", "ChatGPT", "PHP", "Machine Learning"],
      category: "ai-integration",
      link: "Custom Plugin",
      status: "Development",
      gradient: "from-purple-600 via-indigo-700 to-blue-800",
      accentColor: "purple",
      year: "2024",
      client: "Healthcare Provider",
      duration: "6 months",
      results: ["24/7 Support Availability", "70% Response Efficiency", "500+ Active Users"],
      image: "/api/placeholder/600/400",
      tags: ["AI", "Healthcare", "Innovation"]
    },
    {
      id: 5,
      title: "CWL Detailing Web",
      subtitle: "Professional Auto Detailing Services",
      description: "Modern service business website leveraging React.js and Tailwind CSS with intuitive UI/UX, cross-browser compatibility, and mobile-first responsive design for optimal user engagement.",
      fullDescription: "A comprehensive auto detailing service platform featuring service booking systems, before/after galleries, customer testimonials, and integrated payment processing for seamless service delivery.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design", "Booking System", "Payment Integration"],
      category: "web-development",
      link: "cwl-detailing-web.vercel.app",
      status: "Live",
      gradient: "from-orange-600 via-red-600 to-red-800",
      accentColor: "orange",
      year: "2023",
      client: "CWL Detailing",
      duration: "1.5 months",
      results: ["200% Booking Increase", "90% Mobile Performance", "45% Lead Generation Growth"],
      image: "/api/placeholder/600/400",
      tags: ["Service Business", "Mobile-First", "Booking"]
    },
    {
      id: 6,
      title: "SK Japan Export",
      subtitle: "Automotive Export Platform",
      description: "Custom Shopify application using Laravel to connect with Japanese car auctions. Features advanced Car Price Calculator with real-time market data and custom functionality for international trade.",
      fullDescription: "A sophisticated automotive export platform connecting international buyers with Japanese car auctions, featuring real-time bidding, logistics management, and comprehensive trade documentation systems.",
      tech: ["Laravel", "Shopify", "Custom App", "Price Calculator", "API Integration", "Real-time Data"],
      category: "custom-development",
      link: "Custom Development",
      status: "Live",
      gradient: "from-cyan-600 via-blue-600 to-indigo-800",
      accentColor: "cyan",
      year: "2022",
      client: "SK Japan Export",
      duration: "5 months",
      results: ["400% Export Volume", "Real-time Price Updates", "15+ Country Expansion"],
      image: "/api/placeholder/600/400",
      tags: ["Custom Development", "International", "Real-time"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web-development', label: 'Web Development', count: projects.filter(p => p.category === 'web-development').length },
    { id: 'ecommerce', label: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'ai-integration', label: 'AI Integration', count: projects.filter(p => p.category === 'ai-integration').length },
    { id: 'custom-development', label: 'Custom Development', count: projects.filter(p => p.category === 'custom-development').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Live': { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-400' },
      'Development': { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-400' },
      'Maintenance': { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-400' }
    };

    const config = statusConfig[status] || statusConfig['Live'];

    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${config.bg} ${config.text} text-xs font-semibold uppercase tracking-wider`}>
        <span className={`w-2 h-2 rounded-full ${config.dot}`}></span>
        {status}
      </span>
    );
  };

  return (
    <section id="projects" className="py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .project-card {
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .tech-tag {
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          transform: scale(1.05);
        }

        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .filter-button {
          transition: all 0.3s ease;
        }

        .filter-button:hover {
          transform: scale(1.05);
        }

        .bg-gradient-animated {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl mb-8 border border-white/50">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse-custom" />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">Portfolio Showcase</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-800 capitalize">
            Featured Projects & Success Stories
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover how I've helped businesses transform their digital presence through innovative solutions, 
            cutting-edge technology, and results-driven development approaches.
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '97%', label: 'Average Performance Score' },
              { number: '15+', label: 'Industries Served' },
              { number: '200%', label: 'Average ROI Increase' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-slate-600 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fadeInUp">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-button inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                  : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-800 border border-slate-200/50 hover:border-slate-300/50'
              }`}
            >
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                activeFilter === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-slate-200 text-slate-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Project Screenshot Placeholder */}
                  <div className="relative z-10 w-4/5 h-4/5 bg-white/90 rounded-lg flex items-center justify-center border-4 border-white shadow-2xl">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-sm text-slate-600 font-medium">Project Screenshot</div>
                      <div className="text-xs text-slate-400">{project.title}</div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    {getStatusBadge(project.status)}
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 text-slate-800 px-3 py-1 rounded-full text-sm font-bold">
                      {project.year}
                    </span>
                  </div>

                  {/* Animated Elements */}
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/60 rounded-full animate-pulse-custom" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full"></div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold">Client:</span>
                      <span className="text-sm">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Duration:</span>
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 capitalize group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-800 group-hover:to-blue-600 transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <h4 className="text-lg text-blue-600 font-semibold mb-3">{project.subtitle}</h4>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                          tag === 'Featured' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="tech-tag px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium hover:bg-blue-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">Key Results</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {project.results.map((result, i) => (
                      <div key={i} className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="text-xs text-slate-600 font-light">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <a 
                    href={project.link.startsWith('http') ? project.link : project.link.includes('.') ? `https://${project.link}` : '#'} 
                    target={project.link.includes('.') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`cta-button inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg ${!project.link.includes('.') && 'cursor-default opacity-75'}`}
                  >
                    <span>
                      {project.link.includes('vercel.app') || project.link.includes('.com') ? 'View Live Site' : 'Custom Development'}
                    </span>
                    {project.link.includes('.') && (
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </a>

                  <button 
                    className="text-slate-600 hover:text-slate-800 font-medium transition-colors duration-200"
                    onClick={() => console.log('View case study for:', project.title)}
                  >
                    Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fadeInUp">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-12 md:p-16 rounded-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 capitalize">
                Ready To Create Your Success Story?
              </h3>
              <p className="text-blue-200 mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                Join the growing list of satisfied clients who've transformed their business with innovative web solutions. 
                Let's discuss your project and create something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  className="cta-button inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                >
                  <span>Start Your Project</span>
                  <svg 
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <button
                  className="cta-button inline-flex items-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 rounded-lg hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                >
                  <span>Discuss Ideas</span>
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
                {[
                  { number: '100%', label: 'Project Success Rate' },
                  { number: '24/7', label: 'Development Support' },
                  { number: '30+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                    <div className="text-blue-200 font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
