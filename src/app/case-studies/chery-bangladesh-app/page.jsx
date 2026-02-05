'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Users, TrendingUp, Smartphone, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CheryBangladeshAppCaseStudy() {
  // Detailed features with screenshots for alternating layout
  const detailedFeatures = [
    {
      title: "Complete Vehicle Showroom",
      description: "Browse the entire Chery vehicle lineup with high-quality images, detailed specifications, and 360° interactive views. Users can compare multiple vehicles side-by-side, explore features with hotspot markers, and view comprehensive specs including engine, dimensions, and safety features.",
      highlights: [
        "360° interactive vehicle viewer with touch controls",
        "High-resolution image galleries with zoom capability",
        "Side-by-side vehicle comparison tool",
        "Detailed specifications and feature lists",
        "Price information with financing calculator"
      ],
      image: "/images/projects/cherymobileapp/22-products-vehicle-browse.jpg",
      badge: "Vehicle Discovery"
    },
    {
      title: "Test Drive Booking System",
      description: "Schedule test drives with an intuitive date and time picker. Select your preferred vehicle, choose a convenient dealership location, and book your slot in real-time. The system prevents double bookings and sends instant confirmation notifications.",
      highlights: [
        "Real-time availability calendar",
        "Vehicle and dealer selection",
        "Date/time slot picker with instant confirmation",
        "SMS and push notification reminders",
        "Easy rescheduling and cancellation"
      ],
      image: "/images/projects/cherymobileapp/17-testdrive-vehicle-selection.jpg",
      badge: "Booking"
    },
    {
      title: "Service Booking & Management",
      description: "Book service appointments for your vehicle with ease. Select service types (maintenance, repair, warranty), choose your preferred service center, and schedule at your convenience. Track service history and receive maintenance reminders.",
      highlights: [
        "Multiple service types selection",
        "Preferred service center booking",
        "Service history tracking",
        "Automated maintenance reminders",
        "Real-time booking status updates"
      ],
      image: "/images/projects/cherymobileapp/11-service-booking-vehicle.jpg",
      badge: "After-Sales Service"
    },
    {
      title: "Parts & Accessories E-commerce",
      description: "Complete online store for genuine Chery parts and accessories. Browse categories, view product details with multiple images, add items to cart, and checkout securely with SSL Commerce payment gateway. Track orders in real-time.",
      highlights: [
        "Genuine parts catalog with search and filters",
        "Product details with specifications",
        "Shopping cart with quantity management",
        "SSL Commerce secure payment integration",
        "Order tracking and history"
      ],
      image: "/images/projects/cherymobileapp/28-shop-accessories.jpg",
      badge: "E-commerce"
    },
    {
      title: "Vehicle Details & Specifications",
      description: "In-depth vehicle information pages with comprehensive specs, features, pricing, and financing options. View multiple images, read detailed descriptions, and access technical documentation including owner's manuals.",
      highlights: [
        "Complete technical specifications",
        "Feature highlights with descriptions",
        "Pricing with financing calculator",
        "Multiple image galleries",
        "Downloadable brochures and manuals"
      ],
      image: "/images/projects/cherymobileapp/23-products-vehicle-details.jpg",
      badge: "Information"
    },
    {
      title: "Shopping Cart & Checkout",
      description: "Seamless checkout experience with cart management, multiple payment options, and secure payment processing. Review your order, apply discount codes, choose delivery options, and complete payment through SSL Commerce gateway.",
      highlights: [
        "Cart with quantity adjustment",
        "Discount code application",
        "Multiple payment methods (Card, bKash, Nagad)",
        "Delivery address management",
        "Order summary and confirmation"
      ],
      image: "/images/projects/cherymobileapp/30-shop-cart.jpg",
      badge: "Checkout"
    }
  ];

  const techStack = {
    "Frontend": ["React Native", "Expo SDK 54", "TypeScript", "React Navigation"],
    "Backend": ["Supabase", "PostgreSQL", "REST API", "Row Level Security"],
    "Features": ["Push Notifications", "Maps Integration", "SSL Commerz", "360° Viewer"],
    "Tools": ["Figma", "Postman", "Git", "VS Code"]
  };

  return (
    <main className="bg-white text-black overflow-hidden">
      
      {/* Hero - Full Screen with Gradient */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 w-full">
            {/* Back Button */}
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-12 font-semibold transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6">
                  🚗 AUTOMOTIVE & E-COMMERCE
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                  Chery Bangladesh<br />
                  <span className="text-white/90">Mobile App</span>
                </h1>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  A comprehensive automotive digital ecosystem featuring vehicle showroom, test drive booking, 
                  service management, and full e-commerce capabilities for parts and accessories.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Downloads", value: "50K+", icon: Users },
                    { label: "Rating", value: "4.8/5", icon: Award },
                    { label: "Active Users", value: "35K+", icon: Smartphone },
                    { label: "Increase", value: "300%", icon: TrendingUp },
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="bg-white/15 backdrop-blur-md p-4 rounded-2xl">
                        <Icon className="w-6 h-6 text-white mb-2" />
                        <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Expo SDK 54", "Supabase", "SSL Commerz"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/images/projects/cherymobileapp/02-home-screen.jpg"
                    alt="Chery Bangladesh App Home Screen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-accent-lime text-black px-6 py-4 rounded-2xl font-extrabold text-xl shadow-2xl">
                  2025
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl border-2 border-red-200"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Traditional automotive dealerships in Bangladesh lacked a digital presence for vehicle browsing, 
                test drive scheduling, and service bookings. Customers faced difficulties accessing vehicle information, 
                booking services, and purchasing parts online.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-200"
            >
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900">The Solution</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Built a comprehensive mobile application using React Native and Expo with complete vehicle catalog, 
                intelligent booking systems, e-commerce functionality, and real-time service management. 
                Integrated Supabase backend with Row Level Security for data protection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features with Alternating Screenshots - Following Design Guidelines */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
                KEY FEATURES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Complete Automotive <span className="text-accent-lime">Experience</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                43 comprehensive screens covering every aspect of the automotive customer journey
              </p>
            </div>

            {/* Alternating Feature Rows */}
            <div className="space-y-20">
              {detailedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Screenshot */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative group max-w-sm mx-auto">
                      {/* Badge */}
                      <div className="absolute -top-4 -left-4 z-10 px-4 py-2 bg-accent-lime text-black rounded-xl font-bold text-sm shadow-lg">
                        {feature.badge}
                      </div>
                      
                      {/* Screenshot - Reduced Size with Aspect Ratio */}
                      <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        {feature.title}
                      </h3>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-lg bg-accent-lime flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-black" />
                            </div>
                            <span className="text-gray-700 leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-300">
              Modern technologies for a robust and scalable solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              >
                <h3 className="font-bold text-xl mb-4 text-accent-lime">{category}</h3>
                <ul className="space-y-2">
                  {technologies.map((tech) => (
                    <li key={tech} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black">
              Measurable Impact
            </h2>
            <p className="text-2xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              The app transformed Chery Bangladesh's customer engagement, digitizing the entire 
              vehicle ownership journey from discovery to after-sales service.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "60%", label: "Reduced customer service calls" },
                { value: "3x", label: "Increased test drive bookings" },
                { value: "5000+", label: "Downloads in first month" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-black/10 p-8 rounded-3xl">
                  <div className="text-5xl font-extrabold text-black mb-2">{stat.value}</div>
                  <div className="text-black/80 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              View More Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
