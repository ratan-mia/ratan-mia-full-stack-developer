'use client';

import Image from 'next/image';

/**
 * Reusable Case Study About/Overview Section Component
 * Following the design pattern with gray background and optional image
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title (default: "About the Project")
 * @param {Array<string>} props.paragraphs - Array of paragraph texts
 * @param {string} props.image - Optional image path
 * @param {string} props.imageAlt - Alt text for image
 * @param {string} props.bgColor - Background color class (default: "bg-gray-50")
 * @param {string} props.id - Section ID for navigation (default: "overview")
 */
export default function CaseStudyAbout({
  title = "About the Project",
  paragraphs = [],
  image,
  imageAlt = "Project Overview",
  bgColor = "bg-gray-50",
  id = "overview"
}) {
  return (
    <section id={id} className={`py-20 px-4 md:px-6 lg:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="max-w-7xl">
            <h2 className="text-4xl font-extrabold mb-6">{title}</h2>
            {paragraphs.map((paragraph, idx) => (
              <p 
                key={idx} 
                className={`text-lg text-gray-700 leading-relaxed font-medium ${idx < paragraphs.length - 1 ? 'mb-6' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {image && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
