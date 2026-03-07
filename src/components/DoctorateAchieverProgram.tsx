import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Star, Zap, Calendar, Phone, Award, Target, Users, Clock, BookOpen, FileText, BarChart3, PresentationIcon, MessageSquare, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface DoctorateAchieverProgramProps {
  onBack: () => void;
}

const DoctorateAchieverProgram: React.FC<DoctorateAchieverProgramProps> = ({ onBack }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            
            <img 
              src="/DBACoach (2).png" 
              alt="DBA Coach" 
              className="h-24 object-contain"
            />
            
            <div className="flex items-center gap-4">
              <a 
                href="tel:+918827272142"
                className="hidden sm:flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 88272 72142</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8">
              <Star className="w-4 h-4" />
              MOST POPULAR PROGRAM
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Doctorate Achiever{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Program
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-700 mb-4 leading-relaxed font-semibold">
              A structured, ethical, and process-driven support system
            </p>
            
            <p className="text-lg text-slate-600 mb-8">
              End-to-end academic hand-holding till Dr. Completion
            </p>
            
            <motion.a
              href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Book My Free Consultation
            </motion.a>
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

      {/* Who Is This For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Perfect For You If...
            </h2>
            
            <div className="space-y-4 text-left">
              {[
                'You\'re a busy professional juggling work, family, and your doctorate',
                'You\'re running out of time and need to finish faster',
                'You want expert support at every stage of your dissertation',
                'You need help with data analysis, methodology, or formatting',
                'You want to ensure your work meets university standards',
                'You\'re feeling stuck and need guidance to move forward',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
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
            className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Finish Your Doctorate?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a free consultation to discuss your goals and see how we can help
            </p>
            
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
                Book Free Consultation
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DoctorateAchieverProgram;
