'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showCaseStudiesDropdown, setShowCaseStudiesDropdown] = useState(false);
  const [showMobileCaseStudies, setShowMobileCaseStudies] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Pages with dark hero sections that need white text at the top
  const darkHeroPages = ['/portfolio', '/case-studies', '/blog'];
  const hasDarkHero = darkHeroPages.some(page => pathname?.startsWith(page));

  // Ensure component is mounted before applying dynamic styles
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'CASE STUDIES', href: '/case-studies', hasDropdown: true },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' }
  ];

  const caseStudies = [
    { 
      name: 'AutoTrader BD', 
      href: '/case-studies/auto-trader',
      description: 'B2B Car Trading Platform'
    },
    { 
      name: 'Shopify Headless CMS', 
      href: '/case-studies/shopify-headless-cms',
      description: 'Headless Commerce Platform'
    },
    { 
      name: 'Gamify (PieQR)', 
      href: '/case-studies/gamify',
      description: 'QR Loyalty & Engagement Platform'
    },
    { 
      name: 'Chery Bangladesh App', 
      href: '/case-studies/chery-bangladesh-app',
      description: 'Full-stack Automotive Platform'
    },
    { 
      name: 'ELF Bangladesh App', 
      href: '/case-studies/elf-bangladesh-app',
      description: 'Automotive E-Commerce Ecosystem'
    },
    { 
      name: 'TurfLet', 
      href: '/case-studies/turfnations-booking',
      description: 'Sports Venue Booking Platform'
    }
  ];

  // Enhanced scroll detection with section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      // Track active section for better visual feedback
      const sections = navigationItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      // Handle anchor links
      if (window.location.pathname !== '/') {
        // If not on home page, go to home first
        window.location.href = '/' + href;
      } else {
        // On home page, smooth scroll
        const element = document.getElementById(href.slice(1));
        if (element) {
          const headerHeight = 88;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;
          window.scrollTo({ 
            top: href === '#home' ? 0 : offsetPosition, 
            behavior: 'smooth' 
          });
        }
      }
    } else if (href.startsWith('/')) {
      // Navigate to internal page
      window.location.href = href;
    }
    setIsMenuOpen(false);
    setShowCaseStudiesDropdown(false);
    setShowMobileCaseStudies(false);
  };
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ratan_Mia_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Header background based on scroll
  const getHeaderStyle = () => {
    if (!mounted) return 'bg-transparent';
    if (scrolled) {
      return 'bg-black/95 backdrop-blur-lg shadow-lg shadow-black/20';
    }
    return 'bg-transparent';
  };

  const getTextStyle = () => {
    if (!mounted) return 'text-white';
    if (scrolled) {
      return 'text-white';
    }
    // Use white text for pages with dark hero sections, black text for home/light pages
    return (!scrolled && !hasDarkHero && activeSection === 'home') 
      ? 'text-black' 
      : 'text-white';
  };

  const getLogoAccentStyle = () => {
    if (!mounted) return 'text-accent-lime';
    if (scrolled) {
      return 'text-accent-lime';
    }
    return (!scrolled && !hasDarkHero && activeSection === 'home') 
      ? 'text-black' 
      : 'text-accent-lime';
  };

  const getNavTextStyle = () => {
    if (!mounted) return 'text-gray-300 hover:text-accent-lime';
    if (scrolled) {
      return 'text-gray-300 hover:text-accent-lime';
    }
    // Use light text for pages with dark backgrounds
    return (!scrolled && !hasDarkHero && activeSection === 'home') 
      ? 'text-black/80 hover:text-black' 
      : 'text-gray-300 hover:text-accent-lime';
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-[100] isolate transition-all duration-500 ${getHeaderStyle()}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <nav className="flex justify-between items-center h-16 sm:h-18 md:h-20 lg:h-24">
            
            {/* Enhanced Logo */}
            <motion.button 
              className={`text-xl sm:text-2xl lg:text-3xl font-extrabold ${getTextStyle()} tracking-tight group`}
              onClick={() => handleNavigation('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                Ratan
                <motion.span 
                  className={`${getLogoAccentStyle()} text-3xl sm:text-4xl lg:text-5xl leading-none`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  .
                </motion.span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></div>
              </span>
            </motion.button>
            
            {/* Desktop Navigation - Enhanced */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                
                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setShowCaseStudiesDropdown(true)}
                      onMouseLeave={() => setShowCaseStudiesDropdown(false)}
                    >
                      <motion.button
                        className={`${getNavTextStyle()} transition-all duration-300 font-semibold text-sm tracking-wider relative group flex items-center gap-1`}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showCaseStudiesDropdown ? 'rotate-180' : ''}`} />
                        <motion.span 
                          className="absolute bottom-[-6px] left-0 h-0.5 bg-accent-lime transition-all duration-300 w-0 group-hover:w-full"
                        />
                      </motion.button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {showCaseStudiesDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-2 left-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[110]"
                          >
                            {caseStudies.map((study, index) => (
                              <motion.a
                                key={study.name}
                                href={study.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="block px-6 py-4 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 group"
                              >
                                <div className="font-semibold text-black group-hover:text-accent-lime transition-colors text-sm mb-1">
                                  {study.name}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {study.description}
                                </div>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`${getNavTextStyle()} transition-all duration-300 font-semibold text-sm tracking-wider relative group ${
                      isActive ? 'text-accent-lime' : ''
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item.name}
                    <motion.span 
                      className={`absolute bottom-[-6px] left-0 h-0.5 bg-accent-lime transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      layoutId="activeIndicator"
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Desktop Right Side - Enhanced */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Download CV Button */}
              <motion.button
                onClick={handleDownloadCV}
                className={`flex items-center gap-2 ${getNavTextStyle()} transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 group`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Download className="w-4 h-4" />
                </motion.div>
                <span className="relative">
                  Resume
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300"></span>
                </span>
              </motion.button>
              
              {/* Primary CTA Button */}
              <motion.button
                onClick={() => handleNavigation('/quote')}
                className="bg-black text-accent-lime px-8 py-3 font-bold text-sm tracking-wider rounded-xl hover:bg-black/90 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-black/30 border border-black/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LET'S WORK
              </motion.button>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              {/* Mobile Resume Button */}
              <motion.button
                onClick={handleDownloadCV}
                className={`p-2 sm:p-2.5 ${getTextStyle()} hover:bg-white/10 rounded-lg transition-all duration-300`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              
              {/* Menu Toggle */}
              <motion.button
                className={`p-2 sm:p-2.5 ${getTextStyle()} hover:bg-white/10 rounded-lg transition-all duration-300`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu - Redesigned */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Slide-in Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-b from-gray-900 to-black z-[100] lg:hidden overflow-y-auto shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></div>
                  <span className="text-white font-bold text-sm tracking-wider">MENU</span>
                </div>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-6 space-y-2">
                {navigationItems.map((item, index) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.name} className="space-y-2">
                        <motion.button
                          onClick={() => setShowMobileCaseStudies(!showMobileCaseStudies)}
                          className="w-full flex items-center justify-between px-4 py-3 text-left text-white font-semibold hover:bg-white/5 rounded-lg transition-all group"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="group-hover:text-accent-lime transition-colors">
                            {item.name}
                          </span>
                          <motion.div
                            animate={{ rotate: showMobileCaseStudies ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-accent-lime transition-colors" />
                          </motion.div>
                        </motion.button>
                        
                        <AnimatePresence>
                          {showMobileCaseStudies && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {caseStudies.map((study, studyIndex) => (
                                <motion.a
                                  key={study.name}
                                  href={study.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: studyIndex * 0.05 }}
                                  className="block px-4 py-2.5 text-sm rounded-lg hover:bg-white/5 transition-colors group"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setShowMobileCaseStudies(false);
                                  }}
                                >
                                  <div className="text-gray-300 group-hover:text-white font-medium mb-0.5">
                                    {study.name}
                                  </div>
                                  <div className="text-xs text-gray-500 group-hover:text-gray-400">
                                    {study.description}
                                  </div>
                                </motion.a>
                              ))}
                              <motion.a
                                href="/case-studies"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: caseStudies.length * 0.05 }}
                                className="block px-4 py-2.5 text-sm rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setShowMobileCaseStudies(false);
                                }}
                              >
                                <div className="text-accent-lime group-hover:text-lime-300 font-medium flex items-center gap-1">
                                  View All Case Studies
                                  <ChevronDown className="w-3 h-3 -rotate-90" />
                                </div>
                              </motion.a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className="block px-4 py-3 text-white font-semibold hover:bg-white/5 rounded-lg transition-all group"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="group-hover:text-accent-lime transition-colors">
                        {item.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-gray-800"></div>

              {/* Action Buttons */}
              <div className="px-6 py-6 space-y-3">
                <motion.button
                  onClick={() => {
                    handleDownloadCV();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-accent-lime text-white rounded-lg transition-all font-medium group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4 group-hover:text-accent-lime transition-colors" />
                  <span>Download Resume</span>
                </motion.button>
                
                <motion.button
                  onClick={() => handleNavigation('/quote')}
                  className="w-full py-3 px-4 bg-accent-lime hover:bg-lime-300 text-black rounded-lg font-bold tracking-wide transition-all shadow-lg shadow-accent-lime/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GET A QUOTE
                </motion.button>
              </div>

              {/* Footer Info */}
              <div className="px-6 py-6 mt-auto">
                <div className="text-xs text-gray-500 text-center">
                  <p className="mb-2">Full Stack Developer</p>
                  <p>React Native • Next.js • Laravel</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;