import { ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-accent-lime flex items-center justify-center">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20">
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
              TurfLet<br />Booking System
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
              alt="TurfLet Platform"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
