import { Code2 } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-accent-lime flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2025&auto=format&fit=crop"
          alt="Services Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-accent-lime/80"></div>
      </div>

      {/* Decorative elements - desktop only */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-black/5 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl bg-black/5 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-black/5 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20 text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-black/10 text-black rounded-full text-sm font-extrabold mb-6">
          <Code2 className="w-4 h-4" />
          <span>PROFESSIONAL SERVICES</span>
        </div>
        <h1 className="hero-title text-black mb-6">
          Mobile & Web Development<br />Services
        </h1>
        <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
          Transform your ideas into powerful mobile apps and web applications with React Native, Next.js, and modern technologies.
          From concept to deployment, I deliver cross-platform solutions that drive business growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-5 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            View All Services
          </button>
          <button className="px-10 py-5 border-2 border-black text-black rounded-xl font-extrabold hover:bg-black hover:text-white transition-all duration-300">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
