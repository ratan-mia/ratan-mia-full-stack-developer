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
                className="p-8 rounded-3xl bg-white border-2 border-gray-200 hover:border-accent-lime hover:shadow-2xl transition-all hover:scale-105 duration-300"
              >
                {/* Step Number Badge and Duration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="px-4 py-2 bg-accent-lime rounded-full">
                    <span className="text-black text-sm font-extrabold">STEP {index + 1}</span>
                  </div>
                  <div className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                    {step.duration}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent-lime flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-black" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
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
