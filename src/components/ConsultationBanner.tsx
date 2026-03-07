import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ConsultationBanner: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && audioRef.current && !audioPlayed) {
            const playAudio = () => {
              audioRef.current?.play().then(() => {
                setAudioPlayed(true);
                document.removeEventListener('click', playAudio);
              }).catch(() => {});
            };
            document.addEventListener('click', playAudio);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current && showBanner) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [showBanner, audioPlayed]);
  if (!showBanner) return null;

  return (
    <motion.section 
      ref={sectionRef} 
      className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-4 border-orange-500"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <audio ref={audioRef} preload="auto">
        <source src="/z.mp3" type="audio/mpeg" />
      </audio>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 sm:py-12 lg:py-16 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Need help?
            </motion.h2>
            
            <motion.div 
              className="mb-5 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-1.5 sm:mb-2">
                Grab a <span className="text-white font-semibold">free consultation</span>
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-1.5 sm:mb-2">
                with a friendly coach to
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
                see how we can help.
              </p>
            </motion.div>

            <motion.a
              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(249, 115, 22, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl transition-all duration-300 mb-5 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              BOOK NOW
            </motion.a>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Trustpilot Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-bold text-lg">4.9</span>
                <span className="text-gray-400 text-sm">Based on 934 reviews</span>
              </div>

              {/* Award Badge */}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="text-xs text-white">
                  <div className="font-semibold">Best Dissertation & Thesis</div>
                  <div className="text-gray-300">Coaching Specialists</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl" />
              
              <img 
                src="/Sara.png" 
                alt="Friendly DBA Coach" 
                className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
              

            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ConsultationBanner;
