'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500+',
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Responsive Design',
        'Basic SEO Setup',
        'Contact Forms',
        'Social Media Integration',
        'Basic Analytics',
        '30 Days Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500+',
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
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$15,000+',
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
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              TRANSPARENT PRICING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Clear, Upfront <span className="text-accent-lime">Pricing</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              No hidden fees or surprise charges. Choose the package that fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 transition-all ${
                  tier.popular
                    ? 'border-accent-lime bg-accent-lime/5 scale-105'
                    : 'border-gray-200 bg-white hover:border-accent-lime/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black text-accent-lime px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-extrabold mb-1">{tier.price}</div>
                  <p className="text-gray-600 text-sm mt-3">{tier.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-lime flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#quote-form"
                  className={`block w-full py-3 px-6 rounded-xl font-bold text-center transition-all ${
                    tier.popular
                      ? 'bg-black text-accent-lime hover:shadow-lg'
                      : 'bg-accent-lime text-black hover:bg-black hover:text-accent-lime'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-accent-lime rounded-2xl text-center border-2 border-black/10"
          >
            <h3 className="text-2xl font-bold mb-3 text-black">Need a Custom Solution?</h3>
            <p className="text-black/80 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss a custom solution tailored to your requirements and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-black font-medium">Custom Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-black font-medium">Flexible Payment Terms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-black font-medium">Extended Support Options</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;