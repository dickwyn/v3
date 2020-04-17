import React, { Component } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { MdBrightnessHigh, MdBrightnessAuto } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import '../scss/components/theme-toggle.scss';

class ThemeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
  }

  handleToggle = (theme, toggleTheme) => {
    this.setState(
      prevState => ({
        mode: (prevState.mode + 1) % 3,
      }),
      this.updateMode(theme, toggleTheme)
    );
  };

  prefersColorScheme = theme => {
    return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;
  };

  updateMode = toggleTheme => {
    const { mode } = this.state;

    switch (mode) {
      case 0:
        toggleTheme('dark');
        break;
      case 1:
        toggleTheme('light');
        break;
      case 2:
        localStorage.removeItem('theme');
        break;
      default:
        toggleTheme('dark');
    }
  };

  renderToggle = () => {
    const { mode } = this.state;
    switch (mode) {
      case 0:
        return <MdBrightnessAuto />;
      case 1:
        return <IoMdMoon />;
      case 2:
        return <MdBrightnessHigh />;
      default:
        return <MdBrightnessAuto />;
    }
  };

  render() {
    return (
      <ThemeToggler>
        {({ toggleTheme }) => (
          <button
            className="theme-toggler"
            type="button"
            onClick={() => this.handleToggle(toggleTheme)}
          >
            {this.renderToggle()}
          </button>
        )}
      </ThemeToggler>
    );
  }
}

export default ThemeToggle;
