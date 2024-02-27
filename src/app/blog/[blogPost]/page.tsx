'use client';
import PostBody from '@/components/Blog/PostBody';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import { FC } from 'react';

const BlogBody: FC<{ params: Params }> = ({ params }) => {
  const slug = params.blogPost;

  if (slug) {
    return <PostBody slug={slug as string} />;
  } else {
    return <h1>loading</h1>;
  }
};
export default BlogBody;
