import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Calendar } from 'lucide-react';
import StandardHeader from './StandardHeader';
import PremiumFooter from './PremiumFooter';
import guideBook from "../assets/guide-book.png";
import ZohoCRMForm from './ZohoCRMForm';

interface GuideFormPageProps {
  onBack: () => void;
}

const GuideFormPage: React.FC<GuideFormPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <StandardHeader
        onNavigateHome={() => {
          onBack();
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
          window.history.pushState({}, '', '/blog');
          window.location.reload();
        }}
      />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4" />
              FREE EXCLUSIVE GUIDE
              <Star className="w-4 h-4" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Download Your Free DBA Guide
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get instant access to "5 Proven Strategies to Fast Track Your DBA Completion" - Enter your details below:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Guide Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <img
                  src={guideBook}
                  alt="Guide Book Cover - 5 Proven Strategies to Fast Track Your DBA Completion"
                  className="w-64 mx-auto lg:mx-0 mb-6 drop-shadow-lg"
                />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  What You'll Learn:
                </h3>
                
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>How to choose the right research topic that ensures quick approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Time-saving methodologies that work for busy professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Proven frameworks to structure your dissertation efficiently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Expert tips to avoid common pitfalls that delay completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Strategies to balance work, family, and doctoral studies</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Zoho Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <ZohoCRMForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <PremiumFooter />
    </div>
  );
};

export default GuideFormPage;
