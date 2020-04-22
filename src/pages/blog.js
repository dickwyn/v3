import React from 'react';
import Layout from '../components/layout';
import getDevelopmentPosts from '../utils/get-development-posts';
import getPosts from '../utils/get-posts';
import PostPreview from '../components/post-preview';

const BlogPage = () => {
  const posts = [
    ...getPosts(),
    ...(process.env.NODE_ENV === 'development' ? getDevelopmentPosts() : []),
  ];

  return (
    <Layout page="Blog">
      <div className="wrapper">
        <div className="content-container with-padding">
          {posts.length > 0
            ? posts.map(post => <PostPreview key={post.slug} post={post} />)
            : 'new posts coming soon. stay tuned.'}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
