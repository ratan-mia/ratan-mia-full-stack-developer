'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Code, TrendingUp, Users } from 'lucide-react';
import { useRef } from 'react';

const stats = [
  { value: '50+', label: 'Projects Shipped', icon: Code },
  { value: '35+', label: 'Happy Clients', icon: Users },
  { value: '10+', label: 'Years Active', icon: Award },
  { value: '98%', label: 'Success Rate', icon: TrendingUp },
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Animated lime grid background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(#c8f542 1px, transparent 1px), linear-gradient(90deg, #c8f542 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Large decorative text — background watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span
          className="text-[28vw] font-extrabold text-white/[0.03] leading-none tracking-tighter whitespace-nowrap"
          aria-hidden="true"
        >
          RATAN
        </span>
      </div>

      {/* Floating blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent-lime/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-32 left-[5%] w-56 h-56 rounded-full bg-accent-orange/20 blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-32 w-full">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-0.5 bg-accent-lime" />
            <span className="text-accent-lime text-sm font-extrabold tracking-[0.25em] uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Split-color headline */}
          <motion.div style={{ y: textY }}>
            <h1 className="font-extrabold leading-[0.9] tracking-tighter mb-8">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-6xl md:text-8xl lg:text-[9rem] text-white"
              >
                I BUILD
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="block text-6xl md:text-8xl lg:text-[9rem] text-accent-lime"
              >
                DIGITAL
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-6xl md:text-8xl lg:text-[9rem] text-white/30"
              >
                PRODUCTS.
              </motion.span>
            </h1>
          </motion.div>

          {/* Description + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col lg:flex-row lg:items-end gap-8 mb-20 max-w-6xl"
          >
            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-medium">
              Hey, I'm <span className="text-white font-extrabold">Ratan Mia</span> — a passionate full stack developer
              with <span className="text-accent-lime font-bold">10+ years</span> of experience crafting scalable
              web and mobile applications that drive real business growth.
            </p>
            <div className="flex gap-4 lg:ml-auto flex-shrink-0">
              <a
                href="/portfolio"
                className="inline-flex items-center px-7 py-3.5 bg-accent-lime text-black font-extrabold rounded-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(200,245,66,0.4)] transition-all duration-300 text-sm"
              >
                See My Work →
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center px-7 py-3.5 border-2 border-white/20 text-white font-extrabold rounded-xl hover:border-accent-lime hover:text-accent-lime transition-all duration-300 text-sm"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="flex flex-col items-center justify-center gap-2 py-8 px-6 bg-black hover:bg-white/5 transition-colors group"
              >
                <stat.icon className="w-5 h-5 text-accent-lime mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
}
