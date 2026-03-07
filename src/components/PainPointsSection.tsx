import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Clock, AlertTriangle, DollarSign, Frown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PainPointsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const painPoints = [
    {
      icon: Heart,
      text: 'Working 60+ hours AND doing research is exhausting',
      color: 'border-red-500',
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Brain,
      text: 'Your advisor says "add more theory" but you don\'t know how',
      color: 'border-orange-500',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Clock,
      text: 'You started 2 years ago and you\'re still stuck on Chapter 2',
      color: 'border-yellow-500',
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: AlertTriangle,
      text: 'Every paper you read creates 10 more questions',
      color: 'border-purple-500',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: DollarSign,
      text: 'You\'ve spent $20,000+ already — quitting feels like failure',
      color: 'border-red-600',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Frown,
      text: 'And the hardest part? You\'re doing all of this alone.',
      color: 'border-slate-500',
      iconColor: 'text-slate-500',
      bgColor: 'bg-slate-50',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.08,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-fade-in-up overflow-hidden">
      {/* Premium light background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-transparent to-purple-100/30" />
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Premium floating elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-100/15 to-blue-100/15 rounded-full mix-blend-multiply filter blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up delay-200">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Why Working Professionals Get <span className="text-red-600">Stuck</span> on Their DBA
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            You're successful at work. You've climbed the corporate ladder. But your DBA feels impossible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                className={`bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 ${point.color} hover:shadow-2xl hover:bg-white/90 transition-all duration-500 border border-white/50`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl ${point.bgColor} flex-shrink-0`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${point.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-relaxed">
                    {point.text}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default PainPointsSection;
