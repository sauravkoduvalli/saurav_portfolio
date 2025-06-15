import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface NeumorphicCardProps {
  children: ReactNode;
  className?: string;
}

const NeumorphicCard = ({ children, className = '' }: NeumorphicCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative 
        bg-gradient-to-br from-gray-800/90 to-gray-900/90
        backdrop-blur-lg 
        rounded-2xl 
        p-6
        shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
        border border-gray-700/50
        ${className}
      `}
      style={{
        boxShadow: `
          20px 20px 60px rgba(0, 0, 0, 0.5),
          -20px -20px 60px rgba(255, 255, 255, 0.05)
        `,
      }}
    >
      {children}
    </motion.div>
  );
};

export default NeumorphicCard;
