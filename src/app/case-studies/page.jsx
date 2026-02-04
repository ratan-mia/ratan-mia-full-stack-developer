import Contact from '@/components/home/Contact';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies - Ratan Mia | In-Depth Project Analysis',
  description: 'Explore detailed case studies of mobile and web development projects. Real solutions for automotive, sports booking, and loyalty platforms.',
  keywords: 'case studies, mobile app development, React Native, booking platform, loyalty system, automotive app',
};

const caseStudies = [
  {
    id: 1,
    title: "Chery Bangladesh Mobile App",
    client: "Chery Bangladesh",
    category: "Automotive",
    duration: "4 months",
    technologies: ["React Native", "Expo", "Supabase", "SSL Commerz"],
    challenge: "Traditional dealerships lacked digital presence for vehicle browsing, test drives, and service bookings",
    solution: "Comprehensive mobile app with vehicle showroom, test drive booking, service management, and parts e-commerce",
    results: {
      bookings: "300% increase",
      users: "50K+ downloads",
      rating: "4.8/5 stars"
    },
    image: "/images/projects/cherybd-mockup.png",
    slug: "chery-bangladesh"
  },
  {
    id: 2,
    title: "TurfNations Booking Platform",
    client: "TurfNations",
    category: "Sports & Recreation",
    duration: "3 months",
    technologies: ["React Native", "Next.js", "Prisma", "SSL Commerz"],
    challenge: "Sports venues needed real-time booking system with dynamic pricing and payment integration",
    solution: "Complete booking platform with 30-day calendar, availability management, and owner dashboard",
    results: {
      bookings: "5K+ processed",
      users: "2.5K+ active",
      success: "95% payment rate"
    },
    image: "/images/projects/turflet/www.turflet.app.png",
    slug: "turfnations-booking"
  },
  {
    id: 3,
    title: "Gamify Loyalty Platform",
    client: "FMCG & Automotive Brands",
    category: "Loyalty & Engagement",
    duration: "2.5 months",
    technologies: ["React Native", "Supabase", "QR Scanner", "Gamification"],
    challenge: "Brands needed engaging loyalty system with fraud prevention and prize management",
    solution: "QR-based platform with interactive games, digital wallet, and comprehensive redemption system",
    results: {
      users: "8K+ active",
      scans: "50K+ QR codes",
      games: "25K+ played"
    },
    image: "/images/projects/pieqr/screenshots/home-screen.jpg",
    slug: "gamify"
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

                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105"
                    >
                      View Full Case Study
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
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
