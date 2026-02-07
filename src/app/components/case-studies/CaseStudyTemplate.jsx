'use client';

import { ArrowRight, Check, Facebook, Linkedin, Share2, Twitter } from 'lucide-react';
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
        <aside className={`hidden lg:block fixed left-8 top-32 w-72 z-30 transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="space-y-6">
            {/* Project Details Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 shadow-md hover:shadow-lg transition-all duration-300">
              {/* Company */}
              <div>
                <h3 className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
                  COMPANY
                </h3>
                <p className="text-xl font-bold text-black">{project.company}</p>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Category */}
              <div>
                <h3 className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
                  CATEGORY
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">{project.category}</p>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Live View */}
              {project.liveUrl && (
                <>
                  <div>
                    <h3 className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
                      LIVE VIEW
                    </h3>
                    <a 
                      href={project.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-black bg-accent-lime hover:bg-accent-lime/80 transition-all duration-300 rounded-xl hover:shadow-lg hover:scale-105 group"
                    >
                      Visit Website
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </>
              )}

              {/* Timeline */}
              {project.timeline && (
                <>
                  <div>
                    <h3 className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
                      TIMELINE
                    </h3>
                    <p className="text-xl font-bold text-black">{project.timeline}</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                </>
              )}

              {/* Services Provided */}
              {project.services && project.services.length > 0 && (
                <>
                  <div>
                    <h3 className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wide">
                      SERVICES WE PROVIDED
                    </h3>
                    <div className="space-y-2">
                      {project.services.map((service, idx) => (
                        <div key={idx} className="px-3 py-2 bg-gray-50 hover:bg-accent-lime/20 border border-gray-200 hover:border-accent-lime rounded-lg text-xs font-semibold text-black transition-all">
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
                <h3 className="text-sm font-bold text-black mb-3">
                  Share this Case Study:
                </h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-10 h-10 bg-accent-lime hover:bg-accent-lime/80 text-black border-0 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-md"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out this amazing case study!`, '_blank')}
                    className="w-10 h-10 bg-accent-lime hover:bg-accent-lime/80 text-black border-0 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-md"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-10 h-10 bg-accent-lime hover:bg-accent-lime/80 text-black border-0 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-md"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Check out this case study! ' + window.location.href)}`, '_blank')}
                    className="w-10 h-10 bg-accent-lime hover:bg-accent-lime/80 text-black border-0 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-md"
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
        <div className="lg:ml-80 lg:mr-8">
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
 * Use centered={true} for Challenge, Solution, Tech Stack, Results, Impact sections
 * centered={false} or omit for Overview and other sections
 */
