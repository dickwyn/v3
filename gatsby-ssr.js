import React from 'react';
import Terser from 'terser';
import preval from 'preval.macro';
import PackageJson from './package.json';

const buildTimestamp = preval`module.exports = new Date().getTime();`;

function initialize() {
  const nodeEnv = 'unsetEnv';

  if (nodeEnv === 'production') {
    console.log(
      `%cDick Wyn Yong's Portfolio vAPP_VERSION
              
Looking for something?

👨‍💻 https://www.github.com/dickwyn/v5
📄 https://www.dropbox.com/s/n1qj7bfp9599lg2/resume-dick-wyn-yong.pdf?dl=0
📧 dickwyn@outlook.com

built: unsetTimestamp`,
      'font-family:monospace;'
    );
  }
}

const InitializeScript = () => {
  const boundFn = String(initialize)
    .replace('APP_VERSION', PackageJson.version)
    .replace('unsetEnv', process.env.NODE_ENV)
    .replace('unsetTimestamp', new Date(buildTimestamp).toString());

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InitializeScript />);
};
