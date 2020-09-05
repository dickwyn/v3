import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import DarkModeToggle from './dark-mode-toggle';
import HamburgerToggle from './hamburger-toggle';

const NAV_LINKS = [
  {
    id: shortid.generate(),
    name: 'blog',
    path: '/blog',
  },
  {
    id: shortid.generate(),
    name: 'projects',
    path: '/projects/',
  },
];

const SiteLinks = ({ toggleMobileNav }) => (
  <>
    <li>
      <Link to="/" activeClassName="active" className="home" onClick={() => toggleMobileNav('/')}>
        <p className="name">dickwyn</p>
      </Link>
    </li>
    {NAV_LINKS.map((item) => (
      <li key={item.id}>
        <Link
          to={item.path}
          activeClassName="active"
          partiallyActive={true}
          onClick={toggleMobileNav}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </>
);

const Header = ({ hide, invisible }) => {
  const [open, setOpen] = useState(false);

  const toggleMobileNav = (path) => {
    document.body.style.overflow = open ? 'initial' : 'hidden';
    if ((path === '/' && open) || typeof path === 'object' || path === undefined) {
      setOpen(!open);
    }
  };

  return (
    <nav
      className={`${hide && 'hide'} ${invisible && 'invisible'} ${open && 'open'}`}
      role="navigation"
    >
      <div className="content-container">
        <ul className={`desktop-links`}>
          <SiteLinks />
        </ul>
        <ul className={`mobile-nav ${open && 'open'}`}>
          <SiteLinks toggleMobileNav={toggleMobileNav} />
        </ul>
        <div className="action-buttons">
          <DarkModeToggle />
          <HamburgerToggle open={open} toggleMobileNav={toggleMobileNav} />
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
  invisible: PropTypes.bool.isRequired,
};

export default Header;
