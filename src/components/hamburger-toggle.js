import React from 'react';
import PropTypes from 'prop-types';

const HamburgerToggle = ({ open, toggleMobileNav }) => {
  return (
        <button
          className={`hamburger-menu ${open ? 'open' : undefined}`}
          aria-label={`${open ? 'Close navigation menu' : 'Open navigation menu'}`}
          onClick={toggleMobileNav}
        >
          <div className={`hamburger-menu-bar ${open ? 'open' : undefined}`} />
        </button>
  );
};

HamburgerToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

export default HamburgerToggle;
