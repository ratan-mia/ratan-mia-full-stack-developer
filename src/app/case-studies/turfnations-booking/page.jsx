'use client';

import { ArrowRight, Award, BarChart, Calendar, Check, CheckCircle, Clock, Code, Database, DollarSign, ExternalLink, Facebook, Linkedin, Monitor, Share2, Shield, Smartphone, Star, Twitter, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HeroSection from '../../components/case-studies/HeroSection';

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
    { id: 'overview', label: 'About the Project', icon: ExternalLink },
    { id: 'challenge', label: 'Requirements & Challenges', icon: Zap },
    { id: 'solution', label: 'Our Solutions', icon: CheckCircle },
    { id: 'features', label: 'Key Features', icon: Star },
    { id: 'tech-stack', label: 'Tech Stack', icon: Code },
    { id: 'results', label: 'Results & Impact', icon: BarChart },
    { id: 'impact', label: 'Business Impact', icon: Award },
  ];

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content with Sidebars */}
      <div className="relative">
        {/* Left Sidebar - Project Details & Navigation */}
        <aside className="hidden lg:block fixed left-8 top-32 w-80 z-30">
          <div className="space-y-6">
            {/* Project Details Card */}
            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              {/* Company */}
              <div>
                <h3 className="text-xs font-extrabold text-gray-500 mb-3 uppercase tracking-wider">
                  COMPANY
                </h3>
                <p className="text-2xl font-extrabold text-black">TufLet</p>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Category */}
              <div>
                <h3 className="text-xs font-extrabold text-gray-500 mb-3 uppercase tracking-wider">
                  CATEGORY
                </h3>
                <p className="text-xl font-bold text-black">Booking Platform</p>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Live View */}
              <div>
                <h3 className="text-xs font-extrabold text-gray-500 mb-3 uppercase tracking-wider">
                  LIVE VIEW
                </h3>
                <a 
                  href="https://www.turflet.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-bold text-black hover:text-accent-lime transition-colors group"
                >
                  Visit Website
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Timeline */}
              <div>
                <h3 className="text-xs font-extrabold text-gray-500 mb-3 uppercase tracking-wider">
                  TIMELINE
                </h3>
                <p className="text-2xl font-extrabold text-black">3 Months</p>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Services Provided */}
              <div>
                <h3 className="text-xs font-extrabold text-gray-500 mb-4 uppercase tracking-wider">
                  SERVICES WE PROVIDED
                </h3>
                <div className="space-y-2">
                  {['User Research', 'UI Design', 'Development', 'Backend Integration'].map((service, idx) => (
                    <div key={idx} className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-black">
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-200"></div>

              {/* Share */}
              <div>
                <h3 className="text-lg font-extrabold text-black mb-4">
                  Share this Case Study:
                </h3>
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-12 h-12 bg-white hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out this amazing booking platform case study!`, '_blank')}
                    className="w-12 h-12 bg-white hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-12 h-12 bg-white hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Check out this amazing booking platform case study! ' + window.location.href)}`, '_blank')}
                    className="w-12 h-12 bg-white hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    aria-label="Share on WhatsApp"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
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
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:ml-96 lg:mr-8">
          {/* Project Overview */}
          <section id="overview" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="max-w-7xl">
              <h2 className="text-4xl font-extrabold mb-6">About the Project</h2>
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
                className="object-contain"
              />
            </div>
          </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section id="challenge" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <Zap className="w-4 h-4" />
                  REQUIREMENTS & CHALLENGES
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Complex Requirements</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Building a real-time booking platform required solving several technical challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Calendar,
                    title: 'Real-Time Availability',
                    description: 'Show accurate slot availability with instant updates.',
                    points: ['30-day calendar view', 'Prevent double bookings', 'Handle concurrent requests']
                  },
                  {
                    icon: DollarSign,
                    title: 'Payment Integration',
                    description: 'Seamless payment processing with multiple methods.',
                    points: ['SSL Commerz gateway', 'Multiple payment options', 'Transaction validation']
                  },
                  {
                    icon: BarChart,
                    title: 'Dynamic Pricing',
                    description: 'Flexible pricing engine with various rates.',
                    points: ['Peak hour pricing', 'Weekend surcharges', 'Promotional discounts']
                  },
                  {
                    icon: Users,
                    title: 'Multi-Role Dashboard',
                    description: 'Separate interfaces for different user types.',
                    points: ['Player interface', 'Owner dashboard', 'Admin controls']
                  },
                ].map((challenge, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border-2 border-gray-100 hover:border-accent-lime/40">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                        <challenge.icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-xl font-bold">{challenge.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{challenge.description}</p>
                    <ul className="space-y-2">
                      {challenge.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-accent-lime mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section id="solution" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <CheckCircle className="w-4 h-4" />
                  OUR SOLUTIONS
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Approach</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We built a comprehensive multi-platform solution combining mobile apps and web dashboards with modern technology stack.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {/* Mobile App Solution */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-accent-lime/40">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="relative">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-20 h-20 bg-accent-lime rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-accent-lime/20">
                        <Smartphone className="w-10 h-10 text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold mb-1">Mobile App</h3>
                        <p className="text-base text-accent-lime font-bold">React Native • Expo</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-10 text-base">
                      Cross-platform mobile application for both players and turf owners, featuring an intuitive booking flow and real-time updates.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 group-hover:border-accent-lime/20 transition-colors">
                        <div className="w-10 h-10 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base mb-1">Real-time Availability</p>
                          <p className="text-sm text-gray-600">Live calendar with instant slot updates and conflict prevention</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 group-hover:border-accent-lime/20 transition-colors">
                        <div className="w-10 h-10 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base mb-1">Secure Payments</p>
                          <p className="text-sm text-gray-600">SSL Commerz integration with multiple payment methods</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 group-hover:border-accent-lime/20 transition-colors">
                        <div className="w-10 h-10 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base mb-1">Push Notifications</p>
                          <p className="text-sm text-gray-600">Instant booking confirmations and real-time updates</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 group-hover:border-accent-lime/20 transition-colors">
                        <div className="w-10 h-10 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base mb-1">Location Services</p>
                          <p className="text-sm text-gray-600">GPS-based turf discovery with map integration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admin Dashboard Solution */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-accent-lime/40">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="relative">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-20 h-20 bg-accent-lime rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-accent-lime/20">
                        <Monitor className="w-10 h-10 text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold mb-1">Admin Dashboard</h3>
                        <p className="text-base text-accent-lime font-bold">Next.js • Prisma</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-10 text-base">
                      Comprehensive web dashboard for platform administrators with advanced analytics, management tools, and reporting capabilities.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 group-hover:border-accent-lime/20 transition-colors">
                        <div className="w-10 h-10 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base mb-1">Revenue Analytics</p>
                          <p className="text-sm text-gray-600">Real-time financial tracking with detailed reports</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 group-hover:border-accent-lime/20 transition-colors">
                        <div className="w-10 h-10 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base mb-1">Turf Management</p>
                          <p className="text-sm text-gray-600">Complete approval workflow and listing control</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 group-hover:border-accent-lime/20 transition-colors">
                        <div className="w-10 h-10 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base mb-1">Booking Oversight</p>
                          <p className="text-sm text-gray-600">Full booking history with management capabilities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 group-hover:border-accent-lime/20 transition-colors">
                        <div className="w-10 h-10 bg-accent-lime/10 rounded-xl flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base mb-1">User Administration</p>
                          <p className="text-sm text-gray-600">Role-based access and permission management</p>
                        </div>
                      </div>
                    </div>
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
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <Star className="w-4 h-4" />
                  KEY FEATURES
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Powerful Capabilities</h2>
              </div>

              {/* Community Features */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg border-2 border-gray-100">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-3xl font-extrabold">Social & Community</h3>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Connect with fellow players, share experiences, and find playing partners in your area.
                  </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/projects/turflet/players-community.png"
                      alt="Players Community"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full Width - Owner Dashboard Overview */}
          <section className="py-20 bg-white">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left - Image */}
              <div className="w-full">
                <Image
                  src="/images/projects/turflet/owners-dashboard.png"
                  alt="Owner Dashboard Analytics Overview"
                  width={1410}
                  height={1182}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div className="px-8 md:px-12 lg:px-16 py-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <Monitor className="w-4 h-4" />
                  OWNER DASHBOARD
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Complete Analytics Overview</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Comprehensive analytics dashboard providing real-time insights into your turf business. Track revenue, monitor bookings, analyze customer behavior, and make data-driven decisions to grow your sports facility.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <BarChart className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Real-Time Analytics</h4>
                      <p className="text-gray-600 text-sm">Live dashboard showing booking trends, revenue growth, and occupancy rates with interactive charts</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <DollarSign className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Revenue Tracking</h4>
                      <p className="text-gray-600 text-sm">Monitor daily, weekly, and monthly revenue with detailed breakdown by turf and time slot</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Booking Statistics</h4>
                      <p className="text-gray-600 text-sm">Track total bookings, cancellations, peak hours, and customer retention metrics</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Customer Insights</h4>
                      <p className="text-gray-600 text-sm">Analyze customer demographics, booking patterns, and identify your most valuable clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full Width - Revenue & Client Details */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left - Content */}
              <div className="px-8 md:px-12 lg:px-16 py-12 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <DollarSign className="w-4 h-4" />
                  REVENUE MANAGEMENT
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Revenue & Client Details</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Detailed financial insights with comprehensive revenue breakdown by client, booking history, payment transactions, and payout management. Keep track of every penny and understand your business performance.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <DollarSign className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Revenue Breakdown</h4>
                      <p className="text-gray-600 text-sm">Detailed analysis of revenue by client, time period, and booking type with export options</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Client Management</h4>
                      <p className="text-gray-600 text-sm">Complete client profiles with booking history, spending patterns, and loyalty status</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Check className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Payment Records</h4>
                      <p className="text-gray-600 text-sm">Track all payment transactions, refunds, and pending payments with detailed records</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <BarChart className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Payout Management</h4>
                      <p className="text-gray-600 text-sm">Request payouts, view transaction history, and manage your bank account details securely</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div className="w-full order-1 lg:order-2">
                <Image
                  src="/images/projects/turflet/clients-revenue-details.png"
                  alt="Revenue Details and Client Management Dashboard"
                  width={1485}
                  height={1485}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Full Width - Friends & Family Network */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left - Image */}
              <div className="w-full">
                <Image
                  src="/images/projects/turflet/friends-family-community.png"
                  alt="Friends and Family Network - Connect and Play Together"
                  width={4000}
                  height={2663}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div className="px-8 md:px-12 lg:px-16 py-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <Users className="w-4 h-4" />
                  FRIENDS & FAMILY
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Build Your Sports Network</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Connect with friends and family members, invite them to join your sports activities, and create a vibrant community of sports enthusiasts. Share your love for sports and make every match a social celebration.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Friend Invitations</h4>
                      <p className="text-gray-600 text-sm">Send invites to friends and family to join your network and play together</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Group Bookings</h4>
                      <p className="text-gray-600 text-sm">Book turfs for group matches with friends and split payments easily</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Activity Feed</h4>
                      <p className="text-gray-600 text-sm">Stay updated with your network's activities and upcoming matches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full Width - Team Management */}
          <section className="py-20 bg-white">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left - Content */}
              <div className="px-8 md:px-12 lg:px-16 py-12 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <Award className="w-4 h-4" />
                  TEAM MANAGEMENT
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Create & Manage Your Teams</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Form your own sports teams, manage rosters, track performance statistics, and organize competitive matches. Challenge other teams and build a winning legacy with comprehensive team management tools.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Roster Management</h4>
                      <p className="text-gray-600 text-sm">Add players, assign positions, and manage team members</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <BarChart className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Team Statistics</h4>
                      <p className="text-gray-600 text-sm">Track wins, losses, goals, and player performance metrics</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Match Scheduling</h4>
                      <p className="text-gray-600 text-sm">Organize practice sessions and competitive matches</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Team Challenges</h4>
                      <p className="text-gray-600 text-sm">Challenge other teams and compete in tournaments</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div className="w-full order-1 lg:order-2">
                <Image
                  src="/images/projects/turflet/team-details.png"
                  alt="Team Management - Create, Organize, and Compete"
                  width={4000}
                  height={2663}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Dual Platform Showcase */}
          <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
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
                    className="object-contain"
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
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
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
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <BarChart className="w-4 h-4" />
                  RESULTS & METRICS
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
                      className="object-contain"
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
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive revenue breakdown with transaction history and payout management.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Business Impact Section */}
          <section id="impact" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
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
            <div className="max-w-7xl mx-auto text-center">
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
