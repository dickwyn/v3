import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ hide }) => (
  <header className={hide && 'hide'}>
    <p>
      <Link to="/">DICKWYN.XYZ</Link>
    </p>
  </header>
);

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default Header;
