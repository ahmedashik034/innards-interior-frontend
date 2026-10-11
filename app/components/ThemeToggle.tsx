'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-[#1A1917] border border-gray-300 dark:border-white/20 text-[#121110] dark:text-[#D4A373] hover:border-[#E07A5F] transition-all duration-300 shadow-2xl cursor-pointer flex items-center justify-center"
      title="Toggle Light / Dark Theme"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-800" />
      )}
    </button>
  );
}