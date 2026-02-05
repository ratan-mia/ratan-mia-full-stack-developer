'use client';

import { ArrowLeft, Award, Calendar, ExternalLink, Users, Zap, Check, DollarSign, Clock, Shield, BarChart, Star, Smartphone, Monitor, Database, Code, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TufLetCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenge', 'solution', 'features', 'tech-stack', 'results', 'impact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'overview', label: 'Project Overview', icon: ExternalLink },
    { id: 'challenge', label: 'The Challenge', icon: Zap },
    { id: 'solution', label: 'Solution', icon: CheckCircle },
    { id: 'features', label: 'Key Features', icon: Star },
    { id: 'tech-stack', label: 'Tech Stack', icon: Code },
    { id: 'results', label: 'Results & Impact', icon: BarChart },
    { id: 'impact', label: 'Business Impact', icon: Award },
  ];

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
                ⚽ BOOKING PLATFORM
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                TufLet<br />Booking System
              </h1>
              <p className="text-xl md:text-2xl text-black/80 mb-8 font-medium leading-relaxed">
                A comprehensive real-time booking platform for sports turfs with integrated payments, availability management, and owner dashboard.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">React Native</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Next.js</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Prisma</span>
                <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">SSL Commerz</span>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://www.turflet.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Platform
                </a>
              </div>
            </div>

            <div className="relative h-125 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/turflet/www.turflet.app.png"
                alt="TufLet Platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="relative">
        {/* Sidebar Navigation - Fixed on left */}
        <aside className="hidden lg:block fixed left-8 top-32 w-64 z-30">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6">
            <h3 className="text-sm font-extrabold text-gray-400 mb-4 uppercase tracking-wide">
              On This Page
            </h3>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      activeSection === item.id
                        ? 'bg-accent-lime text-black font-bold shadow-md'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-black font-medium'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:ml-80 lg:mr-8">
          {/* Project Overview */}
          <section id="overview" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
              <div className="text-4xl mb-4">🏟️</div>
              <h3 className="text-xl font-extrabold mb-2">Industry</h3>
              <p className="text-gray-600 font-medium">Sports & Recreation</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-extrabold mb-2">Duration</h3>
              <p className="text-gray-600 font-medium">3 Months</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-extrabold mb-2">Deliverables</h3>
              <p className="text-gray-600 font-medium">Mobile App + Admin Panel</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-extrabold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                TufLet is a revolutionary booking platform designed to connect sports enthusiasts with turf owners. The platform needed to handle real-time availability checks, prevent double bookings, integrate secure payment processing, and provide comprehensive management tools for turf owners.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                The solution includes a mobile app for players to browse and book turfs, a web-based admin panel for owners to manage their facilities, and a robust backend system that handles complex booking logic, payment processing, and analytics.
              </p>
            </div>
            
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/projects/turflet/mockup/owner-dashboard and player -app.png"
                alt="TufLet Platform Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section id="challenge" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              🎯 THE CHALLENGE
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Complex Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime hover:shadow-lg transition-all">
              <h3 className="text-2xl font-extrabold mb-4">Real-Time Availability</h3>
              <p className="text-gray-700 leading-relaxed font-medium mb-4">
                Needed to show accurate slot availability across 30-day calendar with instant updates to prevent double bookings and handle concurrent user requests.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/projects/turflet/screenshots/06-booking-date-time.jpg"
                  alt="Real-time booking calendar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime hover:shadow-lg transition-all">
              <h3 className="text-2xl font-extrabold mb-4">Payment Integration</h3>
              <p className="text-gray-700 leading-relaxed font-medium mb-4">
                Seamless SSL Commerz integration with multiple payment methods, auto-redirect after payment, and transaction validation with proper error handling.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/projects/turflet/screenshots/07-booking-confirmation.jpg"
                  alt="Payment integration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime hover:shadow-lg transition-all">
              <h3 className="text-2xl font-extrabold mb-4">Dynamic Pricing</h3>
              <p className="text-gray-700 leading-relaxed font-medium mb-4">
                Complex pricing logic with base rates, weekend surcharges, peak hour pricing, early bird discounts, and special promotional rates.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/projects/turflet/screenshots/04-turf-details-champions.jpg"
                  alt="Dynamic pricing display"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime hover:shadow-lg transition-all">
              <h3 className="text-2xl font-extrabold mb-4">Multi-Role Dashboard</h3>
              <p className="text-gray-700 leading-relaxed font-medium mb-4">
                Separate interfaces for players, turf owners, and platform admins with role-based access control and feature permissions.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/projects/turflet/owners-dashboard.png"
                  alt="Multi-role dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
            </div>
          </section>

          {/* Solution Section */}
          <section id="solution" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  💡 THE SOLUTION
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Approach</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We built a comprehensive multi-platform solution combining mobile apps and web dashboards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-accent-lime/50 transition-all">
                  <div className="w-16 h-16 bg-accent-lime rounded-2xl flex items-center justify-center mb-6">
                    <Smartphone className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4">Mobile App</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    React Native mobile application for both players and turf owners with intuitive booking flow.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Real-time availability calendar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Integrated SSL Commerz payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Push notifications for bookings</span>
                    </li>
                  </ul>
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src="/images/projects/turflet/screenshots/03-home-search-turfs.jpg"
                      alt="Mobile App Interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-accent-lime/50 transition-all">
                  <div className="w-16 h-16 bg-accent-lime rounded-2xl flex items-center justify-center mb-6">
                    <Monitor className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4">Admin Dashboard</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Next.js web dashboard for platform administrators with comprehensive management tools.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Analytics and revenue tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Turf approval workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">User and booking management</span>
                    </li>
                  </ul>
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src="/images/projects/turflet/clients-revenue-details.png"
                      alt="Admin Dashboard Interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-extrabold mb-6 text-center">System Architecture</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-10 h-10 text-gray-700" />
                    </div>
                    <h4 className="font-bold mb-2">Frontend</h4>
                    <p className="text-sm text-gray-600">React Native<br/>Expo Framework</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-lime rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Database className="w-10 h-10 text-black" />
                    </div>
                    <h4 className="font-bold mb-2">Backend</h4>
                    <p className="text-sm text-gray-600">Supabase PostgreSQL<br/>Prisma ORM</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-gray-700" />
                    </div>
                    <h4 className="font-bold mb-2">Payments</h4>
                    <p className="text-sm text-gray-600">SSL Commerz<br/>Gateway</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  ⚡ KEY FEATURES
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Powerful Capabilities</h2>
              </div>

              {/* Player Features */}
              <div className="mb-16">
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  Player Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: Calendar,
                      title: 'Real-Time Booking',
                      description: '30-day calendar with hourly time slots, dynamic pricing, and instant confirmation',
                      image: '/images/projects/turflet/screenshots/06-booking-date-time.jpg'
                    },
                    {
                      icon: DollarSign,
                      title: 'Multiple Payment Options',
                      description: 'SSL Commerz integration supporting cards, bKash, Nagad, and bank transfers',
                      image: '/images/projects/turflet/screenshots/07-booking-confirmation.jpg'
                    },
                    {
                      icon: Star,
                      title: 'Reviews & Ratings',
                      description: '5-star rating system with photo uploads and verified booking badges',
                      image: '/images/projects/turflet/screenshots/05-turf-facilities-reviews.jpg'
                    },
                    {
                      icon: Award,
                      title: 'Loyalty Rewards',
                      description: 'Tier-based system with points on every booking and exclusive discounts',
                      image: '/images/projects/turflet/screenshots/14-rewards-loyalty.jpg'
                    },
                  ].map((feature, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-accent-lime/50 hover:shadow-xl transition-all group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                          <feature.icon className="w-6 h-6 text-black" />
                        </div>
                        <h4 className="text-xl font-bold group-hover:text-accent-lime transition-colors">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                      <div className="relative h-48 rounded-xl overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Player App Showcase */}
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { img: '08-my-bookings-list.jpg', title: 'My Bookings' },
                    { img: '13-user-profile.jpg', title: 'User Profile' },
                    { img: '15-points-history.jpg', title: 'Points History' },
                  ].map((item, idx) => (
                    <div key={idx} className="relative aspect-9/16 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-accent-lime transition-all">
                      <Image
                        src={`/images/projects/turflet/screenshots/${item.img}`}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Owner Features */}
              <div className="mb-16">
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-black" />
                  </div>
                  Owner Dashboard
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: BarChart,
                      title: 'Revenue Analytics',
                      description: 'Real-time revenue tracking with daily, weekly, and monthly reports'
                    },
                    {
                      icon: Calendar,
                      title: 'Booking Management',
                      description: 'View and manage all bookings with customer information and status updates'
                    },
                    {
                      icon: Clock,
                      title: 'Availability Control',
                      description: 'Set operating hours, block dates, and manage field-specific pricing'
                    },
                    {
                      icon: DollarSign,
                      title: 'Payout System',
                      description: 'Request payouts, track transaction history, and manage bank details'
                    },
                  ].map((feature, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-100 hover:border-accent-lime/50 transition-all">
                      <feature.icon className="w-8 h-8 text-accent-lime mb-4" />
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Owner Dashboard Images */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                      <Image
                        src="/images/projects/turflet/owners-dashboard.png"
                        alt="Owner Dashboard Analytics"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Owner Dashboard Overview</h4>
                    <p className="text-gray-600 leading-relaxed">Comprehensive analytics with revenue tracking, booking statistics, and performance metrics in real-time.</p>
                  </div>

                  <div className="group">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                      <Image
                        src="/images/projects/turflet/clients-revenue-details.png"
                        alt="Revenue Details and Client Management"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Revenue & Client Details</h4>
                    <p className="text-gray-600 leading-relaxed">Detailed revenue breakdown by client, booking history, and payment transaction records.</p>
                  </div>
                </div>
              </div>

              {/* Community Features */}
              <div className="mb-16">
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  Social & Community Features
                </h3>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="group">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                      <Image
                        src="/images/projects/turflet/players-community.png"
                        alt="Players Community"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Players Community</h4>
                    <p className="text-gray-600 leading-relaxed">Connect with fellow players, share experiences, and find playing partners in your area.</p>
                  </div>

                  <div className="group">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                      <Image
                        src="/images/projects/turflet/friends-family-community.png"
                        alt="Friends and Family Network"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Friends & Family</h4>
                    <p className="text-gray-600 leading-relaxed">Build your network, invite friends to join matches, and create memorable sports moments together.</p>
                  </div>

                  <div className="group">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                      <Image
                        src="/images/projects/turflet/team-details.png"
                        alt="Team Management"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Team Management</h4>
                    <p className="text-gray-600 leading-relaxed">Create and manage sports teams, track statistics, organize matches, and challenge other teams.</p>
                  </div>
                </div>
              </div>

              {/* Dual Platform Showcase */}
              <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-accent-lime via-accent-lime to-accent-lime/70 p-12">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-extrabold mb-3">Complete Platform Solution</h3>
                  <p className="text-lg text-black/80 font-medium">Player Mobile App + Owner Dashboard</p>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-black/10">
                  <Image
                    src="/images/projects/turflet/mockup/owner-dashboard and player -app.png"
                    alt="Complete Platform - Owner Dashboard and Player App"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* App Screenshots Gallery */}
              <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100 mt-16">
                <h3 className="text-2xl font-extrabold mb-6 text-center">Mobile App Screenshots</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    '03-home-search-turfs.jpg',
                    '04-turf-details-champions.jpg',
                    '06-booking-date-time.jpg',
                    '08-my-bookings-list.jpg',
                  ].map((img, idx) => (
                    <div key={idx} className="relative aspect-9/16 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                      <Image
                        src={`/images/projects/turflet/screenshots/${img}`}
                        alt={`TufLet Screenshot ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  🛠️ TECHNOLOGY
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Tech Stack</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { category: 'Mobile', tech: 'React Native', detail: 'Cross-platform mobile development' },
                  { category: 'Framework', tech: 'Expo', detail: 'Build and deployment tooling' },
                  { category: 'Web Admin', tech: 'Next.js 14', detail: 'Server-side rendered dashboard' },
                  { category: 'Database', tech: 'Supabase PostgreSQL', detail: 'Real-time database and auth' },
                  { category: 'ORM', tech: 'Prisma', detail: 'Type-safe database client' },
                  { category: 'Payments', tech: 'SSL Commerz', detail: 'Bangladesh payment gateway' },
                  { category: 'State', tech: 'React Context', detail: 'Global state management' },
                  { category: 'Navigation', tech: 'React Navigation', detail: 'Stack and tab navigation' },
                  { category: 'Styling', tech: 'Tailwind CSS', detail: 'Utility-first CSS framework' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
                    <div className="text-xs font-bold text-accent-lime mb-2">{item.category}</div>
                    <h4 className="text-xl font-extrabold mb-2">{item.tech}</h4>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section id="results" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  📊 RESULTS & METRICS
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Outstanding Performance</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-black" />
                  <div className="text-5xl font-extrabold mb-2">5K+</div>
                  <p className="text-black/80 font-bold">Bookings Processed</p>
                </div>

                <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                  <Users className="w-12 h-12 mx-auto mb-4 text-black" />
                  <div className="text-5xl font-extrabold mb-2">2.5K+</div>
                  <p className="text-black/80 font-bold">Active Users</p>
                </div>

                <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                  <Award className="w-12 h-12 mx-auto mb-4 text-black" />
                  <div className="text-5xl font-extrabold mb-2">0%</div>
                  <p className="text-black/80 font-bold">Double Booking Rate</p>
                </div>

                <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-black" />
                  <div className="text-5xl font-extrabold mb-2">95%</div>
                  <p className="text-black/80 font-bold">Payment Success Rate</p>
                </div>
              </div>

              {/* Visual Results Showcase */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-3xl border-2 border-gray-100">
                  <h3 className="text-xl font-extrabold mb-4">Owner Analytics Dashboard</h3>
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/projects/turflet/screenshots/20-owner-analytics.jpg"
                      alt="Owner Analytics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Real-time analytics showing booking trends, revenue growth, and occupancy rates.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-3xl border-2 border-gray-100">
                  <h3 className="text-xl font-extrabold mb-4">Revenue Tracking</h3>
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/projects/turflet/screenshots/21-owner-revenue-details.jpg"
                      alt="Revenue Details"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive revenue breakdown with transaction history and payout management.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Business Impact Section */}
          <section id="impact" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  🚀 BUSINESS IMPACT
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Transforming Sports Booking</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
                  <h3 className="text-2xl font-extrabold mb-6">For Players</h3>
                  <ul className="space-y-4">
                    {[
                      'Instant booking confirmation without phone calls',
                      'Transparent pricing with no hidden charges',
                      'Multiple payment options for convenience',
                      'Loyalty rewards on every booking',
                      'Easy cancellation and refund process',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
                  <h3 className="text-2xl font-extrabold mb-6">For Owners</h3>
                  <ul className="space-y-4">
                    {[
                      'Automated booking management system',
                      'Real-time revenue tracking and analytics',
                      'Reduced administrative overhead',
                      'Increased booking efficiency and revenue',
                      'Direct customer feedback and ratings',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-accent-lime p-8 rounded-3xl">
                <h3 className="text-2xl font-extrabold mb-6 text-center">Key Achievements</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold mb-2">100%</div>
                    <p className="text-black/80 font-medium">Booking Accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold mb-2">3x</div>
                    <p className="text-black/80 font-medium">Faster Booking Process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold mb-2">50+</div>
                    <p className="text-black/80 font-medium">Active Turf Venues</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Need a Booking Platform?
              </h2>
              <p className="text-xl text-black/80 mb-10 font-medium">
                Let's build a custom booking solution that transforms your business operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/quote"
                  className="px-10 py-5 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/case-studies"
                  className="px-10 py-5 border-2 border-black text-black rounded-xl font-extrabold hover:bg-black hover:text-accent-lime transition-all"
                >
                  More Case Studies
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
