import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import DarkModeToggle from './dark-mode-toggle';

const Header = ({ hide }) => (
  <header className={hide && 'hide'}>
    <div className="wrapper">
      <div className="content-container with-padding">
        <Link to="/" className="title">
          My Name is Dickwyn
        </Link>
        <DarkModeToggle />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default Header;
