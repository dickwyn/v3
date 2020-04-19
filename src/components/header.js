import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import DarkModeToggle from './dark-mode-toggle';

const NAV_LINKS = [
  {
    id: shortid.generate(),
    name: 'dickwyn',
    path: '/',
  },
  {
    id: shortid.generate(),
    name: 'blog',
    path: '/blog',
  },
];

const Header = ({ hide, invisible }) => (
  <header className={hide ? 'hide' : undefined}>
    <div className={`content-container ${invisible ? 'invisible' : undefined}`}>
      <nav role="navigation">
        {NAV_LINKS.map((item, index) => (
          <React.Fragment key={item.id}>
            <Link to={item.path}>{item.name}</Link>
            {index < NAV_LINKS.length - 1 ? <div className="separator">&#8226;</div> : ''}
          </React.Fragment>
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
