import React from 'react';
import Button from '@material-ui/core/Button';
import Image from './image';

const Hero = () => (
  <div className="hero-container">
    <div className="content-container">
      <div className="profile-card">
        <div className="title">
          <h1>
            Dick Wyn <b>Yong</b>
          </h1>
          <h2>Software Engineer in Phoenix</h2>
        </div>
        <Image className="profile-picture" />
      </div>
      <div className="description">
        <p>
          Hi there! My name is Dickwyn and I'm a Senior Front End Engineer at{' '}
          <a href="http://www.prismstudios.io" target="_blank" rel="noopener noreferrer">
            Prism Studios
          </a>
          . During my free time, I create videos for my YouTube channel, experimenting with new
          recipes in the kitchen, capture photos and travel.
        </p>
        <p>
          Feel free to send me a message on{' '}
          <a href="https://www.twitter.com/dickwyn" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
        <Button variant="outlined" color="default" href="https://www.youtube.com/dickwyn">
          subscribe on youtube
        </Button>
      </div>
    </div>
  </div>
);

export default Hero;
