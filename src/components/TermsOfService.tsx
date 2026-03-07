import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            
            <img 
              src="/DBACoach (2).png" 
              alt="DBA Coach Logo - World's #1 Doctorate Success Platform" 
              className="h-20 object-contain"
            />
            
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-10 h-10 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
            </div>

            <p className="text-gray-600 mb-8">Last Updated: December 2, 2025</p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using DBA Coach services provided by Research Mentor Clinic (Deepiotics Pvt. Ltd.), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DBA Coach offers the following services:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><strong>1:1 Doctorate Coaching:</strong> Personalized mentoring for DBA candidates</li>
                  <li><strong>DBA Achiever Program:</strong> Comprehensive end-to-end DBA support</li>
                  <li><strong>Time Saver Services:</strong> Done-for-you research assistance</li>
                  <li><strong>Research Templates & Resources:</strong> Access to research tools and guides</li>
                  <li><strong>Consultation Services:</strong> Expert guidance on doctoral journey</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information when booking services</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful academic purposes</li>
                  <li>Respect intellectual property rights of all materials provided</li>
                  <li>Attend scheduled consultations or notify us in advance of cancellations</li>
                  <li>Not share or resell our proprietary materials without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment for services must be made in accordance with the pricing and payment terms communicated at the time of booking. We accept various payment methods including credit cards, debit cards, and online payment platforms.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
                  <li>Payment is due before service delivery unless otherwise agreed</li>
                  <li>Installment plans may be available for certain programs</li>
                  <li>Prices are subject to change with prior notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation and Rescheduling</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cancellations must be made at least 24 hours in advance for consultation sessions. Rescheduling requests should be submitted as early as possible. Repeated no-shows may result in service restrictions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, materials, templates, and resources provided by DBA Coach are protected by copyright and intellectual property laws. You may use these materials for your personal academic work but may not reproduce, distribute, or commercialize them without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Limitations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to provide excellent guidance and support:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>We do not guarantee specific academic outcomes or degree completion timelines</li>
                  <li>Final academic decisions rest with your institution and supervisors</li>
                  <li>We provide guidance and support, not academic writing services</li>
                  <li>You remain responsible for your original research and academic integrity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  DBA Coach and Research Mentor Clinic shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to terminate or suspend access to our services for violation of these terms, non-payment, or any behavior deemed inappropriate or harmful to our community.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-gray-700"><strong>Email:</strong> hello.dbacoach@gmail.com</p>
                  <p className="text-gray-700"><strong>Address:</strong> 204, 2nd Floor, Atulya IT Park, Khandwa Road, Indore</p>
                </div>
              </section>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;
