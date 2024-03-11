export const dynamic = 'force-dynamic';
import { getAllBlogs } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);

  const dir = searchParams.get('dir') as string;
  try {
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
      dir
    );
    return NextResponse.json({ post: allPost });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' });
  }
}
