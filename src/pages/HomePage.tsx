import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-gradient-to-br from-violet-50 via-sky-50 to-indigo-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(88,28,135,0.3),rgba(255,255,255,0))]"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-10 max-w-4xl w-full p-8 md:p-12 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="relative w-32 h-32 mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 blur-xl opacity-50"></div>
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center transition-all duration-300">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text"
        >
          Saurav K
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium tracking-wide"
        >
          Mobile App Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-lg"
        >
          <span className="px-4 py-1.5 rounded-full bg-white/20 dark:bg-slate-800/40 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500 dark:bg-violet-400"></span>
            Flutter
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/20 dark:bg-slate-800/40 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500 dark:bg-violet-400"></span>
            React Native
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgb(79 70 229 / 0.1), 0 8px 10px -6px rgb(79 70 229 / 0.1)' }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="px-8 py-4 md:py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-500 dark:to-indigo-500 text-white font-medium transition-all duration-300 text-lg md:text-base"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgb(79 70 229 / 0.1), 0 8px 10px -6px rgb(79 70 229 / 0.1)' }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="px-8 py-3.5 rounded-2xl bg-white/10 dark:bg-slate-800/40 backdrop-blur-md text-slate-700 dark:text-slate-200 font-medium border border-violet-100 dark:border-slate-700/50 transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
