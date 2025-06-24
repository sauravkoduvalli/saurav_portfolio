import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-[#EEEEEE] dark:bg-[#222831]">
      <div className="absolute inset-0 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-10 max-w-4xl w-full p-8 md:p-12 rounded-3xl bg-[#ffffff] dark:bg-[#393E46] shadow-2xl border border-[#cccccc] dark:border-[#2d2d2d]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="relative w-32 h-32 mx-auto mb-5 md:mb-7 lg:mb-9"
        >
          <div className="absolute inset-0 rounded-full bg-[#D65A31] blur-xl opacity-50"></div>
          <div className="relative w-full h-full rounded-full bg-[#D65A31] p-1">
            <div className="w-full h-full rounded-full bg-[#ffffff] dark:bg-[#393E46] flex items-center justify-center transition-all duration-300">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D65A31] mb-5 md:mb-7 lg:mb-9"
        >
          Saurav K
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-[#222831] dark:text-[#EEEEEE] font-medium tracking-wide"
        >
          Mobile App Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-base md:text-lg mb-5 md:mb-7 lg:mb-9"
        >
          <span className="px-4 py-1.5 rounded-full bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#4a4a4a] dark:text-[#b0b0b0] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D65A31]"></span>
            Flutter
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#4a4a4a] dark:text-[#b0b0b0] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D65A31]"></span>
            React Native
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-5 md:mt-7 lg:mt-9 mb-5 md:mb-7 lg:mb-9"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="px-8 py-4 md:py-3.5 rounded-2xl bg-[#D65A31] text-[#EEEEEE] font-medium transition-all duration-300 text-sm md:text-base border border-[#D65A31] hover:bg-[#b94a25] dark:hover:bg-[#b94a25]"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="px-8 py-3.5 rounded-2xl bg-[#EEEEEE] dark:bg-[#393E46] text-[#222831] dark:text-[#EEEEEE] font-medium text-sm md:text-base border border-[#cccccc] dark:border-[#2d2d2d] transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
