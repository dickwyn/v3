import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import DarkModeToggle from './dark-mode-toggle';

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

const Header = ({ hide, invisible }) => (
  <header className={`${hide ? 'hide' : undefined} ${invisible ? 'invisible' : undefined}`}>
    <div className={'content-container'}>
      <nav role="navigation">
        <Link to="/" activeClassName="active" className="home">
          <p className="name">dickwyn</p>
        </Link>
        {NAV_LINKS.map((item) => (
          <React.Fragment key={item.id}>
            <Link to={item.path} activeClassName="active" partiallyActive={true}>
              {item.name}
            </Link>
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
