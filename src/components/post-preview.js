import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import moment from 'moment';

const PostPreview = ({
  post: {
    fields: { slug },
    frontmatter: { date, title, subtitle, description },
  },
}) => (
  <div className="post-preview">
    <p className="timestamp">
      {moment.duration(moment(new Date()).diff(date)).asDays() < 90
        ? moment(date)
            .local()
            .format('MMM DD')
        : moment(date)
            .local()
            .format('MMM YYYY')}
    </p>
    <h2 className="title">
      <Link to={`blog${slug}`}>{title}</Link>
    </h2>

    {subtitle && <h3 className="subtitle">{subtitle}</h3>}
    <p className="description">{description}</p>
    <Link to={`blog${slug}`}>continue reading →</Link>
  </div>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

PostPreview.defaultProps = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      subtitle: '',
    }),
  }),
};

export default PostPreview;
