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
              Research Paper{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Publication
              </span>
            </h1>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-xl border border-green-100">
              <p className="text-xl sm:text-2xl text-slate-700 mb-2 leading-relaxed font-semibold">
                12 Weeks to Transform Your Research Career
              </p>
              <p className="text-lg text-slate-600 mb-4">
                From Zero Publications to High-Impact Journal Success
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
      {/* Pain Points Section - Matching DoctorateAchieverProgram */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Struggling to Get Published? You're Not Alone
            </h2>
            <p className="text-xl text-slate-600">These are the most common challenges researchers face before joining us</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Timer className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No Publications</h3>
                  <p className="text-slate-600">"I've been researching for years but never published anything"</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Methodology Confusion</h3>
                  <p className="text-slate-600">"I don't understand systematic reviews or meta-analyses"</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <BarChart3 className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Statistical Analysis</h3>
                  <p className="text-slate-600">"Statistics and data analysis are completely overwhelming"</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Writing Struggles</h3>
                  <p className="text-slate-600">"I don't know how to write for academic journals"</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Rejection Fear</h3>
                  <p className="text-slate-600">"What if my paper gets rejected by journals?"</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Time Constraints</h3>
                  <p className="text-slate-600">"I'm too busy with work to focus on research publications"</p>
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
              What You Will Get in the Research Paper Publication
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
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Complete 12-Week Program Structure</h3>
            
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
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Introduction Module</h4>
                    <p className="text-slate-600">Learn the basics of research and evidence-based methodology. Quick talks on the essentials of research initiation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-full text-white flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">10 Practical Modules</h4>
                    <p className="text-slate-600">Step-by-step guidance on conducting systematic reviews and meta-analyses, including idea generation, methodology, statistics, and writing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-full text-white flex-shrink-0">
                    <PresentationIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Live Sessions</h4>
                    <p className="text-slate-600">Interactive lectures, practical exercises, and hands-on training with real examples and case studies.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full text-white flex-shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Statistical Training</h4>
                    <p className="text-slate-600">Master the statistical analysis required for systematic reviews and meta-analyses with practical software training.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-full text-white flex-shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Scientific Writing</h4>
                    <p className="text-slate-600">Learn how to write compelling manuscripts that get accepted by top-tier journals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-green-500 p-3 rounded-full text-white flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Submission Process</h4>
                    <p className="text-slate-600">Navigate the journal submission process, handle peer review, and maximize your publication success.</p>
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
              Ready to Transform Your Research Career?
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Join the waitlist for our Research Paper Publication and be the first to know when enrollment opens.
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
              Join Priority Waitlist
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