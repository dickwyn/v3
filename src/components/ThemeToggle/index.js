import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './toggle';

const ThemeToggle = () => {
  const darkMode = useDarkMode(false, { classNameDark: 'dark', classNameLight: 'light' });

  return (
    <>
      <Toggle value={darkMode.value} toggleDark={darkMode.enable} toggleLight={darkMode.disable} />
    </>
  );
};

export default ThemeToggle;
