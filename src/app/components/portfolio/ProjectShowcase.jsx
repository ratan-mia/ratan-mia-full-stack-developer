'use client';

import { ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';
import ProjectImage from './ProjectImage';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Real project data with actual images
  const PROJECT_DATA = [
    {
      id: 1,
      title: "Chery Bangladesh Mobile App",
      subtitle: "Complete Automotive Ecosystem",
      description: "Revolutionary mobile app for Chery Bangladesh featuring vehicle showroom, test drive booking, service management, parts e-commerce, and customer engagement. Built with React Native and Expo for seamless cross-platform experience.",
      tech: ["React Native", "Expo", "Supabase", "SSL Commerz", "Push Notifications"],
      category: "mobile-app",
      link: "/case-studies/chery-bangladesh-app",
      liveUrl: null,
      image: "/images/projects/cherymobileapp/chery-mobile-app.png",
      status: "Live",
      year: "2024",
      client: "Chery Bangladesh",
      duration: "4 months",
      results: ["300% Bookings Increase", "50K+ Users", "4.8★ Rating"],
      metrics: { conversion: "300%", performance: "98%", satisfaction: "96%" },
      featured: true
    },
    {
      id: 2,
      title: "TurfLet Booking Platform",
      subtitle: "Sports Venue Management System",
      description: "Comprehensive real-time booking platform for sports turfs with 30-day calendar, dynamic pricing, SSL Commerz payment integration, and owner dashboard with analytics. Next.js admin panel with Prisma ORM.",
      tech: ["React Native", "Next.js", "Prisma", "SSL Commerz", "Supabase"],
      category: "saas-platform",
      link: "/case-studies/turfnations-booking",
      liveUrl: "https://www.turflet.app",
      image: "/images/projects/turflet/TurfLet.png",
      status: "Live",
      year: "2024",
      client: "TurfLet",
      duration: "3 months",
      results: ["5K+ Bookings", "2.5K+ Users", "95% Success Rate"],
      metrics: { conversion: "250%", performance: "97%", satisfaction: "94%" },
      featured: true
    },
    {
      id: 3,
      title: "Gamify Loyalty Platform",
      subtitle: "QR-Based Engagement System",
      description: "Innovative QR-based loyalty platform with gamification (spin wheel, card flip), digital wallet, prize redemption, and fraud prevention. Features category-based user profiles and geo-tracking for nationwide campaigns.",
      tech: ["React Native", "Supabase", "QR Scanner", "Gamification", "Fraud Detection"],
      category: "loyalty-platform",
      link: "/case-studies/gamify",
      liveUrl: null,
      image: "/images/projects/pieqr/home-screen.png",
      status: "Live",
      year: "2024",
      client: "FMCG & Automotive Brands",
      duration: "2.5 months",
      results: ["8K+ Users", "50K+ Scans", "25K+ Games"],
      metrics: { conversion: "400%", performance: "96%", satisfaction: "92%" },
      featured: true
    },
    {
      id: 4,
      title: "Elf Bangladesh - Asian Petroleum",
      subtitle: "Modern Digital Platform for Global Brand",
      description: "Complete digital presence for Elf Bangladesh using Next.js, Tailwind CSS, Zoho CRM, WhatsApp Business API, Strapi CMS, and Facebook Pixel. Built with performance and conversion optimization in mind.",
      tech: ["Next.js", "Tailwind CSS", "Zoho CRM", "WhatsApp API", "Strapi CMS"],
      category: "web-development",
      link: "https://asian-petroleum.com/",
      liveUrl: "https://asian-petroleum.com/",
      image: "/images/projects/elf-apl-mockup.jpg",
      status: "Live",
      year: "2024",
      client: "Asian Petroleum Limited",
      duration: "3 months",
      results: ["85% Conversion Up", "300% Engagement", "Automated Pipeline"],
      metrics: { conversion: "85%", performance: "97%", satisfaction: "98%" },
      featured: true
    },
    {
      id: 5,
      title: "ELF International",
      subtitle: "Premium E-commerce Platform",
      description: "High-converting e-commerce platform showcasing premium lubricant products with modern design principles. Advanced product configurator and real-time inventory management.",
      tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO", "Product Configurator"],
      category: "ecommerce",
      link: "https://elf-bangladesh.vercel.app",
      liveUrl: "https://elf-bangladesh.vercel.app",
      image: "/images/projects/elf-international-mockup.png",
      status: "Live",
      year: "2024",
      client: "ELF Bangladesh",
      duration: "2 months",
      results: ["150% Conversion", "40% Cart Recovery", "95% PageSpeed"],
      metrics: { conversion: "150%", performance: "95%", satisfaction: "94%" },
      featured: true
    },
    {
      id: 6,
      title: "Japan Auto Parts",

    
      subtitle: "Headless E-commerce Solution",
      description: "Modern headless e-commerce platform for automotive parts with advanced search, filtering, and inventory management. Built with Next.js and headless CMS for maximum flexibility.",
      tech: ["Next.js", "Headless CMS", "E-commerce", "Search Engine", "Inventory Management"],
      category: "ecommerce",
      link: "  /case-studies/shopify-headless-cms",
      liveUrl: "https://japanparts.com.bd",
      image: "/images/projects/japan-parts-headless.png",
      status: "Live",
      year: "2024",
      client: "Japan Auto Parts",
      duration: "2 months",
      results: ["20K+ Products", "Advanced Search", "Real-time Stock"],
      metrics: { conversion: "180%", performance: "96%", satisfaction: "93%" },
      featured: true
    },
    {
      id: 7,
      title: "Matchlyzer",
      subtitle: "AI Sports Analytics Platform",
      description: "Intelligent sports analytics platform using AI to analyze match data, player performance, and team statistics. Real-time insights and predictive analytics for coaches and analysts.",
      tech: ["React Native", "AI/ML", "Analytics", "Real-time Data", "Supabase"],
      category: "ai-analytics",
      link: null,
      liveUrl: null,
      image: "/images/projects/matchlyzer.png",
      status: "Live",
      year: "2024",
      client: "Sports Analytics",
      duration: "4 months",
      results: ["500+ Matches", "10K+ Data Points", "Real-time Insights"],
      metrics: { conversion: "220%", performance: "94%", satisfaction: "91%" },
      featured: true
    },
    {
      id: 8,
      title: "Chery Bangladesh Website",
      subtitle: "Next.js Automotive Platform",
      description: "Official automotive website featuring immersive 360° car viewer and achieving 97% PageSpeed optimization. Revolutionary customer experience with virtual showroom capabilities.",
      tech: ["Next.js", "React.js", "CRM Integration", "Facebook Pixel", "360° Viewer"],
      category: "web-development",
      link: "https://www.cherybd.com",
      liveUrl: "https://www.cherybd.com",
      image: "/images/projects/cherybd-nextjs.png",
      status: "Live",
      year: "2023",
      client: "Chery Bangladesh",
      duration: "3 months",
      results: ["97% PageSpeed", "200% Sales Up", "50% Bounce Down"],
      metrics: { conversion: "200%", performance: "97%", satisfaction: "96%" },
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
              <div className="relative w-full h-full">
                <ProjectImage 
                  project={currentProject} 
                  className="object-cover"
                />
              </div>
              
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
                  target={currentProject.link.startsWith('http') ? "_blank" : "_self"}
                  rel={currentProject.link.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {currentProject.link.startsWith('/case-studies') ? 'View Case Study' : 'View Live'}
                </a>
              ) : (
                <div className="inline-flex items-center px-8 py-4 bg-gray-400 text-white rounded-xl font-bold">
                  <Play className="w-5 h-5 mr-2" />
                  In Development
                </div>
              )}
              {currentProject.category !== 'web-development' && (
                <a 
                  href="/quote"
                  className="inline-flex items-center px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all"
                >
                  Similar Project
                </a>
              )}
            </div>

            {/* Live URL Display */}
            {currentProject.liveUrl && (
              <div className="border-t-2 border-gray-200 pt-6 mt-6">
                <div className="text-sm text-gray-600 mb-2 font-semibold">Live URL</div>
                <a 
                  href={currentProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-accent-lime font-bold break-all transition-colors"
                >
                  {currentProject.liveUrl}
                </a>
              </div>
            )}

            {/* Client Info */}
            <div className="border-t-2 border-gray-200 pt-6 mt-6">
              <div className="text-sm text-gray-600 mb-1 font-semibold">Client</div>
              <div className="font-bold text-lg">{currentProject.client}</div>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-accent-lime rounded-2xl">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">50+</div>
            <div className="text-black/70 font-semibold">Projects Completed</div>
          </div>
          <div className="p-6 bg-accent-lime rounded-2xl">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">98%</div>
            <div className="text-black/70 font-semibold">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-accent-lime rounded-2xl">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">10+</div>
            <div className="text-black/70 font-semibold">Years Experience</div>
          </div>
          <div className="p-6 bg-accent-lime rounded-2xl">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">25+</div>
            <div className="text-black/70 font-semibold">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
