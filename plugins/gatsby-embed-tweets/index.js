/**
 * Plugin by Josh Larson
 * https://creative.jplhomer.org/004-building-gatsby-plugin-automatically-embed-tweets/
 */
const select = require('unist-util-select');
const fetch = require('node-fetch');

const TWITTER_SCHEMAS = [
  'https://twitter.com/.*/status/.*',
  'https://.*.twitter.com/.*/status/.*',
];

const TWITTER_ENDPOINT = 'https://publish.twitter.com/oembed';

module.exports = async ({ markdownAST }) => {
  const nodes = findPossibleTweets(markdownAST);
  await replaceLinksWithTweets(nodes);
};

function findPossibleTweets(markdownAST) {
  return select.selectAll('paragraph link:only-child', markdownAST);
}

async function replaceLinksWithTweets(nodes) {
  return Promise.all(nodes.map(node => replaceLinkWithTweet(node)));
}

async function replaceLinkWithTweet(node) {
  try {
    console.log(`Process node ${node.url}`);

    if (!isTweet(node.url)) {
      return;
    }

    const response = await fetch(
      `${TWITTER_ENDPOINT}?format=json&url=${node.url}`
    );
    const { html } = await response.json();

    node.type = 'html';
    node.value = html;
    delete node.children;
  } catch (e) {
    console.log(e.message);
  }
}

function isTweet(url) {
  return TWITTER_SCHEMAS.some(schema => {
    const regExp = new RegExp(schema);
    return regExp.test(url);
  });
}
