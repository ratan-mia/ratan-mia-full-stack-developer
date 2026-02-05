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
                  Building a real-time booking platform with dynamic pricing and multi-user roles required solving complex technical challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenge 1 */}
                <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-lime/30">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent-lime/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent-lime/20 transition-colors">
                      <Calendar className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold mb-2">Real-Time Availability</h3>
                      <p className="text-sm text-accent-lime font-bold">Critical Feature</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Show accurate slot availability across a 30-day calendar with instant updates to prevent double bookings and handle concurrent user requests efficiently.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Instant calendar synchronization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Conflict prevention logic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Multi-user concurrency handling</span>
                    </li>
                  </ul>
                  <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-50">
                    <Image
                      src="/images/projects/turflet/screenshots/06-booking-date-time.jpg"
                      alt="Real-time booking calendar"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Challenge 2 */}
                <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-lime/30">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent-lime/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent-lime/20 transition-colors">
                      <DollarSign className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold mb-2">Payment Integration</h3>
                      <p className="text-sm text-accent-lime font-bold">Secure Transactions</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Seamless SSL Commerz integration supporting multiple payment methods with auto-redirect after payment and robust transaction validation.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Multiple payment gateways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Transaction error handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Payment status tracking</span>
                    </li>
                  </ul>
                  <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-50">
                    <Image
                      src="/images/projects/turflet/screenshots/07-booking-confirmation.jpg"
                      alt="Payment integration"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Challenge 3 */}
                <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-lime/30">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent-lime/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent-lime/20 transition-colors">
                      <BarChart className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold mb-2">Dynamic Pricing</h3>
                      <p className="text-sm text-accent-lime font-bold">Complex Logic</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Implement flexible pricing engine with base rates, weekend surcharges, peak hour pricing, early bird discounts, and promotional campaigns.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Time-based price calculation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Discount code management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Seasonal pricing variations</span>
                    </li>
                  </ul>
                  <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-50">
                    <Image
                      src="/images/projects/turflet/screenshots/04-turf-details-champions.jpg"
                      alt="Dynamic pricing display"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Challenge 4 */}
                <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-lime/30">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent-lime/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent-lime/20 transition-colors">
                      <Users className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold mb-2">Multi-Role Dashboard</h3>
                      <p className="text-sm text-accent-lime font-bold">Access Control</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Create separate interfaces for players, turf owners, and admins with granular role-based permissions and customized feature access.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Role-based authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Permission management system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-lime rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm text-gray-600">Customized UI per role</span>
                    </li>
                  </ul>
                  <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-50">
                    <Image
                      src="/images/projects/turflet/owners-dashboard.png"
                      alt="Multi-role dashboard"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
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
                <div className="group relative bg-gray-50 p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-accent-lime/30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-lime/5 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-accent-lime rounded-2xl flex items-center justify-center shrink-0">
                        <Smartphone className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold">Mobile App</h3>
                        <p className="text-sm text-accent-lime font-bold">React Native</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Cross-platform mobile application for both players and turf owners, featuring an intuitive booking flow and real-time updates.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Real-time Availability</p>
                          <p className="text-xs text-gray-600">Live calendar with instant slot updates</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Secure Payments</p>
                          <p className="text-xs text-gray-600">SSL Commerz integration with multiple methods</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Push Notifications</p>
                          <p className="text-xs text-gray-600">Instant booking confirmations and updates</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Location Services</p>
                          <p className="text-xs text-gray-600">GPS-based turf discovery and navigation</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-72 rounded-2xl overflow-hidden bg-white shadow-inner">
                      <Image
                        src="/images/projects/turflet/screenshots/03-home-search-turfs.jpg"
                        alt="Mobile App Interface"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                </div>

                {/* Admin Dashboard Solution */}
                <div className="group relative bg-gray-50 p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-accent-lime/30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-lime/5 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-accent-lime rounded-2xl flex items-center justify-center shrink-0">
                        <Monitor className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold">Admin Dashboard</h3>
                        <p className="text-sm text-accent-lime font-bold">Next.js</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Comprehensive web dashboard for platform administrators with advanced analytics, management tools, and reporting capabilities.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Revenue Analytics</p>
                          <p className="text-xs text-gray-600">Real-time tracking and financial reports</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Turf Management</p>
                          <p className="text-xs text-gray-600">Approval workflow and listing management</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Booking Oversight</p>
                          <p className="text-xs text-gray-600">Complete booking history and management</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-lime/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">User Administration</p>
                          <p className="text-xs text-gray-600">Role management and access control</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-72 rounded-2xl overflow-hidden bg-white shadow-inner">
                      <Image
                        src="/images/projects/turflet/clients-revenue-details.png"
                        alt="Admin Dashboard Interface"
                        fill
                        className="object-contain p-4"
                      />
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
                          className="object-contain"
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
                        className="object-contain"
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
              </div>

              {/* Community Features */}
              <div className="mb-16">
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  Social & Community Features
                </h3>

                <div className="grid md:grid-cols-1 gap-8 mb-8">
                  <div className="group">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                      <Image
                        src="/images/projects/turflet/players-community.png"
                        alt="Players Community"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Players Community</h4>
                    <p className="text-gray-600 leading-relaxed">Connect with fellow players, share experiences, and find playing partners in your area.</p>
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
