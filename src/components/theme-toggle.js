import React, { Component } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { MdBrightnessHigh, MdBrightnessLow, MdBrightnessAuto } from 'react-icons/md';
import '../scss/components/theme-toggle.scss';

class ThemeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
      theme: 'dark',
    };
  }

  componentDidMount() {
    this.detectSystemColorScheme();
  }

  handleToggle = (theme, toggleTheme) => {
    this.setState(
      prevState => ({
        mode: (prevState.mode + 1) % 3,
      }),
      this.updateMode(theme, toggleTheme)
    );
  };

  detectSystemColorScheme = () => {
    if (this.prefersColorScheme('dark')) {
      this.setState({
        theme: 'dark',
      });
    } else if (this.prefersColorScheme('light')) {
      this.setState({
        theme: 'light',
      });
    } else {
      console.log(
        'Error: System theme not supported by this browser. Requires prefers-color-scheme. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme'
      );
    }
  };

  prefersColorScheme = theme => {
    return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;
  };

  updateMode = (theme, toggleTheme) => {
    const { mode } = this.state;

    if (mode === 2) {
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
          <button
            className="theme-toggler"
            type="button"
            onClick={() => this.handleToggle(theme, toggleTheme)}
          >
            {this.renderToggle()}
            {this.state.mode}
          </button>
        )}
      </ThemeToggler>
    );
  }
}

export default ThemeToggle;
