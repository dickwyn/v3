import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ThemeToggle from '../components/theme-toggle';

const IndexPage = () => (
  <Layout page="">
    <ThemeToggle />
    <Hero />
  </Layout>
);

export default IndexPage;
