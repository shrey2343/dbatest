import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Atul Saggar',
      role: 'Global Sales & Strategy Expert',
      text: 'Dr. Bhawna is thoughtful, passionate, and open-minded. Her expertise in AI and business strategy is exemplary. She has helped me break through blocks that I was stuck on for months. The mentorship sessions are incredibly valuable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Noushija MA',
      role: 'DBA Candidate',
      text: 'I wholeheartedly endorse Dr. Bhawna to anyone embarking on a research journey. Her expertise and mentoring prowess are unparalleled. She has been instrumental in my academic pursuit, and I am confident that others will benefit greatly.',
      rating: 5,
    },
    {
      id: 3,
      name: 'David Ghogomu, DBA, MBA',
      role: 'DBA Graduate',
      text: 'Since having Dr. as my mentor, I have grown tremendously in investigative skills and organizing my schedule. She encourages resourcefulness and challenges her mentees to discover more about themselves. A true privilege to work with.',
      rating: 5,
    },
  ];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-blue-600/5"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/15 to-purple-200/15 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/15 to-cyan-200/15 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-100/10 to-pink-100/10 rounded-full mix-blend-multiply filter blur-2xl" />
      
      {/* Geometric patterns */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-indigo-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-blue-200/30 rounded-lg rotate-45 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-purple-200/40 rounded-full animate-pulse delay-500"></div>

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
           Stories That Turned Dreams{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              into Results
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl font-medium text-slate-700 mb-4">
              Don't just take our word for it.
            </p>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Here's what our graduates say about their transformation.
            </p>
          </div>
        </div>

        {/* Premium Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="relative bg-gradient-to-br from-white/90 to-indigo-50/80 backdrop-blur-xl rounded-3xl p-10 sm:p-16 shadow-2xl border border-white/50"
              >
                {/* Premium Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="absolute top-8 right-10 opacity-15"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <Quote className="w-12 h-12 text-indigo-600" />
                  </div>
                </motion.div>

                <div className="relative z-10">
                  {/* Premium Rating Stars */}
                  <motion.div
                    className="flex gap-2 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, duration: 0.5, type: "spring" }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm"></div>
                        <Star className="relative w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Premium Testimonial Text */}
                  <motion.blockquote
                    className="text-xl sm:text-3xl font-medium text-slate-900 mb-10 leading-relaxed italic relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <span className="text-indigo-600 text-4xl font-serif absolute -left-4 -top-2">“</span>
                    {testimonials[currentIndex].text}
                    <span className="text-indigo-600 text-4xl font-serif">”</span>
                  </motion.blockquote>

                  {/* Premium Author Info */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-blue-100/50 rounded-2xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60">
                      <h4 className="font-bold text-xl text-slate-900 mb-2">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-indigo-600 text-base font-semibold">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Premium Navigation */}
          <div className="flex items-center justify-between mt-12">
            <motion.button
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl bg-gradient-to-br from-white/90 to-indigo-50/80 backdrop-blur-sm border border-white/60 hover:border-indigo-300/50 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 hover:text-indigo-600 transition-colors" />
            </motion.button>

            <div className="flex gap-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.3, y: -2 }}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'w-10 h-4 bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg' 
                      : 'w-4 h-4 bg-slate-300 hover:bg-indigo-400 shadow-md'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl bg-gradient-to-br from-white/90 to-indigo-50/80 backdrop-blur-sm border border-white/60 hover:border-indigo-300/50 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 hover:text-indigo-600 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Stats */}
        {/* <motion.div
          className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-slate-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '200+', label: 'Success Stories' },
            { value: '20+', label: 'Countries' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default TestimonialSection;
