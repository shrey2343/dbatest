import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface RefundPolicyProps {
  onBack: () => void;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({ onBack }) => {
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
              alt="DBA dissertation help success stories - DBA Coach" 
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
              <RefreshCw className="w-10 h-10 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>
            </div>

            <p className="text-gray-600 mb-8">Last Updated: December 2, 2025</p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-green-900 mb-2">98% Success Rate Money-Back Guarantee</h3>
                <p className="text-green-800">
                  We're confident in our proven track record. If you follow our guidance and don't achieve your DBA goals, we'll refund your investment. Terms and conditions apply.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Refund Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At DBA Coach (Research Mentor Clinic), we are committed to your success. Our refund policy is designed to be fair and transparent while protecting the interests of both our clients and our business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Free Consultation</h2>
                <p className="text-gray-700 leading-relaxed">
                  All new clients receive a free consultation to discuss their needs and our services. This allows you to make an informed decision before committing to any paid services. No refund is applicable as no payment is required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Refunds may be requested under the following circumstances:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><strong>Service Not Delivered:</strong> If we fail to provide the agreed-upon services within the specified timeframe</li>
                  <li><strong>Duplicate Payment:</strong> If you were charged twice for the same service</li>
                  <li><strong>Technical Issues:</strong> If technical problems prevent you from accessing paid content or services</li>
                  <li><strong>Early Cancellation:</strong> Within 7 days of purchase, before substantial service delivery has begun</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Refundable Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Consultation sessions that have been completed</li>
                  <li>Digital downloads and templates that have been accessed</li>
                  <li>Services where significant work has been completed (beyond 30% of project scope)</li>
                  <li>Custom research services after initial deliverables have been provided</li>
                  <li>Subscription services after the first month</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Process</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To request a refund:
                </p>
                <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                  <li>Contact us at <strong>hello.dbacoach@gmail.com</strong> within the applicable refund period</li>
                  <li>Provide your order/booking details and reason for refund request</li>
                  <li>Our team will review your request within 3-5 business days</li>
                  <li>If approved, refunds will be processed within 7-10 business days</li>
                  <li>Refunds will be issued to the original payment method</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Program-Specific Refund Terms</h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">1:1 Doctorate Coaching</h3>
                    <p className="text-gray-700">Refunds available if cancelled before the second session. Prorated refunds may be considered for exceptional circumstances.</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">DBA Achiever Program</h3>
                    <p className="text-gray-700">Full refund within 14 days of enrollment if no services have been utilized. Partial refunds based on completed milestones thereafter.</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Time Saver Services</h3>
                    <p className="text-gray-700">Refunds available before work begins. Once research or analysis has started, charges will apply based on work completed.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Satisfaction Guarantee</h2>
                <p className="text-gray-700 leading-relaxed">
                  We stand behind the quality of our services. If you're not satisfied with a completed service, we will work with you to address your concerns. This may include revisions, additional consultations, or other remedies before considering a refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have concerns about our services or refund decisions, we encourage you to contact our support team. We are committed to resolving disputes amicably and fairly. All disputes will be handled in accordance with Indian law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact for Refund Requests</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> hello.dbacoach@gmail.com</p>
                  <p className="text-gray-700 mb-2"><strong>Subject Line:</strong> "Refund Request - [Your Name/Order ID]"</p>
                  <p className="text-gray-700"><strong>Address:</strong> 204, 2nd Floor, Atulya IT Park, Khandwa Road, Indore</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify this refund policy at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services after changes constitutes acceptance of the new policy.
                </p>
              </section>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
};

export default RefundPolicy;
