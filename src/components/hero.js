import React from 'react';
import Button from '@material-ui/core/Button';
import Image from './image';

const Hero = () => (
  <div className="hero-container">
    <div className="content-container">
      <div className="profile-card">
        <div className="title">
          <h1>Dick Wyn Yong</h1>
          <h2>Software Engineer in Phoenix</h2>
          <Button variant="outlined" color="default" href="https://www.youtube.com/dickwyn">
            subscribe on youtube
          </Button>
        </div>
        <Image className="profile-picture" />
      </div>
      <div className="description">
        <p>
          I am a Computer Science graduate from Arizona State University. I have a strong passion
          for web development, mobile computing and human-computer interaction. I also enjoy writing
          blogs, taking photos and travelling.
        </p>
        <p>
          Feel free to send me a message on{' '}
          <a href="https://www.twitter.com/dickwyn" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
