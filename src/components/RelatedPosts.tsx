import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  slug: string;
}

interface RelatedPostsProps {
  currentPostId: string;
  currentCategory: string;
  allPosts: BlogPost[];
  onNavigate: (slug: string) => void;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({
  currentPostId,
  currentCategory,
  allPosts,
  onNavigate
}) => {
  // Get related posts from same category, excluding current post
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPostId && post.category === currentCategory)
    .slice(0, 3);

  // If not enough posts in same category, add from other categories
  if (relatedPosts.length < 3) {
    const otherPosts = allPosts
      .filter(post => post.id !== currentPostId && post.category !== currentCategory)
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Related Articles
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
            onClick={() => onNavigate(post.slug)}
          >
            <div className="relative h-48 overflow-hidden bg-gray-200">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.currentTarget.src = '/blog1/1.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
