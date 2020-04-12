import React, { Component } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { MdBrightnessHigh, MdBrightnessLow, MdBrightnessAuto } from 'react-icons/md';
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

  updateMode = (theme, toggleTheme) => {
    const { mode } = this.state;

    if (mode === 0) {
      localStorage.removeItem('theme');
    } else {
      toggleTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  renderToggle = () => {
    const { mode } = this.state;
    switch (mode) {
      case 0:
        return <MdBrightnessAuto />;
      case 1:
        return <MdBrightnessHigh />;
      case 2:
        return <MdBrightnessLow />;
      default:
        return <MdBrightnessAuto />;
    }
  };

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <button type="button" onClick={() => this.handleToggle(theme, toggleTheme)}>
            {this.renderToggle()}
          </button>
        )}
      </ThemeToggler>
    );
  }
}

export default ThemeToggle;
