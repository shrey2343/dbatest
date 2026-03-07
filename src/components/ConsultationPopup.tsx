import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Star } from 'lucide-react';

const ConsultationPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('consultationPopupSeen');
      if (!hasSeenPopup && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('consultationPopupSeen', 'true');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => setIsVisible(false);

  const handleBookNow = () => {
    window.open(
      'https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09',
      '_blank'
    );
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative max-w-5xl w-full md:w-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 transition shadow-md"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 max-w-sm md:max-w-none mx-auto">
              {/* LEFT CONTENT */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                    Speak with a Research Expert
                  </h2>

                  <p className="text-base md:text-2xl text-white mb-3 md:mb-4">
                    Schedule a{' '}
                    <span className="font-semibold text-orange-400">
                      free, no-obligation consultation
                    </span>
                  </p>

                  <p className="text-sm md:text-lg text-slate-300 mb-4 md:mb-8 max-w-xl">
                    Get personalised guidance from a senior academic advisor and
                    discover the best path forward for your doctorate or research goals.
                  </p>

                  <motion.button
                    onClick={handleBookNow}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm md:text-lg px-6 md:px-10 py-3 md:py-4 rounded-full shadow-xl transition flex items-center gap-2 md:gap-3 w-full md:w-auto justify-center"
                  >
                    <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                    Schedule Free Consultation
                  </motion.button>

                  {/* Trust */}
                  <div className="mt-4 md:mt-8 pt-4 md:pt-6 border-t border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 fill-green-500 text-green-500"
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold text-base md:text-lg">
                        4.9 / 5
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm">
                      Trusted by 200+ doctoral candidates worldwide
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hidden md:block relative bg-gradient-to-br from-emerald-400 to-green-500 min-h-[420px] md:min-h-0">
                <motion.img
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  src="/xzzx.jpeg"
                  alt="Senior Research Advisor"
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationPopup;
