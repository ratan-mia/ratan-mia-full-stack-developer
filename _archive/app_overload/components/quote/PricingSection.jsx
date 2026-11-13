
'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: 'Starting from',
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Responsive Design',
        'Basic SEO Setup',
        'Contact Forms',
        'Social Media Integration',
        'Basic Analytics',
        '30 Days Support'
      ],
      color: 'blue',
      popular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: 'Starting from',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Everything in Starter',
        'Content Management System',
        'E-commerce Integration',
        'Advanced SEO',
        'Custom Functionality',
        'Performance Optimization',
        '90 Days Support'
      ],
      color: 'purple',
      popular: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: 'Starting from',
      description: 'For large-scale applications and complex requirements',
      features: [
        'Everything in Professional',
        'Custom Backend Development',
        'Third-party Integrations',
        'Advanced Security',
        'Scalable Architecture',
        'Database Design',
        '6 Months Support'
      ],
      color: 'green',
      popular: false,
      buttonText: 'Contact Sales'
    }
  ];

  const handleGetStarted = (tier) => {
    // Scroll to quote form and potentially pre-fill with tier info
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
      quoteForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            Transparent Pricing
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Clear, upfront pricing with no hidden fees. Choose the package that fits your needs and budget.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                tier.popular 
                  ? 'border-2 border-purple-500 scale-105' 
                  : 'border border-slate-200'
              } hover:shadow-xl transition-all duration-300`}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: tier.popular ? 1.05 : 1.02, y: -5 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-slate-800 mb-1">{tier.price}</div>
                <div className="text-slate-500 text-sm">{tier.period}</div>
                <p className="text-slate-600 mt-4 leading-relaxed">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => handleGetStarted(tier)}
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tier.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Pricing Info */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Every project is unique. If none of these packages fit your needs perfectly, 
              let's discuss a custom solution tailored specifically to your requirements and budget.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-600">Custom Pricing</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-600">Flexible Payment Terms</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-600">Extended Support Options</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;