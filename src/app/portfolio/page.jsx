import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import ProjectFilters from '@/components/portfolio/ProjectFilters';
import ProjectStats from '@/components/portfolio/ProjectStats';
import TechStack from '@/components/portfolio/TechStack';
import ClientTestimonials from '@/components/portfolio/ClientTestimonials';
import Contact from '@/components/home/Contact';

export const metadata = {
  title: 'Portfolio - Ratan Mia | Full Stack Developer Projects',
  description: 'Explore my portfolio of web development projects. React, Next.js, Laravel, and WordPress applications built for clients worldwide.',
  keywords: 'portfolio, web development projects, React projects, Next.js applications, Laravel development',
};

export default function PortfolioPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Main Content Sections */}
      <div className="relative pt-20">
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