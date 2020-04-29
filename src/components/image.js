import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

/*
 * Reusable Image component from StackOverflow user RodrigoLeon
 * https://stackoverflow.com/a/56508865
 */

const Image = ({ className, filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      return <Img className={className} alt={alt} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

Image.propTypes = {
  className: PropTypes.string,
  filename: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  filename: 'dickwyn-picture',
  alt: 'dickwyn-picture',
};

export default Image;
