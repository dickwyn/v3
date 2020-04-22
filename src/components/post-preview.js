import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import moment from 'moment';

const PostPreview = ({ post }) => (
  <div className="post-preview">
    <p className="timestamp">
      {moment.duration(moment(new Date()).diff(post.date)).asDays() < 90
        ? moment(post.date)
            .local()
            .format('MMM DD')
        : moment(post.date)
            .local()
            .format('MMM YYYY')}
    </p>
    <h2 className="title">
      <Link to={`blog${post.slug}`}>{post.title}</Link>
    </h2>

    {post.subtitle && <h3 className="subtitle">{post.subtitle}</h3>}
    <p className="description">{post.description}</p>
    <Link to={`blog${post.slug}`}>continue reading →</Link>
  </div>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
  }).isRequired,
};

PostPreview.defaultProps = {
  post: PropTypes.shape({
    subtitle: '',
  }).isRequired,
};

export default PostPreview;
