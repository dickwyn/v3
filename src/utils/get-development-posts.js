import { graphql, useStaticQuery } from 'gatsby';

const getDevelopmentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/data/blog/|/data/dev-blog/" } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
          }
          timeToRead
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes.map(post => ({
    slug: post.fields.slug,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    timeToRead: post.timeToRead,
  }));
};

export default getDevelopmentPosts;
