import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import Header from './header';
import Footer from './footer';
import Image from './image';
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
  mainTitle,
  mainHeroImage,
  mainHeroImageAlt,
  invertMainImageFilter,
}) => {
  return (
    <div className="root-container">
      <SEO title={page} description={description} isBlogPost={isBlogPost} />
      <a className="a11y-skip-link" href="#content">
        Skip to Main Content
      </a>
      <Header hide={hideHeader} invisible={invisible} />
      <div id="content" />
      <main className={`${className} ${hideFooter && 'noFooter'}`}>
        <div className="title-container">
          {mainHeroImage ? (
            <div className={`hero-image-container ${invertMainImageFilter && 'invert'}`}>
              <Image
                className="blog-hero-image"
                fileName={mainHeroImage}
                alt={mainHeroImageAlt}
              ></Image>
              <h1>{mainTitle}</h1>
            </div>
          ) : (
            <h1>{mainTitle}</h1>
          )}
        </div>
        {children}
      </main>
      {!hideFooter && <Footer />}
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
  mainTitle: PropTypes.string,
  mainHeroImage: PropTypes.string,
  mainHeroImageAlt: PropTypes.string,
  invertMainImageFilter: PropTypes.bool,
};

Layout.defaultProps = {
  page: '',
  hideHeader: false,
  hideFooter: false,
  invisible: false,
  className: '',
  isBlogPost: false,
  description: '',
  mainTitle: '',
  mainHeroImage: '',
  mainHeroImageAlt: '',
  invertMainImageFilter: false,
};

export default Layout;
