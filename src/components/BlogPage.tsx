import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Target, Lightbulb, ArrowLeft, Search, FileText, Users, Zap, TrendingUp, AlertCircle, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumFooter from './PremiumFooter';
import LeadCaptureModal from './LeadCaptureModal';
import { BlogCardSkeleton } from './LoadingSkeleton';
import { ErrorState, EmptyState } from './ErrorBoundaryBlog';
import { blogCache } from '../utils/blogCache';
import { NewsletterSubscribe } from './NewsletterSubscribe';

interface BlogPageProps {
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
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
    }>>;
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
  featured: boolean;
  slug: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome, onNavigateToTemplates }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Array<{ name: string; count: number }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 10;
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
    fetchBlogs();
    fetchCategories();
    
    // Listen for lead modal events
    const handleLeadModal = (event: any) => {
      setModalState({
        isOpen: true,
        title: event.detail.title,
        description: event.detail.description,
        buttonText: event.detail.buttonText
      });
    };
    
    window.addEventListener('openLeadModal', handleLeadModal);
    
    return () => {
      window.removeEventListener('openLeadModal', handleLeadModal);
    };
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
      
      // Check cache first
      const cachedBlogs = blogCache.get<BlogPost[]>('blogs');
      if (cachedBlogs) {
        setBlogPosts(cachedBlogs);
        setLoading(false);
        return;
      }
      
      const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL || 'https://blog.deepiotics.com/wp-json/wp/v2';
      const response = await fetch(`${apiUrl}/posts?per_page=100&_embed`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs from server');
      }
      
      const data: WordPressBlogPost[] = await response.json();
      
      const transformedBlogs: BlogPost[] = data.map((post) => ({
        id: post.id.toString(),
        title: post.title.rendered.replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
        excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
        fullContent: post.content.rendered,
        category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
        date: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        readTime: calculateReadTime(post.content.rendered),
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/blog1/1.jpg',
        featured: false,
        slug: post.slug
      }));
      
      // Cache the results
      blogCache.set('blogs', transformedBlogs);
      setBlogPosts(transformedBlogs);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      setError('Unable to load blogs. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      // Check cache first
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
          name: cat.name,
          count: cat.count
        }));
      
      // Cache the results
      blogCache.set('categories', transformedCategories);
      setCategories(transformedCategories);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const resourceHubItems = [
    {
      icon: Target,
      title: 'Research Topic Ideation',
      description: 'Explore 1000s of research topic ideas and learn how to craft a high-quality topic of your own.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FileText,
      title: 'Proposal Writing',
      description: 'Learn how to write a convincing research proposal that gets your study approved.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Literature Review',
      description: 'Learn how to structure and write a comprehensive literature review that shines!',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: TrendingUp,
      title: 'Methodology & Data Analysis',
      description: 'Get to grips with research methodology and learn how to critically analyse your data.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FileText,
      title: 'Dissertation Writing',
      description: 'Master the art of academic writing and structure your dissertation effectively.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Search,
      title: 'Editing & Proofing',
      description: 'Polish your work with professional editing and proofreading techniques.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Tools & Tricks',
      description: 'Discover productivity tools and research shortcuts to accelerate your doctoral journey.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Users,
      title: 'Expert Corner',
      description: 'Learn from experienced mentors and get insider tips for doctoral success.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);
  
  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Ultra Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-transparent to-purple-100/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-300/8 to-blue-300/8 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img 
                src="/DBACoach (2).png" 
                alt="DBA Coach Logo" 
                loading="eager"
                className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={onBackToHome}
              />
            </motion.div>

            {/* Center Services Menu */}
            <div className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-0">
              <button
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
              >
                Doctorate 1:1 Coaching
              </button>
              
              <span className="text-slate-400">•</span>
              
              <button
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
              >
                DBA Achiever
              </button>
              
              <span className="text-slate-400">•</span>
              
              <button
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
              >
                Time Saver Service
              </button>
            </div>

            {/* Right Side - Home, Blog, and CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={onBackToHome}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm"
              >
                Home
              </button>
              
              <button
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm"
              >
                Blog
              </button>

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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4 space-y-4"
            >
              <button
                onClick={() => {
                  onBackToHome();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Home
              </button>
              <button
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Doctorate 1:1 Coaching
              </button>
              <button
                onClick={() => {
                  document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                DBA Achiever
              </button>
              <button
                onClick={() => {
                  document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Time Saver Service
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

      {/* Download Free Templates & Strategy Call Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Download Free Templates Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl shadow-2xl border-2 border-orange-400/50 p-8 hover:shadow-orange-500/25 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50/90 via-white/80 to-orange-50/70 backdrop-blur-sm border border-white/40"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full filter blur-xl" />
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br from-orange-500 to-red-600 ring-4 ring-orange-200/50">
                    <FileText className="w-9 h-9 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
                      Download Free Templates
                    </h3>
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                      Get ready-made templates for DBA trusted by thousands of professionals.
                    </p>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => {
                  if (onNavigateToTemplates) {
                    onNavigateToTemplates();
                  } else {
                    window.history.pushState({}, '', '/templates');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative block w-full text-center px-8 py-5 rounded-2xl font-black text-xl text-white shadow-2xl bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 hover:from-orange-700 hover:via-red-700 hover:to-orange-800 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">DOWNLOAD TEMPLATES</span>
              </motion.button>
            </motion.div>

            {/* Stuck at ANY stage Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl shadow-2xl border-2 border-blue-400/50 p-8 hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50/90 via-white/80 to-blue-50/70 backdrop-blur-sm border border-white/40"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full filter blur-xl" />
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br from-blue-600 to-indigo-700 ring-4 ring-blue-200/50">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
                      Stuck at ANY stage of your Doctorate?
                    </h3>
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                      Get personal help from an RMC Research Expert.
                    </p>
                  </div>
                </div>
              </div>
              <motion.a
                href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative block w-full text-center px-8 py-5 rounded-2xl font-black text-xl text-white shadow-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Book a FREE 15-Minute Strategy Call</span>
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Resource Hub Quick Access */}
      <section className="py-12 bg-gradient-to-br from-white/70 via-indigo-50/50 to-blue-50/70 backdrop-blur-sm border-b border-white/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/15 via-transparent to-blue-100/15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceHubItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl text-white h-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1 relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-500" />
                    <Icon className="w-12 h-12 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" />
                    <h3 className="text-lg font-black mb-3 relative z-10">{item.title}</h3>
                    <p className="text-base opacity-95 leading-relaxed relative z-10">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-indigo-50/20" />
        <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
            {/* Sidebar - Strategy Call CTA & Categories */}
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Categories Section */}
              <div className="w-full sticky top-20 rounded-2xl shadow-xl border border-white/40 bg-white/80 backdrop-blur-md p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm ${
                      selectedCategory === 'All'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="flex justify-between items-center">
                      All
                      <span className={`text-xs font-semibold ${
                         selectedCategory === 'All' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {blogPosts.length}
                      </span>
                    </span>
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm ${
                        selectedCategory === category.name
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="flex justify-between items-center">
                        {category.name}
                        <span className={`text-xs font-semibold ${
                          selectedCategory === category.name ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>


              </div>
            </motion.div>

            {/* Blog Posts */}
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {loading ? (
                <div className="w-full flex flex-col gap-6">
                  {[...Array(3)].map((_, i) => (
                    <BlogCardSkeleton key={i} />
                  ))}
                </div>
              ) : error ? (
                <ErrorState 
                  message={error} 
                  onRetry={fetchBlogs}
                  onGoHome={onBackToHome}
                />
              ) : paginatedPosts.length > 0 ? (
                <div className="w-full flex flex-col gap-6">
                  {paginatedPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden border border-white/40 group"
                    >
                      <div className="flex flex-col lg:flex-row">
                        {/* Left Side - Image */}
                        <div className="w-full lg:w-[50%] relative overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200">
<div className="w-full h-[200px] sm:h-[220px] md:h-[220px] lg:h-[250px] xl:h-[260px] relative overflow-hidden">                       
   <img 
  src={post.image || "/blog1/1.jpg"}
  alt={post.title}
  loading="lazy"
  decoding="async"
  className="absolute inset-0 w-full h-full object-cover sm:object-cover"
  onError={(e) => { (e.target as HTMLImageElement).src = "/blog1/1.jpg"; }}
/>

                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                          </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-[50%] p-5 lg:p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center flex-wrap gap-2 mb-3">
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                {post.category}
                              </span>
                              {post.featured && (
                                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" />
                                  Featured
                                </span>
                              )}
                            </div>

                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                              {post.title}
                            </h2>

                            <div className="flex items-center flex-wrap gap-3 mb-3 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3 lg:hidden">
                              {post.excerpt}
                            </p>
                          </div>

                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <button 
                              onClick={() => {
                                window.history.pushState({}, '', `/blog/${post.slug}`);
                                window.dispatchEvent(new PopStateEvent('popstate'));
                              }}
                              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base"
                            >
                              <BookOpen className="w-4 h-4" />
                              <span>Read Full Article</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                            
                            <a
                              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                            >
                              <Calendar className="w-4 h-4" />
                              <span>Get Expert Help</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <EmptyState message="No blogs found matching your criteria" />
              )}
              
              {/* Pagination */}
              {!loading && !error && totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-sm text-gray-600">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      // Show first, last, current, and adjacent pages
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`min-w-[40px] h-10 rounded-lg font-semibold transition-all ${
                              currentPage === page
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return <span key={page} className="text-gray-400">...</span>;
                      }
                      return null;
                    })}
                    
                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/80 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSubscribe />
        </div>
      </section>

      {/* Premium CTA Section */}
<section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 via-transparent to-purple-800/50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Sophisticated Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full text-blue-200 text-sm font-bold mb-8">
              <Calendar className="w-5 h-5" />
              Expert Support Available 24/7
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Ready to Accelerate Your DBA Journey?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Get expert guidance, structured support, and done-for-you services that have helped 200+ senior professionals complete their DBA with clarity and confidence.
            </p>
            <motion.a
              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-6 rounded-2xl font-black text-2xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Calendar className="w-7 h-7 relative z-10" />
              <span className="relative z-10">Schedule Your Free Consultation</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
    
    <PremiumFooter />
    
    {/* Lead Capture Modal */}
    <LeadCaptureModal
      isOpen={modalState.isOpen}
      onClose={closeModal}
      title={modalState.title}
      description={modalState.description}
      buttonText={modalState.buttonText}
    />
    </>
  );
};

export default BlogPage;