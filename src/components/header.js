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
  {
    id: shortid.generate(),
    name: 'Uses',
    path: '/uses/',
  },
];

const SiteLinks = ({ toggleMobileNav }) => (
  <>
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
    if ((path === '/' && open) || typeof path === 'object' || path === undefined) {
      setOpen(!open);
    }
    // document.body.style.overflow = open ? 'hidden' : 'auto';
  };

  return (
    <header className={`${hide && 'hide'} ${invisible && 'invisible'}`}>
      <Link to="/" activeClassName="active" className="home" onClick={() => toggleMobileNav('/')}>
        dick wyn yong
      </Link>
      <nav
        className={`${hide && 'hide'} ${invisible && 'invisible'} ${open && 'open'}`}
        role="navigation"
      >
        <ul>
          <SiteLinks toggleMobileNav={toggleMobileNav} />
        </ul>
      </nav>
      <div className="action-buttons">
        <DarkModeToggle />
        <HamburgerToggle open={open} toggleMobileNav={toggleMobileNav} />
      </div>
    </header>
  );
};

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
  invisible: PropTypes.bool.isRequired,
};

export default Header;
