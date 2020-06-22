import React from 'react';
import PropTypes from 'prop-types';

const HamburgerToggle = ({ open, setOpen }) => (
  <button
    className="hamburger-menu"
    aria-label={`${open ? 'Close navigation menu' : 'Open navigation menu'}`}
    onClick={() => setOpen(!open)}
  >
    <div className={`hamburger-menu-container ${open ? 'active' : undefined}`}>
      <div className="bars" />
      <div className="bars" />
      <div className="bars" />
    </div>
  </button>
);

HamburgerToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default HamburgerToggle;
