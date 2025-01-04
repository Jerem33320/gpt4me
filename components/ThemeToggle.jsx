'use client';
import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  lofi: 'lofi',
  forest: 'forest',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.lofi);

  const toggleTheme = () => {
    const newTheme = theme === themes.lofi ? themes.forest : themes.lofi;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline'>
      {theme === 'lofi' ? (
        <BsMoonFill className='h-4 w-4' />
      ) : (
        <BsSunFill className='h-4 w-4' />
      )}
    </button>
  );
};
export default ThemeToggle;