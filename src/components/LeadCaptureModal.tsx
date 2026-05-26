import React, { useState } from 'react';
import { X, User, Mail, Phone, Loader2 } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText: string;
  onSuccess?: () => void; // Optional callback after successful submission
  showStartTimeField?: boolean; // New prop for Research Paper Publication
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  buttonText,
  onSuccess,
  showStartTimeField = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    countryCode: '+91', // Default to India
    startTime: 'immediately' // Default value
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special handling for country code change - clear mobile number
    if (name === 'countryCode') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        mobile: '' // Clear mobile number when country code changes
      }));
    }
    // Special handling for mobile number - only allow digits
    else if (name === 'mobile') {
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      console.log('Form submitted:', formData);
      
      // Call onSuccess callback if provided (for template download/preview)
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 1000);
      } else if (!showStartTimeField) {
        // Auto-download PDF (only for non-research publication pages)
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '/RMCEbook.pdf';
          link.download = 'DBA-Guide-5-Proven-Strategies.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 1000);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // Always show success
      setIsSubmitted(true);
      
      // Download PDF only for non-research publication pages
      if (!showStartTimeField) {
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '/RMCEbook.pdf';
          link.download = 'DBA-Guide-5-Proven-Strategies.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 1000);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', mobile: '', countryCode: '+91', startTime: 'immediately' });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {!isSubmitted ? (
            <>
              <p className="text-gray-600 mb-6">{description}</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072b1] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072b1] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <div className="flex gap-2">
                    {/* Country Code Dropdown */}
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072b1] focus:border-transparent bg-white min-w-[120px]"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+82">🇰🇷 +82</option>
                      <option value="+60">🇲🇾 +60</option>
                      <option value="+66">🇹🇭 +66</option>
                      <option value="+62">🇮🇩 +62</option>
                      <option value="+63">🇵🇭 +63</option>
                    </select>
                    
                    {/* Phone Number Input */}
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072b1] focus:border-transparent"
                        placeholder="Enter your 10-digit phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Conditional Start Time Field for Research Paper Publication */}
                {showStartTimeField && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When do you want to start? *
                    </label>
                    <select
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0072b1] focus:border-transparent bg-white"
                    >
                      <option value="immediately">Immediately</option>
                      <option value="within_1_month">Within 1 month</option>
                      <option value="within_2_4_months">Within 2-4 months</option>
                    </select>
                  </div>
                )}



                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#0072b1' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>{buttonText}</span>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
              <p className="text-gray-600 mb-6">
                {showStartTimeField 
                  ? "Your information has been submitted successfully. We'll contact you soon with next steps for your research publication journey!"
                  : "Your information has been submitted successfully. Your PDF download should start automatically. We'll contact you soon!"
                }
              </p>
              <button
                onClick={resetForm}
                className="text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                style={{ backgroundColor: '#0072b1' }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;