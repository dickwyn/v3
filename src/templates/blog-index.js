import React from 'react';
import { graphql, navigate } from 'gatsby';
import Pagination from '@material-ui/lab/Pagination';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';

const BlogPostPreview = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { numberOfPages, currentPage },
}) => {
  return (
    <Layout page="Blog" className="blog-index">
      <div className="hero-image-container">
        <img src="/images/adrien-olichon-gOdavfpH-3s-unsplash.jpg"></img>
        <h1>My Name is Dick Wyn</h1>
      </div>
      <div className="wrapper">
        <div className="content-container with-padding">
          {edges.map(({ node }) => {
            return <PostPreview key={node.fields.slug} post={node} />;
          })}
          {numberOfPages > 1 && (
            <Pagination
              shape="rounded"
              count={numberOfPages}
              page={currentPage}
              onChange={(_event, value) => {
                navigate(`/blog${value > 1 ? `/${value}` : ''}`);
              }}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!, $blogPostFilter: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: $blogPostFilter } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date
            description
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogPostPreview;
