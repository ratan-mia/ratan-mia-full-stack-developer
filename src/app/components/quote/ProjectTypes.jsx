'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Layout,
  Monitor,
  Package,
  Smartphone,
  Store
} from 'lucide-react';

const ProjectTypes = () => {
  const projectTypes = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native-quality cross-platform mobile applications with React Native and Supabase backend.",
      features: ["iOS & Android", "Real-time Features", "Push Notifications", "Offline Support"],
      price: "Starting at $8,000",
      timeline: "8-12 weeks"
    },
    {
      icon: Store,
      title: "E-commerce Stores",
      description: "Complete online stores with payment processing, inventory management, and admin dashboard.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Admin Panel"],
      price: "Starting at $4,500",
      timeline: "6-8 weeks"
    },
    {
      icon: Globe,
      title: "Business Websites",
      description: "Professional corporate websites that establish credibility and drive conversions.",
      features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Analytics"],
      price: "Starting at $2,500",
      timeline: "3-4 weeks"
    },
    {
      icon: Layout,
      title: "SaaS Applications",
      description: "Scalable software-as-a-service platforms with user management and subscription billing.",
      features: ["User Authentication", "Subscription Billing", "API Integration", "Real-time Updates"],
      price: "Starting at $6,000",
      timeline: "8-10 weeks"
    },
    {
      icon: Monitor,
      title: "Landing Pages",
      description: "High-converting landing pages designed to maximize your marketing campaigns.",
      features: ["A/B Testing Ready", "Form Integration", "Speed Optimized", "Mobile First"],
      price: "Starting at $1,500",
      timeline: "1-2 weeks"
    },
    {
      icon: Database,
      title: "REST APIs",
      description: "Robust and scalable REST APIs for mobile apps and third-party integrations.",
      features: ["Authentication", "Rate Limiting", "Documentation", "Testing Suite"],
      price: "Starting at $3,000",
      timeline: "4-6 weeks"
    }
  ];

  return (
    <section className="relative w-full py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              PROJECT TYPES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Can We <span className="text-accent-lime">Build Together?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From mobile apps to web applications, I've got you covered. 
              Choose your project type and get a detailed quote tailored to your needs.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-accent-lime/50 hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent-lime/20 flex items-center justify-center mb-4">
                  <project.icon className="w-7 h-7 text-black" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold">{project.price}</div>
                      <div className="text-xs text-gray-500">{project.timeline}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-accent-lime rounded-2xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              Don't See Your Project Type?
            </h3>
            <p className="text-black/80 mb-6 max-w-2xl mx-auto">
              I specialize in custom solutions. Let's discuss your unique requirements.
            </p>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-accent-lime font-bold rounded-xl hover:shadow-lg transition-all"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTypes;