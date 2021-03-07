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
  mainHeroImageObjectFit,
  mainHeroImageObjectPosition,
  invertMainImageFilter,
  disableMainImageFilter,
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
        <div className="title-container" style={{ display: mainHeroImage ? 'block' : 'none' }}>
          {mainHeroImage ? (
            <div
              className={`hero-image-container ${
                disableMainImageFilter ? '' : invertMainImageFilter ? 'invert-light' : 'invert-dark'
              }`}
            >
              <Image
                className="blog-hero-image"
                fileName={mainHeroImage}
                alt={mainHeroImageAlt}
                objectFit={mainHeroImageObjectFit}
                objectPosition={mainHeroImageObjectPosition}
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
  mainHeroImageObjectFit: PropTypes.string,
  mainHeroImageObjectFit: PropTypes.string,
  invertMainImageFilter: PropTypes.bool,
  disableMainImageFilter: PropTypes.bool,
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
  mainHeroImageObjectFit: 'fill',
  mainHeroImageObjectFit: '50% 50%',
  invertMainImageFilter: false,
  disableMainImageFilter: false,
};

export default Layout;
