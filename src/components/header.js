import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import DarkModeToggle from './dark-mode-toggle';

const NAV_LINKS = [
  {
    ie: shortid.generate(),
    name: 'dickwyn',
    path: '/',
  },
  {
    ie: shortid.generate(),
    name: 'blog',
    path: '/blog',
  },
];

const Header = ({ hide, invisible }) => (
  <header className={hide && 'hide'}>
    <div className={`content-container ${invisible && 'invisible'}`}>
      <nav role="navigation">
        {NAV_LINKS.map((item, index) => (
          <>
            <Link key={item.id} to={item.path}>
              {item.name}
            </Link>
            {index < NAV_LINKS.length - 1 ? <div className="separator">&#8226;</div> : ''}
          </>
        ))}
      </nav>
      <DarkModeToggle />
    </div>
  </header>
);

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
  invisible: PropTypes.bool.isRequired,
};

export default Header;
