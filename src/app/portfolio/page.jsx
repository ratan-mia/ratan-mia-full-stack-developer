import Contact from '@/components/home/Contact';
import ClientTestimonials from '@/components/portfolio/ClientTestimonials';
import ProjectFilters from '@/components/portfolio/ProjectFilters';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import TechStack from '@/components/portfolio/TechStack';
import { ArrowRight, Briefcase, Code2, Globe, Plus, Smartphone, Star, Target, Users, Zap } from 'lucide-react';

export const metadata = {
  title: 'Portfolio - Ratan Mia | Mobile & Web Development Projects',
  description: 'Explore my portfolio of mobile app and web development projects. React Native, Next.js, Laravel, and custom applications built for clients worldwide.',
  keywords: 'portfolio, mobile app projects, React Native, web development projects, React projects, Next.js applications, Laravel development',
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
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
              <Briefcase className="w-4 h-4" />
              <span>PORTFOLIO</span>
            </div>

            {/* Hero Title */}
            <h1 className="hero-title text-black mb-6">
              Mobile & Web<br />Development Portfolio
            </h1>
            
            {/* Description */}
            <p className="body-text text-black/80 mb-8 max-w-2xl text-xl md:text-2xl font-medium">
              Crafting exceptional mobile apps and web experiences with React Native, Next.js, and cutting-edge technologies that deliver real business results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 max-w-4xl">
              <div className="group text-center p-6 bg-black/10 rounded-2xl hover:bg-black/20 transition-all hover:scale-105">
                <div className="flex justify-center mb-2">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1">150+</div>
                <div className="text-sm text-black/70 font-semibold">Projects Delivered</div>
              </div>
              <div className="group text-center p-6 bg-black/10 rounded-2xl hover:bg-black/20 transition-all hover:scale-105">
                <div className="flex justify-center mb-2">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1">10+</div>
                <div className="text-sm text-black/70 font-semibold">Years Experience</div>
              </div>
              <div className="group text-center p-6 bg-black/10 rounded-2xl hover:bg-black/20 transition-all hover:scale-105">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1">25+</div>
                <div className="text-sm text-black/70 font-semibold">Happy Clients</div>
              </div>
              <div className="group text-center p-6 bg-black/10 rounded-2xl hover:bg-black/20 transition-all hover:scale-105">
                <div className="flex justify-center mb-2">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1">100%</div>
                <div className="text-sm text-black/70 font-semibold">Satisfaction Rate</div>
              </div>
            </div>

            {/* Specialization Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-black/70 mb-4 uppercase tracking-wider">Core Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-3 mb-12 max-w-4xl">
              {[
                { name: 'React Native', icon: Smartphone },
                { name: 'Next.js', icon: Globe },
                { name: 'React.js', icon: Code2 },
                { name: 'Laravel', icon: Code2 },
                { name: 'TypeScript', icon: Code2 },
                { name: 'Supabase', icon: Zap },
                { name: 'Node.js', icon: Code2 },
                { name: 'Tailwind CSS', icon: Code2 },
                { name: 'PostgreSQL', icon: Zap },
                { name: 'AWS', icon: Globe }
              ].map((tech) => (
                <span 
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black/15 text-black text-sm font-semibold rounded-lg hover:bg-black hover:text-accent-lime transition-all hover:scale-105 cursor-default"
                >
                  <tech.icon className="w-4 h-4" />
                  {tech.name}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/quote" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-extrabold hover:bg-black hover:text-accent-lime transition-all"
              >
                <span>Start a Project</span>
                <Plus className="w-5 h-5 ml-2 group-hover:rotate-90 transition-transform" />
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
        <ClientTestimonials />
        <Contact />
      </div>
    </main>
  );
}