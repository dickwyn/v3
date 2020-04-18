import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import DarkModeToggle from '../components/dark-mode-toggle';

const IndexPage = () => (
  <Layout hideHeader hideFooter>
    <DarkModeToggle />
    <Hero />
  </Layout>
);

export default IndexPage;
