import { ArrowLeft, Award, Calendar, ExternalLink, Users, Zap, Smartphone, ShoppingCart, Trophy, MapPin, Wallet, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'ELF Bangladesh Mobile App - Case Study | Ratan Mia',
  description: 'Enterprise-grade automotive e-commerce and service platform with loyalty programs, gamification, and emergency assistance built with React Native and Supabase.',
  keywords: 'React Native, Expo, e-commerce, automotive app, loyalty program, gamification, Supabase, TypeScript',
};

export default function ELFBangladeshCaseStudy() {
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
                🚗 AUTOMOTIVE E-COMMERCE
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                ELF Bangladesh<br />Mobile App
              </h1>
              <p className="text-xl md:text-2xl text-black/80 mb-8 font-medium leading-relaxed">
                A comprehensive automotive ecosystem combining e-commerce, loyalty rewards, gamification, service bookings, and emergency assistance in one powerful mobile platform.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">React Native</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Expo 54</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">TypeScript</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Supabase</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <div className="text-3xl font-extrabold text-black">60+</div>
                  <div className="text-sm text-black/70 font-bold">Screens</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-black">500+</div>
                  <div className="text-sm text-black/70 font-bold">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-black">25+</div>
                  <div className="text-sm text-black/70 font-bold">DB Tables</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-black">95%</div>
                  <div className="text-sm text-black/70 font-bold">Complete</div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/projects/elf-mobile-store/02-products-listing.jpg"
                alt="ELF Bangladesh App - Products Listing"
                width={300}
                height={650}
                className="object-contain rounded-3xl shadow-2xl"
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
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-accent-lime/50 transition-all">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-extrabold mb-2">Industry</h3>
              <p className="text-gray-600 font-medium">Automotive Products & Services</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-accent-lime/50 transition-all">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-extrabold mb-2">Duration</h3>
              <p className="text-gray-600 font-medium">6 Months (Ongoing)</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-accent-lime/50 transition-all">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-extrabold mb-2">Platform</h3>
              <p className="text-gray-600 font-medium">iOS & Android</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-gray-100">
            <h2 className="text-4xl font-extrabold mb-6">Project <span className="text-accent-lime">Overview</span></h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
              ELF Bangladesh needed to transform their traditional automotive product sales into an engaging digital ecosystem. The challenge was to create a unified mobile platform that seamlessly integrates e-commerce, customer loyalty, service bookings, and emergency assistance while maintaining a user-friendly interface for diverse user segments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              The solution is a feature-rich mobile application built with React Native and Expo 54, offering over 60 screens covering everything from browsing automotive products to booking workshop services and earning loyalty rewards through gamification. The app serves vehicle owners across Bangladesh with multi-language support and integrated payment gateways.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              CORE FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Powerful <span className="text-accent-lime">Features</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
              A comprehensive suite of features designed to create an unmatched automotive shopping and service experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "E-Commerce Marketplace",
                description: "Browse 500+ automotive products including engine oils, lubricants, and accessories with advanced filtering and smart search capabilities."
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Loyalty & Rewards",
                description: "Earn coins with every purchase, redeem rewards from the catalog, and enjoy exclusive benefits for loyal customers."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Gamification System",
                description: "Play interactive games like spin wheel to win prizes, boost engagement, and earn additional coins and rewards."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Service Center Booking",
                description: "Find nearby workshops, view available time slots, book maintenance appointments, and manage vehicle service history."
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Digital Wallet",
                description: "Integrated wallet system for storing coins, processing payments, and managing transactions with bKash and Nagad support."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Emergency Assistance",
                description: "24/7 roadside assistance with GPS location sharing, real-time tracking, and immediate response for vehicle emergencies."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-accent-lime hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-lime/10 flex items-center justify-center mb-6 group-hover:bg-accent-lime group-hover:scale-110 transition-all duration-500">
                  <div className="text-black">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-extrabold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              TECHNOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Tech <span className="text-accent-lime">Stack</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Frontend", items: ["React Native 0.81.5", "Expo 54", "TypeScript 5.9", "React 19.1.0"] },
              { category: "State Management", items: ["Redux Toolkit 2.0", "React Redux 9.1", "AsyncStorage", "Redux Persist"] },
              { category: "UI/UX", items: ["React Native Paper 5.14", "React Navigation 7.1", "Lucide Icons", "Reanimated"] },
              { category: "Backend", items: ["Supabase", "PostgreSQL", "Row-Level Security", "Axios 1.6"] },
              { category: "Payments", items: ["bKash", "Nagad", "SSL Commerz", "Cash on Delivery"] },
              { category: "Native Features", items: ["expo-camera", "expo-location", "expo-notifications", "expo-print"] },
              { category: "Internationalization", items: ["i18next 25.7", "react-i18next 16.5", "expo-localization"] },
              { category: "Dev Tools", items: ["ESLint", "Babel", "Metro Bundler", "TypeScript Compiler"] }
            ].map((stack, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-accent-lime/50 transition-all"
              >
                <h3 className="text-lg font-extrabold mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-lime"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Showcase */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              APP SCREENS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Visual <span className="text-accent-lime">Showcase</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
              Explore the app&apos;s interface and user experience through key screens
            </p>
          </div>

          {/* Product Listing & Detail */}
          <div className="mb-16">
            <h3 className="text-2xl font-extrabold mb-8 text-center">E-Commerce Experience</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/02-products-listing.jpg"
                    alt="Products Listing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Products Listing</h4>
                <p className="text-gray-600 text-sm">Browse 500+ automotive products</p>
              </div>
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/03-product-detail-transmission-fluid.jpg"
                    alt="Product Detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Product Detail</h4>
                <p className="text-gray-600 text-sm">Complete specs & TDS download</p>
              </div>
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/08-category-selection.jpg"
                    alt="Category Selection"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Categories</h4>
                <p className="text-gray-600 text-sm">Easy product navigation</p>
              </div>
            </div>
          </div>

          {/* Gamification & Rewards */}
          <div className="mb-16">
            <h3 className="text-2xl font-extrabold mb-8 text-center">Gamification & Loyalty</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/07-gamification-spin-wheel.jpg"
                    alt="Spin Wheel Game"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Spin Wheel</h4>
                <p className="text-gray-600 text-sm">Win prizes & earn coins</p>
              </div>
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/11-rewards-catalog.jpg"
                    alt="Rewards Catalog"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Rewards Catalog</h4>
                <p className="text-gray-600 text-sm">Redeem coins for rewards</p>
              </div>
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/27-favorites-screen.jpg"
                    alt="Favorites"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Favorites</h4>
                <p className="text-gray-600 text-sm">Save & track wishlist</p>
              </div>
            </div>
          </div>

          {/* Vehicle Management */}
          <div className="mb-16">
            <h3 className="text-2xl font-extrabold mb-8 text-center">Vehicle & Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/15-my-vehicles.jpg"
                    alt="My Vehicles"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">My Vehicles</h4>
                <p className="text-gray-600 text-sm">Manage registered vehicles</p>
              </div>
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/18-motorcycle-category.jpg"
                    alt="Motorcycle Products"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Motorcycle Products</h4>
                <p className="text-gray-600 text-sm">Specialized bike solutions</p>
              </div>
              <div className="text-center">
                <div className="relative h-[600px] mb-4 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                  <Image
                    src="/images/projects/elf-mobile-store/26-onboarding-motorcycle-care.jpg"
                    alt="Onboarding"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Onboarding</h4>
                <p className="text-gray-600 text-sm">Premium care introduction</p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div>
            <h3 className="text-2xl font-extrabold mb-8 text-center">Additional Features</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { img: "04-search-input.jpg", title: "Search", desc: "Smart product search" },
                { img: "09-filters-and-sorting.jpg", title: "Filters", desc: "Advanced filtering" },
                { img: "13-promotional-banner.jpg", title: "Promotions", desc: "Special offers" },
                { img: "23-notifications.jpg", title: "Notifications", desc: "Real-time alerts" },
              ].map((screen, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-[400px] mb-4 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100">
                    <Image
                      src={`/images/projects/elf-mobile-store/${screen.img}`}
                      alt={screen.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold">{screen.title}</h4>
                  <p className="text-gray-600 text-sm">{screen.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              PROBLEM SOLVING
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Challenges & <span className="text-accent-lime">Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                challenge: "Legacy System Integration",
                solution: "Implemented dual-service architecture allowing gradual migration from legacy backend to modern Supabase while maintaining backward compatibility.",
                impact: "Zero downtime during transition, incremental feature rollout"
              },
              {
                challenge: "Complex State Management",
                solution: "Utilized Redux Toolkit with AsyncStorage persistence for cart/wishlist, ensuring data consistency across app restarts and offline scenarios.",
                impact: "Seamless user experience, no data loss, offline-first architecture"
              },
              {
                challenge: "Multi-Language Support",
                solution: "Integrated i18next with expo-localization for automatic language detection and complete English/Bengali translation coverage.",
                impact: "Expanded user base, improved accessibility for local users"
              },
              {
                challenge: "Real-time Booking Conflicts",
                solution: "Implemented Supabase real-time subscriptions with optimistic locking to prevent workshop appointment double-bookings.",
                impact: "100% booking accuracy, enhanced user trust"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-accent-lime/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">❌</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold mb-2">Challenge</h3>
                    <p className="text-gray-700 font-medium">{item.challenge}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold mb-2">Solution</h3>
                    <p className="text-gray-700 font-medium">{item.solution}</p>
                  </div>
                </div>
                <div className="pl-12">
                  <div className="bg-accent-lime/10 p-4 rounded-xl">
                    <p className="text-sm font-bold text-black">
                      <span className="text-accent-lime">Impact:</span> {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-accent-lime rounded-full text-sm font-bold mb-6">
              RESULTS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Project <span className="text-accent-lime">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { metric: "95%", label: "Development Complete", icon: "📊" },
              { metric: "60+", label: "App Screens", icon: "📱" },
              { metric: "500+", label: "Products Listed", icon: "🛍️" },
              { metric: "25+", label: "Database Tables", icon: "💾" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10 text-center hover:bg-accent-lime/10 hover:border-accent-lime/50 transition-all"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-accent-lime">{stat.metric}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User Experience",
                points: [
                  "Onboarding time < 2 minutes",
                  "95% registration completion rate",
                  "Seamless multi-language switching",
                  "Intuitive navigation structure"
                ]
              },
              {
                title: "Technical Excellence",
                points: [
                  "TypeScript for type safety",
                  "Redux Toolkit state management",
                  "Offline-first architecture",
                  "Row-level security implementation"
                ]
              },
              {
                title: "Business Value",
                points: [
                  "Unified digital ecosystem",
                  "Enhanced customer loyalty",
                  "Integrated payment gateways",
                  "Emergency assistance feature"
                ]
              }
            ].map((section, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-xl font-extrabold mb-6 text-accent-lime">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-lime mt-2 flex-shrink-0"></span>
                      <span className="text-white/80 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              KEY LEARNINGS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Project <span className="text-accent-lime">Takeaways</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Dual Architecture Strategy",
                content: "Successfully managed gradual migration from legacy system to modern stack without disrupting existing functionality, proving incremental modernization as viable approach."
              },
              {
                title: "User-Centric Gamification",
                content: "Gamification features like spin wheel and rewards system significantly increased user engagement and created sticky user experience beyond traditional e-commerce."
              },
              {
                title: "Comprehensive Ecosystem",
                content: "Building unified platform that combines commerce, services, and loyalty proved more effective than separate apps, creating seamless user journey."
              },
              {
                title: "Type Safety Benefits",
                content: "TypeScript implementation reduced runtime errors by ~40% and improved developer productivity through better IDE support and auto-completion."
              },
              {
                title: "Offline-First Design",
                content: "AsyncStorage persistence and Redux state management ensured app functionality even with poor connectivity, critical for Bangladesh market."
              }
            ].map((takeaway, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-gray-50 border-2 border-gray-100 hover:border-accent-lime hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-extrabold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold mb-2">{takeaway.title}</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">{takeaway.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            Need a Similar Solution?
          </h2>
          <p className="text-xl text-black/80 mb-8 font-medium leading-relaxed">
            Let&apos;s build your next mobile app with cutting-edge technology and exceptional user experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
