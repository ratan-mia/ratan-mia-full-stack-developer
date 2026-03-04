import Contact from '@/components/home/Contact';
import ClientTestimonials from '@/components/portfolio/ClientTestimonials';
import ProjectFilters from '@/components/portfolio/ProjectFilters';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import TechStack from '@/components/portfolio/TechStack';
import { ArrowRight, Briefcase, Code2, Globe, Plus, Smartphone, Zap } from 'lucide-react';

export const metadata = {
  title: 'Portfolio - Ratan Mia | Mobile & Web Development Projects',
  description: 'Explore my portfolio of mobile app and web development projects. React Native, Next.js, Laravel, and custom applications built for clients worldwide.',
  keywords: 'portfolio, mobile app projects, React Native, web development projects, React projects, Next.js applications, Laravel development',
};

export default function PortfolioPage() {
  return (
    <main className="bg-white text-black">
      
      {/* Portfolio Hero */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">

        {/* Lime accent strip — top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent-lime z-0" />

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-accent-lime/8 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-lime/5 rounded-full blur-[120px]" />
        </div>

        {/* Main grid layout */}
        <div className="relative z-0 flex-1 grid lg:grid-cols-2 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 pt-28 pb-0 gap-0">

          {/* Left — headline */}
          <div className="flex flex-col justify-center py-12 lg:pr-16 lg:border-r border-white/10">

            {/* Top meta row */}
            <div className="flex items-center gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-lime text-black rounded-full text-xs font-extrabold tracking-widest uppercase">
                <Briefcase className="w-3 h-3" />
                Portfolio
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white/40">
                <span className="w-1.5 h-1.5 bg-accent-lime rounded-full animate-pulse" />
                Available for new projects
              </div>
            </div>

            {/* Giant headline */}
            <h1 className="text-[clamp(3.5rem,9vw,7rem)] font-black text-white uppercase tracking-tighter leading-[0.88] mb-10">
              WORK<br />
              THAT<br />
              <span className="text-accent-lime">SPEAKS.</span>
            </h1>

            <p className="text-base md:text-lg text-white/45 max-w-md font-medium leading-relaxed mb-10">
              Mobile apps, web platforms &amp; digital experiences built with React Native, Next.js, and cutting-edge tech — delivering real business results.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-lime text-black rounded-xl font-extrabold text-sm hover:bg-white transition-all duration-300"
              >
                Explore Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl font-extrabold text-sm hover:border-accent-lime hover:text-accent-lime transition-all duration-300"
              >
                Start a Project
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right — featured project cards preview */}
          <div className="hidden lg:flex flex-col justify-center py-12 pl-16 gap-4">

            {/* Card 1 */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-accent-lime/40 transition-all duration-500 bg-white/4">
              <img
                src="/images/projects/cherymobileapp/chery-mobile-app.png"
                alt="Chery Bangladesh App"
                className="w-full h-44 object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-xs text-white/50 font-bold mb-0.5">Mobile App</div>
                  <div className="text-white font-extrabold text-base leading-tight">Chery Bangladesh App</div>
                </div>
                <span className="px-3 py-1 bg-accent-lime text-black text-xs font-extrabold rounded-full">2024</span>
              </div>
            </div>

            {/* Card 2 row — two small cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-accent-lime/40 transition-all duration-500">
                <img
                  src="/images/projects/turflet/TurfLet.png"
                  alt="TurfLet"
                  className="w-full h-32 object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white font-extrabold text-xs leading-tight">TurfLet Platform</div>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-accent-lime/40 transition-all duration-500">
                <img
                  src="/images/projects/elf-mobile-store/Elf-home.png"
                  alt="ELF App"
                  className="w-full h-32 object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white font-extrabold text-xs leading-tight">ELF Bangladesh App</div>
                </div>
              </div>
            </div>

            {/* Project count badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="text-4xl font-black text-white tracking-tighter">11+</div>
              <div className="text-sm text-white/40 font-medium leading-tight">Featured<br />projects</div>
              <div className="ml-auto flex -space-x-2">
                {[Code2, Smartphone, Globe, Zap].map((Icon, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-accent-lime" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling marquee strip */}
        <div className="relative z-0 border-t border-white/10 overflow-hidden py-4 mt-auto">
          <div
            className="flex whitespace-nowrap w-max"
            style={{ animation: 'marquee 20s linear infinite' }}
          >
            {['React Native', 'Next.js', 'Supabase', 'TypeScript', 'Laravel', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'React.js', 'Node.js',
              'React Native', 'Next.js', 'Supabase', 'TypeScript', 'Laravel', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'React.js', 'Node.js'].map((tech, i) => (
              <span key={i} className="text-xs font-extrabold uppercase tracking-widest text-white/25 flex items-center gap-3 px-6">
                <span className="w-1 h-1 bg-accent-lime rounded-full flex-shrink-0" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative bg-white">
        <ProjectShowcase />
        <ProjectFilters />
        <TechStack />
        <ClientTestimonials />
        <Contact />
      </div>
    </main>
  );
}