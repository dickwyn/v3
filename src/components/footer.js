import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

// eslint-disable-next-line no-unused-vars
const SOCIAL_LINKS = [
  {
    id: shortid.generate(),
    name: 'Twitter',
    url: 'https://twitter.com/dickwyn',
  },
  {
    id: shortid.generate(),
    name: 'Github',
    url: 'https://twitter.com/dickwyn',
  },
  {
    id: shortid.generate(),
    name: 'LinkedIn',
    url: 'https://twitter.com/dickwyn',
  },
  {
    id: shortid.generate(),
    name: 'YouTube',
    url: 'https://twitter.com/dickwyn',
  },
  {
    id: shortid.generate(),
    name: 'Instagram',
    url: 'https://twitter.com/dickwyn',
  },
];

const Footer = ({ hide }) => (
  <footer className={hide && 'hide'}>
    <p className="credit">©{new Date().getFullYear()} - DICK WYN YONG</p>
  </footer>
);

Footer.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default Footer;
