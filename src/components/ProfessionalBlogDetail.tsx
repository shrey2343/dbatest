import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Download, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { SocialSidebar } from './SocialSidebar';
import { MobileSocialFloat } from './MobileSocialFloat';

interface BlogDetailProps {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
    author?: string;
  };
  onBack: () => void;
}

const ProfessionalBlogDetail: React.FC<BlogDetailProps> = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Social Media Sidebar - Desktop */}
      <SocialSidebar />
      
      {/* Mobile Social Float */}
      <MobileSocialFloat />
      {/* Header Navigation */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blog</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-contain md:object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            )}
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {/* Lead Paragraph */}
          <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 border-l-4 border-blue-500 bg-blue-50/50 italic">
            Discover how AI tools improve research quality, speed up literature reviews, boost academic writing.
          </div>

          {/* CTA Box */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Need DBA Templates?</h3>
                <p className="text-gray-600 mb-4">Save 20+ hours with our ready-made templates</p>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  GET FREE TEMPLATES →
                </button>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#section1" className="hover:text-blue-600 transition-colors">How do AI tools improve the overall quality of academic research?</a></li>
              <li><a href="#section2" className="hover:text-blue-600 transition-colors">How can AI tools help beginners conduct better literature reviews?</a></li>
              <li><a href="#section3" className="hover:text-blue-600 transition-colors">How does AI enhance data analysis and research accuracy?</a></li>
              <li><a href="#section4" className="hover:text-blue-600 transition-colors">How can AI tools improve academic writing and referencing quality?</a></li>
              <li><a href="#section5" className="hover:text-blue-600 transition-colors">What are the ethical and academic integrity risks of using AI in research?</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-gray-800 leading-relaxed">
            <section id="section1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. How do AI tools improve the overall quality of academic research?</h2>
              <p className="mb-4">
                <strong>AI tools in research</strong> improve <strong>research quality</strong> by automating repetitive processes, reducing <strong>human error</strong>, and 
                strengthening <strong>evidence-based decision-making</strong>. Activities such as <strong>data preprocessing</strong>, <strong>pattern detection</strong>, 
                <strong>statistical modelling</strong>, and <strong>systematic screening</strong> become more accurate and scalable.
              </p>
              <p className="mb-4">
                This allows researchers to invest more effort into <strong>theoretical reasoning</strong>, <strong>conceptual innovation</strong>, and <strong>critical interpretation</strong>, 
                rather than mechanical processing.
              </p>
            </section>

            <section id="section2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How can AI tools help beginners conduct better literature reviews?</h2>
              <p className="mb-4">
                For beginners, one of the most valuable applications of <strong>AI in research</strong> is <strong>AI-powered literature discovery</strong>. These 
                tools support <strong>keyword expansion</strong>, <strong>citation chaining</strong>, <strong>semantic paper recommendations</strong>, and <strong>research gap 
                detection</strong>.
              </p>
              <p className="mb-4">
                Using <strong>AI for literature review automation</strong> helps new researchers avoid <strong>selection bias</strong>, capture <strong>high-impact 
                peer-reviewed studies</strong>, and construct <strong>systematic literature reviews</strong> faster and more comprehensively.
              </p>
            </section>

            <section id="section3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How does AI enhance data analysis and research accuracy?</h2>
              <p className="mb-4">
                <strong>AI tools for data analysis</strong> apply <strong>machine learning</strong>, <strong>natural language processing (NLP)</strong>, and <strong>predictive analytics</strong> 
                to detect complex patterns in structured and unstructured datasets. This improves <strong>research accuracy</strong>, reinforces 
                <strong>statistical validity</strong>, and enables <strong>reproducible findings</strong>.
              </p>
              <p className="mb-4">
                Advanced algorithms can identify <strong>outliers</strong>, <strong>correlations</strong>, and <strong>predictive relationships</strong> that might be 
                missed through traditional analysis methods.
              </p>
            </section>

            <section id="section4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How can AI tools improve academic writing and referencing quality?</h2>
              <p className="mb-4">
                Modern <strong>AI writing assistants</strong> help researchers improve <strong>clarity</strong>, <strong>coherence</strong>, and <strong>academic tone</strong>. 
                They can suggest <strong>vocabulary enhancements</strong>, <strong>sentence restructuring</strong>, and <strong>citation formatting</strong> 
                according to various academic styles.
              </p>
              <p className="mb-4">
                Additionally, AI-powered <strong>plagiarism detection</strong> and <strong>reference management</strong> tools ensure <strong>academic integrity</strong> 
                while streamlining the writing process.
              </p>
            </section>

            <section id="section5">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. What are the ethical and academic integrity risks of using AI in research?</h2>
              <p className="mb-4">
                While AI offers significant benefits, researchers must consider <strong>ethical implications</strong> including <strong>data privacy</strong>, 
                <strong>algorithmic bias</strong>, and <strong>transparency requirements</strong>. It's crucial to maintain <strong>human oversight</strong> 
                and ensure AI tools complement rather than replace critical thinking.
              </p>
              <p className="mb-4">
                Proper <strong>disclosure of AI usage</strong> in research methodology and maintaining <strong>academic honesty</strong> standards 
                are essential for maintaining research credibility.
              </p>
            </section>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unlocking the Power of AI in Research</h2>
            <p className="text-gray-700 mb-4">
              Every research organization has one mission: to make a difference. But when administrative overhead gets in the way of impact, 
              technology becomes a powerful ally.
            </p>
            <p className="text-gray-700 mb-6">
              AI transforms how researchers operate by empowering them to make informed decisions, improve transparency, and build lasting 
              community trust. From data management to publication, AI helps researchers scale their reach without scaling their workload.
            </p>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-900 font-semibold mb-2">Ready to redefine how your research operates?</p>
              <p className="text-gray-700 mb-4">Let's unlock your research potential with AI tools.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Get in touch with us today.
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Sidebar CTA */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 max-w-xs"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">FREE DBA Templates</h3>
            <p className="text-sm text-gray-600 mb-4">Get ready-made templates trusted by 1000+ professionals</p>
            <div className="text-xs text-gray-500 mb-4">📊 1,247 downloads this month</div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              DOWNLOAD NOW
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalBlogDetail;