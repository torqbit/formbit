export const dynamic = 'force-dynamic';
import { getAllBlogs } from '@/lib/blog';
import { getAllPosts } from '@/lib/post';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const dir = searchParams.get('dir') as string;
  try {
    if (dir === 'changelog') {
      const allPost = getAllPosts(
        [
          'title',
          'date',
          'slug',
          'author',
          'link',
          'content',
          'ogImage',
          'fileName',
          'coverImage',
          'excerpt',
        ],
        'changelog'
      );
      return NextResponse.json({ post: allPost });
    } else if (dir === 'post') {
      const allPost = getAllBlogs(
        [
          'title',
          'date',
          'slug',
          'author',
          'link',
          'content',
          'ogImage',
          'fileName',
          'coverImage',
          'excerpt',
        ],
        'post'
      );
      return NextResponse.json({ post: allPost });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Server Error', error });
  }
}
