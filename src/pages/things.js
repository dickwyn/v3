import React from 'react';
import Layout from '../components/layout';

const ThingsPage = () => {
  return (
    <Layout
      page="Things"
      className="things-page"
      mainTitle="Things"
      mainHeroImage="jason-leung-Xaanw0s0pMk-unsplash"
      mainHeroImageAlt="jason-leung-unsplash"
      invertMainImageFilter={true}
      mainHeroImageObjectFit="cover"
      mainHeroImageObjectPosition="0 88%"
    >
      <div className="wrapper">
        <div className="content-container with-padding"></div>
      </div>
    </Layout>
  );
};

export default ThingsPage;
