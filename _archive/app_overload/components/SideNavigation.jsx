
'use client';

import { motion } from 'framer-motion';
import {
    Award,
    Briefcase,
    Code,
    Heart,
    HelpCircle,
    Home,
    Mail,
    Phone,
    User,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', title: 'Home', icon: Home },
  { id: 'about', title: 'About', icon: User },
  { id: 'projects', title: 'Projects', icon: Briefcase },
  { id: 'services', title: 'Services', icon: Award },
  { id: 'skills', title: 'Skills', icon: Code },
  { id: 'contact', title: 'Contact', icon: Mail },
  { id: 'faq', title: 'FAQ', icon: HelpCircle },
  { id: 'testimonials', title: 'Testimonials', icon: Heart },
  { id: 'quote', title: 'Get a Quote', icon: Phone },
];

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-1/2 -translate-y-1/2 left-4 md:left-6 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-4 rounded-lg shadow-lg z-50"
      aria-label="Side Navigation"
    >
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id} className="group">
            <motion.button
              onClick={() => handleScrollToSection(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection('')}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-700 text-slate-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white'
              }`}
              title={section.title}
              aria-label={`Scroll to ${section.title}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <section.icon className="w-5 h-5" />
              {/* Visible name for desktop */}
              <span
                className={`hidden md:inline-block absolute left-14 opacity-0 group-hover:opacity-100 bg-black text-white py-1 px-3 rounded-lg text-sm shadow-md transition-opacity duration-300`}
              >
                {section.title}
              </span>
            </motion.button>
            {/* Dynamic hover effect for smaller screens */}
            {hoveredSection === section.id && (
              <motion.div
                className="absolute left-14 top-1 bg-black text-white py-1 px-3 rounded-lg text-sm shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {section.title}
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigation;
