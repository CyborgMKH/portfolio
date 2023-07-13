import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

interface ThemeSwitchProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, toggleTheme }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (localStorage.theme) {
      setTheme(localStorage.theme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 bg-gray-200 dark:bg-gray-800"
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100"
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )}
      </svg>
    </button>
  );
};

export default ThemeSwitch;
