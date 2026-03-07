import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What is a DBA degree and how is it different from a PhD?",
      answer: "A Doctor of Business Administration (DBA) is a professional doctorate focused on applied research and real-world business problems. Unlike a PhD which is research-focused for academia, a DBA is designed for working professionals who want to advance their careers while solving practical business challenges. DBA programs emphasize leadership, strategic thinking, and applied research that can be immediately implemented in your organization."
    },
    {
      id: 2,
      question: "How long does it typically take to complete a DBA program?",
      answer: "Most DBA programs take 3-5 years to complete, depending on whether you're studying part-time or full-time. The program typically includes coursework (1-2 years), comprehensive exams, and dissertation research (2-3 years). With our coaching support, many students complete their programs more efficiently by staying focused and avoiding common pitfalls that can extend timelines."
    },
    {
      id: 3,
      question: "Can I pursue a DBA while working full-time?",
      answer: "Absolutely! DBA programs are specifically designed for working professionals. Most programs offer flexible scheduling with evening, weekend, or online classes. The key is effective time management and having the right support system. Our coaching helps you balance work, family, and academic commitments while maintaining progress toward your degree."
    },
    {
      id: 4,
      question: "What kind of support do you provide for DBA students?",
      answer: "We offer comprehensive support including 1:1 mentoring, dissertation coaching, research methodology guidance, writing support, time management strategies, and emotional support throughout your journey. Our coaches are experienced DBA graduates who understand the challenges and can provide practical solutions to help you succeed."
    },
    {
      id: 5,
      question: "How do you help with dissertation research and writing?",
      answer: "We provide step-by-step guidance through every phase of your dissertation: topic selection, literature review, methodology design, data collection, analysis, and writing. Our coaches help you develop a clear research plan, stay organized, overcome writer's block, and maintain momentum. We also provide templates, checklists, and proven frameworks to streamline the process."
    },
    {
      id: 6,
      question: "What is the cost of your coaching services?",
      answer: "Our coaching packages are designed to be affordable and provide exceptional value. We offer various options from individual sessions to comprehensive program support. The investment in coaching typically saves you time and money by helping you complete your degree faster and avoid costly delays. Contact us for a free consultation to discuss the best package for your needs."
    },
    {
      id: 7,
      question: "Do you guarantee results?",
      answer: "While we cannot guarantee specific outcomes (as success depends on your commitment and effort), we do offer a satisfaction guarantee. If you're not completely satisfied with our coaching within the first 30 days, we'll provide a full refund. Our track record shows that students who actively engage with our coaching process see significant improvements in their progress and confidence."
    },
    {
      id: 8,
      question: "How is your coaching different from university support?",
      answer: "University support is often limited and generic. Our coaching is personalized, intensive, and focused specifically on DBA success. We provide ongoing mentorship, practical tools, emotional support, and accountability that universities typically don't offer. Our coaches are DBA graduates who've been through the exact challenges you're facing."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/15 to-indigo-200/15 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/15 to-purple-200/15 rounded-full mix-blend-multiply filter blur-3xl" />
      
      {/* Geometric patterns */}
      <div className="absolute top-20 left-20 w-24 h-24 border border-blue-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-indigo-200/30 rounded-lg rotate-45 animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Get answers to the most common questions about DBA programs and our coaching services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50/50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-blue-200 to-indigo-200 mb-4"></div>
                      <p className="text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-slate-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;