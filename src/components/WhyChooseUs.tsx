import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Trophy, Users, BookOpen, Clock, Brain, Lightbulb } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Expert Guidance',
      description: 'Personal 1-on-1 coaching from DBA graduates who understand your journey',
      color: 'from-blue-500 to-blue-600',
      delay: 0,
    },
    {
      icon: Zap,
      title: 'Fast Track System',
      description: 'Proven 4-step methodology used by 200+ professionals worldwide',
      color: 'from-cyan-500 to-cyan-600',
      delay: 100,
    },
    {
      icon: Trophy,
      title: '98% Success Rate',
      description: 'Highest completion rate in the industry with real results',
      color: 'from-orange-500 to-orange-600',
      delay: 200,
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Monthly group calls with 1000+ peers in 18+ countries',
      color: 'from-purple-500 to-purple-600',
      delay: 300,
    },
    {
      icon: BookOpen,
      title: 'Done-For-You Services',
      description: 'Formatting, citations, and technical support included',
      color: 'from-emerald-500 to-emerald-600',
      delay: 400,
    },
    {
      icon: Clock,
      title: 'Save 20+ Hours Weekly',
      description: 'Focus on research while we handle the tedious work',
      color: 'from-rose-500 to-rose-600',
      delay: 500,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Choose Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            We don't just teach research. We transform struggling professionals into successful doctoral graduates.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon Container */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative">
                  {feature.title}
                </h3>
                <p className="text-slate-600 relative">
                  {feature.description}
                </p>

                {/* Accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-300`} />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { value: '200+', label: 'Graduates' },
            { value: '1000+', label: 'Students' },
            { value: '98%', label: 'Success Rate' },
            { value: '18+', label: 'Countries' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
