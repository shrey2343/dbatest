import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, CheckCircle2, Star, Calendar, AlertCircle } from 'lucide-react';
import StandardHeader from './StandardHeader';
import PremiumFooter from './PremiumFooter';
import guideBook from "../assets/guide-book.png";

interface GuideFormPageProps {
  onBack: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const GuideFormPage: React.FC<GuideFormPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default to India
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Country codes list
  const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  ];

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Full name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters long';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email address is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address';
    }
    return undefined;
  };

  const validatePhone = (_phone: string): string | undefined => {
    // No validation - allow any length
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.name = validateName(formData.name);
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special handling for country code change - clear phone number
    if (name === 'countryCode') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        phone: '' // Clear phone number when country code changes
      }));
      // Clear phone error if exists
      if (errors.phone) {
        setErrors(prev => ({
          ...prev,
          phone: undefined
        }));
      }
    }
    // Special handling for phone number - only allow digits
    else if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: digitsOnly
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing (except for country code change)
    if (name !== 'countryCode' && errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate field on blur
    let error: string | undefined;
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
    }

    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true
    });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      
      // Trigger PDF download
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/RMCEbook.pdf';
        link.download = 'DBA-Coach-5-Proven-Strategies.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success and download PDF
      setIsSubmitted(true);
      
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/RMCEbook.pdf';
        link.download = 'DBA-Coach-5-Proven-Strategies.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <StandardHeader
          onNavigateHome={() => {
            onBack();
          }}
          onNavigateToDoctorateProgram={() => {
            window.history.pushState({}, '', '/doctorate-achiever-program');
            window.location.reload();
          }}
          onNavigateToResearchPublication={() => {
            window.history.pushState({}, '', '/research-paper-publication');
            window.location.reload();
          }}
          onNavigateToBlog={() => {
            window.history.pushState({}, '', '/blog');
            window.location.reload();
          }}
        />

        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-green-200"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Success! Your Guide is Downloading
              </h1>
              
              <p className="text-lg text-slate-600 mb-6">
                Thank you for your interest! Your free guide "5 Proven Strategies to Fast Track Your DBA Completion" should start downloading automatically. You should also receive a confirmation email shortly with additional resources.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">What's Next?</h3>
                <ul className="text-blue-800 space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Check your email for additional resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Review the 5 proven strategies in your guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Book a free consultation to discuss your specific needs</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={onBack}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Home
                </motion.button>
                
                <motion.a
                  href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
        
        <PremiumFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <StandardHeader
        onNavigateHome={() => {
          onBack();
        }}
        onNavigateToDoctorateProgram={() => {
          window.history.pushState({}, '', '/doctorate-achiever-program');
          window.location.reload();
        }}
        onNavigateToResearchPublication={() => {
          window.history.pushState({}, '', '/research-paper-publication');
          window.location.reload();
        }}
        onNavigateToBlog={() => {
          window.history.pushState({}, '', '/blog');
          window.location.reload();
        }}
      />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4" />
              FREE EXCLUSIVE GUIDE
              <Star className="w-4 h-4" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Download Your Free DBA Guide
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get instant access to "5 Proven Strategies to Fast Track Your DBA Completion" - Enter your details below:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Guide Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <img
                  src={guideBook}
                  alt="Guide Book Cover - 5 Proven Strategies to Fast Track Your DBA Completion"
                  className="w-64 mx-auto lg:mx-0 mb-6 drop-shadow-lg"
                />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  What You'll Learn:
                </h3>
                
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>How to choose the right research topic that ensures quick approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Time-saving methodologies that work for busy professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Proven frameworks to structure your dissertation efficiently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Expert tips to avoid common pitfalls that delay completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Strategies to balance work, family, and doctoral studies</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                        errors.name && touched.name
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && touched.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mt-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                        errors.email && touched.email
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && touched.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mt-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number <span className="text-slate-500">(Optional)</span>
                    </label>
                    <div className="flex gap-2">
                      {/* Country Code Dropdown */}
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="px-3 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white min-w-[120px]"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      
                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                          errors.phone && touched.phone
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mt-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.phone}</span>
                      </motion.div>
                    )}
                  </div>

                  

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        Download PDF Guide
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-slate-500 text-center">
                    By downloading this guide, you agree to receive emails from DBA Coach. 
                    We respect your privacy and you can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <PremiumFooter />
    </div>
  );
};

export default GuideFormPage;