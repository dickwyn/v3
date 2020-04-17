import React, { Component } from 'react';
import { MdBrightnessAuto, MdBrightness4, MdBrightnessHigh } from 'react-icons/md';
import '../scss/components/dark-mode-toggle.scss';

const LOCAL_STORAGE_KEY = 'darkMode';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
  }

  componentDidMount() {
    const lsDarkMode = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (lsDarkMode === null) {
      this.autoDetectTheme();
    } else if (lsDarkMode === 'true') {
      this.handleToggle('', 1);
    } else if (lsDarkMode === 'false') {
      this.handleToggle('', 2);
    }
  }

  handleToggle = (_e, savedMode) => {
    this.setState(
      prevState => ({
        mode: savedMode || (prevState.mode + 1) % 3,
      }),
      this.updateMode
    );
  };

  updateMode = () => {
    const { mode } = this.state;

    switch (mode) {
      case 1:
        this.updateBodyClass('dark');
        localStorage.setItem(LOCAL_STORAGE_KEY, true);
        break;
      case 2:
        this.updateBodyClass('light');
        localStorage.setItem(LOCAL_STORAGE_KEY, false);
        break;
      default:
        this.autoDetectTheme(mode);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  autoDetectTheme = toggleMode => {
    const { mode } = this.state;

    if (mode === 0 || toggleMode === 2) {
      const date = new Date();
      const sunrise = '7:28';
      const sunset = '19:28';
      const currentTime = `${date.getHours()}:${date.getMinutes()}`;

      if ((currentTime < sunrise && currentTime > sunset) || this.prefersColorScheme('dark')) {
        this.updateBodyClass('dark');
      } else {
        this.updateBodyClass('light');
      }
    }
  };

  prefersColorScheme = theme => {
    return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;
  };

  updateBodyClass = theme => {
    document.body.className = theme;
  };

  renderToggle = () => {
    const { mode } = this.state;

    switch (mode) {
      case 0:
        return <MdBrightnessAuto />;
      case 1:
        return <MdBrightness4 />;
      case 2:
        return <MdBrightnessHigh />;
      default:
        return <MdBrightnessAuto />;
    }
  };

  render() {
    return (
      <button className="theme-toggler" type="button" onClick={this.handleToggle}>
        {this.renderToggle()}
      </button>
    );
  }
}

export default DarkModeToggle;
