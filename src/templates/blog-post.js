import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import TwitterIcon from '@material-ui/icons/Twitter';
import moment from 'moment';
import Layout from '../components/layout';
import shortid from 'shortid';

const BlogPost = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        tags,
        date,
        featuredImage: {
          childImageSharp: { fluid },
        },
      },
      timeToRead,
      html,
    },
  },
  pageContext: { previous, next },
}) => {
  const normalizedDate = moment(date).local().format('MMM DD, YYYY');

  return (
    <Layout page={title} description={description} isBlogPost>
      <div className="wrapper">
        <article className="content-container blog-post with-padding">
          <div className="heading">
            <h1 className="post-title">{title}</h1>
            <h2 className="post-subtitle">
              <a href="https://twitter.com/dickwyn" target="_blank" rel="noopener noreferrer">
                @dickwyn
              </a>{' '}
              | {normalizedDate} | {timeToRead} min read
            </h2>
          </div>
          <Img fluid={fluid} imgStyle={{ objectFit: 'cover' }} />
          <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="post-tags">
            <p className="label">Tagged</p>
            {tags.map((tag) => (
              <p key={shortid.generate()}>{tag}</p>
            ))}
          </div>
          {previous && (
            <Link to={`/blog/${previous.fields.slug}`} className="previous-post">
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={`/blog/${next.fields.slug}`} className="next-post">
              {next.frontmatter.title} →
            </Link>
          )}
        </article>
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
  pageContext: PropTypes.shape({
    id: PropTypes.string,
    previous: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        title
        description
        tags
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      timeToRead
      html
    }
  }
`;
