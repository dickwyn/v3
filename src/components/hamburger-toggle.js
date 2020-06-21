import React from 'react';
import PropTypes from 'prop-types';

const HamburgerToggle = ({ open, setOpen }) => (
  <div className="hamburger-menu-container">
    <button
      className={`hamburger-menu ${open ? 'active' : undefined}`}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </button>
  </div>
);

HamburgerToggle.propTypes = {};

export default HamburgerToggle;
