import React from 'react';
import { Link } from 'gatsby';
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
    <div className="wrapper">
      <div className="content-container">
        <div className="left">© {new Date().getFullYear()} Dick Wyn Yong</div>
        <div className="right">
          <a href="https://instagram.com/dickwyn">Instagram</a>
          <a href="https://twitter.com/dickwyn">Twitter</a>
          <Link to="/">Blog</Link>
          <a href="mailto:dickwyn@outlook.com">Contact</a>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default Footer;
