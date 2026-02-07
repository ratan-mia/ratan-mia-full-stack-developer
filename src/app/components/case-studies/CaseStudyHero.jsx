'use client';

import { ArrowRight, Code, ExternalLink, Monitor, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';

/**
 * Reusable Case Study Hero Section Component
 * Following AutoTrader's enhanced design with decorative elements and modern aesthetics
 * 
 * @param {Object} props - Component props
 * @param {string} props.category - Project category (e.g., "B2B Trading Platform")
 * @param {Object} props.categoryIcon - Lucide icon component for category badge
 * @param {string} props.title - Main project title
 * @param {string} props.subtitle - Optional subtitle (appears below title with decorative line)
 * @param {string} props.description - Project description
 * @param {Array<string>} props.techStack - Array of technology names
 * @param {string} props.liveUrl - URL to live project
 * @param {string} props.heroImage - Path to hero image
 * @param {string} props.imageAlt - Alt text for hero image
 * @param {string} props.badge1Text - Text for top-left floating badge
 * @param {Object} props.badge1Icon - Lucide icon component for first badge
 * @param {string} props.badge2Text - Text for bottom-right floating badge
 * @param {Object} props.badge2Icon - Lucide icon component for second badge
 */
export default function CaseStudyHero({
  category = 'Project',
  categoryIcon: CategoryIcon = Monitor,
  title,
  subtitle,
  description,
  techStack = [],
  liveUrl,
  heroImage,
  imageAlt = 'Project Preview',
  badge1Text = 'Live Platform',
  badge1Icon: Badge1Icon = TrendingUp,
  badge2Text = 'Production Ready',
  badge2Icon: Badge2Icon = Zap,
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-accent-lime">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-black rounded-full border-2 border-black shadow-lg">
              <CategoryIcon className="w-4 h-4 text-accent-lime" />
              <span className="text-sm font-extrabold text-accent-lime uppercase tracking-wider">{category}</span>
            </div>

            {/* Title with Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-[1.05]">
                {title}
              </h1>
              {subtitle && (
                <div className="flex items-center gap-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black/60">
                    {subtitle}
                  </h2>
                  <div className="flex-1 h-1 bg-black/20 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-black/90 font-semibold leading-relaxed max-w-xl">
              {description}
            </p>
            
            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-md">
                    <Code className="w-4 h-4 text-accent-lime" />
                  </div>
                  <span className="text-sm font-extrabold text-black uppercase tracking-wider">Technology Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm shadow-lg hover:scale-105 hover:shadow-xl transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            {liveUrl && (
              <div className="pt-2">
                <a 
                  href={liveUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold text-base hover:shadow-2xl transition-all duration-300 hover:scale-105 group shadow-xl border-2 border-black"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  View Live Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </div>

          {/* Right Image - Enhanced */}
          <div className="relative lg:h-full flex items-center">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-black/10 rounded-3xl blur-2xl scale-95"></div>
            
            <div className="relative w-full">
              {/* Image Container with Border */}
              <div className="relative bg-black/10 backdrop-blur-sm rounded-3xl p-1 border-2 border-black/20">
                <div className="bg-white rounded-2xl p-3 shadow-2xl">
                  <div className="relative h-[450px] lg:h-[500px] rounded-xl overflow-hidden border-2 border-gray-100">
                    <Image
                      src={heroImage}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Badges */}
              {badge1Text && (
                <div className="absolute -top-4 -left-4 px-5 py-3 bg-black text-accent-lime rounded-xl font-extrabold shadow-2xl flex items-center gap-2 border-2 border-black">
                  <Badge1Icon className="w-5 h-5" />
                  <span className="text-sm">{badge1Text}</span>
                </div>
              )}
              
              {badge2Text && (
                <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-black text-accent-lime rounded-xl font-extrabold shadow-2xl flex items-center gap-2 border-2 border-black">
                  <Badge2Icon className="w-5 h-5" />
                  <span className="text-sm">{badge2Text}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
