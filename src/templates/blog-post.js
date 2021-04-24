import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage  } from 'gatsby-plugin-image';
import shortid from 'shortid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Layout from '../components/layout';

dayjs.extend(utc);
dayjs.extend(customParseFormat);

const BlogPost = ({
  data: {
    markdownRemark: {
      fields: { published, lastModified },
      frontmatter: { title, description, tags, date, featuredImage },
      timeToRead,
      html,
      fileAbsolutePath,
    },
  },
  pageContext: { previous, next },
}) => {
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
              |{' '}
              {dayjs(date ? date : published)
                .local()
                .format('D MMM YYYY, h:mma')}{' '}
              | {timeToRead} min read
            </h2>
          </div>
          {featuredImage && <GatsbyImage image={getImage(featuredImage)} />}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="post-tags">
            <b>tagged</b>:{' '}
            {tags.map(
              (tag, index) =>
                tag && (
                  <React.Fragment key={shortid.generate()}>
                    {index ? ', ' : ''}
                    <a href={`/tags/${tag}`}>{tag}</a>
                  </React.Fragment>
                )
            )}
          </div>
          <p>
            <a
              href={`https://github.com/dickwyn/v3/tree/main/data/blog/${fileAbsolutePath
                .split('/')
                .pop()}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit this post
            </a>{' '}
            (Last modified on {dayjs(lastModified).local().format('D MMM YYYY, h:mma')})
          </p>
          <section className="next-read">
            <h5 className="section-title">Read next</h5>
            <div className="container">
              {previous && (
                <Link to={`/blog${previous.fields.slug}`} className="previous-post">
                  <div className="post-preview-container">{previous.frontmatter.title}</div>
                </Link>
              )}
              {next && (
                <Link to={`/blog${next.fields.slug}`} className="next-post">
                  <div className="post-preview-container">{next.frontmatter.title}</div>
                </Link>
              )}
            </div>
          </section>
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
      fields {
        published
        lastModified
      }
      frontmatter {
        date
        title
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      timeToRead
      html
      fileAbsolutePath
    }
  }
`;
