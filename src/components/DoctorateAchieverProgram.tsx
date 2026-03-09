import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap, Calendar, Phone, Award, Target, Users, Clock, BookOpen, FileText, BarChart3, PresentationIcon, MessageSquare, TrendingUp, Shield, Lightbulb, Brain, Coffee, AlertTriangle, Timer, DollarSign, GraduationCap, MapPin, Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PremiumFooter from './PremiumFooter';
import TestimonialSection from './TestimonialSection';

interface DoctorateAchieverProgramProps {
  onBack: () => void;
}

const DoctorateAchieverProgram: React.FC<DoctorateAchieverProgramProps> = ({ onBack }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Save Time',
      description: 'Complete your dissertation faster with expert support at every stage',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Stay Focused',
      description: 'Clear roadmap and accountability to keep you on track',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Guidance',
      description: 'Work with experienced research mentors who understand your journey',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Assured',
      description: 'Professional standards that meet university requirements',
    },
  ];

  


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative">
     
    
      {/* Premium Navigation - Same as Home Page */}
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
                alt="DBA dissertation help success stories - DBA Coach" 
                loading="eager"
                className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Left Side - Services Menu and Blog */}
            <div className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-0">
              <button
                onClick={() => {
                  // Navigate to home and scroll to services
                  onBack();
                  setTimeout(() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
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
                Doctorate Achiever Program
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

      {/* Hero Section */}
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg"
            >
              <Star className="w-4 h-4" />
              MOST POPULAR PROGRAM
              <Star className="w-4 h-4" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Doctorate Achiever{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Program
              </span>
            </h1>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-xl border border-orange-100">
              <p className="text-xl sm:text-2xl text-slate-700 mb-2 leading-relaxed font-semibold">
                A structured, ethical, and process-driven support system
              </p>
              <p className="text-lg text-slate-600 mb-4">
                End-to-end academic hand-holding till Dr. Completion
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold">98% Success Rate</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">12-18 Months Average</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">500+ Graduates</span>
                </div>
              </div>
            </div>
            
            <motion.a
              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              >
                <Calendar className="w-5 h-5" />
              </motion.div>
              Book My Free Consultation
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] animate-pulse"></div>
            </motion.a>
            
            <p className="text-sm text-slate-500 mt-4">
              ⏰ Free 30-minute strategy session • 🔒 No obligation • ✅ Instant booking
            </p>
          </motion.div>
        </div>
      </section>

     
      
      {/* Pain Points Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Struggling With Your Doctorate? You're Not Alone
            </h2>
            <p className="text-xl text-slate-600">These are the most common challenges our students face before joining us</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Running Out of Time</h3>
                  <p className="text-slate-600">"I've been working on this for 3 years and still nowhere near completion"</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Overwhelmed & Confused</h3>
                  <p className="text-slate-600">"I don't know where to start or what my supervisor wants"</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Data Analysis Nightmare</h3>
                  <p className="text-slate-600">"Statistics and methodology are completely beyond me"</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Coffee className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Work-Life Balance</h3>
                  <p className="text-slate-600">"Juggling full-time work, family, and research is impossible"</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Quality Concerns</h3>
                  <p className="text-slate-600">"Will my work meet university standards and pass the defense?"</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Pressure</h3>
                  <p className="text-slate-600">"Every extra semester costs more money I don't have"</p>
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
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Sound Familiar? We Have the Solution!</h3>
              <p className="text-lg">Our Doctorate Achiever Program is specifically designed to solve these exact problems</p>
            </div>
          </motion.div>
        </div>
      </section>

     
           
    

      {/* What You Will Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-orange-100"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              What You Will Get
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border-2 border-pink-200">
                  <h3 className="text-xl font-bold text-pink-900 mb-4">End-to-End Research Support</h3>
                  <p className="text-pink-800 font-semibold mb-2">• Topic selection to final defense</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">Dedicated Success Team</h3>
                  <div className="space-y-2 text-purple-800">
                    <p className="font-semibold">• Project Manager + Research Writer + Statistician</p>
                    <p className="font-semibold">• Dissertation Specialist + Success Buddy</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Quality Assurance</h3>
                  <div className="space-y-2 text-blue-800">
                    <p className="font-semibold">• Plagiarism-free, university-compliant</p>
                    <p className="font-semibold">• Rigorously reviewed</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Confidentiality Assurance</h3>
                  <p className="text-green-800 font-semibold">• 100% Confidential</p>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl border-2 border-pink-200">
                <h3 className="text-2xl font-bold text-pink-900 mb-6">End-to-End Research Support</h3>
                <div className="space-y-3">
                  {[
                    'Research Title / Topic Finalization',
                    'Literature Review',
                    'Research Proposal',
                    'Research Design & Methodology',
                    'Statistical Data Analysis',
                    'Chapter-wise Review & Feedback',
                    'Editing & Proofreading',
                    'Plagiarism & Compliance',
                    'Mentor Comments Addressing',
                    'DBA Defense Preparation',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Topic/Title Finalization Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              RESEARCH TOPIC / TITLE FINALIZATION
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Hexagon-style cards */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <BookOpen className="w-10 h-10 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Research Title Mastery Course</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-pink-400 to-pink-500 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <Users className="w-10 h-10 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Set-Up a Call with Project Manager</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-orange-400 to-orange-500 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <Target className="w-10 h-10 flex-shrink-0" />
                  <h3 className="text-xl font-bold">PM Suggest 3-5 Impactful Research Titles with a Short Write-Up</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <FileText className="w-10 h-10 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Literature Review</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-10 h-10 flex-shrink-0" />
                  <h3 className="text-xl font-bold">All back & forth till Title finalized</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Proposal Development Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              RESEARCH PROPOSAL DEVELOPMENT
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border-2 border-pink-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">01</div>
                  <h3 className="text-lg font-bold text-pink-900">Literature Review with a Research Gap</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl border-2 border-yellow-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">02</div>
                  <h3 className="text-lg font-bold text-yellow-900">Research Questions / Objectives / Hypothesis</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">03</div>
                  <h3 className="text-lg font-bold text-orange-900">Methodology Design (Qualitative / Quantitative / Mixed)</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border-2 border-pink-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">04</div>
                  <h3 className="text-lg font-bold text-pink-900">A complete Research Proposal Delivery</h3>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">05</div>
                <h3 className="text-xl font-bold">All back & Forth till Final approval By Your Supervisor</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data Analysis Phase Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              DATA ANALYSIS PHASE
            </h2>
            
            <div className="relative">
              {/* Flow diagram style */}
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl relative"
                >
                  <div className="absolute -top-4 -left-4 bg-pink-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">01</div>
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <BarChart3 className="w-12 h-12 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Data Analysis Planner</h3>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-8 rounded-3xl shadow-xl relative"
                >
                  <div className="absolute -top-4 -left-4 bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">02</div>
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <FileText className="w-12 h-12 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Questionnaire / Interview Development</h3>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-400 to-orange-500 text-white p-8 rounded-3xl shadow-xl relative"
                >
                  <div className="absolute -top-4 -left-4 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">03</div>
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <TrendingUp className="w-12 h-12 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Strategy for Data Collection</h3>
                  </div>
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl relative"
                >
                  <div className="absolute -top-4 -left-4 bg-pink-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">04</div>
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <BarChart3 className="w-12 h-12 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Statistical Data Analysis</h3>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-pink-300 to-pink-400 text-white p-8 rounded-3xl shadow-xl relative"
                >
                  <div className="absolute -top-4 -left-4 bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">05</div>
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <CheckCircle2 className="w-12 h-12 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Finding Review</h3>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-pink-200 to-pink-300 text-slate-800 p-8 rounded-3xl shadow-xl relative"
                >
                  <div className="absolute -top-4 -left-4 bg-pink-400 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">06</div>
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <Award className="w-12 h-12 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Training by the Statistician</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dissertation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              DISSERTATION
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-[3rem] shadow-xl border-4 border-pink-300 w-full md:w-80"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <FileText className="w-16 h-16 text-pink-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-pink-900 md:text-center md:w-full">Dissertation as per University's Format</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-gradient-to-br from-pink-400 to-pink-500 p-8 rounded-[3rem] shadow-xl border-4 border-pink-600 w-full md:w-80"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <Zap className="w-16 h-16 text-white flex-shrink-0" />
                  <h3 className="text-xl font-bold text-white md:text-center md:w-full">Multiple Revision Support</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-pink-200 to-pink-300 p-8 rounded-[3rem] shadow-xl border-4 border-pink-400 w-full md:w-80"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <CheckCircle2 className="w-16 h-16 text-pink-700 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-pink-900 md:text-center md:w-full">Final Approval From Supervisor</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Defense Preparation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              DEFENSE PREPARATION
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <Users className="w-12 h-12 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Watch 'Defense Preparation' Course</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <PresentationIcon className="w-12 h-12 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Presentation Preparation</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <MessageSquare className="w-12 h-12 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Mock Up Sessions</h3>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-400 to-purple-500 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <Award className="w-12 h-12 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Fully Ready for Final Defense</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Involvement & Communication Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">
              Team Involvement & Communication
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Team Involvement */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-xl border-2 border-pink-200"
              >
                <h3 className="text-2xl font-bold text-pink-600 mb-6">Team Involvement</h3>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-2xl border-2 border-pink-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl">80%</div>
                        <h4 className="text-xl font-bold text-pink-900">Team</h4>
                      </div>
                      <ul className="space-y-2 text-pink-900">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>Dedicated PM supports you from start to finish</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>Dissertation, managing, coordinating, and overall progress</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border-2 border-pink-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-pink-400 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl">20%</div>
                        <h4 className="text-xl font-bold text-pink-900">You</h4>
                      </div>
                      <ul className="space-y-2 text-pink-900">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>Share your subject knowledge and ideas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>Review documents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>Share supervisor comments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Communication & Collaboration */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-200"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-6">Communication & Collaboration</h3>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-purple-900">A dedicated Google Workspace</h4>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border-2 border-pink-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-pink-900">Microsoft Teams Group for Communication</h4>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-purple-900">Access to LMS for all Research Courses</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Why Choose This Program?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life Section */}
    
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">Get answers to the most common concerns</p>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Is this ethical? Will my university approve?
              </h3>
              <p className="text-slate-600">Absolutely! We provide research guidance and support, similar to having a research mentor. You remain the author of your work, and we help you develop your ideas and improve your research skills.</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Timer className="w-5 h-5 text-blue-500" />
                How long does it typically take to complete?
              </h3>
              <p className="text-slate-600">Most students complete their doctorate in 12-18 months with our program, compared to the typical 3-5 years. The exact timeline depends on your university requirements and your availability.</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-green-500" />
                What's the investment for this program?
              </h3>
              <p className="text-slate-600">Investment varies based on your specific needs and timeline. Book a free consultation to get a personalized quote. Remember, completing faster saves you money on tuition and opportunity costs.</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-500" />
                What if I'm not satisfied with the work?
              </h3>
              <p className="text-slate-600">We offer unlimited revisions until you're completely satisfied. Our 98% success rate speaks for itself, but we stand behind our work with a satisfaction guarantee.</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                Do you work with international students?
              </h3>
              <p className="text-slate-600">Yes! We work with students from universities worldwide. Our team is experienced with different academic standards and requirements across various countries and institutions.</p>
            </motion.div>
          </div>
        </div>
      </section>

     
      {/* Urgency Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Don't Let Another Year Pass By
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-red-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">3-5 Years</div>
                  <p className="text-slate-600">Average time to complete without help</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12-18 Months</div>
                  <p>With our Doctorate Achiever Program</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">$50,000+</div>
                  <p className="text-slate-600">Potential savings in tuition & opportunity cost</p>
                </div>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Every Month You Wait Costs You:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                  <span>More tuition fees and living expenses</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                  <span>Lost earning potential as Dr.</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                  <span>Increased stress and family pressure</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                  <span>Risk of never finishing at all</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Become Dr. [Your Name]?
              </h2>
              <p className="text-xl text-white/90 mb-4">
                Join 500+ successful graduates who transformed their lives with our program
              </p>
              <p className="text-lg text-white/80 mb-8">
                Book a free consultation to discuss your goals and see how we can help you finish faster
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">What You Get in Your Free Consultation:</h3>
                <div className="grid md:grid-cols-2 gap-3 text-left">
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Personalized timeline assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Custom strategy for your research</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Clear pricing and timeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>No pressure, just honest advice</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Book My FREE Consultation Now
                </motion.a>
                
                <motion.a
                  href="tel:+918827272142"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 88272 72142
                </motion.a>
              </div>
              
              <div className="mt-8 text-white/80 text-sm">
                <p>⏰ Limited spots available each month • 🔒 100% confidential • ✅ No obligation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Premium Footer - Same as Home Page */}
      <PremiumFooter />
    </div>
  );
};

export default DoctorateAchieverProgram;
