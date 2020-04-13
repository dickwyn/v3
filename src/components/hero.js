import React from 'react';
import Image from './image';

const Hero = () => (
  <div className="hero-container">
    <div className="content-container">
      <div className="profile-card">
        <div className="title">
          <h1>Dick Wyn Yong</h1>
          <h2>Software Engineer in Phoenix</h2>
          <button type="button">
            <a href="https://www.youtube.com/dickwyn" target="_blank" rel="noopener noreferrer">
              subscribe on youtube
            </a>
          </button>
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
