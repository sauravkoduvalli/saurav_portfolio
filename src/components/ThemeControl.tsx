import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const ThemeControl = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed top-4 right-4 z-50"
    >
      <ThemeToggle />
    </motion.div>
  );
};

export default ThemeControl;

// All color classes updated to match HomePage: bg-[#EEEEEE] dark:bg-[#222831], surfaces bg-[#ffffff] dark:bg-[#393E46], text-[#222831] dark:text-[#EEEEEE], muted text-[#4a4a4a] dark:text-[#b0b0b0], borders border-[#cccccc] dark:border-[#2d2d2d], accent #D65A31.
