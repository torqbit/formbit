export const dynamic = 'force-dynamic';

import { getPostBySlug } from '@/lib/post';

import markdown from '@/lib/markdownToHtml';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const slug = request.nextUrl.searchParams.get('slug');
    const dir = request.nextUrl.searchParams.get('dir');

    if (slug && dir) {
      const post = await getPostBySlug(
        slug as string,
        [
          'title',
          'date',
          'author',
          'content',
          'ogImage',
          'fileName',
          'link',
          'coverImage',
          'excerpt',
        ],
        dir
      );

      const content = await markdown(post.content || '');
      console.log(post, 'this is single post');

      return NextResponse.json({ success: true, post: post, content });
    } else if (!slug) {
      return NextResponse.json({ success: false, message: 'field is empty' });
    }
  } catch (error) {
    console.log(error, 'this is error in slug api');

    return NextResponse.json({ success: false, error: error });
  }
}
