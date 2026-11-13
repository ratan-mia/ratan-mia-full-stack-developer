'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProjectImage = ({ project, className = "w-full h-full object-cover" }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // If no image provided or error occurred, show fallback
  if (!project.image || imageError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/30 to-accent-orange/30 flex items-center justify-center">
        <div className="text-black text-center">
          <div className="text-4xl mb-2">
            {project.category === 'Web Development' || project.category === 'web-development' ? '🌐' :
             project.category === 'E-commerce' || project.category === 'ecommerce' ? '🛒' :
             project.category === 'Mobile Apps' || project.category === 'mobile-app' ? '📱' :
             project.category === 'SaaS Platform' || project.category === 'saas-platform' ? '🚀' :
             project.category === 'AI & Analytics' || project.category === 'ai-analytics' ? '📊' :
             project.category === 'AI Integration' || project.category === 'ai-integration' ? '🤖' : '💼'}
          </div>
          <div className="text-sm opacity-90 font-bold">
            {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={`${project.title} project screenshot`}
      fill
      className={className}
      onError={handleImageError}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
      priority={project.featured}
    />
  );
};

export default ProjectImage;
