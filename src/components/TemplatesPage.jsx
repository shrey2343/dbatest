import React, { useMemo, useState } from "react";
import { motion } from 'framer-motion';
import { Calendar, Menu, X } from 'lucide-react';
import Hero from "./Hero";
import FeaturedTemplate from "./FeaturedTemplate";
import TemplateGrid from "./TemplateGrid";
import TemplatesTable from "./TemplatesTable";
import FAQAccordion from "./FAQAccordion";
import PremiumFooter from './PremiumFooter';

import templatesData from "../data/templates.json"; // or fetch from API

const TemplatesPage = ({ onBackToHome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const templates = templatesData; // or useEffect(fetch)
  const featured = useMemo(() => templates.find(t => t.isFeatured), [templates]);
  const others = useMemo(() => templates.filter(t => !t.isFeatured), [templates]);

  return (
    <main className="min-h-screen">
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
                        alt="DBA Coach Logo - World's #1 Doctorate Success Platform" 
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
                        onClick={() => {
                          window.history.pushState({}, '', '/blog');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        }}
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
                        onClick={() => {
                          window.history.pushState({}, '', '/blog');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          setMobileMenuOpen(false);
                        }}
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
        
      <Hero
      className="mt-16"
        title="Fast-track your writing with tried & tested templates"
        subtitle="Free templates and worksheets to speed up your dissertation, theses & research writing."
        ctaLabel="Browse All Templates"
        onCta={() => document.getElementById("templates-grid")?.scrollIntoView({ behavior: "smooth" })}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {featured && <FeaturedTemplate template={featured} />}

        {/* <div id="templates-grid" className="mt-10">
          <TemplateGrid templates={others} />
        </div> */}

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">All Templates & Worksheets</h3>
          <TemplatesTable templates={templates} />
        </div>

        <div className="mt-12">
          <FAQAccordion items={[
            { q: "Are these templates free?", a: "Yes — free for students. No fees." },
            { q: "Can I edit the templates?", a: "Yes — they are provided in editable formats." }
          ]} />
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
};

export default TemplatesPage;
