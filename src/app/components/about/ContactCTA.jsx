'use client';

import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="relative bg-accent-lime overflow-hidden py-28 md:py-40 px-4 md:px-8 lg:px-12">

      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <span className="text-[22vw] font-extrabold text-black/[0.05] leading-none tracking-tighter whitespace-nowrap">
          LET'S GO
        </span>
      </div>

      {/* Decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-black/10 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-black/10 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-0.5 bg-black" />
            <span className="text-black text-sm font-extrabold tracking-[0.25em] uppercase">Let's Connect</span>
          </div>

          {/* Headline */}
          <h2 className="font-extrabold leading-[0.85] tracking-tighter mb-12">
            <span className="block text-5xl md:text-7xl lg:text-[8rem] text-black">READY TO</span>
            <span className="block text-5xl md:text-7xl lg:text-[8rem] text-black/30">BUILD</span>
            <span className="block text-5xl md:text-7xl lg:text-[8rem] text-black">SOMETHING?</span>
          </h2>

          {/* Description + buttons side by side on large screens */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">
            <p className="text-xl md:text-2xl text-black/70 font-medium leading-relaxed max-w-xl">
              Whether you need a mobile app, web platform, or a custom solution — let's discuss how I can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:ml-auto flex-shrink-0">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-accent-lime font-extrabold rounded-xl hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 hover:scale-105 text-sm tracking-wide"
              >
                Get In Touch →
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-black/30 text-black font-extrabold rounded-xl hover:border-black hover:bg-black/5 transition-all duration-300 text-sm tracking-wide"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