export function CaseStudySection({ id, label, icon: Icon, title, description, bgColor = 'bg-white', children, className = '', centered = false }) {
  return (
    <section id={id} className={`py-20 px-4 md:px-6 lg:px-8 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(label || title) && (
          <div className={`${centered ? 'text-center mb-16' : 'mb-12'}`}>
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
              <p className={`text-lg text-gray-600 leading-relaxed ${centered ? 'max-w-4xl mx-auto' : ''}`}>
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
 * Feature Grid Component - For cards layout
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
 * Image + Content Grid - Rounded Container (TurfNations Pattern #3)
 * Use INSIDE CaseStudySection with centered header
 * @param {string} containerClass - Default: 'bg-gray-50 rounded-3xl overflow-hidden mb-16'
 */
export function ImageContentGrid({ 
  image, 
  imageAlt, 
  badge, 
  badgeIcon: BadgeIcon, 
  title, 
  description, 
  features = [], 
  imagePosition = 'left',
  containerClass = 'bg-gray-50 rounded-3xl overflow-hidden mb-16'
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-0 items-center ${containerClass}`}>
      <div className={`w-full flex items-center justify-center p-8 lg:p-12 ${imagePosition === 'right' ? 'order-1 lg:order-2' : ''}`}>
        <Image
          src={image}
          alt={imageAlt}
          width={2000}
          height={2000}
          className="w-full h-auto max-h-[600px] object-contain"
        />
      </div>

      <div className={`p-8 md:p-12 ${imagePosition === 'right' ? 'order-2 lg:order-1' : ''}`}>
        {badge && BadgeIcon && (
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
            <BadgeIcon className="w-4 h-4" />
            {badge}
          </div>
        )}
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{title}</h3>
        <p className="text-lg text-gray-600 mb-8">
          {description}
        </p>

        {features.length > 0 && (
          <div className="space-y-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                    {Icon && <Icon className="w-5 h-5 text-black" />}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Full Width Image + Content (TurfNations Pattern #4)
 * No rounded container, direct grid split
 * Uses larger icons (w-12 h-12) and titles (text-4xl md:text-5xl)
 */
export function FullWidthImageContent({
  image,
  imageAlt,
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  features = [],
  imagePosition = 'left',
  bgColor = 'bg-white'
}) {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="grid lg:grid-cols-2 gap-0 items-center">
        <div className={`w-full flex items-center justify-center p-8 lg:p-12 ${imagePosition === 'right' ? 'order-1 lg:order-2' : ''}`}>
          <Image
            src={image}
            alt={imageAlt}
            width={1410}
            height={1182}
            className="w-full h-auto max-h-[700px] object-contain"
          />
        </div>

        <div className={`px-8 md:px-12 lg:px-16 py-12 ${imagePosition === 'right' ? 'order-2 lg:order-1' : ''}`}>
          {badge && BadgeIcon && (
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              <BadgeIcon className="w-4 h-4" />
              {badge}
            </div>
          )}
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {description}
          </p>

          {features.length > 0 && (
            <div className="space-y-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      {Icon && <Icon className="w-6 h-6 text-black" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
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
 * Metrics Grid Component (TurfNations Pattern #7)
 * 4-column grid with lime cards
 */
export function MetricsGrid({ metrics }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {metrics.map((metric, idx) => {
        const Icon = metric.icon;
        return (
          <div key={idx} className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
            {Icon && <Icon className="w-12 h-12 mx-auto mb-4 text-black" />}
            <div className="text-5xl font-extrabold mb-2">{metric.value}</div>
            <p className="text-black/80 font-bold">{metric.label}</p>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Image Showcase Grid (TurfNations Pattern #7)
 * 2-column grid with gray cards
 */
export function ImageShowcaseGrid({ items }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((item, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded-3xl border-2 border-gray-100">
          <h3 className="text-xl font-extrabold mb-4">{item.title}</h3>
          <div className="rounded-xl overflow-hidden mb-4">
            <Image
              src={item.image}
              alt={item.alt}
              width={2000}
              height={2000}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-600">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * Business Impact Cards (TurfNations Pattern #8)
 * Benefits for different user types
 */
export function BusinessImpactCards({ cards }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
          <h3 className="text-2xl font-extrabold mb-6">{card.title}</h3>
          <ul className="space-y-4">
            {card.benefits.map((benefit, benefitIdx) => (
              <li key={benefitIdx} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent-lime rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span className="text-gray-700 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/**
 * Key Achievements Card (TurfNations Pattern #8)
 * Lime background with 3-column stats
 */
export function KeyAchievementsCard({ achievements }) {
  return (
    <div className="bg-accent-lime p-8 rounded-3xl">
      <h3 className="text-2xl font-extrabold mb-6 text-center">Key Achievements</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl font-extrabold mb-2">{achievement.value}</div>
            <p className="text-black/80 font-medium">{achievement.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * CTA Section (TurfNations Pattern #9)
 */
export function CTASection({ title, subtitle, primaryButton, secondaryButton }) {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h2>
        <p className="text-xl text-black/80 mb-10 font-medium">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {primaryButton && (
            <Link
              href={primaryButton.href}
              className="px-10 py-5 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
            >
              {primaryButton.text}
            </Link>
          )}
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="px-10 py-5 border-2 border-black text-black rounded-xl font-extrabold hover:bg-black hover:text-accent-lime transition-all"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Overview Section (TurfNations Pattern #1)
 * Simple text content with optional image below
 */
export function OverviewSection({ title, paragraphs, image, imageAlt }) {
  return (
    <section id="overview" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="max-w-7xl">
            <h2 className="text-4xl font-extrabold mb-6">{title}</h2>
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className={`text-lg text-gray-700 leading-relaxed font-medium ${idx < paragraphs.length - 1 ? 'mb-6' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
          
          {image && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
