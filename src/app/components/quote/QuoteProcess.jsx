'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  FileText,
  MessageCircle,
  Rocket,
  Settings
} from 'lucide-react';

const QuoteProcess = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description: "Free 30-minute consultation to discuss your project requirements, goals, and vision.",
      duration: "30 min"
    },
    {
      icon: FileText,
      title: "Detailed Quote",
      description: "Comprehensive quote with transparent pricing, clear timeline, and detailed specifications.",
      duration: "24 hours"
    },
    {
      icon: CheckCircle,
      title: "Agreement & Kickoff",
      description: "Contract signing, payment processing, and project workspace setup to begin development.",
      duration: "Same day"
    },
    {
      icon: Settings,
      title: "Development Phase",
      description: "Agile development with regular updates, demo sessions, and continuous feedback integration.",
      duration: "As scheduled"
    },
    {
      icon: Rocket,
      title: "Delivery & Launch",
      description: "Final testing, deployment, launch support, and comprehensive documentation handover.",
      duration: "1-2 days"
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
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple <span className="text-accent-lime">5-Step Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From initial consultation to final delivery, here's how we'll work together to bring your project to life.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-accent-lime/50 hover:shadow-lg transition-all"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-lime/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {step.duration}
                  </div>
                </div>

                {/* Number */}
                <div className="text-accent-lime text-sm font-extrabold mb-2">
                  STEP {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteProcess;
