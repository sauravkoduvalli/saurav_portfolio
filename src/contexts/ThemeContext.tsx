import React, { useState, useEffect } from 'react';
import {ThemeContext} from './theme-context';

type Theme = 'light' | 'dark';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme preference is saved in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    // Check system preference if no saved theme
    if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return savedTheme || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}