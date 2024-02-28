'use client';
import PostBody from '@/components/Blog/PostBody';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import { FC } from 'react';

const BlogBody: FC<{ params: Params }> = ({ params }) => {
  const slug = params.blogPost;

  if (slug) {
    return <PostBody slug={slug as string} />;
  } else {
    return (
      <button type='button' className='... bg-indigo-500' disabled>
        <svg
          className='... mr-3 h-5 w-5 animate-spin'
          viewBox='0 0 24 24'
        ></svg>
        Processing...
      </button>
    );
  }
};
export default BlogBody;
