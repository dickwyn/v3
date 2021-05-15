import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

/*
 * Reusable Image component from StackOverflow user RodrigoLeon
 * https://stackoverflow.com/a/56508865
 */

const Image = ({ className, fileName, alt, objectFit, objectPosition }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(fileName);
      });
      if (!image) {
        return null;
      }

      return (
        <GatsbyImage
          className={className}
          alt={alt}
          image={getImage(image.node)}
          imgStyle={{
            objectFit: objectFit,
            objectPosition: objectPosition,
          }}
        />
      );
    }}
  />
);

Image.propTypes = {
  className: PropTypes.string,
  fileName: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  fileName: 'dickwyn-picture',
  alt: 'dick-wyn-yong-picture',
  objectFit: 'fill',
  objectPosition: '50% 50%',
};

export default Image;
