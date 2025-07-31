'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#projects' },
    { name: 'CONTACT', href: '#contact' }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        const headerHeight = 80; // Approximate height of the fixed header
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
    link.download = 'Ratan_Mia_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/70 backdrop-blur-lg border-b border-gray-800 shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <motion.button 
              className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight"
              onClick={() => handleNavigation('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ratan<span className="text-accent-lime">.</span>
            </motion.button>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-10">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-300 hover:text-accent-lime transition-colors font-medium text-sm tracking-wider relative group"
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-accent-lime group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-6">
              <motion.button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 text-gray-300 hover:text-accent-lime transition-colors font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </motion.button>
              
              <motion.button
                onClick={() => handleNavigation('#contact')}
                className="bg-accent-lime text-black px-6 py-3 font-bold text-sm tracking-wider rounded-xl hover:bg-lime-300 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-lime-400/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WORK WITH ME
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white hover:text-accent-lime transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col items-center gap-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-3xl font-bold text-gray-300 hover:text-accent-lime transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="mt-8 flex flex-col gap-6 w-full px-8">
                <button
                  onClick={handleDownloadCV}
                  className="w-full flex items-center justify-center gap-2 py-4 px-4 border-2 border-gray-700 text-white hover:bg-gray-800 transition-colors font-medium rounded-xl"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
                <button
                  onClick={() => handleNavigation('#contact')}
                  className="w-full bg-accent-lime text-black py-4 px-4 font-bold tracking-wider hover:bg-lime-300 transition-colors rounded-xl"
                >
                  WORK WITH ME
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
