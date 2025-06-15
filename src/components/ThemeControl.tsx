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
