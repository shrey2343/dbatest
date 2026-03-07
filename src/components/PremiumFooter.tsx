import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import dbaCoachLogo from '/image.png';

const PremiumFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { text: '1:1 Doctorate Coaching', url: '/#services-section' },
        { text: 'Doctorate Achiever Program', url: '/#services-section' },
        { text: 'Time Saver Services', url: '/#services-section' },
        { text: 'Research Courses', url: '/#services-section' },
      ],
    },
    {
      title: 'Explore',
      links: [
        { text: 'About', url: '/about' },
        { text: 'Research Courses', url: '/courses' },
        { text: 'ICETBP-24', url: '/icetbp-24' },
        { text: 'ICETBP-25', url: '/icetbp-25' },
        { text: 'Blog', url: '/blog' },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          text: 'hello.dbacoach@gmail.com',
          url: 'mailto:hello.dbacoach@gmail.com',
          icon: Mail,
        },
        {
          text: '204, 2nd Floor, Atulya IT Park, Indore, India',
          url: '#',
          icon: MapPin,
        },
      ],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-slate-900/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TOP SECTION ================= */}
        <div className="pt-10 sm:pt-16 lg:pt-24 pb-10 border-b border-slate-700">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Brand */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-center lg:text-left"
            >
              <a href="/" aria-label="DBA Coach Home">
                <img 
                  src={dbaCoachLogo} 
                  alt="DBA Coach" 
                  className="w-28 sm:w-36 lg:w-44 mx-auto lg:mx-0 object-contain"
                />
              </a>

              <p className="text-sm sm:text-base font-medium leading-snug text-slate-200">
                DBA Dissertation Coach — World's #1 Doctorate Success Platform
              </p>

              <a
                href="https://deepiotics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-amber-400 hover:text-amber-300 text-sm font-medium"
              >
                Powered by Deepiotics Pvt. Ltd.
              </a>

              {/* Social Media Links */}
              <div className="flex justify-center lg:justify-start gap-3 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61584373431880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://x.com/dba_coach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-black flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on X (Twitter)"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dba-coach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/dbacoach6?igsh=MWZhcmVrOGtlMHZ3bw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://in.pinterest.com/DBA_coach/_created/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Pinterest"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Link Sections - Reduced spacing */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-base lg:text-lg font-semibold border-b border-slate-700 pb-2 mb-2">
                  {section.title}
                </h4>

                <ul className="-space-y-3 md:space-y-3">
                  {section.links.map((link, i) => {
                    const Icon = 'icon' in link ? link.icon : null;
                    return (
                      <li key={i}>
                        <a
                          href={link.url}
                          className="flex items-start gap-3 text-slate-300 hover:text-white text-sm transition-colors"
                        >
                          {Icon && <Icon className="w-4 h-4 mt-0.5 shrink-0" />}
                          <span>{link.text}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-6 flex flex-col lg:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-400 text-sm text-center lg:text-left">
            © {currentYear} DBA Dissertation Coach. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm">
            {[
              { label: 'Privacy Policy', path: '/privacy-policy' },
              { label: 'Terms of Service', path: '/terms-of-service' },
              { label: 'Refund Policy', path: '/refund-policy' },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  window.history.pushState({}, '', item.path);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= SEO LINKS (SAFE) ================= */}
      <nav
        aria-label="Footer SEO Navigation"
        className="absolute left-[-9999px] w-px h-px overflow-hidden"
      >
        <a href="/">DBA Coach Home</a>
        <a href="/blog">DBA Research Blog</a>
        <a href="/templates">Free DBA Templates</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/refund-policy">Refund Policy</a>
      </nav>
    </footer>
  );
};

export default PremiumFooter;
