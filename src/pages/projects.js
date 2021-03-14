import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import shortid from 'shortid';
import Layout from '../components/layout';

const PROJECTS = [
  {
    name: 'Now',
    description: "A single page application to display what i'm currently doing",
    tryItUrl: 'https://now.dickwyn.xyz/',
  },
  {
    name: 'Standup Form',
    description:
      'A simple form built with Angular to generate standup checklist from today and yesterday to share with the team.',
    tryItUrl: 'https://standup-form.dickwyn.xyz/',
    repo: 'https://github.com/dickwyn/standup-form',
  },
  {
    name: 'npmcard',
    description: "It's me, dickwyn on npm.",
    repo: 'https://github.com/dickwyn/npmcard',
  },
  {
    name: 'LinkedIn Message Template',
    description:
      'A form to generate messages when I connect with new LinkedIn members. The message template is within the 300 character limit set by LinkedIn.',
    tryItUrl: 'https://linkedin-message-template.dickwyn.xyz/',
    repo: 'https://github.com/dickwyn/linkedin-message-template',
  },
  {
    name: 'Resume',
    description:
      'My LaTeX resume template geared towards my computer science background. It is highly customizable and has helped my job searching workflow in the past.',
    repo: 'https://github.com/dickwyn/resume',
  },
  {
    name: 'ASUCIS',
    description:
      'A set of websites that I developed for the ASU Coalition of International Students for marketing purposes.',
    repo: 'https://github.com/asucis',
  },
  {
    name: 'The Technology of Today Malaysia',
    description: 'Technology news for the Malaysian market',
    url: 'https://megapowertech-malaysia.blogspot.com/',
  },
  {
    name: 'The Technology of Today International',
    description: 'Technology reviews and news articles',
    url: 'https://megapowertech.blogspot.com/',
  },
];

const ProjectsPage = () => {
  return (
    <Layout
      page="Projects"
      className="projects"
      mainTitle="Projects"
      mainHeroImage="timj-ots0EOYuGtU-unsplash"
      mainHeroImageAlt="timj-unsplash"
      invertMainImageFilter={true}
      mainHeroImageObjectFit="cover"
      mainHeroImageObjectPosition="0 70%"
    >
      <div className="wrapper">
        <div className="content-container with-padding">
          <p>These are some of my technical (and non-technical) projects.</p>
          <section className="list-of-projects">
            {PROJECTS.map((experiment) => (
              <Card key={shortid.generate()}>
                <CardContent>
                  <h4>{experiment.name}</h4>
                  <p>{experiment.description}</p>
                </CardContent>
                <CardActions>
                  {experiment.url && (
                    <Button
                      size="small"
                      href={experiment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </Button>
                  )}
                  {experiment.tryItUrl && (
                    <Button
                      size="small"
                      href={experiment.tryItUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try it out
                    </Button>
                  )}
                  {experiment.repo && (
                    <IconButton
                      size="small"
                      href={experiment.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="view source on github"
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                </CardActions>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
