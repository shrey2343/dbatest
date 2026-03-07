import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, UserCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProcessSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
   {
  number: '1',
  icon: Play,
  title: 'Book a Free Consultation',
  description: 'Schedule a free consultation to explore how DBA Coach can help you complete your doctorate without giving up your career — and get a personalized plan to reach Doctoral success.',
  color: 'from-blue-500 to-blue-600',
  bgColor: 'bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400',
},

   {
  number: '2',
  icon: UserCheck,
  title: 'Get a personalized strategy to complete your doctoral journey',
  description: 'Receive a customized doctoral roadmap that includes topic refinement, proposal guidance, chapter-wise planning, and a clear completion timeline built around your schedule.',
  color: 'from-orange-500 to-orange-600',
  bgColor: 'bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400',
},
{
  number: '3',
  icon: Users,
  title: 'Complete your Doctorate',
  description: 'Work closely with expert doctoral coaches who guide you step-by-step through proposal approval, literature review, methodology, analysis, and final submission until completion.',
  color: 'from-purple-500 to-purple-600',
  bgColor: 'bg-gradient-to-br from-purple-500 via-purple-400 to-pink-400',
},

  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 lg:mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">3-Step System</span> That Works
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Our proven method has helped 200+ professionals finish their DBA while keeping their career and family happy.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 w-8 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                {/* Card with Gradient Background */}
                <motion.div
                  whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                  className={`relative rounded-4xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 h-full flex flex-col overflow-hidden group ${step.bgColor}`}
                >
                  {/* Background decorative circles */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Step Number */}
                    <div className="text-6xl sm:text-7xl font-black text-white/30 mb-4 leading-none">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-base leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Check mark indicator */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-semibold">Proven Effective</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
    
      </div>
    </section>
  );
};

export default ProcessSection;
