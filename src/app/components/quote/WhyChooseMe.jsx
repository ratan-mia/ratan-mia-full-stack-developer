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
      description: "Quick turnaround without compromising quality. Most projects completed 20% faster than industry average with agile methodology.",
      stats: "20% Faster"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Clean, scalable code following industry best practices. Every project is thoroughly tested and optimized before delivery.",
      stats: "5-Star Quality"
    },
    {
      icon: Shield,
      title: "100% Guarantee",
      description: "Full satisfaction guarantee with unlimited revisions until you're completely happy with the result. Your success is guaranteed.",
      stats: "100% Satisfaction"
    },
    {
      icon: Clock,
      title: "24h Response",
      description: "Get your detailed quote within 24 hours. Direct communication throughout the project with quick response times.",
      stats: "24-Hour Quote"
    },
    {
      icon: Users,
      title: "Personal Support",
      description: "Direct communication with me throughout the project. No middlemen, just clear and honest communication every step.",
      stats: "1-on-1 Support"
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "Successfully delivered projects to clients in 25+ countries with diverse requirements and cultural understanding.",
      stats: "25+ Countries"
    }
  ];

  return (
    <section className="relative w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              WHY CHOOSE ME
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Success Is <span className="text-accent-lime">My Priority</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I don't just build websites and apps – I create digital experiences that drive real results. 
              Here's why 150+ clients have trusted me with their most important projects.
            </p>
          </div>

          {/* Main Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-accent-lime text-black hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Stats Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-black/15">
                    <reason.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold">
                    {reason.stats}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-extrabold mb-4">{reason.title}</h3>

                {/* Description */}
                <p className="text-black/80 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
