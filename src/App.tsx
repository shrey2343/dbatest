import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogPage from './components/BlogPage';
import BlogDetailPage from './components/BlogDetailPage';
import BlogPageInfobeans from './components/BlogPageInfobeans';
import BlogDetailInfobeans from './components/BlogDetailInfobeans';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import RefundPolicy from './components/RefundPolicy';
import Admin from './admin/Admin';
import DoctorateAchieverProgram from './components/DoctorateAchieverProgram';
import LeadCaptureModal from './components/LeadCaptureModal';
import ConsultationPopup from './components/ConsultationPopup';
import TemplatesPage from './components/TemplatesPage';
import PremiumHero from './components/PremiumHero';
import PainPointsSection from './components/PainPointsSection';
import ServicesSection from './components/ServicesSection';
import TrustProofSection from './components/TrustProofSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import VideoTestimonialsSection from './components/VideoTestimonialsSection';
import TestimonialSection from './components/TestimonialSection';

import CTASection from './components/CTASection';
import MoneyBackGuarantee from './components/MoneyBackGuarantee';
import DBASuccessInsights from './components/DBASuccessInsights';
import PremiumFooter from './components/PremiumFooter';
import ChatBot from './components/ChatBot';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import GuideSection from './components/GuideSection';
import SectionDivider from './components/SectionDivider';
import { Helmet } from 'react-helmet-async';
import FAQSection from './components/FAQSection';
import { SocialSidebar } from './components/SocialSidebar';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogSlug, setBlogSlug] = useState<string | null>(null);

  useEffect(() => {
    // Check if URL contains /admin path (including sub-routes)
    const path = window.location.pathname;
    if (path.startsWith('/admin')) {
      setCurrentPage('admin');
    } else if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      setBlogSlug(slug);
      setCurrentPage('blog-detail');
    } else if (path === '/blog') {
      setBlogSlug(null);
      setCurrentPage('blog');
    } else if (path === '/templates') {
      setCurrentPage('templates');
    } else if (path === '/doctorate-achiever-program') {
      setCurrentPage('doctorate-achiever-program');
    } else if (path === '/privacy-policy') {
      setCurrentPage('privacy-policy');
    } else if (path === '/terms-of-service') {
      setCurrentPage('terms-of-service');
    } else if (path === '/refund-policy') {
      setCurrentPage('refund-policy');
    }
  }, []);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/admin')) {
        setCurrentPage('admin');
      } else if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        setBlogSlug(slug);
        setCurrentPage('blog-detail');
      } else if (path === '/blog') {
        setBlogSlug(null);
        setCurrentPage('blog');
      } else if (path === '/templates') {
        setCurrentPage('templates');
      } else if (path === '/doctorate-achiever-program') {
        setCurrentPage('doctorate-achiever-program');
      } else if (path === '/privacy-policy') {
        setCurrentPage('privacy-policy');
      } else if (path === '/terms-of-service') {
        setCurrentPage('terms-of-service');
      } else if (path === '/refund-policy') {
        setCurrentPage('refund-policy');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when page changes (only for main pages, not admin sub-routes)
  useEffect(() => {
    const path = window.location.pathname;
    if (currentPage === 'admin' && !path.startsWith('/admin')) {
      window.history.pushState({}, '', '/admin');
    } else if (currentPage === 'blog' && path !== '/blog' && !path.startsWith('/blog/')) {
      window.history.pushState({}, '', '/blog');
    } else if (currentPage === 'home' && path !== '/') {
      window.history.pushState({}, '', '/');
    }
  }, [currentPage]);
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    description: '',
    buttonText: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: '',
      description: '',
      buttonText: ''
    });
  };

  // Handle admin panel
if (currentPage === 'admin') {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Admin />
    </>
  );
}


  // Handle privacy policy page
 if (currentPage === 'privacy-policy') {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DBA Coach</title>
        <meta name="description" content="Privacy policy of DBA Coach." />
        <link rel="canonical" href="https://dbacoach.com/privacy-policy" />
      </Helmet>

      <PrivacyPolicy onBack={() => {
        setCurrentPage('home');
        window.history.pushState({}, '', '/');
      }} />
    </>
  );
}


  // Handle terms of service page
