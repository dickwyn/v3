import React from 'react';
import Layout from '../components/layout';
import getDevelopmentPosts from '../utils/get-development-posts';
import PostPreview from '../components/post-preview';

const BlogPage = () => {
  const posts = process.env.NODE_ENV === 'development' ? getDevelopmentPosts() : getPosts();

  return (
    <Layout page="Blog">
      <div className="hero-container">
        <div className="content-container">
          {posts.length > 0
            ? posts.map(post => <PostPreview key={post.slug} post={post} />)
            : 'new posts coming soon. stay tuned.'}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
