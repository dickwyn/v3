import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const date = new Date();
const sunrise = '7:28';
const sunset = '19:28';
const currentTime = `${date.getHours()}:${date.getMinutes()}`;

const DebugPage = () => {
  return (
    <Layout page="Debug" className="DebugPage">
      <div className="wrapper">
        <div className="content-container with-padding">
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
                  </p>{' '}
                </>
              ) : (
                ''
              )}
              <p>sunset/sunrise: {currentTime < sunrise && currentTime > sunset ? 'yes' : 'no'}</p>
            </code>
          </pre>
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
