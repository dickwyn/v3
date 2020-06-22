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

const Header = ({ hide, invisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div
        className={`desktop ${hide ? 'hide' : undefined} ${invisible ? 'invisible' : undefined}`}
      >
        <div className={'content-container'}>
          <nav role="navigation">
            <Link to="/" activeClassName="active" className="home">
              <p className="name">dickwyn</p>
            </Link>
            <div className={`desktop-nav`}>
              {NAV_LINKS.map((item) => (
                <React.Fragment key={item.id}>
                  <Link to={item.path} activeClassName="active" partiallyActive={true}>
                    {item.name}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </nav>
          <div className="right">
            <DarkModeToggle />
            <HamburgerToggle open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
      <div className={`mobile-nav ${open ? undefined : 'hide'}`}>
        <div className="content-container">
          {NAV_LINKS.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={item.path} activeClassName="active" partiallyActive={true}>
                {item.name}
              </Link>
            </React.Fragment>
          ))}
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
