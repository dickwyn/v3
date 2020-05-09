import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import BrightnessLowIcon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import '../scss/components/dark-mode-toggle.scss';
import { DARK_MODE } from '../utils/constants';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
  }

  handleToggle = (_e, savedMode) => {
    this.setState(
      (prevState) => ({
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
        localStorage.setItem(DARK_MODE.LOCAL_STORAGE_KEY, true);
        break;
      case 2:
        this.updateBodyClass('light');
        localStorage.setItem(DARK_MODE.LOCAL_STORAGE_KEY, false);
        break;
      default:
        this.autoDetectTheme(mode);
        localStorage.removeItem(DARK_MODE.LOCAL_STORAGE_KEY);
    }
  };

  autoDetectTheme = (toggleMode) => {
    const { mode } = this.state;

    if (mode === 0 || toggleMode === 2) {
      if (this.prefersColorScheme('dark')) {
        this.updateBodyClass('dark');
      } else {
        this.updateBodyClass('light');
      }
    }
  };

  prefersColorScheme = (theme) => {
    return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;
  };

  updateBodyClass = (theme) => {
    document.body.className = theme;
  };

  renderToggle = () => {
    const { mode } = this.state;

    switch (mode) {
      case 1:
        return <BrightnessLowIcon />;
      case 2:
        return <BrightnessHighIcon />;
      default:
        return <BrightnessAutoIcon />;
    }
  };

  render() {
    return (
      <div className="dark-mode-toggle-container">
        <Tooltip title="Toggle site theme">
          <IconButton aria-label="Toggle automatic/light/dark mode" onClick={this.handleToggle}>
            {this.renderToggle()}
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default DarkModeToggle;
