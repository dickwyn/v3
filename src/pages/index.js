import Layout from '../components/layout';
import React from 'react';

const IndexPage = () => (
  <Layout hideFooter invisible className="homepage">
    <div className="wrapper">
      <div className="content-container with-margin homepage">
        <div className="profile-card">
          <div className="title">
            <h1>
              Dick Wyn <b>Yong</b>
            </h1>
            <a href="https://twitter.com/dickwyn" target="_blank" rel="noopener noreferrer">
              twitter
            </a>
            <a href="https://www.linkedin.com/in/dickwyn" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href="https://www.github.com/dickwyn" target="_blank" rel="noopener noreferrer">
              github
            </a>
          </div>
        </div>
        <div className="description">
          <p>
            i'm a software engineer at{' '}
            <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
              Microsoft
            </a>
          </p>
          <p>
            i was born and raised in malaysia and got my computer science degree from{' '}
            <a href="https://www.asu.edu/" target="_blank" rel="noopener noreferrer">
              ASU
            </a>
          </p>
          <p>
            also, i upload videos on my{' '}
            <a href="https://www.youtube.com/dickwyn" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>{' '}
            channel about how technology gets applied in my everyday life
          </p>
          <p>
            my weekly schedule minus sleeping comprises 20% coding, 10% meetings, 10% cooking, 30%
            video production, 25% learning
          </p>
          <p>
            i like consumer technology, airplanes, photography and eating + cooking chicken rice
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
