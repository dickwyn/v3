import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const date = new Date();
const sunrise = '7:28';
const sunset = '19:28';
const currentTime = `${date.getHours()}:${date.getMinutes()}`;

const DebugPage = () => {
  const {
    allSitePage: { nodes: allPaths },
  } = useStaticQuery(
    graphql`
      query {
        allSitePage {
          nodes {
            path
          }
        }
      }
    `
  );
  return (
    <Layout page="Debug" className="DebugPage">
      <div className="wrapper">
        <div className="content-container with-padding">
          <h1>Debug</h1>
          <h2>Diagnostic information:</h2>
          <pre>
            <code>
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
                    sunset/sunrise: {currentTime < sunrise && currentTime > sunset ? 'yes' : 'no'}
                  </p>
                </>
              ) : (
                <p>window element is undefined</p>
              )}
            </code>
          </pre>
          <h2>List of pages ({allPaths.length}):</h2>
          <ul>
            {allPaths.map(item => (
              <li>
                <a href={item.path}>{item.path}</a>
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
};

export default DebugPage;
