import { motion } from 'framer-motion';
import { useTheme } from '../contexts/useThemeContext';

// Responsive knob positions for mobile and desktop
const getKnobX = (isDark: boolean) => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) {
      return isDark ? 20 : 0; // mobile/tablet
    }
  }
  return isDark ? 24 : 0; // desktop (adjusted from 30 to 24)
};

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className="fixed z-50 top-2 right-2 sm:top-4 sm:right-4 flex items-center"
      aria-label="Toggle theme"
      role="switch"
      aria-checked={isDark}
      tabIndex={0}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleTheme()}
    >
      <button
        onClick={toggleTheme}
        className="relative flex items-center w-12 h-7 sm:w-16 sm:h-9 px-1 sm:px-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 shadow-xl bg-[#EEEEEE] dark:bg-[#222831] border border-[#cccccc] dark:border-[#2d2d2d] hover:shadow-[0_0_16px_2px_rgba(139,92,246,0.25)] group"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{ minWidth: 48 }}
      >
        {/* Moon icon on the left, only in dark mode, outside the knob */}
        {isDark && (
          <span className="z-10 text-base sm:text-lg select-none text-[#a78bfa] mr-auto">🌙</span>
        )}
        {/* Sun icon on the right, only in light mode, outside the knob */}
        {!isDark && (
          <span className="z-10 text-base sm:text-lg select-none text-[#fbbf24] ml-auto">☀️</span>
        )}
        {/* Toggle knob, slides to the icon */}
        <motion.span
          className="absolute top-1/2 left-1 sm:left-2 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#f9fafb] dark:bg-[#161622] shadow-md border border-[#dcdcdc] dark:border-[#2a2a3d] backdrop-blur-lg -translate-y-1/2"
          initial={false}
          animate={{ x: getKnobX(isDark) }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
        {/* Glow effect on hover */}
        <span className="absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[0_0_24px_4px_rgba(139,92,246,0.25)] transition-all duration-300" />
      </button>
    </div>
  );
}
