import React, { useState } from 'react';
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

const SiteLinks = () => (
  <>
    {NAV_LINKS.map((item) => (
      <React.Fragment key={item.id}>
        <Link to={item.path} activeClassName="active" partiallyActive={true}>
          {item.name}
        </Link>
      </React.Fragment>
    ))}
  </>
);

const Header = ({ hide, invisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${hide ? 'hide' : undefined} ${invisible ? 'invisible' : undefined}`}>
      <div className="common-nav">
        <div className="content-container">
          <nav role="navigation">
            <Link to="/" activeClassName="active" className="home">
              <p className="name">dickwyn</p>
            </Link>
            <div className={`desktop-links`}>
              <SiteLinks />
            </div>
          </nav>
          <div className="action-buttons">
            <DarkModeToggle />
            <HamburgerToggle open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
      <div className={`mobile-nav ${open ? undefined : 'hide'}`}>
        <div className="content-container">
          <SiteLinks />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
  invisible: PropTypes.bool.isRequired,
};

export default Header;
