import { motion } from 'framer-motion';

interface DotNavigationProps {
  totalSections: number;
  currentSection: number;
  onDotClick: (index: number) => void;
}

const DotNavigation = ({ totalSections, currentSection, onDotClick }: DotNavigationProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-2"
    >
      {Array.from({ length: totalSections }).map((_, index) => (
        <motion.button
          key={index}
          whileTap={{ scale: 0.9 }}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === index 
              ? 'bg-white scale-125' 
              : 'bg-white/50 hover:bg-white/70'
          }`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </motion.div>
  );
};

export default DotNavigation;
