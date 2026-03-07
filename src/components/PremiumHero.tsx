import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PremiumHero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Stagger animation for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Floating shapes background animation
  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const floatVariants2 = {
    animate: {
      y: [0, 15, 0],
      x: [0, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-12 md:pb-16">
      {/* Premium animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl"
        variants={floatVariants2}
        animate="animate"
      />
      {/* Premium geometric patterns */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-200/30 rounded-lg rotate-45 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-medium text-slate-600 italic mb-3 sm:mb-4"
            >
              Dear Future Dr.
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-4 sm:mb-5 lg:mb-6 leading-tight"
            >
              Every Delay in Your DBA Dissertation Costs You {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Time, Energy & Peace
              </span>
            </motion.h1>

            {/* Typed animation - CTA Line */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-4 sm:mb-5 lg:mb-6"
            >
              Let's End That Today !
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-700 mb-6 sm:mb-8 max-w-xl leading-relaxed font-medium"
            >
              Get expert guidance, structured support, and done-for-you services
              that have already helped{' '}
              <span className="font-bold text-blue-600">200+ senior professionals</span>{' '}
              complete their DBA Dissertation faster with clarity, confidence, and zero overwhelm.
            </motion.p>

            {/* CTA Button with hover animation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <motion.a
                href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
              >
                <span>Book My Free Consultation</span>
              </motion.a>
              
              <p className="text-xs sm:text-sm text-slate-600">
                No pressure. Just clarity on your path.
              </p>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            >
              {[
                { icon: Zap, text: 'Zero research skill needed' },
                { icon: Globe, text: 'Works with every domain' },
                { icon: Users, text: 'Get Dr. fast with ease' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex items-center gap-2 bg-blue-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap text-xs sm:text-sm">{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-0 border-t border-slate-200"
            >
              {/* <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-700">
                  98% Success Rate
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">
                  1000+ Graduates
                </span>
              </div> */}
            </motion.div>
          </motion.div>

          {/* Right Side - Image with premium styling */}
          <motion.div
            className="relative block pt-11 md:pt-0 lg:block -mt-16"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-50/30 to-cyan-100/50 rounded-[3rem] transform rotate-2 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-indigo-100/40 via-blue-50/20 to-purple-100/40 rounded-[3rem] transform -rotate-1 scale-110"></div>
            
            {/* Premium border effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-[3rem] p-1">
              <div className="w-full h-full bg-white/80 rounded-[2.8rem]"></div>
            </div>

            {/* Main Image Container - Fixed size to prevent animation */}
            <motion.div
              className="relative z-10 p-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-[2.5rem] p-4 shadow-2xl border border-white/60">
                <img
                  src="/EducationArt.png"
                  alt="DBA dissertation help success stories"
                  loading="eager"
                  className="w-full h-auto rounded-[2rem] shadow-xl object-cover"
                  style={{ minHeight: '400px' }}
                />

                {/* Premium Glass Morphism Success Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 z-20 bg-white/95 backdrop-blur-xl border border-emerald-200/50 rounded-2xl p-4 shadow-2xl"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-emerald-500 rounded-full opacity-20"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        ✓
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm leading-tight">98% Success</p>
                      <p className="text-xs text-slate-600 leading-tight">Rate</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Premium Floating Certificate Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-blue-200/50"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">1000+</p>
                    <p className="text-xs text-slate-600">Graduates</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    
    </section>
  );
};

export default PremiumHero;
