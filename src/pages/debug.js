import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import getSunriseSunset from '../utils/getSunriseSunset';

class DebugPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: '08:00',
      sunrise: '7:28',
      sunset: '19:28',
    };
  }

  componentDidMount() {
    const date = new Date();
    getSunriseSunset()
      .then((response) => {
        if (!response.error) {
          this.setState(
            {
              currentTime: `${date.getHours()}:${date.getMinutes()}`,
              sunrise: response.sunrise,
              sunset: response.sunset,
            },
            this.restoreTheme
          );
        } else {
          console.error('Error with getting sunrise/sunset information: ', response.error);
        }
      })
      .catch((error) => {
        console.error('POST request to geolocationdb failed: ', error);
      });
  }

  render() {
    const {
      allSitePage: { nodes: allSitePages },
    } = this.props.data;
    const { currentTime, sunrise, sunset } = this.state;

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
