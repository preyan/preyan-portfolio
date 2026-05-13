import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { features } from '../config/features';

export async function GET(context) {
  if (!features.showBlog) {
    return new Response(null, { status: 404 });
  }
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Preyan Bhowmick — Blog',
    description:
      'Writing on software engineering, the practice of shipping, and lessons from seven years in production.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.id}/`,
      })),
    customData: `<language>en</language>`,
  });
}
