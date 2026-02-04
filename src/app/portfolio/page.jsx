import Contact from '@/components/home/Contact';
import ClientTestimonials from '@/components/portfolio/ClientTestimonials';
import ProjectFilters from '@/components/portfolio/ProjectFilters';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import ProjectStats from '@/components/portfolio/ProjectStats';
import TechStack from '@/components/portfolio/TechStack';

export const metadata = {
  title: 'Portfolio - Ratan Mia | Full Stack Developer Projects',
  description: 'Explore my portfolio of web development projects. React, Next.js, Laravel, and WordPress applications built for clients worldwide.',
  keywords: 'portfolio, web development projects, React projects, Next.js applications, Laravel development',
};

export default function PortfolioPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      
      {/* Portfolio Hero - Following Design Guidelines */}
      <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
        {/* Decorative elements - desktop only */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-black/5 animate-pulse" />
          <div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl bg-black/5 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-black/5 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Main content */}
        <div className="relative z-20 h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 w-full">
            {/* Badge */}
            <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
              💼 PORTFOLIO
            </div>

            {/* Hero Title */}
            <h1 className="hero-title text-black mb-6">
              My Portfolio
            </h1>
            
            {/* Description */}
            <p className="body-text text-black/80 mb-8 max-w-2xl text-xl md:text-2xl">
              Transforming ideas into exceptional web experiences with cutting-edge technology
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 max-w-4xl">
              <div className="text-center p-4 bg-black/10 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-1">150+</div>
                <div className="text-sm text-black/70">Projects</div>
              </div>
              <div className="text-center p-4 bg-black/10 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-1">10+</div>
                <div className="text-sm text-black/70">Years</div>
              </div>
              <div className="text-center p-4 bg-black/10 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-1">25+</div>
                <div className="text-sm text-black/70">Countries</div>
              </div>
              <div className="text-center p-4 bg-black/10 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
                <div className="text-sm text-black/70">Satisfaction</div>
              </div>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-3 mb-12 max-w-3xl">
              {['React.js', 'Next.js', 'Laravel', 'PHP', 'WordPress', 'TypeScript', 'MySQL', 'Docker', 'AWS', 'Tailwind CSS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-black/15 text-black text-sm font-semibold rounded-lg hover:bg-black/25 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Explore My Work</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/quote" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all"
              >
                <span>Start a Project</span>
                <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative bg-white">
        <ProjectShowcase />
        <ProjectFilters />
        <TechStack />
        <ProjectStats />
        <ClientTestimonials />
        <Contact />
      </div>
    </main>
  );
}