'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Zap } from 'lucide-react';

/**
 * Reusable Case Study Challenge/Requirements Section Component
 * Following design guidelines with bold typography, strategic lime accents, and smooth animations
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Section ID for navigation (default: "challenge")
 * @param {string} props.label - Section badge label (default: "REQUIREMENTS & CHALLENGES")
 * @param {Object} props.icon - Lucide icon component (default: Zap)
 * @param {string} props.title - Section title
 * @param {React.ReactNode} props.description - Description text (can include JSX for bold highlights)
 * @param {Array<Object>} props.challenges - Optional array of challenge objects with title and description
 * @param {string} props.bgColor - Background color class (default: "bg-gray-50")
 * @param {boolean} props.centered - Whether to center align content (default: true)
 */
export default function CaseStudyChallenge({
  id = "challenge",
  label = "REQUIREMENTS & CHALLENGES",
  icon: Icon = Zap,
  title = "Complex Requirements",
  description,
  challenges = [],
  bgColor = "bg-gray-50",
  centered = true
}) {
  return (
    <section id={id} className={`relative py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 ${bgColor} overflow-hidden`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-lime/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={centered ? 'text-center' : ''}
        >
          {/* Section Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6 ${centered ? '' : ''}`}
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

          {/* Description with Rich Text Support */}
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-12 ${centered ? 'max-w-4xl mx-auto' : 'max-w-5xl'}`}
            >
              {description}
            </motion.div>
          )}
        </motion.div>

        {/* Challenge Cards Grid (if provided) */}
        {challenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12"
          >
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group relative"
              >
                {/* Card Background with Hover Effect */}
                <div className="absolute inset-0 bg-white rounded-3xl border-2 border-gray-200 group-hover:border-accent-lime/50 transition-all duration-300 group-hover:shadow-xl"></div>
                
                {/* Card Content */}
                <div className="relative p-6 md:p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-accent-lime/20 group-hover:bg-accent-lime rounded-2xl flex items-center justify-center mb-5 transition-all duration-300">
                    <AlertCircle className="w-7 h-7 text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold mb-3 group-hover:text-accent-lime transition-colors duration-300">
                    {challenge.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent-lime/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
