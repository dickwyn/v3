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
    internal: true,
  },
  {
    id: shortid.generate(),
    name: 'projects',
    path: '/projects/',
    internal: true,
  },
  {
    id: shortid.generate(),
    name: 'Uses',
    path: '/uses/',
    internal: true,
  },
  {
    id: shortid.generate(),
    name: 'Resume',
    path: '/dickwyn-resume.pdf',
    internal: false,
  },
];

const SiteLinks = ({ toggleMobileNav }) => (
  <>
    {NAV_LINKS.map((item) => (
      <li key={item.id}>
        {item.internal ? (
          <Link
            to={item.path}
            activeClassName="active"
            partiallyActive={true}
            onClick={toggleMobileNav}
          >
            {item.name}
          </Link>
        ) : (
          <a href={item.path}>{item.name}</a>
        )}
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
    document.body.style.overflow = document.querySelector('nav.open') === null ? 'hidden' : 'auto';
  };

  return (
    <header className={`${hide && 'hide'} ${invisible && 'invisible'}`}>
      <Link to="/" activeClassName="active" className="home" onClick={() => toggleMobileNav('/')}>
        <img src="/images/dickwyn-logo.svg" alt="dickwyn's logo"></img>
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
