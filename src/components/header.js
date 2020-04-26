import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import DarkModeToggle from './dark-mode-toggle';
import { LOGO } from '../utils/constants';

const NAV_LINKS = [
  {
    id: shortid.generate(),
    name: 'blog',
    path: '/blog',
  },
  {
    id: shortid.generate(),
    name: 'experiments',
    path: '/experiments',
  },
];

const Header = ({ hide, invisible }) => (
  <header className={`${hide ? 'hide' : undefined} ${invisible ? 'invisible' : undefined}`}>
    <div className={'content-container'}>
      <nav role="navigation">
        <Link to="/" activeClassName="active" className="home">
          <img src={LOGO} alt="dickwyn logo"></img>
          <p className="name">dickwyn</p>
          <p className="short-name">dw</p>
        </Link>
        {NAV_LINKS.map(item => (
          <React.Fragment key={item.id}>
            <Link to={item.path} activeClassName="active">
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
