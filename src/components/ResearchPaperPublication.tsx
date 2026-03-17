import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap, Calendar, Phone, Award, Target, Users, Clock, BookOpen, FileText, BarChart3, PresentationIcon, MessageSquare, TrendingUp, Shield, Lightbulb, Brain, Coffee, AlertTriangle, Timer, DollarSign, GraduationCap, MapPin, Menu, X, Play, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PremiumFooter from './PremiumFooter';
import TestimonialSection from './TestimonialSection';

interface ResearchPaperPublicationProps {
  onBack: () => void;
}

const ResearchPaperPublication: React.FC<ResearchPaperPublicationProps> = ({ onBack }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Fast Track',
      description: 'Complete your first publication in 12 weeks with our structured approach',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'High Impact',
      description: 'Target top-tier journals with systematic reviews and meta-analyses',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Mentorship',
      description: 'Learn from published researchers with 80+ publications',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Publication Guarantee',
      description: 'Follow our proven methodology for publication success',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative">
      {/* Premium Navigation - Same as DoctorateAchieverProgram */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer"
              onClick={onBack}
            >
              <img 
                src="/DBACoach (2).png" 
                alt="DBA Coach" 
                loading="eager"
                className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Left Side - Services Menu and Blog */}
            <div className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-0">
              <button
                onClick={() => {
                  onBack();
                  setTimeout(() => {
                    window.history.pushState({}, '', '/doctorate-achiever-program');
                    window.location.reload();
                  }, 100);
                }}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
              >
                Doctorate Achiever Program
              </button>
              
              <span className="text-slate-400">•</span>
              
              <button
                onClick={() => {
                  onBack();
                  setTimeout(() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
              >
                Research Paper Publication
              </button>
              
              <span className="text-slate-400">•</span>
           
              <button
                onClick={() => {
                  onBack();
                  setTimeout(() => {
                    window.history.pushState({}, '', '/blog');
                    window.location.reload();
                  }, 100);
                }}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
              >
                Blog
              </button>
            </div>

            {/* Right Side - Phone and CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:+918827272142"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 88272 72142</span>
              </a>
             
              <motion.a 
                href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book My Free Consultation
              </motion.a>
            </div>
            {/* Mobile Phone & Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <a 
                href="tel:+918827272142"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">+91 88272 72142</span>
              </a>
              
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-700" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4 space-y-4"
            >
              <button
                onClick={() => {
                  onBack();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    window.history.pushState({}, '', '/doctorate-achiever-program');
                    window.location.reload();
                  }, 100);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Doctorate Achiever Program
              </button>
              <button
                onClick={() => {
                  onBack();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    window.history.pushState({}, '', '/blog');
                    window.location.reload();
                  }, 100);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  onBack();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                Research Paper Publication
              </button>
              <a 
                href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center"
              >
                Book My Free Consultation
              </a>
            </motion.div>
          )}
        </div>
      </nav>
      {/* Hero Section - Matching DoctorateAchieverProgram */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg"
            >
              <Star className="w-4 h-4" />
              PUBLICATION SUCCESS PROGRAM
              <Star className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Research Publication{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Academy
              </span>
            </h1>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-xl border border-green-100">
              <p className="text-xl sm:text-2xl text-slate-700 mb-2 leading-relaxed font-semibold">
                10 Weeks to Transform Your CV: From Zero Research Experience to Presentations at International Conferences & Impactful Publications
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Skip years of research frustration, with our structured 10-weeks framework to publish systematic reviews from scratch, with autonomy, in a robust research community.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold">2133+ Conference Presentations</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">12 Week Program</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">1337+ Journal Publications</span>
                </div>
              </div>
            </div>
            
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScajnvJcz_E-iOkp3MKViEEA7GpAduMrF3Ff0LQWqwf3uKQuw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              >
                <Calendar className="w-5 h-5" />
              </motion.div>
              Join Priority Waitlist
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] animate-pulse"></div>
            </motion.a>
            
            <p className="text-sm text-slate-500 mt-4">
              ⏰ Exclusive Early-Bird Offer • 🔒 No obligation • ✅ Limited spots available
            </p>
          </motion.div>
        </div>
      </section>
      {/* Why should you do systematic reviews and meta-analyses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What is The Research Publication Academy?
            </h2>
            <p className="text-xl text-slate-600">The Research Publication Academy is the ultimate training program in systematic reviews and research publications. It will prepare you, regardless of background knowledge, from the ground up to develop an idea, create a project, apply the correct methodology, conduct all the statistical analysis, and write the scientific paper.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Autonomy.</h3>
                  <p className="text-slate-600">Systematic reviews and research publications allow you to establish credibility in the world. You don't need an ethics committee (institutional review board), a local professor, a statistician, or expensive software.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Impact.</h3>
                  <p className="text-slate-600">Many medical students and doctors, early in their career, spend time doing case reports and case series. However, these have very little academic impact. Systematic reviews and meta-analyses, in</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Speed.</h3>
                  <p className="text-slate-600">In your career, you may have experienced the frustration of having a project stalled for months, the delays in collecting endless data from medical records, or long experiences in the committee for months, the delays in collecting endless</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Sound Familiar? We Have the Solution!</h3>
              <p className="text-lg">Our Research Paper Publication is specifically designed to solve these exact problems</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* What You Will Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How does The Research Publication Academy work?
            </h2>
            <p className="text-xl text-slate-600">A complete system to transform you from zero publications to published researcher</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-full text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Program Structure */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Complete Program Structure</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-full text-white flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">First, an introductory module</h4>
                    <p className="text-slate-600">Here, you will learn the basics of research and evidence-based medicine. These are quick talks on the essentials of research initiation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-full text-white flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Next, you will have 10 hands-on modules</h4>
                    <p className="text-slate-600">to guide you step-by-step, in a sequential manner, on how to conduct a systematic review and research publications. This includes everything from how to intentionally generate good ideas for your projects, rigorous research methods, statistics, scientific writing, and finally, the process of submitting your article to a journal and conference</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center">
                  <p className="text-slate-600 mb-6">In each module, there is a theoretical and practical component. First, you will attend a lecture with a unique teaching approach – direct to the point, full of examples and with great didactics. Second, you will complete a real, literature-based exercise where you get to apply everything you learned in hands-on training. The exercises will equip you to independently conduct systematic reviews</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center bg-slate-100 rounded-lg p-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900">Lectures</h5>
                  </div>
                  <div className="text-center bg-slate-100 rounded-lg p-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900">Exercises</h5>
                  </div>
                  <div className="text-center bg-slate-100 rounded-lg p-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900">CPTs</h5>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-slate-600">Real results from our Research Paper Publication graduates</p>
          </motion.div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12"
            >
              <div className="text-6xl md:text-7xl font-bold text-blue-900 mb-4">2133</div>
              <p className="text-xl text-slate-700 font-medium">
                participations in abstracts<br />
                presented at conferences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12"
            >
              <div className="text-6xl md:text-7xl font-bold text-green-900 mb-4">1337</div>
              <p className="text-xl text-slate-700 font-medium">
                participations in manuscripts<br />
                published in indexed journals
              </p>
            </motion.div>
          </div>

          {/* Individual Success Stories */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Amanda Godoi</h3>
                  <p className="text-slate-600 mb-2 font-medium">4th year, Cardiff University, UK</p>
                  <p className="text-slate-700">
                    Successfully presented at Business Research Society, Chicago, USA. Multiple conference presentations and journal submissions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Igor Vinicius</h3>
                  <p className="text-slate-600 mb-2 font-medium">Final year doctoral student</p>
                  <p className="text-slate-700">
                    Won best poster award in business category in Hamburg, Germany, at the European Federation of Business and Management (EFBM).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Learn how to conduct impactful publications to advance your career.
            </h2>
            
            <p className="text-xl text-white/90 mb-4">
              Please fill out the fields below to secure your position in the waitlist. Our team will reach out to you to explain the program and complete your registration.
            </p>
            
            <p className="text-lg text-orange-200 mb-8 font-medium">
              Important: Pay close attention to your phone number and country code.
            </p>
            
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScajnvJcz_E-iOkp3MKViEEA7GpAduMrF3Ff0LQWqwf3uKQuw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:bg-slate-50"
            >
              <Calendar className="w-5 h-5" />
              APPLY FOR PRIORITY WAITLIST
            </motion.a>
            
            <p className="text-sm text-white/80 mt-4">
              ⏰ Exclusive Early-Bird Pricing • 🎁 Bonus Materials • 🔒 Limited Spots
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Footer */}
      <PremiumFooter />
    </div>
  );
};

export default ResearchPaperPublication;