import { gameItems, creatures, resources } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";

export const dynamic = "force-static";

const baseUrl = "https://lightnofirewiki.com";

export async function GET() {
  const itemsXml = gameItems
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.name)}</title>
      <link>${baseUrl}/items/${item.slug}</link>
      <guid>${baseUrl}/items/${item.slug}</guid>
      <description>${escapeXml(item.description)}</description>
    </item>`
    )
    .join("");

  const creatureXml = creatures
    .map(
      (c) => `
    <item>
      <title>${escapeXml(c.name)}</title>
      <link>${baseUrl}/creatures/${c.slug}</link>
      <guid>${baseUrl}/creatures/${c.slug}</guid>
      <description>${escapeXml(c.description)}</description>
    </item>`
    )
    .join("");

  const resourceXml = resources
    .map(
      (r) => `
    <item>
      <title>${escapeXml(r.name)}</title>
      <link>${baseUrl}/resources/${r.slug}</link>
      <guid>${baseUrl}/resources/${r.slug}</guid>
      <description>${escapeXml(r.description)}</description>
    </item>`
    )
    .join("");

  const blogXml = blogPosts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Light No Fire Wiki</title>
    <link>${baseUrl}</link>
    <description>Latest updates from the Light No Fire wiki, database, and blog.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${blogXml}
    ${itemsXml}
    ${creatureXml}
    ${resourceXml}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
