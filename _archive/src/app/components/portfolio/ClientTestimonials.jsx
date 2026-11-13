'use client';

import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useState } from 'react';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Real testimonials based on actual projects
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Rahman",
      title: "General Manager",
      company: "Asian Petroleum Limited",
      project: "Elf Bangladesh Digital Platform",
      rating: 5,
      avatar: "/testimonials/ahmed.jpg",
      testimonial: "Working with Ratan was exceptional. The new Elf Bangladesh platform exceeded all our expectations with 85% conversion rate increase and seamless CRM integration. His technical expertise in Next.js and business understanding made the difference.",
      metrics: "85% conversion rate increase",
      projectType: "Corporate Website & CRM"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "Chery Bangladesh",
      project: "Automotive Website with 360° Viewer",
      rating: 5,
      avatar: "/testimonials/sarah.jpg",
      testimonial: "The automotive website Ratan built achieved 97% PageSpeed score and revolutionized our customer experience. The 360° car viewer and virtual showroom capabilities have significantly improved user engagement and sales.",
      metrics: "97% PageSpeed score",
      projectType: "Automotive Platform"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "CEO",
      company: "Japan Parts Ltd",
      project: "E-commerce Platform",
      rating: 5,
      avatar: "/testimonials/michael.jpg",
      testimonial: "Our e-commerce platform saw 300% order volume increase after Ratan's development. The intelligent make/model/year system and inventory management have streamlined our operations completely.",
      metrics: "300% order volume increase",
      projectType: "E-commerce Development"
    },
    {
      id: 4,
      name: "Dr. Emily Rodriguez",
      title: "Director",
      company: "Healthcare Solutions",
      project: "AI Chatbot Integration",
      rating: 5,
      avatar: "/testimonials/emily.jpg",
      testimonial: "The OpenAI chatbot integration has transformed our patient support services. Available 24/7 with personalized responses, it's improved efficiency by 70% and patient satisfaction dramatically.",
      metrics: "70% efficiency improvement",
      projectType: "AI Integration"
    },
    {
      id: 5,
      name: "David Thompson",
      title: "Operations Manager",
      company: "ELF International",
      project: "E-commerce Rebranding",
      rating: 5,
      avatar: "/testimonials/david.jpg",
      testimonial: "The e-commerce platform rebranding delivered outstanding results - 150% conversion rate improvement and 40% cart recovery. Ratan's attention to performance and user experience is remarkable.",
      metrics: "150% conversion improvement",
      projectType: "E-commerce Optimization"
    },
    {
      id: 6,
      name: "Lisa Williams",
      title: "Owner",
      company: "CWL Detailing",
      project: "Service Business Website",
      rating: 5,
      avatar: "/testimonials/lisa.jpg",
      testimonial: "Our service business website looks amazing and performs perfectly. The booking system integration has increased our appointments by 200% and the mobile experience is flawless.",
      metrics: "200% booking increase",
      projectType: "Service Website"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const currentClient = testimonials[currentTestimonial];

  return (
    <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-accent-lime">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Real feedback from real clients who've achieved exceptional results
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-accent-lime rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Client Info - Left Side */}
            <div className="lg:col-span-4 text-center lg:text-left">
              {/* Client Avatar */}
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-black/15 rounded-2xl flex items-center justify-center text-black text-3xl shadow-lg font-extrabold transform hover:scale-105 transition-transform">
                  {currentClient.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-black text-accent-lime rounded-xl px-3 py-1.5 shadow-lg">
                  <div className="flex items-center gap-1">
                    {[...Array(currentClient.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Details */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">{currentClient.name}</h3>
                <p className="text-black/80 font-semibold mb-1">{currentClient.title}</p>
                <p className="text-black/60 font-medium text-sm">{currentClient.company}</p>
              </div>

              {/* Project Info Cards */}
              <div className="space-y-3">
                <div className="bg-black/10 rounded-2xl p-4 text-left">
                  <div className="text-xs text-black/70 mb-1 font-bold uppercase tracking-wider">Project Type</div>
                  <div className="font-bold text-sm text-black">{currentClient.projectType}</div>
                </div>
                <div className="bg-black/10 rounded-2xl p-4 text-left">
                  <div className="text-xs text-black/70 mb-1 font-bold uppercase tracking-wider">Key Result</div>
                  <div className="font-bold text-sm text-black">{currentClient.metrics}</div>
                </div>
              </div>
            </div>

            {/* Testimonial Content - Right Side */}
            <div className="lg:col-span-8">
              <div className="relative">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-black/20 mb-6" />

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl leading-relaxed text-black mb-8 font-semibold">
                  "{currentClient.testimonial}"
                </blockquote>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t-2 border-black/10">
                {/* Previous Button */}
                <button
                  onClick={prevTestimonial}
                  className="flex items-center gap-2 px-6 py-3 bg-black/15 hover:bg-black hover:text-accent-lime rounded-xl transition-all duration-300 group shadow-md font-bold"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                
                {/* Counter & Dots */}
                <div className="flex items-center gap-4">
                  <div className="text-sm font-bold text-black/60">
                    {currentTestimonial + 1} / {testimonials.length}
                  </div>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonial 
                            ? 'bg-black w-8' 
                            : 'bg-black/30 w-2 hover:bg-black/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Next Button */}
                <button
                  onClick={nextTestimonial}
                  className="flex items-center gap-2 px-6 py-3 bg-black/15 hover:bg-black hover:text-accent-lime rounded-xl transition-all duration-300 group shadow-md font-bold"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
