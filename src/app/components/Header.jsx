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
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -2]);

  // Enhanced navigation structure
  const mainMenuItems = [
    { name: 'Home', id: 'home', icon: Home, href: '/' },
    { name: 'About', id: 'about', icon: User, href: '/about' },
    { name: 'Services', id: 'services', icon: Briefcase, href: '/services' },
    { name: 'Portfolio', id: 'portfolio', icon: FolderOpen, href: '/portfolio' }
  ];

  const dropdownMenus = [
    {
      title: 'More',
      icon: Settings,
      items: [
        { name: 'Case Studies', id: 'case-studies', icon: Award, description: 'In-depth project analysis', href: '/case-studies' },
        { name: 'Blog', id: 'blog', icon: MessageSquare, description: 'Tech insights & articles', href: '/blog' },
        { name: 'Resume', id: 'resume', icon: User, description: 'Download my CV', href: '/resume' }
      ]
    }
  ];

  const allMenuItems = [
    ...mainMenuItems,
    ...dropdownMenus.flatMap(dropdown => dropdown.items),
    { name: 'Contact', id: 'contact', icon: Mail }
  ];

  // Enhanced scroll detection and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Enhanced active section detection
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Outside click handlers
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

  const handleNavigation = useCallback((item) => {
    if (item.href && item.href.startsWith('/')) {
      window.location.href = item.href;
    } else if (item.href && item.href.startsWith('#')) {
      const element = document.getElementById(item.href.slice(1));
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ 
          top: elementPosition, 
          behavior: 'smooth' 
        });
      }
    } else if (item.id === 'home') {
      window.location.href = '/';
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ 
          top: item.id === 'home' ? 0 : elementPosition, 
          behavior: 'smooth' 
        });
      }
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const handleDownloadCV = useCallback(() => {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y: headerY }}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>

        <div className="container mx-auto px-4 py-4 relative z-10">
          <nav className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation({ id: 'home', href: '/' })}
            >
              <motion.div 
                className="relative w-12 h-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity shadow-lg" />
                <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-lg font-black text-cyan-500">R</span>
                </div>
                
                {/* Animated ring */}
                <motion.div
                  className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              <div>
                <motion.div 
                  className="text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-cyan-600 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Ratan Mia
                </motion.div>
                <motion.div 
                  className="text-xs text-gray-500 -mt-1 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Full Stack Developer
                </motion.div>
              </div>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Main Navigation */}
              {mainMenuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`relative flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 group ${
                    isItemActive(item.id)
                      ? 'text-white bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg' 
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                    isItemActive(item.id) ? 'text-white' : 'text-cyan-500'
                  }`} />
                  <span className="text-sm font-semibold">{item.name}</span>
                  
                  {/* Active indicator */}
                  {isItemActive(item.id) && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
                      layoutId="activeIndicator"
                      initial={false}
                      style={{ x: '-50%' }}
                    />
                  )}
                </motion.button>
              ))}

              {/* Dropdown Menu */}
              {dropdownMenus.map((dropdown, index) => (
                <div key={dropdown.title} className="relative dropdown-container">
                  <motion.button
                    onClick={() => setActiveDropdown(activeDropdown === dropdown.title ? null : dropdown.title)}
                    className={`relative flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 group ${
                      isDropdownActive(dropdown) || activeDropdown === dropdown.title
                        ? 'text-white bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg' 
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (mainMenuItems.length + index) * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <dropdown.icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                      isDropdownActive(dropdown) || activeDropdown === dropdown.title ? 'text-white' : 'text-cyan-500'
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
                        className="absolute -bottom-2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
                        layoutId="activeDropdownIndicator"
                        initial={false}
                        style={{ x: '-50%' }}
                      />
                    )}
                  </motion.button>

                  {/* Dropdown Content */}
                  <AnimatePresence>
                    {activeDropdown === dropdown.title && (
                      <motion.div
                        className="absolute top-full left-0 mt-3 bg-white rounded-lg shadow-xl border border-gray-200 py-3 min-w-64 z-50 overflow-hidden"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent" />
                        
                        {dropdown.items.map((item, itemIndex) => (
                          <motion.button
                            key={item.id}
                            onClick={() => handleNavigation(item)}
                            className={`relative w-full flex items-start gap-4 px-5 py-4 text-left transition-all duration-300 group ${
                              isItemActive(item.id)
                                ? 'text-white bg-gradient-to-r from-cyan-400 to-cyan-500'
                                : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500'
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <item.icon className={`w-5 h-5 mt-0.5 transition-transform duration-300 group-hover:scale-110 ${
                              isItemActive(item.id) ? 'text-white' : 'text-cyan-500'
                            }`} />
                            <div className="flex-1">
                              <div className="font-semibold text-sm">{item.name}</div>
                              <div className={`text-xs mt-1 ${
                                isItemActive(item.id) ? 'text-white/80' : 'text-gray-500'
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
                onClick={() => handleNavigation({ id: 'contact', href: '#contact' })}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 group ${
                  isItemActive('contact')
                    ? 'text-white bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg' 
                    : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (mainMenuItems.length + dropdownMenus.length) * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                  isItemActive('contact') ? 'text-white' : 'text-cyan-500'
                }`} />
                <span className="text-sm font-semibold">Contact</span>
                
                {isItemActive('contact') && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
                    layoutId="activeContactIndicator"
                    initial={false}
                    style={{ x: '-50%' }}
                  />
                )}
              </motion.button>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={handleDownloadCV}
                className="relative flex items-center gap-2 px-4 py-3 text-gray-700 border-2 border-gray-300 hover:border-cyan-400 hover:text-cyan-600 rounded-lg transition-all duration-300 text-sm font-semibold group overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download CV</span>
              </motion.button>
              
              <motion.button
                onClick={() => handleNavigation({ id: 'quote', href: '/quote' })}
                className="relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white hover:from-cyan-500 hover:to-cyan-600 rounded-lg transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Zap className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Get Quote</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative p-3 text-gray-700 hover:text-cyan-600 transition-colors duration-300 rounded-lg hover:bg-cyan-50 group"
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
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-gray-900/80 backdrop-blur-lg z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-50 to-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Mobile Header */}
              <div className="relative p-6 bg-gradient-to-br from-cyan-400 to-cyan-500 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-cyan-500">R</span>
                    </div>
                    <div>
                      <div className="text-lg font-black">Ratan Mia</div>
                      <div className="text-xs text-white/80 font-medium">Full Stack Developer</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Status indicator */}
                <div className="relative z-10 flex items-center gap-2 mt-4 px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">
                    Available for Projects
                  </span>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-6">
                <div className="space-y-2">
                  {allMenuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`w-full flex items-center gap-4 px-4 py-4 text-left transition-all duration-300 group rounded-lg relative overflow-hidden ${
                        isItemActive(item.id)
                          ? 'text-white bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg' 
                          : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500'
                      }`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 relative z-10 ${
                        isItemActive(item.id) ? 'text-white' : 'text-cyan-500'
                      }`} />
                      <span className="font-semibold relative z-10">{item.name}</span>
                      {isItemActive(item.id) && (
                        <div className="ml-auto w-3 h-3 bg-white rounded-full shadow-lg relative z-10"></div>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-4">
                  <motion.button
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-white text-gray-700 border-2 border-gray-300 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 font-semibold rounded-lg group"
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
                    onClick={() => handleNavigation({ id: 'quote', href: '/quote' })}
                    className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl group"
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
                    onClick={() => handleNavigation({ id: 'contact', href: '#contact' })}
                    className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl group"
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

                {/* Contact Info */}
                <motion.div 
                  className="mt-8 p-5 bg-cyan-50 border border-cyan-200 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-500" />
                    Quick Contact
                  </h4>
                  <div className="space-y-3 text-sm">
                    <a 
                      href="mailto:shorifull@gmail.com" 
                      className="flex items-center gap-3 text-gray-600 hover:text-cyan-600 transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
                      shorifull@gmail.com
                    </a>
                    <a 
                      href="tel:+8801751010966" 
                      className="flex items-center gap-3 text-gray-600 hover:text-cyan-600 transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
                      +880 175 101 0966
                    </a>
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