import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout page="404 Page Not Found" className="NotFoundPage">
    <div className="wrapper">
      <div className="content-container with-margin">
        <h1>Sorry, we can't find that page</h1>
        <p>It looks like something is wrong.</p>
        <a></a>
        <Button
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => history.back()}
        >
          Go back
        </Button>
        <ul>
          <li>
            <span aria-label="information" role="img">
              ℹ️
            </span>
            <p>
              <a href="https://www.dickwyn.wordpress.com" target="_blank" rel="noopener noreferrer">
                View
              </a>{' '}
              legacy blog posts on the wordpress site.
            </p>
          </li>
          <li>
            <span aria-label="face with monocle" role="img">
              🧐
            </span>
            <p>
              <a
                href="https://github.com/dickwyn/v5/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report
              </a>{' '}
              an issue if you believe there's a bug on the site.
            </p>
          </li>
          <li>
            <span aria-label="keyboard" role="img">
              ⌨️
            </span>
            <p>
              View the code for this portfolio / blog on my{' '}
              <a href="https://www.github.com/dickwyn/v5" target="_blank" rel="noopener noreferrer">
                GitHub profile
              </a>
              .
            </p>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
