'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Image from 'next/image';

/**
 * Reusable Case Study About/Overview Section Component
 * Following design guidelines with bold typography, strategic lime accents, and smooth animations
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title (default: "About the Project")
 * @param {Array<string>} props.paragraphs - Array of paragraph texts
 * @param {string} props.image - Optional image path
 * @param {string} props.imageAlt - Alt text for image
 * @param {string} props.bgColor - Background color class (default: "bg-gray-50")
 * @param {string} props.id - Section ID for navigation (default: "overview")
 */
export default function CaseStudyAbout({
  title = "About the Project",
  paragraphs = [],
  image,
  imageAlt = "Project Overview",
  bgColor = "bg-gray-50",
  id = "overview"
}) {
  return (
    <section id={id} className={`relative py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="max-w-7xl">
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6"
            >
              <FileText className="w-4 h-4" />
              <span className="uppercase tracking-wider">PROJECT OVERVIEW</span>
            </motion.div>

            {/* Title with Accent */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight"
            >
              {title.split(' ').map((word, idx) => (
                idx === title.split(' ').length - 1 ? (
                  <span key={idx} className="text-black"> {word}</span>
                ) : (
                  <span key={idx}>{word} </span>
                )
              ))}
            </motion.h2>

            {/* Paragraphs with Stagger Animation */}
            <div className="space-y-6 max-w-5xl">
              {paragraphs.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
          
          {/* Image with Enhanced Styling */}
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full"
            >
              {/* Decorative border */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/20 to-transparent rounded-3xl blur-xl"></div>
              
              <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 bg-white p-2 md:p-3">
                <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Decorative accent dot */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-lime/30 rounded-full blur-2xl"></div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
