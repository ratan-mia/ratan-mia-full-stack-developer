'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Target } from 'lucide-react';

const values = [
  {
    num: '01',
    icon: Heart,
    title: "Passion for Craft",
    subtitle: "Love What I Do",
    content: "Every project is an opportunity to create something meaningful. I bring full dedication to every line of code, every design decision, and every user interaction.",
    highlight: "10+ years of passionate coding",
    accent: '#c8f542',
  },
  {
    num: '02',
    icon: Award,
    title: "Excellence Always",
    subtitle: "No Compromise on Quality",
    content: "Quality is non-negotiable. I deliver work that exceeds expectations, follows best practices, and stands the test of time through maintainable, scalable architecture.",
    highlight: "98% client satisfaction rate",
    accent: '#ff6b35',
  },
  {
    num: '03',
    icon: Sparkles,
    title: "Innovation First",
    subtitle: "Stay Ahead of the Curve",
    content: "I embrace cutting-edge technologies and modern approaches — constantly learning and experimenting to deliver exceptional value and future-proof solutions.",
    highlight: "Early adopter of React Native & Next.js",
    accent: '#c8f542',
  },
  {
    num: '04',
    icon: Target,
    title: "Results That Matter",
    subtitle: "Business Impact Focus",
    content: "Success isn't just shipping features — it's creating solutions that drive measurable results, real revenue growth, and genuine user satisfaction.",
    highlight: "50+ successful project launches",
    accent: '#ff6b35',
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative bg-black overflow-hidden py-28 md:py-40">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-accent-lime" />
            <span className="text-accent-lime text-sm font-extrabold tracking-[0.25em] uppercase">Core Values</span>
          </div>
          <h2 className="font-extrabold leading-[0.85] tracking-tighter">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white">WHAT</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white/20">DRIVES</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-accent-lime">ME.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-black p-8 md:p-10 lg:p-12 hover:bg-white/[0.03] transition-colors duration-300 overflow-hidden"
            >
              {/* Watermark number */}
              <span
                className="absolute -right-2 -bottom-4 text-[8rem] font-extrabold leading-none select-none pointer-events-none"
                style={{ color: value.accent, opacity: 0.05 }}
                aria-hidden="true"
              >
                {value.num}
              </span>

              {/* Accent top bar */}
              <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: value.accent }} />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: value.accent + '18' }}
              >
                <value.icon className="w-7 h-7" style={{ color: value.accent }} />
              </div>

              <p className="text-xs font-extrabold tracking-[0.2em] uppercase mb-3" style={{ color: value.accent }}>
                {value.subtitle}
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">
                {value.title}
              </h3>
              <p className="text-white/50 text-base leading-relaxed font-medium mb-8">
                {value.content}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: value.accent }} />
                <span className="text-sm font-bold text-white/60">{value.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
