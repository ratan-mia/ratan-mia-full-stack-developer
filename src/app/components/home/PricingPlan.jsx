'use client';

import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { useRef } from 'react';

// --- Reusable Pricing Card Component ---
const PricingCard = ({ plan, index, inView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.2 + index * 0.1 
      }
    }
  };

  const isMonthly = plan.price.includes('/mo');
  const priceValue = isMonthly ? plan.price.replace('/mo', '') : plan.price;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-gray-100 p-10 rounded-lg text-left h-full flex flex-col group border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold text-black mb-2">{plan.title}</h3>
      <div className="mb-6">
        {!isMonthly && <span className="text-sm text-gray-500">Starting from</span>}
        <span className="text-6xl font-extrabold text-black tracking-tighter">{priceValue}</span>
        {isMonthly && <span className="text-2xl font-bold text-gray-500">/mo</span>}
      </div>
      <p className="text-gray-600 mb-8 flex-grow">{plan.description}</p>
      
      <ul className="space-y-4 mb-10">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-black flex-shrink-0" />
            <span className="text-gray-800">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a href="#quote" className="w-full bg-black text-white font-bold py-4 rounded-lg text-center mt-auto hover:bg-gray-800 transition-colors duration-300">
        CHOOSE THIS PLAN
      </a>
    </motion.div>
  );
};


// --- MAIN PRICING PLANS COMPONENT ---
const PricingPlans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Using your full service data mapped to the pricing plan structure
  const pricingPlans = [
    {
      title: 'WordPress Development',
      price: '$1,500',
      description: "Custom WordPress solutions including themes, plugins, and complete CMS implementations with advanced functionality.",
      features: [
        "Custom Theme Development",
        "Plugin Development & Customization",
        "Performance Optimization",
        "Security Hardening & Maintenance",
        "Gutenberg Block Development"
      ],
    },
    {
      title: 'Full Stack Web Development',
      price: '$2,500',
      description: "End-to-end web applications using cutting-edge technologies like React.js, Next.js, and Laravel.",
      features: [
        "Responsive & Mobile-First Design",
        "RESTful API Development", 
        "Database Architecture",
        "Performance Optimization",
        "Progressive Web App (PWA)"
      ],
    },
    {
      title: 'E-commerce Solutions',
      price: '$4,000',
      description: "High-converting online stores with advanced features, secure payments, and inventory management.",
      features: [
        "Custom E-commerce Development",
        "Shopify & WooCommerce Expertise",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Advanced Analytics & Reporting"
      ],
    },
    {
      title: 'DevOps & Cloud Solutions',
      price: '$1,200/mo',
      description: "Complete IT infrastructure management, cloud deployment, and automated CI/CD pipelines for scalable applications.",
      features: [
        "AWS/Digital Ocean Cloud Setup",
        "Docker Containerization",
        "CI/CD Pipeline Implementation",
        "Server Management & Monitoring",
        "Database Administration & Backup"
      ],
    },
    {
      title: 'Performance Optimization',
      price: '$800',
      description: "Comprehensive speed optimization for existing websites using advanced techniques and modern best practices.",
      features: [
        "Core Web Vitals Optimization",
        "Database Query Optimization",
        "Image Compression & WebP",
        "Code Splitting & Lazy Loading",
        "CDN & Caching Implementation"
      ],
    },
    {
      title: 'AI Integration & Automation',
      price: '$3,000',
      description: "Cutting-edge AI solutions including chatbots, natural language processing, and intelligent automation.",
      features: [
        "OpenAI GPT Integration",
        "Custom Chatbot Development",
        "Voice Recognition & Text-to-Speech",
        "Natural Language Processing",
        "Automated Content Generation"
      ],
    }
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-white text-black" id="services">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Plans for Every Project
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose a plan that fits your needs, from personal websites to enterprise-level applications. Every plan is backed by my commitment to quality and success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              plan={plan}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
