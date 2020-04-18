import React from 'react';

const AlertBanner = () => (
  <div className="banner alert">
    <p>
      <span role="img" aria-labelledby="construction emoji">
        🚧
      </span>
      Site is still under construction. All content is just test data for development purposes only.
      View{' '}
      <a href="https://www.dickwyn.wordpress.com" target="_blank" rel="noopener noreferrer">
        https://www.dickwyn.wordpress.com
      </a>{' '}
      for old blog posts.{' '}
      <span role="img" aria-labelledby="construction emoji">
        🚧
      </span>
    </p>
  </div>
);

export default AlertBanner;
