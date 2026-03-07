import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, BookOpen, TrendingUp, Globe, Star, Award, Users, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Stat {
  value: string;
  label: string;
  icon: React.ElementType;
}

const TrustProofSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats: Stat[] = [
    {
      value: '200+',
      label: 'DBAs Completed',
      icon: Trophy,
    },
    {
      value: '25+',
      label: 'Years Team Experience',
      icon: Zap,
    },
    {
      value: '120+',
      label: 'Published Papers',
      icon: BookOpen,
    },
    {
      value: '50%',
      label: 'Faster Completion',
      icon: TrendingUp,
    },
    {
      value: '1000+',
      label: 'Students in 20+ Countries',
      icon: Globe,
    },
    {
      value: '4.9/5',
      label: 'Stars from Graduates',
      icon: Star,
    },
    {
      value: '98%',
      label: 'Success Rate',
      icon: Award,
    },
    {
      value: '24/7',
      label: 'Support Available',
      icon: Clock,
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden text-white">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full mix-blend-screen filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full mix-blend-screen filter blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full mix-blend-screen filter blur-2xl" />
      
      {/* Geometric patterns */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-300/20 rounded-lg rotate-45 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
          </motion.div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Your Trusted Partner for{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              DBA Completion
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
            Our coaches are Ph.D./DBA graduates who know exactly what works.{' '}
            <span className="font-semibold text-cyan-300">Here's the proof our system delivers results:</span>
          </p>
        </div>

        {/* Premium Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className="text-center group relative"
              >
                {/* Premium Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 group-hover:border-cyan-300/40 transition-all duration-500"></div>
                <div className="relative p-6 sm:p-8">
                  {/* Premium Icon Container */}
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-300/30 flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-500 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  {/* Premium Value */}
                  <motion.div
                    className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>

                  {/* Premium Label */}
                  <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium Divider */}
        <div className="relative my-16 sm:my-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-300/30">
                <Star className="w-6 h-6 text-cyan-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Premium Bottom Message */}
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 sm:p-12">
            <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light mb-4">
              We don't just talk about results.{' '}
              <span className="font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                We deliver them.
              </span>
            </p>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
              Our proven system has helped professionals from{' '}
              <span className="font-bold text-cyan-300">20+ countries</span>{' '}
              achieve their DBA goals faster than they thought possible.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default TrustProofSection;
