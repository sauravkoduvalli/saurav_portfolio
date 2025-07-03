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
        className={`relative flex items-center w-12 h-7 sm:w-16 sm:h-9 px-1 sm:px-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-xl
          ${isDark ? 'bg-[#18181b] border-[#393E46] focus:ring-white' : 'bg-white border-[#cccccc] focus:ring-black'}
          border group`}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{ minWidth: 48 }}
      >
        {/* Moon icon on the left, only in dark mode, outside the knob */}
        {isDark && (
          <span className="z-10 text-base sm:text-lg select-none text-white mr-auto">🌙</span>
        )}
        {/* Sun icon on the right, only in light mode, outside the knob */}
        {!isDark && (
          <span className="z-10 text-base sm:text-lg select-none text-black ml-auto">☀️</span>
        )}
        {/* Toggle knob, slides to the icon */}
        <motion.span
          className={`absolute top-1/2 left-1 sm:left-2 w-5 h-5 sm:w-7 sm:h-7 rounded-full shadow-md border backdrop-blur-lg -translate-y-1/2
            ${isDark ? 'bg-[#393E46] border-[#393E46]' : 'bg-[#EEEEEE] border-[#cccccc]'}
          `}
          initial={false}
          animate={{ x: getKnobX(isDark) }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
        {/* Glow effect on hover */}
        <span className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-300
          ${isDark ? 'group-hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.10)]' : 'group-hover:shadow-[0_0_24px_4px_rgba(0,0,0,0.10)]'}`}
        />
      </button>
    </div>
  );
}
