import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Download, Users, ArrowRight, Calendar, Phone } from 'lucide-react';

// Sticky Sidebar CTA (Desktop Only)
export const StickyTemplateCTA: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > 300);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleClose = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="hidden xl:block fixed right-4 lg:right-8 top-32 w-64 lg:w-72 z-40"
        >
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-2xl border-2 border-orange-400 p-4 lg:p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 lg:top-3 lg:right-3 text-slate-400 hover:text-slate-600 hover:bg-white rounded-full p-1 transition-all duration-200 touch-manipulation"
              aria-label="Close"
            >
              <X className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>

            <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-3 lg:mb-4 mx-auto shadow-lg">
              <Phone className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            
            <h3 className="text-base lg:text-lg font-bold text-slate-900 text-center mb-2 leading-tight">
              Stuck at ANY stage of your Doctorate?
            </h3>
            
            <p className="text-xs lg:text-sm text-slate-700 text-center mb-4 lg:mb-5 font-medium">
              Get personal help from an RMC Research Expert.
            </p>
            
            <a
              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 active:from-orange-800 active:to-orange-900 text-white font-bold py-2.5 lg:py-3 px-3 lg:px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-xs lg:text-sm touch-manipulation"
            >
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="text-center leading-tight">Book a FREE 15-Minute Strategy Call</span>
            </a>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Inline CTA Banner
export const InlineCTA: React.FC<{ onNavigate: () => void; variant?: 'compact' | 'full' }> = ({ 
  onNavigate, 
  variant = 'full' 
}) => {
  if (variant === 'compact') {
    return (
      <div className="my-6 sm:my-8 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">Need DBA Templates?</h4>
              <p className="text-xs sm:text-sm text-slate-600">Save 20+ hours with our ready-made templates</p>
            </div>
          </div>
          <button
            onClick={onNavigate}
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all whitespace-nowrap flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center touch-manipulation"
          >
            GET FREE TEMPLATES
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 sm:my-12 bg-white rounded-xl sm:rounded-2xl shadow-xl border-2 border-red-500 p-6 sm:p-8 lg:p-10">
      <div className="text-center">
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full mb-4 sm:mb-6 mx-auto">
          <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
          Download FREE DBA Templates
        </h3>
        
        <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
          Get instant access to professionally designed templates for your DBA journey. 
          Trusted by thousands of doctoral students worldwide.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Research Proposal Templates</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Literature Review Guides</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Methodology Frameworks</span>
          </div>
        </div>
        
        <button
          onClick={onNavigate}
          className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center touch-manipulation"
        >
          <Download className="w-5 h-5 sm:w-6 sm:h-6" />
          DOWNLOAD FREE TEMPLATES
        </button>
        
        <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
          ✓ Instant download • ✓ No signup required • ✓ 100% Free
        </p>
      </div>
    </div>
  );
};

// Exit Intent Popup
export const ExitIntentPopup: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [showSecondChance, setShowSecondChance] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && window.innerWidth > 768) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <>
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-lg w-full p-6 sm:p-8 relative border-4 border-orange-400 mx-2 sm:mx-0 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => setShowSecondChance(true), 300);
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-600 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:shadow-lg transition-all touch-manipulation"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
                Before You Go...
              </h2>

              <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                Access our <span className="font-semibold text-slate-900">FREE professional DBA templates</span> and save 20+ hours of research work.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Instant Access</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">No Sign-Up</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">100% Free</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate();
                  setIsVisible(false);
                }}
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-base sm:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-3 flex items-center justify-center gap-2 sm:gap-3 touch-manipulation"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                Download Free Templates
              </button>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-2">Stuck at ANY stage of your Doctorate?</p>
                <p className="text-xs text-slate-600 mb-2 sm:mb-3">Get personal help from an RMC Research Expert.</p>
                <a
                  href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm touch-manipulation"
                >
                  📞 Book a FREE 15-Minute Strategy Call
                </a>
              </div>

              <button
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => setShowSecondChance(true), 300);
                }}
                className="text-xs sm:text-sm text-slate-400 hover:text-slate-600 underline transition-colors touch-manipulation"
              >
                Continue without downloading
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {showSecondChance && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowSecondChance(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full p-6 sm:p-8 relative mx-2 sm:mx-0 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSecondChance(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-600 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:shadow-lg transition-all touch-manipulation"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-4xl">⚠️</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Wait! One Last Thing...
              </h3>

              <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
                <span className="font-semibold text-red-600">Don't struggle alone.</span> Join 2,000+ doctoral students who get our weekly tips, templates, and guidance delivered to their inbox.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email) return;
                  setIsSubmitting(true);
                  try {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    alert('Thank you! Check your email for the templates.');
                    setShowSecondChance(false);
                  } catch (error) {
                    alert('Something went wrong. Please try again.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-3 sm:space-y-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none text-slate-900 placeholder-slate-400 text-sm sm:text-base"
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 active:from-orange-800 active:to-red-800 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base touch-manipulation"
                >
                  {isSubmitting ? 'Sending...' : '✉️ Send Me Free Resources'}
                </button>
              </form>

              <p className="text-xs text-slate-500 mt-3 sm:mt-4">
                ✓ Free forever • ✓ Unsubscribe anytime • ✓ No spam, ever
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

// Scroll-Triggered Bottom Banner (Mobile)
export const ScrollBanner: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-red-500 shadow-2xl p-3 sm:p-4"
        >
          <button
            onClick={() => {
              setIsDismissed(true);
              setIsVisible(false);
            }}
            className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-slate-400 hover:text-slate-600 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all touch-manipulation"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Get FREE DBA Templates</h4>
              <p className="text-xs text-slate-600">Trusted by 1000+ professionals</p>
            </div>
            <button
              onClick={onNavigate}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm whitespace-nowrap touch-manipulation transition-all"
            >
              DOWNLOAD
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// CTA Card for Blog List (Between Posts)
export const CTACard: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-red-50 to-amber-50 rounded-lg shadow-md border-2 border-orange-200 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-base sm:text-lg md:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">
            Need Help with Your DBA?
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-2 sm:mb-3 md:mb-4">
            Download our FREE templates and save 20+ hours of work. Used by 1000+ doctoral students.
          </p>
          <button
            onClick={onNavigate}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 sm:py-2.5 sm:px-6 md:py-3 md:px-8 rounded-lg text-xs sm:text-sm md:text-base transition-all inline-flex items-center gap-2"
          >
            DOWNLOAD FREE TEMPLATES
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
