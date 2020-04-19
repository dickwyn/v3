import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
  <Layout hideFooter invisible className="homepage">
    <div className="wrapper">
      <div className="content-container with-margin">
        <div className="profile-card">
          <div className="title">
            <h1>
              Dick Wyn <b>Yong</b>
            </h1>
            <h2>Software Engineer in Phoenix</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button
                variant="outlined"
                color="default"
                href="https://www.github.com/dickwyn"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </Button>
              <Button
                variant="outlined"
                color="default"
                href="https://www.linkedin.com/in/dickwyn"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </Button>
            </ButtonGroup>
          </div>
          <Image className="profile-picture" />
        </div>
        <div className="description">
          <p>
            Hi there! My name is Dickwyn and I'm a Senior Front End Engineer at{' '}
            <a href="http://www.prismstudios.io" target="_blank" rel="noopener noreferrer">
              Prism Studios
            </a>
            . I'm also a Malaysian living in America and I enjoy creating videos for my{' '}
            <a href="https://www.youtube.com/dickwyn" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>{' '}
            channel, experimenting with new recipes in the kitchen and travelling the world.
          </p>
          <p>
            You can reach me out on{' '}
            <a href="https://www.twitter.com/dickwyn" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </p>{' '}
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
