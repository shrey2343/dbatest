import React from 'react';

export const BlogCardSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/40 animate-pulse">
      <div className="flex flex-col lg:flex-row">
        {/* Image Skeleton */}
        <div className="w-full lg:w-[50%] h-[200px] sm:h-[220px] md:h-[220px] lg:h-[250px] xl:h-[260px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
        
        {/* Content Skeleton */}
        <div className="w-full lg:w-[50%] p-5 lg:p-6 flex flex-col justify-between">
          <div>
            {/* Category Badge */}
            <div className="w-24 h-6 bg-gray-200 rounded-full mb-3" />
            
            {/* Title */}
            <div className="space-y-2 mb-3">
              <div className="h-6 bg-gray-200 rounded w-full" />
              <div className="h-6 bg-gray-200 rounded w-3/4" />
            </div>
            
            {/* Meta Info */}
            <div className="flex gap-3 mb-3">
              <div className="h-4 bg-gray-200 rounded w-24" />
              <div className="h-4 bg-gray-200 rounded w-20" />
            </div>
            
            {/* Excerpt */}
            <div className="space-y-2 mb-4 lg:hidden">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="h-12 bg-gray-200 rounded-lg flex-1" />
            <div className="h-12 bg-gray-200 rounded-lg flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogDetailSkeleton: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
      {/* Category */}
      <div className="w-32 h-8 bg-gray-200 rounded-full mb-8" />
      
      {/* Title */}
      <div className="space-y-4 mb-10">
        <div className="h-12 bg-gray-200 rounded w-full" />
        <div className="h-12 bg-gray-200 rounded w-4/5" />
      </div>
      
      {/* Meta */}
      <div className="flex gap-6 mb-12">
        <div className="w-32 h-12 bg-gray-200 rounded-xl" />
        <div className="w-28 h-12 bg-gray-200 rounded-xl" />
      </div>
      
      {/* Excerpt */}
      <div className="h-24 bg-gray-200 rounded-2xl mb-12" />
      
      {/* Image */}
      <div className="w-full h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-12" />
      
      {/* Content */}
      <div className="space-y-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full" />
        ))}
      </div>
    </div>
  );
};

// Add shimmer animation to global CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`;
document.head.appendChild(style);
