import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const HamburgerToggle = ({ open, toggleMobileNav }) => {
  return (
    <>
      <Tooltip title="Toggle site menu">
        <button
          className={`hamburger-toggle ${open ? 'open' : undefined}`}
          aria-label={`${open ? 'Close navigation menu' : 'Open navigation menu'}`}
          onClick={toggleMobileNav}
        >
          <div className={`hamburger-toggle-bar ${open ? 'open' : undefined}`} />
        </button>
      </Tooltip>
    </>
  );
};

HamburgerToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

export default HamburgerToggle;