if (currentPage === 'terms-of-service') {
  return (
    <>
      <Helmet>
        <title>Terms of Service | DBA Coach</title>
        <meta name="description" content="Terms and conditions for using DBA Coach services." />
        <link rel="canonical" href="https://dbacoach.com/terms-of-service" />
      </Helmet>

      <TermsOfService onBack={() => {
        setCurrentPage('home');
        window.history.pushState({}, '', '/');
      }} />
    </>
  );
}


  // Handle refund policy page
if (currentPage === 'refund-policy') {
  return (
    <>
      <Helmet>
        <title>Refund Policy | DBA Coach</title>
        <meta name="description" content="Refund policy for DBA Coach programs and services." />
        <link rel="canonical" href="https://dbacoach.com/refund-policy" />
      </Helmet>

      <RefundPolicy onBack={() => {
        setCurrentPage('home');
        window.history.pushState({}, '', '/');
      }} />
    </>
  );
}


  // Handle blog detail page
if (currentPage === 'blog-detail' && blogSlug) {

  const formattedTitle = blogSlug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const blogUrl = `https://dbacoach.com/blog/${blogSlug}`;

  return (
    <>
      <Helmet>
        {/* ===== BASIC SEO ===== */}
        <title>{formattedTitle} (Step-by-Step Guide) | DBA Coach</title>

        <meta
          name="description"
          content={`${formattedTitle} explained step by step for DBA scholars. Includes examples, methodology, and expert guidance from DBA Coach.`}
        />

        <link rel="canonical" href={blogUrl} />

        {/* ===== BLOG POSTING SCHEMA (LIKE GRADCOACH) ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": formattedTitle,
            "description": `${formattedTitle} explained step by step for DBA scholars.`,
            "author": {
              "@type": "Organization",
              "name": "DBA Coach"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DBA Coach",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dbacoach.com/DBACoach%20(2).png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": blogUrl
            }
          })}
        </script>

        {/* ===== FAQ RICH RESULTS ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `What is ${formattedTitle}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${formattedTitle} is a key DBA research concept focused on applied problem-solving for working professionals.`
                }
              },
              {
                "@type": "Question",
                "name": "Is this topic suitable for DBA students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. This topic is highly suitable for DBA candidates because it focuses on real-world business application and managerial impact."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to complete a DBA dissertation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most DBA dissertations take between 18 and 36 months, depending on topic complexity and research support."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <BlogDetailInfobeans
        blogSlug={blogSlug}
        onBack={() => {
          setCurrentPage('blog');
          setBlogSlug(null);
          window.history.pushState({}, '', '/blog');
        }}
        onNavigateToTemplates={() => {
          setCurrentPage('templates');
          window.history.pushState({}, '', '/templates');
        }}
      />
    </>
  );
}



  // Handle blog listing page
if (currentPage === 'blog') {
  return (
    <>
      <Helmet>
  <title>DBA Research Blog | Guides & Examples – DBA Coach</title>
  <meta
    name="description"
    content="Explore expert DBA research guides, dissertation strategies, methodologies, and real-world examples from DBA Coach."
  />
  <link rel="canonical" href="https://dbacoach.com/blog" />
</Helmet>


      <BlogPageInfobeans 
        onBackToHome={() => setCurrentPage('home')} 
        onNavigateToTemplates={() => {
          setCurrentPage('templates');
          window.history.pushState({}, '', '/templates');
        }}
      />
    </>
  );
}


  // Handle templates page
 if (currentPage === 'templates') {
  return (
    <>
      <Helmet>
  <title>Free DBA Templates & Tools – DBA Coach</title>
  <meta
    name="description"
    content="Download free, editable DBA templates, checklists, and tools to accelerate your doctoral research."
  />
  <link rel="canonical" href="https://dbacoach.com/templates" />
</Helmet>


      <TemplatesPage 
        onBackToHome={() => {
          setCurrentPage('home');
          window.history.pushState({}, '', '/');
        }}
      />
    </>
  );
}

  // Handle doctorate achiever program page
  if (currentPage === 'doctorate-achiever-program') {
    return (
      <>
        <Helmet>
          <title>Doctorate Achiever Program | Complete DBA Support – DBA Coach</title>
          <meta
            name="description"
            content="Complete start-to-finish DBA dissertation support for busy scholars. From topic selection to defense preparation with dedicated research mentors."
          />
          <link rel="canonical" href="https://dbacoach.com/doctorate-achiever-program" />
        </Helmet>

        <DoctorateAchieverProgram 
          onBack={() => {
            setCurrentPage('home');
            window.history.pushState({}, '', '/');
          }}
        />
      </>
    );
  }


  return (

    <div className="min-h-screen bg-white">

      <Helmet>
  <title>DBA Dissertation Help  for working professionals | 1-on-1 DBA Research Consulting – DBA Coach</title>

  <meta
    name="description"
    content="Get expert DBA Dissertation help with 1-on-1 guidance, proposal support, and end-to-end DBA research consulting for working professionals."
  />

  <link rel="canonical" href="https://dbacoach.com/" />
</Helmet>


      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                setCurrentPage('home');
                window.history.pushState({}, '', '/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src="/DBACoach (2).png" 
                alt="DBA dissertation help success stories - DBA Coach" 
                loading="eager"
                className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Left Side - Services Menu and Blog */}
            <div className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-0">
              <button
                onClick={() => {
                  setCurrentPage('doctorate-achiever-program');
                  window.history.pushState({}, '', '/doctorate-achiever-program');
                }}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
              >
                Doctorate Achiever Program
              </button>
              
              <span className="text-slate-400">•</span>
           
              <button
                onClick={() => setCurrentPage('blog')}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
              >
                Blog
              </button>
            </div>

            {/* Right Side - Phone and CTA */}
            <div className="hidden md:flex items-center space-x-4">
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

            {/* Mobile Phone & Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <a 
                href="tel:+918827272142"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">+91 88272 72142</span>
              </a>
              
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-700" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4 space-y-4"
            >
              {/* <button
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Home
              </button> */}
              <button
                onClick={() => {
                  setCurrentPage('blog');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Blog
              </button>
              {/* <button
                onClick={() => {
                  document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Doctorate 1:1 Coaching
              </button> */}
              <button
                onClick={() => {
                  setCurrentPage('doctorate-achiever-program');
                  window.history.pushState({}, '', '/doctorate-achiever-program');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Doctorate Achiever Program
              </button>
              {/* <button
                onClick={() => {
                  document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Time Saver Service
              </button> */}
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

      {/* Premium Hero Section */}
      <PremiumHero />

      <SectionDivider />
      {/* Pain Points Section */}
      <PainPointsSection />

      <SectionDivider />
      {/* Services Section */}
      <ServicesSection />

      <SectionDivider />
      {/* Video Testimonials Section */}
      <VideoTestimonialsSection />

      <SectionDivider />
      {/* Testimonials Section */}
      <TestimonialSection />

      <SectionDivider />
      {/* Trust Proof Section */}
      <TrustProofSection />



      <SectionDivider />
      {/* Process Section */}
      <ProcessSection />

      <SectionDivider />
      {/* DBA Success Insights Section */}
      <DBASuccessInsights />

      <SectionDivider />
      <GuideSection setModalState={setModalState} />
      
      <SectionDivider />
      {/* FAQ Section */}
      <FAQSection />
      
       <SocialSidebar />
      {/* Premium Footer */}
      <PremiumFooter />

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        description={modalState.description}
        buttonText={modalState.buttonText}
      />

      {/* Chat Bot */}
      <ChatBot />

      {/* Consultation Popup */}
      <ConsultationPopup />
    </div>
  );
}

export default App;
