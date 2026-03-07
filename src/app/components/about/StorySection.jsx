'use client';

import { motion } from 'framer-motion';

const stories = [
  {
    num: '01',
    title: "The Beginning",
    year: "2015",
    highlight: "First E-commerce Site",
    content: "Started my journey in web development during college. Built my first e-commerce website and discovered my passion for creating digital solutions that solve real problems.",
    achievement: "Learned PHP, MySQL & JavaScript",
    accent: '#c8f542',
    tag: 'bg-accent-lime',
    tagText: 'text-black',
  },
  {
    num: '02',
    title: "Professional Growth",
    year: "2016–2020",
    highlight: "50+ Projects Delivered",
    content: "Worked with 30+ clients ranging from startups to established brands. Delivered mobile apps, SaaS platforms, and enterprise systems across multiple industries.",
    achievement: "Mastered React, React Native & Node.js",
    accent: '#ff6b35',
    tag: 'bg-accent-orange',
    tagText: 'text-white',
  },
  {
    num: '03',
    title: "Current Focus",
    year: "2021–Now",
    highlight: "Building Products",
    content: "Building innovative products like Gamify, TurfLet, and automotive ecosystems. Focused on React Native, Next.js, and scalable cloud architectures.",
    achievement: "Leading full-stack development",
    accent: '#111111',
    tag: 'bg-black',
    tagText: 'text-white',
  },
];

export default function StorySection() {
  return (
    <section className="relative bg-white overflow-hidden py-28 md:py-40 px-4 md:px-8 lg:px-12">

      {/* Faint diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Top: heading left + intro right */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5 bg-black" />
              <span className="text-black text-sm font-extrabold tracking-[0.25em] uppercase">My Journey</span>
            </div>
            <h2 className="font-extrabold leading-[0.85] tracking-tighter">
              <span className="block text-5xl md:text-7xl lg:text-8xl text-black">THE STORY</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-black/15">BEHIND</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-black">THE CODE.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-sm lg:pb-4"
          >
            From a college experiment to enterprise products trusted by 50K+ users — here's how it happened.
          </motion.p>
        </div>

        {/* Cards — alternating layout */}
        <div className="flex flex-col gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group relative flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} rounded-3xl overflow-hidden border border-black/8 hover:border-black/20 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Colored accent panel */}
              <div
                className="relative lg:w-72 xl:w-80 shrink-0 min-h-35 lg:min-h-0 flex flex-col items-start justify-between p-8 overflow-hidden"
                style={{ backgroundColor: story.accent }}
              >
                {/* Big number */}
                <span
                  className="absolute -bottom-4 -right-2 text-[8rem] font-extrabold leading-none select-none pointer-events-none text-white/10"
                  aria-hidden="true"
                >
                  {story.num}
                </span>
                <div>
                  <p className="text-white/60 text-xs font-extrabold tracking-[0.2em] uppercase mb-2">{story.year}</p>
                  <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-extrabold tracking-wide uppercase bg-white/20 text-white">
                    {story.highlight}
                  </span>
                </div>
                <div className="w-8 h-0.5 bg-white/40 mt-auto" />
              </div>

              {/* Content panel */}
              <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black tracking-tight mb-4">
                    {story.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-black/15 mb-6" />
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
                    {story.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-black/8">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-black"
                    style={{ backgroundColor: story.accent, color: story.accent === '#111111' ? '#fff' : '#000' }}
                  >
                    ✓
                  </div>
                  <span className="text-sm font-bold text-gray-700">{story.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

