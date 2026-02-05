import { ArrowLeft, Award, Calendar, ExternalLink, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'TufLet Booking Platform - Case Study | Ratan Mia',
  description: 'Real-time sports turf booking platform with payment integration, built with React Native and Next.js admin panel.',
  keywords: 'booking platform, React Native, sports booking, SSL Commerz, real-time booking, Supabase',
};

export default function TufLetCaseStudy() {
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

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
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

      {/* Project Overview */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
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

          <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-gray-100">
            <h2 className="text-4xl font-extrabold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
              TufLet is a revolutionary booking platform designed to connect sports enthusiasts with turf owners. The platform needed to handle real-time availability checks, prevent double bookings, integrate secure payment processing, and provide comprehensive management tools for turf owners.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              The solution includes a mobile app for players to browse and book turfs, a web-based admin panel for owners to manage their facilities, and a robust backend system that handles complex booking logic, payment processing, and analytics.
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
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Complex Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">Real-Time Availability</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Needed to show accurate slot availability across 30-day calendar with instant updates to prevent double bookings and handle concurrent user requests.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">Payment Integration</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Seamless SSL Commerz integration with multiple payment methods, auto-redirect after payment, and transaction validation with proper error handling.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">Dynamic Pricing</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Complex pricing logic with base rates, weekend surcharges, peak hour pricing, early bird discounts, and special promotional rates.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">Multi-Role Dashboard</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Separate interfaces for players, turf owners, and platform admins with role-based access control and feature permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              📊 RESULTS & METRICS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Outstanding Performance</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-black" />
              <div className="text-5xl font-extrabold mb-2">5K+</div>
              <p className="text-black/80 font-bold">Bookings Processed</p>
            </div>

            <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg">
              <Users className="w-12 h-12 mx-auto mb-4 text-black" />
              <div className="text-5xl font-extrabold mb-2">2.5K+</div>
              <p className="text-black/80 font-bold">Active Users</p>
            </div>

            <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg">
              <Award className="w-12 h-12 mx-auto mb-4 text-black" />
              <div className="text-5xl font-extrabold mb-2">0%</div>
              <p className="text-black/80 font-bold">Double Booking Rate</p>
            </div>

            <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg">
              <Zap className="w-12 h-12 mx-auto mb-4 text-black" />
              <div className="text-5xl font-extrabold mb-2">95%</div>
              <p className="text-black/80 font-bold">Payment Success Rate</p>
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
    </main>
  );
}
