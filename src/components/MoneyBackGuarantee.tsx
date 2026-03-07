import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const MoneyBackGuarantee: React.FC = () => {
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
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            <span className="text-blue-600">100% Money-Back</span> Guarantee
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Work with us for 10 days. If you don't see major progress on your DBA, get every penny back PLUS keep all materials.
          </motion.p>
        </motion.div>

        {/* Card Section */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Why We Promise This */}
          <div className="p-8 sm:p-12 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Why We Promise This</h3>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              Our system works. We've helped 100+ students complete their doctorate successfully. Your success is guaranteed, not hoped for.
            </p>
          </div>

          {/* Orange Banner */}
          <div className="bg-orange-600 text-white p-8 sm:p-10 text-center">
            <h4 className="text-2xl sm:text-3xl font-black mb-4">Zero Risk. All Reward.</h4>
            <p className="text-lg leading-relaxed">
              Either you make significant progress in 10 days, or you pay nothing. We're that confident in our system.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee;
