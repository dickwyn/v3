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
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button
                variant="outlined"
                color="default"
                href="https://www.github.com/dickwyn"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                github
              </Button>
              <Button
                variant="outlined"
                color="default"
                href="https://www.linkedin.com/in/dickwyn"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                linkedin
              </Button>
              <Button
                variant="outlined"
                color="default"
                href="https://www.twitter.com/dickwyn"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                twitter
              </Button>
            </ButtonGroup>
          </div>
          <Image className="profile-picture" />
        </div>
        <div className="description">
          <p>
            Hi there! My name is Dick Wyn and my goal is to make technology accessible for everyone.
            I believe that technology should make the world a better place for everyone and not just
            for the majority group.
          </p>
          <p>
            I was born and raised in Malaysia and I'm currently in the United States working as a
            frontend engineer at{' '}
            <a href="http://www.prismstudios.io" target="_blank" rel="noopener noreferrer">
              Prism Studios
            </a>
            . Beyond my 9 to 5, I create technology and lifestyle content for my{' '}
            <a href="https://www.youtube.com/dickwyn" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>{' '}
            channel. I like eating food, visiting new places and I'm an AvGeek.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
