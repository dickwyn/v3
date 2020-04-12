import React, { Component } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FiSun, FiMoon } from 'react-icons/fi';
import '../scss/components/theme-toggle.scss';

class ThemeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
  }

  handleToggle = (theme, toggleTheme) => {
    const { mode } = this.state;
    this.setState(prevState => ({
      mode: (prevState.mode + 1) % 3,
    }));
    if (mode !== 2) {
      toggleTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <button type="button" onClick={() => this.handleToggle(theme, toggleTheme)}>
            {theme === 'light' ? <FiMoon className="lightLogo" /> : <FiSun className="darkLogo" />}
          </button>
        )}
      </ThemeToggler>
    );
  }
}

export default ThemeToggle;
