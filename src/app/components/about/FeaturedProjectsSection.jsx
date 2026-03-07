'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    title: "Chery Bangladesh App",
    tag: "Automotive",
    description: "Complete automotive ecosystem with 50K+ users — mobile app, dealer portal, and booking system built end-to-end.",
    image: "/images/projects/cherybd-mockup.png",
    link: "/case-studies/chery-bangladesh",
    stats: [{ val: '50K+', label: 'Users' }, { val: '4.8★', label: 'Rating' }],
    accent: '#c8f542',
  },
  {
    num: '02',
    title: "TurfLet Platform",
    tag: "Sports Tech",
    description: "Sports venue booking system powering real-time slot management, payments, and owner dashboards at scale.",
    image: "/images/projects/turflet/www.turflet.app.png",
    link: "/case-studies/TurfLet-booking",
    stats: [{ val: '5K+', label: 'Bookings' }, { val: '95%', label: 'Success' }],
    accent: '#ff6b35',
  },
  {
    num: '03',
    title: "Gamify Loyalty",
    tag: "Loyalty & Engagement",
    description: "QR-based gamification platform turning everyday brand interactions into rewards, driving 50K+ scans.",
    image: "/images/projects/pieqr/screenshots/home-screen.jpg",
    link: "/case-studies/gamify",
    stats: [{ val: '8K+', label: 'Users' }, { val: '50K+', label: 'Scans' }],
    accent: '#ffffff',
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="relative bg-black overflow-hidden py-28 md:py-40">
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
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
            <div className="w-8 h-0.5 bg-accent-orange" />
            <span className="text-accent-orange text-sm font-extrabold tracking-[0.25em] uppercase">Featured Work</span>
          </div>
          <h2 className="font-extrabold leading-[0.85] tracking-tighter">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white">PROJECTS</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white/20">I'M PROUD</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-accent-orange">OF.</span>
          </h2>
        </motion.div>

        {/* Project rows */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col lg:flex-row items-stretch border border-white/10 rounded-2xl overflow-hidden hover:border-opacity-60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              style={{ '--accent': project.accent }}
            >
              {/* Image panel */}
              <div className="relative w-full lg:w-72 xl:w-96 h-52 lg:h-auto flex-shrink-0 overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
                {/* Number overlay */}
                <span
                  className="absolute top-4 left-4 text-6xl font-extrabold leading-none select-none"
                  style={{ color: project.accent, opacity: 0.25 }}
                  aria-hidden="true"
                >
                  {project.num}
                </span>
              </div>

              {/* Content panel */}
              <div className="flex-1 bg-black p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-lg"
                      style={{ backgroundColor: project.accent + '20', color: project.accent }}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 group-hover:text-opacity-90">
                    {project.title}
                  </h3>
                  <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: project.accent + '60' }} />
                  <p className="text-white/50 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Stats + CTA row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="flex gap-6">
                    {project.stats.map((s, j) => (
                      <div key={j}>
                        <div className="text-2xl font-extrabold" style={{ color: project.accent }}>{s.val}</div>
                        <div className="text-xs text-white/40 font-bold uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-extrabold group-hover:gap-4 transition-all duration-300"
                    style={{ color: project.accent }}
                  >
                    View Case Study <span>→</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
