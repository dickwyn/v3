import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import Header from './header';
import Footer from './footer';
import '../scss/main.scss';
import PackageJson from '../../package.json';

const Layout = ({ page, children, hideHeader, hideFooter }) => {
  return (
    <div className="root-container">
      <SEO title={page} />
      <Header hide={hideHeader} />
      <main>{children}</main>
      <Footer hide={hideFooter} />
      {process.browser &&
        process.env.NODE_ENV === 'production' &&
        console.log(
          `%cDick Wyn Yong's Portfolio v${PackageJson.version}

Looking for something?

👨‍💻 https://www.github.com/dickwyn/v5
📄 https://www.dropbox.com/s/n1qj7bfp9599lg2/resume-dick-wyn-yong.pdf?dl=0
📧 dickwyn@outlook.com`,
          'font-family:monospace;font-size:12px;'
        )}
    </div>
  );
};

Layout.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
};

Layout.defaultProps = {
  page: '',
  hideHeader: false,
  hideFooter: false,
};

export default Layout;
