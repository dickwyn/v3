import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import Header from './header';
import Footer from './footer';
import '../scss/main.scss';

const Layout = ({
  page,
  children,
  hideHeader,
  hideFooter,
  invisible,
  className,
  isBlogPost,
  description,
}) => {
  return (
    <div className="root-container">
      <SEO title={page} description={description} isBlogPost={isBlogPost} />
      <Header hide={hideHeader} invisible={invisible} />
      <main className={className}>{children}</main>
      <Footer hide={hideFooter} />
    </div>
  );
};

Layout.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  invisible: PropTypes.bool,
  className: PropTypes.string,
  isBlogPost: PropTypes.bool,
  description: PropTypes.string,
};

Layout.defaultProps = {
  page: '',
  hideHeader: false,
  hideFooter: false,
  invisible: false,
  className: '',
  isBlogPost: false,
  description: '',
};

export default Layout;
