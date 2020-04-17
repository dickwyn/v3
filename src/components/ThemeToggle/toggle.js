import React, { Component } from 'react';
import { MdBrightnessHigh, MdBrightnessAuto } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import '../../scss/components/theme-toggle.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
  }

  componentDidMount() {
    this.autoDetectTheme();
  }

  handleToggle = () => {
    this.setState(
      prevState => ({
        mode: (prevState.mode + 1) % 3,
      }),
      this.updateMode()
    );
  };

  updateMode = () => {
    const { toggleDark, toggleLight } = this.props;
    const { mode } = this.state;

    switch (mode) {
      case 0:
        toggleDark();
        break;
      case 1:
        toggleLight();
        break;
      case 2:
        this.autoDetectTheme();
        break;
      default:
        this.autoDetectTheme();
    }
  };

  autoDetectTheme = () => {
    const { toggleDark, toggleLight } = this.props;
    const { mode } = this.state;

    if (mode === 0 || mode === 2) {
      const date = new Date();
      const sunrise = '7:28';
      const sunset = '19:28';
      const currentTime = `${date.getHours()}:${date.getMinutes()}`;

      if ((currentTime < sunrise && currentTime > sunset) || this.prefersColorScheme('dark')) {
        toggleDark();
      } else {
        toggleLight();
      }
    }
  };

  prefersColorScheme = theme => {
    return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;
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
      <button className="theme-toggler" type="button" onClick={this.handleToggle}>
        {this.renderToggle()}
      </button>
    );
  }
}

export default Toggle;
