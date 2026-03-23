import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2 } from 'lucide-react';
import PremiumFooter from './PremiumFooter';
import { BlogDetailSkeleton } from './LoadingSkeleton';
import { ErrorState } from './ErrorBoundaryBlog';
import { ReadingProgress } from './ReadingProgress';
import { SocialShare } from './SocialShare';
import { SocialSidebar } from './SocialSidebar';
import { RelatedPosts } from './RelatedPosts';
import { SEOHead } from './SEOHead';
import { sanitizeHTML } from '../utils/sanitize';
import { blogCache } from '../utils/blogCache';
import { injectCTA } from '../utils/injectCTA';
import { linkifyContent } from '../utils/linkify';
import { StickyTemplateCTA } from './SmartCTASystem';
import { RandomStrategyCallPopup } from './RandomStrategyCallPopup';
import StandardHeader from './StandardHeader';

interface BlogDetailInfobeansProps {
  blogSlug: string;
  onBack: () => void;
  onNavigateToTemplates?: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  fullContent: string;
  date: string;
  slug: string;
}

interface WordPressBlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  slug: string;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

const BlogDetailInfobeans: React.FC<BlogDetailInfobeansProps> = ({ blogSlug, onBack, onNavigateToTemplates }) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogBySlug();
  }, [blogSlug]);

  const calculateReadTime = (content: string): string => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };





  const fetchBlogBySlug = async () => {
    try {
      setLoading(true);
      setError(null);

      const cachedBlogs = blogCache.get<BlogPost[]>('blogs');
      if (cachedBlogs) {
        const cachedBlog = cachedBlogs.find(b => b.slug === blogSlug);
        if (cachedBlog) {
          setBlog(cachedBlog);
          setAllBlogs(cachedBlogs);
          setLoading(false);
          return;
        }
      }

      const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL || 'https://blog.deepiotics.com/wp-json/wp/v2';
      const response = await fetch(`${apiUrl}/posts?per_page=100&_embed`);

      if (!response.ok) throw new Error('Failed to fetch blog post');

      const data: WordPressBlogPost[] = await response.json();
      const foundPost = data.find((post) => post.slug === blogSlug);

      if (foundPost) {
        const transformedBlog: BlogPost = {
          id: foundPost.id.toString(),
          title: foundPost.title.rendered.replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
          excerpt: foundPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
          fullContent: sanitizeHTML(linkifyContent(foundPost.content.rendered)),
          category: foundPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
          date: new Date(foundPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          readTime: calculateReadTime(foundPost.content.rendered),
          image: foundPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/blog1/1.jpg',
          slug: foundPost.slug
        };

        const allTransformedBlogs: BlogPost[] = data.map((post) => ({
          id: post.id.toString(),
          title: post.title.rendered.replace(/&amp;/g, '&'),
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
          fullContent: post.content.rendered,
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
          date: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          readTime: calculateReadTime(post.content.rendered),
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/blog1/1.jpg',
          slug: post.slug
        }));

        setBlog(transformedBlog);
        setAllBlogs(allTransformedBlogs);
        blogCache.set('blogs', allTransformedBlogs);
      } else {
        setError('Blog post not found');
      }
    } catch (error) {
      console.error('Failed to fetch blog:', error);
      setError('Failed to load blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleNavigateToTemplates = () => {
      if (onNavigateToTemplates) {
        onNavigateToTemplates();
      } else {
        window.history.pushState({}, '', '/templates');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    };

    window.addEventListener('navigateToTemplates', handleNavigateToTemplates);
    return () => window.removeEventListener('navigateToTemplates', handleNavigateToTemplates);
  }, [onNavigateToTemplates]);

  const handleNavigateToPost = (slug: string) => {
    window.history.pushState({}, '', `/blog/${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToTemplates = () => {
    if (onNavigateToTemplates) {
      onNavigateToTemplates();
    } else {
      window.history.pushState({}, '', '/templates');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  // Handle internal blog link clicks
  useEffect(() => {
    if (!blog) return;

    const handleContentClick = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const target = mouseEvent.target as HTMLElement;
      const link = target.closest('a');
      
      console.log('Content clicked:', { target, link, href: link?.href });
      
      if (link && link.href) {
        try {
          const url = new URL(link.href);
          const currentHost = window.location.host;
          
          console.log('Link details:', { 
            host: url.host, 
            currentHost, 
            pathname: url.pathname 
          });
          
          // Check if it's an internal blog link
          if ((url.host === currentHost || url.host === 'www.dbacoach.com' || url.host === 'dbacoach.com') && 
              url.pathname.startsWith('/blog/')) {
            console.log('Internal blog link detected! Preventing default...');
            e.preventDefault();
            e.stopPropagation();
            
            // Extract slug from URL
            const slug = url.pathname.replace('/blog/', '').replace(/\/$/, '');
            console.log('Navigating to slug:', slug);
            if (slug && slug !== blogSlug) {
              handleNavigateToPost(slug);
            } else {
              console.log('Same blog or empty slug, not navigating');
            }
          } else {
            console.log('External link or not a blog link, allowing default behavior');
          }
        } catch (error) {
          console.error('Error handling link click:', error);
        }
      } else {
        console.log('No link element or href found');
      }
    };

    // Wait for content to be rendered
    setTimeout(() => {
      const contentElement = document.querySelector('.prose');
      if (contentElement) {
        contentElement.addEventListener('click', handleContentClick);
        console.log('Blog link handler attached');
        
        // Log all links found in content
        const allLinks = contentElement.querySelectorAll('a');
        console.log(`Found ${allLinks.length} links in content:`, 
          Array.from(allLinks).map(a => ({ href: a.href, text: a.textContent }))
        );
      } else {
        console.warn('Content element not found');
      }
    }, 100);

    return () => {
      const contentElement = document.querySelector('.prose');
      if (contentElement) {
        contentElement.removeEventListener('click', handleContentClick);
      }
    };
  }, [blog, blogSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F1E8]">
        <nav className="bg-[#1E293B] h-16" />
        <div className="pt-8 pb-16">
          <BlogDetailSkeleton />
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center">
        <ErrorState message={error || 'Blog post not found'} onRetry={fetchBlogBySlug} onGoHome={onBack} />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={blog.title}
        description={blog.excerpt}
        image={blog.image}
        url={window.location.href}
        type="article"
        publishedTime={blog.date}
        keywords={[blog.category, 'DBA', 'Doctorate', 'Research']}
      />

      <ReadingProgress />
      <SocialSidebar />

      <div className="min-h-screen bg-[#F5F1E8]">
        {/* Standard Header */}
        <StandardHeader
          onNavigateHome={() => {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateToDoctorateProgram={() => {
            window.history.pushState({}, '', '/doctorate-achiever-program');
            window.location.reload();
          }}
          onNavigateToResearchPublication={() => {
            window.history.pushState({}, '', '/research-paper-publication');
            window.location.reload();
          }}
          onNavigateToBlog={() => {
            onBack();
          }}
        />

        {/* Hero Image with Overlapping Content Card */}
        <div className="relative">
          {/* Hero Image - Takes up top half */}
          <div className="w-full h-[50vh] sm:h-[60vh] relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-slate-100 mt-14 sm:mt-16">
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
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.article
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

                {/* Meta */}
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
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 sm:p-6 rounded-r-lg mb-8">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Content */}
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: injectCTA(blog.fullContent) }}
                />

                {/* Social Share */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">SHARE THIS ARTICLE</h3>
                  <SocialShare url={window.location.href} title={blog.title} description={blog.excerpt} />
                </div>
              </motion.article>

              {/* Related Posts */}
              {allBlogs.length > 0 && (
                <div className="mt-12">
                  <RelatedPosts
                    currentPostId={blog.id}
                    currentCategory={blog.category}
                    allPosts={allBlogs}
                    onNavigate={handleNavigateToPost}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <PremiumFooter />

      {/* Random Strategy Call Popup */}
      <RandomStrategyCallPopup />
      
      {/* Sticky Template CTA */}
      <StickyTemplateCTA onNavigate={handleNavigateToTemplates} />
    </>
  );
};

export default BlogDetailInfobeans;
