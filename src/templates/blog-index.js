import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';

const BlogPostPreview = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout page="Blog">
      <div className="wrapper">
        <div className="content-container with-padding">
          {edges.map(({ node }) => {
            return <PostPreview key={node.fields.slug} post={node} />;
          })}
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
