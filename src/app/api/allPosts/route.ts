import { getAllPosts } from '../../../lib/post';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const allPost = getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'content',
      'ogImage',
      'coverImage',
      'excerpt',
    ]);
    return NextResponse.json({ post: allPost });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' });
  }
}
