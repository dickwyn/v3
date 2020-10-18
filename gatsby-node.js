const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { execSync } = require('child_process');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostFilter =
    process.env.NODE_ENV === 'development' ? '/data/blog/|/data/dev-blog/' : '/data/blog/';

  return graphql(
    `
      query($posts: String) {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: $posts } }
          limit: 1000
          sort: { fields: frontmatter___date }
        ) {
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
    { posts: blogPostFilter }
  ).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
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

    const postsPerPage = 10;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve('src/templates/blog-index.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages,
          currentPage: i + 1,
          blogPostFilter,
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
    /**
     * Solution from Angelos Orfanakos
     * https://angelos.dev/2019/09/add-support-for-modification-times-in-gatsby/
     */
    createNodeField({
      node,
      name: 'published',
      value: execSync(`git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`).toString(),
    });
    /**
     * Solution from Joshua Tzucker
     * https://joshuatz.com/posts/2019/gatsby-better-last-updated-or-modified-dates-for-posts/
     */
    createNodeField({
      node,
      name: 'lastModified',
      value: execSync(
        `git log --pretty=format:%aI --follow -- ${node.fileAbsolutePath} | tail -n 1`
      ).toString(),
    });
  }
};
