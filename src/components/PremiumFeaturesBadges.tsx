import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Zap } from 'lucide-react';

const PremiumFeaturesBadges: React.FC = () => {
  const features = [
    {
      icon: Zap,
      text: 'Zero research skill needed',
      color: 'bg-blue-600',
    },
    {
      icon: Globe,
      text: 'Works with every domain',
      color: 'bg-blue-600',
    },
    {
      icon: Users,
      text: 'Get Dr. fast with ease',
      color: 'bg-blue-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-8 sm:py-12 bg-gradient-to-r from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`flex items-center gap-3 ${feature.color} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span>{feature.text}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumFeaturesBadges;
