import React from 'react';
import { useApp } from '../context/AppContext';

function ThemeToggler() {
  const { theme, setTheme } = useApp();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggler">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggler;