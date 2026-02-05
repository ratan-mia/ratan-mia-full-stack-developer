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
    <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-lime/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-lime text-black rounded-full text-xs font-extrabold mb-6 uppercase tracking-widest"
            >
              <Package className="w-4 h-4" />
              <span>Project Types</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-header text-black mb-6"
            >
              What Can We Build<br />
              <span className="relative">
                Together?
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <motion.path
                    d="M0 6 Q150 12 300 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-accent-lime"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                </svg>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="body-text text-gray-700 max-w-2xl mx-auto"
            >
              From mobile apps to web applications, I've got you covered. 
              Choose your project type and get a detailed quote.
            </motion.p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projectTypes.map((project, index) => {
              const isHighlighted = index === 0 || index === 3;
              
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative group cursor-pointer ${
                    isHighlighted ? 'md:col-span-1' : ''
                  }`}
                >
                  <div className={`relative p-8 rounded-3xl h-full transition-all duration-500 ${
                    isHighlighted
                      ? 'bg-black text-white border-4 border-accent-lime shadow-2xl'
                      : 'bg-white border-2 border-gray-200 hover:border-black shadow-lg hover:shadow-2xl'
                  }`}>
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isHighlighted ? 'bg-gradient-to-br from-accent-lime/10 to-transparent' : 'bg-gradient-to-br from-gray-50 to-transparent'
                    }`}></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with Background */}
                      <motion.div 
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                          isHighlighted ? 'bg-accent-lime' : 'bg-accent-lime'
                        } group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 15 }}
                      >
                        <project.icon className="w-8 h-8 text-black" />
                        {/* Badge Corner */}
                        {isHighlighted && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <span className="text-xs font-extrabold text-black">★</span>
                          </div>
                        )}
                      </motion.div>

                      {/* Title */}
                      <h3 className={`text-2xl lg:text-3xl font-extrabold mb-3 ${
                        isHighlighted ? 'text-white' : 'text-black'
                      }`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm leading-relaxed mb-6 ${
                        isHighlighted ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-6">
                        {project.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="flex items-center gap-3 text-sm"
                          >
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                              isHighlighted ? 'bg-accent-lime/20' : 'bg-accent-lime/20'
                            }`}>
                              <div className="w-2 h-2 bg-accent-lime rounded-full"></div>
                            </div>
                            <span className={isHighlighted ? 'text-white/90' : 'text-gray-700'}>
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Pricing Section */}
                      <div className={`pt-6 border-t ${
                        isHighlighted ? 'border-white/20' : 'border-gray-200'
                      }`}>
                        <div className="flex items-end justify-between">
                          <div>
                            <div className={`text-xs uppercase tracking-wider mb-1 ${
                              isHighlighted ? 'text-accent-lime' : 'text-gray-500'
                            }`}>
                              Starting Price
                            </div>
                            <div className={`text-2xl font-extrabold ${
                              isHighlighted ? 'text-accent-lime' : 'text-black'
                            }`}>
                              {project.price}
                            </div>
                            <div className={`text-xs mt-1 ${
                              isHighlighted ? 'text-white/60' : 'text-gray-500'
                            }`}>
                              ⏱ {project.timeline}
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              isHighlighted ? 'bg-accent-lime' : 'bg-black group-hover:bg-accent-lime'
                            } transition-colors`}
                          >
                            <ArrowRight className={`w-6 h-6 ${
                              isHighlighted ? 'text-black' : 'text-white group-hover:text-black'
                            } transition-colors`} />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className={`absolute top-6 right-6 w-20 h-20 rounded-full ${
                      isHighlighted ? 'bg-accent-lime/5' : 'bg-gray-100 group-hover:bg-accent-lime/10'
                    } -z-0 transition-colors`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Custom Project CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative overflow-hidden"
          >
            <div className="relative p-10 lg:p-12 bg-gradient-to-br from-accent-lime to-yellow-300 rounded-3xl text-center">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,.1) 20px, rgba(0,0,0,.1) 40px)',
                }}></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block p-4 bg-black/10 rounded-2xl mb-6"
                >
                  <Code className="w-10 h-10 text-black" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">
                  Don't See Your Project Type?
                </h3>
                <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto font-medium">
                  I specialize in custom solutions tailored to your unique requirements. 
                  Let's discuss what you need.
                </p>
                <motion.a
                  href="#quote-form"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-black text-accent-lime font-extrabold text-lg rounded-2xl hover:shadow-2xl transition-all"
                >
                  <span>Discuss Custom Project</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTypes;