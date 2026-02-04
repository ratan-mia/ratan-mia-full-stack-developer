import Contact from '@/components/home/Contact';

export const metadata = {
  title: 'Case Studies - Ratan Mia | In-Depth Project Analysis',
  description: 'Explore detailed case studies of web development projects. Learn about challenges faced, solutions implemented, and results achieved.',
  keywords: 'case studies, project analysis, web development projects, problem solving, React projects, Laravel development',
};

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    client: "TechMart Solutions",
    category: "E-commerce",
    duration: "4 months",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    challenge: "Legacy e-commerce platform with poor performance and user experience",
    solution: "Complete rebuild using modern stack with focus on performance and UX",
    results: {
      performance: "85% faster page load times",
      conversion: "40% increase in conversion rate",
      sales: "$2M additional revenue in first year"
    },
    image: "/case-studies/ecommerce-transformation.jpg",
    slug: "ecommerce-platform-transformation"
  },
  {
    id: 2,
    title: "SaaS Dashboard Redesign",
    client: "DataFlow Analytics",
    category: "SaaS",
    duration: "3 months",
    technologies: ["React", "Laravel", "MySQL", "Chart.js", "Docker"],
    challenge: "Complex data visualization with poor user interface and slow performance",
    solution: "Redesigned dashboard with optimized data fetching and intuitive UI",
    results: {
      performance: "70% reduction in data load times",
      satisfaction: "95% user satisfaction score",
      engagement: "60% increase in daily active users"
    },
    image: "/case-studies/saas-dashboard.jpg",
    slug: "saas-dashboard-redesign"
  },
  {
    id: 3,
    title: "Real Estate Portal Development",
    client: "PropertyHub Pro",
    category: "Real Estate",
    duration: "5 months",
    technologies: ["Next.js", "Laravel", "MySQL", "MapBox", "AWS S3"],
    challenge: "Build a comprehensive real estate platform from scratch",
    solution: "Full-featured platform with advanced search, virtual tours, and agent tools",
    results: {
      listings: "50,000+ properties listed",
      users: "10,000+ registered users",
      growth: "300% month-over-month growth"
    },
    image: "/case-studies/real-estate-portal.jpg",
    slug: "real-estate-portal-development"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Deep dive into business requirements, user needs, and technical constraints"
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Define project scope, technical architecture, and development roadmap"
  },
  {
    step: "03",
    title: "Design & Prototyping",
    description: "Create wireframes, mockups, and interactive prototypes"
  },
  {
    step: "04",
    title: "Development & Testing",
    description: "Build the solution with continuous testing and quality assurance"
  },
  {
    step: "05",
    title: "Launch & Optimization",
    description: "Deploy the solution and continuously optimize based on user feedback"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      
      {/* Hero Section - Following Design Guidelines */}
      <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
        {/* Decorative elements - desktop only */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-black/5 animate-pulse" />
          <div className="absolute bottom-40 right-20 w-24 h-24 rounded-2xl bg-black/5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-32 w-full">
            {/* Badge */}
            <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
              📊 CASE STUDIES
            </div>

            {/* Hero Title */}
            <h1 className="hero-title text-black mb-6">
              Case Studies
            </h1>
            
            {/* Description */}
            <p className="body-text text-black/80 mb-12 max-w-3xl text-xl md:text-2xl">
              Explore in-depth analysis of real projects, the challenges faced, solutions implemented, 
              and the measurable results achieved for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-accent-lime/20 text-black rounded-lg text-sm font-bold">
                        {study.category}
                      </span>
                      <span className="text-gray-600 text-sm font-medium">
                        {study.duration}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{study.title}</h2>
                    <p className="text-lg text-gray-700 font-semibold">
                      Client: {study.client}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-bold mb-3 text-lg">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                        <h3 className="font-bold text-red-700 mb-2">Challenge:</h3>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                        <h3 className="font-bold text-green-700 mb-2">Solution:</h3>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-accent-lime text-black rounded-3xl p-8">
                      <h3 className="font-bold mb-6 text-xl">Key Results:</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-3xl font-extrabold mb-2">
                              {value}
                            </div>
                            <div className="text-sm font-semibold text-black/70 capitalize">
                              {key === 'performance' ? 'Performance' : 
                               key === 'conversion' ? 'Conversion' :
                               key === 'sales' ? 'Revenue' :
                               key === 'satisfaction' ? 'Satisfaction' :
                               key === 'engagement' ? 'Engagement' :
                               key === 'listings' ? 'Listings' :
                               key === 'users' ? 'Users' :
                               key === 'growth' ? 'Growth' : key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="inline-flex items-center px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                      View Full Case Study
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/20 to-accent-orange/20 flex items-center justify-center">
                        <div className="text-black text-center">
                          <div className="text-6xl mb-4">
                            {study.category === 'E-commerce' ? '🛒' :
                             study.category === 'SaaS' ? '📊' : '🏠'}
                          </div>
                          <div className="text-lg font-bold px-4">{study.title}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating checkmark */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center text-2xl border-4 border-white shadow-lg">
                      ✅
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              METHODOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Process</h2>
            <p className="body-text text-gray-600 max-w-3xl mx-auto">
              Every successful project follows a proven methodology that ensures quality results and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-lime text-black rounded-2xl flex items-center justify-center text-2xl font-extrabold mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold mb-3 text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-accent-lime">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="body-text text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can achieve similar outstanding results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/quote" className="px-8 py-4 bg-accent-lime text-black rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
              Start Your Project
            </a>
            <a href="/#contact" className="px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
