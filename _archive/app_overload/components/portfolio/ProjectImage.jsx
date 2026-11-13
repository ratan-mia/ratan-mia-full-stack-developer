'use client';

import { useState } from 'react';

const ProjectImage = ({ project, className = "w-full h-full object-cover" }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // If no image provided or error occurred, show fallback
  if (!project.image || imageError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-2">
            {project.category === 'Web Development' || project.category === 'web-development' ? '🌐' :
             project.category === 'E-commerce' || project.category === 'ecommerce' ? '🛒' :
             project.category === 'AI Integration' || project.category === 'ai-integration' ? '🤖' : '🚀'}
          </div>
          <div className="text-sm opacity-90">
            {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Loading placeholder */}
      {imageLoading && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse flex items-center justify-center">
          <div className="text-slate-400">
            <svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={project.image}
        alt={`${project.title} project screenshot`}
        className={className}
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ display: imageLoading ? 'none' : 'block' }}
      />
    </>
  );
};

export default ProjectImage;
