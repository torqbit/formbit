'use client';
export const dynamic = 'force-dynamic';
import Blog from '@/components/Blog/Blog';
import React from 'react';
import { useEffect } from 'react';

const BlogPage = () => {
  const [allPost, setPost] = React.useState<
    [
      {
        coverImage: string;
        slug: string;
        title: string;
        date: string;
        excerpt: string;
        author: { picture: string; name: string };
      }
    ]
  >();

  const Post = async () => {
    try {
      const res = await fetch(`/api/allPosts?dir=post`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      const result = await res.json();
      setPost(result.post);
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    Post();
  }, []);

  return (
    <>
      <div>{allPost && <Blog morePost={allPost} />}</div>{' '}
    </>
  );
};
export default BlogPage;
