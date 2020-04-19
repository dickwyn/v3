import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import DarkModeToggle from './dark-mode-toggle';

const Header = ({ hide }) => (
  <header className={hide && 'hide'}>
    <div className="content-container">
      <nav role="navigation">
        <Link to="/" className="title">
          dickwyn
        </Link>
        <Link to="/blog" className="title">
          Blog
        </Link>
      </nav>
      <DarkModeToggle />
    </div>
  </header>
);

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default Header;
