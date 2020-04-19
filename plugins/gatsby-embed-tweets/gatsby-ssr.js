const React = require('react');

const TWITTER_SCRIPT_URL = 'https://platform.twitter.com/widgets.js';

const createScriptTag = scriptSrc => {
  return React.createElement(
    'script',
    { src: scriptSrc, key: `gatsby-plugin-oembed-twitter` },
    null
  );
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
  const scripts = createScriptTag(TWITTER_SCRIPT_URL);
  setPostBodyComponents(scripts);
};
