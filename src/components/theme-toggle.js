import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FiSun, FiMoon } from 'react-icons/fi';
import '../scss/components/theme-toggle.scss';

const ThemeToggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <button
        type="button"
        onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'dark' ? (
          <FiMoon className="lightLogo" />
        ) : (
          <FiSun className="darkLogo" />
        )}
      </button>
    )}
  </ThemeToggler>
);

export default ThemeToggle;
