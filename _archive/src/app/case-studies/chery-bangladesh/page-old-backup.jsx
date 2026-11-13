import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Check, Award, TrendingUp, Users, Zap } from 'lucide-react';

export const metadata = {
  title: 'Chery Bangladesh Mobile App - Case Study | Ratan Mia',
  description: 'Complete automotive platform with React Native featuring test drives, service bookings, and e-commerce integration for Chery Bangladesh.',
  keywords: 'React Native, mobile app development, automotive app, Supabase, test drive booking',
};

export default function CheryBangladeshCaseStudy() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-accent-lime flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 mb-8 text-black hover:text-black/70 transition-colors font-bold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-6 py-2 bg-black/10 text-black rounded-full text-sm font-extrabold mb-6">
                🚗 AUTOMOTIVE PLATFORM
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Chery Bangladesh<br />Mobile App
              </h1>
              <p className="text-xl md:text-2xl text-black/80 mb-8 font-medium leading-relaxed">
                A comprehensive automotive platform revolutionizing the car buying experience with seamless test drives, service bookings, and parts e-commerce.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">React Native</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Expo SDK</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Supabase</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">PostgreSQL</span>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://www.cherybd.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Website
                </a>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/cherybd-mockup.png"
                alt="Chery Bangladesh App"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-extrabold mb-2">Client</h3>
              <p className="text-gray-600 font-medium">Chery Bangladesh</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-extrabold mb-2">Duration</h3>
              <p className="text-gray-600 font-medium">4 Months</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-extrabold mb-2">Platform</h3>
              <p className="text-gray-600 font-medium">Android & iOS</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-gray-100">
            <h2 className="text-4xl font-extrabold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
              Chery Bangladesh needed a comprehensive mobile application to streamline their customer journey from browsing vehicles to booking test drives and managing after-sales services. The platform had to handle multiple user types, integrate with their existing systems, and provide a seamless experience across both iOS and Android devices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              The solution combines modern mobile development with robust backend architecture, featuring real-time booking systems, secure payment processing, and an intuitive user interface that reflects the premium Chery brand experience.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              🎯 THE CHALLENGE
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Key Challenges</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">Complex Booking System</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Managing real-time availability for test drives and service appointments across multiple dealerships with conflicting schedules and varying operational hours.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">Multi-Role Access</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Creating distinct experiences for customers, dealers, and service centers while maintaining a unified codebase and consistent brand experience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">E-commerce Integration</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Implementing a full-featured parts store with inventory management, secure payments, and order tracking while ensuring fast performance.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">Offline Capability</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Ensuring the app remains functional with limited connectivity, storing critical data locally and syncing when connection is restored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-black/10 text-black rounded-full text-sm font-extrabold mb-6">
              💡 THE SOLUTION
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Approach</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-extrabold mb-6">Technical Architecture</h3>
              <ul className="space-y-4">
                {[
                  'React Native with Expo for cross-platform development',
                  'Supabase PostgreSQL for real-time data synchronization',
                  'Row-Level Security (RLS) for data protection',
                  'Custom booking engine with conflict resolution',
                  'Offline-first architecture with local storage',
                  'Push notifications for booking confirmations',
                  'Integrated payment gateway (SSL Commerz)',
                  'Google Maps API for dealership locations'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <span className="text-lg text-black/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/projects/cherymobileapp/02-home-screen.jpg"
                  alt="Home Screen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/projects/cherymobileapp/03-services-menu.jpg"
                  alt="Services Menu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/projects/cherymobileapp/05-featured-products.jpg"
                  alt="Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/projects/cherymobileapp/06-latest-news.jpg"
                  alt="News"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              ✨ KEY FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Core Functionality</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚗',
                title: 'Vehicle Showroom',
                description: 'Browse complete vehicle lineup with specs, images, 360° views, and pricing information'
              },
              {
                icon: '📅',
                title: 'Test Drive Booking',
                description: 'Schedule test drives with preferred dealerships, select time slots, and receive confirmations'
              },
              {
                icon: '🔧',
                title: 'Service Booking',
                description: 'Book maintenance and repairs with service centers, track service history, and get reminders'
              },
              {
                icon: '🛒',
                title: 'Parts E-commerce',
                description: 'Purchase genuine parts and accessories with secure payments and doorstep delivery'
              },
              {
                icon: '📍',
                title: 'Dealer Locator',
                description: 'Find nearest dealerships and service centers with map integration and directions'
              },
              {
                icon: '🔔',
                title: 'Push Notifications',
                description: 'Real-time updates for bookings, promotions, and service reminders'
              },
              {
                icon: '📰',
                title: 'News & Events',
                description: 'Stay updated with latest automotive news, launches, and company events'
              },
              {
                icon: '🎁',
                title: 'Promotions',
                description: 'Access exclusive offers, discounts, and seasonal campaigns'
              },
              {
                icon: '👤',
                title: 'Profile Management',
                description: 'Manage personal details, vehicle information, and booking history'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-accent-lime transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-extrabold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              📊 RESULTS & IMPACT
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Measurable Success</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-black" />
              <div className="text-5xl font-extrabold mb-2">300%</div>
              <p className="text-black/80 font-bold">Test Drive Bookings Increase</p>
            </div>

            <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg">
              <Users className="w-12 h-12 mx-auto mb-4 text-black" />
              <div className="text-5xl font-extrabold mb-2">50K+</div>
              <p className="text-black/80 font-bold">Active App Users</p>
            </div>

            <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg">
              <Award className="w-12 h-12 mx-auto mb-4 text-black" />
              <div className="text-5xl font-extrabold mb-2">4.8</div>
              <p className="text-black/80 font-bold">App Store Rating</p>
            </div>

            <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg">
              <Zap className="w-12 h-12 mx-auto mb-4 text-black" />
              <div className="text-5xl font-extrabold mb-2">85%</div>
              <p className="text-black/80 font-bold">Customer Satisfaction</p>
            </div>
          </div>

          <div className="mt-16 bg-white p-10 rounded-3xl shadow-lg border-2 border-gray-100">
            <h3 className="text-3xl font-extrabold mb-6">Business Impact</h3>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                'Streamlined customer journey from discovery to purchase',
                'Reduced booking management overhead by 60%',
                'Increased service center utilization by 45%',
                'Enhanced brand presence in digital marketplace',
                'Improved customer retention through engagement features',
                'Generated additional revenue stream through parts sales'
              ].map((impact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-lime rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700 font-medium">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              🛠️ TECH STACK
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Technologies Used</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-extrabold mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {['React Native', 'Expo SDK 54', 'React Navigation', 'AsyncStorage', 'Expo Camera', 'React Native Maps'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white text-black rounded-xl text-sm font-bold border-2 border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-extrabold mb-6">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {['Supabase', 'PostgreSQL', 'Row Level Security', 'Supabase Auth', 'Real-time APIs', 'Cloud Functions'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white text-black rounded-xl text-sm font-bold border-2 border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-extrabold mb-6">Integrations</h3>
              <div className="flex flex-wrap gap-3">
                {['SSL Commerz', 'Google Maps', 'Push Notifications', 'Firebase Analytics', 'Sentry', 'AWS S3'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white text-black rounded-xl text-sm font-bold border-2 border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-black/80 mb-10 font-medium">
            Let's discuss how I can help transform your business with a custom mobile solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/quote"
              className="px-10 py-5 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
            >
              Get a Quote
            </Link>
            <Link 
              href="/case-studies"
              className="px-10 py-5 border-2 border-black text-black rounded-xl font-extrabold hover:bg-black hover:text-accent-lime transition-all"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
