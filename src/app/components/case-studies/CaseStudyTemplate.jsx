'use client';

import { ArrowRight, Check, ExternalLink, Facebook, Linkedin, Share2, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProjectInquirySection from '../ProjectInquirySection';

/**
 * Reusable Case Study Template Component
 * Following TurfNations design structure with floating sidebar and consistent sections
 * 
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data including company, category, timeline, etc.
 * @param {Array} props.navItems - Navigation items for sidebar
 * @param {React.ReactNode} props.heroSection - Custom hero section component
 * @param {React.ReactNode} props.children - Content sections
 */
export default function CaseStudyTemplate({ project, navItems = [], heroSection, children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Hide sidebar when reaching inquiry section
      const inquirySection = document.querySelector('#project-inquiry-section');
      if (inquirySection) {
        const inquiryTop = inquirySection.offsetTop;
        setShowSidebar(scrollPosition < inquiryTop - 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Hero Section - Full Width */}
      {heroSection}

      {/* Case Study Content with Sidebar */}
      <div className="relative">
        {/* Left Sidebar - Project Details (Fixed Position like TurfNations) */}
        <aside className={`hidden lg:block fixed left-8 top-32 w-80 z-30 transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="space-y-6">
            {/* Project Details Card */}
            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              {/* Company */}
              <div>
                <h3 className="text-xs font-extrabold text-gray-500 mb-3 uppercase tracking-wider">
                  COMPANY
                </h3>
                <p className="text-2xl font-extrabold text-black">{project.company}</p>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Category */}
              <div>
                <h3 className="text-xs font-extrabold text-gray-500 mb-3 uppercase tracking-wider">
                  CATEGORY
                </h3>
                <p className="text-xl font-bold text-black">{project.category}</p>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Live View */}
              {project.liveUrl && (
                <>
                  <div>
                    <h3 className="text-xs font-extrabold text-gray-500 mb-3 uppercase tracking-wider">
                      LIVE VIEW
                    </h3>
                    <a 
                      href={project.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-bold text-black hover:text-accent-lime transition-colors group"
                    >
                      Visit Website
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </>
              )}

              {/* Timeline */}
              {project.timeline && (
                <>
                  <div>
                    <h3 className="text-xs font-extrabold text-gray-500 mb-3 uppercase tracking-wider">
                      TIMELINE
                    </h3>
                    <p className="text-2xl font-extrabold text-black">{project.timeline}</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </>
              )}

              {/* Services Provided */}
              {project.services && project.services.length > 0 && (
                <>
                  <div>
                    <h3 className="text-xs font-extrabold text-gray-500 mb-4 uppercase tracking-wider">
                      SERVICES WE PROVIDED
                    </h3>
                    <div className="space-y-2">
                      {project.services.map((service, idx) => (
                        <div key={idx} className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-black">
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </>
              )}

              {/* Share */}
              <div>
                <h3 className="text-lg font-extrabold text-black mb-4">
                  Share this Case Study:
                </h3>
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-12 h-12 bg-white hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out this amazing case study!`, '_blank')}
                    className="w-12 h-12 bg-white hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-12 h-12 bg-white hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Check out this case study! ' + window.location.href)}`, '_blank')}
                    className="w-12 h-12 bg-white hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    aria-label="Share on WhatsApp"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area - With left margin to accommodate sidebar */}
        <div className="lg:ml-96 lg:mr-8">
          {children}
        </div>

        {/* Project Inquiry Section - Full Width */}
        <ProjectInquirySection />
      </div>
    </main>
  );
}

/**
 * Section Component - Reusable content section matching TurfNations layout
 */
export function CaseStudySection({ id, label, icon: Icon, title, description, bgColor = 'bg-white', children, className = '' }) {
  return (
    <section id={id} className={`py-20 px-4 md:px-6 lg:px-8 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(label || title) && (
          <div className="mb-12">
            {label && Icon && (
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                <Icon className="w-4 h-4" />
                {label}
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h2>
            )}
            {description && (
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * Feature Grid Component
 */
export function FeatureGrid({ features }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <div key={idx} className="p-6 bg-gray-50 hover:bg-accent-lime/10 rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-all duration-300">
            {Icon && (
              <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-black" />
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Tech Stack Component
 */
export function TechStack({ technologies }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(technologies).map(([category, techs]) => (
        <div key={category} className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-200">
          <h3 className="text-lg font-bold mb-4 text-accent-lime">{category}</h3>
          <ul className="space-y-2">
            {techs.map((tech, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-accent-lime rounded-full" />
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/**
 * Metrics Grid Component
 */
export function MetricsGrid({ metrics }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, idx) => (
        <div key={idx} className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-colors">
          <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">{metric.value}</div>
          <div className="text-gray-600 font-medium">{metric.label}</div>
          {metric.sublabel && (
            <div className="text-sm text-gray-500 mt-1">{metric.sublabel}</div>
          )}
        </div>
      ))}
    </div>
  );
}
