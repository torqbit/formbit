export const dynamic = 'force-dynamic';
import { getAllPosts } from '../../../lib/post';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const dir = request.nextUrl.searchParams.get('dir');
  try {
    if (dir) {
      const allPost = getAllPosts(dir);
      console.log(allPost, 'this is all post');
      return NextResponse.json({ post: allPost });
    }
  } catch (error) {
    console.log(error, 'this is error in all post api');
    return NextResponse.json({ error: 'Server Error' });
  }
}
