import { motion } from "framer-motion";
import { useTheme } from "../contexts/useThemeContext";
import { MoonStar, Sun } from "lucide-react";
// Removed unused getKnobX

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-colors duration-300 cursor-pointer`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{ minWidth: 56, minHeight: 56 }}
      role="switch"
      aria-checked={isDark}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleTheme()}
    >
      {/* Icon inside the button, centered */}
      <motion.span
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#232326] shadow-md border border-[#e5e5e5] dark:border-[#232326]"
        initial={false}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {isDark ? (
          <MoonStar fill="#3f3f47" stroke="#71717b" />
        ) : (
          <Sun fill="#f9fefd" stroke="#00bba7" />
        )}
      </motion.span>
      {/* Glow effect on hover */}
      <span
        className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-300
        group-hover:shadow-[0_0_24px_4px_rgba(0,207,200,0.10)]`}
      />
    </button>
  );
}
