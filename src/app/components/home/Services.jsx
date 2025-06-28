'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Eye,
  Flame,
  Globe,
  Mail,
  Pause,
  Play,
  RotateCcw,
  Server,
  ShoppingCart,
  Star,
  Terminal,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Enhanced Service Data with comprehensive information
const CORE_SERVICES = [
  {
    id: 1,
    icon: Code2,
    title: "FULL STACK DEVELOPMENT",
    subtitle: "END-TO-END SOLUTIONS",
    description: "Complete web applications built with React.js, Next.js, and Laravel. From concept to deployment with modern architecture.",
    features: [
      "Responsive Design & Mobile-First Approach",
      "RESTful API Development & Integration",
      "Database Architecture & Optimization",
      "Performance Optimization & SEO",
      "Security Implementation & Testing",
      "Cloud Deployment & DevOps Setup"
    ],
    technologies: ["React.js", "Next.js", "Laravel", "MySQL", "AWS"],
    basePrice: "$2,500",
    timeline: "4-12 weeks",
    gradient: "from-cyan-500 to-blue-500",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    featured: true,
    popularity: "Most Popular",
    clientSatisfaction: "98%",
    completedProjects: "45+"
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "E-COMMERCE SOLUTIONS",
    subtitle: "SALES-DRIVEN PLATFORMS",
    description: "High-converting online stores with secure payment systems, inventory management, and advanced analytics.",
    features: [
      "Custom E-commerce Development",
      "Multi-Payment Gateway Integration",
      "Advanced Inventory Management",
      "Analytics & Performance Reporting",
      "SEO Optimization & Marketing Tools",
      "Mobile App Integration Ready"
    ],
    technologies: ["WooCommerce", "Shopify", "Laravel", "Stripe", "PayPal"],
    basePrice: "$4,000",
    timeline: "6-16 weeks",
    gradient: "from-violet-600 to-purple-500",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    featured: true,
    popularity: "High Demand",
    clientSatisfaction: "96%",
    completedProjects: "35+"
  },
  {
    id: 3,
    icon: Globe,
    title: "WORDPRESS DEVELOPMENT",
    subtitle: "CMS EXCELLENCE",
    description: "Custom WordPress solutions with bespoke themes, plugins, and enterprise-grade performance optimization.",
    features: [
      "Custom Theme Development",
      "Advanced Plugin Development",
      "Performance & Speed Optimization",
      "Security Hardening & Maintenance",
      "Multi-site Management",
      "Headless WordPress Implementation"
    ],
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
    basePrice: "$1,500",
    timeline: "2-8 weeks",
    gradient: "from-emerald-500 to-teal-500",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    featured: false,
    popularity: "Trending",
    clientSatisfaction: "94%",
    completedProjects: "60+"
  },
  {
    id: 4,
    icon: Zap,
    title: "PERFORMANCE OPTIMIZATION",
    subtitle: "SPEED & EFFICIENCY",
    description: "Advanced optimization services achieving perfect Core Web Vitals scores and lightning-fast load times.",
    features: [
      "Core Web Vitals Optimization",
      "Database Query Performance Tuning",
      "Image Compression & WebP Conversion",
      "CDN Implementation & Configuration",
      "Code Splitting & Lazy Loading",
      "Server-Side Rendering Optimization"
    ],
    technologies: ["Performance APIs", "CDN", "WebP", "Lighthouse", "GTMetrix"],
    basePrice: "$800",
    timeline: "1-3 weeks",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    featured: false,
    popularity: "Essential",
    clientSatisfaction: "99%",
    completedProjects: "50+"
  },
  {
    id: 5,
    icon: Brain,
    title: "AI INTEGRATION",
    subtitle: "INTELLIGENT AUTOMATION",
    description: "Cutting-edge AI solutions including chatbots, automation, and machine learning implementations.",
    features: [
      "OpenAI GPT Integration & Customization",
      "Intelligent Chatbot Development",
      "Natural Language Processing",
      "Machine Learning Model Integration",
      "Automation Workflow Design",
      "AI-Powered Content Generation"
    ],
    technologies: ["OpenAI", "TensorFlow", "Python", "Node.js", "WebSocket"],
    basePrice: "$2,000",
    timeline: "3-8 weeks",
    gradient: "from-indigo-500 to-purple-500",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    featured: true,
    popularity: "Cutting Edge",
    clientSatisfaction: "97%",
    completedProjects: "15+"
  },
  {
    id: 6,
    icon: Server,
    title: "DEVOPS & DEPLOYMENT",
    subtitle: "INFRASTRUCTURE MASTERY",
    description: "Professional cloud infrastructure setup with automated deployment pipelines and monitoring systems.",
    features: [
      "AWS/Digital Ocean Cloud Setup",
      "Docker Containerization & Orchestration",
      "CI/CD Pipeline Implementation",
      "Monitoring & Alerting Systems",
      "Security Auditing & Compliance",
      "Backup & Disaster Recovery"
    ],
    technologies: ["Docker", "AWS", "Jenkins", "Kubernetes", "Nginx"],
    basePrice: "$1,200",
    timeline: "2-6 weeks",
    gradient: "from-teal-500 to-cyan-500",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    featured: false,
    popularity: "Professional",
    clientSatisfaction: "95%",
    completedProjects: "25+"
  }
];

