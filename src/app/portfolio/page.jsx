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
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Portfolio Header Banner - Full Width */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
          
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Available for New Projects</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="block text-white mb-2">My Portfolio</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into exceptional web experiences with cutting-edge technology
          </p>
          <p className="text-lg md:text-xl text-blue-200/80 mb-12 max-w-3xl mx-auto">
            Explore my journey through 8+ years of full-stack development, from concept to deployment
          </p>
          
          {/* Real Stats from Home Page */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-sm text-blue-200 uppercase tracking-wide font-medium">Projects Delivered</div>
              <div className="text-xs text-blue-300/70 mt-1">Successfully completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">8+</div>
              <div className="text-sm text-blue-200 uppercase tracking-wide font-medium">Years Experience</div>
              <div className="text-xs text-blue-300/70 mt-1">Since 2016</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-sm text-blue-200 uppercase tracking-wide font-medium">Countries Served</div>
              <div className="text-xs text-blue-300/70 mt-1">Global reach</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-sm text-blue-200 uppercase tracking-wide font-medium">Client Satisfaction</div>
              <div className="text-xs text-blue-300/70 mt-1">5★ Rating</div>
            </div>
          </div>
          
          {/* Technology Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
            {['React.js', 'Next.js', 'Laravel', 'PHP', 'WordPress', 'TypeScript', 'MySQL', 'Docker', 'AWS', 'Tailwind CSS'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#projects" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span>Explore My Work</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span>Start a Project</span>
              <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </a>
            <a 
              href="mailto:shorifull@gmail.com" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get In Touch</span>
            </a>
          </div>
          
          {/* Professional Credentials */}
          {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white mb-2">Currently At</h3>
                <p className="text-blue-200 font-semibold">Kawasaki Bangladesh</p>
                <p className="text-blue-300/70 text-sm">Senior Full Stack Developer</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">Based In</h3>
                <p className="text-blue-200 font-semibold flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Dhaka, Bangladesh
                </p>
                <p className="text-blue-300/70 text-sm">Available Worldwide</p>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
                <p className="text-blue-200 font-semibold">+880 1751 010966</p>
                <p className="text-blue-300/70 text-sm">Available 24/7</p>
              </div>
            </div>
          </div> */}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/20 pointer-events-none" />

        {/* Content Sections */}
        <ProjectShowcase />    {/* 1. Hero + Featured projects */}
        <ProjectFilters />     {/* 2. Filterable project grid */}
        <TechStack />         {/* 3. Technologies used */}
        <ProjectStats />      {/* 4. Portfolio statistics */}
        <ClientTestimonials /> {/* 5. Project-specific testimonials */}
        <Contact />           {/* 6. Contact for new projects */}
      </div>
    </main>
  );
}