import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Menu, X, ChevronDown, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumFooter from './PremiumFooter';
import { BlogCardSkeleton } from './LoadingSkeleton';
import { ErrorState, EmptyState } from './ErrorBoundaryBlog';
import { blogCache } from '../utils/blogCache';
import { CTACard } from './SmartCTASystem';
import LeadCaptureModal from './LeadCaptureModal';
import { SocialSidebar } from './SocialSidebar';
import { RandomStrategyCallPopup } from './RandomStrategyCallPopup';
import {  Phone } from 'lucide-react';

interface BlogPageInfobeansProps {
  onBackToHome: () => void;
  onNavigateToTemplates?: () => void;
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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const BlogPageInfobeans: React.FC<BlogPageInfobeansProps> = ({ onBackToHome, onNavigateToTemplates }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Array<{ name: string; count: number }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(6);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const calculateReadTime = (content: string): string => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const cachedBlogs = blogCache.get<BlogPost[]>('blogs');
      if (cachedBlogs) {
        setBlogPosts(cachedBlogs);
        setLoading(false);
        return;
      }

      const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL || 'https://blog.deepiotics.com/wp-json/wp/v2';
      const response = await fetch(`${apiUrl}/posts?per_page=100&_embed`);

      if (!response.ok) throw new Error('Failed to fetch blogs');

      const data: WordPressBlogPost[] = await response.json();

      const transformedBlogs: BlogPost[] = data.map((post) => ({
        id: post.id.toString(),
        title: post.title.rendered.replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;amp;/g, '&'),
        excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        fullContent: post.content.rendered,
        category: (post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
        date: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        readTime: calculateReadTime(post.content.rendered),
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/blog1/1.jpg',
        slug: post.slug
      }));

      blogCache.set('blogs', transformedBlogs);
      setBlogPosts(transformedBlogs);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      setError('Unable to load blogs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const cachedCategories = blogCache.get<Array<{ name: string; count: number }>>('categories');
      if (cachedCategories) {
        setCategories(cachedCategories);
        return;
      }

      const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL || 'https://blog.deepiotics.com/wp-json/wp/v2';
      const response = await fetch(`${apiUrl}/categories`);

      if (!response.ok) return;

      const data = await response.json();
      const transformedCategories = data
        .filter((cat: any) => cat.count > 0)
        .map((cat: any) => ({ 
          name: cat.name.replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'), 
          count: cat.count 
        }));

      blogCache.set('categories', transformedCategories);
      setCategories(transformedCategories);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  const displayedPosts = filteredPosts.slice(0, displayCount);
  const hasMore = displayCount < filteredPosts.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  const handleNavigateToTemplates = () => {
    setIsLeadModalOpen(true);
  };

  const handleLeadSuccess = () => {
    setIsLeadModalOpen(false);
    if (onNavigateToTemplates) {
      onNavigateToTemplates();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#F5F1E8]">
        {/* Navigation - Same as Home Page */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center cursor-pointer"
                onClick={onBackToHome}
              >
                <img 
                  src="/DBACoach (2).png" 
                  alt="DBA dissertation help success stories - DBA Coach" 
                  loading="eager"
                  className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <div className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-0">
               
                
                
                
                <button
                  onClick={() => {
                    onBackToHome();
                    setTimeout(() => {
                      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-slate-700 hover:text-orange-400 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
                >
                  Doctorate Achiever Program
                </button>
                
                <span className="text-slate-400">•</span>
                
                <button className="text-orange-400 font-medium transition-colors duration-300 text-sm">
                  Blog
                </button>
               
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <a 
                href="tel:+918827272142"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 88272 72142</span>
              </a>
                

                <motion.a 
                  href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book My Free Consultation
                </motion.a>
              </div>

              <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden pb-4 space-y-4"
              >
                
                <button className="block w-full text-left text-orange-600 font-medium py-2">
                  Blog
                </button>
               
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBackToHome();
                    setTimeout(() => {
                      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="block w-full text-left text-slate-700 hover:text-orange-600 font-medium py-2"
                >
                 Doctorate Achiever Program
                </button>
               
                <a 
                  href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center"
                >
                  Book My Free Consultation
                </a>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-white pt-16 sm:pt-20 pb-4 sm:pb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg sm:text-xl font-semibold max-w-3xl mb-8">
              <span className="bg-gradient-to-r from-orange-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Expert insights, research tips, and guidance for your
              </span>
              <span className="text-slate-800 text-2xl sm:text-3xl font-extrabold">{" "} DBA journey.</span>
            </p>

            {/* Compact CTA Boxes */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Download Templates CTA */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      Download Free Templates
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Get ready-made templates for DBA trusted by thousands of professionals.
                    </p>
                    <button
                      onClick={handleNavigateToTemplates}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-all inline-flex items-center gap-2"
                    >
                      DOWNLOAD TEMPLATES
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Strategy Call CTA */}
              <div className="bg-gradient-to-br from-orange-50 to-peach-30 border-2 border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      Stuck at ANY stage of your Doctorate?
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Get personal help from an RMC Research Expert.
                    </p>
                    <a
                      href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg text-sm transition-all inline-flex items-center gap-2"
                    >
                      Book a FREE 15-Minute Strategy Call
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Categories - Compact Grid with Descriptions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { icon: '🎯', title: 'Research Topic Ideation' },
                { icon: '📝', title: 'Proposal Writing' },
                { icon: '📚', title: 'Literature Review' },
                { icon: '📊', title: 'Methodology & Data Analysis' },
                { icon: '✍️', title: 'Dissertation Writing' },
                { icon: '✅', title: 'Editing & Proofing' },
                { icon: '⚡', title: 'Tools & Tricks' },
                { icon: '👨‍🏫', title: 'Expert Corner' }
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    const categoryMap: {[key: number]: string} = {
                      0: 'Research Topic Ideation',
                      1: 'Proposal Writing',
                      2: 'Literature Review',
                      3: 'Methodology',
                      4: 'Dissertation Writing',
                      5: 'Editing',
                      6: 'Tools & Tricks',
                      7: 'Expert Corner'
                    };
                    setSelectedCategory(categoryMap[index]);
                    document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white border border-slate-200 rounded-lg p-3 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="text-2xl mb-1 text-center">{item.icon}</div>
                  <p className="text-xs font-semibold text-slate-700 text-center line-clamp-2 group-hover:text-orange-600 mb-1">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-slate-500 text-center leading-tight">
                    {index === 0 && 'Explore 1000s of research topic ideas and learn how to craft a high-quality topic of your own.'}
                    {index === 1 && 'Learn how to write a convincing research proposal that gets your study approved.'}
                    {index === 2 && 'Learn how to structure and write a comprehensive literature review that shines!'}
                    {index === 3 && 'Get to grips with research methodology and learn how to critically analyse your data.'}
                    {index === 4 && 'Master the art of academic writing and structure your dissertation effectively.'}
                    {index === 5 && 'Polish your work with professional editing and proofreading techniques.'}
                    {index === 6 && 'Discover productivity tools and research shortcuts to accelerate your doctoral journey.'}
                    {index === 7 && 'Learn from experienced mentors and get insider tips for doctoral success.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-t border-slate-200 py-3 sticky top-14 sm:top-16 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-orange-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All ({blogPosts.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium transition-all ${
                    selectedCategory === cat.name
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12" id="blog-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-slate-200 h-40 rounded-t-lg"></div>
                    <div className="bg-white p-4 rounded-b-lg">
                      <div className="h-3 bg-slate-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <ErrorState message={error} onRetry={fetchBlogs} onGoHome={onBackToHome} />
            ) : displayedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {displayedPosts.map((post, index) => (
                    <React.Fragment key={post.id}>
                      <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                        onClick={() => {
                          window.history.pushState({}, '', `/blog/${post.slug}`);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        }}
                      >
                        <div className="relative h-48 sm:h-40 overflow-hidden bg-slate-100">
                          <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover sm:object-contain group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => { (e.target as HTMLImageElement).src = '/blog1/1.jpg'; }}
                          />
                        </div>

                        <div className="p-4">
                          <h2 className="text-sm font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                            {post.title}
                          </h2>

                          <button className="text-orange-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            READ ARTICLE
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.article>

                      {/* Insert CTA Card after every 4th post */}
                      {(index + 1) % 4 === 0 && index < displayedPosts.length - 1 && (
                        <div className="col-span-2 lg:col-span-4">
                          <CTACard onNavigate={handleNavigateToTemplates} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="flex justify-center mt-12">
                    <button
                      onClick={handleLoadMore}
                      className="bg-white hover:bg-slate-50 text-slate-900 font-bold px-12 py-4 rounded-lg border-2 border-slate-900 transition-all hover:shadow-lg flex items-center gap-2"
                    >
                      LOAD MORE
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <EmptyState message="No blogs found in this category" />
            )}
          </div>
        </section>
      </div>

      <PremiumFooter />

      <SocialSidebar/>
      
      {/* Random Strategy Call Popup */}
      <RandomStrategyCallPopup />

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        title="Download Free DBA Templates"
        description="Get instant access to our comprehensive DBA templates. Enter your details below to download."
        buttonText="Download Templates"
        onSuccess={handleLeadSuccess}
      />
    </>
  );
};

export default BlogPageInfobeans;
