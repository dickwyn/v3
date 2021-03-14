import React from 'react';
import Terser from 'terser';
import preval from 'preval.macro';
import PackageJson from './package.json';
import { DARK_MODE } from './src/utils/constants.js';

const buildTimestamp = preval`module.exports = new Date().getTime();`;

function initialize() {
  const updateBodyClass = (theme) => {
    document.body.className = theme;
  };

  const prefersColorScheme = (theme) => {
    return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;
  };

  const autoDetectTheme = () => {
    const date = new Date();
    const sunrise = '7:28';
    const sunset = '19:28';
    const currentTime = `${date.getHours()}:${date.getMinutes()}`;

    if ((currentTime < sunrise && currentTime > sunset) || prefersColorScheme('dark')) {
      updateBodyClass('dark');
    } else {
      updateBodyClass('light');
    }
  };

  const nodeEnv = 'unsetEnv';

  if (nodeEnv === 'production') {
    console.log(
      `%cDick Wyn Yong's Portfolio vAPP_VERSION
              
Looking for something?

👨‍💻 https://www.github.com/dickwyn
📄 https://dickwyn.xyz/resume
🐛 https://dickwyn.xyz/debug

built: unsetTimestamp`,
      'font-family:monospace;'
    );
  }

  const lsDarkMode = localStorage.getItem('DARK_MODE.LOCAL_STORAGE_KEY');

  if (lsDarkMode === null) {
    autoDetectTheme();
  } else if (lsDarkMode === 'true') {
    updateBodyClass('dark');
  } else if (lsDarkMode === 'false') {
    updateBodyClass('light');
  }
}

const InitializeScript = () => {
  const boundFn = String(initialize)
    .replace('APP_VERSION', PackageJson.version)
    .replace('unsetEnv', process.env.NODE_ENV)
    .replace('unsetTimestamp', new Date(buildTimestamp).toString())
    .replace('DARK_MODE.LOCAL_STORAGE_KEY', DARK_MODE.LOCAL_STORAGE_KEY);

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InitializeScript />);
};
