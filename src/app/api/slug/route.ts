import { getPostBySlug } from '@/lib/post';

import markdown from '@/lib/markdownToHtml';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const slug = searchParams.get('slug');

    if (slug) {
      const post = getPostBySlug(slug as string, [
        'title',
        'date',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'excerpt',
      ]);

      const content = await markdown(post.content || '');

      return NextResponse.json({ success: true, post: post, content });
    } else if (!slug) {
      return NextResponse.json({ success: false, message: 'field is empty' });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
