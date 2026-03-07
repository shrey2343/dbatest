import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface VideoTestimonial {
  id: number;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  description: string;
}

const VideoTestimonialsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/watch?v=4gK-fPib4Ys",
      thumbnailUrl: "https://img.youtube.com/vi/4gK-fPib4Ys/maxresdefault.jpg",
      title: "From Struggling Student to DBA Graduate",
      description: "Discover how expert coaching transformed an overwhelmed student into a confident DBA graduate, overcoming academic challenges and achieving success."
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/watch?v=Cmky87elh-8",
      thumbnailUrl: "https://img.youtube.com/vi/Cmky87elh-8/maxresdefault.jpg",
      title: "Breaking Through Dissertation Barriers",
      description: "Watch how personalized mentorship helped break through research roadblocks and complete a challenging dissertation with confidence and clarity."
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/watch?v=mtT5Jj30PZM",
      thumbnailUrl: "https://img.youtube.com/vi/mtT5Jj30PZM/maxresdefault.jpg",
      title: "Career Transformation Through DBA",
      description: "Learn how professional coaching accelerated career growth and opened new leadership opportunities through strategic DBA program completion."
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/watch?v=xDAb2bOLcho",
      thumbnailUrl: "https://img.youtube.com/vi/xDAb2bOLcho/maxresdefault.jpg",
      title: "From Overwhelmed to Confident",
      description: "See the transformation from feeling lost and overwhelmed to becoming a confident researcher with clear direction and expert guidance."
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/watch?v=UXmtUKVtpo0",
      thumbnailUrl: "https://img.youtube.com/vi/UXmtUKVtpo0/maxresdefault.jpg",
      title: "Achieving Work-Life-Study Balance",
      description: "Discover proven strategies for balancing demanding work schedules, family commitments, and DBA studies without sacrificing any area of life."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };



  return (
    <section className="relative py-6 sm:py-8 md:py-10 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 lg:mb-6">
            Real Success Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Real People</span>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our graduates say about their transformation.
          </p>
        </div>

        {/* Video Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <motion.a 
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-cyan-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Play className="w-6 h-6 ml-1 text-blue-600" fill="currentColor" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{video.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{video.description}</p>
              </div>

              {/* Accent border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>


    </section>
  );
};

export default VideoTestimonialsSection;
