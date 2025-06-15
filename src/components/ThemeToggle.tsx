import { useTheme } from '../contexts/ThemeContext';
import { Switch } from '@headlessui/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      className={`${
        isDark
          ? 'bg-gradient-to-r from-violet-600 to-sky-600 dark:from-violet-500 dark:to-sky-500'
          : 'bg-gradient-to-r from-violet-500 to-sky-500'
      } relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 shadow-lg backdrop-blur-xl`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          isDark ? 'translate-x-8' : 'translate-x-1'
        } inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-md`}
      />
      <span className={`absolute ${isDark ? 'left-2' : 'right-2'} text-sm text-white`}>
        {isDark ? '🌙' : '☀️'}
      </span>
    </Switch>
  );
}
