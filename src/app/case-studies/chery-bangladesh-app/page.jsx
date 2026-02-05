'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Award, Users, TrendingUp, Smartphone, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CheryBangladeshAppCaseStudy() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev === 0 ? featuredScreens.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev === featuredScreens.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  // Featured screens for slider (key features)
  const featuredScreens = [
    {
      title: "Comprehensive Home Dashboard",
      description: "Feature-rich home screen serving as the central hub for all automotive needs. Dynamic hero slider showcases latest vehicles and promotions, while quick action buttons provide instant access to key features like service booking, test drives, and dealer locator.",
      highlights: [
        "Dynamic banner slider with auto-play",
        "Quick access to 6+ primary features",
        "Featured vehicles carousel with pricing",
        "Latest news and event highlights",
        "Personalized recommendations"
      ],
      image: "/images/projects/cherymobileapp/02-home-screen.jpg",
      badge: "Dashboard"
    },
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
      description: "Schedule test drives with an intuitive multi-step booking flow. Select your preferred vehicle, choose a convenient dealership location, pick date and time, and book your slot in real-time. The system prevents double bookings and sends instant confirmation notifications.",
      highlights: [
        "Real-time availability calendar",
        "Vehicle and dealer selection",
        "Date/time slot picker with instant confirmation",
        "SMS and push notification reminders",
        "Easy rescheduling and cancellation"
      ],
      image: "/images/projects/cherymobileapp/17-testdrive-vehicle-selection.jpg",
      badge: "Test Drive"
    },
    {
      title: "Service Booking & Management",
      description: "Book service appointments starting with vehicle selection from your garage or vehicle registration. The app remembers your vehicles and their service history, making future bookings even faster with pre-filled information.",
      highlights: [
        "Select from registered vehicles",
        "Multiple service types selection",
        "Preferred service center booking",
        "Service history tracking",
        "Automated maintenance reminders"
      ],
      image: "/images/projects/cherymobileapp/11-service-booking-vehicle.jpg",
      badge: "Service Management"
    },
    {
      title: "Parts & Accessories E-commerce",
      description: "Complete online store for genuine Chery parts and accessories. Browse categories including exterior accessories, interior upgrades, performance parts, and maintenance items. Each product features detailed descriptions, specifications, and compatibility information.",
      highlights: [
        "Genuine parts catalog with 500+ products",
        "Category-based browsing and search",
        "Product compatibility checking",
        "Detailed specifications and fitment info",
        "Stock availability indicators"
      ],
      image: "/images/projects/cherymobileapp/28-shop-accessories.jpg",
      badge: "E-commerce"
    },
    {
      title: "Smart Shopping Cart",
      description: "Seamless cart experience with real-time price calculations, quantity management, and discount code application. Shows free shipping threshold progress, calculates savings, and synchronizes across devices via Supabase real-time subscriptions.",
      highlights: [
        "Real-time cart synchronization",
        "Quantity adjustment with stock checking",
        "Discount code application",
        "Free shipping progress indicator (5000 BDT)",
        "Total savings calculation"
      ],
      image: "/images/projects/cherymobileapp/30-shop-cart.jpg",
      badge: "Shopping Cart"
    },
    {
      title: "Secure Checkout Process",
      description: "Streamlined checkout with SSL Commerce payment gateway integration supporting multiple payment methods including credit cards, bKash, Nagad, and Rocket. Secure payment processing with delivery address management and order tracking.",
      highlights: [
        "SSL Commerce payment gateway",
        "Multiple payment methods (Card, bKash, Nagad)",
        "Delivery address management",
        "Order summary with breakdowns",
        "256-bit SSL encryption"
      ],
      image: "/images/projects/cherymobileapp/31-shop-checkout.jpg",
      badge: "Secure Payment"
    },
    {
      title: "Profile & Account Settings",
      description: "Comprehensive account management hub where users can view and edit personal information, manage preferences, view activity history, and control privacy settings. Clean interface with organized sections for easy navigation.",
      highlights: [
        "Edit personal information and contact details",
        "Profile picture upload and management",
        "Password and security settings",
        "Notification preferences control",
        "Language and region settings"
      ],
      image: "/images/projects/cherymobileapp/33-profile-settings.jpg",
      badge: "Account"
    },
    {
      title: "My Vehicles Management",
      description: "Manage owned vehicles with detailed information tracking. Add vehicles with VIN numbers, track service history, upload documents to digital glovebox, and receive maintenance reminders based on mileage and time intervals.",
      highlights: [
        "Add multiple vehicles with VIN scanning",
        "Service history tracking per vehicle",
        "Digital document storage",
        "Maintenance reminder system",
        "Vehicle photos and notes"
      ],
      image: "/images/projects/cherymobileapp/20-profile-my-vehicles.jpg",
      badge: "My Vehicles"
    },
    {
      title: "24/7 Emergency Support",
      description: "Access immediate roadside assistance with one tap. Request towing, battery jump-start, tire change, fuel delivery, or lockout assistance. Real-time location sharing ensures help arrives quickly, with estimated arrival time display.",
      highlights: [
        "24/7 emergency hotline access",
        "Automatic location sharing",
        "Multiple service types (tow, battery, tire)",
        "Estimated arrival time display",
        "Direct communication with service provider"
      ],
      image: "/images/projects/cherymobileapp/09-emergency-support.jpg",
      badge: "Emergency"
    }
  ];

  // Additional features for grid layout
  const additionalFeatures = [
    {
      title: "Seamless User Onboarding",
      description: "Welcome users with an elegant splash screen and intuitive onboarding experience. The app features a clean, modern interface that introduces key features and guides users through initial setup.",
      highlights: [
        "Elegant animated splash screen with branding",
        "Quick account creation with email/password",
        "Phone number verification support"
      ],
      image: "/images/projects/cherymobileapp/01-onboarding-splash.jpg",
      badge: "Onboarding"
    },
    {
      title: "Vehicle Specifications",
      description: "Dive deep into vehicle details with comprehensive specification sheets covering engine performance, dimensions, fuel efficiency, safety features, and technology.",
      highlights: [
        "Complete technical specifications by category",
        "Performance metrics and fuel economy",
        "Safety ratings and features breakdown"
      ],
      image: "/images/projects/cherymobileapp/24-products-vehicle-specs.jpg",
      badge: "Specifications"
    },
    {
      title: "Vehicle Gallery",
      description: "Experience vehicles through high-resolution photo galleries showcasing exterior angles, interior details, and feature highlights.",
      highlights: [
        "Professional photography with multiple angles",
        "Interior cabin detailed shots",
        "Pinch-to-zoom functionality"
      ],
      image: "/images/projects/cherymobileapp/25-products-vehicle-gallery.jpg",
      badge: "Gallery"
    },
    {
      title: "Feature Comparison",
      description: "Compare multiple Chery models side-by-side with detailed feature matrices and visual indicators highlighting differences.",
      highlights: [
        "Side-by-side comparison of 2-3 vehicles",
        "Specification difference highlights",
        "Price and value comparison"
      ],
      image: "/images/projects/cherymobileapp/27-products-compare-vehicles.jpg",
      badge: "Comparison"
    },
    {
      title: "Test Drive Scheduling",
      description: "Smart date and time selection interface with real-time availability checking and automatic confirmation notifications.",
      highlights: [
        "Interactive calendar with available dates",
        "Time slot selection with availability status",
        "Calendar sync integration"
      ],
      image: "/images/projects/cherymobileapp/18-testdrive-schedule-datetime.jpg",
      badge: "Scheduling"
    },
    {
      title: "Service Type Selection",
      description: "Choose from comprehensive automotive services including maintenance, repairs, inspections, and warranty work.",
      highlights: [
        "Multiple service types selection",
        "Oil change, tire rotation, brake service",
        "Service package bundles for savings"
      ],
      image: "/images/projects/cherymobileapp/12-service-booking-services.jpg",
      badge: "Services"
    },
    {
      title: "Service Center Selection",
      description: "Find nearest authorized Chery service centers with integrated maps, customer ratings, and real-time availability.",
      highlights: [
        "Map view with service center markers",
        "Distance calculation from current location",
        "Get directions with one tap"
      ],
      image: "/images/projects/cherymobileapp/13-service-booking-location.jpg",
      badge: "Location"
    },
    {
      title: "Appointment Scheduling",
      description: "Select preferred date and time for service appointments with smart scheduling considering service duration and technician availability.",
      highlights: [
        "Calendar view with available dates",
        "Peak hour indicators",
        "Waitlist option for busy periods"
      ],
      image: "/images/projects/cherymobileapp/14-service-booking-schedule.jpg",
      badge: "Appointment"
    },
    {
      title: "Booking Review",
      description: "Review all booking details before final submission with complete summary and price breakdown.",
      highlights: [
        "Complete booking summary review",
        "Price breakdown with estimates",
        "One-tap confirmation"
      ],
      image: "/images/projects/cherymobileapp/15-service-booking-review.jpg",
      badge: "Review"
    },
    {
      title: "Booking Confirmation",
      description: "Instant confirmation with booking reference, automatic calendar integration, and SMS reminders.",
      highlights: [
        "Booking reference number generation",
        "Confirmation email and SMS",
        "Add to calendar integration"
      ],
      image: "/images/projects/cherymobileapp/16-service-booking-confirmation.jpg",
      badge: "Confirmation"
    },
    {
      title: "Product Details",
      description: "Comprehensive product pages with multiple images, specifications, compatibility checking, and customer reviews.",
      highlights: [
        "Multiple product images with zoom",
        "Vehicle compatibility checker",
        "Customer reviews and ratings"
      ],
      image: "/images/projects/cherymobileapp/29-shop-product-details.jpg",
      badge: "Product Info"
    },
    {
      title: "Order Confirmation",
      description: "Instant order confirmation with tracking number, estimated delivery, and real-time status updates.",
      highlights: [
        "Order confirmation with tracking ID",
        "Estimated delivery timeline",
        "Invoice download option"
      ],
      image: "/images/projects/cherymobileapp/32-shop-order-confirmation.jpg",
      badge: "Order Status"
    },
    {
      title: "Profile Editor",
      description: "Edit user profile with form validation, real-time updates, and instant sync across all devices.",
      highlights: [
        "Real-time form validation",
        "Profile picture upload with cropping",
        "Phone number verification"
      ],
      image: "/images/projects/cherymobileapp/34-profile-edit.jpg",
      badge: "Edit Profile"
    },
    {
      title: "Bookings History",
      description: "View all service and test drive bookings with status tracking, quick reschedule, and cancellation options.",
      highlights: [
        "Upcoming and past bookings view",
        "Booking status indicators",
        "Quick reschedule functionality"
      ],
      image: "/images/projects/cherymobileapp/35-profile-bookings.jpg",
      badge: "Bookings"
    },
    {
      title: "Order History",
      description: "Complete order history with tracking, invoice downloads, returns management, and easy reordering.",
      highlights: [
        "Complete order history with search",
        "Real-time shipment tracking",
        "Easy reordering of past purchases"
      ],
      image: "/images/projects/cherymobileapp/36-profile-orders.jpg",
      badge: "Orders"
    },
    {
      title: "Dealer Locator",
      description: "Find authorized Chery dealerships with interactive map, distance calculation, and direct contact options.",
      highlights: [
        "Interactive map with dealership markers",
        "Operating hours and contact details",
        "Get directions or call directly"
      ],
      image: "/images/projects/cherymobileapp/21-find-dealer-search.jpg",
      badge: "Dealers"
    },
    {
      title: "Latest News",
      description: "Stay informed with automotive news, company announcements, and industry updates with social sharing.",
      highlights: [
        "Latest automotive and company news",
        "Category filtering",
        "Social media sharing"
      ],
      image: "/images/projects/cherymobileapp/06-latest-news.jpg",
      badge: "News"
    },
    {
      title: "Events Calendar",
      description: "Discover and register for automotive events including auto shows, launches, and owner meetups.",
      highlights: [
        "Event calendar with upcoming shows",
        "RSVP and registration system",
        "Calendar integration for reminders"
      ],
      image: "/images/projects/cherymobileapp/07-upcoming-events.jpg",
      badge: "Events"
    },
    {
      title: "Featured Products",
      description: "Discover curated featured products, new arrivals, and exclusive app-only discounts.",
      highlights: [
        "Curated featured products",
        "Exclusive app-only discounts",
        "Limited-time special offers"
      ],
      image: "/images/projects/cherymobileapp/05-featured-products.jpg",
      badge: "Featured"
    },
    {
      title: "Quick Support",
      description: "Get help fast with FAQ, support tickets, live chat, and direct contact options.",
      highlights: [
        "Comprehensive FAQ section",
        "Live chat with customer service",
        "Help topic search functionality"
      ],
      image: "/images/projects/cherymobileapp/10-quick-support.jpg",
      badge: "Support"
    },
    {
      title: "Company Information",
      description: "Learn about Chery Bangladesh's mission, vision, achievements, and commitment to quality.",
      highlights: [
        "Company mission and vision statements",
        "Achievement statistics",
        "Innovation initiatives"
      ],
      image: "/images/projects/cherymobileapp/04-about-excellence.jpg",
      badge: "About Us"
    },
    {
      title: "Services Menu",
      description: "Quick access menu showcasing all available services with clear iconography and descriptions.",
      highlights: [
        "Visual service menu with icons",
        "Quick navigation to all features",
        "Personalized recommendations"
      ],
      image: "/images/projects/cherymobileapp/03-services-menu.jpg",
      badge: "Services"
    },
    {
      title: "Contact & Find Us",
      description: "Multiple contact channels including showroom locations, contact form, and social media integration.",
      highlights: [
        "Contact form with quick submission",
        "Showroom locations on map",
        "Office hours and directions"
      ],
      image: "/images/projects/cherymobileapp/08-find-us-contact.jpg",
      badge: "Contact"
    },
    {
      title: "Notifications Center",
      description: "Stay updated with push and in-app notifications with customizable category-based preferences.",
      highlights: [
        "Push notification support",
        "Category-based preferences",
        "Quick actions from notifications"
      ],
      image: "/images/projects/cherymobileapp/37-notifications.jpg",
      badge: "Notifications"
    },
    {
      title: "Navigation Menu",
      description: "Comprehensive side menu with user profile summary and organized access to all app sections.",
      highlights: [
        "User profile summary at top",
        "Quick links to all major features",
        "Legal documents access"
      ],
      image: "/images/projects/cherymobileapp/38-menu-drawer.jpg",
      badge: "Navigation"
    },
    {
      title: "App Information",
      description: "View app version, credits, legal notices, and links to support documentation.",
      highlights: [
        "App version and build information",
        "Development credits",
        "Feedback submission"
      ],
      image: "/images/projects/cherymobileapp/39-about-app.jpg",
      badge: "App Info"
    },
    {
      title: "FAQ",
      description: "Comprehensive FAQ with searchable interface, expandable answers, and related topic suggestions.",
      highlights: [
        "Categorized FAQ sections",
        "Search functionality",
        "Related topics suggestions"
      ],
      image: "/images/projects/cherymobileapp/40-faq.jpg",
      badge: "FAQ"
    },
    {
      title: "Terms & Conditions",
      description: "Complete terms of service with section navigation and transparent acceptance tracking.",
      highlights: [
        "Complete terms of service",
        "Section-by-section navigation",
        "Printable format"
      ],
      image: "/images/projects/cherymobileapp/41-terms-conditions.jpg",
      badge: "Legal"
    },
    {
      title: "Privacy Policy",
      description: "Detailed privacy policy with GDPR compliance and user data management options.",
      highlights: [
        "Data collection transparency",
        "User rights and controls",
        "Data deletion requests"
      ],
      image: "/images/projects/cherymobileapp/42-privacy-policy.jpg",
      badge: "Privacy"
    },
    {
      title: "Customer Support",
      description: "Multi-channel support access with ticket submission, tracking, and priority support options.",
      highlights: [
        "Multi-channel support access",
        "Support ticket tracking",
        "Priority support for urgent issues"
      ],
      image: "/images/projects/cherymobileapp/43-contact-support.jpg",
      badge: "Support"
    },
    {
      title: "Vehicle Details",
      description: "In-depth vehicle information with comprehensive specs, pricing, and downloadable documentation.",
      highlights: [
        "Complete technical specifications",
        "Pricing with financing calculator",
        "Downloadable brochures"
      ],
      image: "/images/projects/cherymobileapp/23-products-vehicle-details.jpg",
      badge: "Details"
    },
    {
      title: "Vehicle Features",
      description: "Explore vehicle features with detailed descriptions, benefits, and comparison capabilities.",
      highlights: [
        "Feature highlights with descriptions",
        "Technology and safety features",
        "Feature comparison tool"
      ],
      image: "/images/projects/cherymobileapp/26-products-vehicle-features.jpg",
      badge: "Features"
    },
    {
      title: "Test Drive Submit",
      description: "Complete test drive booking submission with personal information and driving license verification.",
      highlights: [
        "Personal information form",
        "Driving license verification",
        "Booking confirmation"
      ],
      image: "/images/projects/cherymobileapp/19-testdrive-booking-submit.jpg",
      badge: "Submit"
    }
  ];

  const techStack = {
    "Frontend": ["React Native", "Expo SDK 54", "TypeScript", "React Navigation 6", "Framer Motion"],
    "Backend": ["Supabase", "PostgreSQL", "REST API", "Row Level Security", "Real-time Subscriptions"],
    "Payment": ["SSL Commerce Gateway", "bKash", "Nagad", "Credit/Debit Cards"],
    "Features": ["Push Notifications", "Google Maps", "360° Viewer", "Image Upload", "PDF Generation"],
    "Security": ["JWT Authentication", "256-bit SSL", "Data Encryption", "Secure Storage"],
    "Tools": ["Figma", "Postman", "Git", "VS Code", "Expo Go"]
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
                  A comprehensive automotive digital ecosystem with 43 screens covering vehicle discovery, test drives, 
                  service booking, e-commerce, emergency support, and complete customer journey management. Built with 
                  React Native, Expo SDK 54, and Supabase with 38 database tables.
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
                Traditional automotive dealerships in Bangladesh lacked a comprehensive digital platform. Customers struggled 
                with fragmented experiences across vehicle browsing, test drives, service bookings, parts purchasing, and 
                emergency support. No unified solution existed for the complete automotive ownership journey from discovery 
                to after-sales service.
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
                Developed a full-featured cross-platform mobile app with 43 screens covering every touchpoint of the 
                automotive customer journey. Integrated React Native with Expo SDK 54, Supabase backend (38 database tables), 
                SSL Commerce payment gateway, real-time synchronization, push notifications, and comprehensive Row Level Security. 
                Complete digital transformation from vehicle discovery to ownership and beyond.
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
                KEY FEATURES SHOWCASE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Interactive Feature <span className="text-accent-lime">Highlights</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
                Explore the 10 core features that define the complete automotive experience
              </p>
              
              {/* Slide Counter */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/5 rounded-full">
                <span className="text-2xl font-extrabold text-black">{currentSlide + 1}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600 font-semibold">{featuredScreens.length}</span>
              </div>
            </div>

            {/* Feature Slider */}
            <div className="relative">
              {/* Main Slider Container */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Screenshot */}
                    <div className={currentSlide % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="relative group max-w-sm mx-auto">
                        {/* Badge */}
                        <div className="absolute -top-4 -left-4 z-10 px-4 py-2 bg-accent-lime text-black rounded-xl font-bold text-sm shadow-lg">
                          {featuredScreens[currentSlide].badge}
                        </div>
                        
                        {/* Screenshot */}
                        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                          <Image
                            src={featuredScreens[currentSlide].image}
                            alt={featuredScreens[currentSlide].title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={currentSlide === 0}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className={currentSlide % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                          {featuredScreens[currentSlide].title}
                        </h3>
                        
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {featuredScreens[currentSlide].description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3">
                          {featuredScreens[currentSlide].highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-6 h-6 rounded-lg bg-accent-lime flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle2 className="w-4 h-4 text-black" />
                              </div>
                              <span className="text-gray-700 leading-relaxed">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? featuredScreens.length - 1 : prev - 1))}
                  className="w-14 h-14 rounded-full bg-black hover:bg-accent-lime text-accent-lime hover:text-black border-2 border-black flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-2">
                  {featuredScreens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all ${
                        currentSlide === idx
                          ? 'w-8 h-3 bg-accent-lime rounded-full'
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev === featuredScreens.length - 1 ? 0 : prev + 1))}
                  className="w-14 h-14 rounded-full bg-black hover:bg-accent-lime text-accent-lime hover:text-black border-2 border-black flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Keyboard Navigation Hint */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Use <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">←</kbd> and <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">→</kbd> arrow keys to navigate
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-black/5 text-black rounded-full text-sm font-bold mb-6">
                ALL FEATURES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Complete Feature <span className="text-accent-lime">Ecosystem</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                33 additional screens covering every aspect of the automotive journey
              </p>
            </div>

            {/* Alternating Feature Rows */}
            <div className="space-y-20">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Screenshot */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative group max-w-sm mx-auto">
                      {/* Badge */}
                      <div className="absolute -top-4 -left-4 z-10 px-4 py-2 bg-black/10 backdrop-blur-sm text-black rounded-xl font-bold text-sm shadow-lg border border-gray-200">
                        {feature.badge}
                      </div>
                      
                      {/* Screenshot */}
                      <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 group-hover:scale-105 transition-transform duration-500">
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
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                        {feature.title}
                      </h3>
                      
                      <p className="text-base text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gray-600" />
                            </div>
                            <span className="text-gray-600 leading-relaxed text-sm">{highlight}</span>
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

      {/* Complete User Journey */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-accent-lime/20 backdrop-blur-sm text-accent-lime rounded-full text-sm font-bold mb-6">
                CUSTOMER JOURNEY
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                End-to-End Automotive <span className="text-accent-lime">Experience</span>
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto text-lg">
                From initial discovery to long-term ownership, every touchpoint is digitized and optimized
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Discovery Phase",
                  icon: "🔍",
                  color: "from-blue-500 to-cyan-500",
                  features: [
                    "Elegant onboarding with splash screen",
                    "Browse complete vehicle catalog with filters",
                    "View detailed specs, features, and 360° photos",
                    "Compare multiple vehicles side-by-side",
                    "Read latest news and upcoming events"
                  ]
                },
                {
                  phase: "Engagement Phase",
                  icon: "🤝",
                  color: "from-purple-500 to-pink-500",
                  features: [
                    "Schedule test drives with real-time availability",
                    "Find nearest dealerships on interactive map",
                    "Receive personalized vehicle recommendations",
                    "Join events and auto show registrations",
                    "Subscribe to promotional offers"
                  ]
                },
                {
                  phase: "Purchase Phase",
                  icon: "💳",
                  color: "from-green-500 to-emerald-500",
                  features: [
                    "Shop genuine parts and accessories",
                    "Smart cart with real-time sync",
                    "Multiple payment methods (SSL Commerce)",
                    "Track orders with live updates",
                    "Download invoices and receipts"
                  ]
                },
                {
                  phase: "Ownership Phase",
                  icon: "🚗",
                  color: "from-orange-500 to-red-500",
                  features: [
                    "Add vehicles to digital garage",
                    "Upload documents to digital glovebox",
                    "Book service appointments easily",
                    "Track service history per vehicle",
                    "Receive maintenance reminders"
                  ]
                },
                {
                  phase: "Support Phase",
                  icon: "🆘",
                  color: "from-yellow-500 to-orange-500",
                  features: [
                    "24/7 emergency roadside assistance",
                    "Quick support via chat, email, phone",
                    "Submit and track support tickets",
                    "Browse comprehensive FAQ",
                    "Provide feedback and ratings"
                  ]
                }
              ].map((journey, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {idx < 4 && (
                    <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-accent-lime to-transparent hidden md:block" />
                  )}
                  
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-accent-lime transition-colors">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${journey.color} flex items-center justify-center text-3xl shrink-0 shadow-lg`}>
                        {journey.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="px-3 py-1 bg-accent-lime/20 text-accent-lime rounded-lg text-xs font-bold">
                            PHASE {idx + 1}
                          </div>
                          <h3 className="text-2xl font-extrabold">{journey.phase}</h3>
                        </div>
                        
                        <ul className="grid md:grid-cols-2 gap-3">
                          {journey.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start gap-2">
                              <div className="w-5 h-5 rounded bg-accent-lime/20 flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle2 className="w-3 h-3 text-accent-lime" />
                              </div>
                              <span className="text-white/90 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Journey Stats */}
            <div className="mt-16 grid md:grid-cols-4 gap-6">
              {[
                { label: "Total Screens", value: "43", icon: "📱" },
                { label: "Database Tables", value: "38", icon: "🗄️" },
                { label: "API Endpoints", value: "50+", icon: "🔌" },
                { label: "User Actions", value: "200+", icon: "⚡" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-extrabold text-accent-lime mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Database Infrastructure Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
                DATABASE INFRASTRUCTURE
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Robust Data <span className="text-accent-lime">Architecture</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                38 Supabase tables with Row Level Security, real-time subscriptions, and comprehensive data management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "User Management",
                  icon: "👤",
                  tables: ["profiles", "user_preferences", "user_addresses", "user_sessions"],
                  description: "Complete user account and session management"
                },
                {
                  category: "E-Commerce",
                  icon: "🛒",
                  tables: ["products", "cart (RLS)", "orders", "order_items", "wishlist"],
                  description: "Full shopping and order management system"
                },
                {
                  category: "Vehicles",
                  icon: "🚗",
                  tables: ["vehicles", "vehicle_specs", "vehicle_images", "my_vehicles"],
                  description: "Comprehensive vehicle catalog and ownership"
                },
                {
                  category: "Services",
                  icon: "🔧",
                  tables: ["service_centers", "service_bookings", "service_types", "service_history"],
                  description: "Complete service booking and tracking"
                },
                {
                  category: "Test Drives",
                  icon: "🚙",
                  tables: ["test_drive_bookings", "test_drive_slots", "dealerships"],
                  description: "Test drive scheduling and management"
                },
                {
                  category: "Documents",
                  icon: "📄",
                  tables: ["vehicle_documents", "document_storage", "warranties"],
                  description: "Digital glovebox and document management"
                },
                {
                  category: "Content",
                  icon: "📰",
                  tables: ["news_articles", "events", "promotions", "banners"],
                  description: "Dynamic content and marketing management"
                },
                {
                  category: "Support",
                  icon: "💬",
                  tables: ["support_tickets", "notifications", "faq", "feedback"],
                  description: "Customer support and communication"
                }
              ].map((db, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-colors"
                >
                  <div className="text-4xl mb-3">{db.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{db.category}</h3>
                  <p className="text-sm text-gray-600 mb-3">{db.description}</p>
                  <div className="space-y-1">
                    {db.tables.map((table, tidx) => (
                      <div key={tidx} className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-200">
                        {table}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Database Features */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Row Level Security",
                  description: "Every table protected with RLS policies ensuring users can only access their own data",
                  icon: "🔒"
                },
                {
                  title: "Real-time Sync",
                  description: "Supabase subscriptions enable instant cart updates and live booking availability",
                  icon: "⚡"
                },
                {
                  title: "Scalable Architecture",
                  description: "PostgreSQL database designed to handle 100K+ users with optimized queries and indexes",
                  icon: "📈"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="bg-gradient-to-br from-accent-lime/10 to-accent-lime/5 p-6 rounded-2xl"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black text-center">
              Measurable Business Impact
            </h2>
            <p className="text-2xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
              The comprehensive mobile platform transformed Chery Bangladesh's digital presence and customer engagement, 
              delivering measurable results across all business metrics.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { value: "50,000+", label: "App Downloads", sublabel: "First 3 months" },
                { value: "4.8/5", label: "User Rating", sublabel: "Play Store & App Store" },
                { value: "35,000+", label: "Monthly Active Users", sublabel: "85% retention rate" },
                { value: "300%", label: "Test Drive Bookings", sublabel: "vs traditional method" },
                { value: "60%", label: "Service Call Reduction", sublabel: "Self-service adoption" },
                { value: "BDT 50L+", label: "Monthly E-commerce", sublabel: "Parts & accessories" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-black/20 hover:border-black hover:bg-black/20 transition-all"
                >
                  <div className="text-5xl font-extrabold text-black mb-2">{stat.value}</div>
                  <div className="text-black font-bold text-lg mb-1">{stat.label}</div>
                  <div className="text-black/70 text-sm font-medium">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Digital Transformation Success",
                  points: [
                    "Reduced physical dealership visits by 40%",
                    "Automated 70% of customer service inquiries",
                    "24/7 service availability vs 9-6 business hours",
                    "Real-time inventory and booking management"
                  ]
                },
                {
                  title: "Customer Experience Excellence",
                  points: [
                    "Average session duration: 8.5 minutes",
                    "3.2 features used per session",
                    "92% task completion rate",
                    "4.8/5 customer satisfaction score"
                  ]
                }
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="bg-black/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-black/20"
                >
                  <h3 className="text-2xl font-extrabold text-black mb-4">{achievement.title}</h3>
                  <ul className="space-y-2">
                    {achievement.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-lg bg-black flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-accent-lime" />
                        </div>
                        <span className="text-black font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
              >
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
