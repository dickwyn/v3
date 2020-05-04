import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Layout from '../components/layout';
import PackageJson from '../../package.json';

class NotFoundPage extends Component {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;

    if (!pathname.includes('/images') && pathname.includes('/20')) {
      global.window.location.href = `https://dickwyn.wordpress.com${pathname}`;
    }
  }
  render() {
    const {
      location: { href, origin, pathname },
    } = this.props;

    return (
      <Layout page="404 Page Not Found" className="NotFoundPage">
        <div className="wrapper">
          <div className="content-container with-margin">
            <h1>Sorry, we can't find that page</h1>
            <p>It looks like something is wrong.</p>
            <p>
              View{' '}
              <a href="https://dickwyn.wordpress.com/" target="_blank" rel="noopener noreferrer">
                legacy blog posts
              </a>{' '}
              on the wordpress site.
            </p>
            <pre>
              <code>
                <p>Diagnostic information</p>
                <p>----------------------</p>
                <p>href: {href}</p>
                <p>origin: {origin}</p>
                <p>pathname: {pathname}</p>
              </code>
            </pre>
            <Button
              variant="outlined"
              startIcon={<KeyboardBackspaceIcon />}
              onClick={() => history.back()}
            >
              Go back
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
