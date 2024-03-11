import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export const postDirectory = (dir: string) => join(process.cwd(), `${dir}`);

export function getPostSlugs(dir: string) {
  return fs.readdirSync(postDirectory(dir));
}

export function getPostBySlug(slug: string, dir: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postDirectory(dir), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content };
}

export async function getAllPosts(dir: string) {
  const slug = getPostSlugs(dir);
  console.log(slug, 'all slugs');
  const posts = slug
    .map((slug) => getPostBySlug(slug, dir))
    .sort((post1: any, post2: any) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
