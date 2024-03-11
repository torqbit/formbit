export const dynamic = 'force-dynamic';
// import { getAllPosts } from '../../../lib/post';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const searchParams = new URLSearchParams(url.searchParams);
//   // const dir = searchParams.get('dir') as string;
//   try {
//     const allPost = getAllPosts([
//       'title',
//       'date',
//       'slug',
//       'author',
//       'link',
//       'content',
//       'ogImage',
//       'fileName',
//       'coverImage',
//       'excerpt',
//     ]);
//     return NextResponse.json({ post: allPost });
//   } catch (error) {
//     return NextResponse.json({ error: 'Server Error' });
//   }
// }

import { getAllPosts } from '../../../lib/post';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const allPost = getAllPosts([
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
    ]);
    return NextResponse.json({ post: allPost });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' });
  }
}
