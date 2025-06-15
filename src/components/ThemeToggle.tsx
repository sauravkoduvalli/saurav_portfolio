import { useTheme } from '../contexts/ThemeContext';
import { Switch } from '@headlessui/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative">
      <Switch
        checked={isDark}
        onChange={toggleTheme}
        className={`${
          isDark
            ? 'bg-gradient-to-r from-violet-600 to-sky-600 dark:from-violet-500 dark:to-sky-500'
            : 'bg-gradient-to-r from-violet-500 to-sky-500'
        } relative inline-flex h-[26px] w-[50px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 shadow-lg backdrop-blur-xl sm:h-[30px] sm:w-[56px]`}
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${
            isDark ? 'translate-x-[24px] sm:translate-x-[28px]' : 'translate-x-[3px]'
          } pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md sm:h-[22px] sm:w-[22px]`}
        />
        <span
          className={`absolute ${
            isDark ? 'left-[6px]' : 'right-[6px]'
          } text-[12px] text-white pointer-events-none select-none sm:text-[14px]`}
          aria-hidden="true"
        >
          {isDark ? '🌙' : '☀️'}
        </span>
      </Switch>
    </div>
  );
}
