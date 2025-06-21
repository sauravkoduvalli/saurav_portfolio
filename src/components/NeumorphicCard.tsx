import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface NeumorphicCardProps {
  children: ReactNode;
  className?: string;
}

const NeumorphicCard = ({ children, className = "" }: NeumorphicCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative 
        bg-[#EEEEEE] dark:bg-[#222831]
        text-[#222831] dark:text-[#EEEEEE]
        backdrop-blur-lg 
        rounded-2xl 
        p-6
        dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
        shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]
        border border-[#cccccc] dark:border-[#2d2d2d]
        transition-all duration-300
        ${className}
      `}
      style={{
        boxShadow: document.documentElement.classList.contains("dark")
          ? `
            20px 20px 60px rgba(0, 0, 0, 0.5),
            -20px -20px 60px rgba(255, 255, 255, 0.05)
          `
          : `
            20px 20px 60px rgba(0, 0, 0, 0.1),
            -20px -20px 60px rgba(255, 255, 255, 0.5)
          `,
      }}
    >
      {children}
    </motion.div>
  );
};

export default NeumorphicCard;
