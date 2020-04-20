import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, title, image, isBlogPost }) => {
  const {
    site: {
      siteMetadata: {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
        image: defaultImage,
        author,
        social: { twitter: twitterHandle },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || defaultDescription;
  const metaTitle = title || defaultTitle;
  const metaImage = image || defaultImage;

  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: metaTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `${isBlogPost ? 'article' : 'website'}`,
    },
    {
      property: `og:image`,
      content: metaImage,
    },
    {
      property: `og:url`,
      content: siteUrl,
    },
    {
      name: `twitter:card`,
      content: `${isBlogPost ? 'summary_large_image' : 'summary'}`,
    },
    {
      name: `twitter:site`,
      content: twitterHandle,
    },
    {
      name: `twitter:title`,
      content: metaTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `twitter:img:src`,
      content: metaImage,
    },
  ];

  if (isBlogPost) {
    metaTags.push(
      {
        name: 'author',
        content: author,
      },
      {
        name: 'article:published_time',
        content: '20:20:20',
      },
      {
        name: 'article:modified_time',
        content: '20:20:20',
      }
    );
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${defaultTitle}`}
      defaultTitle={`${defaultTitle}`}
      meta={metaTags.concat(meta)}
      link={[{ rel: 'canonical', href: siteUrl }]}
    />
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
  isBlogPost: PropTypes.bool,
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: 'hh',
  image: '',
  isBlogPost: false,
};

export default SEO;
