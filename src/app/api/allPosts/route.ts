export const dynamic = 'force-dynamic';
import { getAllPosts } from '../../../lib/post';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const dir = request.nextUrl.searchParams.get('dir');
  try {
    if (dir) {
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
        dir
      );
      return NextResponse.json({ post: allPost });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' });
  }
}
