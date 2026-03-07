import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ServiceTier {
  name: string;
  description: string;
  icon: React.ReactNode;
  highlight: boolean;
  features: string[];
  color: string;
  bgColor: string;
  badgeText?: string;
  ctaText?: string;
  ctaLink?: string;
}

const ServicesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services: ServiceTier[] = [
    {
      name: '1:1 Doctorate Coaching',
      description: 'Perfect for professionals who have time to work on their DBA Dissertation and want expert guidance at every step.',
      icon: <Star className="w-8 h-8" />,
      highlight: false,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      features: [
        '1:1 private strategy and review calls',
        'Step-by-step research guidance',
        'Chapter-wise direction and clarity',
        'Mentor feedback whenever you get stuck',
        'Accountability to stay consistent',
        'Support tailored to your topic and university requirements',
      ],
    },
    {
      name: 'Doctorate Achiever Program',
      description: 'Best for busy scholars who are running out of time and need complete start-to-finish support.',
      icon: <Zap className="w-8 h-8" />,
      highlight: true,
      badgeText: 'MOST POPULAR',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      ctaText: '📚 Learn More',
      ctaLink: '/doctorate-achiever-program',
      features: [
        'Topic selection and proposal development',
        'Literature review & methodology',
        'Quantitative/qualitative data analysis',
        'Dissertation writing support',
        'Editing, proofreading & formatting',
        'Plagiarism reduction',
        'Addressing mentor comments',
        'Defense preparation + mock defense',
        'Dedicated research mentor',
      ],
    },
    {
      name: 'Time Saver Services',
      description: 'Ideal for those who\'ve written most chapters and need fast, polished, professional academic finishing.',
      icon: <Zap className="w-8 h-8" />,
      highlight: false,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      features: [
        'Editing & proofreading',
        'Formatting as per university standards',
        'Data Collection',
        'Quantitative Data Analysis',
        'Qualitative Data Analysis',
        'AI-powered MVP of your research',
        'AI plagiarism removal service',
        'Defence presentation designing',
        'Defence Preparation with Mock-up',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="services-section" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-indigo-100/15 to-blue-100/15 rounded-full mix-blend-multiply filter blur-2xl" />
      
      {/* Geometric patterns */}
      <div className="absolute top-32 left-16 w-24 h-24 border border-blue-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 border border-purple-200/30 rounded-lg rotate-45 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-indigo-200/40 rounded-full animate-pulse delay-500"></div>

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
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8 leading-tight">
            You Don't Have to Do This{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Alone
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 mb-4">
              Here's How We Help You Finish Faster
            </p>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Choose the level of support that matches your schedule and goals.
            </p>
          </div>
        </div>

        {/* Premium Services Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -16, scale: 1.02 }}
              className={`relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border ${
                service.highlight
                  ? 'border-orange-200/50 bg-gradient-to-br from-orange-50/80 to-white/90 ring-2 ring-orange-200/30'
                  : 'border-white/50 bg-gradient-to-br from-white/80 to-slate-50/80'
              } h-full flex flex-col backdrop-blur-sm`}
            >
              {/* Premium Popular Badge */}
              {service.highlight && (
                <motion.div
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                >
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-2xl border border-white/20">
                    ⭐ {service.badgeText}
                  </span>
                </motion.div>
              )}

              {/* Premium Icon and Header */}
              <div className="mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-xl border border-white/20`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Premium Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className={`bg-gradient-to-br ${service.highlight ? 'from-orange-50/80 to-white/90' : 'from-white/80 to-slate-50/80'} px-4`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-grow mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">
                  {service.name.includes('1:1') && 'What You Get:'}
                  {service.name.includes('Achiever') && "What's Included:"}
                  {service.name.includes('Time') && 'Services Covered:'}
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${service.color} mt-0.5`} />
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Premium CTA Button */}
              <motion.a
                href={service.ctaLink || "https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"}
                target={service.ctaLink ? "_self" : "_blank"}
                rel={service.ctaLink ? undefined : "noopener noreferrer"}
                onClick={service.ctaLink ? (e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', service.ctaLink);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                } : undefined}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-center transition-all duration-500 shadow-xl hover:shadow-2xl border ${
                  service.highlight
                    ? `bg-gradient-to-r ${service.color} text-white border-white/20 hover:shadow-orange-500/25`
                    : `bg-gradient-to-r from-slate-100 to-white text-slate-900 hover:from-slate-200 hover:to-slate-100 border-slate-200/50`
                }`}
              >
                {service.ctaText || (service.highlight ? '🚀 Start Now' : '📞 Book a Free Consultation')}
              </motion.a>

              {/* Highlight indicator */}
              {service.highlight && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-600/5 to-transparent pointer-events-none" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white/60 to-slate-50/60 backdrop-blur-xl rounded-3xl border border-white/50 p-8 sm:p-12 shadow-2xl">
            <p className="text-xl sm:text-2xl text-slate-700 mb-8 font-medium">
              Not sure which option is right for you?
            </p>
            <motion.a
              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-10 sm:px-16 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 border border-white/20"
            >
              <span>💬 Book a Free Consultation to Discover Your Best Path</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
