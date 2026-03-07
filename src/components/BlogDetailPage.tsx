import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, AlertCircle, FileText } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';
import PremiumFooter from './PremiumFooter';
import { BlogDetailSkeleton } from './LoadingSkeleton';
import { ErrorState } from './ErrorBoundaryBlog';
import { ReadingProgress, TableOfContents } from './ReadingProgress';
import { SocialShare } from './SocialShare';
import { SocialSidebar } from './SocialSidebar';
import { MobileSocialFloat } from './MobileSocialFloat';
import { DisqusComments } from './DisqusComments';
import { RelatedPosts } from './RelatedPosts';
import { NewsletterSubscribe } from './NewsletterSubscribe';
import { SEOHead } from './SEOHead';
import { sanitizeHTML, extractTextFromHTML } from '../utils/sanitize';
import { blogCache } from '../utils/blogCache';

interface BlogDetailPageProps {
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
  featured: boolean;
  date: string;
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
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
    }>>;
  };
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ blogSlug, onBack, onNavigateToTemplates }) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    description: '',
    buttonText: ''
  });
  
  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: '',
      description: '',
      buttonText: ''
    });
  };

  useEffect(() => {
    fetchBlogBySlug();
    
    // Listen for lead modal events
    const handleLeadModal = (event: any) => {
      setModalState({
        isOpen: true,
        title: event.detail.title,
        description: event.detail.description,
        buttonText: event.detail.buttonText
      });
    };
    
    // Listen for navigate to templates events
    const handleNavigateToTemplates = () => {
      if (onNavigateToTemplates) {
        onNavigateToTemplates();
      } else {
        window.history.pushState({}, '', '/templates');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    };
    
    window.addEventListener('openLeadModal', handleLeadModal);
    window.addEventListener('navigateToTemplates', handleNavigateToTemplates);
    
    return () => {
      window.removeEventListener('openLeadModal', handleLeadModal);
      window.removeEventListener('navigateToTemplates', handleNavigateToTemplates);
    };
  }, [blogSlug, onNavigateToTemplates]);

  const calculateReadTime = (content: string): string => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const injectCTABox = (htmlContent: string): string => {
    // CTA Box HTML
    const ctaBoxHTML = `
      <div class="my-12 bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-xl p-8 shadow-lg" style="margin: 3rem 0; background: linear-gradient(to bottom right, #fff7ed, #ffedd5); border-left: 4px solid #f97316; border-radius: 0.75rem; padding: 2rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
       
        <p style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem; text-align: center; color: #111827; line-height: 1.2;">
          Need Expert Guidance?
        </p>

        <p style="font-size: 1.75rem; font-weight: 700; margin-bottom: 2rem; text-align: center; color: #374151; line-height: 1.4;">
          Get personalized support for your DBA journey from experienced mentors
        </p>

        <div class="flex justify-center" style="display: flex; justify-content: center;">
          <a
            href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            style="display: inline-flex; align-items: center; gap: 0.75rem; background: linear-gradient(to right, #f97316, #ea580c); color: white; padding: 1rem 2rem; border-radius: 9999px; font-weight: 700; font-size: 1.125rem; text-decoration: none; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transition: all 0.3s;"
          >
             Book a Free 15-Minute Strategy Call
          </a>
        </div>
      </div>
    `;

    // Download Templates Box HTML
    const downloadBoxHTML = `
      <div class="my-12 rounded-2xl shadow-2xl border-2 border-orange-400/50 p-8 bg-gradient-to-br from-orange-50/90 via-white/80 to-orange-50/70" style="margin: 3rem 0; border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 2px solid rgba(251, 146, 60, 0.5); padding: 2rem; background: linear-gradient(to bottom right, rgba(255, 247, 237, 0.9), rgba(255, 255, 255, 0.8), rgba(255, 247, 237, 0.7));">
        <div style="display: flex; align-items: flex-start; gap: 1.5rem; margin-bottom: 2rem;">
          <div style="flex-shrink: 0; width: 4rem; height: 4rem; border-radius: 1rem; display: flex; align-items: center; justify-content: center; background: linear-gradient(to bottom right, #f97316, #dc2626); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div style="flex: 1;">
            <p style="font-size: 2rem; font-weight: 900; color: #0f172a; line-height: 1.2; margin-bottom: 1rem;">
              Download Free Templates
            </p>
            <p style="font-size: 1.25rem; color: #334155; line-height: 1.6; font-weight: 500;">
              Get ready-made templates for DBA trusted by thousands of professionals.
            </p>
          </div>
        </div>
        <button 
          onclick="window.dispatchEvent(new CustomEvent('navigateToTemplates'));"
          style="display: block; width: 100%; text-align: center; padding: 1.25rem 2rem; border-radius: 1rem; font-weight: 900; font-size: 1.25rem; color: white; background: linear-gradient(to right, #ea580c, #dc2626, #ea580c); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: none; cursor: pointer; transition: all 0.3s;"
          onmouseover="this.style.background='linear-gradient(to right, #c2410c, #b91c1c, #c2410c)'; this.style.transform='scale(1.05) translateY(-2px)';"
          onmouseout="this.style.background='linear-gradient(to right, #ea580c, #dc2626, #ea580c)'; this.style.transform='scale(1) translateY(0)';"
        >
          DOWNLOAD TEMPLATES
        </button>
      </div>
    `;

    // Find all paragraph tags
    const paragraphRegex = /<p[^>]*>.*?<\/p>/gs;
    const paragraphs = htmlContent.match(paragraphRegex);
    
    // Find all heading tags (h2, h3, h4)
    const headingRegex = /<h[2-4][^>]*>.*?<\/h[2-4]>/gs;
    const headings = htmlContent.match(headingRegex);

    let modifiedContent = htmlContent;

    // Insert CTA box after the first 2 paragraphs
    if (paragraphs && paragraphs.length >= 2) {
      let insertPosition = 0;
      let paragraphCount = 0;
      
      for (let i = 0; i < paragraphs.length && paragraphCount < 2; i++) {
        const paragraphMatch = modifiedContent.indexOf(paragraphs[i], insertPosition);
        if (paragraphMatch !== -1) {
          insertPosition = paragraphMatch + paragraphs[i].length;
          paragraphCount++;
        }
      }

      modifiedContent = 
        modifiedContent.slice(0, insertPosition) + 
        ctaBoxHTML + 
        modifiedContent.slice(insertPosition);
    }

    // Insert Download Templates box before the last 2 headings
    if (headings && headings.length >= 2) {
      // Find the second-to-last heading
      const secondToLastHeading = headings[headings.length - 2];
      const insertPosition = modifiedContent.lastIndexOf(secondToLastHeading);
      
      if (insertPosition !== -1) {
        modifiedContent = 
          modifiedContent.slice(0, insertPosition) + 
          downloadBoxHTML + 
          modifiedContent.slice(insertPosition);
      }
    } else if (headings && headings.length === 1) {
      // If only 1 heading, insert before it
      const lastHeading = headings[0];
      const insertPosition = modifiedContent.lastIndexOf(lastHeading);
      
      if (insertPosition !== -1) {
        modifiedContent = 
          modifiedContent.slice(0, insertPosition) + 
          downloadBoxHTML + 
          modifiedContent.slice(insertPosition);
      }
    }

    return modifiedContent;
  };

  const fetchBlogBySlug = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Check cache first
      const cachedBlogs = blogCache.get<BlogPost[]>('blogs');
      let data: WordPressBlogPost[];
      
      if (cachedBlogs) {
        // Find in cache
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
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      
      data = await response.json();
      
      const foundPost = data.find((post) => post.slug === blogSlug);
      
      if (foundPost) {
        const transformedBlog: BlogPost = {
          id: foundPost.id.toString(),
          title: foundPost.title.rendered.replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
          excerpt: foundPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
          fullContent: sanitizeHTML(foundPost.content.rendered),
          category: foundPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
          date: new Date(foundPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          readTime: calculateReadTime(foundPost.content.rendered),
          image: foundPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/blog1/1.jpg',
          featured: false,
          slug: foundPost.slug
        };
        
        // Transform all blogs for related posts
        const allTransformedBlogs: BlogPost[] = data.map((post) => ({
          id: post.id.toString(),
          title: post.title.rendered.replace(/&amp;/g, '&'),
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
          fullContent: post.content.rendered,
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
          date: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          readTime: calculateReadTime(post.content.rendered),
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/blog1/1.jpg',
          featured: false,
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-white/30 shadow-2xl h-20" />
        <div className="pt-24 pb-16">
          <BlogDetailSkeleton />
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <ErrorState 
          message={error || 'Blog post not found'}
          onRetry={fetchBlogBySlug}
          onGoHome={onBack}
        />
      </div>
    );
  }

  const handleNavigateToPost = (slug: string) => {
    window.history.pushState({}, '', `/blog/${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
        <>
      {/* SEO Meta Tags */}
      <SEOHead
        title={blog.title}
        description={blog.excerpt}
        image={blog.image}
        url={window.location.href}
        type="article"
        publishedTime={blog.date}
        keywords={[blog.category, 'DBA', 'Doctorate', 'Research', 'Academic Writing']}
      />
      
      {/* Reading Progress Bar */}
      <ReadingProgress />
      
      {/* Social Media Sidebar - Desktop */}
      <SocialSidebar />
      
      {/* Mobile Social Float */}
      <MobileSocialFloat />

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-indigo-400/8 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      {/* Premium Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-white/30 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white/50 to-purple-50/30" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 text-base px-4 py-2 rounded-lg hover:bg-blue-50/50"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </button>
            
            <img 
              src="/DBACoach (2).png" 
              alt="DBA Coach Logo" 
              className="h-20 object-contain"
            />
            
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 text-base px-4 py-2 rounded-lg hover:bg-blue-50/50 border border-transparent hover:border-blue-200"
            >
              <Share2 className="w-5 h-5" />
              Share Article
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <article className="flex-1 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold rounded-full uppercase tracking-wide shadow-lg">
                {blog.category}
              </span>
              {blog.featured && (
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg">
                  <AlertCircle className="w-4 h-4" />
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-white/50">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-700">{blog.date}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-white/50">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span className="font-semibold text-slate-700">{blog.readTime}</span>
              </div>
            </div>
            
            {/* Stylish Excerpt */}
            <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-blue-500 mb-12 relative">
              <div className="absolute top-4 left-4 text-6xl text-blue-200 font-serif">"</div>
              <p className="text-xl text-slate-700 leading-relaxed italic pl-8 font-medium">
                {blog.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            {blog.image && (
              <div className="mb-12 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-contain md:object-cover"
                  onError={(e) => { e.currentTarget.src = "/blog1/1.jpg"; }}
                />
              </div>
            )}
          </motion.div>

          {/* Full Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none
              prose-headings:font-extrabold prose-headings:tracking-tight
              prose-h1:text-5xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:text-gray-900
              prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-gray-900 prose-h2:leading-tight
              prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-900 prose-h3:font-bold
              prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6 prose-h4:text-gray-900 prose-h4:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-ul:my-6 prose-ul:space-y-2
              prose-ol:my-6 prose-ol:space-y-2
              prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-a:text-emerald-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-emerald-700 hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-gray-800
              prose-code:text-emerald-700 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-img:rounded-lg prose-img:shadow-md"
          >
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: injectCTABox(blog.fullContent) }}
            />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-10 text-center text-white shadow-xl"
          >
            <h3 className="text-3xl font-extrabold mb-4">Need Expert Guidance?</h3>
            <p className="text-xl mb-8 text-emerald-50">
              Get personalized support for your DBA journey from experienced mentors
            </p>
            <a
              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar className="w-6 h-6" />
              Book Your Free Consultation
            </a>
          </motion.div>

          {/* Social Share */}
          <div className="mt-10 flex justify-center">
            <SocialShare 
              url={window.location.href}
              title={blog.title}
              description={blog.excerpt}
            />
          </div>
          
          {/* Newsletter Subscribe */}
          <div className="mt-16">
            <NewsletterSubscribe />
          </div>
          
          {/* Related Posts */}
          {allBlogs.length > 0 && (
            <RelatedPosts
              currentPostId={blog.id}
              currentCategory={blog.category}
              allPosts={allBlogs}
              onNavigate={handleNavigateToPost}
            />
          )}
          
          {/* Disqus Comments */}
          <DisqusComments slug={blogSlug} title={blog.title} />
        </article>
        
        {/* Table of Contents - Desktop Only */}
        <TableOfContents content={blog.fullContent} />
      </div>
      </div>
    </div>

{/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        description={modalState.description}
        buttonText={modalState.buttonText}      
      />
    </div>
    <div>
      <PremiumFooter />
    </div>
    </>
  );
};

export default BlogDetailPage;
