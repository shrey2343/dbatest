import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogPage from './components/BlogPage';
import LeadCaptureModal from './components/LeadCaptureModal';
import PremiumHero from './components/PremiumHero';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import PremiumFooter from './components/PremiumFooter';
import { Menu, X, Calendar } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
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

  if (currentPage === 'blog') {
    return <BlogPage onBackToHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img 
                src="/Dba Coach Logo.png" 
                alt="DBA Coach Logo" 
                className="w-24 h-24 object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('blog')}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                Blog
              </button>
              <motion.a 
                href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book My Free Call
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
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage('blog');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Blog
              </button>
              <a 
                href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center"
              >
                Book Free Call
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Premium Hero Section */}
      <PremiumHero />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />

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
    </div>
  );
}

export default App;
