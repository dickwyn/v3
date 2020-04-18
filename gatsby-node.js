const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(
    `
      query($posts: String) {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: $posts } }, limit: 1000) {
          edges {
            next {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                templateKey
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
    { posts: process.env.NODE_ENV === 'development' ? '/blog/' : '/data/blog/' }
  ).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const { id } = edge.node;
      createPage({
        path: `/blog${edge.node.fields.slug}`,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
        context: {
          id,
          previous: edge.previous,
          next: edge.next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
