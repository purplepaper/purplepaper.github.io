import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

const pad = (n: number) => String(n).padStart(2, '0');

const titleOf = (post: Post) => post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '');

/** Short URL path: /zhe-factory/ */
export const postPath = (post: Post): string => titleOf(post).toLowerCase();

/** Old Jekyll "pretty" path (/:categories/:year/:month/:day/:title/), kept as a redirect. */
export function legacyPath(post: Post): string {
  const d = post.data.date;
  const categories = post.data.categories.split(/\s+/).filter(Boolean);
  return [...categories, d.getUTCFullYear(), pad(d.getUTCMonth() + 1), pad(d.getUTCDate()), titleOf(post)].join('/');
}

export const postUrl = (post: Post) => `/${postPath(post)}/`;

const showDrafts = import.meta.env.DEV || process.env.DRAFTS === '1';

/** Published posts, newest first. Drafts show in `npm run dev` or with DRAFTS=1. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', (p) => showDrafts || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export function readingMinutes(body = ''): number {
  return Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
}
