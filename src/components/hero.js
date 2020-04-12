import React from 'react';
import Image from './image';
import '../scss/hero.scss';

const Hero = () => (
  <div className="hero-container">
    <div className="content-container">
      <Image />
      <h1>Hi, I am Dick Wyn.</h1>
      <p>
        I am a recent Computer Science graduate from Arizona State University. I have a strong
        passion for web development, mobile computing and human-computer interaction. I also enjoy
        writing blogs, taking photos and travelling.
      </p>
      <p>
        Feel free to send me a message on
        <a href="https://www.twitter.com/dickwyn" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </p>
    </div>
  </div>
);

export default Hero;
