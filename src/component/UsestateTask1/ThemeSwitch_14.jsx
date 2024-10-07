import React, { useState, useEffect } from 'react';

const ThemeSwitch_14 = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`pt-5 text-center bg-${theme === 'light' ? 'light' : 'dark'} text-${theme === 'light' ? 'dark' : 'light'}`} style={{height:"100vh"}}>
      <h2>Theme Switcher</h2>
      <button className="btn btn-primary mt-3" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeSwitch_14;
