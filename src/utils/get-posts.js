import { graphql, useStaticQuery } from 'gatsby';

const getPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/data/blog/" } }
      ) {
        nodes {
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
  `);

  return data.allMarkdownRemark.nodes.map(post => ({
    slug: post.fields.slug,
    title: post.frontmatter.title,
    subtitle: post.frontmatter.subtitle,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    timeToRead: post.timeToRead,
  }));
};

export default getPosts;
