'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  Award,
  Briefcase,
  ChevronDown,
  Clock,
  Code,
  Download,
  FolderOpen,
  Home,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Settings,
  Star,
  User,
  X,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -5]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  // Enhanced navigation structure - organized by user journey
  const mainMenuItems = [
    { name: 'Home', id: 'home', icon: Home, color: 'text-blue-500' },
    { name: 'About', id: 'about', icon: User, color: 'text-green-500' },
    { name: 'Skills', id: 'skills', icon: Code, color: 'text-purple-500' },
    { name: 'Services', id: 'services', icon: Briefcase, color: 'text-orange-500' },
    { name: 'Projects', id: 'projects', icon: FolderOpen, color: 'text-cyan-500' }
  ];

  const dropdownMenus = [
    {
      title: 'Portfolio',
      icon: Star,
      color: 'text-yellow-500',
      items: [
        { name: 'My Work', id: 'projects', icon: FolderOpen, description: 'Featured projects & case studies' },
        { name: 'Testimonials', id: 'testimonials', icon: MessageSquare, description: 'Client reviews & feedback' },
        { name: 'Certificates', id: 'certificates', icon: Award, description: 'Professional credentials' }
      ]
    },
    {
      title: 'More',
      icon: Settings,
      color: 'text-pink-500',
      items: [
        { name: 'How I Work', id: 'process', icon: Clock, description: 'My development process' },
        { name: 'FAQ', id: 'faq', icon: MessageSquare, description: 'Common questions' },
        { name: 'Get Quote', id: 'quote', icon: Mail, description: 'Project estimation' }
      ]
    }
  ];

  const allMenuItems = [
    ...mainMenuItems,
    ...dropdownMenus.flatMap(dropdown => dropdown.items),
    { name: 'Contact', id: 'contact', icon: Mail, color: 'text-red-500' }
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const header = headerRef.current;
    if (header) {
      header.addEventListener('mousemove', handleMouseMove);
      return () => header.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Enhanced scroll detection and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Enhanced active section detection with better accuracy
      const sections = allMenuItems.map(item => item.id);
      let currentActive = 'home';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const headerHeight = 100;
          
          if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
            currentActive = sectionId;
          }
        }
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced outside click handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ 
        top: sectionId === 'home' ? 0 : elementPosition, 
        behavior: 'smooth' 
      });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const handleDownloadCV = useCallback(() => {
    // Analytics tracking
    window.gtag?.('event', 'cv_download', {
      event_category: 'engagement',
      event_label: 'header_download'
    });

    const link = document.createElement('a');
    link.href = '/Ratan_Mia_CV.pdf';
    link.download = 'Ratan_Mia_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const isItemActive = (itemId) => activeSection === itemId;
  const isDropdownActive = (dropdown) => dropdown.items.some(item => item.id === activeSection);

  return (
    <>
      <motion.header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 py-3 sm:py-4 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/50' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y: headerY, opacity: headerOpacity }}
      >
        {/* Animated background gradient on scroll */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0"
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Interactive mouse follower effect */}
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl pointer-events-none"
          animate={{
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
            scale: scrolled ? 0.8 : 1
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        <nav className="flex justify-between items-center max-w-screen-2xl mx-auto relative z-10">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group min-w-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
          >
            <motion.div 
              className="relative w-10 h-10 sm:w-12 sm:h-12"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Animated ring */}
              <motion.div
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            <div className="min-w-0">
              <motion.div 
                className="text-xl sm:text-2xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ratan Mia
              </motion.div>
              <motion.div 
                className="text-xs text-slate-500 -mt-1 hidden sm:block font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer
              </motion.div>
            </div>
          </motion.div>
          
          {/* Enhanced Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Main Navigation */}
            {mainMenuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                  isItemActive(item.id)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                  isItemActive(item.id) ? 'text-white' : item.color
                }`} />
                <span className="text-sm font-semibold">{item.name}</span>
                
                {/* Active indicator */}
                {isItemActive(item.id) && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                    layoutId="activeIndicator"
                    initial={false}
                    style={{ x: '-50%' }}
                  />
                )}
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            ))}

            {/* Enhanced Dropdown Menus */}
            {dropdownMenus.map((dropdown, index) => (
              <div key={dropdown.title} className="relative dropdown-container">
                <motion.button
                  onClick={() => setActiveDropdown(activeDropdown === dropdown.title ? null : dropdown.title)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                    isDropdownActive(dropdown) || activeDropdown === dropdown.title
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (mainMenuItems.length + index) * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <dropdown.icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                    isDropdownActive(dropdown) || activeDropdown === dropdown.title ? 'text-white' : dropdown.color
                  }`} />
                  <span className="text-sm font-semibold">{dropdown.title}</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === dropdown.title ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </motion.div>
                  
                  {/* Active indicator */}
                  {isDropdownActive(dropdown) && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                      layoutId="activeDropdownIndicator"
                      initial={false}
                      style={{ x: '-50%' }}
                    />
                  )}
                </motion.button>

                {/* Enhanced Dropdown Content */}
                <AnimatePresence>
                  {activeDropdown === dropdown.title && (
                    <motion.div
                      className="absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-200/50 rounded-2xl py-3 min-w-64 z-50 overflow-hidden"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
                      
                      {dropdown.items.map((item, itemIndex) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`relative w-full flex items-start gap-4 px-5 py-4 text-left transition-all duration-300 group ${
                            isItemActive(item.id)
                              ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600'
                              : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <item.icon className={`w-5 h-5 mt-0.5 transition-transform duration-300 group-hover:scale-110 ${
                            isItemActive(item.id) ? 'text-white' : 'text-blue-500'
                          }`} />
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{item.name}</div>
                            <div className={`text-xs mt-1 ${
                              isItemActive(item.id) ? 'text-white/80' : 'text-slate-500'
                            }`}>
                              {item.description}
                            </div>
                          </div>
                          {isItemActive(item.id) && (
                            <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Contact Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                isItemActive('contact')
                  ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                  : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (mainMenuItems.length + dropdownMenus.length) * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                isItemActive('contact') ? 'text-white' : 'text-red-500'
              }`} />
              <span className="text-sm font-semibold">Contact</span>
              
              {isItemActive('contact') && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                  layoutId="activeContactIndicator"
                  initial={false}
                  style={{ x: '-50%' }}
                />
              )}
            </motion.button>
          </div>

          {/* Enhanced Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={handleDownloadCV}
              className="relative flex items-center gap-2 px-4 py-2.5 text-slate-700 border-2 border-slate-300 hover:border-blue-400 hover:text-blue-600 rounded-xl transition-all duration-300 text-sm font-semibold group overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download CV</span>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('quote')}
              className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl group overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <Zap className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Get Quote</span>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-3 text-slate-700 hover:text-blue-600 transition-colors duration-300 rounded-xl hover:bg-blue-50 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
            
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </nav>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-lg z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Enhanced Mobile Menu */}
            <motion.div
              className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Enhanced Mobile Header */}
              <div className="relative p-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
                {/* Background effects */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-lg font-black text-white">R</span>
                    </motion.div>
                    <div>
                      <div className="text-lg font-black">Ratan Mia</div>
                      <div className="text-xs text-white/80 font-medium">Full Stack Developer</div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                
                {/* Status indicator */}
                <motion.div 
                  className="relative z-10 flex items-center gap-2 mt-4 px-3 py-2 bg-green-400/20 backdrop-blur-sm border border-green-300/30 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-300 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-100 text-xs font-semibold uppercase tracking-wider">
                    Available for Projects
                  </span>
                </motion.div>
              </div>

              {/* Enhanced Mobile Menu Items */}
              <div className="p-6">
                <div className="space-y-2">
                  {allMenuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-4 px-4 py-4 text-left transition-all duration-300 group rounded-xl relative overflow-hidden ${
                        isItemActive(item.id)
                          ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                          : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                      }`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      
                      <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 relative z-10 ${
                        isItemActive(item.id) ? 'text-white' : (item.color || 'text-blue-500')
                      }`} />
                      <span className="font-semibold relative z-10">{item.name}</span>
                      {isItemActive(item.id) && (
                        <motion.div
                          className="ml-auto w-3 h-3 bg-white rounded-full shadow-lg relative z-10"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Enhanced Mobile CTA Buttons */}
                <div className="mt-8 space-y-4">
                  <motion.button
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 border-2 border-slate-200 hover:border-blue-300 hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 font-semibold rounded-xl group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download CV
                  </motion.button>
                  
                  <motion.button
                    onClick={() => scrollToSection('quote')}
                    className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold rounded-xl shadow-lg hover:shadow-xl group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Get a Quote
                  </motion.button>
                  
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-semibold rounded-xl shadow-lg hover:shadow-xl group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Hire Me Now
                  </motion.button>
                </div>

                {/* Enhanced Contact Info */}
                <motion.div 
                  className="mt-8 p-5 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <h4 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-500" />
                    Quick Contact
                  </h4>
                  <div className="space-y-3 text-sm">
                    <motion.a 
                      href="mailto:shorifull@gmail.com" 
                      className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                      shorifull@gmail.com
                    </motion.a>
                    <motion.a 
                      href="tel:+8801751010966" 
                      className="flex items-center gap-3 text-slate-600 hover:text-green-600 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <Phone className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                      +880 175 101 0966
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;