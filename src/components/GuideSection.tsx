import { motion } from "framer-motion";
import guideBook from "../assets/guide-book.png"; 
import graduateImg from "../assets/graduate-bg.jpg";

interface GuideSectionProps {
  setModalState: (state: { isOpen: boolean; title: string; description: string; buttonText: string }) => void;
}

export default function GuideSection({ setModalState }: GuideSectionProps) {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-16 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-indigo-100/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl" />
      
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, #4f46e5 1px, transparent 1px),
                           radial-gradient(circle at 70% 70%, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 relative z-10">

        {/* LEFT SIDE */}
     <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative rounded-3xl overflow-hidden shadow-lg min-h-[480px]"
>

          {/* Background Image */}
          <img
            src={graduateImg}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Graduate with DBA degree background"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* Text Content */}
          <div className="relative z-10 mt-28 p-8 sm:p-12">
            <h2 className="text-white font-bold text-3xl sm:text-4xl leading-tight">
              We have created Guide of  
              <br />5 Proven Strategies to Fast Track Your DBA Completion
            </h2>

            <p className="text-white mt-12 text-lg">
  Download DBA Exclusive Free Guide of  
  <strong> “5 Proven Strategies to Fast Track Your DBA Completion”</strong>
</p>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/95 backdrop-blur-xl rounded-3xl p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-2 border-white/70 flex flex-col items-center relative overflow-hidden">
          {/* Luxury background elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-300/40 to-purple-300/40 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-300/50 to-pink-300/50 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full filter blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-50/20" />
          
          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center w-full"
        >
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl filter blur-xl transform scale-110" />
              <motion.img
                src={guideBook}
                alt="Guide Book Cover - 5 Proven Strategies to Fast Track Your DBA Completion"
                className="w-56 sm:w-64 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] relative z-10 hover:scale-105 transition-transform duration-300"
                whileHover={{ rotateY: 5, rotateX: 5 }}
              />
            </motion.div>

            <motion.button
              onClick={() => setModalState({
                isOpen: true,
                title: 'Download Free DBA Guide',
                description: 'Get instant access to "5 Proven Strategies to Fast Track Your DBA Completion" - Enter your details below:',
                buttonText: 'Download PDF Guide'
              })}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 text-white px-12 py-5 rounded-2xl text-lg font-bold shadow-[0_20px_40px_-12px_rgba(251,146,60,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(251,146,60,0.6)] border-2 border-orange-400/40 backdrop-blur-sm transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Download PDF Guide</span>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
