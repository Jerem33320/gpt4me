'use client';
import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  corporate: 'corporate',
  forest: 'forest',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.forest);

  const toggleTheme = () => {
    const newTheme = theme === themes.forest ? themes.corporate : themes.forest;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
    if (typeof window !== 'undefined') window.localStorage.setItem('theme', newTheme);
  };
  
  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline fixed right-4 top-10'>
      {theme === 'forest' ? (
        <BsSunFill className='h-4 w-4' />
      ) : (
        <BsMoonFill className='h-4 w-4' />
      )}
    </button>
  );
};
export default ThemeToggle;