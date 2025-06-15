import { motion } from "framer-motion";

interface DotNavigationProps {
  totalSections: number;
  currentSection: number;
  onDotClick: (index: number) => void;
}

const DotNavigation = ({
  totalSections,
  currentSection,
  onDotClick,
}: DotNavigationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-3"
    >
      {Array.from({ length: totalSections }).map((_, index) => (
        <motion.button
          key={index}
          whileTap={{ scale: 0.9 }}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === index
              ? "bg-gradient-to-r from-violet-600 to-sky-600 dark:from-violet-400 dark:to-sky-400 scale-125"
              : "bg-white/20 dark:bg-slate-700/50 hover:bg-violet-500/30 dark:hover:bg-violet-400/30 backdrop-blur-xl"
          }`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </motion.div>
  );
};

export default DotNavigation;
