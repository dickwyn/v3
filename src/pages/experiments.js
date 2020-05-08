import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import shortid from 'shortid';
import Layout from '../components/layout';

const EXPERIMENTS = [
  {
    name: 'Standup Form',
    description:
      'A simple form built with Angular to generate standup checklist from today and yesterday to share with the team',
    url: 'https://standup-form.dickwyn.xyz/',
    repo: 'https://github.com/dickwyn/linkedin-message-template',
  },
  {
    name: 'npmcard',
    description: "it's me, dickwyn on npm.",
    repo: 'https://github.com/dickwyn/linkedin-message-template',
  },
  {
    name: 'LinkedIn Message Template',
    description:
      'A form to generate messages when I connect with new LinkedIn members. The message template is within the 300 character limit set by LinkedIn',
    url: 'https://linkedin-message-template.dickwyn.xyz/',
    repo: 'https://github.com/dickwyn/linkedin-message-template',
  },
  {
    name: 'Resume',
    description:
      'My LaTeX resume template geared towards my computer science background. It is highly customizable and has helped my job searching workflow in the past.',
    repo: 'https://github.com/dickwyn/resume',
  },
];

const ExperimentsPage = () => {
  return (
    <Layout page="Experiments" className="experiments">
      <div className="wrapper">
        <div className="content-container with-margin">
          <h1 className="page-title">Experiments</h1>
          <section className="list-of-experiments">
            {EXPERIMENTS.map((experiment) => (
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
                      Try it out
                    </Button>
                  )}
                  <IconButton
                    size="small"
                    href={experiment.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="view source on github"
                  >
                    <GitHubIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ExperimentsPage;
