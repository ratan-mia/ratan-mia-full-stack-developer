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
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            📊 Deep Dive Analysis
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore in-depth analysis of real projects, the challenges faced, solutions implemented, 
            and the measurable results achieved for clients.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
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
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {study.duration}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold">{study.title}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                      Client: {study.client}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-semibold mb-2">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Challenge:</h3>
                        <p className="text-slate-600 dark:text-slate-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Solution:</h3>
                        <p className="text-slate-600 dark:text-slate-300">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                      <h3 className="font-semibold mb-4">Key Results:</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                              {value}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 capitalize">
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

                    <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Full Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-6xl mb-4">
                            {study.category === 'E-commerce' ? '🛒' :
                             study.category === 'SaaS' ? '📊' : '🏠'}
                          </div>
                          <div className="text-lg font-medium">{study.title}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-bounce">
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
      <section className="px-4 py-20 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Every successful project follows a proven methodology that ensures quality results and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-blue-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Let's discuss your project and explore how we can achieve similar outstanding results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Your Project
            </button>
            <button className="px-8 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors font-medium">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
