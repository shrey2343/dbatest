import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone } from 'lucide-react';

export const RandomStrategyCallPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('strategyCallPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Random delay between 5-15 seconds
    const randomDelay = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;

    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('strategyCallPopupShown', 'true');
      }
    }, randomDelay);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full mx-2 sm:mx-0 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-1.5 sm:p-2 shadow-md hover:shadow-lg transition-all touch-manipulation"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Hero Image with Text Overlay */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <img
                src="/xzzx.jpeg"
                alt="DBA Research Expert"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
              
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                  Stuck at ANY Stage?
                </h2>
                <p className="text-white text-sm sm:text-base drop-shadow-md">
                  Get Expert Help for Your Doctorate Journey
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 text-center leading-tight">
                  Get Personal Help from an RMC Research Expert
                </h3>
                
                <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs sm:text-sm font-bold">✓</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="font-semibold">Free 15-Minute Strategy Call</span> - No commitment required
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs sm:text-sm font-bold">✓</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="font-semibold">Personalized Roadmap</span> for your specific situation
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs sm:text-sm font-bold">✓</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="font-semibold">Expert Guidance</span> from experienced DBA mentors
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 active:from-orange-800 active:to-orange-900 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base touch-manipulation"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-center leading-tight">
                  Book FREE 15-Minute Strategy Call
                </span>
              </a>

              <p className="text-xs text-center text-slate-500 mt-3 sm:mt-4 leading-relaxed">
                🔒 100% Confidential • No Pressure • Just Clarity
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
