'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronDown, Code2, ExternalLink, Eye, Globe, Plus, Smartphone, Tablet, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 projects initially
  const [isLoading, setIsLoading] = useState(false);

  const allProjects = [
    {
      id: 1,
      title: "Elf Bangladesh - Asian Petroleum",
      subtitle: "Modern Digital Platform for Global Lubricant Brand",
      description: "Complete digital presence for Elf Bangladesh using Next.js, Tailwind CSS, Zoho CRM, WhatsApp Business API, Strapi CMS, and Facebook Pixel.",
      tech: ["Next.js", "Tailwind CSS", "Zoho CRM", "WhatsApp API", "Strapi CMS", "Facebook Pixel"],
      category: "web-development",
      link: "https://asian-petroleum.com/",
      mockupImage: null,
      status: "Live",
      gradient: "from-emerald-600 via-teal-700 to-cyan-800",
      accentColor: "emerald",
      year: "2024",
      client: "Asian Petroleum Limited",
      duration: "3 months",
      results: ["Increased Conversion Rate", "Automated Sales Pipeline", "Boosted User Engagement"],
      devices: ["desktop", "mobile"],
      tags: ["Featured", "Full-Stack", "CRM Integration"]
    },
    {
      id: 2,
      title: "Chery Bangladesh",
      subtitle: "Automotive Excellence Platform",
      description: "Official automotive website featuring an immersive 360° car viewer and achieving 97% speed optimization.",
      tech: ["Next.js", "React.js", "CRM Integration", "Facebook Pixel", "360° Viewer"],
      category: "web-development",
      link: "https://www.cherybd.com",
      mockupImage: null,
      status: "Live",
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      accentColor: "blue",
      year: "2023",
      client: "Chery Bangladesh",
      duration: "3 months",
      results: ["97% Speed Score", "200% Sales Increase", "50% Bounce Reduction"],
      devices: ["desktop", "mobile"],
      tags: ["Featured", "E-commerce", "Automotive"]
    },
    {
      id: 3,
      title: "Car Parts E-commerce",
      subtitle: "Advanced Auto Parts Platform",
      description: "Comprehensive e-commerce platform with intelligent make/model/year specification system.",
      tech: ["React.js", "PHP", "API Integration", "WhatsApp API", "MySQL"],
      category: "ecommerce",
      link: null,
      mockupImage: "/images/projects/japan-parts-mockup.png", 
      status: "Live",
      gradient: "from-green-600 via-green-700 to-teal-800",
      accentColor: "green",
      year: "2023",
      client: "Japan Parts Ltd",
      duration: "4 months",
      results: ["300% Order Increase", "85% Satisfaction", "60% Cost Reduction"],
      devices: ["desktop", "tablet"],
      tags: ["E-commerce", "API Integration", "B2B"]
    },
    {
      id: 4,
      title: "ELF Bangladesh",
      subtitle: "Premium Lubricants E-commerce",
      description: "High-converting e-commerce platform showcasing premium lubricant products with modern design principles.",
      tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO", "Product Configurator"],
      category: "ecommerce",
      link: "https://elf-bangladesh.vercel.app",
      mockupImage: null,
      status: "Live",
      gradient: "from-pink-600 via-rose-700 to-red-800",
      accentColor: "pink",
      year: "2024",
      client: "ELF Bangladesh",
      duration: "2 months",
      results: ["150% Conversion", "40% Cart Recovery", "95% Speed Score"],
      devices: ["desktop", "mobile"],
      tags: ["Featured", "E-commerce", "Premium"]
    },
    {
      id: 5,
      title: "OpenAI Counselling Chatbot",
      subtitle: "AI-Powered Mental Health Platform",
      description: "Revolutionary WordPress plugin integrating ChatGPT and OpenAI APIs with advanced Text-to-Speech functionality.",
      tech: ["WordPress", "OpenAI API", "Text-to-Speech", "ChatGPT", "PHP"],
      category: "ai-integration",
      link: null,
      mockupImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop",
      status: "Development",
      gradient: "from-purple-600 via-indigo-700 to-blue-800",
      accentColor: "purple",
      year: "2024",
      client: "Healthcare Provider",
      duration: "6 months",
      results: ["24/7 Support", "70% Efficiency", "500+ Active Users"],
      devices: ["desktop", "tablet"],
      tags: ["AI", "Healthcare", "Innovation"]
    },
    {
      id: 6,
      title: "CWL Detailing Web",
      subtitle: "Professional Auto Detailing Services",
      description: "Modern service business website leveraging React.js and Tailwind CSS with intuitive UI/UX.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design", "Booking System"],
      category: "web-development",
      link: "https://cwl-detailing-web.vercel.app",
      mockupImage: null,
      status: "Live",
      gradient: "from-orange-600 via-red-600 to-red-800",
      accentColor: "orange",
      year: "2023",
      client: "CWL Detailing",
      duration: "1.5 months",
      results: ["200% Booking Increase", "90% Mobile Score", "45% Lead Growth"],
      devices: ["mobile", "tablet"],
      tags: ["Service Business", "Mobile-First", "Booking"]
    },
    {
      id: 7,
      title: "SK Japan Export",
      subtitle: "Automotive Export Platform",
      description: "Custom Shopify application using Laravel to connect with Japanese car auctions.",
      tech: ["Laravel", "Shopify", "Custom App", "Price Calculator", "API Integration"],
      category: "custom-development",
      link: "https://skjapanexport.co.jp/",
      mockupImage: null,
      status: "Live",
      gradient: "from-cyan-600 via-blue-600 to-indigo-800",
      accentColor: "cyan",
      year: "2022",
      client: "SK Japan Export",
      duration: "5 months",
      results: ["400% Export Volume", "Real-time Updates", "15+ Countries"],
      devices: ["desktop", "mobile"],
      tags: ["Custom Development", "International", "Real-time"]
    },
    {
      id: 8,
      title: "Custom Dashboard Analytics",
      subtitle: "Business Intelligence Platform",
      description: "Advanced analytics dashboard with real-time data visualization and reporting capabilities.",
      tech: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Chart.js"],
      category: "custom-development",
      link: null,
      mockupImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      status: "Development",
      gradient: "from-slate-600 via-gray-700 to-zinc-800",
      accentColor: "slate",
      year: "2024",
      client: "Enterprise Client",
      duration: "8 months",
      results: ["Real-time Analytics", "Custom Reports", "Data Insights"],
      devices: ["desktop"],
      tags: ["Analytics", "Dashboard", "Enterprise"]
    },
    // Additional projects for load more functionality
    {
      id: 9,
      title: "FinTech Mobile App",
      subtitle: "Next-Generation Banking Solution",
      description: "Revolutionary mobile banking app with AI-powered financial insights and seamless UX design.",
      tech: ["React Native", "Node.js", "AI Integration", "Blockchain", "Stripe"],
      category: "custom-development",
      link: null,
      mockupImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      status: "Development",
      gradient: "from-violet-600 via-purple-700 to-indigo-800",
      accentColor: "violet",
      year: "2024",
      client: "FinTech Startup",
      duration: "10 months",
      results: ["AI-Powered Insights", "Secure Transactions", "Mobile-First Design"],
      devices: ["mobile"],
      tags: ["FinTech", "AI", "Mobile App"]
    },
    {
      id: 10,
      title: "Real Estate Portal",
      subtitle: "Complete Property Management System",
      description: "Comprehensive real estate platform with virtual tours, property management, and advanced search capabilities.",
      tech: ["Next.js", "Three.js", "PostgreSQL", "AWS", "Stripe"],
      category: "web-development",
      link: "https://realestate-demo.vercel.app",
      mockupImage: null,
      status: "Live",
      gradient: "from-amber-600 via-orange-700 to-red-800",
      accentColor: "amber",
      year: "2024",
      client: "Property Solutions Ltd",
      duration: "6 months",
      results: ["Virtual Tours", "Property Analytics", "Lead Generation"],
      devices: ["desktop", "tablet"],
      tags: ["Real Estate", "3D Tours", "Analytics"]
    },
    {
      id: 11,
      title: "Healthcare Management System",
      subtitle: "Digital Health Platform",
      description: "Complete healthcare management solution with patient records, appointment scheduling, and telemedicine features.",
      tech: ["React.js", "Express.js", "MongoDB", "Socket.io", "WebRTC"],
      category: "custom-development",
      link: null,
      mockupImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      status: "Live",
      gradient: "from-teal-600 via-green-700 to-emerald-800",
      accentColor: "teal",
      year: "2023",
      client: "MedCare Solutions",
      duration: "12 months",
      results: ["Patient Management", "Telemedicine", "Digital Records"],
      devices: ["desktop", "tablet"],
      tags: ["Healthcare", "Telemedicine", "Management"]
    },
    {
      id: 12,
      title: "E-Learning Platform",
      subtitle: "Interactive Education Portal",
      description: "Modern e-learning platform with interactive courses, progress tracking, and AI-powered personalized learning paths.",
      tech: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AI Integration"],
      category: "web-development",
      link: "https://edulearn-platform.com",
      mockupImage: null,
      status: "Live",
      gradient: "from-indigo-600 via-blue-700 to-cyan-800",
      accentColor: "indigo",
      year: "2023",
      client: "EduTech Innovation",
      duration: "8 months",
      results: ["Interactive Learning", "Progress Tracking", "AI Personalization"],
      devices: ["desktop", "mobile"],
      tags: ["Education", "Interactive", "AI-Powered"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: allProjects.length },
    { id: 'web-development', label: 'Web Dev', count: allProjects.filter(p => p.category === 'web-development').length },
    { id: 'ecommerce', label: 'E-commerce', count: allProjects.filter(p => p.category === 'ecommerce').length },
    { id: 'ai-integration', label: 'AI Integration', count: allProjects.filter(p => p.category === 'ai-integration').length },
    { id: 'custom-development', label: 'Custom Dev', count: allProjects.filter(p => p.category === 'custom-development').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const visibleFilteredProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
      setIsLoading(false);
    }, 500); // Simulate loading delay
  };

  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
    setVisibleProjects(6); // Reset to initial count when filter changes
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Live': { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-400' },
      'Development': { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-400' },
      'Maintenance': { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-400' }
    };

    const config = statusConfig[status] || statusConfig['Live'];

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${config.bg} ${config.text} text-xs font-semibold uppercase tracking-wider`}>
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
        {status}
      </span>
    );
  };

  // Enhanced Device Mockup Components with URL overlay
  const MockupOverlay = ({ project }) => (
    <motion.div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-center p-4">
        {project.link ? (
          <>
            <Globe className="w-8 h-8 mx-auto mb-3 text-green-400" />
            <div className="text-lg font-bold mb-2">Live Website</div>
            <div className="text-sm bg-white/20 px-3 py-1.5 rounded-full mb-4 font-mono break-all">
              {project.link.replace('https://', '').replace('http://', '')}
            </div>
            <motion.button
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Visit Site
            </motion.button>
          </>
        ) : (
          <>
            <Code2 className="w-8 h-8 mx-auto mb-3 text-blue-400" />
            <div className="text-lg font-bold mb-2">Custom Project</div>
            <div className="text-sm text-gray-300 mb-4">
              Tailored solution for {project.client}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
              <Code2 className="w-4 h-4" />
              Custom Development
            </div>
          </>
        )}
      </div>
    </motion.div>
  );

  const DesktopMockup = ({ project }) => (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-xs mx-auto">
        <div className="relative bg-gray-900 rounded-lg p-1 shadow-2xl">
          <div className="bg-black rounded-md overflow-hidden relative">
            <div className="aspect-[16/10] bg-gray-200 relative overflow-hidden">
              {project.link ? (
                <iframe
                  src={project.link}
                  title={project.title}
                  className="w-full h-full border-0 scale-75 origin-top-left"
                  style={{ width: '133.33%', height: '133.33%' }}
                  loading="lazy"
                />
              ) : project.mockupImage ? (
                <img
                  src={project.mockupImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 font-medium">Custom Development</div>
                  </div>
                </div>
              )}
            </div>
            <MockupOverlay project={project} />
          </div>
        </div>
        <div className="relative mx-auto mt-1">
          <div className="w-16 h-6 bg-gray-300 rounded-b-lg mx-auto"></div>
          <div className="w-24 h-1.5 bg-gray-400 rounded-full mx-auto mt-0.5"></div>
        </div>
      </div>
    </div>
  );

  const TabletMockup = ({ project }) => (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-48 h-64 bg-gray-900 rounded-2xl p-2 shadow-2xl">
        <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
          <div className="w-full h-full bg-gray-200 relative overflow-hidden">
            {project.link ? (
              <iframe
                src={project.link}
                title={project.title}
                className="w-full h-full border-0 scale-50 origin-top-left"
                style={{ width: '200%', height: '200%' }}
                loading="lazy"
              />
            ) : project.mockupImage ? (
              <img
                src={project.mockupImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <Tablet className="w-6 h-6 text-gray-500 mx-auto mb-1" />
                  <div className="text-xs text-gray-600 font-medium">Custom App</div>
                </div>
              </div>
            )}
          </div>
          <MockupOverlay project={project} />
        </div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-600 rounded-full"></div>
      </div>
    </div>
  );

  const MobileMockup = ({ project }) => (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-32 h-64 bg-gray-900 rounded-3xl p-1.5 shadow-2xl">
        <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
          <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-gray-900 rounded-full z-10"></div>
          <div className="w-full h-full bg-gray-200 relative overflow-hidden pt-4">
            {project.link ? (
              <iframe
                src={project.link}
                title={project.title}
                className="w-full h-full border-0 scale-[0.25] origin-top-left"
                style={{ width: '400%', height: '400%' }}
                loading="lazy"
              />
            ) : project.mockupImage ? (
              <img
                src={project.mockupImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-xs text-gray-600 font-medium">Mobile App</div>
                </div>
              </div>
            )}
          </div>
          <MockupOverlay project={project} />
        </div>
      </div>
    </div>
  );

  const renderDeviceMockup = (project, deviceType) => {
    switch (deviceType) {
      case 'desktop':
        return <DesktopMockup project={project} />;
      case 'tablet':
        return <TabletMockup project={project} />;
      case 'mobile':
        return <MobileMockup project={project} />;
      default:
        return <DesktopMockup project={project} />;
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-6 border border-white/50"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">Portfolio Showcase</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Discover innovative solutions that drive business growth through cutting-edge technology and exceptional user experiences.
          </motion.p>

          {/* Compact Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projects' },
              { number: '97%', label: 'Performance' },
              { number: '15+', label: 'Industries' },
              { number: '200%', label: 'ROI Increase' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="text-xl md:text-2xl font-black text-blue-600 mb-1">{stat.number}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Compact Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-800 border border-white/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${
                activeFilter === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-slate-200 text-slate-600'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16"
          layout
        >
          <AnimatePresence mode="popLayout">
            {visibleFilteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 overflow-hidden group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Enhanced Mockup Showcase */}
                <div className="relative h-48 md:h-56 overflow-hidden cursor-pointer">
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative p-4`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    
                    {/* Device Mockups */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      {project.devices.length > 1 ? (
                        <div className="flex items-center justify-center gap-4 w-full h-full">
                          <div className="flex-1 max-w-[120px]">
                            {renderDeviceMockup(project, project.devices[0])}
                          </div>
                          <div className="flex-shrink-0">
                            {renderDeviceMockup(project, project.devices[1])}
                          </div>
                        </div>
                      ) : (
                        <div className="max-w-[150px]">
                          {renderDeviceMockup(project, project.devices[0])}
                        </div>
                      )}
                    </div>

                    {/* Enhanced Status Badge */}
                    <div className="absolute top-3 right-3 z-30">
                      {getStatusBadge(project.status)}
                    </div>

                    <div className="absolute top-3 left-3 z-30">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-2 py-1 rounded-full text-xs font-bold">
                        {project.year}
                      </span>
                    </div>

                    {/* Enhanced URL/Custom Indicator */}
                    <div className="absolute bottom-3 right-3 z-30">
                      {project.link ? (
                        <div className="flex items-center gap-1.5 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                          <motion.div 
                            className="w-1.5 h-1.5 bg-white rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          Live
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 bg-blue-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                          <Code2 className="w-3 h-3" />
                          Custom
                        </div>
                      )}
                    </div>

                    {/* Hover Info Overlay */}
                    <motion.div
                      className="absolute bottom-3 left-3 z-30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-xs bg-black/50 px-2 py-1 rounded-full">
                        Click to explore
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6">
                  {/* Header with URL */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-3">{project.subtitle}</p>
                    
                    {/* Enhanced URL Display */}
                    {project.link ? (
                      <div className="flex items-center gap-2 mb-3 p-2 bg-green-50 rounded-lg border border-green-200">
                        <Globe className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 font-mono text-xs truncate">
                          {project.link.replace('https://', '').replace('http://', '')}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 mb-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                        <Code2 className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-800 text-xs font-semibold">
                          Custom Project for {project.client}
                        </span>
                      </div>
                    )}
                    
                    {/* Compact Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span 
                          key={i} 
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
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

                  {/* Compact Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Compact Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium hover:bg-blue-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Compact Results */}
                  <div className="mb-4">
                    <div className="grid grid-cols-1 gap-2">
                      {project.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <TrendingUp className="w-3 h-3 text-green-600" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    {project.link ? (
                      <motion.a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg text-sm shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-sm shadow-lg">
                        <Code2 className="w-4 h-4" />
                        <span>Custom Project</span>
                      </div>
                    )}

                    <button 
                      className="text-slate-600 hover:text-slate-800 font-medium transition-colors duration-200 text-sm"
                      onClick={() => console.log('View case study for:', project.title)}
                    >
                      Case Study →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl disabled:opacity-70"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  <span>Load More Projects</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </motion.button>
            
            <p className="text-slate-600 mt-3 text-sm">
              Showing {visibleFilteredProjects.length} of {filteredProjects.length} projects
            </p>
          </motion.div>
        )}

        {/* Compact Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                Ready To Create Your Success Story?
              </h3>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Join satisfied clients who've transformed their business with innovative web solutions. Let's discuss your project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg rounded-xl shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Project</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.button>

                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-base md:text-lg border-2 border-white/30 rounded-xl hover:bg-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discuss Ideas</span>
                  <Calendar className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Compact Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                {[
                  { number: '100%', label: 'Success Rate' },
                  { number: '24/7', label: 'Support' },
                  { number: '30+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">{stat.number}</div>
                    <div className="text-blue-200 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;