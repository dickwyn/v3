import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import BrightnessAutoTwoToneIcon from '@material-ui/icons/BrightnessAutoTwoTone';
import Brightness2TwoToneIcon from '@material-ui/icons/Brightness2TwoTone';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import { DARK_MODE } from '../utils/constants';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
  }

  componentDidMount() {
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode !== null) {
      this.setState({
        mode: darkMode === 'true' ? 1 : 2,
      });
    }
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
        return <Brightness2TwoToneIcon />;
      case 2:
        return <WbSunnyTwoToneIcon />;
      default:
        return <BrightnessAutoTwoToneIcon />;
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
