import { ArrowRight, Calendar, Settings } from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We start with a detailed discussion about your project requirements, goals, and timeline."
  },
  {
    step: "02",
    title: "Proposal & Planning",
    description: "I create a detailed proposal with timeline, milestones, and technical specifications."
  },
  {
    step: "03",
    title: "Design & Architecture",
    description: "UI/UX design and technical architecture planning before development begins."
  },
  {
    step: "04",
    title: "Development",
    description: "Agile development with regular updates and milestone deliveries."
  },
  {
    step: "05",
    title: "Testing & Launch",
    description: "Thorough testing, deployment, and post-launch support to ensure success."
  }
];

export default function ServicesProcess() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Lime glow orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[300px] h-[300px] bg-accent-lime/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[300px] h-[300px] bg-accent-lime/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent-lime/10 border border-accent-lime/30 text-accent-lime rounded-full text-xs font-extrabold tracking-widest mb-6 uppercase">
              <Settings className="w-3.5 h-3.5" />
              <span>Work Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              HOW I<br />
              <span className="text-accent-lime [-webkit-text-stroke:2px_theme(colors.accent-lime)] [text-stroke:2px_theme(colors.accent-lime)]">WORK.</span>
            </h2>
          </div>
          <p className="text-lg text-white/50 max-w-sm font-medium leading-relaxed lg:text-right lg:pb-4">
            A battle-tested process that delivers on time, on budget, and beyond expectations — every time.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="group relative flex flex-col md:flex-row md:items-center gap-0 border-t border-white/10 hover:border-accent-lime/40 transition-all duration-500 py-6 cursor-default"
            >
              {/* Hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />

              {/* Step number */}
              <div className="relative flex-shrink-0 w-24 md:w-36">
                <span className="text-5xl md:text-7xl font-black text-white/8 group-hover:text-accent-lime/20 transition-colors duration-500 leading-none select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="absolute top-1/2 -translate-y-1/2 left-2 w-3 h-3 bg-accent-lime rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-accent-lime/50" />
              </div>

              {/* Icon bubble */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-lime group-hover:border-accent-lime transition-all duration-300 mr-6 hidden md:flex">
                <Settings className="w-5 h-5 text-white/50 group-hover:text-black transition-colors duration-300" />
              </div>

              {/* Title & Description */}
              <div className="flex-1 md:pr-12">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-accent-lime transition-colors duration-300 mb-1">
                  {step.title}
                </h3>
                <p className="text-base text-white/40 font-medium leading-relaxed group-hover:text-white/60 transition-colors duration-300 max-w-xl">
                  {step.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-lime group-hover:bg-accent-lime transition-all duration-300 hidden md:flex">
                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-black transition-colors duration-300" />
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* CTA strip */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-6 p-7 bg-accent-lime rounded-2xl">
          <div>
            <p className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight leading-tight">
              Ready to start<br />your project?
            </p>
            <p className="text-black/60 font-medium mt-2">Let's build something remarkable together.</p>
          </div>
          <a
            href="#quote"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold text-base hover:scale-105 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            Start the Process
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
