import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import PremiumFooter from './PremiumFooter';
import { sanitizeHTML } from '../utils/sanitize';
import { injectCTA } from '../utils/injectCTA';
import { SocialShare } from './SocialShare';

interface SingleBlogPageProps {
  blogSlug: string;
  onBack: () => void;
  onNavigateToTemplates?: () => void;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

const SingleBlogPage: React.FC<SingleBlogPageProps> = ({ blogSlug, onBack, onNavigateToTemplates }) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const calculateReadTime = (content: string): string => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL || 'https://blog.deepiotics.com/wp-json/wp/v2';
        const response = await fetch(`${apiUrl}/posts?slug=${blogSlug}&_embed`);
        
        if (!response.ok) throw new Error('Failed to fetch blog');
        
        const data: WordPressPost[] = await response.json();
        
        if (data.length === 0) {
          setError('Blog not found');
          return;
        }

        const post = data[0];
        const transformedPost: BlogPost = {
          id: post.id,
          title: post.title.rendered.replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
          content: sanitizeHTML(post.content.rendered),
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200),
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
          date: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          readTime: calculateReadTime(post.content.rendered),
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/blog1/1.jpg',
          slug: post.slug,
        };

        setBlog(transformedPost);
      } catch (err) {
        setError('Failed to load blog post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogSlug]);

  useEffect(() => {
    const handleNavigate = () => {
      if (onNavigateToTemplates) {
        onNavigateToTemplates();
      } else {
        window.history.pushState({}, '', '/templates');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    };

    window.addEventListener('navigateToTemplates', handleNavigate);
    return () => window.removeEventListener('navigateToTemplates', handleNavigate);
  }, [onNavigateToTemplates]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 h-16" />
        <div className="pt-24 pb-16 max-w-4xl mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-slate-200 rounded w-3/4"></div>
            <div className="h-6 bg-slate-200 rounded w-1/4"></div>
            <div className="h-64 bg-slate-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{error || 'Blog not found'}</h2>
          <button onClick={onBack} className="text-orange-600 hover:text-orange-700 font-semibold">
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-700 hover:text-orange-600 font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </button>

              <img 
                src="/DBACoach (2).png" 
                alt="DBA Coach Logo" 
                className="w-40 h-40 object-contain"
              />

              <button className="flex items-center gap-2 text-slate-700 hover:text-orange-600 font-semibold transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Image with Overlapping Content Card */}
        <div className="relative">
          {/* Hero Image - Takes up top half */}
          <div className="w-full h-[50vh] sm:h-[60vh] relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-slate-100 mt-16">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/blog1/1.jpg'; }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/80"></div>
          </div>

          {/* Content Card - Overlaps from middle */}
          <div className="relative -mt-32 sm:-mt-40 lg:-mt-48 pb-16">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 font-semibold text-sm rounded-full">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  {blog.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-8 pb-6 border-b border-slate-200">
                  <span className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </span>
                </div>

                {/* Excerpt */}
                {blog.excerpt && (
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 sm:p-6 rounded-r-lg mb-8">
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                )}

                {/* Blog Content with Typography */}
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: injectCTA(blog.content) }}
                />

                {/* Social Share */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Share this article</h3>
                  <SocialShare 
                    url={window.location.href} 
                    title={blog.title} 
                    description={blog.excerpt} 
                  />
                </div>
              </motion.div>
            </article>
          </div>
        </div>
      </div>

      <PremiumFooter />
    </>
  );
};

export default SingleBlogPage;
