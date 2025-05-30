'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  ChevronDown,
  Clock,
  Code,
  Download,
  ExternalLink,
  FolderOpen,
  Home,
  Mail,
  Menu,
  User,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Main navigation items (always visible on desktop)
  const mainMenuItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Services', id: 'services', icon: Briefcase },
    { name: 'Skills', id: 'skills', icon: Code }
  ];

  // Dropdown navigation groups
  const dropdownMenus = [
    {
      title: 'Experience',
      icon: Briefcase,
      items: [
        { name: 'Timeline', id: 'timeline', icon: Clock },
        { name: 'Experience', id: 'experience', icon: Briefcase },
        { name: 'Certificates', id: 'certificates', icon: ExternalLink }
      ]
    },
    {
      title: 'Portfolio',
      icon: FolderOpen,
      items: [
        { name: 'Projects', id: 'projects', icon: FolderOpen },
        { name: 'Testimonials', id: 'testimonials', icon: User },
        { name: 'FAQ', id: 'faq', icon: Menu }
      ]
    }
  ];

  // All menu items for mobile and section detection
  const allMenuItems = [
    ...mainMenuItems,
    ...dropdownMenus.flatMap(dropdown => dropdown.items),
    { name: 'Contact', id: 'contact', icon: Mail }
  ];

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Detect active section
      const sections = allMenuItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ 
          top: elementPosition, 
          behavior: 'smooth' 
        });
      }
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDownloadCV = () => {
    // Replace with your actual CV URL
    const cvUrl = '/Ratan_Mia_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Ratan_Mia_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isItemActive = (itemId) => {
    return activeSection === itemId;
  };

  const isDropdownActive = (dropdown) => {
    return dropdown.items.some(item => item.id === activeSection);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 py-4 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              R
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ratan Mia
              </div>
              <div className="text-xs text-slate-500 -mt-1 hidden sm:block">
                Full Stack Developer
              </div>
            </div>
          </motion.div>
          
          {/* Desktop Menu with Dropdowns */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Main Navigation Items */}
            {mainMenuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 hover:bg-blue-50 group relative ${
                  isItemActive(item.id)
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm">{item.name}</span>
                {isItemActive(item.id) && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600"
                    layoutId="activeIndicator"
                    initial={false}
                    style={{ x: '-50%' }}
                  />
                )}
              </motion.button>
            ))}

            {/* Dropdown Menus */}
            {dropdownMenus.map((dropdown, index) => (
              <div key={dropdown.title} className="relative dropdown-container">
                <motion.button
                  onClick={() => setActiveDropdown(activeDropdown === dropdown.title ? null : dropdown.title)}
                  className={`flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 hover:bg-blue-50 group relative ${
                    isDropdownActive(dropdown) || activeDropdown === dropdown.title
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (mainMenuItems.length + index) * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <dropdown.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">{dropdown.title}</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === dropdown.title ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </motion.div>
                  {isDropdownActive(dropdown) && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600"
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
                      className="absolute top-full left-0 mt-2 bg-white shadow-xl border border-slate-200 py-2 min-w-48 z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {dropdown.items.map((item, itemIndex) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                            isItemActive(item.id)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.name}</span>
                          {isItemActive(item.id) && (
                            <div className="ml-auto w-2 h-2 bg-blue-600"></div>
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
              className={`flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 hover:bg-blue-50 group relative ${
                isItemActive('contact')
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-blue-600'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (mainMenuItems.length + dropdownMenus.length) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">Contact</span>
              {isItemActive('contact') && (
                <motion.div
                  className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600"
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
              className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-blue-600 border border-slate-300 hover:border-blue-300 transition-all duration-200 text-sm font-medium"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors duration-200"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Mobile Menu Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      R
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-800">Ratan Mia</div>
                      <div className="text-xs text-slate-500 -mt-1">Full Stack Developer</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-6">
                <div className="space-y-2">
                  {allMenuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 group ${
                        isItemActive(item.id)
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{item.name}</span>
                      {isItemActive(item.id) && (
                        <div className="ml-auto w-2 h-2 bg-blue-600"></div>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <motion.button
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-slate-700 border border-slate-300 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </motion.button>
                  
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-4 h-4" />
                    Hire Me
                  </motion.button>
                </div>

                {/* Contact Info */}
                <motion.div 
                  className="mt-8 p-4 bg-slate-50 border border-slate-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
                    Quick Contact
                  </h4>
                  <div className="space-y-2 text-sm">
                    <a 
                      href="mailto:shorifull@gmail.com" 
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      shorifull@gmail.com
                    </a>
                    <a 
                      href="tel:+8801751010966" 
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      +880 175 101 0966
                    </a>
                  </div>
                </motion.div>

                {/* Mobile Status Indicator */}
                <motion.div 
                  className="mt-6 flex items-center justify-center gap-2 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-medium">Available for Projects</span>
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