'use client';

import { motion } from 'framer-motion';
import {
    Award,
    CheckCircle,
    Clock,
    Globe,
    Shield,
    Star,
    Users,
    Zap
} from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround with agile methodology. Projects completed 20% faster than industry average.",
      stats: "20% Faster"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Clean, scalable code following best practices. Thoroughly tested and optimized.",
      stats: "5-Star Quality"
    },
    {
      icon: Shield,
      title: "100% Guarantee",
      description: "Full satisfaction guarantee with unlimited revisions until you're completely happy.",
      stats: "100% Satisfaction"
    },
    {
      icon: Clock,
      title: "24h Response",
      description: "Get your detailed quote within 24 hours. Direct communication throughout.",
      stats: "24-Hour Quote"
    },
    {
      icon: Users,
      title: "Direct Support",
      description: "Work directly with me throughout the project. No middlemen, just clear communication.",
      stats: "1-on-1 Support"
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "Successfully delivered projects to clients in 25+ countries worldwide.",
      stats: "25+ Countries"
    }
  ];

  return (
    <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-accent-lime text-black rounded-full text-xs font-extrabold mb-6 uppercase tracking-wider"
            >
              Why Choose Me
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-header text-black mb-6"
            >
              Your Success Is My Priority
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="body-text text-gray-700 max-w-2xl mx-auto"
            >
              150+ clients have trusted me with their most important projects. 
              Here's what makes working together a success.
            </motion.p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-50 border-2 border-gray-200 hover:border-accent-lime hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon & Stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-accent-lime group-hover:scale-110 transition-transform">
                    <reason.icon className="w-7 h-7 text-black" />
                  </div>
                  <div className="px-3 py-1 bg-black text-accent-lime rounded-lg text-xs font-extrabold">
                    {reason.stats}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-black mb-3 group-hover:text-black transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-base">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
