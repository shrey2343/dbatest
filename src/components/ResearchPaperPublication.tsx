import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Calendar, Award, Users, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PremiumFooter from './PremiumFooter';
import TestimonialSection from './TestimonialSection';
import VideoTestimonialsSection from './VideoTestimonialsSection';
import StandardHeader from './StandardHeader';
import LeadCaptureModal from './LeadCaptureModal';

interface ResearchPaperPublicationProps {
  onBack: () => void;
}

const ResearchPaperPublication: React.FC<ResearchPaperPublicationProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalButtonText, setModalButtonText] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = (title: string, description: string, buttonText: string = 'Get Started Now') => {
    setModalTitle(title);
    setModalDescription(description);
    setModalButtonText(buttonText);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative">
      {/* Standard Header */}
      <StandardHeader
        onNavigateHome={() => {
          onBack();
          window.history.pushState({}, '', '/');
        }}
        onNavigateToDoctorateProgram={() => {
          window.history.pushState({}, '', '/doctorate-achiever-program');
          window.location.reload();
        }}
        onNavigateToResearchPublication={() => {
          // Already on this page, just scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToBlog={() => {
          window.history.pushState({}, '', '/blog');
          window.location.reload();
        }}
        ctaText="Start your publication journey"
        ctaLink="https://calendly.com/researchmentorclinic1/1-1-strategy-call-to-earn-dr-fast-clone/2026-03-31T13:00:00+05:30"
      />

      {/* Hero Section - Matching DoctorateAchieverProgram */}
      <section className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg"
            >
              <Star className="w-4 h-4" />
              PUBLISHED RESEARCHER PROGRAM
              <Star className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Transform Your CV in{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                10 Weeks
              </span>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Become a Recognized {' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Researcher {' '}
              </span>with {' '}
               <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Published Work {' '}
              </span>
              </p>
            </h1>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-xl border border-green-100">
              <p className="text-lg text-slate-600 mb-4">
                Skip years of confusion and trial-and-error. DBACoach gives you a proven 10-week system to write and submit high-impact research papers with clarity, structure, and support.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-orange-800 mb-2">🎯 What You Get with DBA Coach:</p>
                <p className="text-sm text-orange-700 leading-relaxed">
                  Get comprehensive LMS access with step-by-step training in research topic selection, methodology, data collection & analysis, plus personalized 1:1 mentor sessions for expert guidance. You'll also gain access to exclusive publication opportunities through our international conference tie-ups, giving you multiple pathways to showcase your research work.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold">10-Week System</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">High-Impact Papers</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">1:1 Mentorship</span>
                </div>
              </div>
            </div>
            
            <motion.button
              onClick={() => handleCTAClick(
                'Research Publication Academy - Waitlist',
                'Join the waitlist for our exclusive Research Publication Academy program and get early access to our proven 10-week system.',
                'Join Waitlist'
              )}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              >
                <Calendar className="w-5 h-5" />
              </motion.div>
              Enroll Now
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] animate-pulse"></div>
            </motion.button>
            
            <p className="text-sm text-slate-500 mt-4">
              ⏰ Exclusive Early-Bird Offer Only for 10 Persons • 🔒 No obligation • ✅ Limited spots available
            </p>
          </motion.div>
        </div>
      </section>
      {/* Why Publish Research Papers Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Publish Research Papers?
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Publishing research papers is essential for academic and professional growth. It establishes your credibility, opens doors to new opportunities, and contributes to the advancement of knowledge in your field.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">High School Students (Ivy League & Top University Aspirants)</h3>
                <p className="text-sm text-slate-600 mb-3">Top universities don't just look at grades — they look for intellectual curiosity, research exposure, and academic initiative.</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-700">Publishing helps you:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Strengthen Ivy League and top-tier college applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Demonstrate early research capability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Differentiate you from thousands of applicants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Show commitment to academic excellence</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-purple-500"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Undergraduate, Master's & PhD Students</h3>
                <p className="text-sm text-slate-600 mb-3">Publications are a career accelerator in academia and research-driven industries.</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-700">Publishing helps you:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Strengthen academic and research profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Improve chances of higher education, fellowships, and funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Meet degree or program publication requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Build confidence and subject-matter authority</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-orange-500"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">University Professors & Academic Faculty</h3>
                <p className="text-sm text-slate-600 mb-3">In academia, career growth depends on continuous publishing.</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-700">Publishing helps you:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Promotions and career advancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Grant eligibility and research funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Academic reputation and citation impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Institutional performance metrics</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">PhD Holders & Independent Researchers</h3>
                <p className="text-sm text-slate-600 mb-3">A doctoral degree gives you credentials — publications give you authority.</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-700">Publishing helps you:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Establish thought leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Strengthen professional credibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Build influence beyond the 'Dr.' title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Remain active and relevant in your field</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-500"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Startups, Corporates & Enterprises</h3>
                <p className="text-sm text-slate-600 mb-3">Research publications build trust, credibility, and market authority.</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-700">Publishing helps you:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Establish scientific and technical credibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Support product validation and innovation claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Strengthen investor, partner, and stakeholder confidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Enhance brand positioning through evidence-based research</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-indigo-500"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">EB-1 & Global Profile Builders</h3>
                <p className="text-sm text-slate-600 mb-3">For extraordinary ability profiles, a strong publication record matters.</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-700">Publishing helps you:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Subject-matter expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Original contributions to your field</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Professional recognition and impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Portfolio strength for global opportunities</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Publishing?</h3>
              <p className="text-lg mb-6">Join our Research Publication Academy and transform your career with published research papers</p>
              <motion.button
                onClick={() => handleCTAClick(
                  'Research Publication Academy - Get Started',
                  'Start your journey to becoming a published researcher with our proven 10-week system and expert mentorship.',
                  'Get Started Now'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* What You Will Get Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How does The Research Publication Academy work?
            </h2>
            <p className="text-xl text-slate-600">A complete system to transform you from zero publications to published researcher</p>
          </motion.div>

          {/* Timeline Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 max-w-5xl w-full">
              <img
                src="/10-Week Research Paper Timeline - visual selection.png"
                alt="10-Week Research Paper Timeline"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your 10-Week Journey?</h3>
              <p className="text-lg mb-6">Follow our proven timeline to transform from zero publications to published researcher</p>
              <motion.button
                onClick={() => handleCTAClick(
                  'Research Publication Academy - Early Access',
                  'Get early access to our Research Publication Academy and start your 10-week journey to becoming a published researcher.',
                  'Get Early Access'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Video Testimonials Section */}
      <VideoTestimonialsSection />
      {/* Testimonials Section */}
      <TestimonialSection />
      
      {/* What is DBA Coach Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What is DBA Coach?
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              DBA Coach is the world's leading platform for doctorate success, specializing in DBA dissertation support and research publication guidance. We help working professionals complete their doctorate faster with expert mentorship and proven methodologies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Mentorship</h3>
                  <p className="text-slate-600">Get personalized guidance from experienced DBA graduates and research mentors who understand the challenges of working professionals pursuing their doctorate.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Success</h3>
                  <p className="text-slate-600">Join 500+ successful DBA graduates who completed their dissertations faster using our structured approach, with a 98% success rate and average completion time of 12-18 months.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Time-Efficient</h3>
                  <p className="text-slate-600">Our systematic approach helps busy professionals balance work, family, and doctoral studies. Complete your DBA dissertation without sacrificing your career or personal life.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>
      
      {/* Footer */}
      <PremiumFooter />
      
      {/* Lead Capture Modal */}
      {isModalOpen && (
        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalTitle}
          description={modalDescription}
          buttonText={modalButtonText}
          showStartTimeField={true}
        />
      )}
    </div>
  );
};

export default ResearchPaperPublication;