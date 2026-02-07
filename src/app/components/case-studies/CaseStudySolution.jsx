'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

/**
 * Reusable Case Study Solution Section Component
 * Following design guidelines with bold typography, strategic lime accents, and smooth animations
 * Serves as a wrapper for solution content sections
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Section ID for navigation (default: "solution")
 * @param {string} props.label - Section badge label (default: "OUR SOLUTIONS")
 * @param {Object} props.icon - Lucide icon component (default: CheckCircle)
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {string} props.bgColor - Background color class (default: "bg-white")
 * @param {boolean} props.centered - Whether to center align header (default: true)
 * @param {React.ReactNode} props.children - Solution content (ImageContentGrid, FullWidthImageContent, etc.)
 */
export default function CaseStudySolution({
  id = "solution",
  label = "OUR SOLUTIONS",
  icon: Icon = CheckCircle,
  title = "Our Approach",
  description,
  bgColor = "bg-white",
  centered = true,
  children
}) {
  return (
    <section id={id} className={`relative py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 ${bgColor} overflow-hidden`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-lime/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-16 ${centered ? 'text-center' : ''}`}
        >
          {/* Section Badge with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-accent-lime text-black rounded-full text-sm font-bold mb-6 shadow-lg ${centered ? '' : ''}`}
          >
            <Icon className="w-5 h-5 text-black" />
            <span className="uppercase tracking-wider">{label}</span>
          </motion.div>

          {/* Title with Bold Typography */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
          >
            {title}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg md:text-xl text-gray-600 leading-relaxed ${centered ? 'max-w-4xl mx-auto' : 'max-w-5xl'}`}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Solution Content */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {children}
        </div>
      </div>
    </section>
  );
}
