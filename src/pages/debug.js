import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

class DebugPage extends Component {
  render() {
    const {
      allSitePage: { nodes: allSitePages },
    } = this.props.data;
    const date = new Date();
    const currentTime = `${date.getHours()}:${date.getMinutes()}`;
    const sunrise = '7:28';
    const sunset = '19:28';

    return (
      <Layout page="Debug" className="DebugPage" mainTitle="Debug">
        <div className="wrapper">
          <div className="content-container with-padding">
            <h2>Diagnostic information:</h2>
            <div class="gatsby-highlight" data-language="text">
              <pre class="language-text">
                <code class="language-text">
                  <p>System information</p>
                  <p>----------------------</p>
                  {typeof window !== `undefined` ? (
                    <>
                      <p>language: {window.navigator.language}</p>
                      <p>platform: {window.navigator.platform}</p>
                      <p>maxTouchPoints: {window.navigator.maxTouchPoints}</p>
                      <p>vendor: {window.navigator.vendor}</p>
                      <p>userAgent: {window.navigator.userAgent}</p>
                      <br />
                      <p>Dark mode information</p>
                      <p>----------------------</p>
                      <p>
                        darkMode ls key:{' '}
                        {localStorage.getItem('darkMode')
                          ? localStorage.getItem('darkMode')
                          : 'undefined'}
                      </p>
                      <p>
                        system darkMode:{' '}
                        {window.matchMedia('(prefers-color-scheme: dark)').matches.toString()}
                      </p>
                      <p>
                        sunset/sunrise:{' '}
                        {currentTime < sunrise && currentTime > sunset ? 'yes' : 'no'}
                      </p>
                    </>
                  ) : (
                    <p>window element is undefined</p>
                  )}
                </code>
              </pre>
            </div>
            <h2>List of pages ({allSitePages.length}):</h2>
            <ul>
              {allSitePages.map((page) => (
                <li key={page.id}>
                  <a href={page.path}>{page.path}</a>
                </li>
              ))}
            </ul>
            <h2>Links:</h2>
            <ul>
              <li>
                <span aria-label="information" role="img">
                  💅
                </span>
                <p>
                  <Link to="/styleguide">View</Link> the style guide.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    allSitePage {
      nodes {
        path
        id
      }
    }
  }
`;

export default DebugPage;