// Enhanced stats with more context
const SERVICE_STATS = [
  { 
    icon: Award,
    number: '150+', 
    label: 'PROJECTS DELIVERED', 
    description: 'Successfully completed across all services',
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500'
  },
  { 
    icon: TrendingUp,
    number: '98%', 
    label: 'SUCCESS RATE', 
    description: 'Client satisfaction guaranteed',
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-violet-600'
  },
  { 
    icon: Users,
    number: '24/7', 
    label: 'SUPPORT', 
    description: 'Round-the-clock assistance',
    color: 'text-violet-400',
    gradient: 'from-violet-600 to-purple-500'
  },
  { 
    icon: Star,
    number: '6', 
    label: 'CORE SERVICES', 
    description: 'Comprehensive solution portfolio',
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500'
  }
];

// Enhanced Service Card Component
const ServiceCard = ({ service, index, inView, itemWidth, isActive = false }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className={`relative flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 border rounded-2xl overflow-hidden group flex-shrink-0 transition-all duration-500 ${
        isActive ? 'border-cyan-500/50 scale-[1.02]' : 'border-slate-700 hover:border-cyan-500/30'
      }`}
      style={{ width: `${itemWidth}px` }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setShowDetails(true)}
      onHoverEnd={() => setShowDetails(false)}
      whileHover={{ y: -10 }}
    >
      {/* Enhanced Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Featured Badge */}
      {service.featured && (
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="w-3 h-3" />
            FEATURED
          </motion.div>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <service.icon className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-cyan-400 font-bold text-sm mb-3 uppercase tracking-wider">
                {service.subtitle}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm line-clamp-2">
                {service.description}
              </p>
            </div>
          </div>

          {/* Service Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <div className={`text-lg font-black ${service.color} mb-1`}>{service.clientSatisfaction}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">SATISFACTION</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <div className="text-lg font-black text-white mb-1">{service.completedProjects}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">PROJECTS</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <div className={`text-xs font-bold ${service.color} uppercase tracking-wider`}>{service.popularity}</div>
            </div>
          </div>
        </div>

        {/* Price & Timeline */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-slate-800 border border-slate-700 rounded-xl">
            <div className={`text-2xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent uppercase tracking-tight`}>
              {service.basePrice}
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">STARTING PRICE</div>
          </div>
          <div className="text-center p-4 bg-slate-800 border border-slate-700 rounded-xl">
            <div className="text-2xl font-black text-white uppercase tracking-tight">{service.timeline}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">DELIVERY TIME</div>
          </div>
        </div>

        {/* Features List */}
        <div className="flex-1 mb-8">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            KEY FEATURES
          </h4>
          <ul className="space-y-3 max-h-32 overflow-hidden">
            {service.features.slice(0, showDetails ? service.features.length : 3).map((feature, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-3 text-sm text-slate-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`} />
                <span className="leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Show More/Less Indicator */}
          {service.features.length > 3 && (
            <motion.div 
              className="mt-3 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className={`text-xs ${service.color} font-medium uppercase tracking-wider`}>
                {showDetails ? `${service.features.length} FEATURES` : `+${service.features.length - 3} MORE`}
              </span>
            </motion.div>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">TECHNOLOGIES:</h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, i) => (
              <span 
                key={i}
                className={`px-3 py-1 ${service.bgColor} ${service.borderColor} border text-sm font-medium rounded-full ${service.color}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="space-y-3 mt-auto">
          <motion.button
            className={`inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full uppercase tracking-wide group`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <button className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border ${service.borderColor} ${service.color} font-medium rounded-xl hover:bg-white/10 transition-all duration-300 w-full uppercase tracking-wide text-sm`}>
            <Eye className="w-4 h-4" />
            VIEW DETAILS
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Carousel Controls
const CarouselControls = ({ 
  currentIndex, 
  totalSlides, 
  onPrev, 
  onNext, 
  isAutoplay, 
  onToggleAutoplay, 
  onRestart 
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {/* Previous Button */}
      <motion.button
        onClick={onPrev}
        className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous service"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {/* Autoplay Control */}
      <motion.button
        onClick={onToggleAutoplay}
        className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
          isAutoplay 
            ? 'bg-cyan-500 border-cyan-500 text-white hover:bg-cyan-600' 
            : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isAutoplay ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoplay ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
      </motion.button>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next service"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Restart Button */}
      <motion.button
        onClick={onRestart}
        className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: -180 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Restart carousel"
      >
        <RotateCcw className="w-5 h-5" />
      </motion.button>

      {/* Counter */}
      <div className="ml-4 text-sm text-slate-400 font-medium uppercase tracking-wider">
        {currentIndex + 1} / {totalSlides}
      </div>
    </div>
  );
};

// Progress Indicator Component
const ProgressIndicator = ({ currentIndex, totalSlides, progress }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`relative h-2 rounded-full transition-all duration-300 ${
            currentIndex === index ? 'bg-cyan-500 w-8' : 'bg-slate-600 w-2'
          }`}
        >
          {/* Animated progress bar */}
          {currentIndex === index && (
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

// Main Services Component
const Services = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const servicesCarouselWrapperRef = useRef(null);
  const servicesCarouselInnerRef = useRef(null);
  const ctaRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.1 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [itemFullWidth, setItemFullWidth] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const autoplaySpeed = 6000; // 6 seconds

  const calculateItemWidth = useCallback(() => {
    if (servicesCarouselInnerRef.current) {
      const firstCard = servicesCarouselInnerRef.current.children[0];
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        const gap = 24; // gap-6 = 24px
        setItemFullWidth(cardRect.width + gap);
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      let newItemsPerView;
      if (window.innerWidth >= 1280) {
        newItemsPerView = 3;
      } else if (window.innerWidth >= 1024) {
        newItemsPerView = 2;
      } else if (window.innerWidth >= 768) {
        newItemsPerView = 2;
      } else {
        newItemsPerView = 1;
      }
      setItemsPerView(newItemsPerView);
      setTimeout(calculateItemWidth, 100);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateItemWidth]);

  const totalSlides = Math.ceil(CORE_SERVICES.length / itemsPerView);

  // Autoplay functionality
  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
      setProgress(0);
    }, autoplaySpeed);

    // Progress animation
    let progressValue = 0;
    progressIntervalRef.current = setInterval(() => {
      progressValue += (100 / (autoplaySpeed / 100));
      setProgress(progressValue);
      if (progressValue >= 100) {
        progressValue = 0;
        setProgress(0);
      }
    }, 100);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setProgress(0);
  };

  useEffect(() => {
    if (isAutoplay) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [isAutoplay, autoplaySpeed, totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setProgress(0);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  const restartCarousel = () => {
    setCurrentIndex(0);
    setProgress(0);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(prev => !prev);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Developer Header Stripe */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      
      <section 
        ref={sectionRef}
        id="services" 
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
        aria-label="Professional web development services"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-violet-600/5 to-orange-500/5 rounded-full blur-3xl"></div>
          
          {/* Geometric Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Enhanced Section Header */}
            <motion.div
              className="max-w-4xl mx-auto text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">SERVICES PORTFOLIO</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                PROFESSIONAL WEB SOLUTIONS
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                From concept to deployment, delivering exceptional digital solutions that drive business growth, 
                enhance user experience, and exceed client expectations with cutting-edge technology.
              </p>

              {/* Code Bracket Element */}
              <div className="text-cyan-500 font-mono text-3xl mb-8">&lt;Services/&gt;</div>
              
              {/* Decorative Line */}
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full max-w-md mx-auto"></div>
            </motion.div>

            {/* Enhanced Service Stats */}
            <motion.div 
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20"
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {SERVICE_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3 uppercase tracking-tight">{stat.number}</div>
                  <div className="text-sm text-cyan-400 uppercase tracking-wider font-bold mb-2">{stat.label}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Services Carousel */}
            <motion.div 
              className="mb-20 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  OUR SERVICE OFFERINGS
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                  Comprehensive solutions tailored to meet your unique business requirements and technical challenges.
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full max-w-md mx-auto"></div>
              </div>
              
              <div className="relative overflow-hidden px-4 md:px-0" ref={servicesCarouselWrapperRef}>
                <motion.div 
                  className="flex gap-6 pb-4"
                  ref={servicesCarouselInnerRef}
                  animate={{
                    x: -currentIndex * itemFullWidth
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {CORE_SERVICES.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={index}
                      inView={isInView}
                      itemWidth={
                        itemsPerView === 1 
                          ? (servicesCarouselWrapperRef.current ? servicesCarouselWrapperRef.current.offsetWidth - 32 : 300)
                          : (servicesCarouselWrapperRef.current ? (servicesCarouselWrapperRef.current.offsetWidth - (24 * (itemsPerView - 1))) / itemsPerView : 300)
                      }
                      isActive={Math.floor(index / itemsPerView) === currentIndex}
                    />
                  ))}
                </motion.div>

                {/* Enhanced Carousel Controls */}
                <CarouselControls
                  currentIndex={currentIndex}
                  totalSlides={totalSlides}
                  onPrev={goToPrev}
                  onNext={goToNext}
                  isAutoplay={isAutoplay}
                  onToggleAutoplay={toggleAutoplay}
                  onRestart={restartCarousel}
                />

                {/* Progress Indicator */}
                <ProgressIndicator
                  currentIndex={currentIndex}
                  totalSlides={totalSlides}
                  progress={progress}
                />
              </div>
            </motion.div>

            {/* Decorative Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mb-20"></div>

            {/* Enhanced Call to Action */}
            <motion.div 
              ref={ctaRef}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 lg:p-16 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                
                <div className="relative z-10">
                  <Terminal className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
                  
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    READY TO START YOUR PROJECT?
                  </h3>
                  
                  <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Let's discuss your project requirements and create a custom solution that drives your business forward 
                    with innovative technology and exceptional user experience.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                    <motion.button
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Mail className="w-5 h-5" />
                      <span>GET FREE QUOTE</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 uppercase tracking-wide"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>VIEW PORTFOLIO</span>
                    </motion.button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <h4 className="font-bold text-white uppercase tracking-tight">150+ HAPPY CLIENTS</h4>
                      <p className="text-sm text-slate-400">Across 25+ countries worldwide</p>
                    </div>
                    <div className="text-center">
                      <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <h4 className="font-bold text-white uppercase tracking-tight">98% SUCCESS RATE</h4>
                      <p className="text-sm text-slate-400">Projects delivered on time & budget</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                      <h4 className="font-bold text-white uppercase tracking-tight">200% AVG GROWTH</h4>
                      <p className="text-sm text-slate-400">Client business improvement results</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Footer Stripe */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
    </>
  );
};

export default Services;
