import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import Header from './header';
import Footer from './footer';
import '../scss/main.scss';

const Layout = ({ page, children, hideHeader, hideFooter }) => {
  return (
    <div className="root-container">
      <SEO title={page} />
      <Header hide={hideHeader} />
      <main>{children}</main>
      <Footer hide={hideFooter} />
    </div>
  );
};

Layout.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
};

Layout.defaultProps = {
  hideHeader: false,
  hideFooter: false,
};

export default Layout;
