import React from 'react';
import PropTypes from 'prop-types';

const HamburgerToggle = ({ open, toggleMobileNav }) => {
  return (
    <button
      className="hamburger-menu"
      aria-label={`${open ? 'Close navigation menu' : 'Open navigation menu'}`}
      onClick={toggleMobileNav}
    >
      <div className={`hamburger-menu-container ${open ? 'active' : undefined}`}>
        <div className="bars" />
        <div className="bars" />
        <div className="bars" />
      </div>
    </button>
  );
};

HamburgerToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

export default HamburgerToggle;
