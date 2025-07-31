'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#projects' },
    { name: 'CONTACT', href: '#contact' }
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
      const element = document.getElementById(href.slice(1));
      if (element) {
        const headerHeight = 88; // Updated header height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({ 
          top: href === '#home' ? 0 : offsetPosition, 
          behavior: 'smooth' 
        });
      }
    }
    setIsMenuOpen(false);
  };
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ratan_Mia_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Always fully transparent header
  const getHeaderStyle = () => {
    return 'bg-transparent';
  };

  const getTextStyle = () => {
    return (!scrolled && activeSection === 'home') 
      ? 'text-black' 
      : 'text-white';
  };

  const getLogoAccentStyle = () => {
    return (!scrolled && activeSection === 'home') 
      ? 'text-black' 
      : 'text-accent-lime';
  };

  const getNavTextStyle = () => {
    return (!scrolled && activeSection === 'home') 
      ? 'text-black/80 hover:text-black' 
      : 'text-gray-300 hover:text-accent-lime';
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderStyle()}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-20 lg:h-24">
            
            {/* Enhanced Logo */}
            <motion.button 
              className={`text-2xl lg:text-3xl font-extrabold ${getTextStyle()} tracking-tight group`}
              onClick={() => handleNavigation('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                Ratan
                <motion.span 
                  className={`${getLogoAccentStyle()} text-4xl lg:text-5xl leading-none`}
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
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
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
                onClick={() => handleNavigation('#contact')}
                className="bg-black text-accent-lime px-8 py-3 font-bold text-sm tracking-wider rounded-xl hover:bg-black/90 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-black/30 border border-black/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LET'S WORK
              </motion.button>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <motion.button
              className={`lg:hidden p-3 ${getTextStyle()} hover:bg-black/10 rounded-xl transition-all duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
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

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent"></div>
            
            <div className="flex flex-col items-center justify-center min-h-screen px-8">
              <motion.div 
                className="flex flex-col items-center gap-8 w-full max-w-sm"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Mobile Navigation */}
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="text-3xl lg:text-4xl font-bold text-gray-300 hover:text-accent-lime transition-all duration-300 text-center w-full relative group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-accent-lime group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </motion.button>
                ))}
                
                {/* Mobile Action Buttons */}
                <motion.div 
                  className="mt-12 flex flex-col gap-6 w-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 border-2 border-gray-700 text-white hover:bg-gray-800 hover:border-accent-lime transition-all duration-300 font-medium rounded-xl group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5 group-hover:text-accent-lime transition-colors" />
                    <span>Download Resume</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleNavigation('#contact')}
                    className="w-full bg-accent-lime text-black py-4 px-6 font-bold tracking-wider hover:bg-lime-300 hover:-translate-y-1 transition-all duration-300 rounded-xl shadow-lg hover:shadow-lime-400/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    LET'S BUILD SOMETHING
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;