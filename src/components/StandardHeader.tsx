import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface StandardHeaderProps {
  onNavigateHome: () => void;
  onNavigateToDoctorateProgram: () => void;
  onNavigateToResearchPublication: () => void;
  onNavigateToBlog: () => void;
}

const StandardHeader: React.FC<StandardHeaderProps> = ({
  onNavigateHome,
  onNavigateToDoctorateProgram,
  onNavigateToResearchPublication,
  onNavigateToBlog
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => {
              onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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
              onClick={onNavigateToDoctorateProgram}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
            >
              Dr. Achiever Program
            </button>
            
            <span className="text-slate-400">•</span>
            
            <button
              onClick={onNavigateToResearchPublication}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm whitespace-nowrap px-2"
            >
              Published Researcher Program
            </button>
            
            <span className="text-slate-400">•</span>
         
            <button
              onClick={onNavigateToBlog}
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
                onNavigateToBlog();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
            >
              Blog
            </button>
            <button
              onClick={() => {
                onNavigateToDoctorateProgram();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
            >
              Dr. Achiever Program
            </button>
            <button
              onClick={() => {
                onNavigateToResearchPublication();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
            >
              Published Researcher Program
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
  );
};

export default StandardHeader;