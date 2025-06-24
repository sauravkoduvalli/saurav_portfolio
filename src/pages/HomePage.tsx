import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-gradient-to-br from-[#e0e7ef] via-[#f5f6fa] to-[#cfd9df] dark:from-[#232526] dark:via-[#393E46] dark:to-[#232526] relative overflow-hidden">
      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
        className="relative z-10 text-center space-y-10 max-w-4xl w-full p-8 md:p-12 rounded-3xl bg-white/60 dark:bg-[#232526]/70 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-xl border border-[#e0e7ef]/60 dark:border-[#393E46]/60"
        style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15), 0 1.5px 6px 0 rgba(214,90,49,0.08)' }}
      >
        {/* Avatar with neumorphic effect */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="relative w-32 h-32 mx-auto mb-5 md:mb-7 lg:mb-9 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D65A31]/70 to-[#f5f6fa]/60 dark:from-[#D65A31]/40 dark:to-[#393E46]/60 blur-2xl opacity-60" />
          <div className="relative w-full h-full rounded-full bg-white/80 dark:bg-[#393E46]/80 shadow-[inset_8px_8px_24px_#e0e7ef,inset_-8px_-8px_24px_#cfd9df] dark:shadow-[inset_8px_8px_24px_#232526,inset_-8px_-8px_24px_#393E46] flex items-center justify-center border-2 border-[#D65A31]/30 dark:border-[#D65A31]/20">
            <span className="text-5xl md:text-6xl">👨‍💻</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#D65A31] mb-3 md:mb-5 lg:mb-7 drop-shadow-sm tracking-tight"
        >
          Saurav K
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-2xl text-[#222831] dark:text-[#EEEEEE] font-medium tracking-wide mb-3 md:mb-4"
        >
          Mobile App Developer
        </motion.p>

        {/* Skills badges with glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-base md:text-lg mb-4 md:mb-7 lg:mb-9"
        >
          <span className="px-5 py-2 rounded-full bg-white/50 dark:bg-[#393E46]/60 border border-[#cccccc]/40 dark:border-[#2d2d2d]/40 text-[#4a4a4a] dark:text-[#b0b0b0] flex items-center gap-2 shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D65A31]"></span>
            Flutter
          </span>
          <span className="px-5 py-2 rounded-full bg-white/50 dark:bg-[#393E46]/60 border border-[#cccccc]/40 dark:border-[#2d2d2d]/40 text-[#4a4a4a] dark:text-[#b0b0b0] flex items-center gap-2 shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D65A31]"></span>
            React Native
          </span>
        </motion.div>

        {/* CTA Buttons with glassmorphic/neumorphic style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-4 md:mt-7 lg:mt-9 mb-2 md:mb-7 lg:mb-9"
        >
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 rgba(214,90,49,0.18)' }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="px-8 py-4 md:py-3.5 rounded-2xl bg-gradient-to-tr from-[#D65A31] to-[#fbbf24] text-white font-semibold transition-all duration-300 text-sm md:text-base border border-[#D65A31]/70 shadow-lg hover:from-[#b94a25] hover:to-[#fbbf24] dark:hover:from-[#b94a25] dark:hover:to-[#fbbf24] backdrop-blur-md"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 rgba(34,40,49,0.12)' }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="px-8 py-3.5 rounded-2xl bg-white/60 dark:bg-[#393E46]/80 text-[#222831] dark:text-[#EEEEEE] font-semibold text-sm md:text-base border border-[#cccccc]/60 dark:border-[#2d2d2d]/60 shadow-lg transition-all duration-300 backdrop-blur-md"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
