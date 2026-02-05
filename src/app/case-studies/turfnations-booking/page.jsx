'use client';

import { ArrowRight, Award, BarChart, Calendar, Check, CheckCircle, Clock, Code, Database, DollarSign, ExternalLink, Facebook, Linkedin, Monitor, Share2, Shield, Smartphone, Star, Twitter, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HeroSection from '../../components/case-studies/HeroSection';
import ProjectInquirySection from '../../components/ProjectInquirySection';

export default function TufLetCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    {
      image: '03-home-search-turfs.jpg',
      title: 'Discover Sports Venues',
      description: 'Browse and search through a wide selection of turf venues with detailed information, photos, and real-time availability.'
    },
    {
      image: '04-turf-details-champions.jpg',
      title: 'Venue Details & Reviews',
      description: 'View comprehensive venue information including amenities, pricing, location, and authentic user reviews to make informed decisions.'
    },
    {
      image: '06-booking-date-time.jpg',
      title: 'Easy Booking Process',
      description: 'Select your preferred date and time with an intuitive calendar interface showing real-time slot availability.'
    },
    {
      image: '08-my-bookings-list.jpg',
      title: 'Manage Your Bookings',
      description: 'Track all your bookings in one place with options to view details, cancel, or rebook your favorite venues.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <Zap className="w-4 h-4" />
                  REQUIREMENTS & CHALLENGES
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Complex Requirements</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Building a real-time booking platform required solving several technical challenges including <span className="font-bold text-black">real-time availability management</span> with a 30-day calendar view that prevents double bookings and handles concurrent requests seamlessly. We integrated <span className="font-bold text-black">SSL Commerz payment gateway</span> to support multiple payment methods with secure transaction validation. The platform features a <span className="font-bold text-black">dynamic pricing engine</span> that adjusts rates based on peak hours, weekends, and promotional discounts. Additionally, we developed <span className="font-bold text-black">multi-role dashboards</span> with distinct interfaces for players, venue owners, and administrators, each optimized for their specific workflows and requirements.
                </p>
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

              {/* Solution 1: Mobile App with Image */}
              <div className="grid lg:grid-cols-2 gap-0 items-center mb-16 bg-gray-50 rounded-3xl overflow-hidden">
                <div className="w-full">
                  <Image
                    src="/images/projects/turflet/owner-dashboard and player.png"
                    alt="Mobile App - Player & Owner Interface"
                    width={2000}
                    height={2000}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                    <Smartphone className="w-4 h-4" />
                    MOBILE APP
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Player & Owner Experience</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Cross-platform mobile application built with React Native and Expo, featuring intuitive interfaces for both players and turf owners with real-time booking capabilities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Real-time Availability</h4>
                        <p className="text-gray-600 text-sm">Live calendar with instant slot updates and conflict prevention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Secure Payments</h4>
                        <p className="text-gray-600 text-sm">SSL Commerz integration with multiple payment methods</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Push Notifications</h4>
                        <p className="text-gray-600 text-sm">Instant booking confirmations and real-time updates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution 2: Owner Dashboard with Image */}
              <div className="grid lg:grid-cols-2 gap-0 items-center mb-16 bg-gray-50 rounded-3xl overflow-hidden">
                <div className="p-8 md:p-12 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                    <Monitor className="w-4 h-4" />
                    OWNER DASHBOARD
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Business Management</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Comprehensive dashboard for venue owners to manage bookings, track revenue, and optimize their business operations with real-time analytics.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Revenue Analytics</h4>
                        <p className="text-gray-600 text-sm">Real-time financial tracking with detailed reports</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Booking Management</h4>
                        <p className="text-gray-600 text-sm">Complete control over schedules and reservations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Client Insights</h4>
                        <p className="text-gray-600 text-sm">Customer data and booking patterns analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full order-1 lg:order-2">
                  <Image
                    src="/images/projects/turflet/owners-dashboard.png"
                    alt="Owner Dashboard - Analytics & Management"
                    width={2000}
                    height={2000}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Solution 3: Admin Panel with Image */}
              <div className="grid lg:grid-cols-2 gap-0 items-center bg-gray-50 rounded-3xl overflow-hidden">
                <div className="w-full">
                  <Image
                    src="/images/projects/turflet/clients-revenue-details.png"
                    alt="Admin Dashboard - Revenue & Client Management"
                    width={2000}
                    height={2000}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                    <BarChart className="w-4 h-4" />
                    ADMIN PANEL
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Platform Administration</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Next.js powered web dashboard with advanced analytics, complete platform oversight, and comprehensive management tools for administrators.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Revenue Tracking</h4>
                        <p className="text-gray-600 text-sm">Comprehensive financial reports and transaction history</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Turf Management</h4>
                        <p className="text-gray-600 text-sm">Approval workflow and venue listing control</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">User Administration</h4>
                        <p className="text-gray-600 text-sm">Role-based access and permission management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Key Features</h2>
              <p className="text-xl text-gray-600">Powerful tools designed for modern sports facility management</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left - Image */}
              <div className="w-full">
                <Image
                  src="/images/projects/turflet/players-community.png"
                  alt="Players Community - Social Features"
                  width={2000}
                  height={2000}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div className="px-8 md:px-12 lg:px-16 py-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <Users className="w-4 h-4" />
                  SOCIAL & COMMUNITY
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Players Community</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Connect with fellow players, share experiences, and find playing partners in your area. Build your sports network and never play alone again.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Find Players</h4>
                      <p className="text-gray-600 text-sm">Connect with players nearby and organize games together</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Share Experiences</h4>
                      <p className="text-gray-600 text-sm">Post photos, reviews, and connect with the community</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Build Network</h4>
                      <p className="text-gray-600 text-sm">Create your sports circle and grow your connections</p>
                    </div>
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

              {/* Mobile App Screenshots Section */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mt-16 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl border-2 border-gray-100">
                {/* Left - Mobile Mockup with Slider */}
                <div className="flex justify-center">
                  <div className="relative w-[300px] h-[600px]">
                    {/* Mobile Frame */}
                    <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl p-3">
                      <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                        
                        {/* Screenshot Display */}
                        <div className="relative w-full h-full">
                          <Image
                            src={`/images/projects/turflet/screenshots/${screenshots[currentScreenshot].image}`}
                            alt={screenshots[currentScreenshot].title}
                            fill
                            className="object-cover transition-opacity duration-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Navigation Dots */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                      {screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentScreenshot(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentScreenshot 
                              ? 'bg-accent-lime w-8' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                    <Smartphone className="w-4 h-4" />
                    MOBILE APP FEATURES
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Seamless Mobile Experience
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    Our intuitive mobile app makes booking sports venues effortless. From discovering venues to managing bookings, everything is just a tap away.
                  </p>

                  {/* Feature List */}
                  <div className="space-y-6">
                    {screenshots.map((screenshot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentScreenshot(idx)}
                        className={`w-full text-left p-4 rounded-2xl transition-all ${
                          idx === currentScreenshot
                            ? 'bg-accent-lime shadow-lg scale-105'
                            : 'bg-white hover:bg-gray-50 border-2 border-gray-100'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            idx === currentScreenshot ? 'bg-black' : 'bg-accent-lime'
                          }`}>
                            <Check className={`w-5 h-5 ${
                              idx === currentScreenshot ? 'text-accent-lime' : 'text-black'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold mb-1">{screenshot.title}</h4>
                            <p className={`text-sm ${
                              idx === currentScreenshot ? 'text-black/80' : 'text-gray-600'
                            }`}>
                              {screenshot.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                  <Code className="w-4 h-4" />
                  TECHNOLOGY STACK
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Built with Modern Technologies</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  The TufLet platform is built using <span className="font-bold text-black">React Native</span> and <span className="font-bold text-black">Expo</span> for cross-platform mobile development, ensuring a seamless experience on both iOS and Android devices. The admin dashboard is powered by <span className="font-bold text-black">Next.js 14</span> with server-side rendering for optimal performance. We leverage <span className="font-bold text-black">Supabase PostgreSQL</span> for our real-time database and authentication, with <span className="font-bold text-black">Prisma ORM</span> providing type-safe database queries. Payment processing is handled through <span className="font-bold text-black">SSL Commerz</span>, the leading payment gateway in Bangladesh. The application features smooth navigation via <span className="font-bold text-black">React Navigation</span> and is beautifully styled with <span className="font-bold text-black">Tailwind CSS</span>, delivering a modern and responsive user interface across all devices.
                </p>
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
                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/projects/turflet/owners-dashboard.png"
                      alt="Owner Analytics Dashboard"
                      width={2000}
                      height={2000}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Real-time analytics showing booking trends, revenue growth, and occupancy rates.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-3xl border-2 border-gray-100">
                  <h3 className="text-xl font-extrabold mb-4">Revenue & Client Tracking</h3>
                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/projects/turflet/clients-revenue-details.png"
                      alt="Revenue and Client Details"
                      width={2000}
                      height={2000}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive revenue breakdown with transaction history and client management.</p>
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

        {/* Project Inquiry Section - Full Width */}
        <ProjectInquirySection />
      </div>
    </main>
  );
}
