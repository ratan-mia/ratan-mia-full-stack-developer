'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Zap
} from 'lucide-react';

const QuoteCTA = () => {
  return (
    <section className="relative w-full py-20 px-4 bg-accent-lime">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-black">
            Ready to Start<br />Your Project?
          </h2>
          <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto font-medium">
            Get your detailed quote within 24 hours. Free consultation, transparent pricing, 
            and no commitment required.
          </p>

          {/* Primary CTA */}
          <div className="mb-12">
            <a
              href="#quote-form"
              className="inline-flex items-center gap-3 px-10 py-5 bg-black text-accent-lime rounded-xl font-extrabold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-6 h-6" />
              Get Your Free Quote Now
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="tel:+8801751010966"
              className="flex items-center justify-center gap-2 p-4 bg-black/10 rounded-xl hover:bg-black hover:text-accent-lime transition-all font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/8801751010966"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-black/10 rounded-xl hover:bg-black hover:text-accent-lime transition-all font-bold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:shorifull@gmail.com"
              className="flex items-center justify-center gap-2 p-4 bg-black/10 rounded-xl hover:bg-black hover:text-accent-lime transition-all font-bold"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-bold text-black/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/40 rounded-full"></div>
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/40 rounded-full"></div>
              <span>Free Revisions Included</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/40 rounded-full"></div>
              <span>24-Hour Quote Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCTA;