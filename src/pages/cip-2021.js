import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Layout from '../components/layout';

dayjs.extend(relativeTime);

const Cip2021Page = () => {
  const currentTime = dayjs();
  const releaseTime = dayjs(1621566000000);

  return (
    <Layout
      page="CIP 2021"
      className="cip-2021"
      mainTitle="Code in Place 2021 - Section 183"
      mainHeroImage="P1003265"
      mainHeroImageAlt="dickwyn's code in place 2021 desk setup for teaching sections"
      mainHeroImageObjectFit="cover"
      mainHeroImageObjectPosition="0 38%"
      mainHeroImageTall={true}
      disableMainImageFilter={true}
    >
      <div className="wrapper">
        <div className="content-container with-padding">
          {currentTime > releaseTime ? (
            <>
              <p>
                When I saw{' '}
                <a
                  href="https://twitter.com/codeorg/status/1372238129432760321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  code.org's tweet
                </a>{' '}
                about Stanford's Code in Place program, I instinctively knew that I wanted to be a
                part of it. My mindset coming into the program was simple, I wanted to pay it
                forward as ever since I graduated and started working in the industry as a Software
                Engineer, I haven't really participated in community service projects.
              </p>
              <p>
                I stepped into Chris, Mehran, and Julie's world of Code in Place expecting that I
                will do a lot of teaching and talking but, I was actually learning more than I was
                teaching. The conversations that I had with each and every one of you during our
                weekly Thursday sections reminded me the importance of the fundamental programming
                concepts.
              </p>
              <p>
                The questions that I got from all of you like why do we need to re-assign the
                variable for the while loop to terminate? or how do I improve my typing speed? These
                questions made me recall a time where I was also in that position where I didn't
                know what condition I should put on the while loop to make the program work without
                it crashing on me.
              </p>
              <p>
                As I have mentioned before, my expertise lies within Front End development. So, if
                you ever want to try to building websites or mobile apps let me know.{' '}
                <i>I'll be happy to introduce you to my world of Front End Development</i>. If
                you're looking for other avenues of coding/computer science to explore, I would
                highly recommend the following places that I have personally used and benefited from
                in the past.
              </p>
              <ul>
                <li>
                  <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">
                    freeCodeCamp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tutorialspoint.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tutorialspoint
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCJbPGzawDH1njbqV-D5HqKw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    thenewboston
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fireship
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/TechGuyWeb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Traversy Media
                  </a>
                </li>
              </ul>
              <p>
                It's been an absolute pleasure of mine to have guided you through your first
                encounter with coding/computer science. This is the first time in my life that I'm
                teaching someone in an online setting and it will definitely not be my last doing
                something like this. Feel free to connect with me on my socials and I wish you all
                the best in your future endeavors
              </p>
              <ul>
                <li>
                  <a href="https://twitter.com/dickwyn" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/dickwyn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <p>
                <i>dickwyn</i>
              </p>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h2>coming {dayjs(currentTime).to(releaseTime)}</h2>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cip2021Page;
