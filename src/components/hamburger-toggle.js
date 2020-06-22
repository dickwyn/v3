import React from 'react';
import PropTypes from 'prop-types';

const HamburgerToggle = ({ open, setOpen }) => (
  <button
    className="hamburger-menu"
    aria-label="Toggle navigation menu"
    onClick={() => setOpen(!open)}
  >
    <div className={`hamburger-menu-container ${open ? 'active' : undefined}`}>
      <div />
      <div />
      <div />
    </div>
  </button>
);

HamburgerToggle.propTypes = {};

export default HamburgerToggle;
