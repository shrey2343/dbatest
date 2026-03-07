import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Zap, Award, Users } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CTASection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-8 sm:py-16 lg:py-24 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, 0, 50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -50, 0, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-6 leading-tight px-2"
          >
            Your DBA Breakthrough <span className="text-cyan-400">Starts Today</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-blue-100 mb-5 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Stop wasting time struggling alone. Start finishing your degree with expert guidance.
            The world needs your research and leadership.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6 mb-5 sm:mb-8 lg:mb-12 px-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Zap, text: 'Fast Track System' },
              { icon: Award, text: '98% Success Rate' },
              { icon: Users, text: 'Expert Coaches' },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 touch-manipulation"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mx-auto mb-2 sm:mb-3" />
                  <p className="text-white font-semibold text-xs sm:text-sm">{benefit.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            variants={itemVariants}
            className="mb-3 sm:mb-6 px-2"
          >
            <motion.a
              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)',
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 active:from-cyan-500 active:to-blue-500 text-slate-900 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto touch-manipulation"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="text-center">Book My Free Call</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            </motion.a>
          </motion.div>

          {/* Secondary Text */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-blue-200 px-2"
          >
            No pressure. No sales pitch. Just clarity on what you need to finish.
          </motion.p>
        </motion.div>

        {/* Guarantee Badge */}
        <motion.div
          className="mt-5 sm:mt-12 lg:mt-16 pt-4 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-semibold">100% Money-Back Guarantee</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
