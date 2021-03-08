import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout
      page="About"
      className="about-page"
      mainTitle=""
      mainHeroImage="P1002080"
      mainHeroImageAlt="cover photo of dick wyn yong"
      mainHeroImageObjectFit="cover"
      mainHeroImageObjectPosition="0 38%"
      disableMainImageFilter={true}
    >
      <div className="wrapper">
        <div className="content-container with-padding">
          <div className="title">
            <h2>Dick Wyn Yong</h2>
            <p>software engineer · content creator · sustainability enthusiast</p>
          </div>
          <p>
            Chances are, I've either directed you here or you've seen on of my many YouTube videos
            or found me through my GitHub repositories. In any case, welcome to my little part of
            the internet. Take a look around to get to know me a little. And feel free to{' '}
            <b>contact me</b> if you have any questions.
          </p>
          <h3>Quick facts</h3>
          <ul>
            <li>I don't have a middle name, my first name has two words (Dick Wyn).</li>
            <li>I was born and raised in Kuala Lumpur, Malaysia.</li>
            <li>
              A lot of people see me as the 'quiet' one when they first meet me but once you get to
              know me a little, I have quite a voice for my thoughts.
            </li>
            <li>I am obsessed with all things consumer technology.</li>
            <li>For a good 5 years, i was doing tech blogging for the malaysia tech scene.</li>
            <li>My ideal vacation is exploring a new city and having 5 or even more meals.</li>
            <li>My goal in life is to live meaningful life, how? I'm still figuring that out.</li>
          </ul>

          <h3>
            <span role="img" aria-label="map">
              🗺
            </span>
            Places
          </h3>
          <p>
            I am currently based in Tempe, Arizona just south of ASU's Tempe campus where i
            completed my bachelor's degree in computer science.
          </p>
          <p>
            Places that I have previously lived, it's not a huge list but I hope to expand it as the
            time goes by:
          </p>
          <ul>
            <li>Recife, Pernambuco, Brazil</li>
            <li>Sandwich, Massachusetts, USA</li>
            <li>Shenzhen, Guangdong, China</li>
            <li>Petaling Jaya ("PJ"), Selangor, Malaysia</li>
          </ul>
          <p>Bucket list:</p>
          <ul>
            <li>Eating street food in a city in India</li>
            <li>Catching a glimpse of the northern lights</li>
            <li>See more of my home country, Malaysia</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
