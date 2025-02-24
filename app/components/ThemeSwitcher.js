'use client';

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Controlla il tema salvato
    const savedTheme = localStorage.getItem('theme');

    // Se esiste un tema salvato
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Se non c'è un tema salvato
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (prefersDarkMode) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);

    // Nuovo tema
    localStorage.setItem('theme', newTheme);

    // Applica o rimuovi la classe dark sull'elemento html
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full '
    >
      {theme === 'light' ? (
        <h1>Light</h1>
      ) : (
        <h1 className='dark:text-white'>Dark</h1>
      )}
    </button>
  );
}
